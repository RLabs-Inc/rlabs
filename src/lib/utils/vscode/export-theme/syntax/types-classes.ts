import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getTypeSyntaxTokens({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      scope: ['entity.name.type'],
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
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
      scope: ['entity.name.class', 'entity.name.type.class', 'entity.other.inherited-class'],
      settings: {
        foreground: syntaxColors.class
      }
    }
  ];
}
