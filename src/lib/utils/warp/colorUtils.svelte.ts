import {
  wcagLuminance,
  wcagContrast,
  filterBrightness,
  filterSaturate,
  parseHex,
  formatHex8,
  converter,
  clampChroma,
  oklch,
  random,
  formatHex,
  type Oklch
} from 'culori';

import { toOKLCH } from '$lib/components/vscode/color-picker/color-utils.svelte';
export const brightenColor = filterBrightness(1.2, 'rgb');
export const darkenColor = filterBrightness(0.8, 'rgb');
export const saturateColor = filterSaturate(1.3, 'rgb');
export const desaturateColor = filterSaturate(0.9, 'rgb');
export const oklchConverter = converter('oklch');

export function brighten(color: string): string {
  return formatHex8(brightenColor(parseHex(color)));
}

export function darken(color: string): string {
  return formatHex8(darkenColor(parseHex(color)));
}

export function saturate(color: string): string {
  return formatHex8(saturateColor(parseHex(color)));
}

export function desaturate(color: string): string {
  return formatHex8(desaturateColor(parseHex(color)));
}

export function darkenSaturate(color: string): string {
  return formatHex8(darkenColor(saturateColor(parseHex(color))));
}
export function brightenDesaturate(color: string): string {
  return formatHex8(brightenColor(desaturateColor(parseHex(color))));
}

export function isDark(color: string | Oklch): boolean {
  return wcagLuminance(color) < 0.5;
}

export function calculateContrast(color1: string, color2: string): number {
  return wcagContrast(color1, color2);
}

export function getAlphaColor(color: string, alpha: string): string {
  if (color.length > 7) {
    return color.slice(0, -2) + alpha;
  } else {
    return color + alpha;
  }
}

export const randomizeColor = (hue: number[], lightness: number[], chroma: number[] | null) => {
  const newColor = random('oklch', {
    l: [lightness[0] / 100, lightness[1] / 100],
    c: chroma ? [chroma[0] / 100, chroma[1] / 100] : [0, 0.4],
    h: hue.length > 1 ? [hue[0], hue[1]] : hue[0]
  });
  return formatHex(clampChroma(newColor, 'oklch'));
};

export function ensureReadability(
  foreground: string,
  background: string,
  minContrast: number
): string {
  let color = oklch(foreground);
  const bgColor = oklch(background);
  const isDarkTheme = isDark(bgColor!);
  let iterations = 0;
  const maxIterations = 1000;
  let tempColor = oklch(foreground);
  while (wcagContrast(color!, bgColor!) < minContrast && iterations < maxIterations) {
    if (isDarkTheme) {
      tempColor = clampChroma({ ...toOKLCH(color)!, l: toOKLCH(color)!.l + 0.001 }, 'oklch');
    } else {
      tempColor = clampChroma({ ...toOKLCH(color)!, l: toOKLCH(color)!.l - 0.001 }, 'oklch');
    }
    color = tempColor;
    iterations++;
  }
  return formatHex(color!);
}

export function adjustHue(hue: number): number {
  return (hue + 360) % 360;
}

export function adjustSaturation(saturation: number): number {
  return Math.max(0, Math.min(100, saturation));
}

export function adjustLightness(lightness: number): number {
  return Math.max(0, Math.min(100, lightness));
}
// Utility function to convert degrees to radians
export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
