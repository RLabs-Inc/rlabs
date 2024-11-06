import Color from 'color';

import type { UIColors } from '../../types/colors';
import { ColorSchemes } from '../../types/colors';
import type { UIColorsGenerationOptions } from '../../types/theme';

export function generateUIColors(
  options: UIColorsGenerationOptions,
  initialColors: Partial<UIColors> = {},
  forceRegenerate: boolean = false,
): {
  colors: UIColors;
  updatedSchemeHues: number[];
  scheme: ColorSchemes;
} {
  const {
    isDark,
    baseHue = Math.random() * 360,
    uiSaturation = randomInteger(15, 90),
    scheme = ColorSchemes.Analogous,
    lockedColors = {},
    few,
  } = options;

  const schemeHues = generateSchemeColors(baseHue, scheme);

  const bgBase = isDark ? randomInteger(0, 5) : randomInteger(90, 100);
  const fgBase = isDark ? randomInteger(85, 100) : randomInteger(0, 15);

  const generateColor = (hue: number, saturation: number, lightness: number) => {
    if (!forceRegenerate) {
      const randomHueShift = Math.random() * 10 - 5;
      const randomSaturationShift = Math.random() * 20 - 10;
      const randomLightnessShift = Math.random() * 10 - 5;

      hue = (hue + randomHueShift + 360) % 360;
      saturation = Math.max(2, Math.min(100, saturation + randomSaturationShift));
      lightness = Math.max(0, Math.min(100, lightness + randomLightnessShift));
    }

    const color = Color.hsl(hue, saturation, lightness).hexa();
    return color;
  };

  const colors: UIColors = {
    BG1:
      lockedColors?.BG1 ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.2, 0.4),
        isDark ? bgBase + randomInteger(-5, 7) : bgBase + randomInteger(-5, 10),
      ),
    BG2:
      lockedColors?.BG2 ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.2, 0.4),
        isDark ? bgBase + randomInteger(-3, 7) : bgBase + randomInteger(-10, 10),
      ),
    BG3:
      lockedColors?.BG3 ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.2, 0.4),
        isDark ? bgBase + randomInteger(-3, 7) : bgBase + randomInteger(-13, 10),
      ),
    FG1:
      lockedColors?.FG1 ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.2, 1.25),
        isDark ? fgBase - randomInteger(0, 7) : fgBase + randomInteger(0, 9),
      ),

    FG2:
      lockedColors?.FG2 ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.2, 1.25),
        isDark ? fgBase - randomInteger(3, 15) : fgBase + randomInteger(3, 15),
      ),
    FG3:
      lockedColors?.FG3 ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.6, 1.25),
        isDark ? bgBase + randomInteger(0, 5) : bgBase - randomInteger(0, 5),
      ),
    AC1:
      lockedColors?.AC1 ||
      generateColor(
        schemeHues[0] ?? 0,
        uiSaturation * randomNumber(0.3, 1.25),
        isDark ? 60 : fgBase + randomInteger(0, 40),
      ),
    AC2:
      lockedColors?.AC2 ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.3, 1.25),
        isDark ? 65 : fgBase + randomInteger(0, 50),
      ),
    BORDER:
      lockedColors?.BORDER ||
      generateColor(
        schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
        uiSaturation * randomNumber(0.3, 1.25),
        isDark ? bgBase + randomInteger(-10, 10) : bgBase + randomInteger(-5, 5),
      ),
    INFO: lockedColors?.INFO || generateColor(210, uiSaturation * randomNumber(0.3, 1.25), isDark ? 65 : 45),
    ERROR: lockedColors?.ERROR || generateColor(0, uiSaturation * randomNumber(0.2, 1.5), isDark ? 65 : 35),
    WARNING: lockedColors?.WARNING || generateColor(30, uiSaturation * randomNumber(0.3, 1.25), isDark ? 65 : 35),
    SUCCESS: lockedColors?.SUCCESS || generateColor(120, uiSaturation * randomNumber(0.3, 1.25), isDark ? 40 : 25),
    lineHighlight:
      lockedColors?.lineHighlight ||
      Color(
        generateColor(
          schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
          uiSaturation * randomNumber(0.3, 1.25),
          isDark ? bgBase + 5 : bgBase - 5,
        ),
      ).hex() + '70',
    selection:
      lockedColors?.selection ||
      Color(
        generateColor(
          schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
          uiSaturation * randomNumber(0.3, 1.25),
          isDark ? bgBase + 15 : bgBase - 15,
        ),
      ).hex() + '70',
    findMatch:
      lockedColors?.findMatch ||
      Color(
        generateColor(
          schemeHues[randomInteger(0, schemeHues.length - 1)] ?? 0,
          uiSaturation * randomNumber(0.3, 1.25),
          isDark ? bgBase + 20 : bgBase - 20,
        ),
      ).hex() + '70',
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
        key.startsWith('BG') ? 1.5 : 5.5,
      );
    }
  });

  const ac1Hue = Color(colors.AC1).hue();
  const ac2Hue = Color(colors.AC2).hue();

  let updatedSchemeHues = [...schemeHues];

  if (!few) {
    const ac1AdditionalHues = generateSchemeColors(ac1Hue, scheme);
    const ac2AdditionalHues = generateSchemeColors(ac2Hue, scheme);

    updatedSchemeHues = [...schemeHues, ...ac1AdditionalHues, ...ac2AdditionalHues];
  }

  return { colors, updatedSchemeHues, scheme };
}

// TODO think of a way to increase and decrease saturation without normalizing all colors saturations
export function updateUIColorsWithSaturation(
  currentColors: UIColors,
  newUiSaturation: number,
  lockedColors?: Partial<UIColors>,
): UIColors {
  const updateColorSaturation = (color: string, saturationMultiplier: number) => {
    const hsl = Color(color).hsl();
    let newSaturation = Math.max(2, Math.min(100, newUiSaturation * saturationMultiplier));
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
    SUCCESS: 0.8,
  };

  Object.keys(updatedColors).forEach((key) => {
    if (key !== 'lineHighlight' && key !== 'selection' && key !== 'findMatch') {
      if (!lockedColors || !lockedColors[key as keyof UIColors]) {
        updatedColors[key as keyof UIColors] = updateColorSaturation(
          currentColors[key as keyof UIColors],
          saturationMultipliers[key as keyof typeof saturationMultipliers],
        );
      }
    }
  });

  return updatedColors;
}
