import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getScalaSemanticTokens({ syntaxColors }: TokenColors): TokenColor[] {
  return {
    'variable.readonly:scala': syntaxColors.variableDeclaration,
    'type.defaultLibrary:scala': syntaxColors.language,
    'class.defaultLibrary:scala': syntaxColors.language,
    'object:scala': syntaxColors.class,
    'trait:scala': syntaxColors.type
  };
}
