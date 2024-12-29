" INI/Config specific highlighting

" Basic syntax
execute 'highlight iniLabel guifg=' . g:syntaxColors.property
execute 'highlight iniKey guifg=' . g:syntaxColors.property
execute 'highlight iniValue guifg=' . g:colors.FG1
execute 'highlight iniSection guifg=' . g:syntaxColors.class
execute 'highlight iniComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" Section headers
execute 'highlight iniHeader guifg=' . g:syntaxColors.class
execute 'highlight iniHeaderDelimiter guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight iniSectionDelimiter guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight iniSectionEnd guifg=' . g:syntaxColors.punctuationBrace

" Values and types
execute 'highlight iniString guifg=' . g:colors.FG1
execute 'highlight iniStringDelimiter guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight iniNumber guifg=' . g:syntaxColors.constant
execute 'highlight iniFloat guifg=' . g:syntaxColors.constant
execute 'highlight iniBoolean guifg=' . g:syntaxColors.constant
execute 'highlight iniDate guifg=' . g:syntaxColors.datetime
execute 'highlight iniTime guifg=' . g:syntaxColors.datetime
execute 'highlight iniDateTime guifg=' . g:syntaxColors.datetime
execute 'highlight iniArray guifg=' . g:colors.FG1
execute 'highlight iniArrayDelimiter guifg=' . g:syntaxColors.punctuation

" Special characters
execute 'highlight iniEscape guifg=' . g:syntaxColors.constant
execute 'highlight iniSpecial guifg=' . g:syntaxColors.constant
execute 'highlight iniVariable guifg=' . g:syntaxColors.variable
execute 'highlight iniEnvironmentVariable guifg=' . g:syntaxColors.variable
execute 'highlight iniMacro guifg=' . g:syntaxColors.variable
execute 'highlight iniInterpolation guifg=' . g:syntaxColors.variable

" Operators and delimiters
execute 'highlight iniOperator guifg=' . g:syntaxColors.operator
execute 'highlight iniAssignment guifg=' . g:syntaxColors.operator
execute 'highlight iniDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight iniSeparator guifg=' . g:syntaxColors.punctuation
execute 'highlight iniContinuation guifg=' . g:syntaxColors.operator

" Comments and documentation
execute 'highlight iniCommentKey guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight iniCommentValue guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight iniTodo guifg=' . g:syntaxColors.comment . ' gui=bold'

" Error highlighting
execute 'highlight iniError guifg=' . g:colors.ERROR
execute 'highlight iniInvalidSection guifg=' . g:colors.ERROR
execute 'highlight iniInvalidKey guifg=' . g:colors.ERROR
execute 'highlight iniInvalidValue guifg=' . g:colors.ERROR
execute 'highlight iniMissingValue guifg=' . g:colors.WARNING
execute 'highlight iniDuplicateSection guifg=' . g:colors.WARNING
execute 'highlight iniDuplicateKey guifg=' . g:colors.WARNING

" Config file specific
execute 'highlight configComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight configSection guifg=' . g:syntaxColors.class
execute 'highlight configKey guifg=' . g:syntaxColors.property
execute 'highlight configValue guifg=' . g:colors.FG1
execute 'highlight configString guifg=' . g:colors.FG1
execute 'highlight configNumber guifg=' . g:syntaxColors.constant
execute 'highlight configBoolean guifg=' . g:syntaxColors.constant
execute 'highlight configPath guifg=' . g:colors.INFO
execute 'highlight configVariable guifg=' . g:syntaxColors.variable
execute 'highlight configDelimiter guifg=' . g:syntaxColors.punctuation

" Properties file specific
execute 'highlight propertiesComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight propertiesKey guifg=' . g:syntaxColors.property
execute 'highlight propertiesValue guifg=' . g:colors.FG1
execute 'highlight propertiesAssignment guifg=' . g:syntaxColors.operator
execute 'highlight propertiesDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight propertiesString guifg=' . g:colors.FG1
execute 'highlight propertiesEscape guifg=' . g:syntaxColors.constant
execute 'highlight propertiesPath guifg=' . g:colors.INFO

" Environment file specific
execute 'highlight envComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight envKey guifg=' . g:syntaxColors.property
execute 'highlight envValue guifg=' . g:colors.FG1
execute 'highlight envString guifg=' . g:colors.FG1
execute 'highlight envNumber guifg=' . g:syntaxColors.constant
execute 'highlight envBoolean guifg=' . g:syntaxColors.constant
execute 'highlight envOperator guifg=' . g:syntaxColors.operator
execute 'highlight envDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight envEscape guifg=' . g:syntaxColors.constant
execute 'highlight envVariable guifg=' . g:syntaxColors.variable
execute 'highlight envPath guifg=' . g:colors.INFO

" Special sections and keys
execute 'highlight iniImportant guifg=' . g:syntaxColors.keyword . ' gui=bold'
execute 'highlight iniDeprecated guifg=' . g:syntaxColors.comment . ' gui=strikethrough'
execute 'highlight iniDefault guifg=' . g:syntaxColors.comment . ' gui=italic'
execute 'highlight iniExample guifg=' . g:syntaxColors.comment . ' gui=italic'
execute 'highlight iniNote guifg=' . g:syntaxColors.comment . ' gui=italic'

" Special sections
execute 'highlight iniSpecialSection guifg=' . g:syntaxColors.keyword . ' gui=bold'
execute 'highlight iniSystemSection guifg=' . g:syntaxColors.keyword . ' gui=bold'
execute 'highlight iniUserSection guifg=' . g:syntaxColors.variable . ' gui=bold'

" Environment variables
execute 'highlight iniEnvVar guifg=' . g:syntaxColors.variable
execute 'highlight iniEnvVarValue guifg=' . g:syntaxColors.string
execute 'highlight iniEnvVarOperator guifg=' . g:syntaxColors.operator

" Additional error handling
execute 'highlight iniInvalidSection guifg=' . g:colors.ERROR
execute 'highlight iniInvalidKey guifg=' . g:colors.ERROR
execute 'highlight iniInvalidValue guifg=' . g:colors.ERROR
execute 'highlight iniDuplicateKey guifg=' . g:colors.WARNING
execute 'highlight iniDuplicateSection guifg=' . g:colors.WARNING
