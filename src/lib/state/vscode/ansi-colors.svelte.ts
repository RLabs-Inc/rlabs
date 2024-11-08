import { initialAnsiColors } from '$lib/constants/colors';

import { generateAnsiColors } from '$lib/utils/vscode/ansiColors.svelte';

import { type AnsiColors } from '$lib/types/color';
import type { AnsiColorsGenerationOptions } from '$lib/types/theme';

let ansiColors = $state<AnsiColors>(initialAnsiColors);
const lockedAnsiColors = $state<Partial<AnsiColors>>({});

export function getAnsiColors() {
  function setAnsiColors(value: AnsiColors) {
    ansiColors = value;
  }

  function setAnsiColor(key: keyof AnsiColors, value: string) {
    ansiColors[key] = value;
  }

  function toggleLockedAnsiColor(key: keyof AnsiColors, color: string) {
    if (lockedAnsiColors[key]) {
      delete lockedAnsiColors[key];
    } else {
      lockedAnsiColors[key] = color;
    }
  }

  function generate() {
    const options: AnsiColorsGenerationOptions = {
      lockedColors: lockedAnsiColors
    };
    const { generatedAnsiColors } = generateAnsiColors(options);
    setAnsiColors(generatedAnsiColors);
  }

  return () => ({
    get ansiColors() {
      return ansiColors;
    },
    set ansiColors(value: AnsiColors) {
      setAnsiColors(value);
    },
    get lockedAnsiColors() {
      return lockedAnsiColors;
    },
    setAnsiColor,
    toggleLockedAnsiColor,
    generate
  });
}
