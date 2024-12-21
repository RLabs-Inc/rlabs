import type { SemanticTokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getClassSemanticTokens({ colors, syntaxColors }: TokenColors): SemanticTokenColor {
  return {
    // Class declarations
    class: syntaxColors.class,
    'class.declaration': syntaxColors.class,
    'class.defaultLibrary': syntaxColors.language,

    // Class-like types
    enum: syntaxColors.class,
    enumMember: colors.FG2, //FG2
    struct: syntaxColors.class,

    // Language specific - Python
    'class:python': syntaxColors.class,
    'class.builtin:python': syntaxColors.language
  };
}
