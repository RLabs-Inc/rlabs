import type { ColorSchemes } from '../sacred-geometry-schemes';

export type WarpTheme = {
  terminal_colors: TerminalColors;
} & ThemeInfo &
  UiColors;

export type ThemeSchema = {
  id: number;
  user: string;
  terminal_colors: TerminalColors;
} & ThemeInfo &
  UiColors;

export type ThemeInfo = {
  name: string;
  details: 'darker' | 'lighter';
};

export type UiColors = {
  accent: string;
  cursor: string;
  background: string;
  foreground: string;
};

export type TerminalColors = {
  bright: Colors;
  normal: Colors;
};

export type Colors = {
  black: string;
  blue: string;
  cyan: string;
  green: string;
  magenta: string;
  red: string;
  white: string;
  yellow: string;
};

export type CssVariables = {
  uiColors: UiColors;
  terminal_colors: TerminalColors;
};

export type ThemeGenerationOptions = {
  baseHue: number;
  scheme: ColorSchemes;
  lockedColors?: Record<string, string>;
};

export type Oklch = {
  l: number;
  c: number;
  h: number;
};
