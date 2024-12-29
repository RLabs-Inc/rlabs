" JavaScript/TypeScript specific highlighting

" Basic syntax
execute 'highlight jsGlobalObjects guifg=' . g:syntaxColors.supportVariable
execute 'highlight jsGlobalNodeObjects guifg=' . g:syntaxColors.supportVariable
execute 'highlight jsThis guifg=' . g:syntaxColors.variableReadonly
execute 'highlight jsSuper guifg=' . g:syntaxColors.variableReadonly
execute 'highlight jsPrototype guifg=' . g:syntaxColors.variableReadonly
execute 'highlight jsNull guifg=' . g:syntaxColors.constant
execute 'highlight jsUndefined guifg=' . g:syntaxColors.constant

" Variables and declarations
execute 'highlight jsStorageClass guifg=' . g:syntaxColors.storage
execute 'highlight jsVariableDef guifg=' . g:syntaxColors.variableDeclaration
execute 'highlight jsDestructuringBlock guifg=' . g:syntaxColors.variable
execute 'highlight jsDestructuringArray guifg=' . g:syntaxColors.variable
execute 'highlight jsDestructuringPropertyValue guifg=' . g:syntaxColors.variable
execute 'highlight jsSpreadExpression guifg=' . g:syntaxColors.variable
execute 'highlight jsRestOperator guifg=' . g:syntaxColors.operator

" Functions and methods
execute 'highlight jsFuncArgs guifg=' . g:syntaxColors.parameter
execute 'highlight jsFuncName guifg=' . g:syntaxColors.function
execute 'highlight jsFuncCall guifg=' . g:syntaxColors.functionCall
execute 'highlight jsArrowFunction guifg=' . g:syntaxColors.function
execute 'highlight jsFunction guifg=' . g:syntaxColors.storage
execute 'highlight jsGenerator guifg=' . g:syntaxColors.function
execute 'highlight jsMethodType guifg=' . g:syntaxColors.keyword
execute 'highlight jsClassMethodType guifg=' . g:syntaxColors.keyword

" Classes and objects
execute 'highlight jsClassDefinition guifg=' . g:syntaxColors.class
execute 'highlight jsClassKeyword guifg=' . g:syntaxColors.storage
execute 'highlight jsExtendsKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight jsClassFuncName guifg=' . g:syntaxColors.function
execute 'highlight jsClassProperty guifg=' . g:syntaxColors.propertyDeclaration
execute 'highlight jsClassBlock guifg=' . g:colors.FG1
execute 'highlight jsObjectKey guifg=' . g:syntaxColors.property
execute 'highlight jsObjectValue guifg=' . g:colors.FG1
execute 'highlight jsObjectColon guifg=' . g:syntaxColors.punctuation
execute 'highlight jsObjectMethodType guifg=' . g:syntaxColors.function

" Control flow
execute 'highlight jsIfElseBlock guifg=' . g:colors.FG1
execute 'highlight jsConditional guifg=' . g:syntaxColors.control
execute 'highlight jsRepeat guifg=' . g:syntaxColors.control
execute 'highlight jsReturn guifg=' . g:syntaxColors.controlFlow
execute 'highlight jsStatement guifg=' . g:syntaxColors.keyword
execute 'highlight jsException guifg=' . g:syntaxColors.keyword
execute 'highlight jsTry guifg=' . g:syntaxColors.keyword
execute 'highlight jsCatch guifg=' . g:syntaxColors.keyword
execute 'highlight jsFinally guifg=' . g:syntaxColors.keyword
execute 'highlight jsAsyncKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight jsAwaitKeyword guifg=' . g:syntaxColors.keyword

" Modules
execute 'highlight jsImport guifg=' . g:syntaxColors.controlImport
execute 'highlight jsExport guifg=' . g:syntaxColors.controlImport
execute 'highlight jsModuleKeyword guifg=' . g:syntaxColors.controlImport
execute 'highlight jsFrom guifg=' . g:syntaxColors.controlImport
execute 'highlight jsModuleAs guifg=' . g:syntaxColors.controlImport
execute 'highlight jsModuleAsterisk guifg=' . g:syntaxColors.operator

" Literals and values
execute 'highlight jsString guifg=' . g:colors.FG1
execute 'highlight jsTemplateString guifg=' . g:colors.FG1
execute 'highlight jsTemplateExpression guifg=' . g:syntaxColors.variable
execute 'highlight jsTemplateBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsRegexpString guifg=' . g:syntaxColors.string
execute 'highlight jsRegexpBoundary guifg=' . g:syntaxColors.string
execute 'highlight jsRegexpQuantifier guifg=' . g:syntaxColors.constant
execute 'highlight jsRegexpOr guifg=' . g:syntaxColors.operator
execute 'highlight jsRegexpMod guifg=' . g:syntaxColors.operator
execute 'highlight jsRegexpGroup guifg=' . g:syntaxColors.string
execute 'highlight jsNumber guifg=' . g:syntaxColors.constant
execute 'highlight jsFloat guifg=' . g:syntaxColors.constant
execute 'highlight jsBoolean guifg=' . g:syntaxColors.constant

" TypeScript specific
execute 'highlight typescriptBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight typescriptParens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight typescriptEndColons guifg=' . g:syntaxColors.punctuation
execute 'highlight typescriptOperator guifg=' . g:syntaxColors.operator
execute 'highlight typescriptBinaryOp guifg=' . g:syntaxColors.operator
execute 'highlight typescriptAssign guifg=' . g:syntaxColors.operator
execute 'highlight typescriptMember guifg=' . g:syntaxColors.property
execute 'highlight typescriptDotNotation guifg=' . g:syntaxColors.punctuation
execute 'highlight typescriptLogicSymbols guifg=' . g:syntaxColors.operator
execute 'highlight typescriptGlobal guifg=' . g:syntaxColors.supportVariable
execute 'highlight typescriptTestGlobal guifg=' . g:syntaxColors.supportVariable
execute 'highlight typescriptNodeGlobal guifg=' . g:syntaxColors.supportVariable
execute 'highlight typescriptTypeReference guifg=' . g:syntaxColors.type
execute 'highlight typescriptPredefinedType guifg=' . g:syntaxColors.type
execute 'highlight typescriptTemplateSB guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight typescriptTypeParameter guifg=' . g:syntaxColors.typeParameter
execute 'highlight typescriptInterfaceName guifg=' . g:syntaxColors.type
execute 'highlight typescriptEnum guifg=' . g:syntaxColors.type
execute 'highlight typescriptClassHeritage guifg=' . g:syntaxColors.class
execute 'highlight typescriptFuncTypeArrow guifg=' . g:syntaxColors.operator
execute 'highlight typescriptCall guifg=' . g:syntaxColors.variable
execute 'highlight typescriptBOMWindowProp guifg=' . g:syntaxColors.supportProperty
execute 'highlight typescriptHeadersMethod guifg=' . g:syntaxColors.supportMethod
execute 'highlight typescriptDOMStorageProp guifg=' . g:syntaxColors.supportProperty
execute 'highlight typescriptPaymentMethod guifg=' . g:syntaxColors.supportMethod
execute 'highlight typescriptES6SetProp guifg=' . g:syntaxColors.supportProperty
execute 'highlight typescriptServiceWorkerProp guifg=' . g:syntaxColors.supportProperty
execute 'highlight typescriptDOMFormProp guifg=' . g:syntaxColors.supportProperty
execute 'highlight typescriptBOMNavigatorProp guifg=' . g:syntaxColors.supportProperty
execute 'highlight typescriptDOMDocProp guifg=' . g:syntaxColors.supportProperty
execute 'highlight typescriptAjaxMethod guifg=' . g:syntaxColors.supportMethod

" JSX/TSX specific
execute 'highlight jsxTagName guifg=' . g:syntaxColors.tag
execute 'highlight jsxComponentName guifg=' . g:syntaxColors.class
execute 'highlight jsxAttrib guifg=' . g:syntaxColors.attribute
execute 'highlight jsxEqual guifg=' . g:syntaxColors.operator
execute 'highlight jsxString guifg=' . g:colors.FG1
execute 'highlight jsxCloseString guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight jsxOpenPunct guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight jsxClosePunct guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight jsxBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsxExpressionBlock guifg=' . g:colors.FG1
