import Color from 'color';
import { randomInteger, randomNumber } from '$lib/utils/vscode/math';
import { ensureReadability } from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';
import { getSchemeHues } from '$lib/state/vscode/scheme-colors.svelte';

import { type UIColors } from '$lib/types/color';
import type { UIColorsGenerationOptions } from '$lib/types/theme';

export function generateUIColors(options: UIColorsGenerationOptions): {
  generatedUIColors: UIColors;
} {
  const schemeHuesState = getSchemeHues();
  const controlsState = getControls();
  const { few, lockedColors } = options;
  const bgBase = controlsState().isDark ? randomInteger(0, 5) : randomInteger(90, 100);
  const fgBase = controlsState().isDark ? randomInteger(85, 100) : randomInteger(0, 15);

  const generateColor = (hue: number, saturation: number, lightness: number) => {
    const randomHueShift = randomNumber(-5, 5);
    const randomSaturationShift = randomNumber(-10, 10);
    const randomLightnessShift = randomNumber(-5, 5);

    hue = (hue + randomHueShift + 360) % 360;
    saturation = Math.max(2, Math.min(100, saturation + randomSaturationShift));
    lightness = Math.max(0, Math.min(100, lightness + randomLightnessShift));

    const color = Color.hsl(hue, saturation, lightness).hexa();
    return color;
  };

  const colors: UIColors = {
    BG1:
      lockedColors?.BG1 ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.2, 0.4),
        controlsState().isDark ? bgBase + randomInteger(-5, 7) : bgBase + randomInteger(-5, 10)
      ),
    BG2:
      lockedColors?.BG2 ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.2, 0.4),
        controlsState().isDark ? bgBase + randomInteger(-3, 7) : bgBase + randomInteger(-10, 10)
      ),
    BG3:
      lockedColors?.BG3 ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.2, 0.4),
        controlsState().isDark ? bgBase + randomInteger(-3, 7) : bgBase + randomInteger(-13, 10)
      ),
    FG1:
      lockedColors?.FG1 ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.2, 1.25),
        controlsState().isDark ? fgBase - randomInteger(0, 7) : fgBase + randomInteger(0, 9)
      ),

    FG2:
      lockedColors?.FG2 ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.2, 1.25),
        controlsState().isDark ? fgBase - randomInteger(3, 15) : fgBase + randomInteger(3, 15)
      ),
    FG3:
      lockedColors?.FG3 ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.6, 1.25),
        controlsState().isDark ? bgBase + randomInteger(0, 5) : bgBase - randomInteger(0, 5)
      ),
    AC1:
      lockedColors?.AC1 ||
      generateColor(
        schemeHuesState().schemeHues[0] ?? 0,
        controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
        controlsState().isDark ? 60 : fgBase + randomInteger(0, 40)
      ),
    AC2:
      lockedColors?.AC2 ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
        controlsState().isDark ? 65 : fgBase + randomInteger(0, 50)
      ),
    BORDER:
      lockedColors?.BORDER ||
      generateColor(
        schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
          0,
        controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
        controlsState().isDark ? bgBase + randomInteger(-10, 10) : bgBase + randomInteger(-5, 5)
      ),
    INFO:
      lockedColors?.INFO ||
      generateColor(
        210,
        controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
        controlsState().isDark ? 65 : 45
      ),
    ERROR:
      lockedColors?.ERROR ||
      generateColor(
        0,
        controlsState().uiSaturation[0] * randomNumber(0.2, 1.5),
        controlsState().isDark ? 65 : 35
      ),
    WARNING:
      lockedColors?.WARNING ||
      generateColor(
        30,
        controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
        controlsState().isDark ? 65 : 35
      ),
    SUCCESS:
      lockedColors?.SUCCESS ||
      generateColor(
        120,
        controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
        controlsState().isDark ? 40 : 25
      ),
    lineHighlight:
      lockedColors?.lineHighlight ||
      Color(
        generateColor(
          schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
            0,
          controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
          controlsState().isDark ? bgBase + 5 : bgBase - 5
        )
      ).hex() + '70',
    selection:
      lockedColors?.selection ||
      Color(
        generateColor(
          schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
            0,
          controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
          controlsState().isDark ? bgBase + 15 : bgBase - 15
        )
      ).hex() + '70',
    findMatch:
      lockedColors?.findMatch ||
      Color(
        generateColor(
          schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)] ??
            0,
          controlsState().uiSaturation[0] * randomNumber(0.3, 1.25),
          controlsState().isDark ? bgBase + 20 : bgBase - 20
        )
      ).hex() + '70'
  };
  // Ensure readability for specific colors
  Object.keys(colors).forEach((key) => {
    if (
      !Object.keys(lockedColors).includes(key) &&
      key !== 'lineHighlight' &&
      key !== 'selection' &&
      key !== 'findMatch' &&
      key !== 'BORDER' &&
      key !== 'BG1' &&
      key !== 'BG2' &&
      key !== 'BG3' &&
      key !== 'FG3'
    ) {
      colors[key as keyof UIColors] = ensureReadability(
        colors[key as keyof UIColors],
        colors.BG1,
        key.startsWith('BG') ? 1.0 : 5.5
      );
    }
  });

  if (!few) {
    const ac1Hue = Color(colors.AC1).hue();
    const ac2Hue = Color(colors.AC2).hue();
    schemeHuesState().generateAdditionalHues(ac1Hue, controlsState().scheme);
    schemeHuesState().generateAdditionalHues(ac2Hue, controlsState().scheme);
  }
  return { generatedUIColors: colors };
}

// TODO think of a way to increase and decrease saturation without normalizing all colors saturations
export function updateUIColorsWithSaturation(
  currentColors: UIColors,
  newUiSaturation: number,
  lockedColors?: Partial<UIColors>
): UIColors {
  const updateColorSaturation = (color: string, saturationMultiplier: number) => {
    const hsl = Color(color).hsl();
    const newSaturation = Math.max(2, Math.min(100, newUiSaturation * saturationMultiplier));
    return Color.hsl(hsl.hue(), newSaturation, hsl.lightness()).hexa();
  };

  const updatedColors: UIColors = { ...currentColors };

  const saturationMultipliers = {
    BG1: 0.45,
    BG2: 0.45,
    BG3: 0.45,
    FG1: 1.2,
    FG2: 1,
    FG3: 0.9,
    AC1: 0.8,
    AC2: 1.2,
    BORDER: 1,
    INFO: 0.9,
    ERROR: 0.85,
    WARNING: 1,
    SUCCESS: 0.8
  };

  Object.keys(updatedColors).forEach((key) => {
    if (key !== 'lineHighlight' && key !== 'selection' && key !== 'findMatch') {
      if (!lockedColors || !lockedColors[key as keyof UIColors]) {
        updatedColors[key as keyof UIColors] = updateColorSaturation(
          currentColors[key as keyof UIColors],
          saturationMultipliers[key as keyof typeof saturationMultipliers]
        );
      }
    }
  });

  return updatedColors;
}
