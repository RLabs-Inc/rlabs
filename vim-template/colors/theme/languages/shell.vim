" Shell script specific highlighting

" Basic syntax
execute 'highlight shStatement guifg=' . g:syntaxColors.keyword
execute 'highlight shCommandSub guifg=' . g:syntaxColors.keyword
execute 'highlight shSet guifg=' . g:syntaxColors.keyword
execute 'highlight shShebang guifg=' . g:syntaxColors.comment
execute 'highlight shDo guifg=' . g:syntaxColors.keyword
execute 'highlight shFor guifg=' . g:syntaxColors.control
execute 'highlight shRepeat guifg=' . g:syntaxColors.control
execute 'highlight shLoop guifg=' . g:syntaxColors.control
execute 'highlight shIf guifg=' . g:syntaxColors.control
execute 'highlight shConditional guifg=' . g:syntaxColors.control

" Variables and parameters
execute 'highlight shVariable guifg=' . g:syntaxColors.variable
execute 'highlight shVariableDef guifg=' . g:syntaxColors.variableDeclaration
execute 'highlight shDeref guifg=' . g:syntaxColors.variable
execute 'highlight shDerefSimple guifg=' . g:syntaxColors.variable
execute 'highlight shDerefVar guifg=' . g:syntaxColors.variable
execute 'highlight shDerefSpecial guifg=' . g:syntaxColors.variable
execute 'highlight shDerefPattern guifg=' . g:syntaxColors.variable
execute 'highlight shDerefOp guifg=' . g:syntaxColors.operator
execute 'highlight shVarAssign guifg=' . g:syntaxColors.operator
execute 'highlight shCmdSubRegion guifg=' . g:colors.FG1

" Functions and commands
execute 'highlight shFunction guifg=' . g:syntaxColors.function
execute 'highlight shFunctionKey guifg=' . g:syntaxColors.keyword
execute 'highlight shFunctionName guifg=' . g:syntaxColors.function
execute 'highlight shFunctionTwo guifg=' . g:syntaxColors.function
execute 'highlight shFunctionStart guifg=' . g:syntaxColors.punctuation
execute 'highlight shArithmetic guifg=' . g:syntaxColors.operator
execute 'highlight shCommandSub guifg=' . g:syntaxColors.keyword
execute 'highlight shCmdParenRegion guifg=' . g:colors.FG1
execute 'highlight shCmdSubRegion guifg=' . g:colors.FG1

" Built-in commands
execute 'highlight shBuiltinVariable guifg=' . g:syntaxColors.supportVariable
execute 'highlight shSetList guifg=' . g:syntaxColors.supportVariable
execute 'highlight shOption guifg=' . g:syntaxColors.constant
execute 'highlight shAlias guifg=' . g:syntaxColors.supportFunction
execute 'highlight shFunctionList guifg=' . g:syntaxColors.supportFunction
execute 'highlight shDerefWordError guifg=' . g:colors.ERROR
execute 'highlight shTestOpr guifg=' . g:syntaxColors.operator

" String and quotes
execute 'highlight shSingleQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight shDoubleQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight shString guifg=' . g:colors.FG1
execute 'highlight shEcho guifg=' . g:syntaxColors.keyword
execute 'highlight shEchoQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight shEchoDelim guifg=' . g:syntaxColors.punctuation
execute 'highlight shQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight shHereDoc guifg=' . g:colors.FG1
execute 'highlight shHereString guifg=' . g:colors.FG1

" Comments
execute 'highlight shComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight shTodo guifg=' . g:syntaxColors.comment . ' gui=bold'

" Control flow
execute 'highlight shTestPattern guifg=' . g:syntaxColors.constant
execute 'highlight shCase guifg=' . g:syntaxColors.control
execute 'highlight shCaseStart guifg=' . g:syntaxColors.control
execute 'highlight shCaseLabel guifg=' . g:syntaxColors.constant
execute 'highlight shCaseBar guifg=' . g:syntaxColors.punctuation
execute 'highlight shCaseIn guifg=' . g:syntaxColors.keyword
execute 'highlight shCaseCommandSub guifg=' . g:syntaxColors.keyword
execute 'highlight shCaseExSingleQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight shCaseEsac guifg=' . g:syntaxColors.keyword

" Operators and punctuation
execute 'highlight shOperator guifg=' . g:syntaxColors.operator
execute 'highlight shExprOperator guifg=' . g:syntaxColors.operator
execute 'highlight shTestOpr guifg=' . g:syntaxColors.operator
execute 'highlight shRange guifg=' . g:syntaxColors.operator
execute 'highlight shColon guifg=' . g:syntaxColors.punctuation
execute 'highlight shParen guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight shBrace guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight shBracket guifg=' . g:syntaxColors.punctuationBrace

" Special syntax
execute 'highlight shSpecial guifg=' . g:syntaxColors.constant
execute 'highlight shSpecialDQ guifg=' . g:syntaxColors.constant
execute 'highlight shSpecialSQ guifg=' . g:syntaxColors.constant
execute 'highlight shSpecialNoZS guifg=' . g:syntaxColors.constant
execute 'highlight shNoQuote guifg=' . g:colors.FG1
execute 'highlight shSkipInitWS guifg=' . g:colors.FG1
execute 'highlight shDblParen guifg=' . g:syntaxColors.punctuationBrace

" Error handling
execute 'highlight shError guifg=' . g:colors.ERROR
execute 'highlight shDerefError guifg=' . g:colors.ERROR
execute 'highlight shParenError guifg=' . g:colors.ERROR
execute 'highlight shTestError guifg=' . g:colors.ERROR
execute 'highlight shCondError guifg=' . g:colors.ERROR
execute 'highlight shCurlyError guifg=' . g:colors.ERROR
execute 'highlight shDerefOpError guifg=' . g:colors.ERROR
execute 'highlight shDerefWordError guifg=' . g:colors.ERROR
execute 'highlight shDoError guifg=' . g:colors.ERROR
execute 'highlight shEsacError guifg=' . g:colors.ERROR
execute 'highlight shIfError guifg=' . g:colors.ERROR
execute 'highlight shInError guifg=' . g:colors.ERROR
execute 'highlight shCaseError guifg=' . g:colors.ERROR
execute 'highlight shTestError guifg=' . g:colors.ERROR
execute 'highlight shArithError guifg=' . g:colors.ERROR
