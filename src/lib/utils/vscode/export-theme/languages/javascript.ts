import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getJavascriptTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      scope: [
        'meta.export variable.other.readwrite.js',
        'meta.export variable.other.readwrite.ts',
        'meta.export variable.other.readwrite.tsx',
        'meta.export variable.other.readwrite.jsx'
      ],
      settings: {
        foreground: syntaxColors.variableDeclaration
      }
    },
    {
      name: 'JS/TS properties',
      scope: ['variable.other.property.js', 'variable.other.property.ts'],
      settings: {
        foreground: syntaxColors.property
      }
    },
    {
      name: 'JSDoc',
      scope: ['variable.other.jsdoc', 'comment.block.documentation variable.other'],
      settings: {
        foreground: syntaxColors.other,
        fontStyle: ''
      }
    },
    {
      name: 'JSDoc keywords',
      scope: 'storage.type.class.jsdoc',
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'Console object',
      scope: ['support.type.object.console.js', 'support.type.object.console.ts'],
      settings: {
        foreground: syntaxColors.supportVariable
      }
    },
    {
      name: 'Node constants as keywords (module, etc.)',
      scope: [
        'support.constant.node',
        'support.type.object.module.js',
        'support.type.object.module.ts'
      ],
      settings: {
        foreground: syntaxColors.support
      }
    },
    {
      name: 'implements as keyword',
      scope: 'storage.modifier.implements',
      settings: {
        foreground: syntaxColors.modifier
      }
    },
    {
      name: 'Builtin types',
      scope: [
        'constant.language.null.js',
        'constant.language.null.ts',
        'constant.language.undefined.js',
        'constant.language.undefined.ts',
        'support.type.builtin.ts'
      ],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Generic type parameters',
      scope: 'variable.parameter.generic',
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      name: 'Arrow functions',
      scope: ['keyword.declaration.function.arrow.js', 'storage.type.function.arrow.ts'],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'Decorator punctuations',
      scope: 'punctuation.decorator.ts',
      settings: {
        foreground: colors.AC1
      }
    },
    {
      name: 'Extra JS/TS keywords',
      scope: [
        'keyword.operator.expression.in.js',
        'keyword.operator.expression.in.ts',
        'keyword.operator.expression.infer.ts',
        'keyword.operator.expression.instanceof.js',
        'keyword.operator.expression.instanceof.ts',
        'keyword.operator.expression.is',
        'keyword.operator.expression.keyof.ts',
        'keyword.operator.expression.of.js',
        'keyword.operator.expression.of.ts',
        'keyword.operator.expression.typeof.ts'
      ],
      settings: {
        foreground: syntaxColors.operator
      }
    }
  ];
}
