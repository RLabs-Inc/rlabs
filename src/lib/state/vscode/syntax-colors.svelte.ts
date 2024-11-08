import { initialSyntaxColors } from '$lib/constants/colors';

import { generateSyntaxColors } from '$lib/utils/vscode/syntaxColors.svelte';

import { type SyntaxColors } from '$lib/types/color';
import type { SyntaxColorsGenerationOptions } from '$lib/types/theme';

let syntaxColors = $state<SyntaxColors>(initialSyntaxColors);
const lockedSyntaxColors = $state<Partial<SyntaxColors>>({});

export function getSyntaxColors() {
  function setSyntaxColors(value: SyntaxColors) {
    syntaxColors = value;
  }

  function setSyntaxColor(key: keyof SyntaxColors, value: string) {
    syntaxColors[key] = value;
  }

  function toggleLockedSyntaxColor(key: keyof SyntaxColors, color: string) {
    if (lockedSyntaxColors[key]) {
      delete lockedSyntaxColors[key];
    } else {
      lockedSyntaxColors[key] = color;
    }
  }

  function generate() {
    const options: SyntaxColorsGenerationOptions = {
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
    toggleLockedSyntaxColor,
    generate
  });
}
