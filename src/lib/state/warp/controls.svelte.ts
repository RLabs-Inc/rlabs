import { randomInteger, randomEnum } from '$lib/utils/common/math';
import { getThemeState } from './colors.svelte';
import { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

let isDark = $state(true);
let baseHue = $state([randomInteger(0, 360)]);
let scheme = $state(randomEnum(Object(ColorSchemes)));

export function getControlsState() {
  function setIsDark(value: boolean) {
    isDark = value;
    const themeState = getThemeState();
    if (value) {
      themeState().setThemeDetails('darker');
    } else {
      themeState().setThemeDetails('lighter');
    }
  }
  function setBaseHue(value: number[]) {
    baseHue = value;
  }

  function setScheme(value: ColorSchemes) {
    scheme = value;
  }

  function generate() {
    const themeState = getThemeState();
    themeState().setSelectedColor(null);
    themeState().generate(isDark, baseHue[0], scheme as ColorSchemes);
  }

  function randomize() {
    setBaseHue([randomInteger(0, 360)]);
    setScheme(randomEnum(Object(ColorSchemes)) as ColorSchemes);
    const themeState = getThemeState();
    themeState().setSelectedColor(null);
    themeState().generate(isDark, baseHue[0], scheme as ColorSchemes);
  }

  return () => ({
    isDark,
    baseHue,
    scheme,
    setIsDark,
    setBaseHue,
    setScheme,
    generate,
    randomize
  });
}
