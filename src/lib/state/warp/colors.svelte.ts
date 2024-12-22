import type {
  WarpTheme,
  ThemeInfo,
  TerminalColors,
  UiColors,
  Colors,
  CssVariables,
  ThemeGenerationOptions
} from '$lib/types/warp/colors';
import { generateTheme } from '$lib/utils/warp/theme.svelte';
import type { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

let themeInfo = $state<ThemeInfo>({
  name: 'Custom Theme',
  details: 'darker'
});

let uiColors = $state<UiColors>({
  background: '#000000',
  foreground: '#ffffff',
  accent: '#ffffff',
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

const ymlString = $derived(`
name: '${themeInfo.name}'
accent: '${uiColors.accent}'
cursor: '${uiColors.cursor}'
background: '${uiColors.background}'
foreground: '${uiColors.foreground}'
details: '${themeInfo.details}'
terminal_colors: 
    bright:
        black: '${brightColors.black}'
        blue: '${brightColors.blue}'
        cyan: '${brightColors.cyan}'
        green: '${brightColors.green}'
        magenta: '${brightColors.magenta}'
        red: '${brightColors.red}'
        white: '${brightColors.white}'
        yellow: '${brightColors.yellow}'
    normal:
        black: '${normalColors.black}'
        blue: '${normalColors.blue}'
        cyan: '${normalColors.cyan}'
        green: '${normalColors.green}'
        magenta: '${normalColors.magenta}'
        red: '${normalColors.red}'
        white: '${normalColors.white}'
        yellow: '${normalColors.yellow}'
`);

const terminalColors = $derived<TerminalColors>({
  bright: brightColors,
  normal: normalColors
});

const theme = $derived<WarpTheme>({
  ...themeInfo,
  ...uiColors,
  terminal_colors: terminalColors
});

let lockedColors = $state<Record<string, string>>({});

export function getThemeState() {
  function setThemeInfo(value: ThemeInfo) {
    themeInfo = value;
  }
  function setThemeDetails(value: 'darker' | 'lighter') {
    themeInfo.details = value;
  }
  function setUiColors(value: UiColors) {
    uiColors = value;
  }
  function setUiColor(key: keyof UiColors, value: string) {
    uiColors[key] = value;
  }
  function setBrightColors(value: Colors) {
    brightColors = value;
  }
  function setBrightColor(key: keyof Colors, value: string) {
    brightColors[key] = value;
  }
  function setNormalColors(value: Colors) {
    normalColors = value;
  }
  function setNormalColor(key: keyof Colors, value: string) {
    normalColors[key] = value;
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

  function generate(isDark: boolean, baseHue: number, scheme: ColorSchemes) {
    console.log(isDark);
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
    const warpMock = document.getElementById('warp-mock') as HTMLElement;
    // Update CSS variables
    for (const [key, value] of Object.entries(theme.uiColors)) {
      warpMock.style.setProperty(`--${key}`, value);
    }
    for (const [key, value] of Object.entries(theme.brightColors)) {
      warpMock.style.setProperty(`--bright-${key}`, value);
    }
    for (const [key, value] of Object.entries(theme.normalColors)) {
      warpMock.style.setProperty(`--normal-${key}`, value);
    }
  }

  return () => ({
    theme,
    uiColors,
    brightColors,
    normalColors,
    terminalColors,
    lockedColors,
    ymlString,
    generate,
    setThemeInfo,
    setUiColors,
    setUiColor,
    setBrightColors,
    setBrightColor,
    setNormalColors,
    setNormalColor,
    setLockedColors,
    toggleLockedColor,
    setThemeDetails
  });
}
