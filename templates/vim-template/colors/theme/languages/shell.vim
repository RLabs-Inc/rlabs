" Shell script specific highlighting

" Basic syntax
execute 'highlight shStatement guifg=' . g:syntax_colors.keyword
execute 'highlight shCommandSub guifg=' . g:syntax_colors.keyword
execute 'highlight shSet guifg=' . g:syntax_colors.keyword
execute 'highlight shShebang guifg=' . g:syntax_colors.comment
execute 'highlight shDo guifg=' . g:syntax_colors.keyword
execute 'highlight shFor guifg=' . g:syntax_colors.control
execute 'highlight shRepeat guifg=' . g:syntax_colors.control
execute 'highlight shLoop guifg=' . g:syntax_colors.control
execute 'highlight shIf guifg=' . g:syntax_colors.control
execute 'highlight shConditional guifg=' . g:syntax_colors.control

" Variables and parameters
execute 'highlight shVariable guifg=' . g:syntax_colors.variable
execute 'highlight shVariable_def guifg=' . g:syntax_colors.variable_declaration
execute 'highlight shDeref guifg=' . g:syntax_colors.variable
execute 'highlight shDerefSimple guifg=' . g:syntax_colors.variable
execute 'highlight shDerefVar guifg=' . g:syntax_colors.variable
execute 'highlight shDerefSpecial guifg=' . g:syntax_colors.variable
execute 'highlight shDerefPattern guifg=' . g:syntax_colors.variable
execute 'highlight shDerefOp guifg=' . g:syntax_colors.operator
execute 'highlight shVarAssign guifg=' . g:syntax_colors.operator
execute 'highlight shCmdSubRegion guifg=' . g:colors.fg1

" Functions and commands
execute 'highlight shFunction guifg=' . g:syntax_colors.function
execute 'highlight shFunctionKey guifg=' . g:syntax_colors.keyword
execute 'highlight shFunctionName guifg=' . g:syntax_colors.function
execute 'highlight shFunctionTwo guifg=' . g:syntax_colors.function
execute 'highlight shFunctionStart guifg=' . g:syntax_colors.punctuation
execute 'highlight shArithmetic guifg=' . g:syntax_colors.operator
execute 'highlight shCommandSub guifg=' . g:syntax_colors.keyword
execute 'highlight shCmdParenRegion guifg=' . g:colors.fg1
execute 'highlight shCmdSubRegion guifg=' . g:colors.fg1

" Built-in commands
execute 'highlight shBuiltinVariable guifg=' . g:syntax_colors.support_variable
execute 'highlight shSetList guifg=' . g:syntax_colors.support_variable
execute 'highlight shOption guifg=' . g:syntax_colors.constant
execute 'highlight shAlias guifg=' . g:syntax_colors.support_function
execute 'highlight shFunctionList guifg=' . g:syntax_colors.support_function
execute 'highlight shDerefWordError guifg=' . g:colors.error
execute 'highlight shTestOpr guifg=' . g:syntax_colors.operator

" String and quotes
execute 'highlight shSingleQuote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight shDoubleQuote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight shString guifg=' . g:colors.fg1
execute 'highlight shEcho guifg=' . g:syntax_colors.keyword
execute 'highlight shEchoQuote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight shEchoDelim guifg=' . g:syntax_colors.punctuation
execute 'highlight shQuote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight shHereDoc guifg=' . g:colors.fg1
execute 'highlight shHereString guifg=' . g:colors.fg1

" Comments
execute 'highlight shComment guifg=' . g:syntax_colors.comment
execute 'highlight shTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Control flow
execute 'highlight shTestPattern guifg=' . g:syntax_colors.constant
execute 'highlight shCase guifg=' . g:syntax_colors.control
execute 'highlight shCaseStart guifg=' . g:syntax_colors.control
execute 'highlight shCaseLabel guifg=' . g:syntax_colors.constant
execute 'highlight shCaseBar guifg=' . g:syntax_colors.punctuation
execute 'highlight shCaseIn guifg=' . g:syntax_colors.keyword
execute 'highlight shCaseCommandSub guifg=' . g:syntax_colors.keyword
execute 'highlight shCaseExSingleQuote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight shCaseEsac guifg=' . g:syntax_colors.keyword

" Operators and punctuation
execute 'highlight shOperator guifg=' . g:syntax_colors.operator
execute 'highlight shExprOperator guifg=' . g:syntax_colors.operator
execute 'highlight shTestOpr guifg=' . g:syntax_colors.operator
execute 'highlight shRange guifg=' . g:syntax_colors.operator
execute 'highlight shColon guifg=' . g:syntax_colors.punctuation
execute 'highlight shParen guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight shBrace guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight shBracket guifg=' . g:syntax_colors.punctuation_brace

" Special syntax
execute 'highlight shSpecial guifg=' . g:syntax_colors.constant
execute 'highlight shSpecialDQ guifg=' . g:syntax_colors.constant
execute 'highlight shSpecialSQ guifg=' . g:syntax_colors.constant
execute 'highlight shSpecialNoZS guifg=' . g:syntax_colors.constant
execute 'highlight shNoQuote guifg=' . g:colors.fg1
execute 'highlight shSkipInitWS guifg=' . g:colors.fg1
execute 'highlight shDblParen guifg=' . g:syntax_colors.punctuation_brace

" Error handling
execute 'highlight shError guifg=' . g:colors.error
execute 'highlight shDerefError guifg=' . g:colors.error
execute 'highlight shParenError guifg=' . g:colors.error
execute 'highlight shTestError guifg=' . g:colors.error
execute 'highlight shCondError guifg=' . g:colors.error
execute 'highlight shCurlyError guifg=' . g:colors.error
execute 'highlight shDerefOpError guifg=' . g:colors.error
execute 'highlight shDerefWordError guifg=' . g:colors.error
execute 'highlight shDoError guifg=' . g:colors.error
execute 'highlight shEsacError guifg=' . g:colors.error
execute 'highlight shIfError guifg=' . g:colors.error
execute 'highlight shInError guifg=' . g:colors.error
execute 'highlight shCaseError guifg=' . g:colors.error
execute 'highlight shTestError guifg=' . g:colors.error
execute 'highlight shArithError guifg=' . g:colors.error
