import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getMarkdownTokenColors({
  syntaxColors,
  colors,
  ansiColors
}: TokenColors): TokenColor[] {
  return [
    {
      name: 'Markdown Heading 1',
      scope: [
        'heading.1.markdown punctuation.definition.heading.markdown',
        'heading.1.markdown',
        'heading.1.quarto punctuation.definition.heading.quarto',
        'heading.1.quarto',
        'markup.heading.atx.1.mdx',
        'markup.heading.atx.1.mdx punctuation.definition.heading.mdx',
        'markup.heading.setext.1.markdown',
        'markup.heading.heading-0.asciidoc'
      ],
      settings: {
        foreground: colors.AC1,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Heading 2',
      scope: [
        'heading.2.markdown punctuation.definition.heading.markdown',
        'heading.2.markdown',
        'heading.2.quarto punctuation.definition.heading.quarto',
        'heading.2.quarto',
        'markup.heading.atx.2.mdx',
        'markup.heading.atx.2.mdx punctuation.definition.heading.mdx',
        'markup.heading.setext.2.markdown',
        'markup.heading.heading-1.asciidoc'
      ],
      settings: {
        foreground: colors.AC2,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Heading 3',
      scope: [
        'heading.3.markdown punctuation.definition.heading.markdown',
        'heading.3.markdown',
        'heading.3.quarto punctuation.definition.heading.quarto',
        'heading.3.quarto',
        'markup.heading.atx.3.mdx',
        'markup.heading.atx.3.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-2.asciidoc'
      ],
      settings: {
        foreground: ansiColors.BrightYellow,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Heading 4',
      scope: [
        'heading.4.markdown punctuation.definition.heading.markdown',
        'heading.4.markdown',
        'heading.4.quarto punctuation.definition.heading.quarto',
        'heading.4.quarto',
        'markup.heading.atx.4.mdx',
        'markup.heading.atx.4.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-3.asciidoc'
      ],
      settings: {
        foreground: ansiColors.BrightGreen,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Heading 5',
      scope: [
        'heading.5.markdown punctuation.definition.heading.markdown',
        'heading.5.markdown',
        'heading.5.quarto punctuation.definition.heading.quarto',
        'heading.5.quarto',
        'markup.heading.atx.5.mdx',
        'markup.heading.atx.5.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-4.asciidoc'
      ],
      settings: {
        foreground: ansiColors.BrightCyan,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Heading 6',
      scope: [
        'heading.6.markdown punctuation.definition.heading.markdown',
        'heading.6.markdown',
        'heading.6.quarto punctuation.definition.heading.quarto',
        'heading.6.quarto',
        'markup.heading.atx.6.mdx',
        'markup.heading.atx.6.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-5.asciidoc'
      ],
      settings: {
        foreground: ansiColors.BrightBlue,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Bold Text',
      scope: 'markup.bold',
      settings: {
        foreground: colors.WARNING,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Italic Text',
      scope: 'markup.italic',
      settings: {
        foreground: colors.ERROR,
        fontStyle: 'italic'
      }
    },
    {
      name: 'Markdown Strikethrough',
      scope: 'markup.strikethrough',
      settings: {
        foreground: colors.FG2,
        fontStyle: 'strikethrough'
      }
    },
    {
      name: 'Markdown Links and URLs',
      scope: [
        'punctuation.definition.link',
        'markup.underline.link',
        'text.html.markdown punctuation.definition.link.title',
        'text.html.quarto punctuation.definition.link.title',
        'string.other.link.title.markdown',
        'string.other.link.title.quarto',
        'markup.link'
      ],
      settings: {
        foreground: colors.INFO,
        fontStyle: 'underline'
      }
    },
    {
      name: 'Markdown Links and URLs (other)',
      scope: [
        'punctuation.definition.constant.markdown',
        'punctuation.definition.constant.quarto',
        'constant.other.reference.link.markdown',
        'constant.other.reference.link.quarto',
        'markup.substitution.attribute-reference',
        'meta.link.reference.def.restructuredtext',
        'string.other.link.description',
        'string.other.link.title'
      ],
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'Markdown Code Blocks',
      scope: [
        'punctuation.definition.raw.markdown',
        'punctuation.definition.raw.quarto',
        'markup.inline.raw.string.markdown',
        'markup.inline.raw.string.quarto',
        'markup.raw.block.markdown',
        'markup.raw.block.quarto'
      ],
      settings: {
        foreground: colors.SUCCESS
      }
    },
    {
      name: 'Markdown Code Language Identifier',
      scope: 'fenced_code.block.language',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Markdown triple backticks',
      scope: ['markup.fenced_code.block punctuation.definition', 'markup.raw support.asciidoc'],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'Markdown Quotes',
      scope: ['markup.quote', 'punctuation.definition.quote.begin'],
      settings: {
        foreground: syntaxColors.punctuation
      }
    },
    {
      name: 'Markdown separators',
      scope: 'meta.separator.markdown',
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'Markdown List Markers',
      scope: [
        'punctuation.definition.list.begin.markdown',
        'punctuation.definition.list.begin.quarto',
        'markup.list.bullet'
      ],
      settings: {
        foreground: syntaxColors.unit
      }
    },
    {
      name: 'Quarto headings',
      scope: 'markup.heading.quarto',
      settings: {
        fontStyle: 'bold'
      }
    }
  ];
}
