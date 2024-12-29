" General syntax highlighting (matching VSCode's general token colors)

" Basic syntax groups
execute 'highlight Normal guifg=' . g:colors.FG1 . ' guibg=' . g:theme_get_background()
execute 'highlight NonText guifg=' . g:syntaxColors.comment . ' gui=NONE'
execute 'highlight Special guifg=' . g:syntaxColors.other
execute 'highlight SpecialKey guifg=' . g:syntaxColors.other
execute 'highlight Conceal guifg=' . g:syntaxColors.other
execute 'highlight Underlined gui=underline'
execute 'highlight Ignore guifg=' . g:syntaxColors.comment
execute 'highlight Error guifg=' . g:colors.ERROR . ' guibg=NONE'
execute 'highlight Todo guifg=' . g:colors.WARNING . ' guibg=NONE'
execute 'highlight MatchParen guifg=' . g:colors.FG1 . ' guibg=' . g:colors.selection

" Text formatting
execute 'highlight Bold gui=bold'
execute 'highlight Italic gui=italic'
execute 'highlight Underlined gui=underline'

" Search and selection
execute 'highlight Search guibg=' . g:colors.findMatch . ' guifg=' . g:colors.FG1
execute 'highlight IncSearch guibg=' . g:colors.findMatch . ' guifg=' . g:colors.FG1
execute 'highlight CurSearch guibg=' . g:colors.findMatch . ' guifg=' . g:colors.FG1
execute 'highlight Visual guibg=' . g:colors.selection
execute 'highlight VisualNOS guibg=' . g:colors.selection

" Cursor and current line
execute 'highlight Cursor guifg=bg guibg=' . g:colors.AC1
execute 'highlight CursorIM guifg=bg guibg=' . g:colors.AC1
execute 'highlight CursorLine guibg=' . g:colors.lineHighlight . ' gui=NONE'
execute 'highlight CursorColumn guibg=' . g:colors.lineHighlight . ' gui=NONE'
execute 'highlight ColorColumn guibg=' . g:colors.lineHighlight . ' gui=NONE'

" Line numbers and signs column
execute 'highlight LineNr guifg=' . g:syntaxColors.comment . ' guibg=' . g:theme_get_line_number_bg()
execute 'highlight CursorLineNr guifg=' . g:colors.AC1 . ' guibg=' . g:theme_get_line_number_bg()
execute 'highlight SignColumn guibg=' . g:theme_get_background()
execute 'highlight FoldColumn guifg=' . g:syntaxColors.comment . ' guibg=' . g:theme_get_background()

" Folding
execute 'highlight Folded guifg=' . g:syntaxColors.comment . ' guibg=' . g:colors.BG2
execute 'highlight FoldColumn guifg=' . g:syntaxColors.comment . ' guibg=' . g:theme_get_background()

" Popup menu
execute 'highlight Pmenu guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight PmenuSel guifg=' . g:theme_getAC2Foreground() . ' guibg=' . g:colors.AC2
execute 'highlight PmenuSbar guibg=' . g:colors.BG3
execute 'highlight PmenuThumb guibg=' . g:colors.FG2

" Spelling
execute 'highlight SpellBad gui=undercurl guisp=' . g:colors.ERROR
execute 'highlight SpellCap gui=undercurl guisp=' . g:colors.WARNING
execute 'highlight SpellLocal gui=undercurl guisp=' . g:colors.INFO
execute 'highlight SpellRare gui=undercurl guisp=' . g:colors.AC1

" Diffs
execute 'highlight DiffAdd guifg=' . g:colors.SUCCESS . ' guibg=' . g:theme_get_background()
execute 'highlight DiffChange guifg=' . g:colors.WARNING . ' guibg=' . g:theme_get_background()
execute 'highlight DiffDelete guifg=' . g:colors.ERROR . ' guibg=' . g:theme_get_background()
execute 'highlight DiffText guifg=' . g:colors.INFO . ' guibg=' . g:theme_get_background()

" Directory
execute 'highlight Directory guifg=' . g:syntaxColors.class

" Whitespace
execute 'highlight WhitespaceEOL guifg=' . g:colors.ERROR . ' guibg=NONE'
execute 'highlight NonText guifg=' . g:syntaxColors.comment . ' gui=NONE'
execute 'highlight SpecialKey guifg=' . g:syntaxColors.comment . ' gui=NONE'

" Wild menu
execute 'highlight WildMenu guifg=' . g:theme_getAC2Foreground() . ' guibg=' . g:colors.AC2

" QuickFix
execute 'highlight qfLineNr guifg=' . g:syntaxColors.comment
execute 'highlight qfFileName guifg=' . g:syntaxColors.class

" Treesitter Context
execute 'highlight TreesitterContext guibg=' . g:colors.BG2
execute 'highlight TreesitterContextLineNumber guifg=' . g:colors.AC1 . ' guibg=' . g:colors.BG2

" LSP References
execute 'highlight LspReferenceText guibg=' . g:colors.selection
execute 'highlight LspReferenceRead guibg=' . g:colors.selection
execute 'highlight LspReferenceWrite guibg=' . g:colors.selection

" LSP Diagnostics
execute 'highlight DiagnosticError guifg=' . g:colors.ERROR
execute 'highlight DiagnosticWarn guifg=' . g:colors.WARNING
execute 'highlight DiagnosticInfo guifg=' . g:colors.INFO
execute 'highlight DiagnosticHint guifg=' . g:colors.SUCCESS

execute 'highlight DiagnosticUnderlineError gui=undercurl guisp=' . g:colors.ERROR
execute 'highlight DiagnosticUnderlineWarn gui=undercurl guisp=' . g:colors.WARNING
execute 'highlight DiagnosticUnderlineInfo gui=undercurl guisp=' . g:colors.INFO
execute 'highlight DiagnosticUnderlineHint gui=undercurl guisp=' . g:colors.SUCCESS

" Neovim Terminal Colors
let g:terminal_color_0 = g:ansiColors.Black
let g:terminal_color_1 = g:ansiColors.Red
let g:terminal_color_2 = g:ansiColors.Green
let g:terminal_color_3 = g:ansiColors.Yellow
let g:terminal_color_4 = g:ansiColors.Blue
let g:terminal_color_5 = g:ansiColors.Magenta
let g:terminal_color_6 = g:ansiColors.Cyan
let g:terminal_color_7 = g:ansiColors.White
let g:terminal_color_8 = g:ansiColors.BrightBlack
let g:terminal_color_9 = g:ansiColors.BrightRed
let g:terminal_color_10 = g:ansiColors.BrightGreen
let g:terminal_color_11 = g:ansiColors.BrightYellow
let g:terminal_color_12 = g:ansiColors.BrightBlue
let g:terminal_color_13 = g:ansiColors.BrightMagenta
let g:terminal_color_14 = g:ansiColors.BrightCyan
let g:terminal_color_15 = g:ansiColors.BrightWhite
