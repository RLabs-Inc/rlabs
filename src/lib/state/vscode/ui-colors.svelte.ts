import { generateUIColors, updateUIColorsWithSaturation } from '$lib/utils/vscode/uiColors.svelte';
import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

import { type UIColors } from '$lib/types/color';
import type { UIColorsGenerationOptions } from '$lib/types/theme';
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
    console.log('------------------------------');
    console.log(`GENERATE UI COLORS`);
    console.log('------------------------------');
    const { generatedUIColors } = generateUIColors(options);
    setUiColors(generatedUIColors);
  }

  function setUiSaturation(value: number) {
    setUiColors(updateUIColorsWithSaturation(uiColors, value, lockedUIColors));
    const selectedTheme = getSelectedTheme();
    selectedTheme().update();
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
    generate,
    setUiSaturation
  });
}
