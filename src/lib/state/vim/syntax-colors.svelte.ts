import { generateSyntaxColors } from '$lib/utils/vim/syntaxColors.svelte';
import { getSelectedTheme } from '$lib/state/vim/theme.svelte';

import { type SyntaxColors } from '$lib/types/vim/color';
import type { SyntaxColorsGenerationOptions } from '$lib/types/vim/theme';
import { initialSyntaxColors } from '$lib/constants/colors';

let syntaxColors = $state<SyntaxColors>(initialSyntaxColors);
const lockedSyntaxColors = $state<Partial<SyntaxColors>>({});

export function getSyntaxColors() {
  function setSyntaxColors(value: SyntaxColors) {
    syntaxColors = value;
  }

  function setSyntaxColor(key: keyof SyntaxColors, value: string) {
    syntaxColors[key] = value;
    const selectedTheme = getSelectedTheme();
    selectedTheme().update();
  }

  function toggleLockedSyntaxColor(key: string, color: string) {
    if (lockedSyntaxColors[key as keyof SyntaxColors]) {
      delete lockedSyntaxColors[key as keyof SyntaxColors];
    } else {
      lockedSyntaxColors[key as keyof SyntaxColors] = color;
    }
  }

  function generate(fewerColors: boolean) {
    const options: SyntaxColorsGenerationOptions = {
      few: fewerColors,
      lockedColors: lockedSyntaxColors
    };
    const { generatedSyntaxColors } = generateSyntaxColors(options);
    setSyntaxColors(generatedSyntaxColors);
  }

  return () => ({
    get syntaxColors() {
      return syntaxColors;
    },
    set syntaxColors(value: SyntaxColors) {
      setSyntaxColors(value);
    },
    get lockedSyntaxColors() {
      return lockedSyntaxColors;
    },
    setSyntaxColor,
    setSyntaxColors,
    toggleLockedSyntaxColor,
    generate
  });
}
