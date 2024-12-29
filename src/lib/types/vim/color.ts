export interface UIColors {
  BG1: string; // Main background
  BG2: string; // Secondary background
  BG3: string; // Tertiary background
  FG1: string; // Main foreground
  FG2: string; // Secondary foreground
  FG3: string; // Tertiary foreground
  AC1: string; // Primary accent
  AC2: string; // Secondary accent
  BORDER: string; // Border color
  INFO: string; // Information
  ERROR: string; // Error
  WARNING: string; // Warning
  SUCCESS: string; // Success
  lineHighlight: string; // Current line highlight
  selection: string; // Selection background
  findMatch: string; // Find match highlight
}

export interface SyntaxColors {
  keyword: string; // Keywords
  comment: string; // Comments
  function: string; // Function declarations
  functionCall: string; // Function calls
  method: string; // Method declarations
  methodCall: string; // Method calls
  variable: string; // Variables
  variableReadonly: string; // Read-only variables
  variableDeclaration: string; // Variable declarations
  variableProperty: string; // Variable properties
  type: string; // Types
  typeParameter: string; // Type parameters
  constant: string; // Constants
  class: string; // Classes
  parameter: string; // Parameters
  property: string; // Properties
  propertyDeclaration: string; // Property declarations
  operator: string; // Operators
  storage: string; // Storage keywords
  other: string; // Other
  language: string; // Language constructs
  supportVariable: string; // Support variables
  supportFunction: string; // Support functions
  supportMethod: string; // Support methods
  supportProperty: string; // Support properties
  punctuation: string; // General punctuation
  punctuationQuote: string; // Quote marks
  punctuationBrace: string; // Braces
  punctuationComma: string; // Commas
  selector: string; // CSS selectors
  support: string; // Support
  modifier: string; // Modifiers
  control: string; // Control flow
  controlFlow: string; // Control flow keywords
  controlImport: string; // Import statements
  tag: string; // Tags
  tagPunctuation: string; // Tag punctuation
  attribute: string; // Attributes
  unit: string; // Units
  datetime: string; // Date/time
}

export interface AnsiColors {
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
}

export enum ColorSchemes {
  Monochromatic = 'Monochromatic',
  Analogous = 'Analogous',
  Complementary = 'Complementary',
  SplitComplementary = 'SplitComplementary',
  Triadic = 'Triadic',
  Tetradic = 'Tetradic'
}
