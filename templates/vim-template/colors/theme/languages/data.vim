" JSON/YAML specific highlighting

" JSON syntax
execute 'highlight jsonBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsonBrackets guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsonKeyword guifg=' . g:syntax_colors.property
execute 'highlight jsonKeywordMatch guifg=' . g:syntax_colors.punctuation
execute 'highlight jsonQuote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight jsonString guifg=' . g:colors.fg1
execute 'highlight jsonNumber guifg=' . g:syntax_colors.constant
execute 'highlight jsonBoolean guifg=' . g:syntax_colors.constant
execute 'highlight jsonNull guifg=' . g:syntax_colors.constant
execute 'highlight jsonCommentError guifg=' . g:colors.error
execute 'highlight jsonTrailingCommaError guifg=' . g:colors.error
execute 'highlight jsonMissingCommaError guifg=' . g:colors.error
execute 'highlight jsonNoQuotesError guifg=' . g:colors.error
execute 'highlight jsonNumError guifg=' . g:colors.error
execute 'highlight jsonStringSQError guifg=' . g:colors.error
execute 'highlight jsonCommentError guifg=' . g:colors.error
execute 'highlight jsonSemicolonError guifg=' . g:colors.error
execute 'highlight jsonTripleQuotesError guifg=' . g:colors.error
execute 'highlight jsonComment guifg=' . g:syntax_colors.comment

" YAML syntax
execute 'highlight yamlKey guifg=' . g:syntax_colors.property
execute 'highlight yamlKeyValueDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlBlockMappingKey guifg=' . g:syntax_colors.property
execute 'highlight yamlFlowMappingKey guifg=' . g:syntax_colors.property
execute 'highlight yamlFlowIndicator guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlBlockCollectionItemStart guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlBlockMappingMerge guifg=' . g:syntax_colors.operator
execute 'highlight yamlFlowMappingMerge guifg=' . g:syntax_colors.operator
execute 'highlight yamlString guifg=' . g:colors.fg1
execute 'highlight yamlNumber guifg=' . g:syntax_colors.constant
execute 'highlight yamlBoolean guifg=' . g:syntax_colors.constant
execute 'highlight yamlNull guifg=' . g:syntax_colors.constant
execute 'highlight yamlTimestamp guifg=' . g:syntax_colors.datetime
execute 'highlight yamlConstant guifg=' . g:syntax_colors.constant
execute 'highlight yamlNodeTag guifg=' . g:syntax_colors.type
execute 'highlight yamlType guifg=' . g:syntax_colors.type
execute 'highlight yamlDocumentStart guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlDocumentEnd guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlDirective guifg=' . g:syntax_colors.keyword
execute 'highlight yamlAnchor guifg=' . g:syntax_colors.keyword
execute 'highlight yamlAlias guifg=' . g:syntax_colors.keyword
execute 'highlight yamlComment guifg=' . g:syntax_colors.comment

" YAML block literals
execute 'highlight yamlBlockMappingKey guifg=' . g:syntax_colors.property
execute 'highlight yamlBlockMappingMerge guifg=' . g:syntax_colors.operator
execute 'highlight yamlBlockScalar guifg=' . g:colors.fg1
execute 'highlight yamlBlockScalarHeader guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlBlockLiteral guifg=' . g:colors.fg1
execute 'highlight yamlBlockLiteralHeader guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlFlowMapping guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlFlowCollection guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlFlowSequence guifg=' . g:syntax_colors.punctuation
execute 'highlight yamlFlowString guifg=' . g:colors.fg1

" YAML data types
execute 'highlight yamlInteger guifg=' . g:syntax_colors.constant
execute 'highlight yamlFloat guifg=' . g:syntax_colors.constant
execute 'highlight yamlBinary guifg=' . g:syntax_colors.constant
execute 'highlight yamlOctal guifg=' . g:syntax_colors.constant
execute 'highlight yamlHexadecimal guifg=' . g:syntax_colors.constant
execute 'highlight yamlInfinityNegative guifg=' . g:syntax_colors.constant
execute 'highlight yamlInfinityPositive guifg=' . g:syntax_colors.constant
execute 'highlight yamlNanPositive guifg=' . g:syntax_colors.constant
execute 'highlight yamlNanNegative guifg=' . g:syntax_colors.constant

" YAML errors
execute 'highlight yamlError guifg=' . g:colors.error
execute 'highlight yamlSpaceError guifg=' . g:colors.error
execute 'highlight yamlParseError guifg=' . g:colors.error
execute 'highlight yamlReservedDirective guifg=' . g:colors.error
execute 'highlight yamlTABError guifg=' . g:colors.error
execute 'highlight yamlInvalidAnchor guifg=' . g:colors.error
execute 'highlight yamlInvalidTag guifg=' . g:colors.error
execute 'highlight yamlInvalidBlock guifg=' . g:colors.error
execute 'highlight yamlInvalidFloat guifg=' . g:colors.error
execute 'highlight yamlInvalidInteger guifg=' . g:colors.error
execute 'highlight yamlInvalidTimestamp guifg=' . g:colors.error

" TOML syntax (similar to JSON/YAML)
execute 'highlight tomlTable guifg=' . g:syntax_colors.property
execute 'highlight tomlTableArray guifg=' . g:syntax_colors.property
execute 'highlight tomlKey guifg=' . g:syntax_colors.property
execute 'highlight tomlKeyDq guifg=' . g:syntax_colors.property
execute 'highlight tomlKeySq guifg=' . g:syntax_colors.property
execute 'highlight tomlString guifg=' . g:colors.fg1
execute 'highlight tomlInteger guifg=' . g:syntax_colors.constant
execute 'highlight tomlFloat guifg=' . g:syntax_colors.constant
execute 'highlight tomlBoolean guifg=' . g:syntax_colors.constant
execute 'highlight tomlDate guifg=' . g:syntax_colors.datetime
execute 'highlight tomlDatetime guifg=' . g:syntax_colors.datetime
execute 'highlight tomlArray guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight tomlTableArrayBar guifg=' . g:syntax_colors.punctuation
execute 'highlight tomlComment guifg=' . g:syntax_colors.comment
