" Comment syntax highlighting (matching VSCode's comment token colors)

" Basic comments
execute 'highlight Comment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight SpecialComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight Todo guifg=' . g:colors.warning . ' guibg=NONE gui=' . g:theme_get_style('Comment')

" Documentation comments
execute 'highlight DocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight DocKeyword guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight DocParam guifg=' . g:syntax_colors.parameter . ' gui=' . g:theme_get_style('Comment')
execute 'highlight DocType guifg=' . g:syntax_colors.type . ' gui=' . g:theme_get_style('Comment')

" Language-specific comments
" C/C++
execute 'highlight cComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight cCommentL guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight cCommentStart guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" JavaScript/TypeScript
execute 'highlight jsComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight jsDocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight typescriptComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight typescriptDocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" Python
execute 'highlight pythonComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight pythonDocstring guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" Ruby
execute 'highlight rubyComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight rubyDocumentation guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" Java
execute 'highlight javaComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight javaDocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight javaCommentTitle guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" Go
execute 'highlight goComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight goDocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" Rust
execute 'highlight rustComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight rustDocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight rustCommentLine guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight rustCommentBlock guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" PHP
execute 'highlight phpComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight phpDocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight phpDocTags guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')

" Special comment types
execute 'highlight CommentTodo guifg=' . g:colors.warning . ' guibg=NONE gui=' . g:theme_get_style('Comment')
execute 'highlight CommentFixme guifg=' . g:colors.error . ' guibg=NONE gui=' . g:theme_get_style('Comment')
execute 'highlight CommentNote guifg=' . g:colors.info . ' guibg=NONE gui=' . g:theme_get_style('Comment')
execute 'highlight CommentHack guifg=' . g:colors.warning . ' guibg=NONE gui=' . g:theme_get_style('Comment')
execute 'highlight CommentWarning guifg=' . g:colors.warning . ' guibg=NONE gui=' . g:theme_get_style('Comment')
execute 'highlight CommentBug guifg=' . g:colors.error . ' guibg=NONE gui=' . g:theme_get_style('Comment')
execute 'highlight CommentQuestion guifg=' . g:colors.info . ' guibg=NONE gui=' . g:theme_get_style('Comment')
execute 'highlight CommentLabel guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight CommentSection guifg=' . g:syntax_colors.comment . ' gui=bold,' . g:theme_get_style('Comment')

" Special comment tags
let s:comment_terms = {
  \ 'TODO': 'CommentTodo',
  \ 'FIXME': 'CommentFixme',
  \ 'NOTE': 'CommentNote',
  \ 'HACK': 'CommentHack',
  \ 'WARNING': 'CommentWarning',
  \ 'BUG': 'CommentBug',
  \ 'QUESTION': 'CommentQuestion'
  \ }

for [s:term, s:highlight] in items(s:comment_terms)
  execute 'syntax match ' . s:highlight . ' /@' . s:term . '\|' . s:term . ':/ contained containedin=.*Comment.*'
endfor
