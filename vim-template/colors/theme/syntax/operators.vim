" Operator syntax highlighting (matching VSCode's operator token colors)

" Basic operators
execute 'highlight Operator guifg=' . g:syntax_colors.operator 
execute 'highlight Delimiter guifg=' . g:syntax_colors.punctuation 

" Arithmetic operators
execute 'highlight ArithmeticOperator guifg=' . g:syntax_colors.operator 
execute 'highlight AssignmentOperator guifg=' . g:syntax_colors.operator 
execute 'highlight CompoundOperator guifg=' . g:syntax_colors.operator 

" Comparison operators
execute 'highlight ComparisonOperator guifg=' . g:syntax_colors.operator 
execute 'highlight RelationalOperator guifg=' . g:syntax_colors.operator 

" Logical operators
execute 'highlight LogicalOperator guifg=' . g:syntax_colors.operator 
execute 'highlight BooleanOperator guifg=' . g:syntax_colors.operator 

" Bitwise operators
execute 'highlight BitwiseOperator guifg=' . g:syntax_colors.operator 
execute 'highlight ShiftOperator guifg=' . g:syntax_colors.operator 

" Language-specific operators
" C/C++
execute 'highlight cOperator guifg=' . g:syntax_colors.operator 
execute 'highlight cppOperator guifg=' . g:syntax_colors.operator 

" JavaScript/TypeScript
execute 'highlight jsOperator guifg=' . g:syntax_colors.operator 
execute 'highlight jsArrowFunction guifg=' . g:syntax_colors.function 
execute 'highlight typescriptOperator guifg=' . g:syntax_colors.operator 
execute 'highlight typescriptArrowFunc guifg=' . g:syntax_colors.function 

" Python
execute 'highlight pythonOperator guifg=' . g:syntax_colors.operator 
execute 'highlight pythonArrowOperator guifg=' . g:syntax_colors.operator 

" Ruby
execute 'highlight rubyOperator guifg=' . g:syntax_colors.operator 
execute 'highlight rubyPseudoOperator guifg=' . g:syntax_colors.operator 

" Java
execute 'highlight javaOperator guifg=' . g:syntax_colors.operator 
execute 'highlight javaMathOperator guifg=' . g:syntax_colors.operator 

" Go
execute 'highlight goOperator guifg=' . g:syntax_colors.operator 
execute 'highlight goArrowOperator guifg=' . g:syntax_colors.operator 

" Rust
execute 'highlight rustOperator guifg=' . g:syntax_colors.operator 
execute 'highlight rustArrowOperator guifg=' . g:syntax_colors.operator 

" PHP
execute 'highlight phpOperator guifg=' . g:syntax_colors.operator 
execute 'highlight phpMemberOperator guifg=' . g:syntax_colors.operator 

" Special operators
execute 'highlight RangeOperator guifg=' . g:syntax_colors.operator 
execute 'highlight SpreadOperator guifg=' . g:syntax_colors.operator 
execute 'highlight RestOperator guifg=' . g:syntax_colors.operator 
execute 'highlight TernaryOperator guifg=' . g:syntax_colors.operator 
execute 'highlight NullishOperator guifg=' . g:syntax_colors.operator 
execute 'highlight OptionalOperator guifg=' . g:syntax_colors.operator 

" Punctuation
execute 'highlight Punctuation guifg=' . g:syntax_colors.punctuation 
execute 'highlight Separator guifg=' . g:syntax_colors.punctuation_comma 
execute 'highlight Terminator guifg=' . g:syntax_colors.punctuation_comma 
execute 'highlight Bracket guifg=' . g:syntax_colors.punctuation_brace 
execute 'highlight Brace guifg=' . g:syntax_colors.punctuation_brace 
execute 'highlight Parenthesis guifg=' . g:syntax_colors.punctuation 
