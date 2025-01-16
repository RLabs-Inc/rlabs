" Comment syntax highlighting (matching VSCode's comment token colors)

" Basic comments
execute 'highlight Comment guifg=' . g:syntax_colors.comment 
execute 'highlight SpecialComment guifg=' . g:syntax_colors.comment 
execute 'highlight Todo guifg=' . g:colors.warning 

" Documentation comments
execute 'highlight DocComment guifg=' . g:syntax_colors.comment 
execute 'highlight DocKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight DocParam guifg=' . g:syntax_colors.parameter 
execute 'highlight DocType guifg=' . g:syntax_colors.type 

" Language-specific comments
" C/C++
execute 'highlight cComment guifg=' . g:syntax_colors.comment 
execute 'highlight cCommentL guifg=' . g:syntax_colors.comment 
execute 'highlight cCommentStart guifg=' . g:syntax_colors.comment 

" JavaScript/TypeScript
execute 'highlight jsComment guifg=' . g:syntax_colors.comment 
execute 'highlight jsDocComment guifg=' . g:syntax_colors.comment 
execute 'highlight typescriptComment guifg=' . g:syntax_colors.comment 
execute 'highlight typescriptDocComment guifg=' . g:syntax_colors.comment 

" Python
execute 'highlight pythonComment guifg=' . g:syntax_colors.comment 
execute 'highlight pythonDocstring guifg=' . g:syntax_colors.comment 

" Ruby
execute 'highlight rubyComment guifg=' . g:syntax_colors.comment 
execute 'highlight rubyDocumentation guifg=' . g:syntax_colors.comment 

" Java
execute 'highlight javaComment guifg=' . g:syntax_colors.comment 
execute 'highlight javaDocComment guifg=' . g:syntax_colors.comment 
execute 'highlight javaCommentTitle guifg=' . g:syntax_colors.comment 

" Go
execute 'highlight goComment guifg=' . g:syntax_colors.comment 
execute 'highlight goDocComment guifg=' . g:syntax_colors.comment 

" Rust
execute 'highlight rustComment guifg=' . g:syntax_colors.comment 
execute 'highlight rustDocComment guifg=' . g:syntax_colors.comment 
execute 'highlight rustCommentLine guifg=' . g:syntax_colors.comment 
execute 'highlight rustCommentBlock guifg=' . g:syntax_colors.comment 

" PHP
execute 'highlight phpComment guifg=' . g:syntax_colors.comment 
execute 'highlight phpDocComment guifg=' . g:syntax_colors.comment 
execute 'highlight phpDocTags guifg=' . g:syntax_colors.comment 

" Special comment types
execute 'highlight CommentTodo guifg=' . g:colors.warning 
execute 'highlight CommentFixme guifg=' . g:colors.error 
execute 'highlight CommentNote guifg=' . g:colors.info 
execute 'highlight CommentHack guifg=' . g:colors.warning 
execute 'highlight CommentWarning guifg=' . g:colors.warning 
execute 'highlight CommentBug guifg=' . g:colors.error 
execute 'highlight CommentQuestion guifg=' . g:colors.info 
execute 'highlight CommentLabel guifg=' . g:syntax_colors.keyword 
execute 'highlight CommentSection guifg=' . g:syntax_colors.comment 

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
