import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getStringTokenColors({ colors, syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Basic Strings',
      scope: ['string', 'string.quoted', 'string.template'],
      settings: {
        foreground: colors.FG1
      }
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'String Interpolation',
      scope: [
        'punctuation string.interpolated',
        'punctuation.definition.interpolation.begin',
        'punctuation.definition.interpolation.end',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end'
      ],
      settings: {
        foreground: colors.AC1
      }
    },
    {
      name: 'String Escape Characters',
      scope: ['constant.character.escape', 'constant.character.string.escape', 'constant.regexp'],
      settings: {
        foreground: syntaxColors.language
      }
    }
  ];
}
