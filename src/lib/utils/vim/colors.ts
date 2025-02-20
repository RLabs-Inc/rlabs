import { converter, formatHex8, type Oklch } from 'culori';

const toOKLCH = converter('oklch');
const toRGB = converter('rgb');
const toP3 = converter('p3');
const toRec2020 = converter('rec2020');

function LCH_to_P3(lch: [number, number, number]) {
  const p3 = toP3({
    mode: 'oklch',
    l: lch[0],
    c: lch[1],
    h: lch[2]
  });
  return [p3.r, p3.g, p3.b];
}

function LCH_to_r2020(lch: [number, number, number]) {
  const rec2020 = toRec2020({
    mode: 'oklch',
    l: lch[0],
    c: lch[1],
    h: lch[2]
  });
  return [rec2020.r, rec2020.g, rec2020.b];
}

/**
 * Checks if an LCH color is within the sRGB gamut
 */
export function isLCH_within_sRGB(l: number, c: number, h: number): boolean {
  const rgb = toRGB({
    mode: 'oklch',
    l: l / 100,
    c: c / 132,
    h: h
  });

  if (!rgb) return false;

  const ε = 0.000005;
  return ['r', 'g', 'b'].every((channel) => {
    const value = rgb[channel as 'r' | 'g' | 'b'];
    return typeof value === 'number' && value >= 0 - ε && value <= 1 + ε;
  });
}

/**
 * Forces an LCH color into the sRGB gamut by adjusting chroma
 */
export function forceIntoGamut(
  l: number,
  c: number,
  h: number,
  isWithinGamut: (l: number, c: number, h: number) => boolean
): [number, number, number] {
  if (isWithinGamut(l, c, h)) {
    return [l, c, h];
  }

  const originalColor = {
    mode: 'oklch' as const,
    l: l / 100,
    c: c / 132,
    h: h
  };

  // Initial binary search for chroma
  let hiC = c;
  let loC = 0;
  const ε = 0.0001;
  let newC = c / 2;
  let attempts = 0;
  const maxAttempts = 50;

  while (hiC - loC > ε && attempts < maxAttempts) {
    if (isWithinGamut(l, newC, h)) {
      loC = newC;
    } else {
      hiC = newC;
    }
    newC = (hiC + loC) / 2;
    attempts++;
  }

  // If we found a solution with just chroma adjustment, check if lightness adjustment might give better results
  const chromaOnlyColor = {
    mode: 'oklch' as const,
    l: l / 100,
    c: newC / 132,
    h: h
  };

  // Try adjusting lightness in both directions
  const lightnessSteps = 5;
  const lightnessRange = 10; // ±10%
  let bestColor = chromaOnlyColor;
  let bestDistance = getColorDistance(originalColor, chromaOnlyColor);

  for (let i = 1; i <= lightnessSteps; i++) {
    const lightnessChange = (lightnessRange * i) / lightnessSteps;

    // Try increasing lightness
    if (l + lightnessChange <= 100) {
      const higherL = l + lightnessChange;
      [, newC] = force_into_gamut(higherL, c, h, isWithinGamut);
      const lighterColor = {
        mode: 'oklch' as const,
        l: higherL / 100,
        c: newC / 132,
        h: h
      };
      const lighterDistance = getColorDistance(originalColor, lighterColor);
      if (lighterDistance < bestDistance) {
        bestDistance = lighterDistance;
        bestColor = lighterColor;
      }
    }

    // Try decreasing lightness
    if (l - lightnessChange >= 0) {
      const lowerL = l - lightnessChange;
      [, newC] = force_into_gamut(lowerL, c, h, isWithinGamut);
      const darkerColor = {
        mode: 'oklch' as const,
        l: lowerL / 100,
        c: newC / 132,
        h: h
      };
      const darkerDistance = getColorDistance(originalColor, darkerColor);
      if (darkerDistance < bestDistance) {
        bestDistance = darkerDistance;
        bestColor = darkerColor;
      }
    }
  }

  return [Math.round(bestColor.l * 100), Math.round(bestColor.c * 132), bestColor.h];
}

/**
 * Converts a CSS color string to LCH values
 */
export function colorToLCH(color: string) {
  const parsed = toOKLCH(color);
  if (!parsed) return null;

  return {
    lightness: Math.round(parsed.l * 100), // 0-100
    chroma: Math.round(parsed.c * 132), // Scale to match Lea's range (0-132)
    hue: Math.round(parsed.h || 0), // 0-360
    alpha: Math.round((parsed.alpha || 1) * 100) // 0-100
  };
}

export const supportsP3 =
  typeof window !== 'undefined' && window.CSS && CSS.supports('color', 'color(display-p3 0 1 0)');

export function alpha_to_string(a = 100) {
  return a < 100 ? ` / ${a}%` : '';
}

export function LCH_to_r2020_string(l: number, c: number, h: number, a = 100) {
  return (
    'color(rec2020 ' +
    LCH_to_r2020([+l, +c, +h])
      .map((x) => {
        x = Math.round(x * 10000) / 10000;
        return x;
      })
      .join(' ') +
    alpha_to_string(a) +
    ')'
  );
}

export function LCH_to_P3_string(l: number, c: number, h: number, a = 100, forceInGamut = false) {
  if (forceInGamut) {
    [l, c, h] = force_into_gamut(l, c, h, isLCH_within_P3);
  }

  return (
    'color(display-p3 ' +
    LCH_to_P3([+l, +c, +h])
      .map((x) => {
        x = Math.round(x * 10000) / 10000;
        return x;
      })
      .join(' ') +
    alpha_to_string(a) +
    ')'
  );
}

export function LCH_to_sRGB_string(color: Oklch, forceInGamut = false): string {
  const l = color.l;
  const c = color.c;
  const h = color.h || 0;
  const alpha = color.alpha || 100;

  let adjustedL = l;
  let adjustedC = c;
  let adjustedH = h;

  if (forceInGamut) {
    [adjustedL, adjustedC, adjustedH] = force_into_gamut(l, c, h, isLCH_within_sRGB);
  }

  const rgb = toRGB({
    mode: 'oklch',
    l: adjustedL / 100,
    c: adjustedC / 132,
    h: adjustedH,
    alpha: alpha / 100
  });

  return formatHex8(rgb);
}

export function force_into_gamut(
  l: number,
  c: number,
  h: number,
  isLCH_within: (l: number, c: number, h: number) => boolean
) {
  if (isLCH_within(l, c, h)) {
    return [l, c, h];
  }

  let hiC = c;
  let loC = 0;
  const ε = 0.0001;
  let adjustedC = c / 2;

  while (hiC - loC > ε) {
    if (isLCH_within(l, adjustedC, h)) {
      loC = adjustedC;
    } else {
      hiC = adjustedC;
    }
    adjustedC = (hiC + loC) / 2;
  }

  return [l, adjustedC, h];
}

export function isLCH_within_P3(l: number, c: number, h: number) {
  const rgb = LCH_to_P3([+l, +c, +h]);
  const ε = 0.000005;
  return rgb.reduce((a, b) => a && b >= 0 - ε && b <= 1 + ε, true);
}

export function isLCH_within_r2020(l: number, c: number, h: number) {
  const rgb = LCH_to_r2020([+l, +c, +h]);
  const ε = 0.000005;
  return rgb.reduce((a, b) => a && b >= 0 - ε && b <= 1 + ε, true);
}

export function slider_stops(
  range: number[],
  l: number,
  c: number,
  h: number,
  a: number,
  index: number
): string {
  // Create intermediate stops for smoother gradients
  const extendedRange = range.reduce((acc, val, i, arr) => {
    if (i === arr.length - 1) return [...acc, val];
    const next = arr[i + 1];
    const step = (next - val) / 4; // Add 3 intermediate points
    return [...acc, val, val + step, val + 2 * step, val + 3 * step];
  }, [] as number[]);

  return extendedRange
    .map((x) => {
      const values = [l, c, h, a];
      values[index] = x;

      // Check if the color is in gamut
      const isInGamut = isLCH_within_sRGB(values[0], values[1], values[2]);

      // Convert to OKLCH color
      const oklchColor = {
        mode: 'oklch' as const,
        l: values[0],
        c: values[1],
        h: values[2],
        alpha: values[3]
      };

      // Get the color string, forcing into gamut if needed
      const colorStr = LCH_to_sRGB_string(oklchColor, true);

      // Return the color with transparency for out-of-gamut sections
      return isInGamut
        ? colorStr
        : colorStr
            .replace(')', ', 0.5)')
            .replace('#', 'rgba(')
            .replace(/([a-f\d]{2})/gi, (m: string) => String(parseInt(m, 16)));
    })
    .join(', ');
}

function getColorDistance(
  color1: { l: number; c: number; h?: number },
  color2: { l: number; c: number; h?: number }
): number {
  const dL = color1.l - color2.l;
  const dC = color1.c - color2.c;
  const dH = (color1.h ?? 0) - (color2.h ?? 0);

  // Weight factors (can be adjusted)
  const kL = 1.0;
  const kC = 1.0;
  const kH = 1.0;

  return Math.sqrt(dL * dL * kL + dC * dC * kC + dH * dH * kH);
}
