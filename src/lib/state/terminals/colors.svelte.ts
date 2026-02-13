import type {
    ThemeInfo,
    TerminalColors,
    UiColors,
    Colors,
    CssVariables,
    ThemeGenerationOptions,
    SelectedColor,
    TerminalTarget,
    WarpExtras,
    GhosttyExtras,
    WezTermExtras
} from '$lib/types/terminals/colors';
import {
    generateTheme,
    deriveWarpExtras,
    deriveGhosttyExtras,
    deriveWezTermExtras
} from '$lib/utils/terminals/theme.svelte';
import {
    exportWarpYaml,
    exportGhosttyConfig,
    exportWezTermToml
} from '$lib/utils/terminals/exporters';
import type { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

let themeInfo = $state<ThemeInfo>({
    name: 'Custom Theme',
    details: 'darker'
});

let terminalTarget = $state<TerminalTarget>('warp');

let uiColors = $state<UiColors>({
    background: '#000000',
    foreground: '#ffffff',
    cursor: '#ffffff'
});

let brightColors = $state<Colors>({
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    yellow: '#ffff00',
    blue: '#0000ff',
    magenta: '#ff00ff',
    cyan: '#00ffff',
    white: '#ffffff'
});

let normalColors = $state<Colors>({
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    yellow: '#ffff00',
    blue: '#0000ff',
    magenta: '#ff00ff',
    cyan: '#00ffff',
    white: '#ffffff'
});

const terminalColors = $derived<TerminalColors>({
    bright: brightColors,
    normal: normalColors
});

// Auto-derived terminal-specific extras
const warpExtras = $derived<WarpExtras>(
    deriveWarpExtras(uiColors, themeInfo.details === 'darker')
);

const ghosttyExtras = $derived<GhosttyExtras>(deriveGhosttyExtras(uiColors));

const wezTermExtras = $derived<WezTermExtras>(deriveWezTermExtras(uiColors));

// Reactive theme string based on selected terminal target
const themeString = $derived.by(() => {
    switch (terminalTarget) {
        case 'warp':
            return exportWarpYaml(themeInfo, uiColors, warpExtras, terminalColors);
        case 'ghostty':
            return exportGhosttyConfig(uiColors, ghosttyExtras, terminalColors);
        case 'wezterm':
            return exportWezTermToml(themeInfo, uiColors, wezTermExtras, terminalColors);
        default:
            return exportWarpYaml(themeInfo, uiColors, warpExtras, terminalColors);
    }
});

let lockedColors = $state<Record<string, string>>({});

let selectedColor = $state<SelectedColor | null>(null);

export function getThemeState() {
    function setThemeInfo(value: ThemeInfo) {
        themeInfo = value;
    }
    function setThemeDetails(value: 'darker' | 'lighter') {
        themeInfo.details = value;
    }
    function setTerminalTarget(value: TerminalTarget) {
        terminalTarget = value;
    }
    function setUiColors(value: UiColors) {
        uiColors = value;
    }
    function setUiColor(key: keyof UiColors, value: string) {
        uiColors[key] = value;
        updateCssVariables({ uiColors, brightColors, normalColors });
    }
    function setBrightColors(value: Colors) {
        brightColors = value;
    }
    function setBrightColor(key: keyof Colors, value: string) {
        brightColors[key] = value;
        updateCssVariables({ uiColors, brightColors, normalColors });
    }
    function setNormalColors(value: Colors) {
        normalColors = value;
    }
    function setNormalColor(key: keyof Colors, value: string) {
        normalColors[key] = value;
        updateCssVariables({ uiColors, brightColors, normalColors });
    }

    function setLockedColors(value: Record<string, string>) {
        lockedColors = value;
    }
    function toggleLockedColor(key: string, color: string) {
        if (lockedColors[key]) {
            delete lockedColors[key];
        } else {
            lockedColors[key] = color;
        }
    }
    function setSelectedColor(value: SelectedColor | null) {
        selectedColor = value;
    }

    function generate(isDark: boolean, baseHue: number, scheme: ColorSchemes) {
        const options: ThemeGenerationOptions = {
            isDark: isDark,
            baseHue: baseHue,
            scheme: scheme,
            lockedColors: lockedColors
        };
        const cssVariables = generateTheme(options);
        setUiColors(cssVariables.uiColors);
        setBrightColors(cssVariables.brightColors);
        setNormalColors(cssVariables.normalColors);
        updateCssVariables(cssVariables);
    }

    function updateCssVariables(theme: CssVariables) {
        const terminalMock = document.getElementById('terminal-mock') as HTMLElement;
        if (!terminalMock) return;
        // Update CSS variables
        for (const [key, value] of Object.entries(theme.uiColors)) {
            terminalMock.style.setProperty(`--${key}`, value);
        }
        for (const [key, value] of Object.entries(theme.brightColors)) {
            terminalMock.style.setProperty(`--bright-${key}`, value);
        }
        for (const [key, value] of Object.entries(theme.normalColors)) {
            terminalMock.style.setProperty(`--normal-${key}`, value);
        }
    }

    return () => ({
        themeInfo,
        terminalTarget,
        uiColors,
        brightColors,
        normalColors,
        terminalColors,
        lockedColors,
        warpExtras,
        ghosttyExtras,
        wezTermExtras,
        themeString,
        selectedColor,
        generate,
        setThemeInfo,
        setTerminalTarget,
        setUiColors,
        setUiColor,
        setBrightColors,
        setBrightColor,
        setNormalColors,
        setNormalColor,
        setLockedColors,
        toggleLockedColor,
        setThemeDetails,
        setSelectedColor
    });
}
