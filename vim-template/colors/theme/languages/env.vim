" Environment Variables specific highlighting

" Basic syntax
execute 'highlight envVariable guifg=' . g:syntaxColors.variable
execute 'highlight envVariableName guifg=' . g:syntaxColors.variable
execute 'highlight envVariableValue guifg=' . g:colors.FG1
execute 'highlight envOperator guifg=' . g:syntaxColors.operator
execute 'highlight envAssignment guifg=' . g:syntaxColors.operator
execute 'highlight envDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight envQuote guifg=' . g:syntaxColors.punctuationQuote

" Export statements
execute 'highlight envExport guifg=' . g:syntaxColors.keyword
execute 'highlight envExportKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight envExportVariable guifg=' . g:syntaxColors.variable
execute 'highlight envExportValue guifg=' . g:colors.FG1

" Values and types
execute 'highlight envString guifg=' . g:colors.FG1
execute 'highlight envStringDelimiter guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight envNumber guifg=' . g:syntaxColors.constant
execute 'highlight envInteger guifg=' . g:syntaxColors.constant
execute 'highlight envFloat guifg=' . g:syntaxColors.constant
execute 'highlight envBoolean guifg=' . g:syntaxColors.constant
execute 'highlight envNull guifg=' . g:syntaxColors.constant
execute 'highlight envPath guifg=' . g:colors.INFO
execute 'highlight envURL guifg=' . g:colors.INFO

" Variable interpolation
execute 'highlight envInterpolation guifg=' . g:syntaxColors.variable
execute 'highlight envInterpolationDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight envInterpolatedVariable guifg=' . g:syntaxColors.variable
execute 'highlight envNestedVariable guifg=' . g:syntaxColors.variable
execute 'highlight envDefaultValue guifg=' . g:syntaxColors.constant

" Comments
execute 'highlight envComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envInlineComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envTodo guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight envNote guifg=' . g:syntaxColors.comment . ' gui=italic'

" Special characters
execute 'highlight envEscape guifg=' . g:syntaxColors.constant
execute 'highlight envSpecialChar guifg=' . g:syntaxColors.constant
execute 'highlight envBackslash guifg=' . g:syntaxColors.constant
execute 'highlight envWhitespace guifg=' . g:syntaxColors.punctuation

" Common environment variables
execute 'highlight envPathVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envHomeVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envUserVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envShellVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envLangVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envTermVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envDisplayVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envTempVar guifg=' . g:syntaxColors.variableReadonly

" Development variables
execute 'highlight envNodeVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envPythonVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envRubyVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envJavaVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envGoVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envRustVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envPhpVar guifg=' . g:syntaxColors.variableReadonly
execute 'highlight envDebugVar guifg=' . g:syntaxColors.variableReadonly

" Configuration variables
execute 'highlight envConfigVar guifg=' . g:syntaxColors.variable
execute 'highlight envSecretVar guifg=' . g:syntaxColors.variable
execute 'highlight envApiVar guifg=' . g:syntaxColors.variable
execute 'highlight envDbVar guifg=' . g:syntaxColors.variable
execute 'highlight envAuthVar guifg=' . g:syntaxColors.variable
execute 'highlight envCacheVar guifg=' . g:syntaxColors.variable
execute 'highlight envLogVar guifg=' . g:syntaxColors.variable
execute 'highlight envPortVar guifg=' . g:syntaxColors.variable

" Error handling
execute 'highlight envError guifg=' . g:colors.ERROR
execute 'highlight envInvalidVariable guifg=' . g:colors.ERROR
execute 'highlight envInvalidValue guifg=' . g:colors.ERROR
execute 'highlight envInvalidEscape guifg=' . g:colors.ERROR
execute 'highlight envInvalidInterpolation guifg=' . g:colors.ERROR
execute 'highlight envMissingValue guifg=' . g:colors.WARNING
execute 'highlight envDuplicateVariable guifg=' . g:colors.WARNING

" Special syntax
execute 'highlight envShebang guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envDirective guifg=' . g:syntaxColors.keyword
execute 'highlight envConditional guifg=' . g:syntaxColors.control
execute 'highlight envSubstitution guifg=' . g:syntaxColors.operator
execute 'highlight envConcatenation guifg=' . g:syntaxColors.operator

" Documentation
execute 'highlight envDocComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envDocTag guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envDocType guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envDocParam guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envDocExample guifg=' . g:syntaxColors.comment . ' gui=italic'
execute 'highlight envDocWarning guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envDocError guifg=' . g:colors.ERROR . ' gui=' . g:theme_get_style('Comment')
