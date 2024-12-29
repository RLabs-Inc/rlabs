" Operator syntax highlighting (matching VSCode's operator token colors)

" Basic operators
execute 'highlight Operator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight Delimiter guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Operator')

" Arithmetic operators
execute 'highlight ArithmeticOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight AssignmentOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight CompoundOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Comparison operators
execute 'highlight ComparisonOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight RelationalOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Logical operators
execute 'highlight LogicalOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight BooleanOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Bitwise operators
execute 'highlight BitwiseOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight ShiftOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Language-specific operators
" C/C++
execute 'highlight cOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight cppOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" JavaScript/TypeScript
execute 'highlight jsOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight jsArrowFunction guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight typescriptOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight typescriptArrowFunc guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Python
execute 'highlight pythonOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight pythonArrowOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Ruby
execute 'highlight rubyOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight rubyPseudoOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Java
execute 'highlight javaOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight javaMathOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Go
execute 'highlight goOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight goArrowOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Rust
execute 'highlight rustOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight rustArrowOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" PHP
execute 'highlight phpOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight phpMemberOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Special operators
execute 'highlight RangeOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight SpreadOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight RestOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight TernaryOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight NullishOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight OptionalOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Operator')

" Punctuation
execute 'highlight Punctuation guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Operator')
execute 'highlight Separator guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Operator')
execute 'highlight Terminator guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Operator')
execute 'highlight Bracket guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Operator')
execute 'highlight Brace guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Operator')
execute 'highlight Parenthesis guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Operator')
