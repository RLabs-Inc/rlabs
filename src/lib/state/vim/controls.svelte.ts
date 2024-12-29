import { randomInteger, randomEnum } from '$lib/utils/common/math';
import { getSelectedTheme } from '$lib/state/vim/theme.svelte';

import { ColorSchemes } from '$lib/types/vim/color';

let isDark = $state(true);
let scheme = $state(randomEnum(Object(ColorSchemes)));
let baseHue = $state([randomInteger(0, 360)]);
let themeName = $state('');
let themeIsPublic = $state(false);
let fewerGeneratedColors = $state(true);
let fewerRandomColors = $state(true);

export function getControls() {
  function setIsDark(value: boolean) {
    isDark = value;
  }

  function setScheme(value: string) {
    scheme = value;
  }

  function setBaseHue(value: number[]) {
    baseHue = value;
  }

  function setThemeName(value: string) {
    themeName = value;
  }

  function setThemeIsPublic(value: boolean) {
    themeIsPublic = value;
  }

  function setFewerGeneratedColors(value: boolean) {
    fewerGeneratedColors = value;
  }

  function setFewerRandomColors(value: boolean) {
    fewerRandomColors = value;
  }

  function generate() {
    const selectedTheme = getSelectedTheme();
    selectedTheme().generate(fewerGeneratedColors);
  }

  function randomize() {
    const selectedTheme = getSelectedTheme();
    selectedTheme().randomize(fewerRandomColors);
  }

  return () => ({
    isDark,
    setIsDark,
    scheme,
    setScheme,
    baseHue,
    setBaseHue,
    themeName,
    setThemeName,
    themeIsPublic,
    setThemeIsPublic,
    fewerGeneratedColors,
    setFewerGeneratedColors,
    fewerRandomColors,
    setFewerRandomColors,
    generate,
    randomize
  });
}
