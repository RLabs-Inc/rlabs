" Environment Variables specific highlighting

" Basic syntax
execute 'highlight envVariable guifg=' . g:syntax_colors.variable
execute 'highlight envVariableName guifg=' . g:syntax_colors.variable
execute 'highlight envVariableValue guifg=' . g:colors.fg1
execute 'highlight envOperator guifg=' . g:syntax_colors.operator
execute 'highlight envAssignment guifg=' . g:syntax_colors.operator
execute 'highlight envDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight envQuote guifg=' . g:syntax_colors.punctuation_quote

" Export statements
execute 'highlight envExport guifg=' . g:syntax_colors.keyword
execute 'highlight envExportKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight envExportVariable guifg=' . g:syntax_colors.variable
execute 'highlight envExportValue guifg=' . g:colors.fg1

" Values and types
execute 'highlight envString guifg=' . g:colors.fg1
execute 'highlight envStringDelimiter guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight envNumber guifg=' . g:syntax_colors.constant
execute 'highlight envInteger guifg=' . g:syntax_colors.constant
execute 'highlight envFloat guifg=' . g:syntax_colors.constant
execute 'highlight envBoolean guifg=' . g:syntax_colors.constant
execute 'highlight envNull guifg=' . g:syntax_colors.constant
execute 'highlight envPath guifg=' . g:colors.info
execute 'highlight envURL guifg=' . g:colors.info

" Variable interpolation
execute 'highlight envInterpolation guifg=' . g:syntax_colors.variable
execute 'highlight envInterpolationDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight envInterpolatedVariable guifg=' . g:syntax_colors.variable
execute 'highlight envNestedVariable guifg=' . g:syntax_colors.variable
execute 'highlight envDefaultValue guifg=' . g:syntax_colors.constant

" Comments
execute 'highlight envComment guifg=' . g:syntax_colors.comment
execute 'highlight envInlineComment guifg=' . g:syntax_colors.comment 
execute 'highlight envTodo guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight envNote guifg=' . g:syntax_colors.comment . ' gui=italic'

" Special characters
execute 'highlight envEscape guifg=' . g:syntax_colors.constant
execute 'highlight envSpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight envBackslash guifg=' . g:syntax_colors.constant
execute 'highlight envWhitespace guifg=' . g:syntax_colors.punctuation

" Common environment variables
execute 'highlight envPathVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envHomeVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envUserVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envShellVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envLangVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envTermVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envDisplayVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envTempVar guifg=' . g:syntax_colors.variable_readonly

" Development variables
execute 'highlight envNodeVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envPythonVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envRubyVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envJavaVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envGoVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envRustVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envPhpVar guifg=' . g:syntax_colors.variable_readonly
execute 'highlight envDebugVar guifg=' . g:syntax_colors.variable_readonly

" Configuration variables
execute 'highlight envConfigVar guifg=' . g:syntax_colors.variable
execute 'highlight envSecretVar guifg=' . g:syntax_colors.variable
execute 'highlight envApiVar guifg=' . g:syntax_colors.variable
execute 'highlight envDbVar guifg=' . g:syntax_colors.variable
execute 'highlight envAuthVar guifg=' . g:syntax_colors.variable
execute 'highlight envCacheVar guifg=' . g:syntax_colors.variable
execute 'highlight envLogVar guifg=' . g:syntax_colors.variable
execute 'highlight envPortVar guifg=' . g:syntax_colors.variable

" Error handling
execute 'highlight envError guifg=' . g:colors.error
execute 'highlight envInvalidVariable guifg=' . g:colors.error
execute 'highlight envInvalidValue guifg=' . g:colors.error
execute 'highlight envInvalidEscape guifg=' . g:colors.error
execute 'highlight envInvalidInterpolation guifg=' . g:colors.error
execute 'highlight envMissingValue guifg=' . g:colors.warning
execute 'highlight envDuplicateVariable guifg=' . g:colors.warning

" Special syntax
execute 'highlight envShebang guifg=' . g:syntax_colors.comment
execute 'highlight envDirective guifg=' . g:syntax_colors.keyword
execute 'highlight envConditional guifg=' . g:syntax_colors.control
execute 'highlight envSubstitution guifg=' . g:syntax_colors.operator
execute 'highlight envConcatenation guifg=' . g:syntax_colors.operator

" Documentation
execute 'highlight envDocComment guifg=' . g:syntax_colors.comment 
execute 'highlight envDocTag guifg=' . g:syntax_colors.keyword
execute 'highlight envDocType guifg=' . g:syntax_colors.type
execute 'highlight envDocParam guifg=' . g:syntax_colors.parameter
execute 'highlight envDocExample guifg=' . g:syntax_colors.comment . ' gui=italic'
execute 'highlight envDocWarning guifg=' . g:colors.warning
execute 'highlight envDocError guifg=' . g:colors.error
