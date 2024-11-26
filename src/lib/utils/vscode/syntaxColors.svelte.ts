import Color from 'color';
import { randomInteger, randomNumber } from '$lib/utils/vscode/math';
import {
  ensureReadability,
  adjustCommentColor,
  randomizeColor
} from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';
import { getSchemeHues } from '$lib/state/vscode/scheme-colors.svelte';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';

import type { SyntaxColors } from '$lib/types/color';
import type { SyntaxColorsGenerationOptions } from '$lib/types/theme';

export function generateSyntaxColors(options: SyntaxColorsGenerationOptions): {
  generatedSyntaxColors: SyntaxColors;
} {
  const start = performance.now();
  const controlsState = getControls();
  const uiColorsState = getUiColors();
  const schemeHuesState = getSchemeHues();
  const { lockedColors } = options;

  const isDark = controlsState().isDark;

  const baseLightness = controlsState().isDark ? 80 : 25;
  const inverseBaseLightness = controlsState().isDark ? 15 : 85;

  // const generateColor = (
  //   schemeHue: number,
  //   saturationMultiplier: number = 1,
  //   lightnessShift: number = 0,
  //   hueShift: number = 0,
  //   highContrast: boolean = true
  // ) => {
  //   // const startGen = performance.now();
  //   const hue = (schemeHue + hueShift) % 360;
  //   const saturation = Math.max(
  //     2,
  //     Math.min(100, controlsState().syntaxSaturation[0] * saturationMultiplier)
  //   );
  //   const lightness = Math.min(
  //     100,
  //     Math.max(
  //       0,
  //       highContrast ? baseLightness + lightnessShift : inverseBaseLightness - lightnessShift
  //     )
  //   );
  //   // const endGen = performance.now();
  //   // console.log(`GENERATE COLOR: ${endGen - startGen} milliseconds`);
  //   return Color.hsl(hue, saturation, lightness).hexa();
  // };

  const getRandomHue = () => {
    return schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  };

  const AC1hue = Color(uiColorsState().uiColors.AC1).hsl().hue();
  const AC2hue = Color(uiColorsState().uiColors.AC2).hsl().hue();

  const functionHue = AC1hue;
  const methodHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const variableHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const supportHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const supportFunctionHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const propertyHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const typeHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const punctuationHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const tagHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  const controlHue =
    schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];

  const syntaxColors: SyntaxColors = {
    comment:
      lockedColors?.comment ||
      randomizeColor([getRandomHue()], isDark ? [10, 20] : [60, 90], [0, 10]),
    keyword:
      lockedColors?.keyword ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    storage:
      lockedColors?.storage || randomizeColor([AC2hue], isDark ? [40, 90] : [15, 60], [0, 40]),
    modifier:
      lockedColors?.modifier ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    other:
      lockedColors?.other ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),

    language:
      lockedColors?.language ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    operator:
      lockedColors?.operator ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    control:
      lockedColors?.control || randomizeColor([controlHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    controlFlow:
      lockedColors?.controlFlow ||
      randomizeColor([controlHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    controlImport:
      lockedColors?.controlImport ||
      randomizeColor([controlHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    support:
      lockedColors?.support || randomizeColor([supportHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    supportFunction:
      lockedColors?.supportFunction ||
      randomizeColor([supportFunctionHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    supportMethod:
      lockedColors?.supportMethod ||
      randomizeColor([supportFunctionHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    supportVariable:
      lockedColors?.supportVariable ||
      randomizeColor([supportHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    supportProperty:
      lockedColors?.supportProperty ||
      randomizeColor([supportHue], isDark ? [40, 90] : [15, 60], [0, 40]),

    function:
      lockedColors?.function ||
      randomizeColor([functionHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    functionCall:
      lockedColors?.functionCall ||
      randomizeColor([functionHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    method:
      lockedColors?.method || randomizeColor([methodHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    methodCall:
      lockedColors?.methodCall ||
      randomizeColor([methodHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    selector:
      lockedColors?.selector ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),

    parameter:
      lockedColors?.parameter ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    variable:
      lockedColors?.variable ||
      randomizeColor([variableHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    variableReadonly:
      lockedColors?.variableReadonly ||
      randomizeColor([variableHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    variableDeclaration:
      lockedColors?.variableDeclaration ||
      randomizeColor([variableHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    variableProperty:
      lockedColors?.variableProperty ||
      randomizeColor([variableHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    property:
      lockedColors?.property ||
      randomizeColor([propertyHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    propertyDeclaration:
      lockedColors?.propertyDeclaration ||
      randomizeColor([propertyHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    class:
      lockedColors?.class ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    type: lockedColors?.type || randomizeColor([typeHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    typeParameter:
      lockedColors?.typeParameter ||
      randomizeColor([typeHue], isDark ? [40, 90] : [15, 60], [0, 40]),

    tag: lockedColors?.tag || randomizeColor([tagHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    attribute:
      lockedColors?.attribute ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    constant:
      lockedColors?.constant ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    unit:
      lockedColors?.unit || randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),
    datetime:
      lockedColors?.datetime ||
      randomizeColor([getRandomHue()], isDark ? [40, 90] : [15, 60], [0, 40]),

    tagPunctuation:
      lockedColors?.tagPunctuation ||
      randomizeColor([tagHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    punctuation:
      lockedColors?.punctuation ||
      randomizeColor([punctuationHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    punctuationQuote:
      lockedColors?.punctuationQuote ||
      randomizeColor([punctuationHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    punctuationBrace:
      lockedColors?.punctuationBrace ||
      randomizeColor([punctuationHue], isDark ? [40, 90] : [15, 60], [0, 40]),
    punctuationComma:
      lockedColors?.punctuationComma ||
      randomizeColor([punctuationHue], isDark ? [40, 90] : [15, 60], [0, 40])
  };

  const startRead = performance.now();
  // Ensure readability and harmony
  Object.keys(syntaxColors).forEach((key) => {
    if (!lockedColors?.[key as keyof SyntaxColors]) {
      syntaxColors[key as keyof SyntaxColors] = ensureReadability(
        syntaxColors[key as keyof SyntaxColors],
        uiColorsState().uiColors.BG1,
        5.5
      );
    }
  });
  const endRead = performance.now();
  console.log(`ENSURE READABILITY: ${endRead - startRead} milliseconds`);

  const startAdjust = performance.now();
  // Apply the new comment color adjustment
  if (!lockedColors?.comment) {
    syntaxColors.comment = adjustCommentColor(
      syntaxColors.comment,
      controlsState().isDark ? uiColorsState().uiColors.BG1 : uiColorsState().uiColors.BG2,
      controlsState().isDark
    );
  }
  const endAdjust = performance.now();
  console.log(`ADJUST COMMENT COLOR: ${endAdjust - startAdjust} milliseconds`);
  const end = performance.now();
  console.log(`GENERATE SYNTAX COLORS: ${end - start} milliseconds`);
  return { generatedSyntaxColors: syntaxColors };
}

// TODO think of a way to increase and decrease saturation without normalizing all colors saturations
export function updateSyntaxColorsWithSaturation(
  currentColors: SyntaxColors,
  newSyntaxSaturation: number,
  lockedColors?: Partial<SyntaxColors>
): SyntaxColors {
  const uiColorsState = getUiColors();
  const syntaxColorsState = getSyntaxColors();
  const updateColorSaturation = (color: string, saturationMultiplier: number) => {
    const hsl = Color(color).hsl();
    const newSaturation = Math.max(2, Math.min(100, newSyntaxSaturation * saturationMultiplier));
    return Color.hsl(hsl.hue(), newSaturation, hsl.lightness()).hexa();
  };

  const updatedColors: SyntaxColors = { ...syntaxColorsState().syntaxColors };

  const saturationMultipliers = {
    comment: 0.5,
    storage: 1,
    keyword: 1,
    modifier: 1,

    constant: 1,
    unit: 1,
    datetime: 1,
    support: 1,
    supportVariable: 1,
    supportProperty: 1,
    supportFunction: 1,
    supportMethod: 1,

    variable: 1,
    variableReadonly: 1,
    variableDeclaration: 1,
    variableProperty: 1,
    parameter: 1,

    property: 1,
    propertyDeclaration: 1,
    attribute: 1,
    function: 1,
    functionCall: 1,

    method: 1,
    methodCall: 1,

    control: 1,
    controlFlow: 1,
    controlImport: 1,
    operator: 1,

    class: 1,
    type: 1,
    typeParameter: 1,
    selector: 1,

    language: 1,
    other: 1,
    tag: 1,
    tagPunctuation: 1,

    punctuation: 0.8,
    punctuationQuote: 0.8,
    punctuationBrace: 0.8,
    punctuationComma: 0.8
  };

  Object.keys(updatedColors).forEach((key) => {
    if (key !== 'comment') {
      if (!lockedColors || !lockedColors[key as keyof SyntaxColors]) {
        updatedColors[key as keyof SyntaxColors] = updateColorSaturation(
          currentColors[key as keyof SyntaxColors],
          saturationMultipliers[key as keyof typeof saturationMultipliers]
        );
      }
    }
  });

  // Ensure readability
  Object.keys(updatedColors).forEach((key) => {
    if (key !== 'comment') {
      if (!lockedColors || !lockedColors[key as keyof SyntaxColors]) {
        updatedColors[key as keyof SyntaxColors] = ensureReadability(
          updatedColors[key as keyof SyntaxColors],
          uiColorsState().uiColors.BG1,
          5.5
        );
      }
    }
  });

  return updatedColors;
}
