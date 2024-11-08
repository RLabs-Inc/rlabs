import Color from 'color';
import { type AnsiColors } from '$lib/types/color';
import type { AnsiColorsGenerationOptions } from '$lib/types/theme';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
import { ensureReadability } from './colorUtils.svelte';

const uiColorsState = getUiColors();

export function generateAnsiColors(options: AnsiColorsGenerationOptions): {
  generatedAnsiColors: AnsiColors;
} {
  const { lockedColors } = options;
  const baseSaturation = 30 + Math.random() * 30; // 30-60
  const baseLightness = 30 + Math.random() * 30; // 30-60

  const generateColor = (baseHue: number, isGrayscale: boolean = false) => {
    if (isGrayscale) {
      return Color.hsl(0, 0, baseLightness).hexa();
    }
    const hue = (baseHue + Math.random() * 50 - 25 + 360) % 360; // Allow more hue variation
    const saturation = baseSaturation;
    const lightness = Math.max(20, Math.min(80, baseLightness + Math.random() * 20 - 10));
    return Color.hsl(hue, saturation, lightness).hexa();
  };

  const colors: AnsiColors = {
    Black: '#000000',
    Red: lockedColors.Red ? lockedColors.Red : generateColor(0),
    Green: lockedColors.Green ? lockedColors.Green : generateColor(120),
    Yellow: lockedColors.Yellow ? lockedColors.Yellow : generateColor(45), // Center on orange-yellow
    Blue: lockedColors.Blue ? lockedColors.Blue : generateColor(240),
    Magenta: lockedColors.Magenta ? lockedColors.Magenta : generateColor(300),
    Cyan: lockedColors.Cyan ? lockedColors.Cyan : generateColor(180),
    White: lockedColors.White
      ? lockedColors.White
      : Color.hsl(30 + Math.random() * 30, 10 + Math.random() * 15, 92 + Math.random() * 8).hexa(), // More beige variation
    BrightBlack: lockedColors.BrightBlack
      ? lockedColors.BrightBlack
      : Color.hsl(0, 0, 20 + Math.random() * 10).hexa(), // Darker gray
    BrightRed: lockedColors.BrightRed ? lockedColors.BrightRed : '',
    BrightGreen: lockedColors.BrightGreen ? lockedColors.BrightGreen : '',
    BrightYellow: lockedColors.BrightYellow ? lockedColors.BrightYellow : '',
    BrightBlue: lockedColors.BrightBlue ? lockedColors.BrightBlue : '',
    BrightMagenta: lockedColors.BrightMagenta ? lockedColors.BrightMagenta : '',
    BrightCyan: lockedColors.BrightCyan ? lockedColors.BrightCyan : '',
    BrightWhite: lockedColors.BrightWhite
      ? lockedColors.BrightWhite
      : Color.hsl(30 + Math.random() * 30, 5 + Math.random() * 10, 97 + Math.random() * 3).hexa() // Slight beige tint
  };

  // Generate bright colors based on their counterparts
  ['Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan'].forEach((color) => {
    if (colors[`Bright${color}` as keyof AnsiColors] === '') {
      colors[`Bright${color}` as keyof AnsiColors] = brightenColor(
        colors[color as keyof AnsiColors]
      );
    }
  });

  // Ensure readability for all colors except Black and BrightBlack
  Object.keys(colors).forEach((key) => {
    if (!lockedColors || !lockedColors[key as keyof AnsiColors]) {
      colors[key as keyof AnsiColors] = ensureReadabilityExceptBlack(
        colors[key as keyof AnsiColors],
        uiColorsState().uiColors.BG1
      );
    }
  });
  return { generatedAnsiColors: colors };
}

export const ensureReadabilityExceptBlack = (color: string, bgColor: string) => {
  if (color.toLowerCase() === '#000000') return color;
  return ensureReadability(color, bgColor, 4.5);
};

export const brightenColor = (color: string) => {
  const c = Color(color);
  const brightSaturation = Math.max(20, Math.min(c.saturationl() - 20, 90));
  const brightLightness = Math.max(20, Math.min(c.lightness() + 20, 80));
  return c.saturationl(brightSaturation).lightness(brightLightness).hexa();
};

export function updateAnsiColorsWithSaturation(
  background: string,
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
