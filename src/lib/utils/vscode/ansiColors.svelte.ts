import { clampChroma, formatHex8 } from 'culori';
import {
  brightenColor,
  ensureReadability,
  randomizeColor,
  saturateColor
} from './colorUtils.svelte';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';

import { type AnsiColors } from '$lib/types/color';
import type { AnsiColorsGenerationOptions } from '$lib/types/theme';

export function generateAnsiColors(options: AnsiColorsGenerationOptions): {
  generatedAnsiColors: AnsiColors;
} {
  const uiColorsState = getUiColors();
  const controlsState = getControls();
  const start = performance.now();
  const isDarkTheme = controlsState().isDark;
  const { lockedColors } = options;
  const baseSaturation = 30 + Math.random() * 30; // 30-60
  const baseLightness = 30 + Math.random() * 30; // 30-60

  const colors: AnsiColors = {
    Black: lockedColors.Black
      ? lockedColors.Black
      : formatHex8(randomizeColor([280, 281], isDarkTheme ? [5, 10] : [0, 10], [0, 5])),
    Red: lockedColors.Red
      ? lockedColors.Red
      : randomizeColor([23, 37], isDarkTheme ? [40, 60] : [10, 60], [0, 20]),
    Green: lockedColors.Green
      ? lockedColors.Green
      : formatHex8(randomizeColor([115, 175], isDarkTheme ? [40, 60] : [10, 60], [0, 20])),
    Yellow: lockedColors.Yellow
      ? lockedColors.Yellow
      : formatHex8(randomizeColor([40, 96], isDarkTheme ? [40, 60] : [10, 60], [0, 20])), // Center on orange-yellow
    Blue: lockedColors.Blue
      ? lockedColors.Blue
      : formatHex8(randomizeColor([233, 270], isDarkTheme ? [40, 85] : [10, 60], [0, 20])),
    Magenta: lockedColors.Magenta
      ? lockedColors.Magenta
      : formatHex8(randomizeColor([280, 360], isDarkTheme ? [40, 85] : [10, 60], [0, 20])),
    Cyan: lockedColors.Cyan
      ? lockedColors.Cyan
      : formatHex8(randomizeColor([180, 225], isDarkTheme ? [40, 85] : [10, 60], [0, 20])),
    White: lockedColors.White
      ? lockedColors.White
      : formatHex8(randomizeColor([50, 90], isDarkTheme ? [95, 100] : [85, 95], [0, 10])),
    BrightBlack: lockedColors.BrightBlack
      ? lockedColors.BrightBlack
      : formatHex8(randomizeColor([280, 281], isDarkTheme ? [10, 15] : [5, 15], [0, 5])),
    BrightRed: lockedColors.BrightRed ? lockedColors.BrightRed : '',
    // : randomizeColor([23, 37], isDarkTheme ? [60, 95] : [40, 70], [0, 40]),
    BrightGreen: lockedColors.BrightGreen ? lockedColors.BrightGreen : '',
    // : formatHex8(randomizeColor([115, 175], isDarkTheme ? [40, 85] : [40, 70], [0, 40])),
    BrightYellow: lockedColors.BrightYellow ? lockedColors.BrightYellow : '',
    // : formatHex8(randomizeColor([40, 96], isDarkTheme ? [40, 85] : [40, 70], [0, 40])),
    BrightBlue: lockedColors.BrightBlue ? lockedColors.BrightBlue : '',
    // : formatHex8(randomizeColor([233, 270], isDarkTheme ? [40, 85] : [40, 70], [0, 40])),
    BrightMagenta: lockedColors.BrightMagenta ? lockedColors.BrightMagenta : '',
    // : randomizeColor([280, 360], isDarkTheme ? [40, 85] : [40, 70], [0, 40]),
    BrightCyan: lockedColors.BrightCyan ? lockedColors.BrightCyan : '',
    // : formatHex8(randomizeColor([180, 225], isDarkTheme ? [40, 85] : [40, 70], [0, 40])),
    BrightWhite: lockedColors.BrightWhite
      ? lockedColors.BrightWhite
      : formatHex8(randomizeColor([50, 90], isDarkTheme ? [95, 100] : [85, 95], [0, 10]))
  };

  // Generate bright colors based on their counterparts
  ['Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan'].forEach((color) => {
    if (colors[`Bright${color}` as keyof AnsiColors] === '') {
      let i = 0;
      while (i < 50) {
        colors[`Bright${color}` as keyof AnsiColors] = brightenColor(
          colors[color as keyof AnsiColors]
        );
        colors[`Bright${color}` as keyof AnsiColors] = clampChroma(
          colors[`Bright${color}` as keyof AnsiColors]
        );
        i++;
      }
    }
  });
  const startRead = performance.now();
  // Ensure readability for all colors except Black and BrightBlack
  Object.keys(colors).forEach((key) => {
    if (!lockedColors || !lockedColors[key as keyof AnsiColors]) {
      colors[key as keyof AnsiColors] = ensureReadability(
        colors[key as keyof AnsiColors],
        uiColorsState().uiColors.BG1
      );
    }
  });
  const endRead = performance.now();
  console.log(`ENSURE READABILITY: ${endRead - startRead} milliseconds`);
  const end = performance.now();
  console.log(`GENERATE ANSI COLORS: ${end - start} milliseconds`);
  return { generatedAnsiColors: colors };
}

export function updateAnsiColorsWithSaturation(
  currentColors: AnsiColors,
  newAnsiSaturation: number,
  lockedColors: Partial<AnsiColors>
): AnsiColors {
  const updateColorSaturation = (color: string, newSaturation: number) => {
    const hsl = Color(color).hsl();
    return Color.hsl(hsl.hue(), newSaturation, hsl.lightness()).hexa();
  };

  const updatedColors: AnsiColors = { ...currentColors };

  Object.keys(updatedColors).forEach((key) => {
    if (!lockedColors || !lockedColors[key as keyof AnsiColors]) {
      if (!key.includes('Bright')) {
        updatedColors[key as keyof AnsiColors] = updateColorSaturation(
          updatedColors[key as keyof AnsiColors],
          newAnsiSaturation
        );
      }
    }
  });

  // Generate bright colors based on their counterparts
  ['Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan'].forEach((color) => {
    if (!lockedColors || !lockedColors[`Bright${color}` as keyof AnsiColors]) {
      updatedColors[`Bright${color}` as keyof AnsiColors] = brightenColor(
        updatedColors[color as keyof AnsiColors]
      );
    }
  });

  Object.keys(updatedColors).forEach((key) => {
    if (!lockedColors || !lockedColors[key as keyof AnsiColors]) {
      updatedColors[key as keyof AnsiColors] = ensureReadabilityExceptBlack(
        updatedColors[key as keyof AnsiColors],
        uiColorsState().uiColors.BG1
      );
    }
  });

  return updatedColors;
}
