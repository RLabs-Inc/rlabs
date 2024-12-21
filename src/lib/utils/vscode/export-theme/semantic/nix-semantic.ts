import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getNixSemanticTokens({ syntaxColors }: TokenColors): TokenColor[] {
  return {
    'constant.builtin.readonly:nix': syntaxColors.supportVariable,
    'variable.readonly:nix': syntaxColors.variableDeclaration,
    'property.readonly:nix': syntaxColors.property,
    'function.defaultLibrary:nix': syntaxColors.supportFunction
  };
}
