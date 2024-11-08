import { initialAnsiColors, initialSyntaxColors } from '$lib/constants/colors';
import { ColorSchemes } from '$lib/types/color';
import { randomInteger } from '$lib/utils/vscode/math';
import type { Theme } from '$lib/types/theme';
import { randomEnum } from '$lib/utils/vscode/math';
import { initialUIColors } from '$lib/constants/colors';

let theme = $state<Theme | null>(null);

export function getSelectedTheme() {
  function set(value: Theme) {
    theme = value;
  }

  function reset() {
    set({
      id: 0,
      userId: '',
      userName: '',
      isDark: false,
      scheme: randomEnum(Object(ColorSchemes)),
      baseHue: randomInteger(0, 360),
      uiSaturation: randomInteger(0, 100),
      syntaxSaturation: randomInteger(0, 100),
      ansiSaturation: randomInteger(0, 100),
      name: '',
      isPublic: false,
      uiColors: initialUIColors,
      syntaxColors: initialSyntaxColors,
      ansiColors: initialAnsiColors,
      shares: 0,
      downloads: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return () => ({
    get theme() {
      return theme;
    },
    set,
    reset
  });
}
