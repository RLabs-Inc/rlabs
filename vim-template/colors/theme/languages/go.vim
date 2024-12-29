" Go specific highlighting

" Basic syntax
execute 'highlight goDirective guifg=' . g:syntaxColors.controlImport
execute 'highlight goPackage guifg=' . g:syntaxColors.controlImport
execute 'highlight goImport guifg=' . g:syntaxColors.controlImport
execute 'highlight goVar guifg=' . g:syntaxColors.storage
execute 'highlight goConst guifg=' . g:syntaxColors.storage
execute 'highlight goDeclaration guifg=' . g:syntaxColors.storage
execute 'highlight goType guifg=' . g:syntaxColors.type

" Functions and methods
execute 'highlight goFunction guifg=' . g:syntaxColors.function
execute 'highlight goFunctionCall guifg=' . g:syntaxColors.functionCall
execute 'highlight goMethod guifg=' . g:syntaxColors.method
execute 'highlight goMethodCall guifg=' . g:syntaxColors.methodCall
execute 'highlight goReceiver guifg=' . g:syntaxColors.parameter
execute 'highlight goReceiverType guifg=' . g:syntaxColors.type
execute 'highlight goArgumentName guifg=' . g:syntaxColors.parameter
execute 'highlight goReturnAssign guifg=' . g:syntaxColors.operator

" Types and structures
execute 'highlight goTypeDecl guifg=' . g:syntaxColors.type
execute 'highlight goTypeName guifg=' . g:syntaxColors.type
execute 'highlight goStruct guifg=' . g:syntaxColors.class
execute 'highlight goStructDef guifg=' . g:syntaxColors.class
execute 'highlight goInterface guifg=' . g:syntaxColors.type
execute 'highlight goInterfaceDef guifg=' . g:syntaxColors.type
execute 'highlight goTypeConstructor guifg=' . g:syntaxColors.class
execute 'highlight goTypeDef guifg=' . g:syntaxColors.type
execute 'highlight goField guifg=' . g:syntaxColors.property
execute 'highlight goStructField guifg=' . g:syntaxColors.property

" Control flow
execute 'highlight goStatement guifg=' . g:syntaxColors.keyword
execute 'highlight goConditional guifg=' . g:syntaxColors.control
execute 'highlight goRepeat guifg=' . g:syntaxColors.control
execute 'highlight goLabel guifg=' . g:syntaxColors.control
execute 'highlight goDefer guifg=' . g:syntaxColors.keyword
execute 'highlight goGoto guifg=' . g:syntaxColors.controlFlow
execute 'highlight goReturn guifg=' . g:syntaxColors.controlFlow

" Concurrency
execute 'highlight goGoroutine guifg=' . g:syntaxColors.keyword
execute 'highlight goChannel guifg=' . g:syntaxColors.type
execute 'highlight goChannelOp guifg=' . g:syntaxColors.operator
execute 'highlight goSelect guifg=' . g:syntaxColors.control
execute 'highlight goCase guifg=' . g:syntaxColors.control

" Built-in functions
execute 'highlight goBuiltins guifg=' . g:syntaxColors.supportFunction
execute 'highlight goPredefinedIdentifiers guifg=' . g:syntaxColors.supportVariable
execute 'highlight goMake guifg=' . g:syntaxColors.supportFunction
execute 'highlight goNew guifg=' . g:syntaxColors.supportFunction
execute 'highlight goLen guifg=' . g:syntaxColors.supportFunction
execute 'highlight goCap guifg=' . g:syntaxColors.supportFunction
execute 'highlight goAppend guifg=' . g:syntaxColors.supportFunction
execute 'highlight goCopy guifg=' . g:syntaxColors.supportFunction
execute 'highlight goDelete guifg=' . g:syntaxColors.supportFunction

" Constants and literals
execute 'highlight goConstants guifg=' . g:syntaxColors.constant
execute 'highlight goBoolean guifg=' . g:syntaxColors.constant
execute 'highlight goNumber guifg=' . g:syntaxColors.constant
execute 'highlight goFloat guifg=' . g:syntaxColors.constant
execute 'highlight goString guifg=' . g:colors.FG1
execute 'highlight goRawString guifg=' . g:colors.FG1
execute 'highlight goCharacter guifg=' . g:syntaxColors.constant
execute 'highlight goFormatSpecifier guifg=' . g:syntaxColors.constant

" Error handling
execute 'highlight goError guifg=' . g:colors.ERROR
execute 'highlight goPanic guifg=' . g:syntaxColors.function
execute 'highlight goRecover guifg=' . g:syntaxColors.function

" Testing
execute 'highlight goTest guifg=' . g:syntaxColors.function
execute 'highlight goBenchmark guifg=' . g:syntaxColors.function
execute 'highlight goTestFunction guifg=' . g:syntaxColors.function
execute 'highlight goBenchmarkFunction guifg=' . g:syntaxColors.function

" Comments and documentation
execute 'highlight goComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight goCommentDoc guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight goCommentDocKeyword guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight goCommentDocLink guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Comment')

" Operators and punctuation
execute 'highlight goOperator guifg=' . g:syntaxColors.operator
execute 'highlight goPointerOperator guifg=' . g:syntaxColors.operator
execute 'highlight goVarArgs guifg=' . g:syntaxColors.operator
execute 'highlight goAssignment guifg=' . g:syntaxColors.operator
execute 'highlight goDeclType guifg=' . g:syntaxColors.punctuation
execute 'highlight goBlock guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight goBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight goParens guifg=' . g:syntaxColors.punctuationBrace

" Special syntax
execute 'highlight goBlankIdentifier guifg=' . g:syntaxColors.variable
execute 'highlight goEscapeOctal guifg=' . g:syntaxColors.constant
execute 'highlight goEscapeC guifg=' . g:syntaxColors.constant
execute 'highlight goEscapeX guifg=' . g:syntaxColors.constant
execute 'highlight goEscapeU guifg=' . g:syntaxColors.constant
execute 'highlight goEscapeBigU guifg=' . g:syntaxColors.constant
