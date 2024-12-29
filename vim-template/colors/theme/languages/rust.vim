" Rust specific highlighting

" Basic syntax
execute 'highlight rustKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight rustStorage guifg=' . g:syntaxColors.storage
execute 'highlight rustOperator guifg=' . g:syntaxColors.operator
execute 'highlight rustFunction guifg=' . g:syntaxColors.function
execute 'highlight rustFuncName guifg=' . g:syntaxColors.function
execute 'highlight rustFuncCall guifg=' . g:syntaxColors.functionCall
execute 'highlight rustIdentifier guifg=' . g:syntaxColors.variable

" Types and traits
execute 'highlight rustType guifg=' . g:syntaxColors.type
execute 'highlight rustTrait guifg=' . g:syntaxColors.type
execute 'highlight rustEnum guifg=' . g:syntaxColors.type
execute 'highlight rustStructure guifg=' . g:syntaxColors.class
execute 'highlight rustTypedef guifg=' . g:syntaxColors.type
execute 'highlight rustSelf guifg=' . g:syntaxColors.variableReadonly
execute 'highlight rustSigil guifg=' . g:syntaxColors.operator
execute 'highlight rustLifetime guifg=' . g:syntaxColors.storage . ' gui=italic'

" Modules and paths
execute 'highlight rustModPath guifg=' . g:syntaxColors.type
execute 'highlight rustModPathSep guifg=' . g:syntaxColors.punctuation
execute 'highlight rustModule guifg=' . g:syntaxColors.type
execute 'highlight rustUse guifg=' . g:syntaxColors.controlImport
execute 'highlight rustPubScope guifg=' . g:syntaxColors.modifier
execute 'highlight rustSuper guifg=' . g:syntaxColors.variableReadonly
execute 'highlight rustCrate guifg=' . g:syntaxColors.variableReadonly

" Attributes and macros
execute 'highlight rustAttribute guifg=' . g:syntaxColors.attribute
execute 'highlight rustDerive guifg=' . g:syntaxColors.attribute
execute 'highlight rustCommentLineDoc guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight rustMacro guifg=' . g:syntaxColors.function
execute 'highlight rustAssert guifg=' . g:syntaxColors.function
execute 'highlight rustPanic guifg=' . g:syntaxColors.function

" Control flow
execute 'highlight rustConditional guifg=' . g:syntaxColors.control
execute 'highlight rustRepeat guifg=' . g:syntaxColors.control
execute 'highlight rustReturn guifg=' . g:syntaxColors.controlFlow
execute 'highlight rustAsync guifg=' . g:syntaxColors.keyword
execute 'highlight rustAwait guifg=' . g:syntaxColors.keyword
execute 'highlight rustYield guifg=' . g:syntaxColors.controlFlow

" Memory management
execute 'highlight rustOwnership guifg=' . g:syntaxColors.storage
execute 'highlight rustBorrow guifg=' . g:syntaxColors.storage
execute 'highlight rustMutable guifg=' . g:syntaxColors.modifier
execute 'highlight rustMove guifg=' . g:syntaxColors.storage
execute 'highlight rustBoxNew guifg=' . g:syntaxColors.function
execute 'highlight rustBoxHeap guifg=' . g:syntaxColors.type

" Constants and literals
execute 'highlight rustBoolean guifg=' . g:syntaxColors.constant
execute 'highlight rustNumber guifg=' . g:syntaxColors.constant
execute 'highlight rustFloat guifg=' . g:syntaxColors.constant
execute 'highlight rustString guifg=' . g:colors.FG1
execute 'highlight rustStringDelimiter guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight rustCharacter guifg=' . g:syntaxColors.constant
execute 'highlight rustConstant guifg=' . g:syntaxColors.constant

" Error handling
execute 'highlight rustResult guifg=' . g:syntaxColors.type
execute 'highlight rustOption guifg=' . g:syntaxColors.type
execute 'highlight rustTry guifg=' . g:syntaxColors.controlFlow
execute 'highlight rustMatch guifg=' . g:syntaxColors.control
execute 'highlight rustMatchArm guifg=' . g:syntaxColors.control

" Unsafe code
execute 'highlight rustUnsafe guifg=' . g:syntaxColors.keyword . ' gui=bold'
execute 'highlight rustUnion guifg=' . g:syntaxColors.type

" FFI
execute 'highlight rustExtern guifg=' . g:syntaxColors.keyword
execute 'highlight rustExternCrate guifg=' . g:syntaxColors.keyword
execute 'highlight rustForeignName guifg=' . g:syntaxColors.function

" Testing
execute 'highlight rustTest guifg=' . g:syntaxColors.attribute
execute 'highlight rustBench guifg=' . g:syntaxColors.attribute
execute 'highlight rustTestFn guifg=' . g:syntaxColors.function

" Punctuation
execute 'highlight rustComma guifg=' . g:syntaxColors.punctuationComma
execute 'highlight rustSemiColon guifg=' . g:syntaxColors.punctuation
execute 'highlight rustBracket guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight rustBrace guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight rustParen guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight rustArrow guifg=' . g:syntaxColors.punctuation
execute 'highlight rustQuestionMark guifg=' . g:syntaxColors.punctuation

" Special syntax
execute 'highlight rustLabel guifg=' . g:syntax_colors.control
execute 'highlight rustLoop guifg=' . g:syntax_colors.control
execute 'highlight rustMatch guifg=' . g:syntax_colors.control
execute 'highlight rustDefault guifg=' . g:syntax_colors.control
execute 'highlight rustUnion guifg=' . g:syntax_colors.type
execute 'highlight rustExternCrate guifg=' . g:syntax_colors.control_import
execute 'highlight rustStatic guifg=' . g:syntax_colors.storage
execute 'highlight rustReservedKeyword guifg=' . g:syntax_colors.keyword . ' gui=strikethrough'
