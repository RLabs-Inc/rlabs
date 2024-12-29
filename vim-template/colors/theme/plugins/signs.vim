" LSP Diagnostics Signs (matching VSCode's error/warning/info indicators)
execute 'highlight DiagnosticError guifg=' . g:colors.ERROR
execute 'highlight DiagnosticWarn guifg=' . g:colors.WARNING
execute 'highlight DiagnosticInfo guifg=' . g:colors.INFO
execute 'highlight DiagnosticHint guifg=' . g:colors.SUCCESS

" Diagnostic Underlines
execute 'highlight DiagnosticUnderlineError gui=undercurl guisp=' . g:colors.ERROR
execute 'highlight DiagnosticUnderlineWarn gui=undercurl guisp=' . g:colors.WARNING
execute 'highlight DiagnosticUnderlineInfo gui=undercurl guisp=' . g:colors.INFO
execute 'highlight DiagnosticUnderlineHint gui=undercurl guisp=' . g:colors.SUCCESS

" Diagnostic Virtual Text
execute 'highlight DiagnosticVirtualTextError guifg=' . g:colors.ERROR . ' guibg=' . g:colors.BG2
execute 'highlight DiagnosticVirtualTextWarn guifg=' . g:colors.WARNING . ' guibg=' . g:colors.BG2
execute 'highlight DiagnosticVirtualTextInfo guifg=' . g:colors.INFO . ' guibg=' . g:colors.BG2
execute 'highlight DiagnosticVirtualTextHint guifg=' . g:colors.SUCCESS . ' guibg=' . g:colors.BG2

" Diagnostic Floating Window
execute 'highlight DiagnosticFloatingError guifg=' . g:colors.ERROR . ' guibg=' . g:colors.BG2
execute 'highlight DiagnosticFloatingWarn guifg=' . g:colors.WARNING . ' guibg=' . g:colors.BG2
execute 'highlight DiagnosticFloatingInfo guifg=' . g:colors.INFO . ' guibg=' . g:colors.BG2
execute 'highlight DiagnosticFloatingHint guifg=' . g:colors.SUCCESS . ' guibg=' . g:colors.BG2

" LSP References (matching VSCode's references highlight)
execute 'highlight LspReferenceText guibg=' . g:colors.selection
execute 'highlight LspReferenceRead guibg=' . g:colors.selection
execute 'highlight LspReferenceWrite guibg=' . g:colors.selection

" Git Signs (matching VSCode's git decorations)
execute 'highlight GitSignsAdd guifg=' . g:colors.SUCCESS . ' guibg=' . g:colors.BG1
execute 'highlight GitSignsChange guifg=' . g:colors.INFO . ' guibg=' . g:colors.BG1
execute 'highlight GitSignsDelete guifg=' . g:colors.ERROR . ' guibg=' . g:colors.BG1

" Git Signs Line Highlights
execute 'highlight GitSignsAddLn guibg=' . g:colors.BG2
execute 'highlight GitSignsChangeLn guibg=' . g:colors.BG2
execute 'highlight GitSignsDeleteLn guibg=' . g:colors.BG2

" Git Signs Preview Window
execute 'highlight GitSignsAddInline guibg=' . g:colors.BG2
execute 'highlight GitSignsChangeInline guibg=' . g:colors.BG2
execute 'highlight GitSignsDeleteInline guibg=' . g:colors.BG2

" Git Signs Preview Window (matching VSCode's inline git diff colors)
execute 'highlight GitSignsAddPreview guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight GitSignsChangePreview guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight GitSignsDeletePreview guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2

" Git Signs Blame (matching VSCode's git blame annotations)
execute 'highlight GitSignsCurrentLineBlame guifg=' . g:colors.comment

" Git Signs Conflict Markers
execute 'highlight GitSignsConflict guifg=' . g:colors.WARNING . ' guibg=' . g:colors.BG1
execute 'highlight GitSignsConflictIncoming guifg=' . g:colors.INFO . ' guibg=' . g:colors.BG1
execute 'highlight GitSignsConflictCurrent guifg=' . g:colors.SUCCESS . ' guibg=' . g:colors.BG1

" Gutter Line Numbers for Git Changes
execute 'highlight GitSignsAddNr guifg=' . g:colors.SUCCESS
execute 'highlight GitSignsChangeNr guifg=' . g:colors.INFO
execute 'highlight GitSignsDeleteNr guifg=' . g:colors.ERROR

" Git Signs Separator
execute 'highlight GitSignsSeparator guifg=' . g:colors.BORDER . ' guibg=' . g:colors.BG1

" Git Signs Untracked
execute 'highlight GitSignsUntracked guifg=' . g:colors.comment . ' guibg=' . g:colors.BG1
