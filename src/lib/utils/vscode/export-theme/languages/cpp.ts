import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getCppTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'C++ Extern Keyword',
      scope: 'storage.modifier.specifier.extern.cpp',
      settings: {
        foreground: colors.WARNING
      }
    },
    {
      name: 'C++ Scope Resolution Operator',
      scope: [
        'entity.name.scope-resolution.template.call.cpp',
        'entity.name.scope-resolution.cpp',
        'entity.name.scope-resolution.function.definition.cpp'
      ],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'C++ Template Parameters',
      scope: ['entity.name.scope-resolution.parameter.cpp'],
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      name: 'C++ Documentation Keywords',
      scope: 'storage.type.class.doxygen',
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'C++ Reference Operators',
      scope: ['storage.modifier.reference.cpp'],
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'C++ Namespace Keywords',
      scope: 'storage.type.namespace.cpp',
      settings: {
        foreground: syntaxColors.storage
      }
    },
    {
      name: 'C++ Template Keywords',
      scope: 'storage.type.template.cpp',
      settings: {
        foreground: syntaxColors.storage
      }
    }
  ];
}
