import { z } from 'zod';

import {
  UIColorsSchema,
  SyntaxColorsSchema,
  AnsiColorsSchema,
  type SyntaxColors,
  type UIColors,
  type AnsiColors
} from './color';
import { ColorSchemes } from './color';

export const ThemeSchema = z.object({
  id: z.number(),
  name: z.string(),
  userId: z.string(),
  userName: z.string(),
  isDark: z.boolean(),
  scheme: z.union([z.nativeEnum(ColorSchemes), z.string()]),
  baseHue: z.number(),
  uiSaturation: z.number(),
  syntaxSaturation: z.number(),
  ansiSaturation: z.number(),
  isPublic: z.boolean(),
  uiColors: UIColorsSchema,
  syntaxColors: SyntaxColorsSchema,
  ansiColors: AnsiColorsSchema,
  shares: z.number(),
  downloads: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Theme = z.infer<typeof ThemeSchema>;

export const ThemeInsertSchema = ThemeSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export type InsertTheme = z.infer<typeof ThemeInsertSchema>;

export type UIColorsGenerationOptions = {
  isDark: boolean;
  scheme: ColorSchemes;
  baseHue: number;
  uiSaturation: number;
  few?: boolean;
  lockedColors: Partial<UIColors>;
};
export type SyntaxColorsGenerationOptions = {
  uiColors: UIColors;
  schemeHues: number[];
  syntaxSaturation: number;
  lockedColors: Partial<SyntaxColors>;
};
export type AnsiColorsGenerationOptions = {
  background: string;
  ansiSaturation: number;
  lockedColors: Partial<AnsiColors>;
};

export type VSCodeTheme = {
  name?: string;
  type: 'light' | 'dark';
  semanticClass: string;
  semanticHighlighting: boolean;
  colors: {
    [key: string]: string;
  };
  tokenColors: {
    name?: string;
    scope: string[] | string;
    settings: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }[];
  semanticTokenColors: {
    [key: string]: string | { foreground: string; fontStyle?: string };
  };
};
