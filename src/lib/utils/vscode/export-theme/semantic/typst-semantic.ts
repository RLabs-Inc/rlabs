import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getTypstSemanticTokens({ colors, syntaxColors }: TokenColors): TokenColor[] {
  return {
    heading: colors.AC1,
    'text.emph': { foreground: colors.FG1, fontStyle: 'italic' },
    'text.strong': { foreground: colors.FG1, fontStyle: 'bold' },
    'text.math': syntaxColors.constant,
    'text.reference': { foreground: colors.FG2, fontStyle: 'italic' },
    'text.url': { foreground: colors.INFO, fontStyle: 'underline' }
  };
}
