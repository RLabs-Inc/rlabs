" Telescope colors matching VSCode's quick picker and command palette
execute 'highlight TelescopeNormal guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight TelescopeBorder guifg=' . g:colors.BORDER . ' guibg=' . g:colors.BG2

" Prompt
execute 'highlight TelescopePromptNormal guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG1
execute 'highlight TelescopePromptBorder guifg=' . g:colors.BORDER . ' guibg=' . g:colors.BG1
execute 'highlight TelescopePromptTitle guifg=' . g:theme_getAC2Foreground() . ' guibg=' . g:colors.AC2
execute 'highlight TelescopePromptPrefix guifg=' . g:colors.AC1
execute 'highlight TelescopePromptCounter guifg=' . g:colors.comment

" Results
execute 'highlight TelescopeResultsNormal guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG2
execute 'highlight TelescopeResultsBorder guifg=' . g:colors.BORDER . ' guibg=' . g:colors.BG2
execute 'highlight TelescopeResultsTitle guifg=' . g:theme_getAC1Foreground() . ' guibg=' . g:colors.AC1
execute 'highlight TelescopeResultsIdentifier guifg=' . g:colors.AC2
execute 'highlight TelescopeResultsNumber guifg=' . g:colors.comment
execute 'highlight TelescopeResultsLineNr guifg=' . g:colors.comment

" Preview
execute 'highlight TelescopePreviewNormal guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG3
execute 'highlight TelescopePreviewBorder guifg=' . g:colors.BORDER . ' guibg=' . g:colors.BG3
execute 'highlight TelescopePreviewTitle guifg=' . g:theme_getAC2Foreground() . ' guibg=' . g:colors.AC2
execute 'highlight TelescopePreviewDirectory guifg=' . g:colors.supportFunction
execute 'highlight TelescopePreviewDate guifg=' . g:colors.comment
execute 'highlight TelescopePreviewSize guifg=' . g:colors.comment

" Selection
execute 'highlight TelescopeSelection guibg=' . g:colors.selection . ' guifg=' . g:theme_getAC2Foreground()
execute 'highlight TelescopeSelectionCaret guifg=' . g:colors.AC1
execute 'highlight TelescopeMultiSelection guifg=' . g:colors.INFO

" Matching
execute 'highlight TelescopeMatching guifg=' . g:colors.AC1
execute 'highlight TelescopeMultiIcon guifg=' . g:colors.AC1

" File types (similar to VSCode explorer)
execute 'highlight TelescopeResultsClass guifg=' . g:syntaxColors.class
execute 'highlight TelescopeResultsConstant guifg=' . g:syntaxColors.constant
execute 'highlight TelescopeResultsField guifg=' . g:syntaxColors.property
execute 'highlight TelescopeResultsFunction guifg=' . g:syntaxColors.function
execute 'highlight TelescopeResultsMethod guifg=' . g:syntaxColors.method
execute 'highlight TelescopeResultsOperator guifg=' . g:syntaxColors.operator
execute 'highlight TelescopeResultsStruct guifg=' . g:syntaxColors.type
execute 'highlight TelescopeResultsVariable guifg=' . g:syntaxColors.variable

" Git status indicators (similar to VSCode source control)
execute 'highlight TelescopeResultsDiffAdd guifg=' . g:colors.SUCCESS
execute 'highlight TelescopeResultsDiffChange guifg=' . g:colors.INFO
execute 'highlight TelescopeResultsDiffDelete guifg=' . g:colors.ERROR
execute 'highlight TelescopeResultsDiffUntracked guifg=' . g:colors.comment
