import type { Oklch } from 'culori';
import { LCH_to_sRGB_string, isLCH_within_sRGB } from '$lib/utils/vscode/colors';
import type { GradientOptions } from './types';
import { GRADIENT_STOPS } from './constants';

function createHueGradientStops(baseColor: Oklch, direction: string): string {
  // Use more stops for smoother hue transitions
  const hueStops = GRADIENT_STOPS.HUE;
  const hueColors = [];

  // Pre-calculate the base values for better performance
  const baseL = baseColor.l;
  const baseC = baseColor.c;
  const baseAlpha = baseColor.alpha ?? 1;

  for (let i = 0; i <= hueStops; i++) {
    const hueValue = (i / hueStops) * 360;
    const hueColor = {
      mode: 'oklch',
      l: baseL,
      c: baseC,
      h: hueValue,
      alpha: baseAlpha
    } as Oklch;

    // Check if color is in gamut
    const inGamut = isLCH_within_sRGB(baseL * 100, baseC * 132, hueValue);
    const colorStr = LCH_to_sRGB_string(hueColor, !inGamut);

    // Add extra stops near boundaries for smoother transitions
    if (i === 0) {
      hueColors.push(`${colorStr} 0%`);
      // Add extra stop for smooth transition from 360° to 0°
      const transitionColor = {
        ...hueColor,
        h: 359.9
      } as Oklch;
      hueColors.unshift(`${LCH_to_sRGB_string(transitionColor, !inGamut)} -0.1%`);
    } else if (i === hueStops) {
      hueColors.push(`${colorStr} 100%`);
      // Add extra stop for smooth transition from 360° to 0°
      const transitionColor = {
        ...hueColor,
        h: 0.1
      } as Oklch;
      hueColors.push(`${LCH_to_sRGB_string(transitionColor, !inGamut)} 100.1%`);
    } else {
      hueColors.push(`${colorStr} ${((i / hueStops) * 100).toFixed(1)}%`);
    }
  }

  return `linear-gradient(${direction}, ${hueColors.join(', ')})`;
}

function createAlphaStops(baseColor: Oklch, options: GradientOptions): string {
  const { stops, direction = 'to right' } = options;
  const colors = [];
  const checkerboard = createCheckerboardPattern();

  // Create alpha gradient with smooth transitions
  for (let i = 0; i <= stops; i++) {
    const value = i / stops;
    const newColor = {
      mode: 'oklch',
      l: baseColor.l,
      c: baseColor.c,
      h: baseColor.h,
      alpha: value
    } as Oklch;

    const colorStr = LCH_to_sRGB_string(newColor, false);

    if (i === 0) {
      colors.push(`${colorStr} 0%`);
      // Add extra stop for smooth transition from transparent
      colors.unshift(`${colorStr} -0.1%`);
    } else if (i === stops) {
      colors.push(`${colorStr} 100%`);
      // Add extra stop for smooth transition to opaque
      colors.push(`${colorStr} 100.1%`);
    } else {
      colors.push(`${colorStr} ${(value * 100).toFixed(1)}%`);
    }
  }

  return `${checkerboard}, linear-gradient(${direction}, ${colors.join(', ')})`;
}

function createGradientStops(
  baseColor: Oklch,
  property: 'l' | 'c' | 'h' | 'alpha',
  options: GradientOptions = {
    stops:
      GRADIENT_STOPS[
        property === 'l'
          ? 'LIGHTNESS'
          : property === 'c'
            ? 'CHROMA'
            : property === 'h'
              ? 'HUE'
              : 'ALPHA'
      ]
  }
): string {
  const { stops, direction = 'to right', alpha = false } = options;

  // For alpha gradients, create a transparent to opaque transition
  if (property === 'alpha' && alpha) {
    return createAlphaStops(baseColor, options);
  }

  // For hue, create multiple stops to ensure smooth transitions
  if (property === 'h') {
    return createHueGradientStops(baseColor, direction);
  }

  // For lightness and chroma, create gradients with out-of-gamut handling
  const colors = [];
  const baseValues = {
    l: baseColor.l,
    c: baseColor.c,
    h: baseColor.h,
    alpha: baseColor.alpha ?? 1
  };

  // Add extra stops at the boundaries for smoother transitions
  for (let i = 0; i <= stops; i++) {
    const value = i / stops;
    const newColor = {
      ...baseValues,
      mode: 'oklch'
    } as Oklch;

    switch (property) {
      case 'l':
        newColor.l = value;
        break;
      case 'c':
        newColor.c = value;
        break;
    }

    // Check if color is in gamut
    const inGamut = isLCH_within_sRGB(newColor.l * 100, newColor.c * 132, newColor.h || 0);

    const colorStr = LCH_to_sRGB_string(newColor, !inGamut);

    // Add extra stops near boundaries for smoother transitions
    if (i === 0) {
      colors.push(`${colorStr} 0%`);
      if (property === 'c') {
        // Add extra stop for smooth transition from minimum
        colors.unshift(`${colorStr} -0.1%`);
      }
    } else if (i === stops) {
      colors.push(`${colorStr} 100%`);
      if (property === 'c') {
        // Add extra stop for smooth transition to maximum
        colors.push(`${colorStr} 100.1%`);
      }
    } else {
      colors.push(`${colorStr} ${(value * 100).toFixed(1)}%`);
    }
  }

  return `linear-gradient(${direction}, ${colors.join(', ')})`;
}

export function createLightnessGradient(
  color: Oklch,
  options: GradientOptions = { stops: GRADIENT_STOPS.LIGHTNESS }
): string {
  const baseColor = normalizeColor(color);
  return createGradientStops(baseColor, 'l', options);
}

export function createChromaGradient(
  color: Oklch,
  options: GradientOptions = { stops: GRADIENT_STOPS.CHROMA }
): string {
  const baseColor = normalizeColor(color);
  return createGradientStops(baseColor, 'c', options);
}

export function createHueGradient(
  color: Oklch,
  options: GradientOptions = { stops: GRADIENT_STOPS.HUE }
): string {
  const baseColor = normalizeColor(color);
  return createGradientStops(baseColor, 'h', options);
}

export function createAlphaGradient(
  color: Oklch,
  options: GradientOptions = { stops: GRADIENT_STOPS.ALPHA }
): string {
  const baseColor = normalizeColor(color);
  return createGradientStops(baseColor, 'alpha', { ...options, alpha: true });
}

function normalizeColor(color: Oklch): Oklch {
  return {
    mode: 'oklch',
    l: color.l / 100, // Normalize to 0-1
    c: color.c / 132, // Normalize to 0-1
    h: color.h, // Keep as 0-360
    alpha: (color.alpha ?? 100) / 100 // Normalize to 0-1
  } as Oklch;
}

export function createCheckerboardPattern(): string {
  return `
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%)
  `;
}
