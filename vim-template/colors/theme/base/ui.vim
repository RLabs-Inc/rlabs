" Basic UI elements
highlight Normal guifg=${FG1} guibg=${BG1}
highlight Cursor guifg=${BG1} guibg=${FG1}
execute 'highlight CursorLine guibg=' . g:colors.lineHighlight . ' guifg=' . g:colors.FG1
execute 'highlight CursorColumn guibg=' . g:colors.lineHighlight . ' guifg=' . g:colors.FG1
execute 'highlight ColorColumn guibg=' . g:colors.lineHighlight . ' guifg=' . g:colors.FG1
highlight LineNr guifg=${comment}
highlight CursorLineNr guifg=${AC1}
highlight SignColumn guibg=${BG1}

" Window/Split elements
highlight VertSplit guifg=${BORDER} guibg=NONE
highlight WinSeparator guifg=${BORDER} guibg=NONE

" Selection and search
execute 'highlight Visual guibg=' . g:colors.selection . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight VisualNOS guibg=' . g:colors.selection . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight Search guibg=' . g:colors.findMatch . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight IncSearch guibg=' . g:colors.findMatch . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight MatchParen guibg=' . g:colors.lineHighlight . ' guifg=' . g:colors.FG1

" Folds
highlight Folded guifg=${comment} guibg=${BG2}
highlight FoldColumn guifg=${comment} guibg=${BG1}

" Status line
execute 'highlight StatusLine guibg=' . g:colors.AC2 . ' guifg=' . g:theme_getAC2Foreground()
highlight StatusLineNC guifg=${comment} guibg=${BG2}
execute 'highlight WildMenu guibg=' . g:colors.selection . ' guifg=' . g:theme_getAC2Foreground()

" Messages
execute 'highlight ModeMsg guibg=' . g:colors.AC1 . ' guifg=' . g:theme_getAC1Foreground()
execute 'highlight MoreMsg guibg=' . g:colors.AC1 . ' guifg=' . g:theme_getAC1Foreground()
execute 'highlight Question guibg=' . g:colors.AC1 . ' guifg=' . g:theme_getAC1Foreground()
execute 'highlight WarningMsg guibg=' . g:colors.WARNING . ' guifg=' . g:theme_getWARNINGForeground()
execute 'highlight ErrorMsg guibg=' . g:colors.ERROR . ' guifg=' . g:theme_getERRORForeground()

" Popup menu
highlight Pmenu guifg=${FG1} guibg=${BG2}
execute 'highlight PmenuSel guibg=' . g:colors.AC2 . ' guifg=' . g:theme_getAC2Foreground()
highlight PmenuSbar guibg=${BG3}
highlight PmenuThumb guibg=${FG2}

" Tabs
highlight TabLine guifg=${comment} guibg=${BG3}
highlight TabLineFill guifg=${BORDER} guibg=${BG1}
execute 'highlight TabLineSel guibg=' . g:colors.AC2 . ' guifg=' . g:theme_getAC2Foreground()

" Special UI elements
highlight NonText guifg=${comment}
highlight Whitespace guifg=${comment}
highlight SpecialKey guifg=${comment}
highlight EndOfBuffer guifg=${BG1}
highlight Directory guifg=${supportFunction}

" Diffs
execute 'highlight DiffAdd guibg=' . g:colors.SUCCESS . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight DiffChange guibg=' . g:colors.INFO . ' guifg=' . g:theme_getINFOForeground()
execute 'highlight DiffDelete guibg=' . g:colors.ERROR . ' guifg=' . g:theme_getERRORForeground()
execute 'highlight DiffText guibg=' . g:colors.WARNING . ' guifg=' . g:theme_getWARNINGForeground()

" Spell checking
execute 'highlight SpellBad guisp=' . g:colors.ERROR . ' gui=undercurl'
execute 'highlight SpellCap guisp=' . g:colors.INFO . ' gui=undercurl'
execute 'highlight SpellRare guisp=' . g:colors.WARNING . ' gui=undercurl'
execute 'highlight SpellLocal guisp=' . g:colors.SUCCESS . ' gui=undercurl'

" Support for floating windows
highlight NormalFloat guifg=${FG1} guibg=${BG2}
highlight FloatBorder guifg=${BORDER} guibg=${BG2}

" Quick-fix window
execute 'highlight QuickFixLine guibg=' . g:colors.selection . ' guifg=' . g:theme_getAC2Foreground()
highlight qfLineNr guifg=${supportVariable}
highlight qfFileName guifg=${supportFunction}

" Scrollbars (similar to VSCode's scrollbar styling)
execute 'highlight ScrollBar guifg=' . g:colors.FG2 . ' guibg=' . g:colors.BG2
execute 'highlight ScrollBarThumb guifg=' . g:colors.FG2 . ' guibg=' . g:colors.BG3
execute 'highlight VertScrollBar guifg=' . g:colors.FG2 . ' guibg=' . g:colors.BG2
execute 'highlight HorzScrollBar guifg=' . g:colors.FG2 . ' guibg=' . g:colors.BG2

" Neovim's global winbar
execute 'highlight WinBar guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight WinBarNC guifg=' . g:colors.comment . ' guibg=' . g:colors.BG2

" Command line (similar to VSCode's command center)
execute 'highlight MsgArea guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG1
execute 'highlight CommandLine guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG1
execute 'highlight CommandLinePrompt guifg=' . g:colors.AC1
execute 'highlight CommandLineModeMsg guifg=' . g:colors.AC2

" Menu items (popup menus and context menus)
execute 'highlight Menu guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight MenuSel guibg=' . g:colors.selection . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight MenuActive guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG3
execute 'highlight MenuActiveHighlight guifg=' . g:colors.AC1
execute 'highlight MenuDisabled guifg=' . g:colors.comment
execute 'highlight MenuSbar guibg=' . g:colors.BG3
execute 'highlight MenuThumb guibg=' . g:colors.FG2

" Welcome screen elements (for plugins showing welcome screens)
execute 'highlight StartLogo guifg=' . g:colors.AC1
execute 'highlight StartHeader guifg=' . g:colors.AC2
execute 'highlight StartSection guifg=' . g:colors.FG1
execute 'highlight StartFooter guifg=' . g:colors.FG2
execute 'highlight StartKey guifg=' . g:colors.AC1
execute 'highlight StartValue guifg=' . g:colors.FG1
execute 'highlight StartButton guibg=' . g:colors.AC2 . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight StartButtonHover guibg=' . g:colors.AC1 . ' guifg=' . g:theme_getAC1Foreground()

" Keyboard shortcuts table (similar to VSCode's keybinding table)
execute 'highlight KeybindHeader guifg=' . g:theme_getAC2Foreground() . ' guibg=' . g:colors.AC2
execute 'highlight KeybindKey guifg=' . g:colors.AC1
execute 'highlight KeybindCommand guifg=' . g:colors.FG1
execute 'highlight KeybindWhen guifg=' . g:colors.FG2
execute 'highlight KeybindSource guifg=' . g:colors.comment

" Notifications (similar to VSCode's notifications)
execute 'highlight NotificationInfo guibg=' . g:colors.BG2 . ' guifg=' . g:colors.INFO
execute 'highlight NotificationWarning guibg=' . g:colors.BG2 . ' guifg=' . g:colors.WARNING
execute 'highlight NotificationError guibg=' . g:colors.BG2 . ' guifg=' . g:colors.ERROR
execute 'highlight NotificationBody guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight NotificationLink guifg=' . g:colors.INFO
execute 'highlight NotificationIcon guifg=' . g:colors.AC1

" Banner (similar to VSCode's banner)
execute 'highlight Banner guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight BannerIcon guifg=' . g:colors.AC1 . ' guibg=' . g:colors.BG2
execute 'highlight BannerSuccess guifg=' . g:colors.SUCCESS . ' guibg=' . g:colors.BG2
execute 'highlight BannerWarning guifg=' . g:colors.WARNING . ' guibg=' . g:colors.BG2
execute 'highlight BannerError guifg=' . g:colors.ERROR . ' guibg=' . g:colors.BG2

" Command center (similar to VSCode's command center)
execute 'highlight CmdCenter guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG1
execute 'highlight CmdCenterActive guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight CmdCenterActiveIcon guifg=' . g:colors.AC1 . ' guibg=' . g:colors.BG2
execute 'highlight CmdCenterBorder guifg=' . g:colors.BORDER . ' guibg=' . g:colors.BG1
execute 'highlight CmdCenterInactive guifg=' . g:colors.comment . ' guibg=' . g:colors.BG1

" Testing colors (similar to VSCode's testing decorations)
execute 'highlight TestPassed guifg=' . g:colors.SUCCESS
execute 'highlight TestFailed guifg=' . g:colors.ERROR
execute 'highlight TestRunning guifg=' . g:colors.INFO
execute 'highlight TestSkipped guifg=' . g:colors.comment
execute 'highlight TestIcon guifg=' . g:colors.AC1

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
