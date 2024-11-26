import { oklch } from 'culori';
import { randomInteger } from '$lib/utils/vscode/math';
import { ensureReadability, randomizeColor } from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';
import { getSchemeHues } from '$lib/state/vscode/scheme-colors.svelte';

import { type UIColors } from '$lib/types/color';
import type { UIColorsGenerationOptions } from '$lib/types/theme';
import Color from 'color';

export function generateUIColors(options: UIColorsGenerationOptions): {
  generatedUIColors: UIColors;
} {
  const start = performance.now();
  const schemeHuesState = getSchemeHues();
  const controlsState = getControls();
  const { few, lockedColors } = options;

  const colors: UIColors = {
    BG1:
      lockedColors?.BG1 ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [0, 35] : [93, 100],
        [0, 2]
      ),
    BG2:
      lockedColors?.BG2 ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [0, 25] : [85, 100],
        [0, 3]
      ),
    BG3:
      lockedColors?.BG3 ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [0, 25] : [85, 100],
        [0, 3]
      ),
    FG1:
      lockedColors?.FG1 ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [97, 100] : [0, 20],
        [0, 10]
      ),

    FG2:
      lockedColors?.FG2 ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [95, 100] : [0, 30],
        [0, 15]
      ),
    FG3:
      lockedColors?.FG3 ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [0, 35] : [85, 100],
        [0, 20]
      ),
    AC1:
      lockedColors?.AC1 ||
      randomizeColor(
        [schemeHuesState().schemeHues[0]],
        controlsState().isDark ? [60, 100] : [0, 40],
        [0, 40]
      ),
    AC2:
      lockedColors?.AC2 ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [65, 100] : [0, 50],
        [0, 40]
      ),
    BORDER:
      lockedColors?.BORDER ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [0, 10] : [90, 100],
        [0, 10]
      ),
    INFO:
      lockedColors?.INFO ||
      randomizeColor([233, 270], controlsState().isDark ? [40, 75] : [25, 75], [10, 40]),
    ERROR:
      lockedColors?.ERROR ||
      randomizeColor([24, 32], controlsState().isDark ? [61, 75] : [25, 75], [10, 40]),
    WARNING:
      lockedColors?.WARNING ||
      randomizeColor([33, 100], controlsState().isDark ? [80, 90] : [70, 85], [10, 40]),
    SUCCESS:
      lockedColors?.SUCCESS ||
      randomizeColor([120, 170], controlsState().isDark ? [40, 80] : [25, 75], [10, 40]),
    lineHighlight:
      lockedColors?.lineHighlight ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [5, 40] : [65, 100],
        [0, 25]
      ) + '70',
    selection:
      lockedColors?.selection ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [5, 40] : [65, 100],
        [0, 25]
      ) + '70',
    findMatch:
      lockedColors?.findMatch ||
      randomizeColor(
        [schemeHuesState().schemeHues[randomInteger(0, schemeHuesState().schemeHues.length - 1)]],
        controlsState().isDark ? [5, 40] : [65, 100],
        [0, 25]
      ) + '70'
  };

  const startRead = performance.now();
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
        5.5
      );
    }
  });
  const endRead = performance.now();
  console.log(`ENSURE READABILITY: ${endRead - startRead} milliseconds`);

  if (!few) {
    const startFew = performance.now();
    const ac1Hue = oklch(colors.AC1)?.h;
    const ac2Hue = oklch(colors.AC2)?.h;
    if (ac1Hue && ac2Hue) {
      schemeHuesState().generateAdditionalHues(ac1Hue, controlsState().scheme);
      schemeHuesState().generateAdditionalHues(ac2Hue, controlsState().scheme);
    }
    const endFew = performance.now();
    console.log(`GENERATE ADDITIONAL HUES: ${endFew - startFew} milliseconds`);
  }

  const end = performance.now();
  console.log(`GENERATE UICOLORS: ${end - start} milliseconds`);
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
