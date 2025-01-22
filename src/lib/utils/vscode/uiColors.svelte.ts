// import { oklch } from 'culori';
import { randomInteger } from '$lib/utils/common/math';
import { ensureReadability, randomizeColor } from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';
import { getSchemeHues } from '$lib/state/vscode/scheme-colors.svelte';

import { type UIColors } from '$lib/types/vscode/color';
import type { UIColorsGenerationOptions } from '$lib/types/vscode/theme';

export function generateUIColors(options: UIColorsGenerationOptions): {
  generatedUIColors: UIColors;
} {
  const schemeHuesState = getSchemeHues();
  const controlsState = getControls();
  const { few, lockedColors } = options;

  const getRandomHue = () => {
    return schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  };

  const hues = {
    bg: [getRandomHue()],
    fg: [getRandomHue()]
  };

  const colors: UIColors = {
    BG1:
      lockedColors?.BG1 ||
      randomizeColor(
        [few ? hues.bg[0] : getRandomHue()],
        controlsState().isDark ? [0, 35] : [93, 100],
        [0, 2]
      ),
    BG2:
      lockedColors?.BG2 ||
      randomizeColor(
        [few ? hues.bg[0] : getRandomHue()],
        controlsState().isDark ? [0, 25] : [88, 100],
        [0, 5]
      ),
    BG3:
      lockedColors?.BG3 ||
      randomizeColor(
        [few ? hues.bg[0] : getRandomHue()],
        controlsState().isDark ? [0, 30] : [90, 100],
        [0, 3]
      ),
    FG1:
      lockedColors?.FG1 ||
      randomizeColor(
        [few ? hues.fg[0] : getRandomHue()],
        controlsState().isDark ? [97, 100] : [0, 15],
        [0, 10]
      ),
    FG2:
      lockedColors?.FG2 ||
      randomizeColor(
        [few ? hues.fg[0] : getRandomHue()],
        controlsState().isDark ? [95, 100] : [0, 30],
        [0, 15]
      ),
    FG3:
      lockedColors?.FG3 ||
      randomizeColor(
        [few ? hues.fg[0] : getRandomHue()],
        controlsState().isDark ? [0, 25] : [88, 100],
        [0, 15]
      ),
    AC1:
      lockedColors?.AC1 ||
      randomizeColor(
        [schemeHuesState().schemeHues[0]],
        controlsState().isDark ? [0, 100] : [0, 100],
        [0, 40]
      ),
    AC2:
      lockedColors?.AC2 ||
      randomizeColor([getRandomHue()], controlsState().isDark ? [0, 100] : [0, 100], [0, 40]),
    BORDER:
      lockedColors?.BORDER ||
      randomizeColor([getRandomHue()], controlsState().isDark ? [0, 40] : [80, 100], [0, 10]),
    INFO:
      lockedColors?.INFO ||
      randomizeColor([233, 270], controlsState().isDark ? [20, 100] : [0, 100], [10, 40]),
    ERROR:
      lockedColors?.ERROR ||
      randomizeColor([24, 32], controlsState().isDark ? [20, 100] : [0, 100], [10, 40]),
    WARNING:
      lockedColors?.WARNING ||
      randomizeColor([33, 100], controlsState().isDark ? [80, 95] : [0, 100], [10, 40]),
    SUCCESS:
      lockedColors?.SUCCESS ||
      randomizeColor([120, 170], controlsState().isDark ? [20, 100] : [0, 100], [10, 40]),
    lineHighlight:
      lockedColors?.lineHighlight ||
      randomizeColor([getRandomHue()], controlsState().isDark ? [5, 40] : [65, 100], [0, 25]) +
        '50',
    selection:
      lockedColors?.selection ||
      randomizeColor([getRandomHue()], controlsState().isDark ? [5, 40] : [65, 100], [0, 25]) +
        '50',
    findMatch:
      lockedColors?.findMatch ||
      randomizeColor([getRandomHue()], controlsState().isDark ? [5, 40] : [65, 100], [0, 25]) + '50'
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
        5.5
      );
    }
  });

  // if (!few) {
  //   const ac1Hue = oklch(colors.AC1)?.h;
  //   const ac2Hue = oklch(colors.AC2)?.h;
  //   if (ac1Hue && ac2Hue) {
  //     schemeHuesState().generateAdditionalHues(ac1Hue, controlsState().scheme);
  //     schemeHuesState().generateAdditionalHues(ac2Hue, controlsState().scheme);
  //   }
  // }

  return { generatedUIColors: colors };
}
