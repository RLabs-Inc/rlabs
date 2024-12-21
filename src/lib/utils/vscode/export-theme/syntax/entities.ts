import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getEntityTokenColors({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Class and Type Names',
      scope: ['entity.name.class', 'entity.name.type.class', 'entity.other.inherited-class'],
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'Type Names',
      scope: ['entity.name.type'],
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Type Parameters and Modules',
      scope: [
        'entity.name.type.module',
        'entity.name.type.type-parameter',
        'meta.indexer.mappedtype.declaration entity.name.type',
        'meta.type.parameters entity.name.type'
      ],
      settings: {
        foreground: syntaxColors.typeParameter
      }
    },
    {
      name: 'Function Names',
      scope: ['entity.name.function', 'entity.name.function.member'],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'Tag Names',
      scope: ['entity.name.tag', 'entity.name.tag.custom'],
      settings: {
        foreground: syntaxColors.tag
      }
    },
    {
      name: 'Section Names',
      scope: ['entity.name.section'],
      settings: {
        foreground: syntaxColors.class
      }
    }
  ];
}
