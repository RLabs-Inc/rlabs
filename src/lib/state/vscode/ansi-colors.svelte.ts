import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

import { initialAnsiColors } from '$lib/constants/colors';
import {
  generateAnsiColors,
  updateAnsiColorsWithSaturation
} from '$lib/utils/vscode/ansiColors.svelte';

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

  function setAnsiSaturation(value: number) {
    setAnsiColors(updateAnsiColorsWithSaturation(ansiColors, value, lockedAnsiColors));
    const selectedTheme = getSelectedTheme();
    selectedTheme().update();
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
    generate,
    setAnsiSaturation
  });
}
