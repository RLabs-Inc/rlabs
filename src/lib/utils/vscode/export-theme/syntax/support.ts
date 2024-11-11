import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getSupportTokenColors({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Basic Support',
      scope: ['support'],
      settings: {
        foreground: syntaxColors.support
      }
    },
    {
      name: 'Support Types',
      scope: ['support.type'],
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'Support Constants',
      scope: ['support.constant'],
      settings: {
        foreground: syntaxColors.constant
      }
    },
    {
      name: 'Support Functions',
      scope: ['support.function'],
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      scope: [
        'support.function.magic',
        'storage.modifier.async',
        'keyword.control.trycatch',
        'keyword.control.trycatch.js',
        'keyword.control.trycatch.ts',
        'keyword.control.trycatch.tsx',
        'keyword.control.trycatch.jsx'
      ],
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'Support Classes',
      scope: ['support.class'],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Support Other',
      scope: ['support.other'],
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'Support Variables',
      scope: ['support.variable', 'variable.other.predefined'],
      settings: {
        foreground: syntaxColors.supportVariable
      }
    },
    {
      name: 'Support Property Names',
      scope: ['support.type.property-name'],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    },
    {
      name: 'Support Methods',
      scope: ['support.method', 'support.function.misc'],
      settings: {
        foreground: syntaxColors.supportMethod
      }
    },
    {
      name: 'Support Method Calls',
      scope: ['support.method-call'],
      settings: {
        foreground: syntaxColors.supportMethod
      }
    },
    {
      name: 'Support Properties',
      scope: ['support.type.property-name'],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    },
    {
      scope: [
        'support.variable.property',
        'support.variable.property.js',
        'support.variable.property.ts'
      ],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    }
  ];
}
