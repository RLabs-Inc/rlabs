import { randomInteger, randomEnum } from '$lib/utils/vscode/math';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';

import { getSelectedColor } from './editor.svelte';
import { getControls } from '$lib/state/vscode/controls.svelte';
import { getSchemeHues } from './scheme-colors.svelte';
import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';
import { getMonacoEditor } from '$lib/components/vscode/monaco-editor/monaco.svelte';

import type { Theme } from '$lib/types/theme';
import { ColorSchemes } from '$lib/types/color';
import { initialUIColors, initialSyntaxColors, initialAnsiColors } from '$lib/constants/colors';

let theme = $state<Theme>({
  id: 0,
  userId: '',
  userName: '',
  isDark: true,
  scheme: ColorSchemes.Analogous,
  baseHue: 128,
  uiSaturation: 50,
  syntaxSaturation: 50,
  ansiSaturation: 50,
  name: '',
  isPublic: false,
  schemeHues: [],
  uiColors: initialUIColors,
  syntaxColors: initialSyntaxColors,
  ansiColors: initialAnsiColors,
  shares: 0,
  downloads: 0,
  createdAt: new Date(),
  updatedAt: new Date()
} as Theme);

export function getSelectedTheme() {
  const monacoEditor = getMonacoEditor();
  const controlsState = getControls();
  const schemeHuesState = getSchemeHues();
  const uiColorsState = getUiColors();
  const syntaxColorsState = getSyntaxColors();
  const ansiColorsState = getAnsiColors();
  const selectedColorState = getSelectedColor();

  function set(value: Theme) {
    theme = value;
    controlsState().setIsDark(value.isDark);
    controlsState().setScheme(value.scheme);
    controlsState().setBaseHue([value.baseHue]);
    controlsState().setUiSaturation([value.uiSaturation]);
    controlsState().setSyntaxSaturation([value.syntaxSaturation]);
    controlsState().setAnsiSaturation([value.ansiSaturation]);
    controlsState().setThemeName(value.name);
    controlsState().setThemeIsPublic(value.isPublic);
    schemeHuesState().set(value.schemeHues || []);
    uiColorsState().setUiColors(value.uiColors);
    syntaxColorsState().setSyntaxColors(value.syntaxColors);
    ansiColorsState().setAnsiColors(value.ansiColors);
    monacoEditor?.changeTheme(
      generateSemanticThemeJSON('theme', value.uiColors, value.syntaxColors, value.ansiColors)
        .themeJSON
    );
  }

  function reset() {
    const controlsState = getControls();
    controlsState().setIsDark(true);
    controlsState().setScheme(randomEnum(Object(ColorSchemes)));
    controlsState().setBaseHue([128]);
    controlsState().setUiSaturation([50]);
    controlsState().setSyntaxSaturation([50]);
    controlsState().setAnsiSaturation([50]);
    controlsState().setThemeName('');
    controlsState().setThemeIsPublic(false);
    set({
      id: 0,
      userId: '',
      userName: '',
      isDark: true,
      scheme: controlsState().scheme,
      baseHue: controlsState().baseHue[0],
      uiSaturation: controlsState().uiSaturation[0],
      syntaxSaturation: controlsState().syntaxSaturation[0],
      ansiSaturation: controlsState().ansiSaturation[0],
      name: controlsState().themeName,
      isPublic: controlsState().themeIsPublic,
      schemeHues: [],
      uiColors: initialUIColors,
      syntaxColors: initialSyntaxColors,
      ansiColors: initialAnsiColors,
      shares: 0,
      downloads: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    monacoEditor?.changeTheme(
      generateSemanticThemeJSON('theme', initialUIColors, initialSyntaxColors, initialAnsiColors)
        .themeJSON
    );
  }

  function update(data: Partial<Theme> = {}) {
    theme = {
      ...theme,
      ...data,
      name: controlsState().themeName,
      isDark: controlsState().isDark,
      scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
      baseHue: controlsState().baseHue[0],
      uiSaturation: controlsState().uiSaturation[0],
      syntaxSaturation: controlsState().syntaxSaturation[0],
      ansiSaturation: controlsState().ansiSaturation[0],
      isPublic: controlsState().themeIsPublic,
      schemeHues: schemeHuesState().schemeHues,
      uiColors: uiColorsState().uiColors,
      syntaxColors: syntaxColorsState().syntaxColors,
      ansiColors: ansiColorsState().ansiColors,
      createdAt: theme?.createdAt || new Date(),
      updatedAt: new Date()
    };
    monacoEditor?.changeTheme(
      generateSemanticThemeJSON(
        'theme',
        uiColorsState().uiColors,
        syntaxColorsState().syntaxColors,
        ansiColorsState().ansiColors
      ).themeJSON
    );
  }

  function generate(fewerColors: boolean) {
    selectedColorState().setSelectedColor(null);
    schemeHuesState().generate();
    uiColorsState().generate(fewerColors);
    syntaxColorsState().generate();
    ansiColorsState().generate();
    set({
      ...theme,
      userId: '',
      userName: '',
      isDark: controlsState().isDark,
      scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
      baseHue: controlsState().baseHue[0],
      uiSaturation: controlsState().uiSaturation[0],
      syntaxSaturation: controlsState().syntaxSaturation[0],
      ansiSaturation: controlsState().ansiSaturation[0],
      name: controlsState().themeName,
      isPublic: controlsState().themeIsPublic,
      schemeHues: schemeHuesState().schemeHues,
      uiColors: uiColorsState().uiColors,
      syntaxColors: syntaxColorsState().syntaxColors,
      ansiColors: ansiColorsState().ansiColors,
      shares: theme?.shares || 0,
      downloads: theme?.downloads || 0,
      createdAt: theme?.createdAt || new Date(),
      updatedAt: new Date()
    });
  }

  function randomize(fewerColors: boolean) {
    selectedColorState().setSelectedColor(null);
    controlsState().setScheme(randomEnum(Object(ColorSchemes)));
    controlsState().setBaseHue([randomInteger(0, 360)]);
    controlsState().setUiSaturation([randomInteger(20, 100)]);
    controlsState().setSyntaxSaturation([randomInteger(20, 100)]);
    controlsState().setAnsiSaturation([randomInteger(20, 100)]);
    controlsState().setThemeName('');
    controlsState().setThemeIsPublic(false);
    schemeHuesState().generate();
    uiColorsState().generate(fewerColors);
    syntaxColorsState().generate();
    ansiColorsState().generate();
    set({
      id: 0,
      userId: '',
      userName: '',
      isDark: controlsState().isDark,
      scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
      baseHue: controlsState().baseHue[0],
      uiSaturation: controlsState().uiSaturation[0],
      syntaxSaturation: controlsState().syntaxSaturation[0],
      ansiSaturation: controlsState().ansiSaturation[0],
      name: controlsState().themeName,
      isPublic: controlsState().themeIsPublic,
      schemeHues: schemeHuesState().schemeHues,
      uiColors: uiColorsState().uiColors,
      syntaxColors: syntaxColorsState().syntaxColors,
      ansiColors: ansiColorsState().ansiColors,
      shares: 0,
      downloads: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return () => ({
    get theme() {
      return theme;
    },
    set,
    reset,
    update,
    generate,
    randomize
  });
}
