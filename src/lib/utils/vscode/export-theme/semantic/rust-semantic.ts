import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getRustSemanticTokens({ syntaxColors }: TokenColors): TokenColor[] {
  return {
    'builtinAttribute.attribute.library:rust': syntaxColors.language,
    'generic.attribute:rust': syntaxColors.attribute,
    'variable.readonly:rust': syntaxColors.variableDeclaration,
    'property.readonly:rust': syntaxColors.property,
    'type.defaultLibrary:rust': syntaxColors.language,
    'function.defaultLibrary:rust': syntaxColors.supportFunction,
    'macro:rust': syntaxColors.functionCall,
    'macro.attribute:rust': syntaxColors.functionCall,
    'type.parameter:rust': syntaxColors.parameter,
    'variable.constant:rust': syntaxColors.constant,
    'struct.defaultLibrary:rust': syntaxColors.language,
    'enum.defaultLibrary:rust': syntaxColors.language,
    'enumMember.defaultLibrary:rust': syntaxColors.language,
    'interface.defaultLibrary:rust': syntaxColors.language
  };
}
