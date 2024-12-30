" INI/Config specific highlighting

" Basic syntax
execute 'highlight iniLabel guifg=' . g:syntax_colors.property
execute 'highlight iniKey guifg=' . g:syntax_colors.property
execute 'highlight iniValue guifg=' . g:colors.fg1
execute 'highlight iniSection guifg=' . g:syntax_colors.class
execute 'highlight iniComment guifg=' . g:syntax_colors.comment 

" Section headers
execute 'highlight iniHeader guifg=' . g:syntax_colors.class
execute 'highlight iniHeaderDelimiter guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight iniSectionDelimiter guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight iniSectionEnd guifg=' . g:syntax_colors.punctuation_brace

" Values and types
execute 'highlight iniString guifg=' . g:colors.fg1
execute 'highlight iniStringDelimiter guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight iniNumber guifg=' . g:syntax_colors.constant
execute 'highlight iniFloat guifg=' . g:syntax_colors.constant
execute 'highlight iniBoolean guifg=' . g:syntax_colors.constant
execute 'highlight iniDate guifg=' . g:syntax_colors.datetime
execute 'highlight iniTime guifg=' . g:syntax_colors.datetime
execute 'highlight iniDateTime guifg=' . g:syntax_colors.datetime
execute 'highlight iniArray guifg=' . g:colors.fg1
execute 'highlight iniArrayDelimiter guifg=' . g:syntax_colors.punctuation

" Special characters
execute 'highlight iniEscape guifg=' . g:syntax_colors.constant
execute 'highlight iniSpecial guifg=' . g:syntax_colors.constant
execute 'highlight iniVariable guifg=' . g:syntax_colors.variable
execute 'highlight iniEnvironmentVariable guifg=' . g:syntax_colors.variable
execute 'highlight iniMacro guifg=' . g:syntax_colors.variable
execute 'highlight iniInterpolation guifg=' . g:syntax_colors.variable

" Operators and delimiters
execute 'highlight iniOperator guifg=' . g:syntax_colors.operator
execute 'highlight iniAssignment guifg=' . g:syntax_colors.operator
execute 'highlight iniDelimiter guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight iniSeparator guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight iniContinuation guifg=' . g:syntax_colors.operator

" Comments and documentation
execute 'highlight iniCommentKey guifg=' . g:syntax_colors.comment
execute 'highlight iniCommentValue guifg=' . g:syntax_colors.comment
execute 'highlight iniTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Error highlighting
execute 'highlight iniError guifg=' . g:colors.error
execute 'highlight iniInvalidSection guifg=' . g:colors.error
execute 'highlight iniInvalidKey guifg=' . g:colors.error
execute 'highlight iniInvalidValue guifg=' . g:colors.error
execute 'highlight iniMissingValue guifg=' . g:colors.warning
execute 'highlight iniDuplicateSection guifg=' . g:colors.warning
execute 'highlight iniDuplicateKey guifg=' . g:colors.warning

" Config file specific
execute 'highlight configComment guifg=' . g:syntax_colors.comment
execute 'highlight configSection guifg=' . g:syntax_colors.class
execute 'highlight configKey guifg=' . g:syntax_colors.property
execute 'highlight configValue guifg=' . g:colors.fg1
execute 'highlight configString guifg=' . g:colors.fg1
execute 'highlight configNumber guifg=' . g:syntax_colors.constant
execute 'highlight configBoolean guifg=' . g:syntax_colors.constant
execute 'highlight configPath guifg=' . g:colors.info
execute 'highlight configVariable guifg=' . g:syntax_colors.variable
execute 'highlight configDelimiter guifg=' . g:syntax_colors.punctuation_comma

" Properties file specific
execute 'highlight propertiesComment guifg=' . g:syntax_colors.comment
execute 'highlight propertiesKey guifg=' . g:syntax_colors.property
execute 'highlight propertiesValue guifg=' . g:colors.fg1
execute 'highlight propertiesAssignment guifg=' . g:syntax_colors.operator
execute 'highlight propertiesDelimiter guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight propertiesString guifg=' . g:colors.fg1
execute 'highlight propertiesEscape guifg=' . g:syntax_colors.constant
execute 'highlight propertiesPath guifg=' . g:colors.info

" Environment file specific
execute 'highlight envComment guifg=' . g:syntax_colors.comment
execute 'highlight envKey guifg=' . g:syntax_colors.property
execute 'highlight envValue guifg=' . g:colors.fg1
execute 'highlight envString guifg=' . g:colors.fg1
execute 'highlight envNumber guifg=' . g:syntax_colors.constant
execute 'highlight envBoolean guifg=' . g:syntax_colors.constant
execute 'highlight envOperator guifg=' . g:syntax_colors.operator
execute 'highlight envDelimiter guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight envEscape guifg=' . g:syntax_colors.constant
execute 'highlight envVariable guifg=' . g:syntax_colors.variable
execute 'highlight envPath guifg=' . g:colors.info

" Special sections and keys
execute 'highlight iniImportant guifg=' . g:syntax_colors.keyword . ' gui=bold'
execute 'highlight iniDeprecated guifg=' . g:syntax_colors.comment . ' gui=strikethrough'
execute 'highlight iniDefault guifg=' . g:syntax_colors.comment
execute 'highlight iniExample guifg=' . g:syntax_colors.comment
execute 'highlight iniNote guifg=' . g:syntax_colors.comment

" Special sections
execute 'highlight iniSpecialSection guifg=' . g:syntax_colors.keyword . ' gui=bold'
execute 'highlight iniSystemSection guifg=' . g:syntax_colors.keyword . ' gui=bold'
execute 'highlight iniUserSection guifg=' . g:syntax_colors.variable . ' gui=bold'

" Environment variables
execute 'highlight iniEnvVar guifg=' . g:syntax_colors.variable
execute 'highlight iniEnvVarValue guifg=' . g:colors.fg2
execute 'highlight iniEnvVarOperator guifg=' . g:syntax_colors.operator

" Additional error handling
execute 'highlight iniInvalidSection guifg=' . g:colors.error
execute 'highlight iniInvalidKey guifg=' . g:colors.error
execute 'highlight iniInvalidValue guifg=' . g:colors.error
execute 'highlight iniDuplicateKey guifg=' . g:colors.warning
execute 'highlight iniDuplicateSection guifg=' . g:colors.warning
