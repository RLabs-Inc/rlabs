import { randomInteger } from '$lib/utils/common/math';
import {
  ensureReadability,
  adjustCommentColor,
  randomizeColor
} from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';
import { getSchemeHues } from '$lib/state/vscode/scheme-colors.svelte';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';

import type { SyntaxColors } from '$lib/types/vscode/color';
import type { SyntaxColorsGenerationOptions } from '$lib/types/vscode/theme';
import { toOKLCH } from '$lib/components/vscode/color-picker/color-utils.svelte';

export function generateSyntaxColors(options: SyntaxColorsGenerationOptions): {
  generatedSyntaxColors: SyntaxColors;
} {
  const controlsState = getControls();
  const uiColorsState = getUiColors();
  const schemeHuesState = getSchemeHues();
  const { lockedColors, few } = options;

  const getRandomHue = () => {
    return schemeHuesState().schemeHues[
      randomInteger(0, schemeHuesState().schemeHues.length - 1) %
        schemeHuesState().schemeHues.length
    ];
  };

  const AC1hue = toOKLCH(uiColorsState().uiColors.AC1)!.h || 0;
  const AC2hue = toOKLCH(uiColorsState().uiColors.AC2)!.h || 0;

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
    comment: lockedColors?.comment || randomizeColor([getRandomHue()], [0, 100], [0, 5]),
    keyword: lockedColors?.keyword || randomizeColor([getRandomHue()], [0, 100], [0, 40]),
    storage: lockedColors?.storage || randomizeColor([AC2hue], [0, 100], [0, 40]),
    modifier: lockedColors?.modifier || randomizeColor([getRandomHue()], [0, 100], [0, 40]),
    other: lockedColors?.other || randomizeColor([getRandomHue()], [0, 100], [0, 40]),

    language: lockedColors?.language || randomizeColor([getRandomHue()], [0, 100], [0, 40]),
    operator: lockedColors?.operator || randomizeColor([getRandomHue()], [0, 100], [0, 40]),
    control: lockedColors?.control || randomizeColor([controlHue], [0, 100], [0, 40]),
    controlFlow: lockedColors?.controlFlow || randomizeColor([controlHue], [0, 100], [0, 40]),
    controlImport: lockedColors?.controlImport || randomizeColor([controlHue], [0, 100], [0, 40]),
    support: lockedColors?.support || randomizeColor([supportHue], [0, 100], [0, 40]),
    supportFunction:
      lockedColors?.supportFunction ||
      randomizeColor([few ? supportHue : supportFunctionHue], [0, 100], [0, 40]),
    supportMethod:
      lockedColors?.supportMethod ||
      randomizeColor([few ? supportHue : supportFunctionHue], [0, 100], [0, 40]),
    supportVariable:
      lockedColors?.supportVariable || randomizeColor([supportHue], [0, 100], [0, 40]),
    supportProperty:
      lockedColors?.supportProperty || randomizeColor([supportHue], [0, 100], [0, 40]),

    function: lockedColors?.function || randomizeColor([functionHue], [0, 100], [0, 40]),
    functionCall: lockedColors?.functionCall || randomizeColor([functionHue], [0, 100], [0, 40]),
    method:
      lockedColors?.method || randomizeColor([few ? functionHue : methodHue], [0, 100], [0, 40]),
    methodCall:
      lockedColors?.methodCall ||
      randomizeColor([few ? functionHue : methodHue], [0, 100], [0, 40]),
    selector:
      lockedColors?.selector ||
      randomizeColor([few ? functionHue : getRandomHue()], [0, 100], [0, 40]),

    parameter:
      lockedColors?.parameter ||
      randomizeColor([few ? variableHue : getRandomHue()], [0, 100], [0, 40]),
    variable: lockedColors?.variable || randomizeColor([variableHue], [0, 100], [0, 40]),
    variableReadonly:
      lockedColors?.variableReadonly || randomizeColor([variableHue], [0, 100], [0, 40]),
    variableDeclaration:
      lockedColors?.variableDeclaration || randomizeColor([variableHue], [0, 100], [0, 40]),
    variableProperty:
      lockedColors?.variableProperty ||
      randomizeColor([few ? variableHue : propertyHue], [0, 100], [0, 40]),
    property:
      lockedColors?.property ||
      randomizeColor([few ? variableHue : propertyHue], [0, 100], [0, 40]),
    propertyDeclaration:
      lockedColors?.propertyDeclaration ||
      randomizeColor([few ? variableHue : propertyHue], [0, 100], [0, 40]),
    class:
      lockedColors?.class || randomizeColor([few ? typeHue : getRandomHue()], [0, 100], [0, 40]),
    type: lockedColors?.type || randomizeColor([typeHue], [0, 100], [0, 40]),
    typeParameter: lockedColors?.typeParameter || randomizeColor([typeHue], [0, 100], [0, 40]),

    tag: lockedColors?.tag || randomizeColor([tagHue], [0, 100], [0, 40]),
    attribute:
      lockedColors?.attribute ||
      randomizeColor([few ? variableHue : getRandomHue()], [0, 100], [0, 40]),
    constant: lockedColors?.constant || randomizeColor([getRandomHue()], [0, 100], [0, 40]),
    unit: lockedColors?.unit || randomizeColor([getRandomHue()], [0, 100], [0, 40]),
    datetime: lockedColors?.datetime || randomizeColor([getRandomHue()], [0, 100], [0, 40]),

    tagPunctuation: lockedColors?.tagPunctuation || randomizeColor([tagHue], [0, 100], [0, 40]),
    punctuation: lockedColors?.punctuation || randomizeColor([punctuationHue], [0, 100], [0, 40]),
    punctuationQuote:
      lockedColors?.punctuationQuote || randomizeColor([punctuationHue], [0, 100], [0, 40]),
    punctuationBrace:
      lockedColors?.punctuationBrace || randomizeColor([punctuationHue], [0, 100], [0, 40]),
    punctuationComma:
      lockedColors?.punctuationComma || randomizeColor([punctuationHue], [0, 100], [0, 40])
  };
  // Ensure readability and harmony
  Object.keys(syntaxColors).forEach((key) => {
    if (key != 'comment') {
      if (!lockedColors?.[key as keyof SyntaxColors]) {
        syntaxColors[key as keyof SyntaxColors] = ensureReadability(
          syntaxColors[key as keyof SyntaxColors],
          uiColorsState().uiColors.BG1,
          5.5
        );
      }
    }
  });
  // Apply the new comment color adjustment
  if (!lockedColors?.comment) {
    syntaxColors.comment = adjustCommentColor(
      syntaxColors.comment,
      uiColorsState().uiColors.BG1,
      uiColorsState().uiColors.BG3,
      controlsState().isDark
    );
  }
  return {
    generatedSyntaxColors: syntaxColors
  };
}
