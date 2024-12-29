" JSON/YAML specific highlighting

" JSON syntax
execute 'highlight jsonBraces guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsonBrackets guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight jsonKeyword guifg=' . g:syntaxColors.property
execute 'highlight jsonKeywordMatch guifg=' . g:syntaxColors.punctuation
execute 'highlight jsonQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight jsonString guifg=' . g:colors.FG1
execute 'highlight jsonNumber guifg=' . g:syntaxColors.constant
execute 'highlight jsonBoolean guifg=' . g:syntaxColors.constant
execute 'highlight jsonNull guifg=' . g:syntaxColors.constant
execute 'highlight jsonCommentError guifg=' . g:colors.ERROR
execute 'highlight jsonTrailingCommaError guifg=' . g:colors.ERROR
execute 'highlight jsonMissingCommaError guifg=' . g:colors.ERROR
execute 'highlight jsonNoQuotesError guifg=' . g:colors.ERROR
execute 'highlight jsonNumError guifg=' . g:colors.ERROR
execute 'highlight jsonStringSQError guifg=' . g:colors.ERROR
execute 'highlight jsonCommentError guifg=' . g:colors.ERROR
execute 'highlight jsonSemicolonError guifg=' . g:colors.ERROR
execute 'highlight jsonTripleQuotesError guifg=' . g:colors.ERROR
execute 'highlight jsonComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" YAML syntax
execute 'highlight yamlKey guifg=' . g:syntaxColors.property
execute 'highlight yamlKeyValueDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlBlockMappingKey guifg=' . g:syntaxColors.property
execute 'highlight yamlFlowMappingKey guifg=' . g:syntaxColors.property
execute 'highlight yamlFlowIndicator guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlBlockCollectionItemStart guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlBlockMappingMerge guifg=' . g:syntaxColors.operator
execute 'highlight yamlFlowMappingMerge guifg=' . g:syntaxColors.operator
execute 'highlight yamlString guifg=' . g:colors.FG1
execute 'highlight yamlNumber guifg=' . g:syntaxColors.constant
execute 'highlight yamlBoolean guifg=' . g:syntaxColors.constant
execute 'highlight yamlNull guifg=' . g:syntaxColors.constant
execute 'highlight yamlTimestamp guifg=' . g:syntaxColors.datetime
execute 'highlight yamlConstant guifg=' . g:syntaxColors.constant
execute 'highlight yamlNodeTag guifg=' . g:syntaxColors.type
execute 'highlight yamlType guifg=' . g:syntaxColors.type
execute 'highlight yamlDocumentStart guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlDocumentEnd guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlDirective guifg=' . g:syntaxColors.keyword
execute 'highlight yamlAnchor guifg=' . g:syntaxColors.keyword
execute 'highlight yamlAlias guifg=' . g:syntaxColors.keyword
execute 'highlight yamlComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" YAML block literals
execute 'highlight yamlBlockMappingKey guifg=' . g:syntaxColors.property
execute 'highlight yamlBlockMappingMerge guifg=' . g:syntaxColors.operator
execute 'highlight yamlBlockScalar guifg=' . g:colors.FG1
execute 'highlight yamlBlockScalarHeader guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlBlockLiteral guifg=' . g:colors.FG1
execute 'highlight yamlBlockLiteralHeader guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlFlowMapping guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlFlowCollection guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlFlowSequence guifg=' . g:syntaxColors.punctuation
execute 'highlight yamlFlowString guifg=' . g:colors.FG1

" YAML data types
execute 'highlight yamlInteger guifg=' . g:syntaxColors.constant
execute 'highlight yamlFloat guifg=' . g:syntaxColors.constant
execute 'highlight yamlBinary guifg=' . g:syntaxColors.constant
execute 'highlight yamlOctal guifg=' . g:syntaxColors.constant
execute 'highlight yamlHexadecimal guifg=' . g:syntaxColors.constant
execute 'highlight yamlInfinityNegative guifg=' . g:syntaxColors.constant
execute 'highlight yamlInfinityPositive guifg=' . g:syntaxColors.constant
execute 'highlight yamlNanPositive guifg=' . g:syntaxColors.constant
execute 'highlight yamlNanNegative guifg=' . g:syntaxColors.constant

" YAML errors
execute 'highlight yamlError guifg=' . g:colors.ERROR
execute 'highlight yamlSpaceError guifg=' . g:colors.ERROR
execute 'highlight yamlParseError guifg=' . g:colors.ERROR
execute 'highlight yamlReservedDirective guifg=' . g:colors.ERROR
execute 'highlight yamlTABError guifg=' . g:colors.ERROR
execute 'highlight yamlInvalidAnchor guifg=' . g:colors.ERROR
execute 'highlight yamlInvalidTag guifg=' . g:colors.ERROR
execute 'highlight yamlInvalidBlock guifg=' . g:colors.ERROR
execute 'highlight yamlInvalidFloat guifg=' . g:colors.ERROR
execute 'highlight yamlInvalidInteger guifg=' . g:colors.ERROR
execute 'highlight yamlInvalidTimestamp guifg=' . g:colors.ERROR

" TOML syntax (similar to JSON/YAML)
execute 'highlight tomlTable guifg=' . g:syntaxColors.property
execute 'highlight tomlTableArray guifg=' . g:syntaxColors.property
execute 'highlight tomlKey guifg=' . g:syntaxColors.property
execute 'highlight tomlKeyDq guifg=' . g:syntaxColors.property
execute 'highlight tomlKeySq guifg=' . g:syntaxColors.property
execute 'highlight tomlString guifg=' . g:colors.FG1
execute 'highlight tomlInteger guifg=' . g:syntaxColors.constant
execute 'highlight tomlFloat guifg=' . g:syntaxColors.constant
execute 'highlight tomlBoolean guifg=' . g:syntaxColors.constant
execute 'highlight tomlDate guifg=' . g:syntaxColors.datetime
execute 'highlight tomlDatetime guifg=' . g:syntaxColors.datetime
execute 'highlight tomlArray guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight tomlTableArrayBar guifg=' . g:syntaxColors.punctuation
execute 'highlight tomlComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
