import { randomInteger, randomEnum } from '$lib/utils/common/math';
import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

import { ColorSchemes } from '$lib/types/vscode/color';

import { Lit } from 'litlyx-js';

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
    Lit.event('VSCode Dark mode changed');
  }

  function setScheme(value: string) {
    scheme = value;
    Lit.event('VSCode Color scheme changed');
  }

  function setBaseHue(value: number[]) {
    baseHue = value;
    Lit.event('VSCode Base hue changed');
  }

  function setThemeName(value: string) {
    themeName = value;
    Lit.event('VSCode Theme name changed');
  }

  function setThemeIsPublic(value: boolean) {
    themeIsPublic = value;
    Lit.event('VSCode Theme is public changed');
  }

  function setFewerGeneratedColors(value: boolean) {
    fewerGeneratedColors = value;
    Lit.event('VSCode Fewer generated colors changed');
  }

  function setFewerRandomColors(value: boolean) {
    fewerRandomColors = value;
    Lit.event('VSCode Fewer random colors changed');
  }

  function generate() {
    const selectedTheme = getSelectedTheme();
    selectedTheme().generate(fewerGeneratedColors);
    Lit.event('VSCode Theme generated');
  }

  function randomize() {
    const selectedTheme = getSelectedTheme();
    selectedTheme().randomize(fewerRandomColors);
    Lit.event('VSCode Theme randomize');
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
