" Punctuation syntax highlighting (matching VSCode's punctuation token colors)

" Basic punctuation
execute 'highlight Delimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight SpecialChar guifg=' . g:syntax_colors.punctuation
execute 'highlight Operator guifg=' . g:syntax_colors.operator

" Brackets and parentheses
execute 'highlight Parens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight Braces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight Brackets guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight MatchParen guifg=' . g:GetFindMatchForeground() . ' guibg=' . g:colors.find_match

" Quotes and string delimiters
execute 'highlight Quote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight StringDelimiter guifg=' . g:syntax_colors.punctuation_quote

" Commas and semicolons
execute 'highlight CommaDelimiter guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight SemicolonDelimiter guifg=' . g:syntax_colors.punctuation_comma

" Language-specific punctuation
" C/C++
execute 'highlight cBlock guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight cBracket guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight cParen guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight cppOperator guifg=' . g:syntax_colors.operator
execute 'highlight cOperator guifg=' . g:syntax_colors.operator
execute 'highlight cComma guifg=' . g:syntax_colors.punctuation_comma

" JavaScript/TypeScript
execute 'highlight jsParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsBrackets guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsOperator guifg=' . g:syntax_colors.operator
execute 'highlight jsNoise guifg=' . g:syntax_colors.punctuation
execute 'highlight jsComma guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight typescriptParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight typescriptBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight typescriptOperator guifg=' . g:syntax_colors.operator

" Python
execute 'highlight pythonOperator guifg=' . g:syntax_colors.operator
execute 'highlight pythonDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight python_brackets guifg=' . g:syntax_colors.punctuation_brace

" Ruby
execute 'highlight rubyBlockParameterList guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight rubyBlockParameter guifg=' . g:syntax_colors.parameter
execute 'highlight rubyOperator guifg=' . g:syntax_colors.operator
execute 'highlight rubyPseudoOperator guifg=' . g:syntax_colors.operator

" Java
execute 'highlight javaOperator guifg=' . g:syntax_colors.operator
execute 'highlight javaBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight javaParens guifg=' . g:syntax_colors.punctuation_brace

" Go
execute 'highlight goOperator guifg=' . g:syntax_colors.operator
execute 'highlight goParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight goBraces guifg=' . g:syntax_colors.punctuation_brace

" Rust
execute 'highlight rustOperator guifg=' . g:syntax_colors.operator
execute 'highlight rustDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight rustComma guifg=' . g:syntax_colors.punctuation_comma

" PHP
execute 'highlight phpParent guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight phpOperator guifg=' . g:syntax_colors.operator
execute 'highlight phpComma guifg=' . g:syntax_colors.punctuation_comma

" CSS/SCSS
execute 'highlight cssBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight cssNoise guifg=' . g:syntax_colors.punctuation
execute 'highlight scssOperator guifg=' . g:syntax_colors.operator
execute 'highlight scssSelectorChar guifg=' . g:syntax_colors.punctuation

" Shell
execute 'highlight shOperator guifg=' . g:syntax_colors.operator
execute 'highlight shParen guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight shCmdSubRegion guifg=' . g:syntax_colors.punctuation

" SQL
execute 'highlight sqlOperator guifg=' . g:syntax_colors.operator
execute 'highlight sqlParen guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight sqlComma guifg=' . g:syntax_colors.punctuation_comma

" JSON
execute 'highlight json_braces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight json_quote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight json_comma guifg=' . g:syntax_colors.punctuation_comma

" YAML
execute 'highlight yamlBlockMappingKey guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlKeyValueDelimiter guifg=' . g:syntax_colors.punctuation

" XML
execute 'highlight xmlTagPunct guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight xmlAttribPunct guifg=' . g:syntax_colors.punctuation

" Vim script
execute 'highlight vimParenSep guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight vimOperParen guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight vimSep guifg=' . g:syntax_colors.punctuation
execute 'highlight vimComma guifg=' . g:syntax_colors.punctuation_comma

" Lua
execute 'highlight luaParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight luaBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight luaOperator guifg=' . g:syntax_colors.operator
execute 'highlight luaComma guifg=' . g:syntax_colors.punctuation_comma

" Make
execute 'highlight makeCommands guifg=' . g:syntax_colors.punctuation
execute 'highlight makeSpecial guifg=' . g:syntax_colors.punctuation

" Git
execute 'highlight gitcommitUntrackedFile guifg=' . g:syntax_colors.punctuation
execute 'highlight gitcommitBranch guifg=' . g:syntax_colors.punctuation
