import type { VimColors, VimHighlightGroup } from '$lib/types/vim/theme';

export function getGeneralHighlightGroups(colors: VimColors): VimHighlightGroup[] {
  return [
    {
      name: 'Normal',
      fg: colors.foreground,
      bg: colors.background
    },
    {
      name: 'Cursor',
      fg: colors.background,
      bg: colors.foreground
    },
    {
      name: 'CursorLine',
      bg: colors.lineHighlight
    },
    {
      name: 'CursorColumn',
      bg: colors.lineHighlight
    },
    {
      name: 'LineNr',
      fg: colors.comment
    },
    {
      name: 'CursorLineNr',
      fg: colors.accent1
    },
    {
      name: 'VertSplit',
      fg: colors.border,
      bg: colors.background
    },
    {
      name: 'StatusLine',
      fg: colors.foreground,
      bg: colors.background,
      style: 'bold'
    },
    {
      name: 'StatusLineNC',
      fg: colors.comment,
      bg: colors.background
    }
  ];
}
