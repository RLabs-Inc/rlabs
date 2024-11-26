import { randomInteger, randomEnum } from '$lib/utils/vscode/math';
import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

import { ColorSchemes } from '$lib/types/color';

let isDark = $state(true);
let scheme = $state(randomEnum(Object(ColorSchemes)));
let baseHue = $state([randomInteger(0, 360)]);
let uiSaturation = $state([randomInteger(0, 100)]);
let syntaxSaturation = $state([randomInteger(0, 100)]);
let ansiSaturation = $state([randomInteger(0, 100)]);
let themeName = $state('');
let themeIsPublic = $state(false);
let fewerGeneratedColors = $state(false);
let fewerRandomColors = $state(false);

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

  function setUiSaturation(value: number[]) {
    uiSaturation = value;
    // const uiColorsState = getUiColors();
    // uiColorsState().setUiSaturation(value[0]);
  }

  function setSyntaxSaturation(value: number[]) {
    syntaxSaturation = value;
    // const syntaxColorsState = getSyntaxColors();
    // syntaxColorsState().setSyntaxSaturation(value[0]);
  }

  function setAnsiSaturation(value: number[]) {
    ansiSaturation = value;
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
    console.log('===========================');
    console.log(`GENERATE COLORS`);
    console.log('===========================');
    selectedTheme().generate(fewerGeneratedColors);
  }

  function randomize() {
    const selectedTheme = getSelectedTheme();
    console.log('===========================');
    console.log(`RANDOMIZE COLORS`);
    console.log('===========================');
    selectedTheme().randomize(fewerRandomColors);
  }

  return () => ({
    isDark,
    setIsDark,
    scheme,
    setScheme,
    baseHue,
    setBaseHue,
    uiSaturation,
    setUiSaturation,
    syntaxSaturation,
    setSyntaxSaturation,
    ansiSaturation,
    setAnsiSaturation,
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
