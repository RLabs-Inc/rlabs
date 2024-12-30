" File explorer (NERDTree, nvim-tree) colors
execute 'highlight NERDTreeFile guifg=' . g:colors.fg1
execute 'highlight NERDTreeDir guifg=' . g:colors.fg2
execute 'highlight NERDTreeUp guifg=' . g:colors.fg2
execute 'highlight NERDTreeOpenable guifg=' . g:colors.ac1
execute 'highlight NERDTreeClosable guifg=' . g:colors.ac1
execute 'highlight NERDTreeExecFile guifg=' . g:colors.success
execute 'highlight NERDTreeLinkFile guifg=' . g:colors.info
execute 'highlight NERDTreeLinkTarget guifg=' . g:colors.info
execute 'highlight NERDTreeFlags guifg=' . g:colors.ac2
execute 'highlight NERDTreeCWD guifg=' . g:colors.ac1
execute 'highlight NERDTreeBookmarksHeader guifg=' . g:GetAC2Foreground() . ' guibg=' . g:colors.ac2
execute 'highlight NERDTreeBookmarksLeader guifg=' . g:colors.ac1
execute 'highlight NERDTreeBookmark guifg=' . g:colors.info
execute 'highlight NERDTreeHelp guifg=' . g:syntax_colors.comment
execute 'highlight NERDTreeHelpKey guifg=' . g:colors.ac1
execute 'highlight NERDTreeHelpCommand guifg=' . g:colors.ac2
execute 'highlight NERDTreeHelpTitle guifg=' . g:GetAC2Foreground() . ' guibg=' . g:colors.ac2

" nvim-tree specific colors
execute 'highlight NvimTreeNormal guifg=' . g:colors.fg1 . ' guibg=' . g:colors.bg3
execute 'highlight NvimTreeFolderName guifg=' . g:colors.fg2
execute 'highlight NvimTreeRootFolder guifg=' . g:colors.ac1
execute 'highlight NvimTreeFolderIcon guifg=' . g:colors.ac1
execute 'highlight NvimTreeEmptyFolderName guifg=' . g:syntax_colors.comment
execute 'highlight NvimTreeOpenedFolderName guifg=' . g:colors.ac1
execute 'highlight NvimTreeExecFile guifg=' . g:colors.success
execute 'highlight NvimTreeOpenedFile guifg=' . g:colors.info
execute 'highlight NvimTreeSpecialFile guifg=' . g:colors.ac2
execute 'highlight NvimTreeImageFile guifg=' . g:colors.fg2
execute 'highlight NvimTreeIndentMarker guifg=' . g:syntax_colors.comment

" Git status colors
execute 'highlight NvimTreeGitDirty guifg=' . g:colors.warning
execute 'highlight NvimTreeGitStaged guifg=' . g:colors.info
execute 'highlight NvimTreeGitMerge guifg=' . g:colors.warning
execute 'highlight NvimTreeGitRenamed guifg=' . g:colors.info
execute 'highlight NvimTreeGitNew guifg=' . g:colors.success
execute 'highlight NvimTreeGitDeleted guifg=' . g:colors.error
