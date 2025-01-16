" Go specific highlighting

" Basic syntax
execute 'highlight goDirective guifg=' . g:syntax_colors.control_import
execute 'highlight goPackage guifg=' . g:syntax_colors.control_import
execute 'highlight goImport guifg=' . g:syntax_colors.control_import
execute 'highlight goVar guifg=' . g:syntax_colors.storage
execute 'highlight goConst guifg=' . g:syntax_colors.storage
execute 'highlight goDeclaration guifg=' . g:syntax_colors.storage
execute 'highlight goType guifg=' . g:syntax_colors.type

" Functions and methods
execute 'highlight goFunction guifg=' . g:syntax_colors.function
execute 'highlight goFunction_call guifg=' . g:syntax_colors.function_call
execute 'highlight goMethod guifg=' . g:syntax_colors.method
execute 'highlight goMethod_call guifg=' . g:syntax_colors.method_call
execute 'highlight goReceiver guifg=' . g:syntax_colors.parameter
execute 'highlight goReceiverType guifg=' . g:syntax_colors.type
execute 'highlight goArgumentName guifg=' . g:syntax_colors.parameter
execute 'highlight goReturnAssign guifg=' . g:syntax_colors.operator

" Types and structures
execute 'highlight goTypeDecl guifg=' . g:syntax_colors.type
execute 'highlight goTypeName guifg=' . g:syntax_colors.type
execute 'highlight goStruct guifg=' . g:syntax_colors.class
execute 'highlight goStructDef guifg=' . g:syntax_colors.class
execute 'highlight goInterface guifg=' . g:syntax_colors.type
execute 'highlight goInterfaceDef guifg=' . g:syntax_colors.type
execute 'highlight goTypeConstructor guifg=' . g:syntax_colors.class
execute 'highlight goTypeDef guifg=' . g:syntax_colors.type
execute 'highlight goField guifg=' . g:syntax_colors.property
execute 'highlight goStructField guifg=' . g:syntax_colors.property

" Control flow
execute 'highlight goStatement guifg=' . g:syntax_colors.keyword
execute 'highlight goConditional guifg=' . g:syntax_colors.control
execute 'highlight goRepeat guifg=' . g:syntax_colors.control
execute 'highlight goLabel guifg=' . g:syntax_colors.control
execute 'highlight goDefer guifg=' . g:syntax_colors.keyword
execute 'highlight goGoto guifg=' . g:syntax_colors.control_flow
execute 'highlight goReturn guifg=' . g:syntax_colors.control_flow

" Concurrency
execute 'highlight goGoroutine guifg=' . g:syntax_colors.keyword
execute 'highlight goChannel guifg=' . g:syntax_colors.type
execute 'highlight goChannelOp guifg=' . g:syntax_colors.operator
execute 'highlight goSelect guifg=' . g:syntax_colors.control
execute 'highlight goCase guifg=' . g:syntax_colors.control

" Built-in functions
execute 'highlight goBuiltins guifg=' . g:syntax_colors.support_function
execute 'highlight goPredefinedIdentifiers guifg=' . g:syntax_colors.support_variable
execute 'highlight goMake guifg=' . g:syntax_colors.support_function
execute 'highlight goNew guifg=' . g:syntax_colors.support_function
execute 'highlight goLen guifg=' . g:syntax_colors.support_function
execute 'highlight goCap guifg=' . g:syntax_colors.support_function
execute 'highlight goAppend guifg=' . g:syntax_colors.support_function
execute 'highlight goCopy guifg=' . g:syntax_colors.support_function
execute 'highlight goDelete guifg=' . g:syntax_colors.support_function

" Constants and literals
execute 'highlight goConstants guifg=' . g:syntax_colors.constant
execute 'highlight goBoolean guifg=' . g:syntax_colors.constant
execute 'highlight goNumber guifg=' . g:syntax_colors.constant
execute 'highlight goFloat guifg=' . g:syntax_colors.constant
execute 'highlight goString guifg=' . g:colors.fg1
execute 'highlight goRawString guifg=' . g:colors.fg1
execute 'highlight goCharacter guifg=' . g:syntax_colors.constant
execute 'highlight goFormatSpecifier guifg=' . g:syntax_colors.constant

" Error handling
execute 'highlight goError guifg=' . g:colors.error
execute 'highlight goPanic guifg=' . g:syntax_colors.function
execute 'highlight goRecover guifg=' . g:syntax_colors.function

" Testing
execute 'highlight goTest guifg=' . g:syntax_colors.function
execute 'highlight goBenchmark guifg=' . g:syntax_colors.function
execute 'highlight goTestFunction guifg=' . g:syntax_colors.function
execute 'highlight goBenchmarkFunction guifg=' . g:syntax_colors.function

" Comments and documentation
execute 'highlight goComment guifg=' . g:syntax_colors.comment
execute 'highlight goCommentDoc guifg=' . g:syntax_colors.comment 
execute 'highlight goCommentDocKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight goCommentDocLink guifg=' . g:colors.info 

" Operators and punctuation
execute 'highlight goOperator guifg=' . g:syntax_colors.operator
execute 'highlight goPointerOperator guifg=' . g:syntax_colors.operator
execute 'highlight goVarArgs guifg=' . g:syntax_colors.operator
execute 'highlight goAssignment guifg=' . g:syntax_colors.operator
execute 'highlight goDeclType guifg=' . g:syntax_colors.punctuation
execute 'highlight goBlock guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight goBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight goParens guifg=' . g:syntax_colors.punctuation_brace

" Special syntax
execute 'highlight goBlankIdentifier guifg=' . g:syntax_colors.variable
execute 'highlight goEscapeOctal guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeC guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeX guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeU guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeBigU guifg=' . g:syntax_colors.constant
