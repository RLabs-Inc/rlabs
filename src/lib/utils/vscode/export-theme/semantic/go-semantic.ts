import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getGoSemanticTokens({ syntaxColors }: TokenColors): TokenColor[] {
  return {
    'type.defaultLibrary:go': syntaxColors.type,
    'variable.readonly.defaultLibrary:go': syntaxColors.variableDeclaration,
    'function.defaultLibrary:go': syntaxColors.supportFunction,
    'interface:go': syntaxColors.type,
    'struct:go': syntaxColors.class,
    'variable.readonly:go': syntaxColors.variableDeclaration,
    'property.readonly:go': syntaxColors.property,
    'method.defaultLibrary:go': syntaxColors.supportMethod,
    'property.defaultLibrary:go': syntaxColors.supportProperty,
    'namespace:go': syntaxColors.class,
    'type.parameter:go': syntaxColors.parameter,
    'variable.constant:go': syntaxColors.constant
  };
}
