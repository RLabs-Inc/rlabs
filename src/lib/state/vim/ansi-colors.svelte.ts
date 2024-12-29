import { generateAnsiColors } from '$lib/utils/vim/ansiColors.svelte';
import { getSelectedTheme } from '$lib/state/vim/theme.svelte';

import { type AnsiColors } from '$lib/types/vim/color';
import type { AnsiColorsGenerationOptions } from '$lib/types/vim/theme';
import { initialAnsiColors } from '$lib/constants/colors';

let ansiColors = $state<AnsiColors>(initialAnsiColors);
const lockedAnsiColors = $state<Partial<AnsiColors>>({});

export function getAnsiColors() {
  function setAnsiColors(value: AnsiColors) {
    ansiColors = value;
  }

  function setAnsiColor(key: keyof AnsiColors, value: string) {
    ansiColors[key] = value;
    const selectedTheme = getSelectedTheme();
    selectedTheme().update();
  }

  function toggleLockedAnsiColor(key: string, color: string) {
    if (lockedAnsiColors[key as keyof AnsiColors]) {
      delete lockedAnsiColors[key as keyof AnsiColors];
    } else {
      lockedAnsiColors[key as keyof AnsiColors] = color;
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
    setAnsiColors,
    toggleLockedAnsiColor,
    generate
  });
}
