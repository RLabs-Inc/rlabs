import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getStorageTokenColors({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Storage',
      scope: ['storage'],
      settings: {
        foreground: syntaxColors.storage
      }
    },
    {
      name: 'Storage Type Keywords',
      scope: [
        'storage.type',
        'storage.type.class',
        'storage.type.interface',
        'storage.type.enum',
        'storage.type.function'
      ],
      settings: {
        foreground: syntaxColors.storage
      }
    },
    {
      name: 'Storage Modifiers',
      scope: [
        'storage.modifier',
        'storage.modifier.access',
        'storage.modifier.static',
        'storage.modifier.async'
      ],
      settings: {
        foreground: syntaxColors.modifier
      }
    },
    {
      name: 'Storage Type Primitives',
      scope: ['storage.type.primitive', 'storage.type.built-in', 'storage.type.number'],
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Storage Type Namespace',
      scope: ['storage.type.namespace', 'storage.type.module'],
      settings: {
        foreground: syntaxColors.storage
      }
    }
  ];
}
