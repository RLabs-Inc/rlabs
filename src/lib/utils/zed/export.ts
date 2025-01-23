import type { VSCodeTheme } from '$lib/types/vscode/theme';
import type { UIColors, SyntaxColors, AnsiColors } from '$lib/types/vscode/color';

interface ZedTheme {
  name: string;
  author: string;
  themes: {
    name: string;
    appearance: 'light' | 'dark';
    style: unknown;
  }[];
}

function getThemeToken(color: string) {
  return {
    color,
    font_style: null,
    font_weight: null
  };
}

function withOpacity(color: string, opacity: string): string {
  return `${color}${opacity}`;
}

export function generateZedThemeJSON(
  name: string = 'Generated Zed Theme',
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors,
  vscodeTheme: VSCodeTheme
): string {
  const style = {
    // UI Tokens merged from both sources
    'background.appearance': 'opaque' as const,
    accents: [colors.AC1, colors.AC2, colors.INFO, colors.SUCCESS, colors.WARNING, colors.ERROR],
    background: colors.BG1,
    'elevated_surface.background': colors.BG2,
    'surface.background': colors.BG2,
    border: colors.BORDER,
    'border.variant': colors.AC1,
    'border.focused': colors.AC2,
    'border.selected': colors.AC1,
    'border.transparent': withOpacity(colors.BORDER, '20'),
    'border.disabled': syntaxColors.comment,
    'element.background': colors.BG3,
    'element.hover': withOpacity(colors.AC2, '40'),
    'element.active': withOpacity(colors.AC2, '60'),
    'element.selected': withOpacity(colors.AC2, '50'),
    'element.disabled': syntaxColors.comment,
    'drop_target.background': withOpacity(colors.BG2, '66'),
    'ghost_element.background': withOpacity(colors.BG2, '59'),
    'ghost_element.hover': withOpacity(colors.AC2, '40'),
    'ghost_element.active': withOpacity(colors.AC2, '60'),
    'ghost_element.selected': withOpacity(colors.AC2, '50'),
    'ghost_element.disabled': syntaxColors.comment,
    text: colors.FG1,
    'text.muted': syntaxColors.comment,
    'text.placeholder': syntaxColors.comment,
    // 'text.disabled': syntaxColors.comment,
    'text.accent': colors.AC2,
    icon: colors.FG1,
    'icon.muted': syntaxColors.comment,
    // 'icon.disabled': syntaxColors.comment,
    'icon.placeholder': syntaxColors.comment,
    'icon.accent': colors.AC2,
    'status_bar.background': colors.AC2,
    'title_bar.background': colors.BG2,
    'title_bar.inactive_background': withOpacity(colors.BG2, '70'),
    'toolbar.background': colors.BG1,
    'tab_bar.background': colors.BG2,
    'tab.inactive_background': colors.BG3,
    'tab.active_background': colors.BG1,
    'search.match_background': colors.findMatch,
    'search.match_border': colors.FG1,
    'panel.background': colors.BG3,
    'panel.focused_border': colors.BORDER,
    'panel.indent_guide': withOpacity(colors.BORDER, '99'),
    'panel.indent_guide_active': syntaxColors.comment,
    'panel.indent_guide_hover': colors.AC2,
    'pane.focused_border': colors.BORDER,
    'pane_group.border': colors.BORDER,
    'scrollbar.thumb.background': withOpacity(colors.AC2, '33'),
    'scrollbar.thumb.hover_background': syntaxColors.comment,
    'scrollbar.thumb.border': colors.AC2,
    'scrollbar.track.background': null,
    'scrollbar.track.border': withOpacity(colors.FG1, '12'),
    'editor.foreground': colors.FG1,
    'editor.background': colors.BG1,
    'editor.gutter.background': colors.BG1,
    'editor.subheader.background': colors.BG3,
    'editor.active_line.background': colors.lineHighlight,
    'editor.highlighted_line.background': colors.lineHighlight,
    'editor.line_number': syntaxColors.comment,
    'editor.active_line_number': colors.AC2,
    'editor.invisible': withOpacity(syntaxColors.comment, '66'),
    'editor.wrap_guide': colors.lineHighlight,
    'editor.active_wrap_guide': colors.AC2,
    'editor.indent_guide': syntaxColors.comment,
    'editor.indent_guide_active': colors.AC2,
    'editor.selection.background': colors.selection,
    'editor.matching_bracket.background': colors.findMatch,
    'editor.document_highlight.bracket_background': withOpacity(colors.AC1, '40'),
    'editor.document_highlight.read_background': withOpacity(colors.FG1, '20'),
    'editor.document_highlight.write_background': withOpacity(colors.FG1, '20'),

    // Terminal colors
    'terminal.background': colors.BG1,
    'terminal.ansi.background': colors.BG1,
    'terminal.foreground': colors.FG1,
    'terminal.dim_foreground': colors.FG2,
    'terminal.bright_foreground': colors.FG1,
    'terminal.ansi.black': ansiColors.Black,
    'terminal.ansi.red': ansiColors.Red,
    'terminal.ansi.green': ansiColors.Green,
    'terminal.ansi.yellow': ansiColors.Yellow,
    'terminal.ansi.blue': ansiColors.Blue,
    'terminal.ansi.magenta': ansiColors.Magenta,
    'terminal.ansi.cyan': ansiColors.Cyan,
    'terminal.ansi.white': ansiColors.White,
    'terminal.ansi.bright_black': ansiColors.BrightBlack,
    'terminal.ansi.bright_red': ansiColors.BrightRed,
    'terminal.ansi.bright_green': ansiColors.BrightGreen,
    'terminal.ansi.bright_yellow': ansiColors.BrightYellow,
    'terminal.ansi.bright_blue': ansiColors.BrightBlue,
    'terminal.ansi.bright_magenta': ansiColors.BrightMagenta,
    'terminal.ansi.bright_cyan': ansiColors.BrightCyan,
    'terminal.ansi.bright_white': ansiColors.BrightWhite,

    // Players section
    players: [
      {
        cursor: colors.AC1,
        selection: withOpacity(colors.selection, '80'),
        background: colors.AC1
      },
      {
        cursor: colors.AC2,
        selection: withOpacity(colors.AC2, '33'),
        background: colors.AC2
      },
      {
        cursor: colors.INFO,
        selection: withOpacity(colors.INFO, '33'),
        background: colors.INFO
      },
      {
        cursor: colors.WARNING,
        selection: withOpacity(colors.WARNING, '33'),
        background: colors.WARNING
      },
      {
        cursor: colors.SUCCESS,
        selection: withOpacity(colors.SUCCESS, '33'),
        background: colors.SUCCESS
      },
      {
        cursor: colors.ERROR,
        selection: withOpacity(colors.ERROR, '33'),
        background: colors.ERROR
      }
    ],

    // Syntax tokens from merged.json
    syntax: {
      attribute: getThemeToken(syntaxColors.attribute),
      boolean: getThemeToken(syntaxColors.language),
      character: getThemeToken(colors.FG2),
      'character.special': getThemeToken(colors.FG2),
      class: getThemeToken(syntaxColors.class),
      'class.builtin': getThemeToken(syntaxColors.support),
      comment: getThemeToken(syntaxColors.comment),
      'comment.block': getThemeToken(syntaxColors.comment),
      'comment.doc': getThemeToken(syntaxColors.comment),
      'comment.error': getThemeToken(colors.ERROR),
      'comment.hint': getThemeToken(colors.INFO),
      'comment.line': getThemeToken(syntaxColors.comment),
      'comment.note': getThemeToken(colors.INFO),
      'comment.warning': getThemeToken(colors.WARNING),
      concept: getThemeToken(syntaxColors.type),
      constant: getThemeToken(syntaxColors.constant),
      'constant.builtin': getThemeToken(syntaxColors.support),
      constructor: getThemeToken(syntaxColors.function),
      embedded: getThemeToken(colors.FG2),
      emphasis: getThemeToken(colors.FG2),
      'emphasis.strong': getThemeToken(colors.FG2),
      enum: getThemeToken(syntaxColors.type),
      field: getThemeToken(syntaxColors.property),
      function: getThemeToken(syntaxColors.function),
      'function.builtin': getThemeToken(syntaxColors.support),
      'function.decorator': getThemeToken(syntaxColors.function),
      hint: getThemeToken(colors.INFO),
      interface: getThemeToken(syntaxColors.class),
      keyword: getThemeToken(syntaxColors.keyword),
      'keyword.control': getThemeToken(syntaxColors.control),
      'keyword.control.conditional': getThemeToken(syntaxColors.controlFlow),
      'keyword.control.flow': getThemeToken(syntaxColors.controlFlow),
      'keyword.control.import': getThemeToken(syntaxColors.controlImport),
      'keyword.directive': getThemeToken(syntaxColors.modifier),
      'keyword.function': getThemeToken(syntaxColors.storage),
      'keyword.operator': getThemeToken(syntaxColors.operator),
      label: getThemeToken(syntaxColors.class),
      link_text: getThemeToken(colors.INFO),
      link_uri: getThemeToken(colors.INFO),
      module: getThemeToken(syntaxColors.typeParameter),
      namespace: getThemeToken(syntaxColors.class),
      number: getThemeToken(syntaxColors.constant),
      operator: getThemeToken(syntaxColors.operator),
      parameter: getThemeToken(syntaxColors.parameter),
      parent: getThemeToken(syntaxColors.class),
      property: getThemeToken(syntaxColors.property),
      punctuation: getThemeToken(syntaxColors.punctuation),
      'punctuation.bracket': getThemeToken(syntaxColors.punctuationBrace),
      'punctuation.delimiter': getThemeToken(syntaxColors.punctuationComma),
      'punctuation.special': getThemeToken(syntaxColors.punctuationQuote),
      string: getThemeToken(colors.FG1),
      'string.escape': getThemeToken(colors.FG2),
      'string.regex': getThemeToken(colors.FG2),
      'string.special': getThemeToken(colors.AC2),
      'string.special.symbol': getThemeToken(colors.AC1),
      tag: getThemeToken(syntaxColors.tag),
      'tag.attribute': getThemeToken(syntaxColors.attribute),
      'tag.delimiter': getThemeToken(syntaxColors.tagPunctuation),
      'text.literal': getThemeToken(colors.FG2),
      title: getThemeToken(colors.FG1),
      type: getThemeToken(syntaxColors.type),
      variable: getThemeToken(syntaxColors.variable),
      'variable.special': getThemeToken(colors.AC2),
      variant: getThemeToken(syntaxColors.variableProperty)
    }
  };

  const theme: ZedTheme = {
    name: 'Generated Theme',
    author: 'Theme Generator',
    themes: [
      {
        name,
        appearance: vscodeTheme.type,
        style
      }
    ]
  };

  return JSON.stringify(theme, null, 2);
}
