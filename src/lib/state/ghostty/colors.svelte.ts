import type {
  GhosttyTheme,
  PaletteColors,
  UiColors,
  CssVariables,
  Controls,
  SelectedColor
} from '$lib/types/ghostty/colors';
import { generateTheme } from '$lib/utils/ghostty/theme.svelte';
import type { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

let uiColors = $state<UiColors>({
  background: '#000000',
  foreground: '#ffffff',
  cursorColor: '#ffffff',
  selectionBackground: '#000000',
  selectionForeground: '#ffffff'
});

let paletteColors = $state<PaletteColors>({
  palette0: '#000000',
  palette1: '#000000',
  palette2: '#000000',
  palette3: '#000000',
  palette4: '#000000',
  palette5: '#000000',
  palette6: '#000000',
  palette7: '#000000',
  palette8: '#000000',
  palette9: '#000000',
  palette10: '#000000',
  palette11: '#000000',
  palette12: '#000000',
  palette13: '#000000',
  palette14: '#000000',
  palette15: '#000000'
});

const themeString = $derived(`
  palette = 0=${paletteColors.palette0}
  palette = 1=${paletteColors.palette1}
  palette = 2=${paletteColors.palette2}
  palette = 3=${paletteColors.palette3}
  palette = 4=${paletteColors.palette4}
  palette = 5=${paletteColors.palette5}
  palette = 6=${paletteColors.palette6}
  palette = 7=${paletteColors.palette7}
  palette = 8=${paletteColors.palette8}
  palette = 9=${paletteColors.palette9}
  palette = 10=${paletteColors.palette10}
  palette = 11=${paletteColors.palette11}
  palette = 12=${paletteColors.palette12}
  palette = 13=${paletteColors.palette13}
  palette = 14=${paletteColors.palette14}
  palette = 15=${paletteColors.palette15}
  background = ${uiColors.background}
  foreground = ${uiColors.foreground}
  cursor-color = ${uiColors.cursorColor}
  selection-background = ${uiColors.selectionBackground}
  selection-foreground = ${uiColors.selectionForeground}
`);

const theme = $derived<GhosttyTheme>({
  ...uiColors,
  ...paletteColors
});

let lockedColors = $state<Record<string, string>>({});

let selectedColor = $state<SelectedColor | null>(null);

export function getThemeState() {
  function setUiColors(value: UiColors) {
    uiColors = value;
  }
  function setUiColor(key: keyof UiColors, value: string) {
    uiColors[key] = value;
    updateCssVariables({ ...uiColors, ...paletteColors });
  }
  function setPaletteColors(value: PaletteColors) {
    paletteColors = value;
  }
  function setPaletteColor(key: keyof PaletteColors, value: string) {
    paletteColors[key] = value;
    updateCssVariables({ ...uiColors, ...paletteColors });
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

  function generate(isDark: boolean, baseHue: number, scheme: ColorSchemes, uniform: boolean) {
    const options: Controls = {
      isDark: isDark,
      baseHue: [baseHue],
      scheme: scheme,
      uniform: uniform,
      lockedColors: lockedColors
    };
    const { cssVariables, uiColors, paletteColors } = generateTheme(options);
    setUiColors(uiColors);
    setPaletteColors(paletteColors);
    updateCssVariables(cssVariables);
  }

  function updateCssVariables(theme: CssVariables) {
    const ghosttyMock = document.getElementById('ghostty-mock') as HTMLElement;
    // Update CSS variables
    for (const [key, value] of Object.entries(theme)) {
      ghosttyMock.style.setProperty(`--${key}`, value);
    }
  }

  return () => ({
    theme,
    uiColors,
    paletteColors,
    lockedColors,
    themeString,
    selectedColor,
    generate,
    setUiColors,
    setUiColor,
    setPaletteColors,
    setPaletteColor,
    setLockedColors,
    toggleLockedColor,
    setSelectedColor
  });
}
