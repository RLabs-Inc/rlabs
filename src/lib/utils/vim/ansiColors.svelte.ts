import { clampChroma, formatHex8, oklch } from 'culori';
import { ensureReadability, randomizeColor } from './colorUtils.svelte';
import { getUiColors } from '$lib/state/vim/ui-colors.svelte';
import { getControls } from '$lib/state/vim/controls.svelte';

import { type AnsiColors } from '$lib/types/vim/color';
import type { AnsiColorsGenerationOptions } from '$lib/types/vim/theme';

export function generateAnsiColors(options: AnsiColorsGenerationOptions): {
  generatedAnsiColors: AnsiColors;
} {
  const uiColorsState = getUiColors();
  const controlsState = getControls();
  const isDarkTheme = controlsState().isDark;
  const { lockedColors } = options;

  const colors: AnsiColors = {
    Black: lockedColors.Black
      ? lockedColors.Black
      : formatHex8(randomizeColor([280, 281], isDarkTheme ? [5, 10] : [0, 10], [0, 5]))!,
    Red: lockedColors.Red
      ? lockedColors.Red
      : randomizeColor([23, 37], isDarkTheme ? [40, 70] : [10, 70], [10, 30]),
    Green: lockedColors.Green
      ? lockedColors.Green
      : formatHex8(randomizeColor([115, 175], isDarkTheme ? [40, 70] : [10, 70], [10, 30]))!,
    Yellow: lockedColors.Yellow
      ? lockedColors.Yellow
      : formatHex8(randomizeColor([40, 96], isDarkTheme ? [40, 70] : [10, 70], [10, 30]))!, // Center on orange-yellow
    Blue: lockedColors.Blue
      ? lockedColors.Blue
      : formatHex8(randomizeColor([233, 270], isDarkTheme ? [40, 70] : [10, 70], [10, 30]))!,
    Magenta: lockedColors.Magenta
      ? lockedColors.Magenta
      : formatHex8(randomizeColor([280, 360], isDarkTheme ? [40, 70] : [10, 70], [10, 30]))!,
    Cyan: lockedColors.Cyan
      ? lockedColors.Cyan
      : formatHex8(randomizeColor([180, 225], isDarkTheme ? [40, 70] : [10, 70], [10, 30]))!,
    White: lockedColors.White
      ? lockedColors.White
      : formatHex8(randomizeColor([50, 90], isDarkTheme ? [95, 100] : [85, 95], [10, 30]))!,
    BrightBlack: lockedColors.BrightBlack
      ? lockedColors.BrightBlack
      : formatHex8(randomizeColor([280, 281], isDarkTheme ? [10, 15] : [5, 15], [0, 5]))!,
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
      : formatHex8(randomizeColor([50, 90], isDarkTheme ? [95, 100] : [85, 95], [0, 20]))!
  };

  // Generate bright colors based on their counterparts
  ['Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan'].forEach((color) => {
    if (colors[`Bright${color}` as keyof AnsiColors] === '') {
      let tempColor = oklch(colors[color as keyof AnsiColors]);
      tempColor = {
        ...tempColor!,
        l: 0.85
      };
      tempColor = clampChroma(tempColor!, 'oklch');

      colors[`Bright${color}` as keyof AnsiColors] = formatHex8(tempColor!);
    }
  });

  // Ensure readability for all colors except Black and BrightBlack
  Object.keys(colors).forEach((key) => {
    if (!lockedColors || !lockedColors[key as keyof AnsiColors]) {
      colors[key as keyof AnsiColors] = ensureReadability(
        colors[key as keyof AnsiColors],
        uiColorsState().uiColors.BG1
      );
    }
  });
  return { generatedAnsiColors: colors };
}
