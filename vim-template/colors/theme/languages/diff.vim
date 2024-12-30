" Diff specific highlighting

" Basic diff markers
execute 'highlight diffAdded guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight diffRemoved guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight diffChanged guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight diffOldFile guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight diffNewFile guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight diffFile guifg=' . g:syntax_colors.keyword
execute 'highlight diffLine guifg=' . g:syntax_colors.comment
execute 'highlight diffIndexLine guifg=' . g:syntax_colors.comment

" Diff chunks
execute 'highlight diffSubname guifg=' . g:colors.fg1
execute 'highlight diffOnly guifg=' . g:colors.fg1
execute 'highlight diffIdentical guifg=' . g:colors.fg1
execute 'highlight diffDiffer guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight diffBDiffer guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight diffIsA guifg=' . g:colors.fg1
execute 'highlight diffNoEOL guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight diffCommon guifg=' . g:colors.fg1
execute 'highlight diffComment guifg=' . g:syntax_colors.comment 

" Diff types
execute 'highlight diffAdd guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight diffDelete guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight diffChange guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight diffText guifg=call(g:GetINFOForeground) guibg=' . g:colors.info

" Git diff specific
execute 'highlight gitDiff guifg=' . g:colors.fg1
execute 'highlight gitDiffAdded guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight gitDiffRemoved guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight gitDiffChanged guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight gitDiffMerge guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight gitDiffNoEOL guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight gitDiffSubname guifg=' . g:colors.fg1
execute 'highlight gitDiffComment guifg=' . g:syntax_colors.comment

" Git commit message
execute 'highlight gitcommitComment guifg=' . g:syntax_colors.comment 
execute 'highlight gitcommitOnBranch guifg=' . g:syntax_colors.comment
execute 'highlight gitcommitBranch guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight gitcommitHeader guifg=' . g:syntax_colors.keyword
execute 'highlight gitcommitSelectedType guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight gitcommitSelectedFile guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight gitcommitDiscardedType guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight gitcommitDiscardedFile guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight gitcommitUntrackedFile guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight gitcommitSummary guifg=' . g:colors.fg1
execute 'highlight gitcommitOverflow guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight gitcommitBlank guifg=call(g:GetERRORForeground) guibg=' . g:colors.error

" Git rebase
execute 'highlight gitrebaseCommit guifg=' . g:syntax_colors.constant
execute 'highlight gitrebaseHash guifg=' . g:syntax_colors.constant
execute 'highlight gitrebasePick guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight gitrebaseReword guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight gitrebaseEdit guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight gitrebaseSquash guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight gitrebaseFixup guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
execute 'highlight gitrebaseExec guifg=' . g:syntax_colors.function
execute 'highlight gitrebaseDrop guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight gitrebaseSummary guifg=' . g:colors.fg1
execute 'highlight gitrebaseComment guifg=' . g:syntax_colors.comment

" Diff background colors (if supported by terminal)
if has('termguicolors')
  execute 'highlight DiffAdd guibg=' . g:colors.bg1 . ' guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
  execute 'highlight DiffDelete guibg=' . g:colors.bg1 . ' guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
  execute 'highlight DiffChange guibg=' . g:colors.bg1 . ' guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
  execute 'highlight DiffText guibg=' . g:colors.bg1 . ' guifg=call(g:GetINFOForeground) guibg=' . g:colors.info . ' gui=bold'
endif

" Special diff markers
execute 'highlight diffNewFileLine guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success . ' gui=bold'
execute 'highlight diffOldFileLine guifg=call(g:GetERRORForeground) guibg=' . g:colors.error . ' gui=bold'
execute 'highlight diffIndexLine guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight diffSubnameLine guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight diffChunkHeader guifg=' . g:syntax_colors.keyword . ' gui=bold'

" Inline diff highlighting
execute 'highlight diffAddedLine guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight diffRemovedLine guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight diffChangedLine guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight diffAddedWord guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success . ' gui=bold'
execute 'highlight diffRemovedWord guifg=call(g:GetERRORForeground) guibg=' . g:colors.error . ' gui=bold'
execute 'highlight diffChangedWord guifg=call(g:GetINFOForeground) guibg=' . g:colors.info . ' gui=bold'

" Conflict markers
execute 'highlight diffConflict guifg=call(g:GetERRORForeground) guibg=' . g:colors.error . ' gui=bold'
execute 'highlight diffConflictStart guifg=call(g:GetERRORForeground) guibg=' . g:colors.error . ' gui=bold'
execute 'highlight diffConflictEnd guifg=call(g:GetERRORForeground) guibg=' . g:colors.error . ' gui=bold'
execute 'highlight diffConflictOurs guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight diffConflictTheirs guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight diffConflictAncestor guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning
