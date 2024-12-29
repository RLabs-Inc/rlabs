" File explorer (NERDTree, nvim-tree) colors
execute 'highlight NERDTreeFile guifg=' . g:colors.FG1
execute 'highlight NERDTreeDir guifg=' . g:colors.supportFunction
execute 'highlight NERDTreeUp guifg=' . g:colors.supportFunction
execute 'highlight NERDTreeOpenable guifg=' . g:colors.AC1
execute 'highlight NERDTreeClosable guifg=' . g:colors.AC1
execute 'highlight NERDTreeExecFile guifg=' . g:colors.SUCCESS
execute 'highlight NERDTreeLinkFile guifg=' . g:colors.INFO
execute 'highlight NERDTreeLinkTarget guifg=' . g:colors.INFO
execute 'highlight NERDTreeFlags guifg=' . g:colors.AC2
execute 'highlight NERDTreeCWD guifg=' . g:colors.AC1
execute 'highlight NERDTreeBookmarksHeader guifg=' . g:theme_getAC2Foreground() . ' guibg=' . g:colors.AC2
execute 'highlight NERDTreeBookmarksLeader guifg=' . g:colors.AC1
execute 'highlight NERDTreeBookmark guifg=' . g:colors.INFO
execute 'highlight NERDTreeHelp guifg=' . g:colors.comment
execute 'highlight NERDTreeHelpKey guifg=' . g:colors.AC1
execute 'highlight NERDTreeHelpCommand guifg=' . g:colors.AC2
execute 'highlight NERDTreeHelpTitle guifg=' . g:theme_getAC2Foreground() . ' guibg=' . g:colors.AC2

" nvim-tree specific colors
execute 'highlight NvimTreeNormal guifg=' . g:colors.FG1 . ' guibg=' . g:colors.BG3
execute 'highlight NvimTreeFolderName guifg=' . g:colors.supportFunction
execute 'highlight NvimTreeRootFolder guifg=' . g:colors.AC1
execute 'highlight NvimTreeFolderIcon guifg=' . g:colors.AC1
execute 'highlight NvimTreeEmptyFolderName guifg=' . g:colors.comment
execute 'highlight NvimTreeOpenedFolderName guifg=' . g:colors.AC1
execute 'highlight NvimTreeExecFile guifg=' . g:colors.SUCCESS
execute 'highlight NvimTreeOpenedFile guifg=' . g:colors.INFO
execute 'highlight NvimTreeSpecialFile guifg=' . g:colors.AC2
execute 'highlight NvimTreeImageFile guifg=' . g:colors.FG2
execute 'highlight NvimTreeIndentMarker guifg=' . g:colors.comment

" Git status colors
execute 'highlight NvimTreeGitDirty guifg=' . g:colors.WARNING
execute 'highlight NvimTreeGitStaged guifg=' . g:colors.INFO
execute 'highlight NvimTreeGitMerge guifg=' . g:colors.WARNING
execute 'highlight NvimTreeGitRenamed guifg=' . g:colors.INFO
execute 'highlight NvimTreeGitNew guifg=' . g:colors.SUCCESS
execute 'highlight NvimTreeGitDeleted guifg=' . g:colors.ERROR
