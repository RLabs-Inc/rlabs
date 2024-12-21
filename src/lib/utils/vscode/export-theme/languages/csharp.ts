import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getCsharpTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'C# Interpolated Strings',
      scope: 'meta.interpolation.cs',
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'C# XML Documentation Comments',
      scope: 'comment.block.documentation.cs',
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'C# Preprocessor Keywords',
      scope: 'keyword.preprocessor.cs',
      settings: {
        foreground: syntaxColors.keyword
      }
    },
    {
      name: 'C# Attributes',
      scope: 'meta.attribute.cs',
      settings: {
        foreground: syntaxColors.attribute
      }
    },
    {
      name: 'C# Storage Types',
      scope: 'storage.type.cs',
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'C# Namespaces',
      scope: 'entity.name.type.namespace.cs',
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'C# Type Parameters',
      scope: 'entity.name.type.type-parameter.cs',
      settings: {
        foreground: syntaxColors.typeParameter
      }
    },
    {
      name: 'C# LINQ Keywords',
      scope: 'keyword.linq.cs',
      settings: {
        foreground: syntaxColors.controlFlow
      }
    }
  ];
}
