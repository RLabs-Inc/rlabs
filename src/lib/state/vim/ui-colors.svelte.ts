import { generateUIColors } from '$lib/utils/vim/uiColors.svelte';
import { getSelectedTheme } from '$lib/state/vim/theme.svelte';
import { getSyntaxColors } from '$lib/state/vim/syntax-colors.svelte';

import { type UIColors } from '$lib/types/vim/color';
import type { UIColorsGenerationOptions } from '$lib/types/vim/theme';
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
    const syntaxColorsState = getSyntaxColors();
    const lockedSyntaxColors = syntaxColorsState().lockedSyntaxColors;
    const options: UIColorsGenerationOptions = {
      few: fewerColors,
      lockedColors: lockedUIColors,
      syntaxLockedColors: lockedSyntaxColors
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
