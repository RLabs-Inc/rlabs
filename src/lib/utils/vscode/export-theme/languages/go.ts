import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getGoTokenColors({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Comment keywords',
      scope: 'comment meta.annotation.go',
      settings: {
        foreground: syntaxColors.keyword
      }
    },
    {
      name: 'go:embed, go:build, etc.',
      scope: 'comment meta.annotation.parameters.go',
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      name: 'Go struct field',
      scope: 'variable.other.property.go',
      settings: {
        foreground: syntaxColors.variableProperty
      }
    },
    {
      name: 'Go constants (nil, true, false)',
      scope: 'constant.language.go',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Go function calls',
      scope: 'meta.function-call.go',
      settings: {
        foreground: syntaxColors.functionCall
      }
    },
    {
      name: 'Go type declarations',
      scope: 'meta.type.go',
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Go interface name',
      scope: 'entity.name.type.interface.go',
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Go builtin functions',
      scope: 'support.function.builtin.go',
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'Go builtin types',
      scope: 'support.type.builtin.go',
      settings: {
        foreground: syntaxColors.type
      }
    }
  ];
}
