import type { SemanticTokenColor, TokenColors } from '$lib/types/theme';

export function getTypeSemanticTokens({ syntaxColors }: TokenColors): SemanticTokenColor {
  return {
    // Basic types
    namespace: syntaxColors.class,
    type: syntaxColors.type,
    'type.declaration': syntaxColors.type,
    'type.defaultLibrary': syntaxColors.language,
    interface: syntaxColors.type,

    // Language specific
    'type.defaultLibrary:go': syntaxColors.language
  };
}
