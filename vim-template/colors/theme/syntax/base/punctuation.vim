" Punctuation syntax highlighting (matching VSCode's punctuation token colors)

" Basic punctuation
execute 'highlight Delimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight SpecialChar guifg=' . g:syntaxColors.punctuation
execute 'highlight Operator guifg=' . g:syntaxColors.operator

" Brackets and parentheses
execute 'highlight Parens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight Braces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight Brackets guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight MatchParen guifg=' . g:colors.FG1 . ' guibg=' . g:colors.selection

" Quotes and string delimiters
execute 'highlight Quote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight StringDelimiter guifg=' . g:syntaxColors.punctuationQuote

" Commas and semicolons
execute 'highlight CommaDelimiter guifg=' . g:syntaxColors.punctuationComma
execute 'highlight SemicolonDelimiter guifg=' . g:syntaxColors.punctuationComma

" Language-specific punctuation
" C/C++
execute 'highlight cBlock guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight cBracket guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight cParen guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight cppOperator guifg=' . g:syntaxColors.operator
execute 'highlight cOperator guifg=' . g:syntaxColors.operator
execute 'highlight cComma guifg=' . g:syntaxColors.punctuationComma

" JavaScript/TypeScript
execute 'highlight jsParens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsBrackets guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsOperator guifg=' . g:syntaxColors.operator
execute 'highlight jsNoise guifg=' . g:syntaxColors.punctuation
execute 'highlight jsComma guifg=' . g:syntaxColors.punctuationComma
execute 'highlight typescriptParens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight typescriptBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight typescriptOperator guifg=' . g:syntaxColors.operator

" Python
execute 'highlight pythonOperator guifg=' . g:syntaxColors.operator
execute 'highlight pythonDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight pythonBrackets guifg=' . g:syntaxColors.punctuationBrace

" Ruby
execute 'highlight rubyBlockParameterList guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight rubyBlockParameter guifg=' . g:syntaxColors.parameter
execute 'highlight rubyOperator guifg=' . g:syntaxColors.operator
execute 'highlight rubyPseudoOperator guifg=' . g:syntaxColors.operator

" Java
execute 'highlight javaOperator guifg=' . g:syntaxColors.operator
execute 'highlight javaBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight javaParens guifg=' . g:syntaxColors.punctuationBrace

" Go
execute 'highlight goOperator guifg=' . g:syntaxColors.operator
execute 'highlight goParens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight goBraces guifg=' . g:syntaxColors.punctuationBrace

" Rust
execute 'highlight rustOperator guifg=' . g:syntaxColors.operator
execute 'highlight rustDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight rustComma guifg=' . g:syntaxColors.punctuationComma

" PHP
execute 'highlight phpParent guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight phpOperator guifg=' . g:syntaxColors.operator
execute 'highlight phpComma guifg=' . g:syntaxColors.punctuationComma

" CSS/SCSS
execute 'highlight cssBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight cssNoise guifg=' . g:syntaxColors.punctuation
execute 'highlight scssOperator guifg=' . g:syntaxColors.operator
execute 'highlight scssSelectorChar guifg=' . g:syntaxColors.punctuation

" Shell
execute 'highlight shOperator guifg=' . g:syntaxColors.operator
execute 'highlight shParen guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight shCmdSubRegion guifg=' . g:syntaxColors.punctuation

" SQL
execute 'highlight sqlOperator guifg=' . g:syntaxColors.operator
execute 'highlight sqlParen guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight sqlComma guifg=' . g:syntaxColors.punctuationComma

" JSON
execute 'highlight jsonBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsonQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight jsonComma guifg=' . g:syntaxColors.punctuationComma

" YAML
execute 'highlight yamlBlockMappingKey guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlKeyValueDelimiter guifg=' . g:syntaxColors.punctuation

" XML
execute 'highlight xmlTagPunct guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight xmlAttribPunct guifg=' . g:syntaxColors.punctuation

" Vim script
execute 'highlight vimParenSep guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight vimOperParen guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight vimSep guifg=' . g:syntaxColors.punctuation
execute 'highlight vimComma guifg=' . g:syntaxColors.punctuationComma

" Lua
execute 'highlight luaParens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight luaBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight luaOperator guifg=' . g:syntaxColors.operator
execute 'highlight luaComma guifg=' . g:syntaxColors.punctuationComma

" Make
execute 'highlight makeCommands guifg=' . g:syntaxColors.punctuation
execute 'highlight makeSpecial guifg=' . g:syntaxColors.punctuation

" Git
execute 'highlight gitcommitUntrackedFile guifg=' . g:syntaxColors.punctuation
execute 'highlight gitcommitBranch guifg=' . g:syntaxColors.punctuation
