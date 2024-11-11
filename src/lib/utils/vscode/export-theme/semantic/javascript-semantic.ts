import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getJavaScriptSemanticTokens({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return {
    'variable.readonly:javascript': syntaxColors.variableDeclaration,
    'variable.readonly:typescript': syntaxColors.variableDeclaration,
    'property.readonly:javascript': syntaxColors.property,
    'property.readonly:typescript': syntaxColors.property,
    'variable.readonly:javascriptreact': syntaxColors.variableDeclaration,
    'variable.readonly:typescriptreact': syntaxColors.variableDeclaration,
    'property.readonly:javascriptreact': syntaxColors.property,
    'property.readonly:typescriptreact': syntaxColors.property,
    'class.defaultLibrary:javascript': syntaxColors.language,
    'class.defaultLibrary:typescript': syntaxColors.language,
    'interface.defaultLibrary:typescript': syntaxColors.language,
    'function.defaultLibrary:javascript': syntaxColors.supportFunction,
    'function.defaultLibrary:typescript': syntaxColors.supportFunction,
    'method.defaultLibrary:javascript': syntaxColors.supportMethod,
    'method.defaultLibrary:typescript': syntaxColors.supportMethod,
    'variable.defaultLibrary:javascript': syntaxColors.supportVariable,
    'variable.defaultLibrary:typescript': syntaxColors.supportVariable,
    'property.defaultLibrary:javascript': syntaxColors.supportProperty,
    'property.defaultLibrary:typescript': syntaxColors.supportProperty,
    'type.defaultLibrary:javascript': syntaxColors.language,
    'type.defaultLibrary:typescript': syntaxColors.language,
    'namespace:javascript': syntaxColors.class,
    'namespace:typescript': syntaxColors.class,
    'enum:typescript': syntaxColors.class,
    'enumMember:typescript': colors.FG2
  };
}
