import type { UIColors, SyntaxColors, AnsiColors } from './color';

export interface Theme {
  id: number;
  userId: string;
  userName: string;
  isDark: boolean;
  scheme: string;
  baseHue: number;
  name: string;
  isPublic: boolean;
  schemeHues: number[];
  uiColors: UIColors;
  syntaxColors: SyntaxColors;
  ansiColors: AnsiColors;
  shares: number;
  downloads: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UIColorsGenerationOptions {
  few: boolean;
  lockedColors: Partial<UIColors>;
  syntaxLockedColors: Partial<SyntaxColors>;
}

export interface SyntaxColorsGenerationOptions {
  few: boolean;
  lockedColors: Partial<SyntaxColors>;
}

export interface AnsiColorsGenerationOptions {
  lockedColors: Partial<AnsiColors>;
}

export interface VimThemeFile {
  path: string;
  content: string;
}

export interface GeneratedVimTheme {
  files: VimThemeFile[];
}
