import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getRustTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Rust attribute',
      scope: [
        'meta.annotation.rust',
        'meta.annotation.rust punctuation',
        'meta.attribute.rust',
        'meta.attribute.rust string.quoted.single.char.rust',
        'meta.attribute.rust string.quoted.double.rust',
        'punctuation.definition.attribute.rust'
      ],
      settings: {
        foreground: syntaxColors.attribute
      }
    },
    {
      name: 'Rust builtin attributes',
      scope: 'meta.attribute.rust support.attribute',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Rust keyword',
      scope: [
        'entity.name.function.macro.rules.rust',
        'storage.type.module.rust',
        'storage.modifier.rust',
        'storage.type.struct.rust',
        'storage.type.enum.rust',
        'storage.type.trait.rust',
        'storage.type.union.rust',
        'storage.type.impl.rust',
        'storage.type.rust',
        'storage.type.function.rust',
        'storage.type.type.rust'
      ],
      settings: {
        foreground: syntaxColors.storage,
        fontStyle: ''
      }
    },
    {
      name: 'Rust u/i32, u/i64, etc.',
      scope: 'entity.name.type.numeric.rust',
      settings: {
        foreground: syntaxColors.type,
        fontStyle: ''
      }
    },
    {
      name: 'Rust generic',
      scope: 'meta.generic.rust',
      settings: {
        foreground: syntaxColors.typeParameter
      }
    },
    {
      name: 'Rust impl',
      scope: 'entity.name.impl.rust',
      settings: {
        foreground: syntaxColors.supportMethod
      }
    },
    {
      name: 'Rust module',
      scope: 'entity.name.module.rust',
      settings: {
        foreground: syntaxColors.supportVariable
      }
    },
    {
      name: 'Rust trait',
      scope: 'entity.name.trait.rust',
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Rust struct',
      scope: 'storage.type.source.rust',
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'Rust union',
      scope: 'entity.name.union.rust',
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'Rust enum member',
      scope: 'meta.enum.rust storage.type.source.rust',
      settings: {
        foreground: syntaxColors.supportVariable
      }
    },
    {
      name: 'Rust macro',
      scope: [
        'support.macro.rust',
        'meta.macro.rust support.function.rust',
        'entity.name.function.macro.rust'
      ],
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'Rust lifetime',
      scope: ['storage.modifier.lifetime.rust', 'entity.name.type.lifetime'],
      settings: {
        foreground: syntaxColors.modifier
      }
    },
    {
      name: 'Rust string formatting',
      scope: 'string.quoted.double.rust constant.other.placeholder.rust',
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Rust return type generic',
      scope: 'meta.function.return-type.rust meta.generic.rust storage.type.rust',
      settings: {
        foreground: syntaxColors.typeParameter
      }
    },
    {
      name: 'Rust function',
      scope: 'entity.name.function.macro.rules.rust',
      settings: {
        foreground: syntaxColors.function,
        fontStyle: ''
      }
    },
    {
      name: 'Rust functions',
      scope: 'meta.function.call.rust',
      settings: {
        foreground: syntaxColors.functionCall
      }
    },
    {
      name: 'Rust angle brackets',
      scope: 'punctuation.brackets.angle.rust',
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'Rust constants',
      scope: 'constant.other.caps.rust',
      settings: {
        foreground: syntaxColors.constant
      }
    },
    {
      name: 'Rust function parameters',
      scope: ['meta.function.definition.rust variable.other.rust'],
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      name: 'Rust closure variables',
      scope: 'meta.function.call.rust variable.other.rust',
      settings: {
        foreground: syntaxColors.variableReadonly
      }
    },
    {
      name: 'Rust self',
      scope: 'variable.language.self.rust',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Rust metavariable names',
      scope: [
        'variable.other.metavariable.name.rust',
        'meta.macro.metavariable.rust keyword.operator.macro.dollar.rust'
      ],
      settings: {
        foreground: syntaxColors.variableDeclaration
      }
    }
  ];
}
