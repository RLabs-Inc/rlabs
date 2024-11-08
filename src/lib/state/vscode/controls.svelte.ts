import { randomInteger, randomEnum } from '$lib/utils/vscode/math';

import { ColorSchemes } from '$lib/types/color';
import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
import { getSchemeHues } from '$lib/state/vscode/scheme-colors.svelte';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';
import { getMonacoEditor } from '$lib/components/vscode/monaco-editor/monaco.svelte';
import { initialAnsiColors } from '$lib/constants/colors';
import { initialSyntaxColors } from '$lib/constants/colors';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';
import { initialUIColors } from '$lib/constants/colors';

const selectedTheme = getSelectedTheme();
const schemeHuesState = getSchemeHues();
const uiColorsState = getUiColors();
const syntaxColorsState = getSyntaxColors();
const ansiColorsState = getAnsiColors();
const monacoEditor = getMonacoEditor();

let isDark = $state(false);
let scheme = $state(randomEnum(Object(ColorSchemes)));
let baseHue = $state([randomInteger(0, 360)]);
let uiSaturation = $state([randomInteger(0, 100)]);
let syntaxSaturation = $state([randomInteger(0, 100)]);
let ansiSaturation = $state([randomInteger(0, 100)]);
let themeName = $state('');
let themeIsPublic = $state(false);

const themeJSON = $derived(
  generateSemanticThemeJSON(
    'theme',
    selectedTheme().theme?.uiColors || initialUIColors,
    selectedTheme().theme?.syntaxColors || initialSyntaxColors,
    selectedTheme().theme?.ansiColors || initialAnsiColors
  ).themeJSON
);

export function getControls() {
  function setIsDark(value: boolean) {
    isDark = value;
    schemeHuesState().generate();
    uiColorsState().generate();
    syntaxColorsState().generate();
    ansiColorsState().generate();
    monacoEditor.changeTheme(themeJSON);
  }

  function setScheme(value: string) {
    scheme = value;
  }

  function setBaseHue(value: number[]) {
    baseHue = value;
  }

  function setUiSaturation(value: number[]) {
    uiSaturation = value;
  }

  function setSyntaxSaturation(value: number[]) {
    syntaxSaturation = value;
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

  function generate() {
    schemeHuesState().generate();
    uiColorsState().generate();
    syntaxColorsState().generate();
    ansiColorsState().generate();

    selectedTheme().set({
      id: selectedTheme().theme?.id || 0,
      userId: selectedTheme().theme?.userId || '',
      userName: selectedTheme().theme?.userName || '',
      isDark,
      scheme: ColorSchemes[scheme as keyof typeof ColorSchemes],
      baseHue: baseHue[0],
      uiSaturation: uiSaturation[0],
      syntaxSaturation: syntaxSaturation[0],
      ansiSaturation: ansiSaturation[0],
      name: themeName,
      isPublic: themeIsPublic,
      uiColors: uiColorsState().uiColors,
      syntaxColors: syntaxColorsState().syntaxColors,
      ansiColors: ansiColorsState().ansiColors,
      shares: selectedTheme().theme?.shares || 0,
      downloads: selectedTheme().theme?.downloads || 0,
      createdAt: selectedTheme().theme?.createdAt || new Date(),
      updatedAt: new Date()
    });
    monacoEditor.changeTheme(themeJSON);
  }

  function randomize() {
    selectedTheme().reset();
    setScheme(randomEnum(Object(ColorSchemes)));
    setBaseHue([randomInteger(0, 360)]);
    setUiSaturation([randomInteger(0, 100)]);
    setSyntaxSaturation([randomInteger(0, 100)]);
    setAnsiSaturation([randomInteger(0, 100)]);
    schemeHuesState().generate();
    uiColorsState().generate();
    syntaxColorsState().generate();
    ansiColorsState().generate();
    selectedTheme().set({
      id: selectedTheme().theme?.id || 0,
      userId: selectedTheme().theme?.userId || '',
      userName: selectedTheme().theme?.userName || '',
      isDark,
      scheme: ColorSchemes[scheme as keyof typeof ColorSchemes],
      baseHue: baseHue[0],
      uiSaturation: uiSaturation[0],
      syntaxSaturation: syntaxSaturation[0],
      ansiSaturation: ansiSaturation[0],
      name: themeName,
      isPublic: themeIsPublic,
      uiColors: uiColorsState().uiColors,
      syntaxColors: syntaxColorsState().syntaxColors,
      ansiColors: ansiColorsState().ansiColors,
      shares: 0,
      downloads: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    monacoEditor.changeTheme(themeJSON);
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
    generate,
    randomize
  });
}
