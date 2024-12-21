import { randomInteger, randomEnum } from '$lib/utils/common/math';
import { getThemeState } from './colors.svelte';
import { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

let isDark = $state(true);
let baseHue = $state([randomInteger(0, 360)]);
let scheme = $state(randomEnum(Object(ColorSchemes)));

export function getControlsState() {
  function setIsDark(value: boolean) {
    isDark = value;
    console.log('isDark', isDark, value);
  }
  function setBaseHue(value: number[]) {
    baseHue = value;
  }

  function setScheme(value: ColorSchemes) {
    scheme = value;
  }

  function randomize() {
    setBaseHue([randomInteger(0, 360)]);
    setScheme(randomEnum(Object(ColorSchemes)) as ColorSchemes);
    const themeState = getThemeState();
    themeState().generate(baseHue[0], scheme as ColorSchemes);
  }

  return () => ({
    isDark,
    baseHue,
    scheme,
    setIsDark,
    setBaseHue,
    setScheme,
    randomize
  });
}
