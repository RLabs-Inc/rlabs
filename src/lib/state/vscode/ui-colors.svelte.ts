import { generateUIColors } from '$lib/utils/vscode/uiColors.svelte';
import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

import { type UIColors } from '$lib/types/vscode/color';
import type { UIColorsGenerationOptions } from '$lib/types/vscode/theme';
import { initialUIColors } from '$lib/constants/colors';

let uiColors = $state<UIColors>(initialUIColors);
const lockedUIColors = $state<Partial<UIColors>>({});

export function getUiColors() {
  function setUiColors(value: UIColors) {
    uiColors = value;
  }

  function setUiColor(key: keyof UIColors, value: string) {
    uiColors[key] = value;
    const selectedTheme = getSelectedTheme();
    selectedTheme().update();
  }

  function toggleLockedUIColor(key: string, color: string) {
    if (lockedUIColors[key as keyof UIColors]) {
      delete lockedUIColors[key as keyof UIColors];
    } else {
      lockedUIColors[key as keyof UIColors] = color;
    }
  }

  function generate(fewerColors: boolean) {
    const options: UIColorsGenerationOptions = {
      few: fewerColors,
      lockedColors: lockedUIColors
    };
    const { generatedUIColors } = generateUIColors(options);
    setUiColors(generatedUIColors);
  }

  return () => ({
    get uiColors() {
      return uiColors;
    },
    set uiColors(value: UIColors) {
      setUiColors(value);
    },
    get lockedUIColors() {
      return lockedUIColors;
    },
    setUiColor,
    setUiColors,
    toggleLockedUIColor,
    generate
  });
}
