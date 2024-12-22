import { generateTheme } from '$lib/utils/warp/theme.svelte';

import type { Colors, ThemeInfo, UiColors, ThemeGenerationOptions } from '$lib/types/warp/colors';
import type { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

export class ThemeState {
  themeInfo: ThemeInfo = $state({
    name: 'Custom Theme',
    details: 'darker'
  });
  uiColors: UiColors = $state({
    accent: '#268bd2',
    cursor: '#95D886',
    background: '#002b36',
    foreground: '#839496'
  });
  brightColors: Colors = $state({
    black: '#002b36',
    red: '#cb4b16',
    green: '#859900',
    yellow: '#b58900',
    blue: '#268bd2',
    magenta: '#d33682',
    cyan: '#2aa198',
    white: '#eee8d5'
  });
  normalColors: Colors = $state({
    black: '#073642',
    red: '#dc322f',
    green: '#859900',
    yellow: '#b58900',
    blue: '#268bd2',
    magenta: '#d33682',
    cyan: '#2aa198',
    white: '#eee8d5'
  });

  constructor() {}
  generate(
    isDark: boolean,
    baseHue: number,
    scheme: ColorSchemes,
    lockedColors?: Record<string, string>
  ) {
    const options: ThemeGenerationOptions = {
      isDark,
      baseHue,
      scheme,
      lockedColors: lockedColors || {}
    };
    const cssVariables = generateTheme(options);
    this.uiColors = cssVariables.uiColors;
    this.brightColors = cssVariables.brightColors;
    this.normalColors = cssVariables.normalColors;
    this.update();
  }
  update() {
    const warpMock = document.getElementById('warp-mock') as HTMLElement;
    // Update CSS variables
    for (const [key, value] of Object.entries(this.uiColors)) {
      warpMock.style.setProperty(`--${key}`, value);
    }
    for (const [key, value] of Object.entries(this.brightColors)) {
      warpMock.style.setProperty(`--bright-${key}`, value);
    }
    for (const [key, value] of Object.entries(this.normalColors)) {
      warpMock.style.setProperty(`--normal-${key}`, value);
    }
  }
  download() {
    const theme = {
      ...this.themeInfo,
      ...this.uiColors,
      terminal_colors: {
        bright: {
          ...this.brightColors
        },
        normal: {
          ...this.normalColors
        }
      }
    };
    return theme;
  }
}
