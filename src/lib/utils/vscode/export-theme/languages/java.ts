import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getJavaTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Java Annotations',
      scope: ['punctuation.definition.annotation', 'storage.type.annotation'],
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Java Enum Constants',
      scope: 'constant.other.enum.java',
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Java Import Keywords',
      scope: 'storage.modifier.import.java',
      settings: {
        foreground: syntaxColors.controlImport
      }
    },
    {
      name: 'Java Generic Type Parameters',
      scope: 'storage.type.generic.java',
      settings: {
        foreground: syntaxColors.typeParameter
      }
    },
    {
      name: 'Java Package Keywords',
      scope: 'storage.modifier.package.java',
      settings: {
        foreground: syntaxColors.controlImport
      }
    },
    {
      name: 'Java Inherited Class',
      scope: 'entity.other.inherited-class.java',
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'Java Method Declarations',
      scope: 'meta.method.java',
      settings: {
        foreground: syntaxColors.method
      }
    },
    {
      name: 'Java Static Final Keywords',
      scope: ['storage.modifier.static.java', 'storage.modifier.final.java'],
      settings: {
        foreground: syntaxColors.modifier
      }
    }
  ];
}
