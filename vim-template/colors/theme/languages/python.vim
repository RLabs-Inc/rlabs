" Python specific highlighting

" Basic syntax
execute 'highlight pythonStatement guifg=' . g:syntaxColors.keyword
execute 'highlight pythonKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight pythonOperator guifg=' . g:syntaxColors.operator
execute 'highlight pythonRepeat guifg=' . g:syntaxColors.control
execute 'highlight pythonConditional guifg=' . g:syntaxColors.control
execute 'highlight pythonException guifg=' . g:syntaxColors.keyword
execute 'highlight pythonInclude guifg=' . g:syntaxColors.controlImport
execute 'highlight pythonPreCondit guifg=' . g:syntaxColors.controlImport

" Variables and declarations
execute 'highlight pythonGlobal guifg=' . g:syntaxColors.variableReadonly
execute 'highlight pythonBuiltin guifg=' . g:syntaxColors.supportVariable
execute 'highlight pythonNone guifg=' . g:syntaxColors.constant
execute 'highlight pythonClassVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight pythonSelf guifg=' . g:syntaxColors.variableReadonly
execute 'highlight pythonAttribute guifg=' . g:syntaxColors.property

" Functions and methods
execute 'highlight pythonFunction guifg=' . g:syntaxColors.function
execute 'highlight pythonBuiltinFunc guifg=' . g:syntaxColors.supportFunction
execute 'highlight pythonCall guifg=' . g:syntaxColors.functionCall
execute 'highlight pythonMethod guifg=' . g:syntaxColors.method
execute 'highlight pythonMethodCall guifg=' . g:syntaxColors.methodCall
execute 'highlight pythonDecorator guifg=' . g:syntaxColors.attribute
execute 'highlight pythonDottedName guifg=' . g:syntaxColors.variable

" Classes and types
execute 'highlight pythonClass guifg=' . g:syntaxColors.class
execute 'highlight pythonBuiltinType guifg=' . g:syntaxColors.type
execute 'highlight pythonBuiltinObj guifg=' . g:syntaxColors.supportVariable
execute 'highlight pythonDot guifg=' . g:syntaxColors.punctuation
execute 'highlight pythonClassDef guifg=' . g:syntaxColors.storage

" String formatting
execute 'highlight pythonStrFormat guifg=' . g:syntaxColors.constant
execute 'highlight pythonStrFormatting guifg=' . g:syntaxColors.constant
execute 'highlight pythonStrTemplate guifg=' . g:syntaxColors.constant
execute 'highlight pythonFormatString guifg=' . g:colors.FG1
execute 'highlight pythonRawString guifg=' . g:colors.FG1
execute 'highlight pythonBytesEscape guifg=' . g:syntaxColors.constant
execute 'highlight pythonUniEscape guifg=' . g:syntaxColors.constant

" Literals and values
execute 'highlight pythonString guifg=' . g:colors.FG1
execute 'highlight pythonFString guifg=' . g:colors.FG1
execute 'highlight pythonNumber guifg=' . g:syntaxColors.constant
execute 'highlight pythonFloat guifg=' . g:syntaxColors.constant
execute 'highlight pythonHexNumber guifg=' . g:syntaxColors.constant
execute 'highlight pythonOctNumber guifg=' . g:syntaxColors.constant
execute 'highlight pythonBinNumber guifg=' . g:syntaxColors.constant
execute 'highlight pythonBoolean guifg=' . g:syntaxColors.constant
execute 'highlight pythonBytes guifg=' . g:syntaxColors.constant
execute 'highlight pythonBytesContent guifg=' . g:colors.FG1

" Comments and documentation
execute 'highlight pythonComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight pythonDocstring guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight pythonTodo guifg=' . g:syntaxColors.comment . ' gui=bold'

" Error handling
execute 'highlight pythonError guifg=' . g:colors.ERROR
execute 'highlight pythonExClass guifg=' . g:syntaxColors.type
execute 'highlight pythonTry guifg=' . g:syntaxColors.keyword
execute 'highlight pythonExcept guifg=' . g:syntaxColors.keyword
execute 'highlight pythonFinally guifg=' . g:syntaxColors.keyword
execute 'highlight pythonRaise guifg=' . g:syntaxColors.keyword
execute 'highlight pythonAssert guifg=' . g:syntaxColors.keyword

" Async/await
execute 'highlight pythonAsync guifg=' . g:syntaxColors.keyword
execute 'highlight pythonAwait guifg=' . g:syntaxColors.keyword
execute 'highlight pythonCoroutine guifg=' . g:syntaxColors.type

" Type hints and annotations
execute 'highlight pythonAnnotation guifg=' . g:syntaxColors.type
execute 'highlight pythonTypeHint guifg=' . g:syntaxColors.type
execute 'highlight pythonTypeHintBrackets guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight pythonTypeHintComma guifg=' . g:syntaxColors.punctuationComma
execute 'highlight pythonTypeHintArrow guifg=' . g:syntaxColors.operator

" Special methods
execute 'highlight pythonDunderVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight pythonDunderMethod guifg=' . g:syntaxColors.method
execute 'highlight pythonDunderInit guifg=' . g:syntaxColors.method
execute 'highlight pythonDunderCall guifg=' . g:syntaxColors.method
execute 'highlight pythonDunderStr guifg=' . g:syntaxColors.method

" Operators and delimiters
execute 'highlight pythonBrackets guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight pythonParens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight pythonBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight pythonOpSymbols guifg=' . g:syntaxColors.operator
execute 'highlight pythonArithmetic guifg=' . g:syntaxColors.operator
execute 'highlight pythonComparison guifg=' . g:syntaxColors.operator
execute 'highlight pythonBitwise guifg=' . g:syntaxColors.operator
execute 'highlight pythonMatrice guifg=' . g:syntaxColors.operator

" Special syntax
execute 'highlight pythonSpaceError guifg=' . g:colors.ERROR . ' gui=undercurl'
execute 'highlight pythonIndentError guifg=' . g:colors.ERROR . ' gui=undercurl'
execute 'highlight pythonSync guifg=' . g:syntaxColors.keyword
execute 'highlight pythonEscape guifg=' . g:syntaxColors.constant
execute 'highlight pythonEscapeError guifg=' . g:colors.ERROR
