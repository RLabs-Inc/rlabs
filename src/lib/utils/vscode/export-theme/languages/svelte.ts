import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getSvelteTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      scope: ['meta.lang.ts.svelte'],
      settings: {
        foreground: syntaxColors.language
      }
    }
  ];
}
