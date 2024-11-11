import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getConstantTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Basic Constants',
      scope: ['constant', 'constant.numeric'],
      settings: {
        foreground: syntaxColors.constant
      }
    },
    {
      name: 'Color Constants',
      scope: ['constant.other.color'],
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'Character Constants',
      scope: ['constant.character'],
      settings: {
        foreground: colors.WARNING
      }
    },
    {
      name: 'Language Constants',
      scope: [
        'constant.character.escape',
        'constant.character.string.escape',
        'constant.regexp',
        'constant.language'
      ],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Date and Time Constants',
      scope: ['constant.other.date', 'constant.other.timestamp'],
      settings: {
        foreground: syntaxColors.datetime
      }
    },
    {
      name: 'Numeric Constants',
      scope: [
        'constant.numeric.decimal',
        'constant.numeric.hex',
        'constant.numeric.binary',
        'constant.numeric.octal'
      ],
      settings: {
        foreground: syntaxColors.constant
      }
    },
    {
      name: 'Built-in Constants',
      scope: [
        'constant.language.null',
        'constant.language.boolean',
        'constant.language.undefined',
        'constant.language.infinity'
      ],
      settings: {
        foreground: syntaxColors.language
      }
    }
  ];
}
