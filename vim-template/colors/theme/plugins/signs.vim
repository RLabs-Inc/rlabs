" LSP Diagnostics Signs (matching VSCode's error/warning/info indicators)
execute 'highlight DiagnosticError guifg=' . g:colors.error
execute 'highlight DiagnosticWarn guifg=' . g:colors.warning
execute 'highlight DiagnosticInfo guifg=' . g:colors.info
execute 'highlight DiagnosticHint guifg=' . g:colors.success

" Diagnostic Underlines
execute 'highlight DiagnosticUnderlineError gui=undercurl guisp=' . g:colors.error
execute 'highlight DiagnosticUnderlineWarn gui=undercurl guisp=' . g:colors.warning
execute 'highlight DiagnosticUnderlineInfo gui=undercurl guisp=' . g:colors.info
execute 'highlight DiagnosticUnderlineHint gui=undercurl guisp=' . g:colors.success

" Diagnostic Virtual Text
execute 'highlight DiagnosticVirtualTextError guifg=' . g:colors.error . ' guibg=' . g:colors.bg3
execute 'highlight DiagnosticVirtualTextWarn guifg=' . g:colors.warning . ' guibg=' . g:colors.bg3
execute 'highlight DiagnosticVirtualTextInfo guifg=' . g:colors.info . ' guibg=' . g:colors.bg3
execute 'highlight DiagnosticVirtualTextHint guifg=' . g:colors.success . ' guibg=' . g:colors.bg3

" Diagnostic Floating Window
execute 'highlight DiagnosticFloatingError guifg=' . g:colors.error . ' guibg=' . g:colors.bg3
execute 'highlight DiagnosticFloatingWarn guifg=' . g:colors.warning . ' guibg=' . g:colors.bg3
execute 'highlight DiagnosticFloatingInfo guifg=' . g:colors.info . ' guibg=' . g:colors.bg3
execute 'highlight DiagnosticFloatingHint guifg=' . g:colors.success . ' guibg=' . g:colors.bg3

" LSP References (matching VSCode's references highlight)
execute 'highlight LspReferenceText guibg=' . g:colors.selection
execute 'highlight LspReferenceRead guibg=' . g:colors.selection
execute 'highlight LspReferenceWrite guibg=' . g:colors.selection

" Git Signs (matching VSCode's git decorations)
execute 'highlight GitSignsAdd guifg=' . g:colors.success . ' guibg=' . g:colors.bg1
execute 'highlight GitSignsChange guifg=' . g:colors.info . ' guibg=' . g:colors.bg1
execute 'highlight GitSignsDelete guifg=' . g:colors.error . ' guibg=' . g:colors.bg1

" Git Signs Line Highlights
execute 'highlight GitSignsAddLn guibg=' . g:colors.bg3
execute 'highlight GitSignsChangeLn guibg=' . g:colors.bg3
execute 'highlight GitSignsDeleteLn guibg=' . g:colors.bg3

" Git Signs Preview Window
execute 'highlight GitSignsAddInline guibg=' . g:colors.bg3
execute 'highlight GitSignsChangeInline guibg=' . g:colors.bg3
execute 'highlight GitSignsDeleteInline guibg=' . g:colors.bg3

" Git Signs Preview Window (matching VSCode's inline git diff colors)
execute 'highlight GitSignsAddPreview guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3
execute 'highlight GitSignsChangePreview guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3
execute 'highlight GitSignsDeletePreview guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3

" Git Signs Blame (matching VSCode's git blame annotations)
execute 'highlight GitSignsCurrentLineBlame guifg=' . g:syntax_colors.comment

" Git Signs Conflict Markers
execute 'highlight GitSignsConflict guifg=' . g:colors.warning . ' guibg=' . g:colors.bg1
execute 'highlight GitSignsConflictIncoming guifg=' . g:colors.info . ' guibg=' . g:colors.bg1
execute 'highlight GitSignsConflictCurrent guifg=' . g:colors.success . ' guibg=' . g:colors.bg1

" Gutter Line Numbers for Git Changes
execute 'highlight GitSignsAddNr guifg=' . g:colors.success
execute 'highlight GitSignsChangeNr guifg=' . g:colors.info
execute 'highlight GitSignsDeleteNr guifg=' . g:colors.error

" Git Signs Separator
execute 'highlight GitSignsSeparator guifg=' . g:colors.border . ' guibg=' . g:colors.bg1

" Git Signs Untracked
execute 'highlight GitSignsUntracked guifg=' . g:syntax_colors.comment . ' guibg=' . g:colors.bg1
