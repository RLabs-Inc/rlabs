import type { UIColors, SyntaxColors, AnsiColors } from '../../types/colors.js';

export const initialUIColors: UIColors = {
  BG1: '#1E1E1E',
  BG2: '#252526',
  BG3: '#2D2D30',
  FG1: '#D4D4D4',
  FG2: '#CCCCCC',
  FG3: '#121212',
  AC1: '#007ACC',
  AC2: '#0098FF',
  BORDER: '#474747',
  INFO: '#9CDCFE',
  ERROR: '#F48771',
  WARNING: '#CCA700',
  SUCCESS: '#89D185',
  lineHighlight: '#2F313710',
  selection: '#264F7820',
  findMatch: '#515C6A20',
};

export const initialSyntaxColors: SyntaxColors = {
  comment: '#6A9955',
  keyword: '#569CD6',
  storage: '#C586C0',
  modifier: '#C586C0',
  other: '#D4D4D4',

  language: '#D4D4D4',
  operator: '#D4D4D4',
  control: '#C586C0',
  controlFlow: '#C586C0',
  controlImport: '#C586C0',

  support: '#C586C0',
  supportFunction: '#4FC1FF',
  supportMethod: '#4FC1FF',
  supportVariable: '#4FC1FF',
  supportProperty: '#4FC1FF',

  function: '#DCDCAA',
  functionCall: '#DCDCAA',
  method: '#DCDCAA',
  methodCall: '#DCDCAA',
  selector: '#D7BA7D',

  parameter: '#9CDCFE',
  variable: '#9CDCFE',
  variableReadonly: '#9CDCFE',
  variableDeclaration: '#9CDCFE',
  variableProperty: '#9CDCFE',

  property: '#9CDCFE',
  propertyDeclaration: '#9CDCFE',
  class: '#4EC9B0',
  type: '#4EC9B0',
  typeParameter: '#4EC9B0',

  tag: '#C586C0',
  attribute: '#C586C0',
  constant: '#4FC1FF',
  unit: '#D4D4D4',
  datetime: '#D4D4D4',

  tagPunctuation: '#C586C0',
  punctuation: '#D4D4D4',
  punctuationQuote: '#D4D4D4',
  punctuationBrace: '#D4D4D4',
  punctuationComma: '#D4D4D4',
};

export const initialAnsiColors: AnsiColors = {
  Black: '#000000',
  Red: '#FF0000',
  Green: '#00FF00',
  Yellow: '#FFFF00',
  Blue: '#0000FF',
  Magenta: '#FF00FF',
  Cyan: '#00FFFF',
  White: '#FFFFFF',
  BrightBlack: '#808080',
  BrightRed: '#FF0000',
  BrightGreen: '#00FF00',
  BrightYellow: '#FFFF00',
  BrightBlue: '#0000FF',
  BrightMagenta: '#FF00FF',
  BrightCyan: '#00FFFF',
  BrightWhite: '#FFFFFF',
};
