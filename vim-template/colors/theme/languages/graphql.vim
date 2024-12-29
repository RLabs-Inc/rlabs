" GraphQL specific highlighting

" Basic syntax
execute 'highlight graphqlStructure guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlOperator guifg=' . g:syntaxColors.operator
execute 'highlight graphqlName guifg=' . g:syntaxColors.variable
execute 'highlight graphqlTemplateString guifg=' . g:colors.FG1
execute 'highlight graphqlString guifg=' . g:colors.FG1
execute 'highlight graphqlNumber guifg=' . g:syntaxColors.constant
execute 'highlight graphqlBoolean guifg=' . g:syntaxColors.constant
execute 'highlight graphqlNull guifg=' . g:syntaxColors.constant

" Operations and definitions
execute 'highlight graphqlOperationDefinition guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlOperationName guifg=' . g:syntaxColors.function
execute 'highlight graphqlFragmentDefinition guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlFragmentName guifg=' . g:syntaxColors.function
execute 'highlight graphqlFragmentSpread guifg=' . g:syntaxColors.function
execute 'highlight graphqlSpreadOperator guifg=' . g:syntaxColors.operator

" Types and fields
execute 'highlight graphqlType guifg=' . g:syntaxColors.type
execute 'highlight graphqlField guifg=' . g:syntaxColors.property
execute 'highlight graphqlFieldDefinition guifg=' . g:syntaxColors.propertyDeclaration
execute 'highlight graphqlAlias guifg=' . g:syntaxColors.variable
execute 'highlight graphqlEnum guifg=' . g:syntaxColors.type
execute 'highlight graphqlEnumValue guifg=' . g:syntaxColors.constant
execute 'highlight graphqlInterface guifg=' . g:syntaxColors.type
execute 'highlight graphqlUnion guifg=' . g:syntaxColors.type
execute 'highlight graphqlScalar guifg=' . g:syntaxColors.type
execute 'highlight graphqlBuiltinType guifg=' . g:syntaxColors.type

" Arguments and variables
execute 'highlight graphqlArgument guifg=' . g:syntaxColors.parameter
execute 'highlight graphqlArgumentDefinition guifg=' . g:syntaxColors.parameter
execute 'highlight graphqlVariable guifg=' . g:syntaxColors.variable
execute 'highlight graphqlVariableDefinition guifg=' . g:syntaxColors.variableDeclaration
execute 'highlight graphqlVariableName guifg=' . g:syntaxColors.variable
execute 'highlight graphqlDollar guifg=' . g:syntaxColors.punctuation

" Directives
execute 'highlight graphqlDirective guifg=' . g:syntaxColors.attribute
execute 'highlight graphqlDirectiveName guifg=' . g:syntaxColors.attribute
execute 'highlight graphqlDirectiveDefinition guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlDirectiveLocation guifg=' . g:syntaxColors.type
execute 'highlight graphqlBuiltinDirective guifg=' . g:syntaxColors.attribute

" Schema definition
execute 'highlight graphqlSchemaDefinition guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlSchemaField guifg=' . g:syntaxColors.property
execute 'highlight graphqlTypeDefinition guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlTypeExtension guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlInputTypeDefinition guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlImplements guifg=' . g:syntaxColors.keyword

" Comments and descriptions
execute 'highlight graphqlComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight graphqlDescription guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight graphqlBlockString guifg=' . g:colors.FG1

" Punctuation and braces
execute 'highlight graphqlBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight graphqlBrackets guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight graphqlParens guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight graphqlColon guifg=' . g:syntaxColors.punctuation
execute 'highlight graphqlEquals guifg=' . g:syntaxColors.operator
execute 'highlight graphqlPipe guifg=' . g:syntaxColors.operator
execute 'highlight graphqlDot guifg=' . g:syntaxColors.punctuation

" Special syntax
execute 'highlight graphqlTaggedTemplate guifg=' . g:colors.FG1
execute 'highlight graphqlTemplateExpression guifg=' . g:syntaxColors.variable
execute 'highlight graphqlTemplatePunctuation guifg=' . g:syntaxColors.punctuation
execute 'highlight graphqlTemplateString guifg=' . g:colors.FG1

" Query-specific keywords
execute 'highlight graphqlQuery guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlMutation guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlSubscription guifg=' . g:syntaxColors.keyword
execute 'highlight graphqlFragment guifg=' . g:syntaxColors.keyword

" Error handling
execute 'highlight graphqlError guifg=' . g:colors.ERROR
execute 'highlight graphqlInvalidDefinition guifg=' . g:colors.ERROR
execute 'highlight graphqlDuplicateDefinition guifg=' . g:colors.ERROR
execute 'highlight graphqlInvalidDirectiveLocation guifg=' . g:colors.ERROR
execute 'highlight graphqlInvalidFieldName guifg=' . g:colors.ERROR
execute 'highlight graphqlInvalidArgumentName guifg=' . g:colors.ERROR
execute 'highlight graphqlInvalidTypeName guifg=' . g:colors.ERROR
execute 'highlight graphqlInvalidVariableName guifg=' . g:colors.ERROR

" Extensions and special features
execute 'highlight graphqlMetaField guifg=' . g:syntaxColors.property
execute 'highlight graphqlIntrospectionField guifg=' . g:syntaxColors.property
execute 'highlight graphqlIntrospectionType guifg=' . g:syntaxColors.type
execute 'highlight graphqlDeprecated guifg=' . g:syntaxColors.comment . ' gui=strikethrough'
execute 'highlight graphqlCustomScalar guifg=' . g:syntaxColors.type
execute 'highlight graphqlKnownDirectives guifg=' . g:syntaxColors.attribute
execute 'highlight graphqlKnownFragmentNames guifg=' . g:syntaxColors.function
