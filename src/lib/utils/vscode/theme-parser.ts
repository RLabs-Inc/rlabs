import { wcagLuminance } from 'culori';
import type { UIColors, SyntaxColors, AnsiColors } from '$lib/types/vscode/color';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';

const uiColorsState = getUiColors();
const syntaxColorsState = getSyntaxColors();
const ansiColorsState = getAnsiColors();

// Types for color references
type ColorVariable =
  | `colors.${keyof UIColors}`
  | `syntaxColors.${keyof SyntaxColors}`
  | `ansiColors.${keyof AnsiColors}`;

type ColorFunction = string;
// | getAC1Foreground()
// | getAC2Foreground()
// | getINFOForeground()
// | getWARNINGForeground()
// | getERRORForeground()
// | getColorWithOpacity(ColorVariable, string)

export type ColorReference = ColorVariable | ColorFunction;

export interface TokenColor {
  name?: string;
  scope: string[] | string;
  settings: {
    foreground?: ColorReference;
    background?: ColorReference;
    fontStyle?: string;
  };
}

export interface ThemeJson {
  name: string;
  type: 'dark' | 'light';
  semanticClass?: string;
  semanticHighlighting?: boolean;
  colors: Record<string, string>;
  tokenColors: Array<{
    name?: string;
    scope: string[] | string;
    settings: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }>;
  semanticTokenColors?: Record<string, string | { foreground: string; fontStyle?: string }>;
}

export interface ParsedTheme {
  name: string;
  type: 'dark' | 'light';
  semanticClass: string;
  semanticHighlighting: boolean;
  colors: Record<string, ColorReference>;
  tokenColors: TokenColor[];
  semanticTokens: Record<
    string,
    ColorReference | { foreground: ColorReference; fontStyle?: string }
  >;
}

// Helper functions (exported for use in generating the final theme)
export const getAC1Foreground = (colors: UIColors): string => {
  if (wcagLuminance(colors.BG1) < 0.5) {
    return wcagLuminance(colors.AC1) < 0.5 ? colors.FG1 : colors.FG3;
  } else {
    return wcagLuminance(colors.AC1) < 0.5 ? colors.FG3 : colors.FG1;
  }
};

export const getAC2Foreground = (colors: UIColors): string => {
  if (wcagLuminance(colors.BG1) < 0.5) {
    return wcagLuminance(colors.AC2) < 0.5 ? colors.FG1 : colors.FG3;
  } else {
    return wcagLuminance(colors.AC2) < 0.5 ? colors.FG3 : colors.FG1;
  }
};

export const getINFOForeground = (colors: UIColors): string => {
  if (wcagLuminance(colors.BG1) < 0.5) {
    return wcagLuminance(colors.INFO) < 0.5 ? colors.FG1 : colors.FG3;
  } else {
    return wcagLuminance(colors.INFO) < 0.5 ? colors.FG3 : colors.FG1;
  }
};

export const getWARNINGForeground = (colors: UIColors): string => {
  if (wcagLuminance(colors.BG1) < 0.5) {
    return wcagLuminance(colors.WARNING) < 0.5 ? colors.FG1 : colors.FG3;
  } else {
    return wcagLuminance(colors.WARNING) < 0.5 ? colors.FG3 : colors.FG1;
  }
};

export const getERRORForeground = (colors: UIColors): string => {
  if (wcagLuminance(colors.BG1) < 0.5) {
    return wcagLuminance(colors.ERROR) < 0.5 ? colors.FG1 : colors.FG3;
  } else {
    return wcagLuminance(colors.ERROR) < 0.5 ? colors.FG3 : colors.FG1;
  }
};
export const getSUCCESSForeground = (colors: UIColors): string => {
  if (wcagLuminance(colors.BG1) < 0.5) {
    return wcagLuminance(colors.SUCCESS) < 0.5 ? colors.FG1 : colors.FG3;
  } else {
    return wcagLuminance(colors.SUCCESS) < 0.5 ? colors.FG3 : colors.FG1;
  }
};

export const getSelectionForeground = (colors: UIColors): string => {
  if (wcagLuminance(colors.BG1) < 0.5) {
    return wcagLuminance(colors.selection) < 0.5 ? colors.FG1 : colors.FG3;
  } else {
    return wcagLuminance(colors.selection) < 0.5 ? colors.FG3 : colors.FG1;
  }
};

export const getColorWithOpacity = (color: string, opacity: string): string => {
  if (color.length > 7) {
    return color.slice(0, -2) + opacity;
  } else {
    return color + opacity;
  }
};

// Helper to find the matching color variable
const findColorVariable = (
  color: string,
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors
): ColorVariable | undefined => {
  // Check UI colors
  for (const [key, value] of Object.entries(colors)) {
    if (value.toLowerCase() === color.toLowerCase()) {
      return `colors.${key}` as ColorVariable;
    }
  }

  // Check syntax colors
  for (const [key, value] of Object.entries(syntaxColors)) {
    if (value.toLowerCase() === color.toLowerCase()) {
      return `syntaxColors.${key}` as ColorVariable;
    }
  }

  // Check ANSI colors
  for (const [key, value] of Object.entries(ansiColors)) {
    if (value.toLowerCase() === color.toLowerCase()) {
      return `ansiColors.${key}` as ColorVariable;
    }
  }

  return undefined;
};

// Helper to check if a color has opacity
const hasOpacity = (color: string): boolean => {
  return color.length > 7 && color.slice(-2).toLowerCase() !== 'ff';
};

// Helper to extract base color and opacity
const extractBaseColorAndOpacity = (color: string): [string, string] | undefined => {
  if (!hasOpacity(color)) return undefined;
  return [color.slice(0, -2) + 'ff', color.slice(-2)];
};

// Helper to check if a color might be generated by a helper function
const findHelperFunction = (
  color: string,
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors
): ColorFunction | undefined => {
  // Check for opacity variants first
  const opacityMatch = extractBaseColorAndOpacity(color);
  if (opacityMatch) {
    const [baseColor, opacity] = opacityMatch;
    const baseVar = findColorVariable(baseColor, colors, syntaxColors, ansiColors);
    if (baseVar) {
      return `getColorWithOpacity(${findColorVariable(baseColor, colors, syntaxColors, ansiColors)}, '${opacity}')`;
    }
  }

  // Check each helper function
  const testColor = color.toLowerCase();

  if (getAC1Foreground(colors).toLowerCase() === testColor) {
    return 'getAC1Foreground()';
  }
  if (getAC2Foreground(colors).toLowerCase() === testColor) {
    return 'getAC2Foreground()';
  }
  if (getINFOForeground(colors).toLowerCase() === testColor) {
    return 'getINFOForeground()';
  }
  if (getWARNINGForeground(colors).toLowerCase() === testColor) {
    return 'getWARNINGForeground()';
  }
  if (getERRORForeground(colors).toLowerCase() === testColor) {
    return 'getERRORForeground()';
  }

  return undefined;
};

// Helper to create a color reference
const createColorReference = (
  color: string,
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors
): ColorReference => {
  const directMatch = findColorVariable(color, colors, syntaxColors, ansiColors);
  if (directMatch) return directMatch;

  const helperMatch = findHelperFunction(color, colors, syntaxColors, ansiColors);
  if (helperMatch) return helperMatch;

  // Default to using the first color variable as a fallback
  return color;
};

// Helper to evaluate a color reference
// export const evaluateColorReference = (
//   ref: ColorReference,
//   colors: UIColors,
//   syntaxColors: SyntaxColors,
//   ansiColors: AnsiColors
// ): string => {
//   if (typeof ref === 'string') {
//     const [namespace, key] = ref.split('.');
//     switch (namespace) {
//       case 'colors':
//         return colors[key as keyof UIColors];
//       case 'syntaxColors':
//         return syntaxColors[key as keyof SyntaxColors];
//       case 'ansiColors':
//         return ansiColors[key as keyof AnsiColors];
//       default:
//         return '';
//     }
//   }

//   if ('args' in ref) {
//     const [colorVar, opacity] = ref.args;
//     const baseColor = evaluateColorReference(colorVar, colors, syntaxColors, ansiColors);
//     return getColorWithOpacity(baseColor, opacity);
//   }

//   return '';
// };

// Main parser function
export const parseLocalTheme = (
  themeJson: ThemeJson,
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors
): ParsedTheme => {
  // Parse basic theme properties
  const theme: ParsedTheme = {
    name: themeJson.name,
    type: wcagLuminance(colors.BG1) < 0.5 ? 'dark' : 'light',
    semanticClass: themeJson.semanticClass || 'theme.rlabs',
    semanticHighlighting: themeJson.semanticHighlighting || true,
    colors: {},
    tokenColors: [],
    semanticTokens: {}
  };

  // Parse colors section
  for (const [token, color] of Object.entries(themeJson.colors)) {
    theme.colors[token] = createColorReference(color, colors, syntaxColors, ansiColors);
  }

  // Parse tokenColors section
  theme.tokenColors = themeJson.tokenColors.map((token) => {
    const settings: TokenColor['settings'] = {};

    if (token.settings.foreground) {
      settings.foreground = createColorReference(
        token.settings.foreground,
        colors,
        syntaxColors,
        ansiColors
      );
    }

    if (token.settings.background) {
      settings.background = createColorReference(
        token.settings.background,
        colors,
        syntaxColors,
        ansiColors
      );
    }

    if (token.settings.fontStyle) {
      settings.fontStyle = token.settings.fontStyle;
    }

    return {
      name: token.name,
      scope: token.scope,
      settings
    };
  });

  // Parse semanticTokens section
  if (themeJson.semanticTokenColors) {
    for (const [token, value] of Object.entries(themeJson.semanticTokenColors)) {
      if (typeof value === 'string') {
        theme.semanticTokens[token] = createColorReference(value, colors, syntaxColors, ansiColors);
      } else if (typeof value === 'object' && value !== null) {
        theme.semanticTokens[token] = {
          foreground: createColorReference(value.foreground, colors, syntaxColors, ansiColors),
          ...(value.fontStyle && { fontStyle: value.fontStyle })
        };
      }
    }
  }

  return theme;
};

const organizeColorForToken = (color: string, token: string) => {
  console.log(color, token);
  if (token.includes('editor.background')) uiColorsState().uiColors.BG1 = color;
  if (token.includes('activityBar.background')) uiColorsState().uiColors.BG2 = color;
  if (token.includes('sideBar.border')) uiColorsState().uiColors.BORDER = color;
  if (token.includes('activityBar.activeBorder')) uiColorsState().uiColors.AC1 = color;
  if (token.includes('badge.background')) uiColorsState().uiColors.AC2 = color;
  if (token.includes('editor.foreground')) uiColorsState().uiColors.FG1 = color;
  if (token.includes('sideBar.foreground')) uiColorsState().uiColors.FG2 = color;
  if (token.includes('editor.selectionHighlightBackground'))
    uiColorsState().uiColors.selection = color;
  if (token.includes('editor.lineHighlightBackground'))
    uiColorsState().uiColors.lineHighlight = color;
  if (token.includes('editor.findMatchBackground')) uiColorsState().uiColors.findMatch = color;
  if (token.includes('editorGutter.modifiedBackground')) uiColorsState().uiColors.INFO = color;
  if (token.includes('editorGutter.addedBackground')) uiColorsState().uiColors.SUCCESS = color;
  if (token.includes('error.foreground')) uiColorsState().uiColors.ERROR = color;
  if (token.includes('warning.foreground')) uiColorsState().uiColors.WARNING = color;
};

const organizeColorForSyntaxToken = (
  color: string,
  token: string,
  name: string,
  scope: string[] | string
) => {
  console.log(color, token, name, scope);
  const scopeText = Array.isArray(scope) ? scope.join(' ') : scope;
  if (scopeText.includes('variable')) syntaxColorsState().syntaxColors.variable = color;
  if (scopeText.includes('comment')) syntaxColorsState().syntaxColors.comment = color;
  if (scopeText.includes('punctuation')) syntaxColorsState().syntaxColors.punctuation = color;
  if (scopeText.includes('keyword')) syntaxColorsState().syntaxColors.keyword = color;
  if (scopeText.includes('function')) syntaxColorsState().syntaxColors.function = color;
  if (scopeText.includes('parameter')) syntaxColorsState().syntaxColors.parameter = color;
  if (scopeText.includes('attribute')) syntaxColorsState().syntaxColors.attribute = color;
  if (scopeText.includes('support')) syntaxColorsState().syntaxColors.support = color;
  if (scopeText.includes('type')) syntaxColorsState().syntaxColors.type = color;
  if (scopeText.includes('constant')) syntaxColorsState().syntaxColors.constant = color;
  if (scopeText.includes('language')) syntaxColorsState().syntaxColors.language = color;
  if (scopeText.includes('storage')) syntaxColorsState().syntaxColors.storage = color;
  if (scopeText.includes('control')) syntaxColorsState().syntaxColors.control = color;
  if (scopeText.includes('modifier')) syntaxColorsState().syntaxColors.modifier = color;
  if (scopeText.includes('other')) syntaxColorsState().syntaxColors.other = color;
  if (scopeText.includes('class')) syntaxColorsState().syntaxColors.class = color;
  if (scopeText.includes('tag')) syntaxColorsState().syntaxColors.tag = color;
  if (scopeText.includes('property')) syntaxColorsState().syntaxColors.property = color;
  if (scopeText.includes('operator')) syntaxColorsState().syntaxColors.operator = color;
};

// Parser for not local theme
export const parseAnyTheme = (themeJson: ThemeJson): ParsedTheme => {
  const theme: ParsedTheme = {
    name: themeJson.name,
    type: themeJson.type,
    semanticClass: themeJson.semanticClass || '',
    semanticHighlighting: themeJson.semanticHighlighting || false,
    colors: {},
    tokenColors: [],
    semanticTokens: {}
  };

  // Parse colors section
  for (const [token, color] of Object.entries(themeJson.colors)) {
    organizeColorForToken(color, token);
  }

  themeJson.tokenColors.map((token) => {
    console.log(token);
    if (token.settings.foreground) {
      organizeColorForSyntaxToken(
        token.settings.foreground,
        'foreground',
        token.name || '',
        token.scope || ''
      );
    }
    // if (token.settings.background) {
    //   organizeColorForSyntaxToken(
    //     token.settings.background,
    //     'background',
    //     token.name || '',
    //     token.scope
    //   );
    // }
  });

  for (const [token, color] of Object.entries(themeJson.colors)) {
    theme.colors[token] = createColorReference(
      color,
      uiColorsState().uiColors,
      syntaxColorsState().syntaxColors,
      ansiColorsState().ansiColors
    );
  }
  theme.tokenColors = themeJson.tokenColors.map((token) => {
    const settings: TokenColor['settings'] = {};
    if (token.settings.foreground) {
      settings.foreground = createColorReference(
        token.settings.foreground,
        uiColorsState().uiColors,
        syntaxColorsState().syntaxColors,
        ansiColorsState().ansiColors
      );
    }
    if (token.settings.background) {
      settings.background = createColorReference(
        token.settings.background,
        uiColorsState().uiColors,
        syntaxColorsState().syntaxColors,
        ansiColorsState().ansiColors
      );
    }
    if (token.settings.fontStyle) {
      settings.fontStyle = token.settings.fontStyle;
    }
    return {
      name: token.name,
      scope: token.scope,
      settings
    };
  });

  // Parse semanticTokens section
  if (themeJson.semanticTokenColors) {
    for (const [token, value] of Object.entries(themeJson.semanticTokenColors)) {
      if (typeof value === 'string') {
        theme.semanticTokens[token] = createColorReference(
          value,
          uiColorsState().uiColors,
          syntaxColorsState().syntaxColors,
          ansiColorsState().ansiColors
        );
      } else if (typeof value === 'object' && value !== null) {
        theme.semanticTokens[token] = {
          foreground: createColorReference(
            value.foreground,
            uiColorsState().uiColors,
            syntaxColorsState().syntaxColors,
            ansiColorsState().ansiColors
          ),
          ...(value.fontStyle && { fontStyle: value.fontStyle })
        };
      }
    }
  }

  return theme;
};
