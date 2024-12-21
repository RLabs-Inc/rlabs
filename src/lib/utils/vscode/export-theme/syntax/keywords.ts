import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getKeywordTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Basic Keywords',
      scope: ['keyword', 'punctuation.definition.keyword'],
      settings: {
        foreground: syntaxColors.keyword
      }
    },
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'keyword.operator.logical',
        'keyword.operator.relational',
        'keyword.operator.comparison',
        'keyword.operator.assignment',
        'keyword.operator.arithmetic',
        'keyword.operator.bitwise',
        'keyword.operator.logical.js',
        'keyword.operator.logical.ts',
        'keyword.operator.logical.jsx',
        'keyword.operator.logical.tsx'
      ],
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'Units',
      scope: ['keyword.other.unit'],
      settings: {
        foreground: syntaxColors.unit
      }
    },
    {
      name: 'Control Keywords',
      scope: ['keyword.control', 'keyword.other.template', 'keyword.other.substitution'],
      settings: {
        foreground: syntaxColors.control
      }
    },
    {
      name: 'Language Keywords',
      scope: ['keyword.other.this', 'keyword.other.super', 'keyword.other.self'],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Import Keywords',
      scope: ['keyword.control.import', 'keyword.control.from', 'keyword.control.export'],
      settings: {
        foreground: syntaxColors.controlImport
      }
    },
    {
      name: 'New Keyword',
      scope: ['keyword.control.new', 'keyword.operator.new', 'keyword.other.important.css'],
      settings: {
        foreground: colors.WARNING
      }
    },
    {
      name: 'Flow Control Keywords',
      scope: [
        'keyword.control.flow',
        'keyword.control.loop',
        'keyword.control.conditional',
        'keyword.operator.ternary'
      ],
      settings: {
        foreground: syntaxColors.controlFlow
      }
    }
  ];
}
