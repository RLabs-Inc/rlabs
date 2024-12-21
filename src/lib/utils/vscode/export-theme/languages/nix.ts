import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getNixTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Nix Attribute Names',
      scope: [
        'entity.other.attribute-name.multipart.nix',
        'entity.other.attribute-name.single.nix'
      ],
      settings: {
        foreground: syntaxColors.attribute
      }
    },
    {
      name: 'Nix Parameter Names',
      scope: 'variable.parameter.name.nix',
      settings: {
        foreground: syntaxColors.parameter,
        fontStyle: ''
      }
    },
    {
      name: 'Nix Interpolated Parameter Names',
      scope: 'meta.embedded variable.parameter.name.nix',
      settings: {
        foreground: syntaxColors.parameter,
        fontStyle: ''
      }
    },
    {
      name: 'Nix File Paths',
      scope: 'string.unquoted.path.nix',
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Nix Built-in Constants',
      scope: 'constant.language.nix',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Nix Built-in Constants',
      scope: 'constant.builtin.readonly.nix',
      settings: {
        foreground: syntaxColors.supportVariable
      }
    },
    {
      name: 'Nix Built-in Functions',
      scope: 'support.function.builtin.nix',
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'Nix Functions',
      scope: ['entity.name.function.nix'],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'Nix URI Literals',
      scope: 'string.unquoted.uri.nix',
      settings: {
        foreground: colors.INFO
      }
    }
  ];
}
