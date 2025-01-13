import { randomInteger, randomEnum } from '$lib/utils/common/math';
import { getThemeState } from './colors.svelte';
import { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

let isDark = $state(true);
let baseHue = $state([randomInteger(0, 360)]);
let scheme = $state(randomEnum(Object(ColorSchemes)));
let uniform = $state(true);

export function getControlsState() {
  function setIsDark(value: boolean) {
    isDark = value;
  }
  function setBaseHue(value: number[]) {
    baseHue = value;
  }

  function setScheme(value: ColorSchemes) {
    scheme = value;
  }

  function setUniform(value: boolean) {
    uniform = value;
  }

  function generate() {
    const themeState = getThemeState();
    themeState().setSelectedColor(null);
    themeState().generate(isDark, baseHue[0], scheme as ColorSchemes, uniform);
  }

  function randomize() {
    setBaseHue([randomInteger(0, 360)]);
    setScheme(randomEnum(Object(ColorSchemes)) as ColorSchemes);
    const themeState = getThemeState();
    themeState().setSelectedColor(null);
    themeState().generate(isDark, baseHue[0], scheme as ColorSchemes, uniform);
  }

  return () => ({
    isDark,
    baseHue,
    scheme,
    uniform,
    setIsDark,
    setBaseHue,
    setScheme,
    setUniform,
    generate,
    randomize
  });
}
