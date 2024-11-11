import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getPythonTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Python class',
      scope: 'entity.name.type.class.python',
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'Python argument functions',
      scope: ['support.variable.magic.python'],
      settings: {
        foreground: syntaxColors.supportVariable
      }
    },
    {
      name: 'Python function calls',
      scope: ['meta.function-call.arguments.python'],
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      name: 'Python double underscore functions',
      scope: ['support.function.magic.python'],
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'Python `self` keyword',
      scope: [
        'variable.parameter.function.language.special.self.python',
        'variable.language.special.self.python'
      ],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      scope: ['keyword.operator.logical.python'],
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'python keyword flow/logical (for ... in)',
      scope: ['keyword.control.flow.python'],
      settings: {
        foreground: syntaxColors.controlFlow
      }
    },
    {
      name: 'python storage type',
      scope: 'storage.type.function.python',
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'python function support',
      scope: ['support.token.decorator.python', 'meta.function.decorator.identifier.python'],
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'python function calls',
      scope: ['meta.function-call.python'],
      settings: {
        foreground: syntaxColors.functionCall
      }
    },
    {
      name: 'Python type hints',
      scope: [
        'meta.function.parameters.python',
        'meta.function.python meta.function-call.arguments.python'
      ],
      settings: {
        foreground: syntaxColors.variableProperty
      }
    },
    {
      name: 'python function decorators',
      scope: ['entity.name.function.decorator.python', 'punctuation.definition.decorator.python'],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'python placeholder',
      scope: 'constant.character.format.placeholder.other.python',
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Python exception & builtins such as exit()',
      scope: ['support.function.builtin.python'],
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'Python exception',
      scope: ['support.type.exception.python'],
      settings: {
        foreground: syntaxColors.supportMethod
      }
    },
    {
      name: 'entity.name.type',
      scope: ['support.type.python'],
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'python constants (True/False)',
      scope: 'constant.language.python',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Arguments accessed later in the function body',
      scope: ['meta.indexed-name.python', 'meta.item-access.python'],
      settings: {
        foreground: syntaxColors.attribute
      }
    },
    {
      name: 'Python f-strings/binary/unicode storage types',
      scope: 'storage.type.string.python',
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Python type hints',
      scope: 'meta.function.parameters.python',
      settings: {
        foreground: syntaxColors.parameter
      }
    }
  ];
}
