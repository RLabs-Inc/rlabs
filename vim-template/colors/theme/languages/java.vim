" Java specific highlighting

" Basic syntax
execute 'highlight javaStatement guifg=' . g:syntax_colors.keyword
execute 'highlight javaStorageClass guifg=' . g:syntax_colors.storage
execute 'highlight javaModifier guifg=' . g:syntax_colors.modifier
execute 'highlight javaType guifg=' . g:syntax_colors.type
execute 'highlight javaOperator guifg=' . g:syntax_colors.operator
execute 'highlight javaAssert guifg=' . g:syntax_colors.control
execute 'highlight javaTypedef guifg=' . g:syntax_colors.type

" Classes and interfaces
execute 'highlight javaClassDecl guifg=' . g:syntax_colors.storage
execute 'highlight javaClassName guifg=' . g:syntax_colors.class
execute 'highlight javaInterfaceName guifg=' . g:syntax_colors.interface
execute 'highlight javaInterface guifg=' . g:syntax_colors.interface
execute 'highlight javaClassExtends guifg=' . g:syntax_colors.keyword
execute 'highlight javaInterfaceExtends guifg=' . g:syntax_colors.keyword
execute 'highlight javaImplements guifg=' . g:syntax_colors.keyword
execute 'highlight javaPackage guifg=' . g:syntax_colors.control_import
execute 'highlight javaImport guifg=' . g:syntax_colors.control_import

" Methods and constructors
execute 'highlight javaMethodDecl guifg=' . g:syntax_colors.function
execute 'highlight javaMethod guifg=' . g:syntax_colors.method
execute 'highlight javaConstructor guifg=' . g:syntax_colors.function
execute 'highlight javaFuncDef guifg=' . g:syntax_colors.function
execute 'highlight javaVarArg guifg=' . g:syntax_colors.parameter

" Variables and fields
execute 'highlight javaVarArg guifg=' . g:syntax_colors.parameter
execute 'highlight javaVariableDecl guifg=' . g:syntax_colors.variable_declaration
execute 'highlight javaField guifg=' . g:syntax_colors.property
execute 'highlight javaConstant guifg=' . g:syntax_colors.constant
execute 'highlight javaFinal guifg=' . g:syntax_colors.modifier
execute 'highlight javaStatic guifg=' . g:syntax_colors.modifier

" Generics and type parameters
execute 'highlight javaGeneric guifg=' . g:syntax_colors.type
execute 'highlight javaTypeParameter guifg=' . g:syntax_colors.type_parameter
execute 'highlight javaGenericBoundType guifg=' . g:syntax_colors.type
execute 'highlight javaGenericBoundKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight javaWildcard guifg=' . g:syntax_colors.operator
execute 'highlight javaTypedef guifg=' . g:syntax_colors.type

" Control flow
execute 'highlight javaConditional guifg=' . g:syntax_colors.control
execute 'highlight javaRepeat guifg=' . g:syntax_colors.control
execute 'highlight javaReturn guifg=' . g:syntax_colors.control_flow
execute 'highlight javaBreak guifg=' . g:syntax_colors.control
execute 'highlight javaContinue guifg=' . g:syntax_colors.control
execute 'highlight javaYield guifg=' . g:syntax_colors.control_flow
execute 'highlight javaThrow guifg=' . g:syntax_colors.control
execute 'highlight javaSynchronized guifg=' . g:syntax_colors.modifier

" Comments and documentation
execute 'highlight javaComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight javaLineComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight javaDocComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight javaTodo guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight javaDocTags guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight javaDocParam guifg=' . g:syntax_colors.parameter . ' gui=italic'
execute 'highlight javaDocSeeTag guifg=' . g:syntax_colors.comment . ' gui=italic'

" Literals and values
execute 'highlight javaString guifg=' . g:syntax_colors.string
execute 'highlight javaCharacter guifg=' . g:syntax_colors.string
execute 'highlight javaNumber guifg=' . g:syntax_colors.constant
execute 'highlight javaFloat guifg=' . g:syntax_colors.constant
execute 'highlight javaBoolean guifg=' . g:syntax_colors.constant
execute 'highlight javaNull guifg=' . g:syntax_colors.constant

" Error handling
execute 'highlight javaTry guifg=' . g:syntax_colors.control
execute 'highlight javaCatch guifg=' . g:syntax_colors.control
execute 'highlight javaFinally guifg=' . g:syntax_colors.control
execute 'highlight javaThrows guifg=' . g:syntax_colors.control
execute 'highlight javaException guifg=' . g:syntax_colors.type

" Annotations
execute 'highlight javaAnnotation guifg=' . g:syntax_colors.attribute
execute 'highlight javaAnnotationMember guifg=' . g:syntax_colors.property

" Operators and delimiters
execute 'highlight javaOperator guifg=' . g:syntax_colors.operator
execute 'highlight javaBracket guifg=' . g:syntax_colors.punctuation
execute 'highlight javaParen guifg=' . g:syntax_colors.punctuation
execute 'highlight javaBrace guifg=' . g:syntax_colors.punctuation
execute 'highlight javaComma guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight javaSemiColon guifg=' . g:syntax_colors.punctuation
execute 'highlight javaDot guifg=' . g:syntax_colors.punctuation

" Special syntax
execute 'highlight javaSpecialChar guifg=' . g:syntax_colors.string_escape
execute 'highlight javaFormat guifg=' . g:syntax_colors.string_escape
execute 'highlight javaLambda guifg=' . g:syntax_colors.function
execute 'highlight javaMethodReference guifg=' . g:syntax_colors.function

" Built-in classes and interfaces
execute 'highlight javaLangClass guifg=' . g:syntax_colors.type
execute 'highlight javaLangObject guifg=' . g:syntax_colors.type
execute 'highlight javaLangInterface guifg=' . g:syntax_colors.type
execute 'highlight javaUtilClass guifg=' . g:syntax_colors.type
execute 'highlight javaIoClass guifg=' . g:syntax_colors.type
execute 'highlight javaNetClass guifg=' . g:syntax_colors.type

" Modern Java features
execute 'highlight javaRecord guifg=' . g:syntax_colors.class
execute 'highlight javaRecordComponent guifg=' . g:syntax_colors.property
execute 'highlight javaModule guifg=' . g:syntax_colors.keyword
execute 'highlight javaRequires guifg=' . g:syntax_colors.keyword
execute 'highlight javaExports guifg=' . g:syntax_colors.keyword
execute 'highlight javaOpens guifg=' . g:syntax_colors.keyword
execute 'highlight javaProvides guifg=' . g:syntax_colors.keyword
execute 'highlight javaUses guifg=' . g:syntax_colors.keyword
execute 'highlight javaTextBlock guifg=' . g:syntax_colors.string
execute 'highlight javaVarKeyword guifg=' . g:syntax_colors.type
execute 'highlight javaSealedClass guifg=' . g:syntax_colors.keyword
execute 'highlight javaPermits guifg=' . g:syntax_colors.keyword
