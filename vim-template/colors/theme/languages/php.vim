" PHP specific highlighting

" Basic syntax
execute 'highlight phpKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight phpStatement guifg=' . g:syntaxColors.keyword
execute 'highlight phpType guifg=' . g:syntaxColors.type
execute 'highlight phpOperator guifg=' . g:syntaxColors.operator
execute 'highlight phpVarSelector guifg=' . g:syntaxColors.variable
execute 'highlight phpIdentifier guifg=' . g:syntaxColors.variable
execute 'highlight phpDefine guifg=' . g:syntaxColors.keyword

" Classes and interfaces
execute 'highlight phpClass guifg=' . g:syntaxColors.class
execute 'highlight phpClassName guifg=' . g:syntaxColors.class
execute 'highlight phpInterface guifg=' . g:syntaxColors.type
execute 'highlight phpInterfaceName guifg=' . g:syntaxColors.type
execute 'highlight phpTrait guifg=' . g:syntaxColors.type
execute 'highlight phpTraitName guifg=' . g:syntaxColors.type
execute 'highlight phpExtends guifg=' . g:syntaxColors.keyword
execute 'highlight phpImplements guifg=' . g:syntaxColors.keyword
execute 'highlight phpUse guifg=' . g:syntaxColors.controlImport
execute 'highlight phpNamespace guifg=' . g:syntaxColors.controlImport

" Methods and functions
execute 'highlight phpFunction guifg=' . g:syntaxColors.function
execute 'highlight phpFunctionCall guifg=' . g:syntaxColors.functionCall
execute 'highlight phpMethod guifg=' . g:syntaxColors.method
execute 'highlight phpMethodCall guifg=' . g:syntaxColors.methodCall
execute 'highlight phpStaticCall guifg=' . g:syntaxColors.functionCall
execute 'highlight phpMagicMethods guifg=' . g:syntaxColors.method
execute 'highlight phpConstructor guifg=' . g:syntaxColors.function

" Variables and properties
execute 'highlight phpVariable guifg=' . g:syntaxColors.variable
execute 'highlight phpVarSelector guifg=' . g:syntaxColors.variable
execute 'highlight phpMemberSelector guifg=' . g:syntaxColors.punctuation
execute 'highlight phpProperty guifg=' . g:syntaxColors.property
execute 'highlight phpStaticVariable guifg=' . g:syntaxColors.variableReadonly
execute 'highlight phpGlobal guifg=' . g:syntaxColors.variableReadonly
execute 'highlight phpSuperglobal guifg=' . g:syntaxColors.variableReadonly
execute 'highlight phpThis guifg=' . g:syntaxColors.variableReadonly
execute 'highlight phpMagicConstants guifg=' . g:syntaxColors.constant

" Control flow
execute 'highlight phpConditional guifg=' . g:syntaxColors.control
execute 'highlight phpRepeat guifg=' . g:syntaxColors.control
execute 'highlight phpLabel guifg=' . g:syntaxColors.control
execute 'highlight phpReturn guifg=' . g:syntaxColors.controlFlow
execute 'highlight phpYield guifg=' . g:syntaxColors.controlFlow
execute 'highlight phpBreak guifg=' . g:syntaxColors.controlFlow
execute 'highlight phpContinue guifg=' . g:syntaxColors.controlFlow
execute 'highlight phpGoto guifg=' . g:syntaxColors.controlFlow

" Strings and heredoc
execute 'highlight phpString guifg=' . g:colors.FG1
execute 'highlight phpStringDouble guifg=' . g:colors.FG1
execute 'highlight phpStringSingle guifg=' . g:colors.FG1
execute 'highlight phpStringDelimiter guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight phpHereDoc guifg=' . g:colors.FG1
execute 'highlight phpHereDocDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight phpNowDoc guifg=' . g:colors.FG1
execute 'highlight phpNowDocDelimiter guifg=' . g:syntaxColors.punctuation

" Numbers and constants
execute 'highlight phpNumber guifg=' . g:syntaxColors.constant
execute 'highlight phpFloat guifg=' . g:syntaxColors.constant
execute 'highlight phpBoolean guifg=' . g:syntaxColors.constant
execute 'highlight phpNull guifg=' . g:syntaxColors.constant
execute 'highlight phpConstant guifg=' . g:syntaxColors.constant

" Comments and documentation
execute 'highlight phpComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight phpDocComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight phpDocTags guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight phpDocParam guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Comment')
execute 'highlight phpDocIdentifier guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Comment')
execute 'highlight phpTodo guifg=' . g:syntaxColors.comment . ' gui=bold'

" Special syntax
execute 'highlight phpSpecialChar guifg=' . g:syntaxColors.constant
execute 'highlight phpBacktick guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight phpBackslashSequences guifg=' . g:syntaxColors.constant
execute 'highlight phpBackslashDoubleQuote guifg=' . g:syntaxColors.constant
execute 'highlight phpBackslashSingleQuote guifg=' . g:syntaxColors.constant
execute 'highlight phpVarSelectorDeref guifg=' . g:syntaxColors.variable

" Error handling
execute 'highlight phpException guifg=' . g:syntaxColors.keyword
execute 'highlight phpTry guifg=' . g:syntaxColors.keyword
execute 'highlight phpCatch guifg=' . g:syntaxColors.keyword
execute 'highlight phpFinally guifg=' . g:syntaxColors.keyword
execute 'highlight phpError guifg=' . g:colors.ERROR

" HTML integration
execute 'highlight phpRegion guifg=' . g:colors.FG1
execute 'highlight phpOpenTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight phpCloseTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight phpEchoTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight phpEcho guifg=' . g:syntaxColors.keyword
execute 'highlight phpPrint guifg=' . g:syntaxColors.keyword

" Attributes and modifiers
execute 'highlight phpAttributes guifg=' . g:syntaxColors.attribute
execute 'highlight phpAttributeCasts guifg=' . g:syntaxColors.type
execute 'highlight phpModifier guifg=' . g:syntaxColors.modifier
execute 'highlight phpVisibility guifg=' . g:syntaxColors.modifier
execute 'highlight phpFinal guifg=' . g:syntaxColors.modifier
execute 'highlight phpAbstract guifg=' . g:syntaxColors.modifier
execute 'highlight phpStatic guifg=' . g:syntaxColors.modifier

" Modern PHP features
execute 'highlight phpEnumDeclaration guifg=' . g:syntaxColors.type
execute 'highlight phpEnumCase guifg=' . g:syntaxColors.constant
execute 'highlight phpMatchExpression guifg=' . g:syntaxColors.control
execute 'highlight phpNullsafeOperator guifg=' . g:syntaxColors.operator
execute 'highlight phpNamedArgument guifg=' . g:syntaxColors.parameter
execute 'highlight phpTypedProperty guifg=' . g:syntaxColors.property
execute 'highlight phpPromotedProperty guifg=' . g:syntaxColors.property
execute 'highlight phpUnionType guifg=' . g:syntaxColors.type
execute 'highlight phpIntersectionType guifg=' . g:syntaxColors.type
execute 'highlight phpMixed guifg=' . g:syntaxColors.type
execute 'highlight phpNever guifg=' . g:syntaxColors.type
