import type { SemanticTokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getGenericSemanticTokens({
  colors,
  syntaxColors
}: TokenColors): SemanticTokenColor {
  return {
    decorator: colors.AC1, //AC1
    event: syntaxColors.property, // property
    comment: syntaxColors.comment, //comment
    string: colors.FG1, //FG1
    keyword: syntaxColors.keyword, //keyword
    number: syntaxColors.constant, //constant
    operator: syntaxColors.operator, //operator
    selfKeyword: syntaxColors.keyword, //keyword
    boolean: syntaxColors.constant, //constant
    support: syntaxColors.support,
    'support.function': syntaxColors.supportFunction,
    'support.method': syntaxColors.supportMethod,
    'support.property': syntaxColors.supportProperty,
    'support.variable': syntaxColors.supportVariable
  };
}
