interface ColorValue {
    hex: string;
    alpha?: string;
}

interface ThemeColor {
    value: ColorValue;
    usage: string[];
    variableName: string;
}

interface OpacityValue {
    color: string; // Variable name of the color
    alpha: number; // Normalized opacity value (0-1)
    usage: string[];
}

interface ThemeVariables {
    colors: Map<string, ThemeColor>; // key is the variable name
    opacities: Map<string, OpacityValue>; // key is the opacity variable name
    hexToVar: Map<string, string>; // mapping from hex to variable name for lookup
}

interface ProcessedTheme {
    variables: ThemeVariables;
    theme: any;
    metadata: {
        type?: string;
        name?: string;
        author?: string;
    };
}

function parseColor(color: string): ColorValue {
    // Handle colors with alpha channel
    if (color.length === 9 && color.startsWith('#')) {
        return {
            hex: color.slice(0, 7),
            alpha: color.slice(7)
        };
    }
    // Handle colors with alpha in rgb/rgba format
    if (color.startsWith('rgba')) {
        const matches = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (matches) {
            const [_, r, g, b, a] = matches;
            const hex = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;
            return {
                hex,
                alpha: a ? Math.round(Number(a) * 255).toString(16).padStart(2, '0') : undefined
            };
        }
    }
    return { hex: color };
}

function generateVariableName(usages: string[]): string {
    // Common color contexts to check for
    const contexts = {
        foreground: ['foreground', 'fg', 'text', 'color'],
        background: ['background', 'bg'],
        border: ['border', 'outline', 'shadow'],
        accent: ['accent', 'focus', 'active', 'highlight'],
        error: ['error', 'invalid', 'warning'],
        link: ['link', 'url'],
        selection: ['selection', 'selected', 'highlight'],
        comment: ['comment', 'documentation', 'docstring'],
        string: ['string', 'quoted'],
        keyword: ['keyword', 'storage', 'modifier'],
        function: ['function', 'method'],
        variable: ['variable', 'parameter'],
        type: ['type', 'class', 'interface'],
        constant: ['constant', 'literal'],
        markup: ['markup', 'markdown', 'heading']
    };

    // Count occurrences of each context in usages
    const contextScores = new Map<string, number>();
    
    usages.forEach(usage => {
        const lowerUsage = usage.toLowerCase();
        Object.entries(contexts).forEach(([context, keywords]) => {
            if (keywords.some(keyword => lowerUsage.includes(keyword))) {
                contextScores.set(context, (contextScores.get(context) || 0) + 1);
            }
        });
    });

    // Get the most common context
    let primaryContext = 'color';
    let highestScore = 0;
    
    contextScores.forEach((score, context) => {
        if (score > highestScore) {
            highestScore = score;
            primaryContext = context;
        }
    });

    // Add a numeric suffix if needed to make the name unique
    return primaryContext;
}

function colorToVariable(color: ThemeColor, variables: ThemeVariables, usage: string): string {
    const originalColor = `${color.value.hex}${color.value.alpha || ''}`;
    
    if (color.value.alpha) {
        const alpha = parseInt(color.value.alpha, 16) / 255;
        const opacityKey = originalColor;
        
        if (!variables.opacities.has(opacityKey)) {
            variables.opacities.set(opacityKey, {
                color: color.variableName,
                alpha,
                usage: [usage]
            });
        } else {
            variables.opacities.get(opacityKey)!.usage.push(usage);
        }
        
        return `opacity($\{colors.${color.variableName}}, ${alpha})`;
    }
    
    return `$\{colors.${color.variableName}}`;
}

export function processVSCodeTheme(themeJson: any): ProcessedTheme {
    const variables: ThemeVariables = {
        colors: new Map(),
        opacities: new Map(),
        hexToVar: new Map()
    };

    const colorUsages = new Map<string, string[]>();

    // Function to process a color value and track its usage
    function processColor(colorStr: string, usage: string): void {
        const colorValue = parseColor(colorStr);
        const hex = colorValue.hex.toLowerCase();
        
        if (!colorUsages.has(hex)) {
            colorUsages.set(hex, [usage]);
        } else {
            colorUsages.get(hex)!.push(usage);
        }
    }

    // Process all colors from all sections
    function traverseAndCollectColors(obj: any, path: string[] = []): void {
        if (typeof obj !== 'object' || obj === null) return;

        Object.entries(obj).forEach(([key, value]) => {
            const currentPath = [...path, key];
            
            if (typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgb'))) {
                processColor(value, currentPath.join('.'));
            } else if (typeof value === 'object' && value?.foreground) {
                processColor(value.foreground, `${currentPath.join('.')}.foreground`);
            }

            traverseAndCollectColors(value, currentPath);
        });
    }

    // First pass: collect all colors and their usages
    traverseAndCollectColors(themeJson);

    // Generate variable names and create color entries
    const usedNames = new Set<string>();

    colorUsages.forEach((usages, hex) => {
        let baseName = generateVariableName(usages);
        let name = baseName;
        let counter = 1;
        
        // Ensure unique names
        while (usedNames.has(name)) {
            name = `${baseName}_${counter}`;
            counter++;
        }
        
        usedNames.add(name);
        variables.hexToVar.set(hex, name);
        variables.colors.set(name, {
            value: { hex },
            usage: usages,
            variableName: name
        });
    });

    // Create a new theme object with variable references
    const processedTheme = JSON.parse(JSON.stringify(themeJson));

    // Replace all color values with variable references
    function traverseAndReplaceColors(obj: any, path: string[] = []): any {
        if (typeof obj !== 'object' || obj === null) return obj;

        if (typeof obj === 'string' && (obj.startsWith('#') || obj.startsWith('rgb'))) {
            const colorValue = parseColor(obj);
            const varName = variables.hexToVar.get(colorValue.hex.toLowerCase());
            if (varName) {
                const color = variables.colors.get(varName)!;
                return colorToVariable(color, variables, path.join('.'));
            }
        }

        if (typeof obj === 'object') {
            Object.entries(obj).forEach(([key, value]) => {
                const newPath = [...path, key];
                if (key === 'foreground' && typeof value === 'string') {
                    const colorValue = parseColor(value);
                    const varName = variables.hexToVar.get(colorValue.hex.toLowerCase());
                    if (varName) {
                        const color = variables.colors.get(varName)!;
                        obj[key] = colorToVariable(color, variables, newPath.join('.'));
                    }
                } else {
                    obj[key] = traverseAndReplaceColors(value, newPath);
                }
            });
        }

        return obj;
    }

    // Second pass: replace all colors with variable references
    processedTheme = traverseAndReplaceColors(processedTheme, []);

    return {
        variables,
        theme: processedTheme,
        metadata: {
            type: themeJson.type,
            name: themeJson.name,
            author: themeJson.author
        }
    };
}

export function extractColorPalette(theme: ProcessedTheme): string[] {
    const uniqueColors = new Set<string>();
    
    theme.variables.colors.forEach(color => {
        uniqueColors.add(color.value.hex);
    });
    
    return Array.from(uniqueColors);
}
