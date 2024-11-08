import { ColorSchemes } from '$lib/types/color';
import { generateSchemeHues } from '$lib/utils/vscode/colorUtils.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';

const controlsState = getControls();

let schemeHues = $state<number[]>([]);

export function getSchemeHues() {
  function set(value: number[]) {
    schemeHues = value;
  }

  function generate() {
    console.log('generate', controlsState().baseHue[0], controlsState().scheme);
    set(
      generateSchemeHues(
        controlsState().baseHue[0],
        ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes]
      )
    );
  }
  function generateAdditionalHues(baseHue: number, scheme: string) {
    console.log('generateAdditionalHues', baseHue, scheme);
    const additionalHues = generateSchemeHues(
      baseHue,
      ColorSchemes[scheme as keyof typeof ColorSchemes]
    );
    console.log('additionalHues', additionalHues);
    set([...schemeHues, ...additionalHues]);
    console.log('schemeHues', schemeHues);
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
