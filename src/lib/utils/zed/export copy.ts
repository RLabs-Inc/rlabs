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

interface ThemeToken {
  color: string;
  font_style: string | null;
  font_weight: number | null;
}

function getThemeToken(color: string): ThemeToken {
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
    // Base colors and accents
    'background.appearance': 'opaque' as const,
    background: colors.BG1,

    // Elevated surfaces and panels
    'elevated_surface.background': colors.BG2,
    'surface.background': colors.BG2,

    // Borders
    border: colors.BORDER,
    'border.variant': colors.AC1,
    'border.focused': colors.AC2,
    'border.selected': colors.AC1,
    'border.transparent': withOpacity(colors.BORDER, '20'),
    'border.disabled': syntaxColors.comment,

    // Element states
    'element.background': colors.BG3,
    'element.hover': withOpacity(colors.AC2, '40'),
    'element.active': withOpacity(colors.AC2, '60'),
    'element.selected': withOpacity(colors.AC2, '50'),
    'element.disabled': syntaxColors.comment,
    'drop_target.background': withOpacity(colors.BG2, '66'),

    // Ghost elements
    'ghost_element.background': withOpacity(colors.BG2, '59'),
    'ghost_element.hover': withOpacity(colors.AC2, '40'),
    'ghost_element.active': withOpacity(colors.AC2, '60'),
    'ghost_element.selected': withOpacity(colors.AC2, '50'),
    'ghost_element.disabled': syntaxColors.comment,

    // Text styles
    text: colors.FG1,
    'text.muted': syntaxColors.comment,
    'text.placeholder': syntaxColors.comment,
    'text.disabled': syntaxColors.comment,
    'text.accent': colors.AC2,

    // Icons
    icon: colors.FG1,
    'icon.muted': syntaxColors.comment,
    'icon.disabled': syntaxColors.comment,
    'icon.placeholder': syntaxColors.comment,
    'icon.accent': colors.AC2,

    // Editor core
    'editor.foreground': colors.FG1,
    'editor.background': colors.BG1,
    'editor.gutter.background': colors.BG1,
    'editor.subheader.background': colors.BG3,
    'editor.active_line.background': colors.lineHighlight,
    'editor.highlighted_line.background': colors.lineHighlight,
    'editor.line_number': syntaxColors.comment,
    'editor.active_line_number': colors.AC2,
    'editor.invisible': withOpacity(syntaxColors.comment, '66'),

    // Editor UI elements
    'editor.indent_guide': colors.lineHighlight,
    'editor.indent_guide_active': colors.AC2,
    'editor.indent_guide_hover': colors.AC1,
    'editor.wrap_guide': colors.lineHighlight,
    'editor.active_wrap_guide': colors.AC2,

    // Editor selections and highlights
    'editor.selection.background': colors.selection,
    'editor.matching_bracket.background': colors.findMatch,

    // Search
    'search.match_background': colors.findMatch,
    'search.match_border': colors.FG1,

    // Status bar
    'status_bar.background': colors.AC2,

    // Title bar
    'title_bar.background': colors.BG2,
    'title_bar.inactive_background': withOpacity(colors.BG2, '70'),

    // Panels
    'panel.background': colors.BG3,
    'panel.focused_border': colors.BORDER,
    // Panes
    'pane.focused_border': colors.BORDER,
    'pane_group.border': colors.BORDER,

    // Terminal colors
    'terminal.background': colors.BG1,
    'terminal.foreground': colors.FG1,
    'terminal.bright_foreground': colors.FG1,
    'terminal.dim_foreground': colors.FG2,
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

    // Players
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

    // Syntax highlighting tokens
    syntax: {
      // Variables
      variable: getThemeToken(syntaxColors.variable),
      'variable.builtin': getThemeToken(syntaxColors.variableDeclaration),
      'variable.parameter': getThemeToken(syntaxColors.parameter),
      'variable.member': getThemeToken(syntaxColors.variableProperty),
      'variable.special': getThemeToken(syntaxColors.variableReadonly),

      // Constants
      constant: getThemeToken(syntaxColors.constant),
      'constant.builtin': getThemeToken(syntaxColors.language),
      'constant.macro': getThemeToken(syntaxColors.constant),
      boolean: getThemeToken(syntaxColors.constant),
      number: getThemeToken(syntaxColors.constant),
      float: getThemeToken(syntaxColors.constant),

      // Strings and characters
      string: getThemeToken(colors.FG1),
      'string.special': getThemeToken(colors.FG2),
      'string.escape': getThemeToken(syntaxColors.other),
      'string.regexp': getThemeToken(syntaxColors.other),
      character: getThemeToken(syntaxColors.other),
      'character.special': getThemeToken(syntaxColors.other),

      // Functions and methods
      function: getThemeToken(syntaxColors.function),
      'function.builtin': getThemeToken(syntaxColors.supportFunction),
      'function.call': getThemeToken(syntaxColors.functionCall),
      'function.method': getThemeToken(syntaxColors.method),
      'function.method.call': getThemeToken(syntaxColors.methodCall),

      // Keywords and operators
      keyword: getThemeToken(syntaxColors.keyword),
      'keyword.control': getThemeToken(syntaxColors.control),
      'keyword.control.import': getThemeToken(syntaxColors.controlImport),
      'keyword.operator': getThemeToken(syntaxColors.operator),
      'keyword.directive': getThemeToken(syntaxColors.keyword),
      operator: getThemeToken(syntaxColors.operator),

      // Types and modules
      type: getThemeToken(syntaxColors.type),
      'type.builtin': getThemeToken(syntaxColors.support),
      module: getThemeToken(syntaxColors.typeParameter),
      namespace: getThemeToken(syntaxColors.class),

      // Tags and markup
      tag: getThemeToken(syntaxColors.tag),
      'tag.attribute': getThemeToken(syntaxColors.attribute),
      'tag.delimiter': getThemeToken(syntaxColors.tagPunctuation),

      // Properties and attributes
      property: getThemeToken(syntaxColors.property),
      attribute: getThemeToken(syntaxColors.attribute),
      label: getThemeToken(syntaxColors.property),

      // Punctuation
      punctuation: getThemeToken(syntaxColors.punctuation),
      'punctuation.delimiter': getThemeToken(syntaxColors.punctuationComma),
      'punctuation.bracket': getThemeToken(syntaxColors.punctuationBrace),
      'punctuation.special': getThemeToken(syntaxColors.punctuation),

      // Comments
      comment: getThemeToken(syntaxColors.comment),
      'comment.line': getThemeToken(syntaxColors.comment),
      'comment.block': getThemeToken(syntaxColors.comment),
      'comment.doc': getThemeToken(syntaxColors.comment),
      'comment.error': getThemeToken(colors.ERROR),
      'comment.warning': getThemeToken(colors.WARNING),
      'comment.note': getThemeToken(colors.INFO),
      'comment.todo': getThemeToken(colors.WARNING),

      // Diffs
      'diff.plus': getThemeToken(colors.SUCCESS),
      'diff.minus': getThemeToken(colors.ERROR),
      'diff.delta': getThemeToken(colors.WARNING),

      // Special tokens
      constructor: getThemeToken(syntaxColors.class),
      embedded: getThemeToken(colors.FG2),
      emphasis: getThemeToken(colors.FG1),
      'emphasis.strong': {
        color: colors.FG1,
        font_style: null,
        font_weight: 700
      },
      hint: getThemeToken(syntaxColors.comment),
      link_text: getThemeToken(colors.INFO),
      link_uri: getThemeToken(colors.INFO),

      class: getThemeToken(syntaxColors.class),
      'class.builtin': getThemeToken(syntaxColors.support),
      interface: getThemeToken(syntaxColors.type),
      enum: getThemeToken(syntaxColors.type),
      'type.parameter': getThemeToken(syntaxColors.typeParameter),

      // Keywords and operators
      'function.decorator': getThemeToken(syntaxColors.function),

      // Keywords and operators
      'keyword.control.flow': getThemeToken(syntaxColors.controlFlow),
      'keyword.modifier': getThemeToken(syntaxColors.modifier),
      'keyword.type': getThemeToken(syntaxColors.storage),
      'keyword.coroutine': getThemeToken(syntaxColors.keyword),
      'keyword.function': getThemeToken(syntaxColors.storage),
      'keyword.storage': getThemeToken(syntaxColors.storage),
      'keyword.repeat': getThemeToken(syntaxColors.keyword),
      'keyword.return': getThemeToken(syntaxColors.controlFlow),
      'keyword.debug': getThemeToken(syntaxColors.keyword),
      'keyword.exception': getThemeToken(syntaxColors.control),
      'keyword.conditional': getThemeToken(syntaxColors.controlFlow),
      'keyword.conditional.ternary': getThemeToken(syntaxColors.controlFlow),

      // Storage
      storage: getThemeToken(syntaxColors.storage),
      'storage.type': getThemeToken(syntaxColors.storage),
      'storage.modifier': getThemeToken(syntaxColors.modifier),

      'comment.hint': getThemeToken(syntaxColors.comment),

      'text.doctype': getThemeToken(syntaxColors.keyword),

      // Support types
      support: getThemeToken(syntaxColors.support),
      'support.function': getThemeToken(syntaxColors.supportFunction),
      'support.variable': getThemeToken(syntaxColors.supportVariable),
      'support.property': getThemeToken(syntaxColors.supportProperty),
      'support.method': getThemeToken(syntaxColors.supportMethod),

      // Special types
      unit: getThemeToken(syntaxColors.unit),
      datetime: getThemeToken(syntaxColors.datetime),

      // Embedded content
      'embedded.language': getThemeToken(syntaxColors.language),

      // Language-specific highlights
      field: getThemeToken(syntaxColors.variableProperty),
      symbol: getThemeToken(syntaxColors.other),

      // Special states
      invalid: getThemeToken(colors.ERROR),
      deprecated: getThemeToken(colors.WARNING),
      information: getThemeToken(colors.INFO),
      warning: getThemeToken(colors.WARNING),
      error: getThemeToken(colors.ERROR),

      // Additional semantic highlights
      concept: getThemeToken(syntaxColors.type),
      parent: getThemeToken(syntaxColors.type),
      variant: getThemeToken(syntaxColors.type),

      // Markdown specific
      'text.heading': getThemeToken(colors.AC1),
      'text.bold': {
        color: colors.WARNING,
        font_style: null,
        font_weight: 700
      },
      'text.italic': {
        color: colors.ERROR,
        font_style: null,
        font_weight: null
      },
      'text.quote': getThemeToken(colors.FG2),
      'text.link': getThemeToken(colors.INFO),
      'text.raw': getThemeToken(colors.SUCCESS),
      'text.literal': getThemeToken(colors.FG2),
      'text.math': getThemeToken(syntaxColors.other),
      'text.reference': getThemeToken(colors.FG2),
      'text.url': getThemeToken(colors.INFO),
      'text.emph': getThemeToken(colors.FG1),
      'text.strong': {
        color: colors.FG1,
        font_style: null,
        font_weight: 700
      }
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
