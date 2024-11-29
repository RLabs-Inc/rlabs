import { generateSchemeHues } from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';

import { ColorSchemes } from '$lib/types/color';

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
    generateAdditionalHues
  });
}
