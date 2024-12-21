import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getEnvTokenColors({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'dotenv left-hand side assignments',
      scope: ['variable.other.env'],
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'dotenv reference to existing env variable',
      scope: ['string.quoted variable.other.env'],
      settings: {
        foreground: syntaxColors.other
      }
    }
  ];
}
