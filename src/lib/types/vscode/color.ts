import { z } from 'zod';

export type UIColors = {
  BG1: string;
  BG2: string;
  BG3: string;
  FG1: string;
  FG2: string;
  FG3: string;
  AC1: string;
  AC2: string;
  BORDER: string;
  INFO: string;
  ERROR: string;
  WARNING: string;
  SUCCESS: string;
  lineHighlight: string;
  selection: string;
  findMatch: string;
};

export type AnsiColors = {
  Black: string;
  Red: string;
  Green: string;
  Yellow: string;
  Blue: string;
  Magenta: string;
  Cyan: string;
  White: string;
  BrightBlack: string;
  BrightRed: string;
  BrightGreen: string;
  BrightYellow: string;
  BrightBlue: string;
  BrightMagenta: string;
  BrightCyan: string;
  BrightWhite: string;
};

export type SyntaxColors = {
  keyword: string;
  comment: string;
  function: string;
  functionCall: string;
  method: string;
  methodCall: string;
  variable: string;
  variableReadonly: string;
  variableDeclaration: string;
  variableProperty: string;
  type: string;
  typeParameter: string;
  constant: string;
  class: string;
  parameter: string;
  property: string;
  propertyDeclaration: string;
  operator: string;
  storage: string;
  other: string;
  language: string;
  supportVariable: string;
  supportFunction: string;
  supportMethod: string;
  supportProperty: string;
  punctuation: string;
  punctuationQuote: string;
  punctuationBrace: string;
  punctuationComma: string;
  selector: string;
  support: string;
  modifier: string;
  control: string;
  controlFlow: string;
  controlImport: string;
  tag: string;
  tagPunctuation: string;
  attribute: string;
  unit: string;
  datetime: string;
};

export const UIColorsSchema = z.object({
  BG1: z.string(),
  BG2: z.string(),
  BG3: z.string(),
  FG1: z.string(),
  FG2: z.string(),
  FG3: z.string(),
  AC1: z.string(),
  AC2: z.string(),
  BORDER: z.string(),
  INFO: z.string(),
  ERROR: z.string(),
  WARNING: z.string(),
  SUCCESS: z.string(),
  lineHighlight: z.string(),
  selection: z.string(),
  findMatch: z.string()
});

export const SyntaxColorsSchema = z.object({
  keyword: z.string(),
  comment: z.string(),
  function: z.string(),
  functionCall: z.string(),
  method: z.string(),
  methodCall: z.string(),
  variable: z.string(),
  variableReadonly: z.string(),
  variableDeclaration: z.string(),
  variableProperty: z.string(),
  type: z.string(),
  typeParameter: z.string(),
  constant: z.string(),
  class: z.string(),
  parameter: z.string(),
  property: z.string(),
  propertyDeclaration: z.string(),
  operator: z.string(),
  storage: z.string(),
  other: z.string(),
  language: z.string(),
  supportVariable: z.string(),
  supportProperty: z.string(),
  supportFunction: z.string(),
  supportMethod: z.string(),
  punctuation: z.string(),
  punctuationQuote: z.string(),
  punctuationBrace: z.string(),
  punctuationComma: z.string(),
  selector: z.string(),
  support: z.string(),
  modifier: z.string(),
  control: z.string(),
  controlFlow: z.string(),
  controlImport: z.string(),
  tag: z.string(),
  tagPunctuation: z.string(),
  attribute: z.string(),
  unit: z.string(),
  datetime: z.string()
});

export const AnsiColorsSchema = z.object({
  Black: z.string(),
  Red: z.string(),
  Green: z.string(),
  Yellow: z.string(),
  Blue: z.string(),
  Magenta: z.string(),
  Cyan: z.string(),
  White: z.string(),
  BrightBlack: z.string(),
  BrightRed: z.string(),
  BrightGreen: z.string(),
  BrightYellow: z.string(),
  BrightBlue: z.string(),
  BrightMagenta: z.string(),
  BrightCyan: z.string(),
  BrightWhite: z.string()
});

export type LCHColor = {
  mode: 'lch';
  l: number;
  c: number;
  h: number;
  alpha?: number;
};

export type ColorEvent = {
  color: string;
};
