import type { ColorSchemes, ColorScheme } from '../sacred-geometry-schemes';

export type GhosttyTheme = UiColors & PaletteColors;

export type ThemeSchema = {
  id: number;
  user: string;
  baseHue: number;
  scheme: ColorScheme;
  isPublic: boolean;
  schemeHues: number[];
  uiColors: UiColors;
  palette: PaletteColors;
};

// Hex 6 digit colors without # prefix
export type UiColors = {
  background: string;
  foreground: string;
  cursorColor: string;
  selectionBackground: string;
  selectionForeground: string;
};

export type PaletteColors = {
  palette0: string;
  palette1: string;
  palette2: string;
  palette3: string;
  palette4: string;
  palette5: string;
  palette6: string;
  palette7: string;
  palette8: string;
  palette9: string;
  palette10: string;
  palette11: string;
  palette12: string;
  palette13: string;
  palette14: string;
  palette15: string;
};

export type CssVariables = UiColors & PaletteColors;

export type Controls = {
  isDark: boolean;
  baseHue: number[];
  scheme: ColorSchemes;
  uniform: boolean;
  lockedColors: Record<string, string>;
};

export type SelectedColor = {
  type: 'ui' | 'palette';
  name: string;
  color: string;
};

// 16 colors named 0..15 with values of Hex 6 digit colors with # prefix
export type Colors = {
  [key: string]: string;
};

export type LockedColors = {
  [key: string]: string;
};

export type Oklch = {
  l: number;
  c: number;
  h: number;
};
