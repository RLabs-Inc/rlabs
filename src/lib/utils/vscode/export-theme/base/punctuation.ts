import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getPunctuationTokenColors({ colors, syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Basic Punctuation',
      scope: ['punctuation.definition'],
      settings: {
        foreground: syntaxColors.punctuation
      }
    },
    {
      name: 'Attribute Name Punctuation and CSS Property List and Attribute Selector brackets',
      scope: [
        'entity.other.attribute-name punctuation',
        'punctuation.definition.keyword.css',
        'punctuation.section.property-list.begin.bracket.curly.css',
        'punctuation.section.property-list.end.bracket.curly.css',
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss'
      ],
      settings: {
        foreground: syntaxColors.punctuation
      }
    },
    {
      name: 'Support Type Punctuation',
      scope: [
        'punctuation.support',
        'punctuation.support.type.property-name.begin',
        'punctuation.support.type.property-name.end'
      ],
      settings: {
        foreground: syntaxColors.support
      }
    },
    {
      name: 'Braces, Brackets and Parentheses',
      scope: [
        'meta.brace.round',
        'meta.brace.square',
        'meta.brace.curly',
        'punctuation.separator',
        'meta.function-call punctuation',
        'punctuation.definition.arguments.begin',
        'punctuation.definition.arguments.end',
        'punctuation.definition.entity.begin',
        'punctuation.definition.entity.end',
        'punctuation.definition.type.begin',
        'punctuation.definition.type.end',
        'punctuation.section.scope.begin',
        'punctuation.section.scope.end',
        'meta.group.toml',
        'meta.group.double.toml',
        'punctuation.definition.block.scalar.folded.yaml',
        'punctuation.definition.block.scalar.literal.yaml',
        'punctuation.definition.block.sequence.item.yaml'
      ],
      settings: {
        foreground: syntaxColors.punctuationBrace
      }
    },
    {
      name: 'String and Section Punctuation',
      scope: [
        'punctuation.section',
        'punctuation.definition.string',
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
        'punctuation.section.embedded.begin',
        'punctuation.section.embedded.end',
        'punctuation.section.embedded.begin.tsx',
        'punctuation.section.embedded.end.tsx',
        'punctuation.section.embedded.begin.jsx',
        'punctuation.section.embedded.end.jsx',
        'meta.string-contents.quoted.double punctuation.definition.variable',
        'punctuation.definition.variable.makefile'
      ],
      settings: {
        foreground: syntaxColors.punctuationQuote
      }
    },
    {
      name: 'Separators and Delimiters',
      scope: [
        'punctuation.separator',
        'punctuation.separator.comma',
        'punctuation.separator.comma.css',
        'punctuation.separator.key-value',
        'punctuation.separator.key-value.css',
        'punctuation.separator.list.comma.css'
      ],
      settings: {
        foreground: syntaxColors.punctuationComma
      }
    },
    {
      name: 'Interpolated Strings',
      scope: [
        'punctuation string.interpolated',
        'punctuation.definition.interpolation.begin',
        'punctuation.definition.interpolation.end',
        'punctuation.definition.constant.restructuredtext',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end'
      ],
      settings: {
        foreground: colors.AC1
      }
    }
  ];
}
