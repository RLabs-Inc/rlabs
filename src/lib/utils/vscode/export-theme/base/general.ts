import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getGeneralTokenColors({ colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Basic String Content',
      scope: ['string'],
      settings: {
        foreground: colors.FG1
      }
    },
    {
      name: 'Emphasized Text',
      scope: ['emphasis'],
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'Strong Text',
      scope: ['strong'],
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      name: 'Invalid Code',
      scope: ['invalid'],
      settings: {
        foreground: colors.ERROR,
        fontStyle: 'strikethrough'
      }
    },
    {
      name: 'Deprecated Code',
      scope: ['invalid.deprecated'],
      settings: {
        foreground: colors.WARNING,
        fontStyle: 'underline italic'
      }
    },
    {
      name: 'Header Content',
      scope: ['header'],
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'Source Code',
      scope: ['source'],
      settings: {
        foreground: colors.FG1
      }
    },
    {
      name: 'INI File Content',
      scope: ['source.ini'],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Ignore File Content',
      scope: ['source.ignore'],
      settings: {
        foreground: colors.FG2
      }
    }
  ];
}
