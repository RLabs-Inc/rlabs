" C# specific highlighting

" Basic syntax
execute 'highlight csKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight csStorage guifg=' . g:syntax_colors.storage
execute 'highlight csModifier guifg=' . g:syntax_colors.modifier
execute 'highlight csType guifg=' . g:syntax_colors.type
execute 'highlight csOperator guifg=' . g:syntax_colors.operator
execute 'highlight csAccessor guifg=' . g:syntax_colors.keyword
execute 'highlight csPreprocessor guifg=' . g:syntax_colors.keyword

" Classes and interfaces
execute 'highlight csClass guifg=' . g:syntax_colors.class
execute 'highlight csInterface guifg=' . g:syntax_colors.interface
execute 'highlight csStruct guifg=' . g:syntax_colors.type
execute 'highlight csEnum guifg=' . g:syntax_colors.enum
execute 'highlight csDelegate guifg=' . g:syntax_colors.type
execute 'highlight csInheritance guifg=' . g:syntax_colors.keyword
execute 'highlight csGeneric guifg=' . g:syntax_colors.type
execute 'highlight csGenericType guifg=' . g:syntax_colors.type_parameter
execute 'highlight csGenericConstraint guifg=' . g:syntax_colors.keyword

" Methods and properties
execute 'highlight csMethod guifg=' . g:syntax_colors.method
execute 'highlight csMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight csConstructor guifg=' . g:syntax_colors.function
execute 'highlight csProperty guifg=' . g:syntax_colors.property
execute 'highlight csField guifg=' . g:syntax_colors.property
execute 'highlight csParameter guifg=' . g:syntax_colors.parameter
execute 'highlight csEvent guifg=' . g:syntax_colors.keyword

" Variables and constants
execute 'highlight csVariable guifg=' . g:syntax_colors.variable
execute 'highlight csConstant guifg=' . g:syntax_colors.constant
execute 'highlight csThis guifg=' . g:syntax_colors.variable_readonly
execute 'highlight csBase guifg=' . g:syntax_colors.variable_readonly
execute 'highlight csNamespace guifg=' . g:syntax_colors.type
execute 'highlight csUsing guifg=' . g:syntax_colors.control_import

" Control flow
execute 'highlight csConditional guifg=' . g:syntax_colors.control
execute 'highlight csRepeat guifg=' . g:syntax_colors.control
execute 'highlight csLabel guifg=' . g:syntax_colors.control
execute 'highlight csReturn guifg=' . g:syntax_colors.control_flow
execute 'highlight csYield guifg=' . g:syntax_colors.control_flow
execute 'highlight csBreak guifg=' . g:syntax_colors.control_flow
execute 'highlight csContinue guifg=' . g:syntax_colors.control_flow
execute 'highlight csGoto guifg=' . g:syntax_colors.control_flow

" LINQ
execute 'highlight csLinq guifg=' . g:syntax_colors.keyword
execute 'highlight csLinqKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight csLinqClause guifg=' . g:syntax_colors.keyword
execute 'highlight csLinqFunction guifg=' . g:syntax_colors.function
execute 'highlight csLinqOperator guifg=' . g:syntax_colors.operator
execute 'highlight csLinqVariable guifg=' . g:syntax_colors.variable

" Async/Await
execute 'highlight csAsync guifg=' . g:syntax_colors.modifier
execute 'highlight csAwait guifg=' . g:syntax_colors.modifier
execute 'highlight csTask guifg=' . g:syntax_colors.type
execute 'highlight csAsyncMethod guifg=' . g:syntax_colors.method

" Attributes
execute 'highlight csAttribute guifg=' . g:syntax_colors.attribute
execute 'highlight csAttributeName guifg=' . g:syntax_colors.attribute
execute 'highlight csAttributeArg guifg=' . g:syntax_colors.constant
execute 'highlight csAttributeParens guifg=' . g:syntax_colors.punctuation

" Strings and characters
execute 'highlight csString guifg=' . g:syntax_colors.string
execute 'highlight csVerbatimString guifg=' . g:syntax_colors.string
execute 'highlight csInterpolatedString guifg=' . g:syntax_colors.string
execute 'highlight csInterpolation guifg=' . g:syntax_colors.variable
execute 'highlight csInterpolationDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight csChar guifg=' . g:syntax_colors.constant
execute 'highlight csEscapeSequence guifg=' . g:syntax_colors.constant

" Numbers and values
execute 'highlight csNumber guifg=' . g:syntax_colors.constant
execute 'highlight csFloat guifg=' . g:syntax_colors.constant
execute 'highlight csBoolean guifg=' . g:syntax_colors.constant
execute 'highlight csNull guifg=' . g:syntax_colors.constant

" Comments and documentation
execute 'highlight csComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight csXmlComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight csXmlTag guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight csXmlString guifg=' . g:syntax_colors.string . ' gui=' . g:theme_get_style('Comment')
execute 'highlight csTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Error handling
execute 'highlight csException guifg=' . g:syntax_colors.type
execute 'highlight csTry guifg=' . g:syntax_colors.control
execute 'highlight csCatch guifg=' . g:syntax_colors.control
execute 'highlight csFinally guifg=' . g:syntax_colors.control
execute 'highlight csThrow guifg=' . g:syntax_colors.control

" Special syntax
execute 'highlight csSpecialChar guifg=' . g:syntax_colors.string_escape
execute 'highlight csFormat guifg=' . g:syntax_colors.string_escape
execute 'highlight csGlobalNamespace guifg=' . g:syntax_colors.type
execute 'highlight csIsType guifg=' . g:syntax_colors.operator
execute 'highlight csAsType guifg=' . g:syntax_colors.operator
execute 'highlight csContextualStatement guifg=' . g:syntax_colors.keyword

" Modern C# features
execute 'highlight csRecord guifg=' . g:syntax_colors.class
execute 'highlight csInit guifg=' . g:syntax_colors.keyword
execute 'highlight csRequired guifg=' . g:syntax_colors.keyword
execute 'highlight csPattern guifg=' . g:syntax_colors.keyword
execute 'highlight csSwitch guifg=' . g:syntax_colors.control
execute 'highlight csSwitchCase guifg=' . g:syntax_colors.control
execute 'highlight csWhen guifg=' . g:syntax_colors.control
execute 'highlight csRangeOperator guifg=' . g:syntax_colors.operator
execute 'highlight csNullable guifg=' . g:syntax_colors.type
execute 'highlight csNullForgiving guifg=' . g:syntax_colors.operator
execute 'highlight csTupleType guifg=' . g:syntax_colors.type
execute 'highlight csTupleElement guifg=' . g:syntax_colors.variable
execute 'highlight csValueTuple guifg=' . g:syntax_colors.type
