import { randomInteger } from '$lib/utils/common/math';
import { ensureReadability } from '$lib/utils/warp/colorUtils.svelte';

import type {
  CssVariables,
  ThemeGenerationOptions,
  UiColors,
  Colors
} from '$lib/types/warp/colors';
import { generateSchemeHues } from '../common/color-schemes/patterns';
import { clampChroma, formatHex, random } from 'culori';
import { toOKLCH } from '$lib/components/vscode/color-picker/color-utils.svelte';

export const randomizeColor = (hue: number[], lightness: number[], chroma: number[]) => {
  const newColor = random('oklch', {
    l: lightness.length > 1 ? [lightness[0] / 100, lightness[1] / 100] : lightness[0] / 100,
    c: chroma.length > 1 ? [chroma[0] / 100, chroma[1] / 100] : chroma[0] / 100,
    h: hue.length > 1 ? [hue[0], hue[1]] : hue[0]
  });
  return formatHex(clampChroma(newColor, 'oklch'));
};

export function generateTheme(options: ThemeGenerationOptions): CssVariables {
  const { isDark, baseHue, scheme } = options;

  const schemeHues = generateSchemeHues(baseHue, scheme);

  const lockedColors = options.lockedColors || {};

  const usedHues = new Set<number>();

  const getUniqueRandomHue = () => {
    // If all hues have been used, reset the set
    if (usedHues.size >= schemeHues.length) {
      usedHues.clear();
    }

    // Get available hues (ones that haven't been used)
    const availableHues = schemeHues.filter((hue) => !usedHues.has(hue));

    // Get a random hue from the available ones
    const randomIndex = randomInteger(0, availableHues.length - 1);
    const selectedHue = availableHues[randomIndex];

    // Mark this hue as used
    usedHues.add(selectedHue);

    return selectedHue;
  };

  const colorHues = {
    black: [getUniqueRandomHue()],
    red: [getUniqueRandomHue()],
    green: [getUniqueRandomHue()],
    yellow: [getUniqueRandomHue()],
    blue: [getUniqueRandomHue()],
    magenta: [getUniqueRandomHue()],
    cyan: [getUniqueRandomHue()],
    white: [getUniqueRandomHue()]
  };

  const uiColorHues = {
    background: [getUniqueRandomHue()],
    foreground: [getUniqueRandomHue()],
    accent: [schemeHues[0]]
  };

  const uiColors: UiColors = {
    background:
      lockedColors?.background ||
      randomizeColor(uiColorHues.background, isDark ? [0, 35] : [89, 100], [0, 40]),
    foreground:
      lockedColors?.foreground ||
      randomizeColor(uiColorHues.foreground, isDark ? [90, 100] : [0, 25], [0, 40]),
    accent: lockedColors?.accent || randomizeColor(uiColorHues.accent, [0, 100], [0, 40]),
    cursor: lockedColors?.cursor || randomizeColor(uiColorHues.accent, [0, 100], [0, 40])
  };

  uiColors.accent = ensureReadability(uiColors.accent, uiColors.background, 2.5);
  uiColors.cursor = ensureReadability(uiColors.cursor, uiColors.background, 5.5);

  uiColors.foreground = ensureReadability(uiColors.foreground, uiColors.background, 7.5);
  // uiColors.foreground = ensureReadability(uiColors.foreground, uiColors.accent, 2.5);

  // const normalLightness = [randomInteger(0, 90)];
  const normalLightness = [0, 90];
  const normalChroma = [0, 40];
  // const brightLightness = Math.min(90, normalLightness + 30); // (normalLightness + 30;

  function brightenColor(color: string): string {
    return formatHex(
      clampChroma(
        {
          mode: 'oklch',
          l: Math.min(1, toOKLCH(color)!.l + 0.1),
          c: toOKLCH(color)!.c,
          h: toOKLCH(color)!.h
        },
        'oklch'
      )
    );
  }

  const normal: Colors = {
    black: lockedColors?.black || randomizeColor(colorHues.black, normalLightness, normalChroma),
    red: lockedColors?.red || randomizeColor(colorHues.red, normalLightness, normalChroma),
    green: lockedColors?.green || randomizeColor(colorHues.green, normalLightness, normalChroma),
    yellow: lockedColors?.yellow || randomizeColor(colorHues.yellow, normalLightness, normalChroma),
    blue: lockedColors?.blue || randomizeColor(colorHues.blue, normalLightness, normalChroma),
    magenta:
      lockedColors?.magenta || randomizeColor(colorHues.magenta, normalLightness, normalChroma),
    cyan: lockedColors?.cyan || randomizeColor(colorHues.cyan, normalLightness, normalChroma),
    white: lockedColors?.white || randomizeColor(colorHues.white, normalLightness, normalChroma)
  };

  Object.keys(normal).forEach((key) => {
    if (!Object.keys(lockedColors).includes(key) && key !== 'background') {
      normal[key as keyof Colors] = ensureReadability(
        normal[key as keyof Colors],
        uiColors.background,
        4.5
      );
    }
  });

  // Generate bright and normal colors
  const bright: Colors = {
    black: lockedColors?.black || brightenColor(normal.black),
    red: lockedColors?.red || brightenColor(normal.red),
    green: lockedColors?.green || brightenColor(normal.green),
    yellow: lockedColors?.yellow || brightenColor(normal.yellow),
    blue: lockedColors?.blue || brightenColor(normal.blue),
    magenta: lockedColors?.magenta || brightenColor(normal.magenta),
    cyan: lockedColors?.cyan || brightenColor(normal.cyan),
    white: lockedColors?.white || brightenColor(normal.white)
  };

  // Ensure readability for specific colors

  // Object.keys(bright).forEach((key) => {
  //   if (!Object.keys(lockedColors).includes(key) && key !== 'background') {
  //     bright[key as keyof Colors] = ensureReadability(
  //       bright[key as keyof Colors],
  //       uiColors.background,
  //       4.5
  //     );
  //   }
  // });

  const cssVariables: CssVariables = {
    uiColors,
    brightColors: bright,
    normalColors: normal
  };

  return cssVariables;
}
