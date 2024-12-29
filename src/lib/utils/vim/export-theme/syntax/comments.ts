import type { VimColors, VimHighlightGroup } from '$lib/types/vim/theme';

export function getCommentHighlightGroups(colors: VimColors): VimHighlightGroup[] {
  return [
    {
      name: 'Comment',
      fg: colors.comment,
      style: 'italic'
    },
    {
      name: 'Todo',
      fg: colors.accent1,
      style: 'bold,italic'
    },
    {
      name: 'SpecialComment',
      fg: colors.accent2,
      style: 'italic'
    }
  ];
}
