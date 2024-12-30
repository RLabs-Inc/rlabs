" String syntax highlighting (matching VSCode's string token colors)

" Basic strings
execute 'highlight String guifg=' . g:colors.fg1
execute 'highlight Character guifg=' . g:colors.fg1
execute 'highlight StringDelimiter guifg=' . g:syntax_colors.punctuation_quote

" String escape sequences
execute 'highlight SpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight StringEscape guifg=' . g:syntax_colors.constant

" String interpolation
execute 'highlight StringInterpolation guifg=' . g:syntax_colors.function
execute 'highlight InterpolationDelimiter guifg=' . g:syntax_colors.function
execute 'highlight InterpolationBrace guifg=' . g:syntax_colors.function

" Language-specific strings
" C/C++
execute 'highlight cString guifg=' . g:colors.fg1
execute 'highlight cCharacter guifg=' . g:colors.fg1
execute 'highlight cSpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight cFormat guifg=' . g:syntax_colors.constant
execute 'highlight cppString guifg=' . g:colors.fg1
execute 'highlight cppRawString guifg=' . g:colors.fg1
execute 'highlight cppRawStringDelimiter guifg=' . g:syntax_colors.punctuation_quote

" JavaScript/TypeScript
execute 'highlight jsString guifg=' . g:colors.fg1
execute 'highlight jsTemplateString guifg=' . g:colors.fg1
execute 'highlight jsTemplateBraces guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight jsTemplateExpression guifg=' . g:colors.fg1
execute 'highlight jsTaggedTemplate guifg=' . g:colors.fg1
execute 'highlight jsStringEscape guifg=' . g:syntax_colors.constant
execute 'highlight typescriptString guifg=' . g:colors.fg1
execute 'highlight typescriptTemplate guifg=' . g:colors.fg1
execute 'highlight typescriptTemplateSB guifg=' . g:syntax_colors.punctuation
execute 'highlight typescriptStringProperty guifg=' . g:colors.fg1

" Python
execute 'highlight pythonString guifg=' . g:colors.fg1
execute 'highlight pythonRawString guifg=' . g:colors.fg1
execute 'highlight pythonQuotes guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight pythonTripleQuotes guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight pythonEscape guifg=' . g:syntax_colors.constant
execute 'highlight pythonFString guifg=' . g:colors.fg1
execute 'highlight pythonStrFormat guifg=' . g:syntax_colors.constant
execute 'highlight pythonStrFormatting guifg=' . g:syntax_colors.constant
execute 'highlight pythonStrTemplate guifg=' . g:colors.fg1

" Ruby
execute 'highlight rubyString guifg=' . g:colors.fg1
execute 'highlight rubyStringDelimiter guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight rubyInterpolation guifg=' . g:colors.fg1
execute 'highlight rubyInterpolationDelimiter guifg=' . g:syntax_colors.function
execute 'highlight rubyEscape guifg=' . g:syntax_colors.constant
execute 'highlight rubyRegexp guifg=' . g:colors.fg1
execute 'highlight rubyRegexpDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight rubyRegexpSpecial guifg=' . g:syntax_colors.constant

" Java
execute 'highlight javaString guifg=' . g:colors.fg1
execute 'highlight javaCharacter guifg=' . g:colors.fg1
execute 'highlight javaSpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight javaFormat guifg=' . g:syntax_colors.constant

" Go
execute 'highlight goString guifg=' . g:colors.fg1
execute 'highlight goRawString guifg=' . g:colors.fg2
execute 'highlight goEscapeC guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeX guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeU guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeBigU guifg=' . g:syntax_colors.constant

" Rust
execute 'highlight rustString guifg=' . g:colors.fg1
execute 'highlight rustStringDelimiter guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight rustCharacter guifg=' . g:colors.fg1
execute 'highlight rustCharacterInvalid guifg=' . g:colors.error
execute 'highlight rustEscape guifg=' . g:syntax_colors.constant
execute 'highlight rustEscapeUnicode guifg=' . g:syntax_colors.constant
execute 'highlight rustEscapeError guifg=' . g:colors.error

" PHP
execute 'highlight phpString guifg=' . g:colors.fg1
execute 'highlight phpStringDelimiter guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight phpBacktick guifg=' . g:syntax_colors.punctuation
execute 'highlight phpHereDoc guifg=' . g:colors.fg1
execute 'highlight phpNowDoc guifg=' . g:colors.fg1

" Regular expressions
execute 'highlight RegexpSpecial guifg=' . g:syntax_colors.constant
execute 'highlight RegexpCharClass guifg=' . g:syntax_colors.constant
execute 'highlight RegexpQuantifier guifg=' . g:syntax_colors.constant
execute 'highlight RegexpGroup guifg=' . g:syntax_colors.constant
execute 'highlight RegexpBoundary guifg=' . g:syntax_colors.constant
execute 'highlight RegexpBackRef guifg=' . g:syntax_colors.constant
execute 'highlight RegexpAnchor guifg=' . g:syntax_colors.function
execute 'highlight RegexpOperator guifg=' . g:syntax_colors.operator
execute 'highlight RegexpComment guifg=' . g:syntax_colors.comment
execute 'highlight RegexpDelimiter guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight RegexpRange guifg=' . g:syntax_colors.constant
execute 'highlight RegexpEscape guifg=' . g:syntax_colors.constant
execute 'highlight RegexpUnicode guifg=' . g:syntax_colors.constant
execute 'highlight RegexpBracket guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight RegexpParens guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight RegexpModifier guifg=' . g:syntax_colors.modifier
execute 'highlight RegexpQuantifierRange guifg=' . g:syntax_colors.constant
execute 'highlight RegexpOr guifg=' . g:syntax_colors.constant
