import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getCommentTokenColors({ colors, syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Basic Comments',
      scope: ['comment', 'punctuation.definition.comment', 'unused.comment', 'wildcard.comment'],
      settings: {
        foreground: syntaxColors.comment
      }
    },
    {
      name: 'Documentation Comments',
      scope: [
        'comment.block.documentation',
        'comment.block.documentation.js',
        'comment.block.documentation.ts',
        'comment.block.documentation.rust',
        'comment.block.documentation.go'
      ],
      settings: {
        foreground: syntaxColors.comment
      }
    },
    {
      name: 'Shebang Comments',
      scope: ['comment.line.shebang', 'punctuation.definition.comment.shebang', 'meta.shebang'],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Todo Comments',
      scope: ['comment.line.todo', 'comment.line.fixme', 'comment.line.note', 'comment.line.hack'],
      settings: {
        foreground: colors.WARNING,
        fontStyle: 'bold'
      }
    }
  ];
}
