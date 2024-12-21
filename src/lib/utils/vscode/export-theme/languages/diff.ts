import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getDiffTokenColors({ colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Diff Changed Lines',
      scope: ['markup.changed.diff', 'punctuation.definition.changed.diff'],
      settings: {
        foreground: colors.WARNING
      }
    },
    {
      name: 'Diff File Names',
      scope: [
        'meta.diff.header.from-file',
        'meta.diff.header.to-file',
        'punctuation.definition.from-file.diff',
        'punctuation.definition.to-file.diff'
      ],
      settings: {
        foreground: colors.INFO
      }
    },
    {
      name: 'Diff Inserted Lines',
      scope: ['markup.inserted.diff', 'punctuation.definition.inserted.diff'],
      settings: {
        foreground: colors.SUCCESS
      }
    },
    {
      name: 'Diff Deleted Lines',
      scope: ['markup.deleted.diff', 'punctuation.definition.deleted.diff'],
      settings: {
        foreground: colors.ERROR
      }
    },
    {
      name: 'Diff',
      scope: ['meta.diff'],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Diff Headers',
      scope: ['meta.diff.header', 'meta.diff.range', 'meta.separator.diff', 'meta.diff.index'],
      settings: {
        foreground: colors.AC1
      }
    }
  ];
}
