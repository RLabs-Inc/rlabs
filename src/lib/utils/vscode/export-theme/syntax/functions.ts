import type { TokenColors } from '$lib/types/theme';

export function getFunctionSyntaxTokens({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      scope: ['entity.name.function'],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      scope: ['meta.function-call', 'meta.function-call.generic', 'meta.function-call.object'],
      settings: {
        foreground: syntaxColors.functionCall
      }
    },
    {
      scope: ['variable.function'],
      settings: {
        foreground: syntaxColors.functionCall
      }
    },
    {
      name: 'Decorators',
      scope: [
        'meta.annotation variable.function',
        'meta.annotation variable.annotation.function',
        'meta.annotation punctuation.definition.annotation',
        'meta.decorator',
        'punctuation.decorator'
      ],
      settings: {
        foreground: syntaxColors.functionCall
      }
    },
    {
      scope: ['entity.name.function.member'],
      settings: {
        foreground: syntaxColors.method
      }
    }
  ];
}
