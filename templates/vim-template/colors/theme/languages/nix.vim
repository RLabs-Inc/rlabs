" Nix specific highlighting

" Basic syntax
execute 'highlight nixSimpleString guifg=' . g:colors.fg1
execute 'highlight nixString guifg=' . g:colors.fg1
execute 'highlight nixStringDelimiter guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight nixIdentifier guifg=' . g:syntax_colors.variable
execute 'highlight nixPath guifg=' . g:colors.info
execute 'highlight nixPathDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight nixHomePath guifg=' . g:colors.info
execute 'highlight nixSearchPath guifg=' . g:colors.info

" Attribute sets
execute 'highlight nixAttributeName guifg=' . g:syntax_colors.property
execute 'highlight nixAttributeDefinition guifg=' . g:syntax_colors.operator
execute 'highlight nixAttributeAssignment guifg=' . g:syntax_colors.operator
execute 'highlight nixInherit guifg=' . g:syntax_colors.keyword
execute 'highlight nixInheritAttributeScope guifg=' . g:syntax_colors.variable
execute 'highlight nixAttr guifg=' . g:syntax_colors.property
execute 'highlight nixAttrPath guifg=' . g:syntax_colors.property

" Functions and lambdas
execute 'highlight nixFunction guifg=' . g:syntax_colors.function
execute 'highlight nixFunction_call guifg=' . g:syntax_colors.function_call
execute 'highlight nixFunctionParam guifg=' . g:syntax_colors.parameter
execute 'highlight nixLambda guifg=' . g:syntax_colors.function
execute 'highlight nixArgument guifg=' . g:syntax_colors.parameter
execute 'highlight nixArgumentDefinition guifg=' . g:syntax_colors.parameter
execute 'highlight nixDefault guifg=' . g:syntax_colors.constant

" Derivations
execute 'highlight nixDerivation guifg=' . g:syntax_colors.keyword
execute 'highlight nixDrvName guifg=' . g:syntax_colors.variable
execute 'highlight nixDrvVersion guifg=' . g:syntax_colors.constant
execute 'highlight nixDrvBuild guifg=' . g:syntax_colors.function
execute 'highlight nixDrvOutput guifg=' . g:syntax_colors.property
execute 'highlight nixDrvSystem guifg=' . g:syntax_colors.constant
execute 'highlight nixDrvPlatform guifg=' . g:syntax_colors.constant

" Control flow
execute 'highlight nixIf guifg=' . g:syntax_colors.control
execute 'highlight nixThen guifg=' . g:syntax_colors.control
execute 'highlight nixElse guifg=' . g:syntax_colors.control
execute 'highlight nixAssert guifg=' . g:syntax_colors.keyword
execute 'highlight nixWith guifg=' . g:syntax_colors.keyword
execute 'highlight nixLet guifg=' . g:syntax_colors.keyword
execute 'highlight nixIn guifg=' . g:syntax_colors.keyword
execute 'highlight nixRec guifg=' . g:syntax_colors.keyword

" Operators
execute 'highlight nixOperator guifg=' . g:syntax_colors.operator
execute 'highlight nixBinaryOperator guifg=' . g:syntax_colors.operator
execute 'highlight nixUnaryOperator guifg=' . g:syntax_colors.operator
execute 'highlight nixUpdate guifg=' . g:syntax_colors.operator
execute 'highlight nixConcat guifg=' . g:syntax_colors.operator
execute 'highlight nixNot guifg=' . g:syntax_colors.operator

" String interpolation
execute 'highlight nixInterpolation guifg=' . g:syntax_colors.variable
execute 'highlight nixInterpolationDelimiter guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight nixInterpolationParam guifg=' . g:syntax_colors.variable
execute 'highlight nixStringParam guifg=' . g:syntax_colors.variable

" Constants and values
execute 'highlight nixBoolean guifg=' . g:syntax_colors.constant
execute 'highlight nixNull guifg=' . g:syntax_colors.constant
execute 'highlight nixFloat guifg=' . g:syntax_colors.constant
execute 'highlight nixInteger guifg=' . g:syntax_colors.constant
execute 'highlight nixURI guifg=' . g:colors.info

" Lists and sets
execute 'highlight nixList guifg=' . g:colors.fg1
execute 'highlight nixListElement guifg=' . g:colors.fg1
execute 'highlight nixSet guifg=' . g:colors.fg1
execute 'highlight nixSetElement guifg=' . g:colors.fg1
execute 'highlight nixBracket guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight nixBrace guifg=' . g:syntax_colors.punctuation_brace

" Comments
execute 'highlight nixComment guifg=' . g:syntax_colors.comment 
execute 'highlight nixTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Special syntax
execute 'highlight nixSpecial guifg=' . g:syntax_colors.constant
execute 'highlight nixEscape guifg=' . g:syntax_colors.constant
execute 'highlight nixShebang guifg=' . g:syntax_colors.comment 

" Error handling
execute 'highlight nixInvalidStringEscape guifg=' . g:colors.error
execute 'highlight nixInvalidInterpolation guifg=' . g:colors.error
execute 'highlight nixInvalidAttributeName guifg=' . g:colors.error
execute 'highlight nixSyntaxError guifg=' . g:colors.error

" Builtins
execute 'highlight nixBuiltin guifg=' . g:syntax_colors.support_function
execute 'highlight nixBuiltinAttribute guifg=' . g:syntax_colors.support_property
execute 'highlight nixBuiltinType guifg=' . g:syntax_colors.type
execute 'highlight nixFetchurl guifg=' . g:syntax_colors.support_function
execute 'highlight nixFetchgit guifg=' . g:syntax_colors.support_function
execute 'highlight nixFromFile guifg=' . g:syntax_colors.support_function
execute 'highlight nixImport guifg=' . g:syntax_colors.control_import
execute 'highlight nixRequire guifg=' . g:syntax_colors.control_import

" Package management
execute 'highlight nixPackageName guifg=' . g:syntax_colors.variable
execute 'highlight nixPackageVersion guifg=' . g:syntax_colors.constant
execute 'highlight nixPackageAttr guifg=' . g:syntax_colors.property
execute 'highlight nixPackageDependency guifg=' . g:syntax_colors.variable
execute 'highlight nixPackageOrigin guifg=' . g:syntax_colors.constant
execute 'highlight nixPackagePlatform guifg=' . g:syntax_colors.constant
execute 'highlight nixPackageMaintainer guifg=' . g:syntax_colors.variable
execute 'highlight nixPackageLicense guifg=' . g:syntax_colors.constant

" Modern Nix features
execute 'highlight nixFlakeOutput guifg=' . g:syntax_colors.property
execute 'highlight nixFlakeInput guifg=' . g:syntax_colors.variable
execute 'highlight nixFlakeRef guifg=' . g:syntax_colors.constant
execute 'highlight nixFlakeLock guifg=' . g:syntax_colors.constant

" Additional error handling
execute 'highlight nixInvalidStringEscape guifg=' . g:colors.error
execute 'highlight nixInvalidInterpolation guifg=' . g:colors.error
execute 'highlight nixInvalidAttributeName guifg=' . g:colors.error
execute 'highlight nixSyntaxError guifg=' . g:colors.error

" Special functions
execute 'highlight nixBuiltin guifg=' . g:syntax_colors.support_function
execute 'highlight nixBuiltinAttribute guifg=' . g:syntax_colors.support_property
execute 'highlight nixBuiltinType guifg=' . g:syntax_colors.type
execute 'highlight nixFetchurl guifg=' . g:syntax_colors.support_function
execute 'highlight nixFetchgit guifg=' . g:syntax_colors.support_function
execute 'highlight nixFromFile guifg=' . g:syntax_colors.support_function
execute 'highlight nixImport guifg=' . g:syntax_colors.control_import
execute 'highlight nixRequire guifg=' . g:syntax_colors.control_import
