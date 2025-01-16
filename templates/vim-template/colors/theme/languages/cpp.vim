" C/C++ specific highlighting

" Basic syntax
execute 'highlight cStatement guifg=' . g:syntax_colors.keyword
execute 'highlight cppStatement guifg=' . g:syntax_colors.keyword
execute 'highlight cppAccess guifg=' . g:syntax_colors.keyword
execute 'highlight cppModifier guifg=' . g:syntax_colors.modifier
execute 'highlight cStorageClass guifg=' . g:syntax_colors.storage
execute 'highlight cppStorageClass guifg=' . g:syntax_colors.storage
execute 'highlight cType guifg=' . g:syntax_colors.type
execute 'highlight cppType guifg=' . g:syntax_colors.type
execute 'highlight cConstant guifg=' . g:syntax_colors.constant
execute 'highlight cppConstant guifg=' . g:syntax_colors.constant

" Functions and methods
execute 'highlight cFunction guifg=' . g:syntax_colors.function
execute 'highlight cppFunction guifg=' . g:syntax_colors.function
execute 'highlight cppMethod guifg=' . g:syntax_colors.method
execute 'highlight cppMemberFunc guifg=' . g:syntax_colors.method
execute 'highlight cUserFunction guifg=' . g:syntax_colors.function_call
execute 'highlight cppFuncCall guifg=' . g:syntax_colors.function_call

" Classes and structures
execute 'highlight cppStructure guifg=' . g:syntax_colors.class
execute 'highlight cStructure guifg=' . g:syntax_colors.class
execute 'highlight cClass guifg=' . g:syntax_colors.class
execute 'highlight cppClass guifg=' . g:syntax_colors.class
execute 'highlight cClassScope guifg=' . g:syntax_colors.punctuation
execute 'highlight cppClassScope guifg=' . g:syntax_colors.punctuation

" Templates and generics
execute 'highlight cppTemplate guifg=' . g:syntax_colors.type
execute 'highlight cppTemplateDecl guifg=' . g:syntax_colors.type
execute 'highlight cppTemplateArg guifg=' . g:syntax_colors.type_parameter
execute 'highlight cppTemplateOperator guifg=' . g:syntax_colors.operator

" Variables and members
execute 'highlight cppVariable guifg=' . g:syntax_colors.variable
execute 'highlight cppMember guifg=' . g:syntax_colors.property
execute 'highlight cppField guifg=' . g:syntax_colors.property
execute 'highlight cppThis guifg=' . g:syntax_colors.variable_readonly
execute 'highlight cppNamespace guifg=' . g:syntax_colors.class

" Control flow
execute 'highlight cConditional guifg=' . g:syntax_colors.control
execute 'highlight cppConditional guifg=' . g:syntax_colors.control
execute 'highlight cRepeat guifg=' . g:syntax_colors.control
execute 'highlight cppRepeat guifg=' . g:syntax_colors.control
execute 'highlight cLabel guifg=' . g:syntax_colors.control
execute 'highlight cppLabel guifg=' . g:syntax_colors.control
execute 'highlight cReturn guifg=' . g:syntax_colors.control_flow
execute 'highlight cppReturn guifg=' . g:syntax_colors.control_flow

" Operators and symbols
execute 'highlight cOperator guifg=' . g:syntax_colors.operator
execute 'highlight cppOperator guifg=' . g:syntax_colors.operator
execute 'highlight cppCast guifg=' . g:syntax_colors.operator
execute 'highlight cComma guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight cppComma guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight cSemicolon guifg=' . g:syntax_colors.punctuation
execute 'highlight cppSemicolon guifg=' . g:syntax_colors.punctuation

" Literals and values
execute 'highlight cString guifg=' . g:colors.fg1
execute 'highlight cppString guifg=' . g:colors.fg1
execute 'highlight cCharacter guifg=' . g:syntax_colors.constant
execute 'highlight cppCharacter guifg=' . g:syntax_colors.constant
execute 'highlight cNumber guifg=' . g:syntax_colors.constant
execute 'highlight cppNumber guifg=' . g:syntax_colors.constant
execute 'highlight cFloat guifg=' . g:syntax_colors.constant
execute 'highlight cppFloat guifg=' . g:syntax_colors.constant
execute 'highlight cOctal guifg=' . g:syntax_colors.constant
execute 'highlight cppOctal guifg=' . g:syntax_colors.constant
execute 'highlight cHexNumber guifg=' . g:syntax_colors.constant
execute 'highlight cppHexNumber guifg=' . g:syntax_colors.constant

" Preprocessor directives
execute 'highlight cPreProc guifg=' . g:syntax_colors.control
execute 'highlight cppPreProc guifg=' . g:syntax_colors.control
execute 'highlight cInclude guifg=' . g:syntax_colors.control_import
execute 'highlight cppInclude guifg=' . g:syntax_colors.control_import
execute 'highlight cDefine guifg=' . g:syntax_colors.control
execute 'highlight cppDefine guifg=' . g:syntax_colors.control
execute 'highlight cPreCondit guifg=' . g:syntax_colors.control
execute 'highlight cppPreCondit guifg=' . g:syntax_colors.control
execute 'highlight cMacro guifg=' . g:syntax_colors.function
execute 'highlight cppMacro guifg=' . g:syntax_colors.function

" Comments and documentation
execute 'highlight cComment guifg=' . g:syntax_colors.comment
execute 'highlight cppComment guifg=' . g:syntax_colors.comment
execute 'highlight cCommentL guifg=' . g:syntax_colors.comment
execute 'highlight cppCommentL guifg=' . g:syntax_colors.comment
execute 'highlight cCommentStart guifg=' . g:syntax_colors.comment
execute 'highlight cppCommentStart guifg=' . g:syntax_colors.comment
execute 'highlight cTodo guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight cppTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Special syntax
execute 'highlight cSpecial guifg=' . g:syntax_colors.constant
execute 'highlight cppSpecial guifg=' . g:syntax_colors.constant
execute 'highlight cFormat guifg=' . g:syntax_colors.constant
execute 'highlight cppFormat guifg=' . g:syntax_colors.constant
execute 'highlight cSpecialCharacter guifg=' . g:syntax_colors.constant
execute 'highlight cppSpecialCharacter guifg=' . g:syntax_colors.constant
execute 'highlight cSpecialError guifg=' . g:colors.error
execute 'highlight cppSpecialError guifg=' . g:colors.error

" Error handling
execute 'highlight cError guifg=' . g:colors.error
execute 'highlight cppError guifg=' . g:colors.error
execute 'highlight cBadContinuation guifg=' . g:colors.error
execute 'highlight cppBadContinuation guifg=' . g:colors.error
execute 'highlight cParenError guifg=' . g:colors.error
execute 'highlight cppParenError guifg=' . g:colors.error
execute 'highlight cErrInParen guifg=' . g:colors.error
execute 'highlight cppErrInParen guifg=' . g:colors.error
execute 'highlight cErrInBracket guifg=' . g:colors.error
execute 'highlight cppErrInBracket guifg=' . g:colors.error

" Modern C++ features
execute 'highlight cppAutoType guifg=' . g:syntax_colors.type
execute 'highlight cppRawString guifg=' . g:colors.fg1
execute 'highlight cppRawStringDelimiter guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight cppNullptr guifg=' . g:syntax_colors.constant
execute 'highlight cppLambda guifg=' . g:syntax_colors.function
execute 'highlight cppAttribute guifg=' . g:syntax_colors.attribute
execute 'highlight cppAttributeScope guifg=' . g:syntax_colors.punctuation
execute 'highlight cppConcept guifg=' . g:syntax_colors.type
execute 'highlight cppRequires guifg=' . g:syntax_colors.keyword
execute 'highlight cppCoroutine guifg=' . g:syntax_colors.keyword
execute 'highlight cppModule guifg=' . g:syntax_colors.keyword
execute 'highlight cppExport guifg=' . g:syntax_colors.keyword
execute 'highlight cppImport guifg=' . g:syntax_colors.control_import
