" Python specific highlighting

" Basic syntax
execute 'highlight pythonStatement guifg=' . g:syntax_colors.keyword
execute 'highlight pythonKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight pythonOperator guifg=' . g:syntax_colors.operator
execute 'highlight pythonRepeat guifg=' . g:syntax_colors.control
execute 'highlight pythonConditional guifg=' . g:syntax_colors.control
execute 'highlight pythonException guifg=' . g:syntax_colors.keyword
execute 'highlight pythonInclude guifg=' . g:syntax_colors.control_import
execute 'highlight pythonPreCondit guifg=' . g:syntax_colors.control_import

" Variables and declarations
execute 'highlight pythonGlobal guifg=' . g:syntax_colors.variable_readonly
execute 'highlight pythonBuiltin guifg=' . g:syntax_colors.support_variable
execute 'highlight pythonNone guifg=' . g:syntax_colors.constant
execute 'highlight pythonClassVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight pythonSelf guifg=' . g:syntax_colors.variable_readonly
execute 'highlight pythonAttribute guifg=' . g:syntax_colors.property

" Functions and methods
execute 'highlight pythonFunction guifg=' . g:syntax_colors.function
execute 'highlight pythonBuiltinFunc guifg=' . g:syntax_colors.support_function
execute 'highlight pythonCall guifg=' . g:syntax_colors.function_call
execute 'highlight pythonMethod guifg=' . g:syntax_colors.method
execute 'highlight pythonMethod_call guifg=' . g:syntax_colors.method_call
execute 'highlight pythonDecorator guifg=' . g:syntax_colors.attribute
execute 'highlight pythonDottedName guifg=' . g:syntax_colors.variable

" Classes and types
execute 'highlight pythonClass guifg=' . g:syntax_colors.class
execute 'highlight pythonBuiltinType guifg=' . g:syntax_colors.type
execute 'highlight pythonBuiltinObj guifg=' . g:syntax_colors.support_variable
execute 'highlight pythonDot guifg=' . g:syntax_colors.punctuation
execute 'highlight pythonClassDef guifg=' . g:syntax_colors.storage

" String formatting
execute 'highlight pythonStrFormat guifg=' . g:syntax_colors.constant
execute 'highlight pythonStrFormatting guifg=' . g:syntax_colors.constant
execute 'highlight pythonStrTemplate guifg=' . g:syntax_colors.constant
execute 'highlight pythonFormatString guifg=' . g:colors.fg1
execute 'highlight pythonRawString guifg=' . g:colors.fg1
execute 'highlight pythonBytesEscape guifg=' . g:syntax_colors.constant
execute 'highlight pythonUniEscape guifg=' . g:syntax_colors.constant

" Literals and values
execute 'highlight pythonString guifg=' . g:colors.fg1
execute 'highlight pythonFString guifg=' . g:colors.fg1
execute 'highlight pythonNumber guifg=' . g:syntax_colors.constant
execute 'highlight pythonFloat guifg=' . g:syntax_colors.constant
execute 'highlight pythonHexNumber guifg=' . g:syntax_colors.constant
execute 'highlight pythonOctNumber guifg=' . g:syntax_colors.constant
execute 'highlight pythonBinNumber guifg=' . g:syntax_colors.constant
execute 'highlight pythonBoolean guifg=' . g:syntax_colors.constant
execute 'highlight pythonBytes guifg=' . g:syntax_colors.constant
execute 'highlight pythonBytesContent guifg=' . g:colors.fg1

" Comments and documentation
execute 'highlight pythonComment guifg=' . g:syntax_colors.comment 
execute 'highlight pythonDocstring guifg=' . g:syntax_colors.comment
execute 'highlight pythonTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Error handling
execute 'highlight pythonError guifg=' . g:colors.error
execute 'highlight pythonExClass guifg=' . g:syntax_colors.type
execute 'highlight pythonTry guifg=' . g:syntax_colors.keyword
execute 'highlight pythonExcept guifg=' . g:syntax_colors.keyword
execute 'highlight pythonFinally guifg=' . g:syntax_colors.keyword
execute 'highlight pythonRaise guifg=' . g:syntax_colors.keyword
execute 'highlight pythonAssert guifg=' . g:syntax_colors.keyword

" Async/await
execute 'highlight pythonAsync guifg=' . g:syntax_colors.keyword
execute 'highlight pythonAwait guifg=' . g:syntax_colors.keyword
execute 'highlight pythonCoroutine guifg=' . g:syntax_colors.type

" Type hints and annotations
execute 'highlight pythonAnnotation guifg=' . g:syntax_colors.type
execute 'highlight pythonTypeHint guifg=' . g:syntax_colors.type
execute 'highlight pythonTypeHintBrackets guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight pythonTypeHintComma guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight pythonTypeHintArrow guifg=' . g:syntax_colors.operator

" Special methods
execute 'highlight pythonDunderVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight pythonDunderMethod guifg=' . g:syntax_colors.method
execute 'highlight pythonDunderInit guifg=' . g:syntax_colors.method
execute 'highlight pythonDunderCall guifg=' . g:syntax_colors.method
execute 'highlight pythonDunderStr guifg=' . g:syntax_colors.method

" Operators and delimiters
execute 'highlight pythonBrackets guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight pythonParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight pythonBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight pythonOpSymbols guifg=' . g:syntax_colors.operator
execute 'highlight pythonArithmetic guifg=' . g:syntax_colors.operator
execute 'highlight pythonComparison guifg=' . g:syntax_colors.operator
execute 'highlight pythonBitwise guifg=' . g:syntax_colors.operator
execute 'highlight pythonMatrice guifg=' . g:syntax_colors.operator

" Special syntax
execute 'highlight pythonSpaceError guifg=' . g:colors.error . ' gui=undercurl'
execute 'highlight pythonIndentError guifg=' . g:colors.error . ' gui=undercurl'
execute 'highlight pythonSync guifg=' . g:syntax_colors.keyword
execute 'highlight pythonEscape guifg=' . g:syntax_colors.constant
execute 'highlight pythonEscapeError guifg=' . g:colors.error
