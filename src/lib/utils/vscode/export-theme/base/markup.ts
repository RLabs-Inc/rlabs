import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getMarkupTokenColors({ colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Markup Inserted Content',
      scope: ['markup.inserted'],
      settings: {
        foreground: colors.SUCCESS
      }
    },
    {
      name: 'Markup Deleted Content',
      scope: ['markup.deleted'],
      settings: {
        foreground: colors.ERROR
      }
    },
    {
      name: 'Markup Changed Content',
      scope: ['markup.changed'],
      settings: {
        foreground: colors.WARNING
      }
    },
    {
      name: 'Markup Error Messages',
      scope: ['markup.error'],
      settings: {
        foreground: colors.ERROR
      }
    },
    {
      name: 'Markup Underlined Text',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline'
      }
    },
    {
      name: 'Markup Bold Text',
      scope: ['markup.bold'],
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markup Headings',
      scope: ['markup.heading'],
      settings: {
        foreground: colors.AC1,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markup Italic Text',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'Markup Quotes',
      scope: ['markup.quote'],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Markup Raw Content',
      scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Markup Underlined Links',
      scope: ['markup.underline.link', 'markup.underline.link.image'],
      settings: {
        foreground: colors.INFO
      }
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: colors.INFO
      }
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: colors.WARNING
      }
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: colors.ERROR
      }
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: colors.WARNING
      }
    }
  ];
}
