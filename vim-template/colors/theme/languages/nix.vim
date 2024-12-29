" Nix specific highlighting

" Basic syntax
execute 'highlight nixSimpleString guifg=' . g:colors.FG1
execute 'highlight nixString guifg=' . g:colors.FG1
execute 'highlight nixStringDelimiter guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight nixIdentifier guifg=' . g:syntaxColors.variable
execute 'highlight nixPath guifg=' . g:colors.INFO
execute 'highlight nixPathDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight nixHomePath guifg=' . g:colors.INFO
execute 'highlight nixSearchPath guifg=' . g:colors.INFO

" Attribute sets
execute 'highlight nixAttributeName guifg=' . g:syntaxColors.property
execute 'highlight nixAttributeDefinition guifg=' . g:syntaxColors.operator
execute 'highlight nixAttributeAssignment guifg=' . g:syntaxColors.operator
execute 'highlight nixInherit guifg=' . g:syntaxColors.keyword
execute 'highlight nixInheritAttributeScope guifg=' . g:syntaxColors.variable
execute 'highlight nixAttr guifg=' . g:syntaxColors.property
execute 'highlight nixAttrPath guifg=' . g:syntaxColors.property

" Functions and lambdas
execute 'highlight nixFunction guifg=' . g:syntaxColors.function
execute 'highlight nixFunctionCall guifg=' . g:syntaxColors.functionCall
execute 'highlight nixFunctionParam guifg=' . g:syntaxColors.parameter
execute 'highlight nixLambda guifg=' . g:syntaxColors.function
execute 'highlight nixArgument guifg=' . g:syntaxColors.parameter
execute 'highlight nixArgumentDefinition guifg=' . g:syntaxColors.parameter
execute 'highlight nixDefault guifg=' . g:syntaxColors.constant

" Derivations
execute 'highlight nixDerivation guifg=' . g:syntaxColors.keyword
execute 'highlight nixDrvName guifg=' . g:syntaxColors.variable
execute 'highlight nixDrvVersion guifg=' . g:syntaxColors.constant
execute 'highlight nixDrvBuild guifg=' . g:syntaxColors.function
execute 'highlight nixDrvOutput guifg=' . g:syntaxColors.property
execute 'highlight nixDrvSystem guifg=' . g:syntaxColors.constant
execute 'highlight nixDrvPlatform guifg=' . g:syntaxColors.constant

" Control flow
execute 'highlight nixIf guifg=' . g:syntaxColors.control
execute 'highlight nixThen guifg=' . g:syntaxColors.control
execute 'highlight nixElse guifg=' . g:syntaxColors.control
execute 'highlight nixAssert guifg=' . g:syntaxColors.keyword
execute 'highlight nixWith guifg=' . g:syntaxColors.keyword
execute 'highlight nixLet guifg=' . g:syntaxColors.keyword
execute 'highlight nixIn guifg=' . g:syntaxColors.keyword
execute 'highlight nixRec guifg=' . g:syntaxColors.keyword

" Operators
execute 'highlight nixOperator guifg=' . g:syntaxColors.operator
execute 'highlight nixBinaryOperator guifg=' . g:syntaxColors.operator
execute 'highlight nixUnaryOperator guifg=' . g:syntaxColors.operator
execute 'highlight nixUpdate guifg=' . g:syntaxColors.operator
execute 'highlight nixConcat guifg=' . g:syntaxColors.operator
execute 'highlight nixNot guifg=' . g:syntaxColors.operator

" String interpolation
execute 'highlight nixInterpolation guifg=' . g:syntaxColors.variable
execute 'highlight nixInterpolationDelimiter guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight nixInterpolationParam guifg=' . g:syntaxColors.variable
execute 'highlight nixStringParam guifg=' . g:syntaxColors.variable

" Constants and values
execute 'highlight nixBoolean guifg=' . g:syntaxColors.constant
execute 'highlight nixNull guifg=' . g:syntaxColors.constant
execute 'highlight nixFloat guifg=' . g:syntaxColors.constant
execute 'highlight nixInteger guifg=' . g:syntaxColors.constant
execute 'highlight nixURI guifg=' . g:colors.INFO

" Lists and sets
execute 'highlight nixList guifg=' . g:colors.FG1
execute 'highlight nixListElement guifg=' . g:colors.FG1
execute 'highlight nixSet guifg=' . g:colors.FG1
execute 'highlight nixSetElement guifg=' . g:colors.FG1
execute 'highlight nixBracket guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight nixBrace guifg=' . g:syntaxColors.punctuationBrace

" Comments
execute 'highlight nixComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight nixTodo guifg=' . g:syntaxColors.comment . ' gui=bold'

" Special syntax
execute 'highlight nixSpecial guifg=' . g:syntaxColors.constant
execute 'highlight nixEscape guifg=' . g:syntaxColors.constant
execute 'highlight nixShebang guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" Error handling
execute 'highlight nixInvalidStringEscape guifg=' . g:colors.ERROR
execute 'highlight nixInvalidInterpolation guifg=' . g:colors.ERROR
execute 'highlight nixInvalidAttributeName guifg=' . g:colors.ERROR
execute 'highlight nixSyntaxError guifg=' . g:colors.ERROR

" Builtins
execute 'highlight nixBuiltin guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixBuiltinAttribute guifg=' . g:syntaxColors.supportProperty
execute 'highlight nixBuiltinType guifg=' . g:syntaxColors.type
execute 'highlight nixFetchurl guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixFetchgit guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixFromFile guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixImport guifg=' . g:syntaxColors.controlImport
execute 'highlight nixRequire guifg=' . g:syntaxColors.controlImport

" Package management
execute 'highlight nixPackageName guifg=' . g:syntaxColors.variable
execute 'highlight nixPackageVersion guifg=' . g:syntaxColors.constant
execute 'highlight nixPackageAttr guifg=' . g:syntaxColors.property
execute 'highlight nixPackageDependency guifg=' . g:syntaxColors.variable
execute 'highlight nixPackageOrigin guifg=' . g:syntaxColors.constant
execute 'highlight nixPackagePlatform guifg=' . g:syntaxColors.constant
execute 'highlight nixPackageMaintainer guifg=' . g:syntaxColors.variable
execute 'highlight nixPackageLicense guifg=' . g:syntaxColors.constant

" Modern Nix features
execute 'highlight nixFlakeOutput guifg=' . g:syntaxColors.property
execute 'highlight nixFlakeInput guifg=' . g:syntaxColors.variable
execute 'highlight nixFlakeRef guifg=' . g:syntaxColors.constant
execute 'highlight nixFlakeLock guifg=' . g:syntaxColors.constant

" Additional error handling
execute 'highlight nixInvalidStringEscape guifg=' . g:colors.ERROR
execute 'highlight nixInvalidInterpolation guifg=' . g:colors.ERROR
execute 'highlight nixInvalidAttributeName guifg=' . g:colors.ERROR
execute 'highlight nixSyntaxError guifg=' . g:colors.ERROR

" Special functions
execute 'highlight nixBuiltin guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixBuiltinAttribute guifg=' . g:syntaxColors.supportProperty
execute 'highlight nixBuiltinType guifg=' . g:syntaxColors.type
execute 'highlight nixFetchurl guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixFetchgit guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixFromFile guifg=' . g:syntaxColors.supportFunction
execute 'highlight nixImport guifg=' . g:syntaxColors.controlImport
execute 'highlight nixRequire guifg=' . g:syntaxColors.controlImport
