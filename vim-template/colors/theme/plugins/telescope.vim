" Telescope colors matching VSCode's quick picker and command palette
execute 'highlight TelescopeNormal guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg2
execute 'highlight TelescopeBorder guifg=' . g:colors.border . ' guibg=' . g:colors.bg2

" Prompt
execute 'highlight TelescopePromptNormal guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg1
execute 'highlight TelescopePromptBorder guifg=' . g:colors.border . ' guibg=' . g:colors.bg1
execute 'highlight TelescopePromptTitle guifg=' . g:GetAC2Foreground() . ' guibg=' . g:colors.ac2
execute 'highlight TelescopePromptPrefix guifg=' . g:colors.ac1
execute 'highlight TelescopePromptCounter guifg=' . g:syntax_colors.comment

" Results
execute 'highlight TelescopeResultsNormal guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg2
execute 'highlight TelescopeResultsBorder guifg=' . g:colors.border . ' guibg=' . g:colors.bg2
execute 'highlight TelescopeResultsTitle guifg=' . g:GetAC1Foreground() . ' guibg=' . g:colors.ac1
execute 'highlight TelescopeResultsIdentifier guifg=' . g:colors.ac2
execute 'highlight TelescopeResultsNumber guifg=' . g:syntax_colors.comment
execute 'highlight TelescopeResultsLineNr guifg=' . g:syntax_colors.comment

" Preview
execute 'highlight TelescopePreviewNormal guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3
execute 'highlight TelescopePreviewBorder guifg=' . g:colors.border . ' guibg=' . g:colors.bg3
execute 'highlight TelescopePreviewTitle guifg=' . g:GetAC2Foreground() . ' guibg=' . g:colors.ac2
execute 'highlight TelescopePreviewDirectory guifg=' . g:colors.fg2
execute 'highlight TelescopePreviewDate guifg=' . g:syntax_colors.comment
execute 'highlight TelescopePreviewSize guifg=' . g:syntax_colors.comment

" Selection
execute 'highlight TelescopeSelection guibg=' . g:colors.selection . ' guifg=' . g:GetSelectionForeground()
execute 'highlight TelescopeSelectionCaret guifg=' . g:colors.ac1
execute 'highlight TelescopeMultiSelection guifg=' . g:colors.info

" Matching
execute 'highlight TelescopeMatching guifg=' . g:colors.ac1
execute 'highlight TelescopeMultiIcon guifg=' . g:colors.ac1

" File types (similar to VSCode explorer)
execute 'highlight TelescopeResultsClass guifg=' . g:syntax_colors.class
execute 'highlight TelescopeResultsConstant guifg=' . g:syntax_colors.constant
execute 'highlight TelescopeResultsField guifg=' . g:syntax_colors.property
execute 'highlight TelescopeResultsFunction guifg=' . g:syntax_colors.function
execute 'highlight TelescopeResultsMethod guifg=' . g:syntax_colors.method
execute 'highlight TelescopeResultsOperator guifg=' . g:syntax_colors.operator
execute 'highlight TelescopeResultsStruct guifg=' . g:syntax_colors.type
execute 'highlight TelescopeResultsVariable guifg=' . g:syntax_colors.variable

" Git status indicators (similar to VSCode source control)
execute 'highlight TelescopeResultsDiffAdd guifg=' . g:colors.success
execute 'highlight TelescopeResultsDiffChange guifg=' . g:colors.info
execute 'highlight TelescopeResultsDiffDelete guifg=' . g:colors.error
execute 'highlight TelescopeResultsDiffUntracked guifg=' . g:syntax_colors.comment
