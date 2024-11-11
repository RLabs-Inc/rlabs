import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getPythonSemanticTokens({ colors, syntaxColors }: TokenColors): TokenColor[] {
  return {
    'class:python': syntaxColors.class,
    'class.builtin:python': syntaxColors.language,
    'variable.typeHint:python': syntaxColors.variableProperty,
    'function.decorator:python': colors.AC1,
    'class.decorator:python': colors.AC1,
    'method.decorator:python': colors.AC1,
    'variable.readonly:python': syntaxColors.variableDeclaration,
    'property.readonly:python': syntaxColors.property,
    'type.defaultLibrary:python': syntaxColors.language
  };
}
