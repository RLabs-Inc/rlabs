" JavaScript/TypeScript specific highlighting

" Basic syntax
execute 'highlight jsGlobalObjects guifg=' . g:syntax_colors.support_variable
execute 'highlight jsGlobalNodeObjects guifg=' . g:syntax_colors.support_variable
execute 'highlight jsThis guifg=' . g:syntax_colors.variable_readonly
execute 'highlight jsSuper guifg=' . g:syntax_colors.variable_readonly
execute 'highlight jsPrototype guifg=' . g:syntax_colors.variable_readonly
execute 'highlight jsNull guifg=' . g:syntax_colors.constant
execute 'highlight jsUndefined guifg=' . g:syntax_colors.constant

" Variables and declarations
execute 'highlight jsStorageClass guifg=' . g:syntax_colors.storage
execute 'highlight jsVariable_def guifg=' . g:syntax_colors.variable_declaration
execute 'highlight jsDestructuringBlock guifg=' . g:syntax_colors.variable
execute 'highlight jsDestructuringArray guifg=' . g:syntax_colors.variable
execute 'highlight jsDestructuringPropertyValue guifg=' . g:syntax_colors.variable
execute 'highlight jsSpreadExpression guifg=' . g:syntax_colors.variable
execute 'highlight jsRestOperator guifg=' . g:syntax_colors.operator

" Functions and methods
execute 'highlight jsFuncArgs guifg=' . g:syntax_colors.parameter
execute 'highlight jsFuncName guifg=' . g:syntax_colors.function
execute 'highlight jsFuncCall guifg=' . g:syntax_colors.function_call
execute 'highlight jsArrowFunction guifg=' . g:syntax_colors.function
execute 'highlight jsFunction guifg=' . g:syntax_colors.storage
execute 'highlight jsGenerator guifg=' . g:syntax_colors.function
execute 'highlight jsMethodType guifg=' . g:syntax_colors.type_parameter
execute 'highlight jsClassMethodType guifg=' . g:syntax_colors.type_parameter

" Classes and objects
execute 'highlight jsClassDefinition guifg=' . g:syntax_colors.class
execute 'highlight jsClassKeyword guifg=' . g:syntax_colors.storage
execute 'highlight jsExtendsKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight jsClassFuncName guifg=' . g:syntax_colors.function
execute 'highlight jsClassProperty guifg=' . g:syntax_colors.property_declaration
execute 'highlight jsClassBlock guifg=' . g:colors.fg1
execute 'highlight jsObjectKey guifg=' . g:syntax_colors.property
execute 'highlight jsObjectValue guifg=' . g:colors.fg1
execute 'highlight jsObjectColon guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight jsObjectMethodType guifg=' . g:syntax_colors.function

" Control flow
execute 'highlight jsIfElseBlock guifg=' . g:colors.fg1
execute 'highlight jsConditional guifg=' . g:syntax_colors.control
execute 'highlight jsRepeat guifg=' . g:syntax_colors.control
execute 'highlight jsReturn guifg=' . g:syntax_colors.control_flow
execute 'highlight jsStatement guifg=' . g:syntax_colors.keyword
execute 'highlight jsException guifg=' . g:syntax_colors.keyword
execute 'highlight jsTry guifg=' . g:syntax_colors.control_flow
execute 'highlight jsCatch guifg=' . g:syntax_colors.control_flow
execute 'highlight jsFinally guifg=' . g:syntax_colors.control_flow
execute 'highlight jsAsyncKeyword guifg=' . g:syntax_colors.control_flow
execute 'highlight jsAwaitKeyword guifg=' . g:syntax_colors.control_flow

" Modules
execute 'highlight jsImport guifg=' . g:syntax_colors.control_import
execute 'highlight jsExport guifg=' . g:syntax_colors.control_import
execute 'highlight jsModuleKeyword guifg=' . g:syntax_colors.control_import
execute 'highlight jsFrom guifg=' . g:syntax_colors.control_import
execute 'highlight jsModuleAs guifg=' . g:syntax_colors.control_import
execute 'highlight jsModuleAsterisk guifg=' . g:syntax_colors.operator

" Literals and values
execute 'highlight jsString guifg=' . g:colors.fg1
execute 'highlight jsTemplateString guifg=' . g:colors.fg1
execute 'highlight jsTemplateExpression guifg=' . g:syntax_colors.variable
execute 'highlight jsTemplateBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsRegexpString guifg=' . g:colors.fg2
execute 'highlight jsRegexpBoundary guifg=' . g:colors.fg2
execute 'highlight jsRegexpQuantifier guifg=' . g:syntax_colors.constant
execute 'highlight jsRegexpOr guifg=' . g:syntax_colors.operator
execute 'highlight jsRegexpMod guifg=' . g:syntax_colors.operator
execute 'highlight jsRegexpGroup guifg=' . g:colors.fg2
execute 'highlight jsNumber guifg=' . g:syntax_colors.constant
execute 'highlight jsFloat guifg=' . g:syntax_colors.constant
execute 'highlight jsBoolean guifg=' . g:syntax_colors.constant

" TypeScript specific
execute 'highlight typescriptBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight typescriptParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight typescriptEndColons guifg=' . g:syntax_colors.punctuation
execute 'highlight typescriptOperator guifg=' . g:syntax_colors.operator
execute 'highlight typescriptBinaryOp guifg=' . g:syntax_colors.operator
execute 'highlight typescriptAssign guifg=' . g:syntax_colors.operator
execute 'highlight typescriptMember guifg=' . g:syntax_colors.property
execute 'highlight typescriptDotNotation guifg=' . g:syntax_colors.punctuation
execute 'highlight typescriptLogicSymbols guifg=' . g:syntax_colors.operator
execute 'highlight typescriptGlobal guifg=' . g:syntax_colors.support_variable
execute 'highlight typescriptTestGlobal guifg=' . g:syntax_colors.support_variable
execute 'highlight typescriptNodeGlobal guifg=' . g:syntax_colors.support_variable
execute 'highlight typescriptTypeReference guifg=' . g:syntax_colors.type
execute 'highlight typescriptPredefinedType guifg=' . g:syntax_colors.type
execute 'highlight typescriptTemplateSB guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight typescriptType_parameter guifg=' . g:syntax_colors.type_parameter
execute 'highlight typescriptInterfaceName guifg=' . g:syntax_colors.type
execute 'highlight typescriptEnum guifg=' . g:syntax_colors.type
execute 'highlight typescriptClassHeritage guifg=' . g:syntax_colors.class
execute 'highlight typescriptFuncTypeArrow guifg=' . g:syntax_colors.operator
execute 'highlight typescriptCall guifg=' . g:syntax_colors.variable
execute 'highlight typescriptBOMWindowProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptHeadersMethod guifg=' . g:syntax_colors.support_method
execute 'highlight typescriptDOMStorageProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptPaymentMethod guifg=' . g:syntax_colors.support_method
execute 'highlight typescriptES6SetProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptServiceWorkerProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptDOMFormProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptBOMNavigatorProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptDOMDocProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptAjaxMethod guifg=' . g:syntax_colors.support_method

" JSX/TSX specific
execute 'highlight jsxTagName guifg=' . g:syntax_colors.tag
execute 'highlight jsxComponentName guifg=' . g:syntax_colors.class
execute 'highlight jsxAttrib guifg=' . g:syntax_colors.attribute
execute 'highlight jsxEqual guifg=' . g:syntax_colors.operator
execute 'highlight jsxString guifg=' . g:colors.fg1
execute 'highlight jsxCloseString guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight jsxOpenPunct guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight jsxClosePunct guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight jsxBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsxExpression_block guifg=' . g:colors.fg1
