import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getTomlSemanticTokens({ colors, syntaxColors }: TokenColors): TokenColor[] {
  return {
    tomlArrayKey: colors.AC2,
    tomlTableKey: colors.AC2,
    'variable.readonly:toml': syntaxColors.variableDeclaration,
    'property.readonly:toml': syntaxColors.property
  };
}
