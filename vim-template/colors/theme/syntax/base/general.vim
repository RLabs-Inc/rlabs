" General syntax highlighting (matching VSCode's general token colors)

" Basic syntax groups
execute 'highlight Normal guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg1
execute 'highlight NonText guifg=' . g:syntax_colors.comment . ' gui=NONE'
execute 'highlight Special guifg=' . g:syntax_colors.other
execute 'highlight SpecialKey guifg=' . g:syntax_colors.other
execute 'highlight Conceal guifg=' . g:syntax_colors.other
execute 'highlight Underlined gui=underline'
execute 'highlight Ignore guifg=' . g:syntax_colors.comment
execute 'highlight Error guifg=' . g:colors.error . ' guibg=NONE'
execute 'highlight Todo guifg=' . g:colors.warning . ' guibg=NONE'
execute 'highlight MatchParen guifg=' . g:GetSelectionForeground() . ' guibg=' . g:colors.selection

" Text formatting
execute 'highlight Bold gui=bold'
execute 'highlight Italic gui=italic'
execute 'highlight Underlined gui=underline'

" Search and selection
execute 'highlight Search guibg=' . g:colors.find_match . ' guifg=' . g:GetFindMatchForeground()
execute 'highlight IncSearch guibg=' . g:colors.find_match . ' guifg=' . g:GetFindMatchForeground()
execute 'highlight CurSearch guibg=' . g:colors.find_match . ' guifg=' . g:GetFindMatchForeground()
execute 'highlight Visual guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
execute 'highlight VisualNOS guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()

" Cursor and current line
execute 'highlight Cursor guifg=bg guibg=' . g:colors.ac1 . ' guifg=' . g:GetAC1Foreground()
execute 'highlight CursorIM guifg=bg guibg=' . g:colors.ac1 . ' guifg=' . g:GetAC1Foreground()
execute 'highlight CursorLine guibg=' . g:colors.line_highlight . ' guifg=' . g:GetLineHighlightForeground() . ' gui=NONE'
execute 'highlight CursorColumn guibg=' . g:colors.line_highlight . ' guifg=' . g:GetLineHighlightForeground() . ' gui=NONE'
execute 'highlight ColorColumn guibg=' . g:colors.line_highlight . ' guifg=' . g:GetLineHighlightForeground() . ' gui=NONE'

" Line numbers and signs column
execute 'highlight LineNr guifg=' . g:syntax_colors.comment . ' guibg=' . g:colors.bg1
execute 'highlight CursorLineNr guifg=' . g:colors.ac1 . ' guibg=' . g:colors.bg1
execute 'highlight SignColumn guibg=' . g:colors.bg1
execute 'highlight FoldColumn guifg=' . g:syntax_colors.comment . ' guibg=' . g:colors.bg1

" Folding
execute 'highlight Folded guifg=' . g:syntax_colors.comment . ' guibg=' . g:colors.bg3
execute 'highlight FoldColumn guifg=' . g:syntax_colors.comment . ' guibg=' . g:colors.bg1

" Popup menu
execute 'highlight Pmenu guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg2
execute 'highlight PmenuSel guifg=' . g:GetAC2Foreground() . ' guibg=' . g:colors.ac2
execute 'highlight PmenuSbar guibg=' . g:colors.bg3
execute 'highlight PmenuThumb guibg=' . g:colors.fg2

" Spelling
execute 'highlight SpellBad gui=undercurl guisp=' . g:colors.error
execute 'highlight SpellCap gui=undercurl guisp=' . g:colors.warning
execute 'highlight SpellLocal gui=undercurl guisp=' . g:colors.info
execute 'highlight SpellRare gui=undercurl guisp=' . g:colors.ac1

" Diffs
execute 'highlight DiffAdd guifg=' . g:GetSUCCESSForeground() . ' guibg=' . g:colors.success
execute 'highlight DiffChange guifg=' . g:GetWARNINGForeground() . ' guibg=' . g:colors.warning
execute 'highlight DiffDelete guifg=' . g:GetERRORForeground() . ' guibg=' . g:colors.error
execute 'highlight DiffText guifg=' . g:GetINFOForeground() . ' guibg=' . g:colors.info

" Directory
execute 'highlight Directory guifg=' . g:syntax_colors.class

" Whitespace
execute 'highlight WhitespaceEOL guifg=' . g:colors.error . ' guibg=NONE'
execute 'highlight NonText guifg=' . g:syntax_colors.comment . ' gui=NONE'
execute 'highlight SpecialKey guifg=' . g:syntax_colors.comment . ' gui=NONE'

" Wild menu
execute 'highlight WildMenu guifg=' . g:colors.bg3 . ' guibg=' . g:colors.fg2

" QuickFix
execute 'highlight qfLineNr guifg=' . g:syntax_colors.comment
execute 'highlight qfFileName guifg=' . g:colors.ac1

" Treesitter Context
execute 'highlight TreesitterContext guibg=' . g:colors.bg2
execute 'highlight TreesitterContextLineNumber guifg=' . g:colors.ac1 . ' guibg=' . g:colors.bg3

" LSP References
execute 'highlight LspReferenceText guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
execute 'highlight LspReferenceRead guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
execute 'highlight LspReferenceWrite guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()

" LSP Diagnostics
execute 'highlight DiagnosticError guifg=' . g:colors.error
execute 'highlight DiagnosticWarn guifg=' . g:colors.warning
execute 'highlight DiagnosticInfo guifg=' . g:colors.info
execute 'highlight DiagnosticHint guifg=' . g:colors.success

execute 'highlight DiagnosticUnderlineError gui=undercurl guisp=' . g:colors.error
execute 'highlight DiagnosticUnderlineWarn gui=undercurl guisp=' . g:colors.warning
execute 'highlight DiagnosticUnderlineInfo gui=undercurl guisp=' . g:colors.info
execute 'highlight DiagnosticUnderlineHint gui=undercurl guisp=' . g:colors.success

" Neovim Terminal Colors
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
