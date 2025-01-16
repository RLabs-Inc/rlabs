" GraphQL specific highlighting

" Basic syntax
execute 'highlight graphqlStructure guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlOperator guifg=' . g:syntax_colors.operator
execute 'highlight graphqlName guifg=' . g:syntax_colors.variable
execute 'highlight graphqlTemplateString guifg=' . g:colors.fg1
execute 'highlight graphqlString guifg=' . g:colors.fg1
execute 'highlight graphqlNumber guifg=' . g:syntax_colors.constant
execute 'highlight graphqlBoolean guifg=' . g:syntax_colors.constant
execute 'highlight graphqlNull guifg=' . g:syntax_colors.constant

" Operations and definitions
execute 'highlight graphqlOperationDefinition guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlOperationName guifg=' . g:syntax_colors.function
execute 'highlight graphqlFragmentDefinition guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlFragmentName guifg=' . g:syntax_colors.function
execute 'highlight graphqlFragmentSpread guifg=' . g:syntax_colors.function
execute 'highlight graphqlSpreadOperator guifg=' . g:syntax_colors.operator

" Types and fields
execute 'highlight graphqlType guifg=' . g:syntax_colors.type
execute 'highlight graphqlField guifg=' . g:syntax_colors.property
execute 'highlight graphqlFieldDefinition guifg=' . g:syntax_colors.property_declaration
execute 'highlight graphqlAlias guifg=' . g:syntax_colors.variable
execute 'highlight graphqlEnum guifg=' . g:syntax_colors.type
execute 'highlight graphqlEnumValue guifg=' . g:syntax_colors.constant
execute 'highlight graphqlInterface guifg=' . g:syntax_colors.type
execute 'highlight graphqlUnion guifg=' . g:syntax_colors.type
execute 'highlight graphqlScalar guifg=' . g:syntax_colors.type
execute 'highlight graphqlBuiltinType guifg=' . g:syntax_colors.type

" Arguments and variables
execute 'highlight graphqlArgument guifg=' . g:syntax_colors.parameter
execute 'highlight graphqlArgumentDefinition guifg=' . g:syntax_colors.parameter
execute 'highlight graphqlVariable guifg=' . g:syntax_colors.variable
execute 'highlight graphqlVariable_definition guifg=' . g:syntax_colors.variable_declaration
execute 'highlight graphqlVariableName guifg=' . g:syntax_colors.variable
execute 'highlight graphqlDollar guifg=' . g:syntax_colors.punctuation

" Directives
execute 'highlight graphqlDirective guifg=' . g:syntax_colors.attribute
execute 'highlight graphqlDirectiveName guifg=' . g:syntax_colors.attribute
execute 'highlight graphqlDirectiveDefinition guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlDirectiveLocation guifg=' . g:syntax_colors.type
execute 'highlight graphqlBuiltinDirective guifg=' . g:syntax_colors.attribute

" Schema definition
execute 'highlight graphqlSchemaDefinition guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlSchemaField guifg=' . g:syntax_colors.property
execute 'highlight graphqlTypeDefinition guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlTypeExtension guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlInputTypeDefinition guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlImplements guifg=' . g:syntax_colors.keyword

" Comments and descriptions
execute 'highlight graphqlComment guifg=' . g:syntax_colors.comment
execute 'highlight graphqlDescription guifg=' . g:syntax_colors.comment
execute 'highlight graphqlBlockString guifg=' . g:colors.fg1

" Punctuation and braces
execute 'highlight graphqlBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight graphqlBrackets guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight graphqlParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight graphqlColon guifg=' . g:syntax_colors.punctuation
execute 'highlight graphqlEquals guifg=' . g:syntax_colors.operator
execute 'highlight graphqlPipe guifg=' . g:syntax_colors.operator
execute 'highlight graphqlDot guifg=' . g:syntax_colors.punctuation

" Special syntax
execute 'highlight graphqlTaggedTemplate guifg=' . g:colors.fg1
execute 'highlight graphqlTemplateExpression guifg=' . g:syntax_colors.variable
execute 'highlight graphqlTemplatePunctuation guifg=' . g:syntax_colors.punctuation
execute 'highlight graphqlTemplateString guifg=' . g:colors.fg1

" Query-specific keywords
execute 'highlight graphqlQuery guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlMutation guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlSubscription guifg=' . g:syntax_colors.keyword
execute 'highlight graphqlFragment guifg=' . g:syntax_colors.keyword

" Error handling
execute 'highlight graphqlError guifg=' . g:colors.error
execute 'highlight graphqlInvalidDefinition guifg=' . g:colors.error
execute 'highlight graphqlDuplicateDefinition guifg=' . g:colors.error
execute 'highlight graphqlInvalidDirectiveLocation guifg=' . g:colors.error
execute 'highlight graphqlInvalidFieldName guifg=' . g:colors.error
execute 'highlight graphqlInvalidArgumentName guifg=' . g:colors.error
execute 'highlight graphqlInvalidTypeName guifg=' . g:colors.error
execute 'highlight graphqlInvalidVariableName guifg=' . g:colors.error

" Extensions and special features
execute 'highlight graphqlMetaField guifg=' . g:syntax_colors.property
execute 'highlight graphqlIntrospectionField guifg=' . g:syntax_colors.property
execute 'highlight graphqlIntrospectionType guifg=' . g:syntax_colors.type
execute 'highlight graphqlDeprecated guifg=' . g:syntax_colors.comment . ' gui=strikethrough'
execute 'highlight graphqlCustomScalar guifg=' . g:syntax_colors.type
execute 'highlight graphqlKnownDirectives guifg=' . g:syntax_colors.attribute
execute 'highlight graphqlKnownFragmentNames guifg=' . g:syntax_colors.function
