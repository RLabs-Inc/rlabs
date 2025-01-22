import {
  wcagLuminance,
  wcagContrast,
  formatHex8,
  clampChroma,
  oklch,
  random,
  formatHex,
  type Oklch
} from 'culori';

import { toOKLCH } from '$lib/components/vscode/color-picker/color-utils.svelte';

export function isDark(color: string | Oklch): boolean {
  return wcagLuminance(color) < 0.5;
}

export function calculateContrast(color1: string, color2: string): number {
  return wcagContrast(color1, color2);
}

export const getColorWithOpacity = (color: string, opacity: string) => {
  if (color.length > 7) {
    return color.slice(0, -2) + opacity;
  } else {
    return color + opacity;
  }
};

export const randomizeColor = (hue: number[], lightness: number[], chroma: number[]) => {
  const newColor = random('oklch', {
    l: [lightness[0] / 100, lightness[1] / 100],
    c: chroma.length > 0 ? [chroma[0] / 100, chroma[1] / 100] : chroma[0] / 100,
    h: hue.length > 1 ? [hue[0], hue[1]] : hue[0]
  });
  return formatHex(clampChroma(newColor, 'oklch'));
};

export function adjustCommentColor(
  commentColor: string,
  backgroundColor1: string,
  backgroundColor2: string,
  isDarkTheme: boolean
): string {
  const minContrast = isDarkTheme ? 2.5 : 1.5;
  const maxContrast = isDarkTheme ? 3.5 : 3;
  let comment = oklch(commentColor);
  const bgColor1 = oklch(backgroundColor1);
  const bgColor2 = oklch(backgroundColor2);
  let iterations = 0;
  const MAX_ITERATIONS = 200;

  while (iterations < MAX_ITERATIONS) {
    const contrast1 = wcagContrast(comment!, bgColor1!);
    const contrast2 = wcagContrast(comment!, bgColor2!);

    if (
      Math.min(contrast1, contrast2) < minContrast ||
      Math.max(contrast1, contrast2) > maxContrast
    ) {
      if (Math.max(contrast1, contrast2) > maxContrast) {
        comment = isDarkTheme
          ? clampChroma(
              {
                ...toOKLCH(comment!)!,
                l: toOKLCH(comment!)!.l - 0.05,
                c: toOKLCH(comment!)!.c - 0.001
              },
              'oklch'
            )
          : clampChroma(
              {
                ...toOKLCH(comment!)!,
                l: toOKLCH(comment!)!.l + 0.05
                // c: toOKLCH(comment!)!.c + 0.025
              },
              'oklch'
            );
      } else if (Math.min(contrast1, contrast2) < minContrast) {
        comment = isDarkTheme
          ? clampChroma(
              {
                ...toOKLCH(comment!)!,
                l: toOKLCH(comment!)!.l + 0.05
                // c: toOKLCH(comment!)!.c + 0.025
              },
              'oklch'
            )
          : clampChroma(
              {
                ...toOKLCH(comment!)!,
                l: toOKLCH(comment!)!.l - 0.05,
                c: toOKLCH(comment!)!.c - 0.001
              },
              'oklch'
            );
      }
    } else {
      break;
    }

    comment = clampChroma(comment!, 'oklch');
    iterations++;
  }

  return formatHex8(comment!);
}

export function ensureReadability(
  foreground: string,
  background: string,
  minContrast = 5.5
): string {
  let color = oklch(foreground);
  const bgColor = oklch(background);
  const isDarkTheme = isDark(background);
  let iterations = 0;
  const maxIterations = 100;
  let tempColor = oklch(foreground);
  while (wcagContrast(color!, bgColor!) < minContrast && iterations < maxIterations) {
    if (isDarkTheme) {
      tempColor = clampChroma({ ...toOKLCH(color)!, l: toOKLCH(color)!.l + 0.05 }, 'oklch');
    } else {
      tempColor = clampChroma({ ...toOKLCH(color)!, l: toOKLCH(color)!.l - 0.05 }, 'oklch');
    }
    color = tempColor;
    iterations++;
  }
  return formatHex8(color!);
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
