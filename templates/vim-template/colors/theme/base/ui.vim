" Basic UI elements
highlight Normal guifg=g:colors.fg1 guibg=g:colors.bg1
highlight NormalFloat guifg=g:colors.fg1 guibg=g:colors.bg2
highlight NormalNC guifg=g:colors.fg2 guibg=g:colors.bg1
highlight Cursor guifg=g:colors.ac1 guibg=g:colors.bg1
execute 'highlight CursorLine guibg=' . g:colors.line_highlight . ' guifg=' . g:GetLineHighlightForeground()
execute 'highlight CursorColumn guibg=' . g:colors.line_highlight . ' guifg=' . g:GetLineHighlightForeground()
" execute 'highlight ColorColumn guibg=' . g:colors.lineHighlight . ' guifg=' . g:GetLineHighlightForeground()
highlight LineNr guifg=g:syntax_colors.comment
highlight CursorLineNr guifg=g:colors.fg2
highlight SignColumn guibg=g:colors.bg1

" Window/Split elements
highlight VertSplit guifg=g:colors.border guibg=NONE
highlight WinSeparator guifg=g:colors.border guibg=NONE

" Selection and search
execute 'highlight Visual guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
execute 'highlight VisualNOS guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
execute 'highlight Search guibg=' . g:colors.find_match . ' guifg=' . g:GetFindMatchForeground()
execute 'highlight IncSearch guibg=' . g:colors.find_match . ' guifg=' . g:GetFindMatchForeground()
execute 'highlight MatchParen guibg=' . g:colors.line_highlight . ' guifg=' . g:GetFindMatchForeground()

" Folds
highlight Folded guifg=g:syntax_colors.comment guibg=g:colors.bg3
" highlight FoldColumn guifg=g:syntax_colors.comment guibg=g:colors.BG1

" Status line
execute 'highlight StatusLine guibg=' . g:colors.ac2 . ' guifg=' . g:GetAC2Foreground()
highlight StatusLineNC guifg=g:syntax_colors.comment guibg=g:colors.bg2
execute 'highlight WildMenu guibg=' . g:colors.bg3 . ' guifg=' . g:colors.fg1

" Messages
execute 'highlight ModeMsg guibg=' . g:colors.ac1 . ' guifg=' . g:GetAC1Foreground()
execute 'highlight MoreMsg guibg=' . g:colors.ac1 . ' guifg=' . g:GetAC1Foreground()
execute 'highlight Question guibg=' . g:colors.ac1 . ' guifg=' . g:GetAC1Foreground()
execute 'highlight WarningMsg guibg=' . g:colors.warning . ' guifg=' . g:GetWARNINGForeground()
execute 'highlight ErrorMsg guibg=' . g:colors.error . ' guifg=' . g:GetERRORForeground()

" Popup menu
highlight Pmenu guifg=g:colors.fg1 guibg=g:colors.bg2
execute 'highlight PmenuSel guibg=' . g:colors.ac2 . ' guifg=' . g:GetAC2Foreground()
highlight PmenuSbar guibg=g:colors.bg3
highlight PmenuThumb guibg=g:colors.comment

" Tabs
highlight TabLine guifg=g:syntax_colors.comment guibg=g:colors.bg3
highlight TabLineFill guifg=g:colors.fg2 guibg=g:colors.bg1
execute 'highlight TabLineSel guibg=' . g:colors.ac2 . ' guifg=' . g:GetAC2Foreground()

" Special UI elements
highlight NonText guifg=g:syntax_colors.comment
highlight Whitespace guifg=g:syntax_colors.comment
highlight SpecialKey guifg=g:syntax_colors.comment
highlight EndOfBuffer guifg=g:syntax_colors.comment
highlight Directory guifg=g:colors.fg2

" Diffs
execute 'highlight DiffAdd guibg=' . g:colors.success . ' guifg=' . g:GetSUCCESSForeground()
execute 'highlight DiffChange guibg=' . g:colors.info . ' guifg=' . g:GetINFOForeground()
execute 'highlight DiffDelete guibg=' . g:colors.error . ' guifg=' . g:GetERRORForeground()
execute 'highlight DiffText guibg=' . g:colors.warning . ' guifg=' . g:GetWARNINGForeground()

" Spell checking
execute 'highlight SpellBad guisp=' . g:colors.error . ' gui=undercurl'
execute 'highlight SpellCap guisp=' . g:colors.info . ' gui=undercurl'
execute 'highlight SpellRare guisp=' . g:colors.warning . ' gui=undercurl'
execute 'highlight SpellLocal guisp=' . g:colors.success . ' gui=undercurl'

" Support for floating windows
highlight NormalFloat guifg=g:colors.fg1 guibg=g:colors.bg2
highlight FloatBorder guifg=g:colors.border guibg=g:colors.bg2

" Quick-fix window
execute 'highlight QuickFixLine guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
highlight qfLineNr guifg=g:syntax_colors.support_variable
highlight qfFileName guifg=g:syntax_colors.support_function

" Scrollbars (similar to VSCode's scrollbar styling)
execute 'highlight ScrollBar guifg=' . g:colors.fg2 . ' guibg=' . g:colors.bg2
execute 'highlight ScrollBarThumb guifg=' . g:colors.fg2 . ' guibg=' . g:colors.bg3
execute 'highlight VertScrollBar guifg=' . g:colors.fg2 . ' guibg=' . g:colors.bg2
execute 'highlight HorzScrollBar guifg=' . g:colors.fg2 . ' guibg=' . g:colors.bg2

" Neovim's global winbar
execute 'highlight WinBar guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg2
execute 'highlight WinBarNC guifg=' . g:syntax_colors.comment . ' guibg=' . g:colors.bg2

" Command line (similar to VSCode's command center)
execute 'highlight MsgArea guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg1
execute 'highlight CommandLine guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg1
execute 'highlight CommandLinePrompt guifg=' . g:colors.ac1
execute 'highlight CommandLineModeMsg guifg=' . g:colors.ac2

" Menu items (popup menus and context menus)
execute 'highlight Menu guifg=' . g:colors.fg2 . ' guibg=' . g:colors.bg3
execute 'highlight MenuSel guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
execute 'highlight MenuActive guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3
execute 'highlight MenuActiveHighlight guifg=' . g:colors.ac1
execute 'highlight MenuDisabled guifg=' . g:syntax_colors.comment
execute 'highlight MenuSbar guibg=' . g:colors.bg3
execute 'highlight MenuThumb guibg=' . g:colors.fg2

" Welcome screen elements (for plugins showing welcome screens)
execute 'highlight StartLogo guifg=' . g:colors.ac1
execute 'highlight StartHeader guifg=' . g:colors.ac2
execute 'highlight StartSection guifg=' . g:colors.fg1
execute 'highlight StartFooter guifg=' . g:colors.fg2
execute 'highlight StartKey guifg=' . g:colors.ac1
execute 'highlight StartValue guifg=' . g:colors.fg1
execute 'highlight StartButton guibg=' . g:colors.ac2 . ' guifg=' . g:GetAC2Foreground()
execute 'highlight StartButtonHover guibg=' . g:colors.ac1 . ' guifg=' . g:GetAC1Foreground()

" Keyboard shortcuts table (similar to VSCode's keybinding table)
execute 'highlight KeybindHeader guifg=' . g:GetAC2Foreground() . ' guibg=' . g:colors.ac2
execute 'highlight KeybindKey guifg=' . g:colors.ac1
execute 'highlight KeybindCommand guifg=' . g:colors.fg1
execute 'highlight KeybindWhen guifg=' . g:colors.fg2
execute 'highlight KeybindSource guifg=' . g:syntax_colors.comment

" Notifications (similar to VSCode's notifications)
execute 'highlight NotificationInfo guibg=' . g:colors.bg3 . ' guifg=' . g:colors.info
execute 'highlight NotificationWarning guibg=' . g:colors.bg3 . ' guifg=' . g:colors.warning
execute 'highlight NotificationError guibg=' . g:colors.bg3 . ' guifg=' . g:colors.error
execute 'highlight NotificationBody guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg2
execute 'highlight NotificationLink guifg=' . g:colors.info
execute 'highlight NotificationIcon guifg=' . g:colors.ac1

" Banner (similar to VSCode's banner)
execute 'highlight Banner guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3
execute 'highlight BannerIcon guifg=' . g:colors.ac1 . ' guibg=' . g:colors.bg3
execute 'highlight BannerSuccess guifg=' . g:colors.success . ' guibg=' . g:colors.bg3
execute 'highlight BannerWarning guifg=' . g:colors.warning . ' guibg=' . g:colors.bg3
execute 'highlight BannerError guifg=' . g:colors.error . ' guibg=' . g:colors.bg3

" Command center (similar to VSCode's command center)
execute 'highlight CmdCenter guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg1
execute 'highlight CmdCenterActive guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3
execute 'highlight CmdCenterActiveIcon guifg=' . g:colors.ac1 . ' guibg=' . g:colors.bg3
execute 'highlight CmdCenterBorder guifg=' . g:colors.border . ' guibg=' . g:colors.bg1
execute 'highlight CmdCenterInactive guifg=' . g:syntax_colors.comment . ' guibg=' . g:colors.bg1

" Testing colors (similar to VSCode's testing decorations)
execute 'highlight TestPassed guifg=' . g:colors.success
execute 'highlight TestFailed guifg=' . g:colors.error
execute 'highlight TestRunning guifg=' . g:colors.info
execute 'highlight TestSkipped guifg=' . g:syntax_colors.comment
execute 'highlight TestIcon guifg=' . g:colors.ac1

" Built-in terminal colors
let g:terminal_color_0 = g:ansi_colors.black
let g:terminal_color_1 = g:ansi_colors.red
let g:terminal_color_2 = g:ansi_colors.green
let g:terminal_color_3 = g:ansi_colors.yellow
let g:terminal_color_4 = g:ansi_colors.blue
let g:terminal_color_5 = g:ansi_colors.magenta
let g:terminal_color_6 = g:ansi_colors.cyan
let g:terminal_color_7 = g:ansi_colors.white
let g:terminal_color_8 = g:ansi_colors.bright_black
let g:terminal_color_9 = g:ansi_colors.bright_red
let g:terminal_color_10 = g:ansi_colors.bright_green
let g:terminal_color_11 = g:ansi_colors.bright_yellow
let g:terminal_color_12 = g:ansi_colors.bright_blue
let g:terminal_color_13 = g:ansi_colors.bright_magenta
let g:terminal_color_14 = g:ansi_colors.bright_cyan
let g:terminal_color_15 = g:ansi_colors.bright_white

" Base colors
highlight Normal guifg=g:colors.warning guibg=g:colors.bg1

" Comments
highlight Comment guifg=g:syntax_colors.comment gui=italic
highlight SpecialComment guifg=g:syntax_colors.comment gui=italic
highlight Todo guifg=g:colors.warning guibg=NONE gui=bold
highlight @comment guifg=g:syntax_colors.comment gui=italic
highlight @comment.documentation guifg=g:syntax_colors.comment gui=italic
highlight @comment.todo guifg=g:colors.warning gui=bold
highlight @comment.note guifg=g:colors.warning gui=bold
highlight @comment.warning guifg=g:colors.warning gui=bold
highlight @comment.error guifg=g:colors.error gui=bold
highlight @comment.fixme guifg=g:colors.warning gui=bold
highlight @comment.hack guifg=g:colors.warning gui=bold

" Basic syntax
highlight String guifg=g:colors.fg1
highlight Emphasis gui=italic
highlight Strong gui=bold
highlight Invalid guifg=g:colors.error guibg=g:colors.bg2 gui=strikethrough
highlight @deprecated guifg=g:colors.warning gui=underline,italic
highlight Title guifg=g:colors.ac2

" UI elements
highlight Cursor guifg=g:GetAC1Foreground() guibg=g:colors.ac1
highlight LineNr guifg=g:syntax_colors.comment
highlight CursorLineNr guifg=g:GetLineHighlightForeground() guibg=g:colors.line_highlight
highlight VertSplit guifg=g:colors.border guibg=NONE
highlight ColorColumn guibg=g:colors.bg2
highlight SignColumn guibg=g:colors.bg1
highlight Visual guibg=g:colors.selection guifg=g:GetSelectionForeground()
highlight VisualNOS guibg=g:colors.selection guifg=g:GetSelectionForeground()
highlight IncSearch guifg=g:GetFindMatchForeground() guibg=g:colors.find_match
highlight Search guifg=g:GetFindMatchForeground() guibg=g:colors.find_match
highlight MatchParen guibg=g:colors.line_highlight guifg=g:GetLineHighlightForeground()
highlight Folded guifg=g:syntax_colors.comment guibg=g:colors.bg2
highlight FoldColumn guifg=g:syntax_colors.comment guibg=g:colors.bg1
highlight NonText guifg=g:syntax_colors.comment
highlight Whitespace guifg=g:syntax_colors.comment
highlight SpecialKey guifg=g:syntax_colors.comment
highlight EndOfBuffer guifg=g:colors.bg1

" Status Line
highlight StatusLine guifg=g:GetAC2Foreground() guibg=g:colors.ac2
highlight StatusLineNC guifg=g:syntax_colors.comment guibg=g:colors.bg2
highlight WildMenu guifg=g:colors.fg2 guibg=g:colors.bg3
highlight ModeMsg guifg=g:colors.ac1
highlight MoreMsg guifg=g:colors.ac1
highlight Question guifg=g:colors.ac1
highlight WarningMsg guifg=g:colors.warning
highlight ErrorMsg guifg=g:colors.error guibg=g:colors.bg1

" Popup Menu
highlight Pmenu guifg=g:colors.fg1 guibg=g:colors.bg2
highlight PmenuSel guifg=g:colors.fg1 guibg=g:colors.selection
highlight PmenuSbar guibg=g:colors.bg3
highlight PmenuThumb guibg=g:colors.fg2

" Tabs
highlight TabLine guifg=g:syntax_colors.comment guibg=g:colors.bg3
highlight TabLineFill guifg=g:colors.border guibg=g:colors.bg1
highlight TabLineSel guifg=g:colors.fg1 guibg=g:colors.bg2

" Function highlighting
" Variables and identifiers
highlight Identifier guifg=g:syntax_colors.variable
highlight @variable guifg=g:syntax_colors.variable
highlight @variable.builtin guifg=g:syntax_colors.support_variable
highlight @variable.parameter guifg=g:syntax_colors.parameter
highlight @variable.member guifg=g:syntax_colors.variable_property
highlight @property guifg=g:syntax_colors.property
highlight @field guifg=g:syntax_colors.variable_property
highlight @parameter guifg=g:syntax_colors.parameter
highlight @label guifg=g:syntax_colors.variable_readonly

" Constants and attributes
highlight Constant guifg=g:syntax_colors.variable_readonly
highlight @constant guifg=g:syntax_colors.variable_readonly
highlight @constant.builtin guifg=g:syntax_colors.support_variable
highlight @attribute guifg=g:syntax_colors.attribute
highlight @namespace guifg=g:syntax_colors.class

" Functions and methods
highlight Function guifg=g:syntax_colors.function
highlight @function guifg=g:syntax_colors.function
highlight @function.call guifg=g:syntax_colors.function_call
highlight @function.builtin guifg=g:syntax_colors.support_function
highlight @method guifg=g:syntax_colors.method
highlight @method.call guifg=g:syntax_colors.method_call
highlight @constructor guifg=g:syntax_colors.function
highlight @decorator guifg=g:syntax_colors.function_call
highlight @annotation guifg=g:syntax_colors.function_call

" Statement and control flow
highlight Statement guifg=g:syntax_colors.keyword
highlight Conditional guifg=g:syntax_colors.control_flow
highlight Repeat guifg=g:syntax_colors.control_flow
highlight Label guifg=g:syntax_colors.variable_readonly
highlight Operator guifg=g:syntax_colors.operator
highlight Keyword guifg=g:syntax_colors.keyword
highlight Exception guifg=g:colors.error

highlight Type guifg=g:syntax_colors.type
highlight StorageClass guifg=g:syntax_colors.storage
highlight Structure guifg=g:syntax_colors.type
highlight Typedef guifg=g:syntax_colors.type

highlight Special guifg=g:syntax_colors.keyword
highlight SpecialChar guifg=g:syntax_colors.keyword
highlight Tag guifg=g:syntax_colors.tag
highlight Delimiter guifg=g:syntax_colors.punctuation_comma
highlight SpecialComment guifg=g:syntax_colors.comment
highlight Debug guifg=g:colors.warning

highlight Underlined guifg=g:colors.ac1 gui=underline
highlight Ignore guifg=g:syntax_colors.comment
highlight Error guifg=g:colors.error
highlight Todo guifg=g:colors.warning gui=bold

" Plugin support
highlight CocErrorSign guifg=g:colors.error
highlight CocWarningSign guifg=g:colors.warning
highlight CocInfoSign guifg=g:colors.info
highlight CocHintSign guifg=g:colors.success
highlight CocHighlightText guibg=g:colors.ac1 guifg=g:GetAC1Foreground()
highlight CocFloating guibg=g:colors.bg2

" Treesitter
highlight @function guifg=g:syntax_colors.function
highlight @function.call guifg=g:syntax_colors.function_call
highlight @method guifg=g:syntax_colors.method
highlight @method.call guifg=g:syntax_colors.method_call
highlight @constructor guifg=g:syntax_colors.class
highlight @parameter guifg=g:syntax_colors.parameter
highlight @variable guifg=g:syntax_colors.variable
highlight @variable.builtin guifg=g:syntax_colors.support_variable
highlight @constant guifg=g:syntax_colors.constant
highlight @constant.builtin guifg=g:syntax_colors.language
highlight @string guifg=g:colors.fg1
highlight @character guifg=g:colors.fg1
highlight @number guifg=g:syntax_colors.constant
highlight @boolean guifg=g:syntax_colors.constant
highlight @float guifg=g:syntax_colors.constant
highlight @attribute guifg=g:syntax_colors.attribute
highlight @namespace guifg=g:syntax_colors.class
highlight @keyword guifg=g:syntax_colors.keyword
highlight @keyword.function guifg=g:syntax_colors.keyword
highlight @keyword.operator guifg=g:syntax_colors.operator
highlight @keyword.return guifg=g:syntax_colors.control_flow
highlight @operator guifg=g:syntax_colors.operator
highlight @punctuation.bracket guifg=g:syntax_colors.punctuation_brace
highlight @punctuation.delimiter guifg=g:syntax_colors.punctuation_comma
highlight @punctuation.special guifg=g:syntax_colors.punctuation
highlight @tag guifg=g:syntax_colors.tag
highlight @tag.delimiter guifg=g:syntax_colors.tag_punctuation
highlight @tag.attribute guifg=g:syntax_colors.attribute
highlight @type guifg=g:syntax_colors.type
highlight @type.builtin guifg=g:syntax_colors.support
highlight @type.definition guifg=g:syntax_colors.type_parameter
highlight @type.qualifier guifg=g:syntax_colors.modifier
highlight @storage guifg=g:syntax_colors.storage
highlight @structure guifg=g:syntax_colors.type
highlight @include guifg=g:syntax_colors.control_import
highlight @conditional guifg=g:syntax_colors.control_flow
highlight @repeat guifg=g:syntax_colors.control_flow
highlight @exception guifg=g:colors.error
highlight @text guifg=g:colors.fg1
highlight @text.strong guifg=g:colors.fg1 gui=bold
highlight @text.emphasis guifg=g:colors.fg1 gui=italic
highlight @text.underline guifg=g:colors.fg1 gui=underline
highlight @text.strike guifg=g:colors.fg1 gui=strikethrough
highlight @text.note guifg=g:colors.info
highlight @text.warning guifg=g:colors.warning
highlight @text.danger guifg=g:colors.error

" Markdown
highlight markdownH1 guifg=g:colors.ac1 gui=bold
highlight markdownH2 guifg=g:colors.ac2 gui=bold
highlight markdownH3 guifg=g:ansi_colors.bright_yellow gui=bold
highlight markdownH4 guifg=g:ansi_colors.bright_green gui=bold
highlight markdownH5 guifg=g:ansi_colors.bright_cyan gui=bold
highlight markdownH6 guifg=g:ansi_colors.bright_blue gui=bold
highlight markdownBold guifg=g:colors.warning gui=bold
highlight markdownItalic guifg=g:colors.error gui=italic
highlight markdownStrike guifg=g:colors.fg2 gui=strikethrough
highlight markdownUrl guifg=g:colors.info gui=underline
highlight markdownUrlTitle guifg=g:colors.info
highlight markdownCode guifg=g:colors.success
highlight markdownCodeLanguage guifg=g:syntax_colors.language
highlight markdownCodeDelimiter guifg=g:colors.fg2
highlight markdownBlockquote guifg=g:syntax_colors.punctuation
highlight markdownRule guifg=g:syntax_colors.operator
highlight markdownListMarker guifg=g:syntax_colors.unit
highlight markdownOrderedListMarker guifg=g:syntax_colors.unit
highlight markdownLinkText guifg=g:colors.info
highlight markdownLinkDelimiter guifg=g:syntax_colors.punctuation_comma
highlight markdownLinkTextDelimiter guifg=g:syntax_colors.punctuation_comma
highlight markdownHeadingDelimiter guifg=g:syntax_colors.punctuation_comma
highlight markdownHeadingRule guifg=g:syntax_colors.punctuation
highlight markdownUrlTitleDelimiter guifg=g:syntax_colors.punctuation_comma
highlight markdownUrlDelimiter guifg=g:syntax_colors.punctuation_comma
