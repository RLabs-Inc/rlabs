" Diff specific highlighting

" Basic diff markers
execute 'highlight diffAdded guifg=' . g:colors.SUCCESS
execute 'highlight diffRemoved guifg=' . g:colors.ERROR
execute 'highlight diffChanged guifg=' . g:colors.INFO
execute 'highlight diffOldFile guifg=' . g:colors.ERROR
execute 'highlight diffNewFile guifg=' . g:colors.SUCCESS
execute 'highlight diffFile guifg=' . g:syntaxColors.keyword
execute 'highlight diffLine guifg=' . g:syntaxColors.comment
execute 'highlight diffIndexLine guifg=' . g:syntaxColors.comment

" Diff chunks
execute 'highlight diffSubname guifg=' . g:colors.FG1
execute 'highlight diffOnly guifg=' . g:colors.FG1
execute 'highlight diffIdentical guifg=' . g:colors.FG1
execute 'highlight diffDiffer guifg=' . g:colors.WARNING
execute 'highlight diffBDiffer guifg=' . g:colors.WARNING
execute 'highlight diffIsA guifg=' . g:colors.FG1
execute 'highlight diffNoEOL guifg=' . g:colors.WARNING
execute 'highlight diffCommon guifg=' . g:colors.FG1
execute 'highlight diffComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" Diff types
execute 'highlight diffAdd guifg=' . g:colors.SUCCESS
execute 'highlight diffDelete guifg=' . g:colors.ERROR
execute 'highlight diffChange guifg=' . g:colors.INFO
execute 'highlight diffText guifg=' . g:colors.INFO

" Git diff specific
execute 'highlight gitDiff guifg=' . g:colors.FG1
execute 'highlight gitDiffAdded guifg=' . g:colors.SUCCESS
execute 'highlight gitDiffRemoved guifg=' . g:colors.ERROR
execute 'highlight gitDiffChanged guifg=' . g:colors.INFO
execute 'highlight gitDiffMerge guifg=' . g:colors.WARNING
execute 'highlight gitDiffNoEOL guifg=' . g:colors.WARNING
execute 'highlight gitDiffSubname guifg=' . g:colors.FG1
execute 'highlight gitDiffComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" Git commit message
execute 'highlight gitcommitComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight gitcommitOnBranch guifg=' . g:syntaxColors.comment
execute 'highlight gitcommitBranch guifg=' . g:colors.INFO
execute 'highlight gitcommitHeader guifg=' . g:syntaxColors.keyword
execute 'highlight gitcommitSelectedType guifg=' . g:colors.SUCCESS
execute 'highlight gitcommitSelectedFile guifg=' . g:colors.SUCCESS
execute 'highlight gitcommitDiscardedType guifg=' . g:colors.ERROR
execute 'highlight gitcommitDiscardedFile guifg=' . g:colors.ERROR
execute 'highlight gitcommitUntrackedFile guifg=' . g:colors.WARNING
execute 'highlight gitcommitSummary guifg=' . g:colors.FG1
execute 'highlight gitcommitOverflow guifg=' . g:colors.WARNING
execute 'highlight gitcommitBlank guifg=' . g:colors.ERROR

" Git rebase
execute 'highlight gitrebaseCommit guifg=' . g:syntaxColors.constant
execute 'highlight gitrebaseHash guifg=' . g:syntaxColors.constant
execute 'highlight gitrebasePick guifg=' . g:colors.SUCCESS
execute 'highlight gitrebaseReword guifg=' . g:colors.INFO
execute 'highlight gitrebaseEdit guifg=' . g:colors.INFO
execute 'highlight gitrebaseSquash guifg=' . g:colors.WARNING
execute 'highlight gitrebaseFixup guifg=' . g:colors.WARNING
execute 'highlight gitrebaseExec guifg=' . g:syntaxColors.function
execute 'highlight gitrebaseDrop guifg=' . g:colors.ERROR
execute 'highlight gitrebaseSummary guifg=' . g:colors.FG1
execute 'highlight gitrebaseComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" Diff background colors (if supported by terminal)
if has('termguicolors')
  execute 'highlight DiffAdd guibg=' . g:colors.BG1 . ' guifg=' . g:colors.SUCCESS
  execute 'highlight DiffDelete guibg=' . g:colors.BG1 . ' guifg=' . g:colors.ERROR
  execute 'highlight DiffChange guibg=' . g:colors.BG1 . ' guifg=' . g:colors.INFO
  execute 'highlight DiffText guibg=' . g:colors.BG1 . ' guifg=' . g:colors.INFO . ' gui=bold'
endif

" Special diff markers
execute 'highlight diffNewFileLine guifg=' . g:colors.SUCCESS . ' gui=bold'
execute 'highlight diffOldFileLine guifg=' . g:colors.ERROR . ' gui=bold'
execute 'highlight diffIndexLine guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight diffSubnameLine guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight diffChunkHeader guifg=' . g:syntaxColors.keyword . ' gui=bold'

" Inline diff highlighting
execute 'highlight diffAddedLine guifg=' . g:colors.SUCCESS
execute 'highlight diffRemovedLine guifg=' . g:colors.ERROR
execute 'highlight diffChangedLine guifg=' . g:colors.INFO
execute 'highlight diffAddedWord guifg=' . g:colors.SUCCESS . ' gui=bold'
execute 'highlight diffRemovedWord guifg=' . g:colors.ERROR . ' gui=bold'
execute 'highlight diffChangedWord guifg=' . g:colors.INFO . ' gui=bold'

" Conflict markers
execute 'highlight diffConflict guifg=' . g:colors.ERROR . ' gui=bold'
execute 'highlight diffConflictStart guifg=' . g:colors.ERROR . ' gui=bold'
execute 'highlight diffConflictEnd guifg=' . g:colors.ERROR . ' gui=bold'
execute 'highlight diffConflictOurs guifg=' . g:colors.SUCCESS
execute 'highlight diffConflictTheirs guifg=' . g:colors.INFO
execute 'highlight diffConflictAncestor guifg=' . g:colors.WARNING
