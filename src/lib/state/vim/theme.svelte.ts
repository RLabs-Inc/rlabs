import { randomInteger, randomEnum } from '$lib/utils/common/math';
// import { generateVimTheme } from '$lib/utils/vim/export';

import { getSelectedColor } from './editor.svelte';
import { getControls } from '$lib/state/vim/controls.svelte';
import { getSchemeHues } from './scheme-colors.svelte';
import { getUiColors } from '$lib/state/vim/ui-colors.svelte';
import { getSyntaxColors } from '$lib/state/vim/syntax-colors.svelte';
import { getAnsiColors } from '$lib/state/vim/ansi-colors.svelte';
// import { getMonacoEditor } from '$lib/components/vim/monaco-editor/monaco.svelte';

import type { Theme } from '$lib/types/vim/theme';
import { ColorSchemes } from '$lib/types/vscode/color';
import { initialUIColors, initialSyntaxColors, initialAnsiColors } from '$lib/constants/colors';

let theme = $state<Theme>({
  id: 0,
  userId: '',
  userName: '',
  isDark: true,
  scheme: ColorSchemes.Analogous,
  baseHue: 128,
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
    controlsState().setThemeName(value.name);
    controlsState().setThemeIsPublic(value.isPublic);
    schemeHuesState().set(value.schemeHues || []);
    uiColorsState().setUiColors(value.uiColors);
    syntaxColorsState().setSyntaxColors(value.syntaxColors);
    ansiColorsState().setAnsiColors(value.ansiColors);
  }

  function setPublic(value: Theme) {
    set({
      ...value,
      id: 0,
      userId: '',
      userName: '',
      name: '',
      isPublic: false,
      shares: 0,
      downloads: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  function reset() {
    controlsState().setIsDark(true);
    controlsState().setScheme(randomEnum(Object(ColorSchemes)));
    controlsState().setBaseHue([128]);
    controlsState().setThemeName('');
    controlsState().setThemeIsPublic(false);
    set({
      id: 0,
      userId: '',
      userName: '',
      isDark: true,
      scheme: controlsState().scheme,
      baseHue: controlsState().baseHue[0],
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
    // Update PREVIEW
  }

  function update(data: Partial<Theme> = {}) {
    theme = {
      ...theme,
      ...data,
      name: controlsState().themeName,
      isDark: controlsState().isDark,
      scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
      baseHue: controlsState().baseHue[0],
      isPublic: controlsState().themeIsPublic,
      schemeHues: schemeHuesState().schemeHues,
      uiColors: uiColorsState().uiColors,
      syntaxColors: syntaxColorsState().syntaxColors,
      ansiColors: ansiColorsState().ansiColors,
      createdAt: theme?.createdAt || new Date(),
      updatedAt: new Date()
    };
    // UPDATE PREVIEW
  }

  function generate(fewerColors: boolean) {
    selectedColorState().setSelectedColor(null);
    schemeHuesState().generate();
    uiColorsState().generate(fewerColors);
    syntaxColorsState().generate(fewerColors);
    ansiColorsState().generate();
    set({
      ...theme,
      userId: '',
      userName: '',
      isDark: controlsState().isDark,
      scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
      baseHue: controlsState().baseHue[0],
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
    controlsState().setThemeName('');
    controlsState().setThemeIsPublic(false);
    schemeHuesState().generate();
    uiColorsState().generate(fewerColors);
    syntaxColorsState().generate(fewerColors);
    ansiColorsState().generate();
    set({
      id: 0,
      userId: '',
      userName: '',
      isDark: controlsState().isDark,
      scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
      baseHue: controlsState().baseHue[0],
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

  function newTheme() {
    controlsState().setThemeName('');
    controlsState().setThemeIsPublic(false);
    set({
      id: 0,
      userId: '',
      userName: '',
      isDark: controlsState().isDark,
      scheme: ColorSchemes[controlsState().scheme as keyof typeof ColorSchemes],
      baseHue: controlsState().baseHue[0],
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
    setPublic,
    reset,
    update,
    generate,
    randomize,
    newTheme
  });
}