import { generateSchemeHues } from '$lib/utils/common/color-schemes/index.svelte';
import { generateSchemeHuesWithLocks } from '$lib/utils/common/color-schemes/locked-schemes';
import { getControls } from '$lib/state/vscode/controls.svelte';

import { ColorSchemes } from '$lib/types/vscode/color';

let schemeHues = $state<number[]>([]);

export function getSchemeHues() {
  const controlsState = getControls();
  function set(value: number[]) {
    schemeHues = value;
  }

  function generate() {
    set(
      generateSchemeHues(
        controlsState().baseHue[0],
        ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes]
      )
    );
  }

  function generateWithLocks(
    uiLockedColors: Record<string, string> = {},
    syntaxLockedColors: Record<string, string> = {}
  ) {
    set(
      generateSchemeHuesWithLocks({
        baseHue: controlsState().baseHue[0],
        scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
        uiLockedColors,
        syntaxLockedColors
      })
    );
  }

  function generateAdditionalHues(baseHue: number, scheme: string) {
    const additionalHues = generateSchemeHues(
      baseHue,
      ColorSchemes[scheme as keyof typeof ColorSchemes]
    );
    set([...schemeHues, ...additionalHues]);
  }

  return () => ({
    get schemeHues() {
      return schemeHues;
    },
    set,
    generate,
    generateWithLocks,
    generateAdditionalHues
  });
}
