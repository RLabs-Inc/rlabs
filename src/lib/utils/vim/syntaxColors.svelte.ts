import { randomInteger } from '$lib/utils/common/math';
import {
  ensureReadability,
  adjustCommentColor,
  randomizeColor
} from '$lib/utils/vim/colorUtils.svelte';
import { getControls } from '$lib/state/vim/controls.svelte';
import { getSchemeHues } from '$lib/state/vim/scheme-colors.svelte';
import { getUiColors } from '$lib/state/vim/ui-colors.svelte';

import type { SyntaxColors } from '$lib/types/vim/color';
import type { SyntaxColorsGenerationOptions } from '$lib/types/vim/theme';
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
    comment: lockedColors?.comment || randomizeColor([getRandomHue()], [0, 100], [0, 100]),
    keyword: lockedColors?.keyword || randomizeColor([getRandomHue()], [0, 100], [0, 100]),
    storage: lockedColors?.storage || randomizeColor([AC2hue], [0, 100], [0, 100]),
    modifier: lockedColors?.modifier || randomizeColor([getRandomHue()], [0, 100], [0, 100]),
    other: lockedColors?.other || randomizeColor([getRandomHue()], [0, 100], [0, 100]),

    language: lockedColors?.language || randomizeColor([getRandomHue()], [0, 100], [0, 100]),
    operator: lockedColors?.operator || randomizeColor([getRandomHue()], [0, 100], [0, 100]),
    control: lockedColors?.control || randomizeColor([controlHue], [0, 100], [0, 100]),
    controlFlow: lockedColors?.controlFlow || randomizeColor([controlHue], [0, 100], [0, 100]),
    controlImport: lockedColors?.controlImport || randomizeColor([controlHue], [0, 100], [0, 100]),
    support: lockedColors?.support || randomizeColor([supportHue], [0, 100], [0, 100]),
    supportFunction:
      lockedColors?.supportFunction ||
      randomizeColor([few ? supportHue : supportFunctionHue], [0, 100], [0, 100]),
    supportMethod:
      lockedColors?.supportMethod ||
      randomizeColor([few ? supportHue : supportFunctionHue], [0, 100], [0, 100]),
    supportVariable:
      lockedColors?.supportVariable || randomizeColor([supportHue], [0, 100], [0, 100]),
    supportProperty:
      lockedColors?.supportProperty || randomizeColor([supportHue], [0, 100], [0, 100]),

    function: lockedColors?.function || randomizeColor([functionHue], [0, 100], [0, 100]),
    functionCall: lockedColors?.functionCall || randomizeColor([functionHue], [0, 100], [0, 100]),
    method:
      lockedColors?.method || randomizeColor([few ? functionHue : methodHue], [0, 100], [0, 100]),
    methodCall:
      lockedColors?.methodCall ||
      randomizeColor([few ? functionHue : methodHue], [0, 100], [0, 100]),
    selector:
      lockedColors?.selector ||
      randomizeColor([few ? functionHue : getRandomHue()], [0, 100], [0, 100]),

    parameter:
      lockedColors?.parameter ||
      randomizeColor([few ? variableHue : getRandomHue()], [0, 100], [0, 100]),
    variable: lockedColors?.variable || randomizeColor([variableHue], [0, 100], [0, 100]),
    variableReadonly:
      lockedColors?.variableReadonly || randomizeColor([variableHue], [0, 100], [0, 100]),
    variableDeclaration:
      lockedColors?.variableDeclaration || randomizeColor([variableHue], [0, 100], [0, 100]),
    variableProperty:
      lockedColors?.variableProperty ||
      randomizeColor([few ? variableHue : propertyHue], [0, 100], [0, 100]),
    property:
      lockedColors?.property ||
      randomizeColor([few ? variableHue : propertyHue], [0, 100], [0, 100]),
    propertyDeclaration:
      lockedColors?.propertyDeclaration ||
      randomizeColor([few ? variableHue : propertyHue], [0, 100], [0, 100]),
    class:
      lockedColors?.class || randomizeColor([few ? typeHue : getRandomHue()], [0, 100], [0, 100]),
    type: lockedColors?.type || randomizeColor([typeHue], [0, 100], [0, 100]),
    typeParameter: lockedColors?.typeParameter || randomizeColor([typeHue], [0, 100], [0, 100]),

    tag: lockedColors?.tag || randomizeColor([tagHue], [0, 100], [0, 100]),
    attribute:
      lockedColors?.attribute ||
      randomizeColor([few ? variableHue : getRandomHue()], [0, 100], [0, 100]),
    constant: lockedColors?.constant || randomizeColor([getRandomHue()], [0, 100], [0, 100]),
    unit: lockedColors?.unit || randomizeColor([getRandomHue()], [0, 100], [0, 100]),
    datetime: lockedColors?.datetime || randomizeColor([getRandomHue()], [0, 100], [0, 100]),

    tagPunctuation: lockedColors?.tagPunctuation || randomizeColor([tagHue], [0, 100], [0, 100]),
    punctuation: lockedColors?.punctuation || randomizeColor([punctuationHue], [0, 100], [0, 100]),
    punctuationQuote:
      lockedColors?.punctuationQuote || randomizeColor([punctuationHue], [0, 100], [0, 100]),
    punctuationBrace:
      lockedColors?.punctuationBrace || randomizeColor([punctuationHue], [0, 100], [0, 100]),
    punctuationComma:
      lockedColors?.punctuationComma || randomizeColor([punctuationHue], [0, 100], [0, 100])
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
      controlsState().isDark ? uiColorsState().uiColors.BG1 : uiColorsState().uiColors.BG2,
      controlsState().isDark
    );
  }
  return {
    generatedSyntaxColors: syntaxColors
  };
}
