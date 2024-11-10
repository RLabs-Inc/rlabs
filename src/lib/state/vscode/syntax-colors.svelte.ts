import {
  generateSyntaxColors,
  updateSyntaxColorsWithSaturation
} from '$lib/utils/vscode/syntaxColors.svelte';
import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

import { type SyntaxColors } from '$lib/types/color';
import type { SyntaxColorsGenerationOptions } from '$lib/types/theme';
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

  function generate() {
    const options: SyntaxColorsGenerationOptions = {
      lockedColors: lockedSyntaxColors
    };
    const { generatedSyntaxColors } = generateSyntaxColors(options);
    setSyntaxColors(generatedSyntaxColors);
  }

  function setSyntaxSaturation(value: number) {
    setSyntaxColors(updateSyntaxColorsWithSaturation(syntaxColors, value, lockedSyntaxColors));
    const selectedTheme = getSelectedTheme();
    selectedTheme().update();
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
    generate,
    setSyntaxSaturation
  });
}
