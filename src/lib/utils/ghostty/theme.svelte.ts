import { randomInteger, randomNumber } from '$lib/utils/common/math';
import { ensureReadability } from '$lib/utils/ghostty/colorUtils.svelte';

import type { Controls, UiColors, PaletteColors, CssVariables } from '$lib/types/ghostty/colors';
import { generateSchemeHues } from '../common/color-schemes/patterns';
import { clampChroma, formatHex, random } from 'culori';

export const randomizeColor = (
  hue: number[] = [0, 360],
  lightness: number[] = [0, 100],
  chroma: number[] = [0, 40]
) => {
  const newColor = random('oklch', {
    l: lightness.length > 1 ? [lightness[0] / 100, lightness[1] / 100] : lightness[0] / 100,
    c: chroma.length > 1 ? [chroma[0] / 100, chroma[1] / 100] : chroma[0] / 100,
    h: hue.length > 1 ? [hue[0], hue[1]] : hue[0]
  });
  return formatHex(clampChroma(newColor, 'oklch'));
};

export function generateTheme(options: Controls): {
  cssVariables: CssVariables;
  uiColors: UiColors;
  paletteColors: PaletteColors;
} {
  const { isDark, baseHue, scheme, lockedColors = {}, uniform } = options;
  const schemeHues = generateSchemeHues(baseHue[0], scheme);

  const usedHues = new Set<number>();

  // // Generate scheme hues considering both UI and syntax locked colors
  // if (lockedColors && Object.keys(lockedColors).length > 0) {
  //   schemeHues.generateWithLocks(lockedColors);
  // } else {
  //   schemeHues.generate();
  // }

  // const getRandomHue = () => {
  //   return schemeHues[randomInteger(0, schemeHues.length - 1) % schemeHues.length];
  // };

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

  const uiColorHues = {
    background: [getUniqueRandomHue()],
    foreground: [getUniqueRandomHue()],
    cursorColor: [schemeHues[0]],
    selectionBackground: [getUniqueRandomHue()],
    selectionForeground: [getUniqueRandomHue()]
  };

  const paletteHues = {
    0: [getUniqueRandomHue()],
    1: [getUniqueRandomHue()],
    2: [getUniqueRandomHue()],
    3: [getUniqueRandomHue()],
    4: [getUniqueRandomHue()],
    5: [getUniqueRandomHue()],
    6: [getUniqueRandomHue()],
    7: [getUniqueRandomHue()]
  };

  const uiColors: UiColors = {
    background:
      lockedColors?.background ||
      randomizeColor(uiColorHues.background, isDark ? [0, 35] : [89, 100], [0, 40]),
    foreground:
      lockedColors?.foreground || randomizeColor(uiColorHues.foreground, [0, 100], [0, 40]),
    cursorColor:
      lockedColors?.cursorColor || randomizeColor(uiColorHues.cursorColor, [0, 100], [0, 40]),
    selectionBackground:
      lockedColors?.selectionBackground ||
      randomizeColor(uiColorHues.selectionBackground, isDark ? [0, 35] : [89, 100], [0, 40]),
    selectionForeground:
      lockedColors?.selectionForeground ||
      randomizeColor(uiColorHues.selectionForeground, [0, 100], [0, 40])
  };

  uiColors.foreground = ensureReadability(uiColors.foreground, uiColors.background, 5.5);
  uiColors.selectionForeground = ensureReadability(
    uiColors.selectionForeground,
    uiColors.selectionBackground,
    5.5
  );
  uiColors.cursorColor = ensureReadability(uiColors.cursorColor, uiColors.background, 3.5);

  uiColors.selectionBackground = ensureReadability(
    uiColors.selectionBackground,
    uiColors.background,
    2.5
  );

  const uniformLighness = [randomNumber(0, 93)];
  const getPaletteLightness = () => {
    if (uniform) {
      return uniformLighness;
    } else {
      return [0, 100];
    }
  };
  const getBrightPaletteLightness = () => {
    if (uniform) {
      return [Math.min(96, uniformLighness[0] + 20)]; // uniformLighness;
    } else {
      return [0, 100];
    }
  };

  const paletteColors: PaletteColors = {
    palette0:
      lockedColors?.palette0 || randomizeColor(paletteHues[0], getPaletteLightness(), [0, 40]),
    palette1:
      lockedColors?.palette1 || randomizeColor(paletteHues[1], getPaletteLightness(), [0, 40]),
    palette2:
      lockedColors?.palette2 || randomizeColor(paletteHues[2], getPaletteLightness(), [0, 40]),
    palette3:
      lockedColors?.palette3 || randomizeColor(paletteHues[3], getPaletteLightness(), [0, 40]),
    palette4:
      lockedColors?.palette4 || randomizeColor(paletteHues[4], getPaletteLightness(), [0, 40]),
    palette5:
      lockedColors?.palette5 || randomizeColor(paletteHues[5], getPaletteLightness(), [0, 40]),
    palette6:
      lockedColors?.palette6 || randomizeColor(paletteHues[6], getPaletteLightness(), [0, 40]),
    palette7:
      lockedColors?.palette7 || randomizeColor(paletteHues[7], getPaletteLightness(), [0, 40]),
    palette8:
      lockedColors?.palette8 ||
      randomizeColor(
        uniform ? paletteHues[0] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      ),
    palette9:
      lockedColors?.palette9 ||
      randomizeColor(
        uniform ? paletteHues[1] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      ),
    palette10:
      lockedColors?.palette10 ||
      randomizeColor(
        uniform ? paletteHues[2] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      ),
    palette11:
      lockedColors?.palette11 ||
      randomizeColor(
        uniform ? paletteHues[3] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      ),
    palette12:
      lockedColors?.palette12 ||
      randomizeColor(
        uniform ? paletteHues[4] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      ),
    palette13:
      lockedColors?.palette13 ||
      randomizeColor(
        uniform ? paletteHues[5] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      ),
    palette14:
      lockedColors?.palette14 ||
      randomizeColor(
        uniform ? paletteHues[6] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      ),
    palette15:
      lockedColors?.palette15 ||
      randomizeColor(
        uniform ? paletteHues[7] : [getUniqueRandomHue()],
        getBrightPaletteLightness(),
        [0, 40]
      )
  };

  Object.keys(paletteColors).forEach((key) => {
    if (!Object.keys(lockedColors).includes(key)) {
      paletteColors[key as unknown as keyof PaletteColors] = ensureReadability(
        paletteColors[key as unknown as keyof PaletteColors],
        uiColors.background,
        4.5
      );
    }
  });

  const cssVariables: CssVariables = {
    ...uiColors,
    ...paletteColors
  };

  return { cssVariables, uiColors, paletteColors };
}
