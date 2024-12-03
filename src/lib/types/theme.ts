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

// Token types
export type Colors = Record<string, string>;

export type TokenColor = {
  name?: string;
  scope: string[] | string;
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: string;
  };
};

export type SemanticToken = Record<
  string,
  {
    foreground: string;
    fontStyle?: string;
  }
>;

export type SemanticTokenColor = Record<
  string,
  | string
  | {
      foreground: string;
      fontStyle?: string;
    }
>;

export type TokenColors = {
  colors: UIColors;
  syntaxColors: SyntaxColors;
  ansiColors: AnsiColors;
};

// Theme types
export type VSCodeTheme = {
  name?: string;
  type: 'light' | 'dark';
  semanticClass: string;
  semanticHighlighting: boolean;
  colors: Colors;
  tokenColors: TokenColor[];
  semanticTokenColors: SemanticTokenColor;
};

// Database schema types
export const ThemeSchema = z.object({
  id: z.number(),
  name: z.string(),
  userId: z.string(),
  userName: z.string(),
  isDark: z.boolean(),
  scheme: z.union([z.nativeEnum(ColorSchemes), z.string()]),
  baseHue: z.number(),
  isPublic: z.boolean(),
  schemeHues: z.array(z.number()).optional(),
  uiColors: UIColorsSchema,
  syntaxColors: SyntaxColorsSchema,
  ansiColors: AnsiColorsSchema,
  shares: z.number().optional(),
  downloads: z.number().optional(),
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
  few?: boolean;
  lockedColors: Partial<UIColors>;
};

export type SyntaxColorsGenerationOptions = {
  lockedColors: Partial<SyntaxColors>;
};

export type AnsiColorsGenerationOptions = {
  lockedColors: Partial<AnsiColors>;
};
