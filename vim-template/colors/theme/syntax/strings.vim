" String syntax highlighting (matching VSCode's string token colors)

" Basic strings
execute 'highlight String guifg=' . g:syntax_colors.string
execute 'highlight Character guifg=' . g:syntax_colors.string
execute 'highlight StringDelimiter guifg=' . g:syntax_colors.punctuation

" String escape sequences
execute 'highlight SpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight StringEscape guifg=' . g:syntax_colors.constant

" String interpolation
execute 'highlight StringInterpolation guifg=' . g:syntax_colors.punctuation
execute 'highlight InterpolationDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight InterpolationBrace guifg=' . g:syntax_colors.punctuation

" Language-specific strings
" C/C++
execute 'highlight cString guifg=' . g:syntax_colors.string
execute 'highlight cCharacter guifg=' . g:syntax_colors.string
execute 'highlight cSpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight cFormat guifg=' . g:syntax_colors.constant
execute 'highlight cppString guifg=' . g:syntax_colors.string
execute 'highlight cppRawString guifg=' . g:syntax_colors.string
execute 'highlight cppRawStringDelimiter guifg=' . g:syntax_colors.punctuation

" JavaScript/TypeScript
execute 'highlight jsString guifg=' . g:syntax_colors.string
execute 'highlight jsTemplateString guifg=' . g:syntax_colors.string
execute 'highlight jsTemplateBraces guifg=' . g:syntax_colors.punctuation
execute 'highlight jsTemplateExpression guifg=' . g:syntax_colors.string
execute 'highlight jsTaggedTemplate guifg=' . g:syntax_colors.string
execute 'highlight jsStringEscape guifg=' . g:syntax_colors.constant
execute 'highlight typescriptString guifg=' . g:syntax_colors.string
execute 'highlight typescriptTemplate guifg=' . g:syntax_colors.string
execute 'highlight typescriptTemplateSB guifg=' . g:syntax_colors.punctuation
execute 'highlight typescriptStringProperty guifg=' . g:syntax_colors.string

" Python
execute 'highlight pythonString guifg=' . g:syntax_colors.string
execute 'highlight pythonRawString guifg=' . g:syntax_colors.string
execute 'highlight pythonQuotes guifg=' . g:syntax_colors.punctuation
execute 'highlight pythonTripleQuotes guifg=' . g:syntax_colors.punctuation
execute 'highlight pythonEscape guifg=' . g:syntax_colors.constant
execute 'highlight pythonFString guifg=' . g:syntax_colors.string
execute 'highlight pythonStrFormat guifg=' . g:syntax_colors.constant
execute 'highlight pythonStrFormatting guifg=' . g:syntax_colors.constant
execute 'highlight pythonStrTemplate guifg=' . g:syntax_colors.string

" Ruby
execute 'highlight rubyString guifg=' . g:syntax_colors.string
execute 'highlight rubyStringDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight rubyInterpolation guifg=' . g:syntax_colors.string
execute 'highlight rubyInterpolationDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight rubyEscape guifg=' . g:syntax_colors.constant
execute 'highlight rubyRegexp guifg=' . g:syntax_colors.string
execute 'highlight rubyRegexpDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight rubyRegexpSpecial guifg=' . g:syntax_colors.constant

" Java
execute 'highlight javaString guifg=' . g:syntax_colors.string
execute 'highlight javaCharacter guifg=' . g:syntax_colors.string
execute 'highlight javaSpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight javaFormat guifg=' . g:syntax_colors.constant

" Go
execute 'highlight goString guifg=' . g:syntax_colors.string
execute 'highlight goRawString guifg=' . g:syntax_colors.string
execute 'highlight goEscapeC guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeX guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeU guifg=' . g:syntax_colors.constant
execute 'highlight goEscapeBigU guifg=' . g:syntax_colors.constant

" Rust
execute 'highlight rustString guifg=' . g:syntax_colors.string
execute 'highlight rustStringDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight rustCharacter guifg=' . g:syntax_colors.string
execute 'highlight rustCharacterInvalid guifg=' . g:colors.error
execute 'highlight rustEscape guifg=' . g:syntax_colors.constant
execute 'highlight rustEscapeUnicode guifg=' . g:syntax_colors.constant
execute 'highlight rustEscapeError guifg=' . g:colors.error

" PHP
execute 'highlight phpString guifg=' . g:syntax_colors.string
execute 'highlight phpStringDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight phpBacktick guifg=' . g:syntax_colors.punctuation
execute 'highlight phpHereDoc guifg=' . g:syntax_colors.string
execute 'highlight phpNowDoc guifg=' . g:syntax_colors.string

" Regular expressions
execute 'highlight RegexpSpecial guifg=' . g:syntax_colors.constant
execute 'highlight RegexpCharClass guifg=' . g:syntax_colors.constant
execute 'highlight RegexpQuantifier guifg=' . g:syntax_colors.constant
execute 'highlight RegexpGroup guifg=' . g:syntax_colors.constant
execute 'highlight RegexpBoundary guifg=' . g:syntax_colors.constant
execute 'highlight RegexpBackRef guifg=' . g:syntax_colors.constant
execute 'highlight RegexpAnchor guifg=' . g:syntax_colors.constant
execute 'highlight RegexpOperator guifg=' . g:syntax_colors.operator
execute 'highlight RegexpComment guifg=' . g:syntax_colors.comment
execute 'highlight RegexpDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight RegexpRange guifg=' . g:syntax_colors.constant
execute 'highlight RegexpEscape guifg=' . g:syntax_colors.constant
execute 'highlight RegexpUnicode guifg=' . g:syntax_colors.constant
execute 'highlight RegexpBracket guifg=' . g:syntax_colors.punctuation
execute 'highlight RegexpParens guifg=' . g:syntax_colors.punctuation
execute 'highlight RegexpModifier guifg=' . g:syntax_colors.modifier
execute 'highlight RegexpQuantifierRange guifg=' . g:syntax_colors.constant
execute 'highlight RegexpOr guifg=' . g:syntax_colors.constant
