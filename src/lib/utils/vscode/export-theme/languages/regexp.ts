import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getRegexpTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'RegExp String Delimiters',
      scope: [
        'string.regexp punctuation.definition.string.begin',
        'string.regexp punctuation.definition.string.end'
      ],
      settings: {
        foreground: colors.AC1
      }
    },
    {
      name: 'RegExp Anchors',
      scope: 'keyword.control.anchor.regexp',
      settings: {
        foreground: colors.AC2
      }
    },

    {
      name: 'RegExp Character Match',

      scope: ['string.regexp', 'string.regexp.ts'],
      settings: {
        foreground: colors.FG1
      }
    },
    {
      name: 'RegExp Groups and References',
      scope: ['punctuation.definition.group.regexp', 'keyword.other.back-reference.regexp'],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'RegExp Character Classes',
      scope: [
        'punctuation.definition.character-class.regexp',
        'constant.other.character-class.regexp'
      ],
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'RegExp Character Range',
      scope: 'constant.other.character-class.range.regexp',
      settings: {
        foreground: syntaxColors.constant
      }
    },
    {
      name: 'RegExp Quantifiers',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'Regex constant/numeric',
      scope: 'constant.character.numeric.regexp',
      settings: {
        foreground: syntaxColors.constant
      }
    },
    {
      scope: [
        'constant.other.character-class.set.regexp',
        'constant.character.escape.backslash.regexp'
      ],
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'RegExp Assertions',
      scope: [
        'punctuation.definition.group.no-capture.regexp',
        'meta.assertion.look-ahead.regexp',
        'meta.assertion.negative-look-ahead.regexp'
      ],
      settings: {
        foreground: colors.ERROR
      }
    },
    {
      name: 'RegExp Capture Groups',
      scope: ['punctuation.definition.group.capture.regexp'],
      settings: {
        foreground: colors.SUCCESS
      }
    },
    {
      name: 'RegExp Assertion Negation',
      scope: ['punctuation.definition.group.assertion.regexp', 'keyword.operator.negation.regexp'],
      settings: {
        foreground: colors.ERROR
      }
    }
  ];
}
