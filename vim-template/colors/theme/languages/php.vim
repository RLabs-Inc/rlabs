" PHP specific highlighting

" Basic syntax
execute 'highlight phpKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight phpStatement guifg=' . g:syntax_colors.keyword
execute 'highlight phpType guifg=' . g:syntax_colors.type
execute 'highlight phpOperator guifg=' . g:syntax_colors.operator
execute 'highlight phpVarSelector guifg=' . g:syntax_colors.variable
execute 'highlight phpIdentifier guifg=' . g:syntax_colors.variable
execute 'highlight phpDefine guifg=' . g:syntax_colors.keyword

" Classes and interfaces
execute 'highlight phpClass guifg=' . g:syntax_colors.class
execute 'highlight phpClassName guifg=' . g:syntax_colors.class
execute 'highlight phpInterface guifg=' . g:syntax_colors.type
execute 'highlight phpInterfaceName guifg=' . g:syntax_colors.type
execute 'highlight phpTrait guifg=' . g:syntax_colors.type
execute 'highlight phpTraitName guifg=' . g:syntax_colors.type
execute 'highlight phpExtends guifg=' . g:syntax_colors.keyword
execute 'highlight phpImplements guifg=' . g:syntax_colors.keyword
execute 'highlight phpUse guifg=' . g:syntax_colors.control_import
execute 'highlight phpNamespace guifg=' . g:syntax_colors.control_import

" Methods and functions
execute 'highlight phpFunction guifg=' . g:syntax_colors.function
execute 'highlight phpFunction_call guifg=' . g:syntax_colors.function_call
execute 'highlight phpMethod guifg=' . g:syntax_colors.method
execute 'highlight phpMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight phpStaticCall guifg=' . g:syntax_colors.function_call
execute 'highlight phpMagicMethods guifg=' . g:syntax_colors.method
execute 'highlight phpConstructor guifg=' . g:syntax_colors.function

" Variables and properties
execute 'highlight phpVariable guifg=' . g:syntax_colors.variable
execute 'highlight phpVarSelector guifg=' . g:syntax_colors.variable
execute 'highlight phpMemberSelector guifg=' . g:syntax_colors.punctuation
execute 'highlight phpProperty guifg=' . g:syntax_colors.property
execute 'highlight phpStaticVariable guifg=' . g:syntax_colors.variable_readonly
execute 'highlight phpGlobal guifg=' . g:syntax_colors.variable_readonly
execute 'highlight phpSuperglobal guifg=' . g:syntax_colors.variable_readonly
execute 'highlight phpThis guifg=' . g:syntax_colors.variable_readonly
execute 'highlight phpMagicConstants guifg=' . g:syntax_colors.constant

" Control flow
execute 'highlight phpConditional guifg=' . g:syntax_colors.control
execute 'highlight phpRepeat guifg=' . g:syntax_colors.control
execute 'highlight phpLabel guifg=' . g:syntax_colors.control
execute 'highlight phpReturn guifg=' . g:syntax_colors.control_flow
execute 'highlight phpYield guifg=' . g:syntax_colors.control_flow
execute 'highlight phpBreak guifg=' . g:syntax_colors.control_flow
execute 'highlight phpContinue guifg=' . g:syntax_colors.control_flow
execute 'highlight phpGoto guifg=' . g:syntax_colors.control_flow

" Strings and heredoc
execute 'highlight phpString guifg=' . g:colors.fg1
execute 'highlight phpStringDouble guifg=' . g:colors.fg1
execute 'highlight phpStringSingle guifg=' . g:colors.fg1
execute 'highlight phpStringDelimiter guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight phpHereDoc guifg=' . g:colors.fg1
execute 'highlight phpHereDocDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight phpNowDoc guifg=' . g:colors.fg1
execute 'highlight phpNowDocDelimiter guifg=' . g:syntax_colors.punctuation

" Numbers and constants
execute 'highlight phpNumber guifg=' . g:syntax_colors.constant
execute 'highlight phpFloat guifg=' . g:syntax_colors.constant
execute 'highlight phpBoolean guifg=' . g:syntax_colors.constant
execute 'highlight phpNull guifg=' . g:syntax_colors.constant
execute 'highlight phpConstant guifg=' . g:syntax_colors.constant

" Comments and documentation
execute 'highlight phpComment guifg=' . g:syntax_colors.comment 
execute 'highlight phpDocComment guifg=' . g:syntax_colors.comment
execute 'highlight phpDocTags guifg=' . g:syntax_colors.keyword
execute 'highlight phpDocParam guifg=' . g:syntax_colors.parameter 
execute 'highlight phpDocIdentifier guifg=' . g:syntax_colors.variable
execute 'highlight phpTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Special syntax
execute 'highlight phpSpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight phpBacktick guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight phpBackslashSequences guifg=' . g:syntax_colors.constant
execute 'highlight phpBackslashDoubleQuote guifg=' . g:syntax_colors.constant
execute 'highlight phpBackslashSingleQuote guifg=' . g:syntax_colors.constant
execute 'highlight phpVarSelectorDeref guifg=' . g:syntax_colors.variable

" Error handling
execute 'highlight phpException guifg=' . g:syntax_colors.keyword
execute 'highlight phpTry guifg=' . g:syntax_colors.keyword
execute 'highlight phpCatch guifg=' . g:syntax_colors.keyword
execute 'highlight phpFinally guifg=' . g:syntax_colors.keyword
execute 'highlight phpError guifg=' . g:colors.error

" HTML integration
execute 'highlight phpRegion guifg=' . g:colors.fg1
execute 'highlight phpOpenTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight phpCloseTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight phpEchoTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight phpEcho guifg=' . g:syntax_colors.keyword
execute 'highlight phpPrint guifg=' . g:syntax_colors.keyword

" Attributes and modifiers
execute 'highlight phpAttributes guifg=' . g:syntax_colors.attribute
execute 'highlight phpAttributeCasts guifg=' . g:syntax_colors.type
execute 'highlight phpModifier guifg=' . g:syntax_colors.modifier
execute 'highlight phpVisibility guifg=' . g:syntax_colors.modifier
execute 'highlight phpFinal guifg=' . g:syntax_colors.modifier
execute 'highlight phpAbstract guifg=' . g:syntax_colors.modifier
execute 'highlight phpStatic guifg=' . g:syntax_colors.modifier

" Modern PHP features
execute 'highlight phpEnumDeclaration guifg=' . g:syntax_colors.type
execute 'highlight phpEnumCase guifg=' . g:syntax_colors.constant
execute 'highlight phpMatchExpression guifg=' . g:syntax_colors.control
execute 'highlight phpNullsafeOperator guifg=' . g:syntax_colors.operator
execute 'highlight phpNamedArgument guifg=' . g:syntax_colors.parameter
execute 'highlight phpTypedProperty guifg=' . g:syntax_colors.property
execute 'highlight phpPromotedProperty guifg=' . g:syntax_colors.property
execute 'highlight phpUnionType guifg=' . g:syntax_colors.type
execute 'highlight phpIntersectionType guifg=' . g:syntax_colors.type
execute 'highlight phpMixed guifg=' . g:syntax_colors.type
execute 'highlight phpNever guifg=' . g:syntax_colors.type
