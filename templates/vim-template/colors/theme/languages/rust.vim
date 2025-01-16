" Rust specific highlighting

" Basic syntax
execute 'highlight rustKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight rustStorage guifg=' . g:syntax_colors.storage
execute 'highlight rustOperator guifg=' . g:syntax_colors.operator
execute 'highlight rustFunction guifg=' . g:syntax_colors.function
execute 'highlight rustFuncName guifg=' . g:syntax_colors.function
execute 'highlight rustFuncCall guifg=' . g:syntax_colors.function_call
execute 'highlight rustIdentifier guifg=' . g:syntax_colors.variable

" Types and traits
execute 'highlight rustType guifg=' . g:syntax_colors.type
execute 'highlight rustTrait guifg=' . g:syntax_colors.type
execute 'highlight rustEnum guifg=' . g:syntax_colors.type
execute 'highlight rustStructure guifg=' . g:syntax_colors.class
execute 'highlight rustTypedef guifg=' . g:syntax_colors.type
execute 'highlight rustSelf guifg=' . g:syntax_colors.variable_readonly
execute 'highlight rustSigil guifg=' . g:syntax_colors.operator
execute 'highlight rustLifetime guifg=' . g:syntax_colors.storage

" Modules and paths
execute 'highlight rustModPath guifg=' . g:syntax_colors.type
execute 'highlight rustModPathSep guifg=' . g:syntax_colors.punctuation
execute 'highlight rustModule guifg=' . g:syntax_colors.type
execute 'highlight rustUse guifg=' . g:syntax_colors.control_import
execute 'highlight rustPubScope guifg=' . g:syntax_colors.modifier
execute 'highlight rustSuper guifg=' . g:syntax_colors.variable_readonly
execute 'highlight rustCrate guifg=' . g:syntax_colors.variable_readonly

" Attributes and macros
execute 'highlight rustAttribute guifg=' . g:syntax_colors.attribute
execute 'highlight rustDerive guifg=' . g:syntax_colors.attribute
execute 'highlight rustCommentLineDoc guifg=' . g:syntax_colors.comment
execute 'highlight rustMacro guifg=' . g:syntax_colors.function
execute 'highlight rustAssert guifg=' . g:syntax_colors.function
execute 'highlight rustPanic guifg=' . g:syntax_colors.function

" Control flow
execute 'highlight rustConditional guifg=' . g:syntax_colors.control
execute 'highlight rustRepeat guifg=' . g:syntax_colors.control
execute 'highlight rustReturn guifg=' . g:syntax_colors.control_flow
execute 'highlight rustAsync guifg=' . g:syntax_colors.keyword
execute 'highlight rustAwait guifg=' . g:syntax_colors.keyword
execute 'highlight rustYield guifg=' . g:syntax_colors.control_flow

" Memory management
execute 'highlight rustOwnership guifg=' . g:syntax_colors.storage
execute 'highlight rustBorrow guifg=' . g:syntax_colors.storage
execute 'highlight rustMutable guifg=' . g:syntax_colors.modifier
execute 'highlight rustMove guifg=' . g:syntax_colors.storage
execute 'highlight rustBoxNew guifg=' . g:syntax_colors.function
execute 'highlight rustBoxHeap guifg=' . g:syntax_colors.type

" Constants and literals
execute 'highlight rustBoolean guifg=' . g:syntax_colors.constant
execute 'highlight rustNumber guifg=' . g:syntax_colors.constant
execute 'highlight rustFloat guifg=' . g:syntax_colors.constant
execute 'highlight rustString guifg=' . g:colors.fg1
execute 'highlight rustStringDelimiter guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight rustCharacter guifg=' . g:syntax_colors.constant
execute 'highlight rustConstant guifg=' . g:syntax_colors.constant

" Error handling
execute 'highlight rustResult guifg=' . g:syntax_colors.type
execute 'highlight rustOption guifg=' . g:syntax_colors.type
execute 'highlight rustTry guifg=' . g:syntax_colors.control_flow
execute 'highlight rustMatch guifg=' . g:syntax_colors.control
execute 'highlight rustMatchArm guifg=' . g:syntax_colors.control

" Unsafe code
execute 'highlight rustUnsafe guifg=' . g:syntax_colors.keyword . ' gui=bold'
execute 'highlight rustUnion guifg=' . g:syntax_colors.type

" FFI
execute 'highlight rustExtern guifg=' . g:syntax_colors.keyword
execute 'highlight rustExternCrate guifg=' . g:syntax_colors.keyword
execute 'highlight rustForeignName guifg=' . g:syntax_colors.function

" Testing
execute 'highlight rustTest guifg=' . g:syntax_colors.attribute
execute 'highlight rustBench guifg=' . g:syntax_colors.attribute
execute 'highlight rustTestFn guifg=' . g:syntax_colors.function

" Punctuation
execute 'highlight rustComma guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight rustSemiColon guifg=' . g:syntax_colors.punctuation
execute 'highlight rustBracket guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight rustBrace guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight rustParen guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight rustArrow guifg=' . g:syntax_colors.punctuation
execute 'highlight rustQuestionMark guifg=' . g:syntax_colors.punctuation

" Special syntax
execute 'highlight rustLabel guifg=' . g:syntax_colors.control
execute 'highlight rustLoop guifg=' . g:syntax_colors.control
execute 'highlight rustMatch guifg=' . g:syntax_colors.control
execute 'highlight rustDefault guifg=' . g:syntax_colors.control
execute 'highlight rustUnion guifg=' . g:syntax_colors.type
execute 'highlight rustExternCrate guifg=' . g:syntax_colors.control_import
execute 'highlight rustStatic guifg=' . g:syntax_colors.storage
execute 'highlight rustReservedKeyword guifg=' . g:syntax_colors.keyword . ' gui=strikethrough'
