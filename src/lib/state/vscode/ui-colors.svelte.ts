import { initialUIColors } from '$lib/constants/colors';

import { generateUIColors } from '$lib/utils/vscode/uiColors.svelte';

import { type UIColors } from '$lib/types/color';
import type { UIColorsGenerationOptions } from '$lib/types/theme';

let uiColors = $state<UIColors>(initialUIColors);
const lockedUIColors = $state<Partial<UIColors>>({});

export function getUiColors() {
  function setUiColors(value: UIColors) {
    uiColors = value;
  }

  function setUiColor(key: keyof UIColors, value: string) {
    uiColors[key] = value;
  }

  function toggleLockedUIColor(key: keyof UIColors, color: string) {
    if (lockedUIColors[key]) {
      delete lockedUIColors[key];
    } else {
      lockedUIColors[key] = color;
    }
  }

  function generate() {
    const options: UIColorsGenerationOptions = {
      few: true,
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
    toggleLockedUIColor,
    generate
  });
}
