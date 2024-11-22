import Color from 'color';
import { randomInteger, randomNumber } from '$lib/utils/vscode/math';
import { ensureReadability, adjustCommentColor } from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';
import { getSchemeHues } from '$lib/state/vscode/scheme-colors.svelte';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';

import type { SyntaxColors } from '$lib/types/color';
import type { SyntaxColorsGenerationOptions } from '$lib/types/theme';

export function generateSyntaxColors(options: SyntaxColorsGenerationOptions): {
  generatedSyntaxColors: SyntaxColors;
} {
  const controlsState = getControls();
  const uiColorsState = getUiColors();
  const schemeHuesState = getSchemeHues();
  const { lockedColors } = options;
  const baseLightness = controlsState().isDark ? 80 : 25;
  const inverseBaseLightness = controlsState().isDark ? 15 : 85;

  const generateColor = (
    schemeHue: number,
    saturationMultiplier: number = 1,
    lightnessShift: number = 0,
    hueShift: number = 0,
    highContrast: boolean = true
  ) => {
    const hue = (schemeHue + hueShift) % 360;
    const saturation = Math.max(
      2,
      Math.min(100, controlsState().syntaxSaturation[0] * saturationMultiplier)
    );
    const lightness = Math.min(
      100,
      Math.max(
        0,
        highContrast ? baseLightness + lightnessShift : inverseBaseLightness - lightnessShift
      )
    );
    return Color.hsl(hue, saturation, lightness).hexa();
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
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        0.45,
        0,
        0,
        false
      ),
    keyword:
      lockedColors?.keyword ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(-13, 13)
      ),
    storage:
      lockedColors?.storage ||
      generateColor(AC2hue, randomNumber(0.75, 1.25), randomInteger(-5, 5)),
    modifier:
      lockedColors?.modifier ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(-5, 5)
      ),
    other:
      lockedColors?.other ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        -randomInteger(0, 6)
      ),

    language:
      lockedColors?.language ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        -randomInteger(0, 9)
      ),
    operator:
      lockedColors?.operator ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(0, 13)
      ),
    control:
      lockedColors?.control ||
      generateColor(controlHue!, randomNumber(0.75, 1.25), randomInteger(-20, 20)),
    controlFlow:
      lockedColors?.controlFlow ||
      generateColor(
        controlHue!,
        randomNumber(0.75, 1.25),
        randomInteger(-25, 25),
        randomInteger(-45, 45)
      ),
    controlImport:
      lockedColors?.controlImport ||
      generateColor(
        controlHue!,
        randomNumber(0.75, 1.25),
        randomInteger(-27, 27),
        randomInteger(-45, 45)
      ),

    support:
      lockedColors?.support ||
      generateColor(supportHue!, randomNumber(0.75, 1.25), -randomInteger(-7, 7)),
    supportFunction:
      lockedColors?.supportFunction ||
      generateColor(supportFunctionHue!, randomNumber(0.75, 1.25), randomInteger(-20, 20)),
    supportMethod:
      lockedColors?.supportMethod ||
      generateColor(
        supportFunctionHue!,
        randomNumber(0.75, 1.25),
        randomInteger(-20, 20),
        randomInteger(-25, 25)
      ),
    supportVariable:
      lockedColors?.supportVariable ||
      generateColor(supportHue!, randomNumber(0.75, 1.25), randomInteger(-20, 20)),
    supportProperty:
      lockedColors?.supportProperty ||
      generateColor(
        supportHue!,
        randomNumber(0.75, 1.25),
        randomInteger(-20, 20),
        randomInteger(-10, 10)
      ),

    function:
      lockedColors?.function ||
      generateColor(functionHue, randomNumber(0.75, 1.25), randomInteger(-7, 7)),
    functionCall:
      lockedColors?.functionCall ||
      generateColor(
        functionHue,
        randomNumber(0.75, 1.25),
        randomInteger(-13, 13),
        randomInteger(-15, 15)
      ),
    method:
      lockedColors?.method ||
      generateColor(methodHue!, randomNumber(0.75, 1.25), randomInteger(0, 7)),
    methodCall:
      lockedColors?.methodCall ||
      generateColor(
        methodHue!,
        randomNumber(0.75, 1.25),
        randomInteger(5, 13),
        randomInteger(-15, 15)
      ),
    selector:
      lockedColors?.selector ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(0, 7)
      ),

    parameter:
      lockedColors?.parameter ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(-7, 7)
      ),
    variable:
      lockedColors?.variable ||
      generateColor(variableHue!, randomNumber(0.75, 1.25), randomInteger(0, 3)),
    variableReadonly:
      lockedColors?.variableReadonly ||
      generateColor(
        variableHue!,
        randomNumber(0.75, 1.25),
        randomInteger(-15, 15),
        randomInteger(-15, 15)
      ),
    variableDeclaration:
      lockedColors?.variableDeclaration ||
      generateColor(
        variableHue!,
        randomNumber(0.75, 1.25),
        randomInteger(-15, 15),
        randomInteger(-15, 15)
      ),
    variableProperty:
      lockedColors?.variableProperty ||
      generateColor(
        variableHue!,
        randomNumber(0.75, 1.25),
        randomInteger(-15, 15),
        randomInteger(-15, 15)
      ),

    property:
      lockedColors?.property ||
      generateColor(propertyHue!, randomNumber(0.75, 1.25), randomInteger(0, 15)),
    propertyDeclaration:
      lockedColors?.propertyDeclaration ||
      generateColor(
        propertyHue!,
        randomNumber(0.75, 1.25),
        randomInteger(0, 15),
        randomInteger(-15, 15)
      ),
    class:
      lockedColors?.class ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(0, 3)
      ),
    type:
      lockedColors?.type || generateColor(typeHue!, randomNumber(0.75, 1.25), randomInteger(-5, 5)),
    typeParameter:
      lockedColors?.typeParameter ||
      generateColor(
        typeHue!,
        randomNumber(0.75, 1.25),
        -randomInteger(-5, 5),
        randomInteger(-30, 30)
      ),

    tag: lockedColors?.tag || generateColor(tagHue!, randomNumber(0.75, 1.25), randomInteger(3, 9)),
    attribute:
      lockedColors?.attribute ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(-10, 10)
      ),
    constant:
      lockedColors?.constant ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(-9, 9)
      ),
    unit:
      lockedColors?.unit ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        -randomInteger(-5, 5)
      ),
    datetime:
      lockedColors?.datetime ||
      generateColor(
        schemeHuesState().schemeHues[
          randomInteger(0, schemeHuesState().schemeHues.length - 1) %
            schemeHuesState().schemeHues.length
        ]!,
        randomNumber(0.75, 1.25),
        randomInteger(0, 5)
      ),

    tagPunctuation:
      lockedColors?.tagPunctuation ||
      generateColor(tagHue!, randomNumber(0.5, 1.25), randomInteger(0, 6), randomInteger(9, 17)),
    punctuation:
      lockedColors?.punctuation ||
      generateColor(punctuationHue!, randomNumber(0.7, 1.25), randomInteger(-15, 15)),
    punctuationQuote:
      lockedColors?.punctuationQuote ||
      generateColor(
        punctuationHue!,
        randomNumber(0.7, 1.25),
        randomInteger(-20, 20),
        randomInteger(-30, 30)
      ),
    punctuationBrace:
      lockedColors?.punctuationBrace ||
      generateColor(
        punctuationHue!,
        randomNumber(0.7, 1.25),
        randomInteger(-20, 20),
        randomInteger(-30, 30)
      ),
    punctuationComma:
      lockedColors?.punctuationComma ||
      generateColor(
        punctuationHue!,
        randomNumber(0.7, 1.25),
        randomInteger(-20, 20),
        randomInteger(-30, 30)
      )
  };

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

  // Apply the new comment color adjustment
  if (!lockedColors?.comment) {
    syntaxColors.comment = adjustCommentColor(
      syntaxColors.comment,
      uiColorsState().uiColors.BG1,
      controlsState().isDark ? 3 : 1.5, // minContrast
      controlsState().isDark ? 3.25 : 2.5 // maxContrast
    );
  }
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
