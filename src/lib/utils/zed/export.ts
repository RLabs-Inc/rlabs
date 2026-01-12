import type { VSCodeTheme } from '$lib/types/vscode/theme';
import type { UIColors, SyntaxColors, AnsiColors } from '$lib/types/vscode/color';

interface ZedTheme {
  $schema?: string;
  name: string;
  author: string;
  themes: {
    name: string;
    appearance: 'light' | 'dark';
    style: unknown;
  }[];
}

interface ThemeTokenStyle {
  color: string;
  font_style: 'italic' | 'oblique' | null;
  font_weight: 'bold' | null;
}

function getThemeToken(
  color: string,
  fontStyle?: 'italic' | 'oblique' | null,
  fontWeight?: 'bold' | null
): ThemeTokenStyle {
  return {
    color,
    font_style: fontStyle ?? null,
    font_weight: fontWeight ?? null
  };
}

function withOpacity(color: string, opacity: string): string {
  if (color.startsWith('#') && color.length === 7) {
    return `${color}${opacity}`;
  }
  return color;
}

export function generateZedThemeJSON(
  name: string = 'Generated Zed Theme',
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors,
  vscodeTheme: VSCodeTheme,
  author: string = 'RLabs Theme Generator'
): string {
  // Build status colors (matching converter's StatusColorsContent)
  const status = {
    // Conflict status
    conflict: colors.WARNING,
    conflict_background: withOpacity(colors.WARNING, '30'),
    conflict_border: colors.WARNING,

    // Created status
    created: colors.SUCCESS,
    created_background: withOpacity(colors.SUCCESS, '30'),
    created_border: colors.SUCCESS,

    // Deleted status
    deleted: colors.ERROR,
    deleted_background: withOpacity(colors.ERROR, '30'),
    deleted_border: colors.ERROR,

    // Error status
    error: colors.ERROR,
    error_background: withOpacity(colors.ERROR, '30'),
    error_border: colors.ERROR,

    // Hidden status
    hidden: syntaxColors.comment,
    hidden_background: '#00000000',
    hidden_border: '#00000000',

    // Hint status
    hint: colors.INFO,
    hint_background: withOpacity(colors.INFO, '20'),
    hint_border: colors.INFO,

    // Ignored status
    ignored: syntaxColors.comment,
    ignored_background: withOpacity(syntaxColors.comment, '20'),
    ignored_border: colors.BORDER,

    // Info status
    info: colors.INFO,
    info_background: withOpacity(colors.INFO, '30'),
    info_border: colors.INFO,

    // Modified status
    modified: colors.INFO,
    modified_background: withOpacity(colors.INFO, '30'),
    modified_border: colors.INFO,

    // Predictive status (AI features)
    predictive: syntaxColors.comment,
    predictive_background: withOpacity(syntaxColors.comment, '20'),
    predictive_border: colors.BORDER,

    // Renamed status
    renamed: colors.AC1,
    renamed_background: withOpacity(colors.AC1, '30'),
    renamed_border: colors.AC1,

    // Success status
    success: colors.SUCCESS,
    success_background: withOpacity(colors.SUCCESS, '30'),
    success_border: colors.SUCCESS,

    // Unreachable status
    unreachable: colors.ERROR,
    unreachable_background: withOpacity(colors.ERROR, '20'),
    unreachable_border: colors.ERROR,

    // Warning status
    warning: colors.WARNING,
    warning_background: withOpacity(colors.WARNING, '30'),
    warning_border: colors.WARNING
  };

  // Build theme colors (matching converter's ThemeColorsContent)
  const themeColors = {
    // Borders
    border_selected: colors.AC1,
    border_transparent: '#00000000',
    border_disabled: withOpacity(syntaxColors.comment, '80'),

    // Surface backgrounds
    elevated_surface_background: colors.BG2,
    surface_background: colors.BG2,
    background: colors.BG1,

    // Element states
    element_background: colors.BG3,
    element_hover: withOpacity(colors.AC2, '40'),
    element_active: withOpacity(colors.AC2, '60'),
    element_selected: withOpacity(colors.AC2, '50'),
    element_disabled: withOpacity(syntaxColors.comment, '60'),
    drop_target_background: withOpacity(colors.BG2, '66'),

    // Ghost element states
    ghost_element_background: '#00000000',
    ghost_element_hover: withOpacity(colors.AC2, '30'),
    ghost_element_selected: withOpacity(colors.AC2, '40'),
    ghost_element_disabled: withOpacity(syntaxColors.comment, '40'),

    // Text colors
    text: colors.FG1,
    text_muted: colors.FG2,
    text_placeholder: syntaxColors.comment,
    text_disabled: withOpacity(syntaxColors.comment, '80'),
    text_accent: colors.AC2,

    // Icon colors
    icon: colors.FG1,
    icon_muted: colors.FG2,
    icon_disabled: withOpacity(syntaxColors.comment, '80'),
    icon_placeholder: syntaxColors.comment,
    icon_accent: colors.AC2,

    // Debug colors
    debugger_accent: colors.WARNING,

    // UI element backgrounds
    status_bar_background: colors.AC2,
    title_bar_background: colors.BG2,
    title_bar_inactive_background: withOpacity(colors.BG2, '90'),
    toolbar_background: colors.BG1,
    tab_bar_background: colors.BG2,
    tab_inactive_background: colors.BG3,
    tab_active_background: colors.BG1,

    // Search related
    search_match_background: colors.findMatch,

    // Panel and pane
    panel_background: colors.BG3,
    panel_focused_border: colors.BORDER,
    panel_indent_guide: withOpacity(colors.BORDER, '60'),
    panel_indent_guide_hover: colors.AC2,
    panel_indent_guide_active: syntaxColors.comment,
    pane_focused_border: colors.AC2,
    pane_group_border: colors.BORDER,

    // Scrollbar
    scrollbar_thumb_background: withOpacity(colors.AC2, '33'),
    scrollbar_thumb_hover_background: withOpacity(colors.AC2, '50'),
    scrollbar_thumb_active_background: withOpacity(colors.AC2, '70'),
    scrollbar_thumb_border: withOpacity(colors.AC2, '20'),
    scrollbar_track_background: colors.BG1,
    scrollbar_track_border: withOpacity(colors.BORDER, '30'),

    // Minimap
    minimap_thumb_background: withOpacity(colors.AC2, '30'),
    minimap_thumb_hover_background: withOpacity(colors.AC2, '50'),
    minimap_thumb_active_background: withOpacity(colors.AC2, '70'),

    // Editor
    editor_foreground: colors.FG1,
    editor_background: colors.BG1,
    editor_gutter_background: colors.BG1,
    editor_subheader_background: colors.BG3,
    editor_active_line_background: colors.lineHighlight,
    editor_highlighted_line_background: withOpacity(colors.lineHighlight, 'cc'),
    editor_debugger_active_line_background: withOpacity(colors.WARNING, '30'),
    editor_line_number: syntaxColors.comment,
    editor_active_line_number: colors.AC1,
    editor_hover_line_number: colors.FG2,
    editor_invisible: withOpacity(syntaxColors.comment, '50'),
    editor_wrap_guide: withOpacity(colors.BORDER, '40'),
    editor_active_wrap_guide: colors.AC2,
    editor_indent_guide: withOpacity(syntaxColors.comment, '40'),
    editor_indent_guide_active: syntaxColors.comment,
    editor_document_highlight_read_background: withOpacity(colors.INFO, '25'),
    editor_document_highlight_write_background: withOpacity(colors.AC1, '30'),
    editor_document_highlight_bracket_background: withOpacity(colors.AC1, '40'),

    // Terminal
    terminal_background: colors.BG1,
    terminal_foreground: colors.FG1,
    terminal_ansi_background: colors.BG1,
    terminal_bright_foreground: colors.FG1,
    terminal_dim_foreground: colors.FG2,
    terminal_ansi_black: ansiColors.Black,
    terminal_ansi_bright_black: ansiColors.BrightBlack,
    terminal_ansi_dim_black: ansiColors.Black,
    terminal_ansi_red: ansiColors.Red,
    terminal_ansi_bright_red: ansiColors.BrightRed,
    terminal_ansi_dim_red: ansiColors.Red,
    terminal_ansi_green: ansiColors.Green,
    terminal_ansi_bright_green: ansiColors.BrightGreen,
    terminal_ansi_dim_green: ansiColors.Green,
    terminal_ansi_yellow: ansiColors.Yellow,
    terminal_ansi_bright_yellow: ansiColors.BrightYellow,
    terminal_ansi_dim_yellow: ansiColors.Yellow,
    terminal_ansi_blue: ansiColors.Blue,
    terminal_ansi_bright_blue: ansiColors.BrightBlue,
    terminal_ansi_dim_blue: ansiColors.Blue,
    terminal_ansi_magenta: ansiColors.Magenta,
    terminal_ansi_bright_magenta: ansiColors.BrightMagenta,
    terminal_ansi_dim_magenta: ansiColors.Magenta,
    terminal_ansi_cyan: ansiColors.Cyan,
    terminal_ansi_bright_cyan: ansiColors.BrightCyan,
    terminal_ansi_dim_cyan: ansiColors.Cyan,
    terminal_ansi_white: ansiColors.White,
    terminal_ansi_bright_white: ansiColors.BrightWhite,
    terminal_ansi_dim_white: ansiColors.White,

    // Links
    link_text_hover: colors.INFO,

    // Version control
    version_control_added: colors.SUCCESS,
    version_control_deleted: colors.ERROR,
    version_control_modified: colors.INFO,
    version_control_renamed: colors.AC1,
    version_control_conflict: colors.WARNING,
    version_control_ignored: syntaxColors.comment,
    version_control_word_added: withOpacity(colors.SUCCESS, '40'),
    version_control_word_deleted: withOpacity(colors.ERROR, '40'),
    version_control_conflict_marker_ours: withOpacity(colors.INFO, '50'),
    version_control_conflict_marker_theirs: withOpacity(colors.SUCCESS, '50')
  };

  // Build syntax highlighting (matching converter's ZedSyntaxToken mapping)
  const syntax: Record<string, ThemeTokenStyle> = {
    attribute: getThemeToken(syntaxColors.attribute),
    boolean: getThemeToken(syntaxColors.language),
    comment: getThemeToken(syntaxColors.comment, 'italic'),
    'comment.doc': getThemeToken(syntaxColors.comment, 'italic'),
    constant: getThemeToken(syntaxColors.constant),
    constructor: getThemeToken(syntaxColors.function),
    embedded: getThemeToken(colors.FG2),
    emphasis: getThemeToken(colors.FG1, 'italic'),
    'emphasis.strong': getThemeToken(colors.FG1, null, 'bold'),
    enum: getThemeToken(syntaxColors.type),
    function: getThemeToken(syntaxColors.function),
    hint: getThemeToken(colors.INFO),
    keyword: getThemeToken(syntaxColors.keyword),
    label: getThemeToken(syntaxColors.class),
    link_text: getThemeToken(colors.INFO),
    link_uri: getThemeToken(colors.INFO, 'italic'),
    number: getThemeToken(syntaxColors.constant),
    operator: getThemeToken(syntaxColors.operator),
    predictive: getThemeToken(syntaxColors.comment, 'italic'),
    preproc: getThemeToken(syntaxColors.modifier),
    primary: getThemeToken(colors.FG1),
    property: getThemeToken(syntaxColors.property),
    punctuation: getThemeToken(syntaxColors.punctuation),
    'punctuation.bracket': getThemeToken(syntaxColors.punctuationBrace),
    'punctuation.delimiter': getThemeToken(syntaxColors.punctuationComma),
    'punctuation.list_marker': getThemeToken(syntaxColors.punctuation),
    'punctuation.special': getThemeToken(syntaxColors.punctuationQuote),
    string: getThemeToken(colors.FG1),
    'string.escape': getThemeToken(syntaxColors.language),
    'string.regex': getThemeToken(colors.FG2),
    'string.special': getThemeToken(colors.AC2),
    'string.special.symbol': getThemeToken(colors.AC1),
    tag: getThemeToken(syntaxColors.tag),
    'text.literal': getThemeToken(colors.FG2),
    title: getThemeToken(colors.FG1, null, 'bold'),
    type: getThemeToken(syntaxColors.type),
    variable: getThemeToken(syntaxColors.variable),
    'variable.special': getThemeToken(syntaxColors.language),
    variant: getThemeToken(syntaxColors.variableProperty)
  };

  // Build the style object (matching converter's ThemeStyleContent)
  const style = {
    window_background_appearance: 'opaque' as const,
    accents: [colors.AC1, colors.AC2, colors.INFO, colors.SUCCESS, colors.WARNING, colors.ERROR],
    colors: themeColors,
    status,
    players: [
      {
        cursor: colors.AC1,
        selection: withOpacity(colors.AC1, '40'),
        background: colors.AC1
      },
      {
        cursor: colors.AC2,
        selection: withOpacity(colors.AC2, '40'),
        background: colors.AC2
      },
      {
        cursor: colors.INFO,
        selection: withOpacity(colors.INFO, '40'),
        background: colors.INFO
      },
      {
        cursor: colors.WARNING,
        selection: withOpacity(colors.WARNING, '40'),
        background: colors.WARNING
      },
      {
        cursor: colors.SUCCESS,
        selection: withOpacity(colors.SUCCESS, '40'),
        background: colors.SUCCESS
      },
      {
        cursor: colors.ERROR,
        selection: withOpacity(colors.ERROR, '40'),
        background: colors.ERROR
      }
    ],
    syntax
  };

  const theme: ZedTheme = {
    $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
    name,
    author,
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
