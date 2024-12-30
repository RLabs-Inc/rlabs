" Regular Expression specific highlighting

" Basic patterns
execute 'highlight regexpDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight regexpSpecial guifg=' . g:syntax_colors.constant
execute 'highlight regexpEscape guifg=' . g:syntax_colors.constant
execute 'highlight regexpAnchor guifg=' . g:syntax_colors.keyword
execute 'highlight regexpMeta guifg=' . g:syntax_colors.keyword
execute 'highlight regexpQuantifier guifg=' . g:syntax_colors.operator
execute 'highlight regexpOr guifg=' . g:syntax_colors.operator
execute 'highlight regexpBack guifg=' . g:syntax_colors.constant
execute 'highlight regexpBracket guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight regexpBrace guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight regexpParens guifg=' . g:syntax_colors.punctuation_brace

" Character classes
execute 'highlight regexpCharClass guifg=' . g:syntax_colors.type
execute 'highlight regexpDot guifg=' . g:syntax_colors.operator
execute 'highlight regexpRange guifg=' . g:syntax_colors.constant
execute 'highlight regexpSymbols guifg=' . g:syntax_colors.constant
execute 'highlight regexpBoundary guifg=' . g:syntax_colors.keyword
execute 'highlight regexpClassRange guifg=' . g:syntax_colors.constant
execute 'highlight regexpClassRangeEnd guifg=' . g:syntax_colors.constant
execute 'highlight regexpClassNegate guifg=' . g:syntax_colors.operator

" Groups and references
execute 'highlight regexpGroup guifg=' . g:colors.fg1
execute 'highlight regexpGroupName guifg=' . g:syntax_colors.variable
execute 'highlight regexpCapture guifg=' . g:syntax_colors.variable
execute 'highlight regexpBackRef guifg=' . g:syntax_colors.constant
execute 'highlight regexpNonCapture guifg=' . g:syntax_colors.comment
execute 'highlight regexpComment guifg=' . g:syntax_colors.comment

" Quantifiers
execute 'highlight regexpZeroOne guifg=' . g:syntax_colors.operator
execute 'highlight regexpZeroMore guifg=' . g:syntax_colors.operator
execute 'highlight regexpOneMore guifg=' . g:syntax_colors.operator
execute 'highlight regexpQuantifier guifg=' . g:syntax_colors.operator
execute 'highlight regexpQuantifierNum guifg=' . g:syntax_colors.constant
execute 'highlight regexpGreedy guifg=' . g:syntax_colors.operator
execute 'highlight regexpNonGreedy guifg=' . g:syntax_colors.operator
execute 'highlight regexpPossessive guifg=' . g:syntax_colors.operator

" Assertions
execute 'highlight regexpLookahead guifg=' . g:syntax_colors.keyword
execute 'highlight regexpNegLookahead guifg=' . g:syntax_colors.keyword
execute 'highlight regexpLookbehind guifg=' . g:syntax_colors.keyword
execute 'highlight regexpNegLookbehind guifg=' . g:syntax_colors.keyword
execute 'highlight regexpWordBoundary guifg=' . g:syntax_colors.keyword
execute 'highlight regexpNonWordBoundary guifg=' . g:syntax_colors.keyword
execute 'highlight regexpBeginLine guifg=' . g:syntax_colors.keyword
execute 'highlight regexpEndLine guifg=' . g:syntax_colors.keyword

" Special characters
execute 'highlight regexpWord guifg=' . g:syntax_colors.constant
execute 'highlight regexpDigit guifg=' . g:syntax_colors.constant
execute 'highlight regexpSpace guifg=' . g:syntax_colors.constant
execute 'highlight regexpNonWord guifg=' . g:syntax_colors.constant
execute 'highlight regexpNonDigit guifg=' . g:syntax_colors.constant
execute 'highlight regexpNonSpace guifg=' . g:syntax_colors.constant
execute 'highlight regexpHexCode guifg=' . g:syntax_colors.constant
execute 'highlight regexpOctCode guifg=' . g:syntax_colors.constant
execute 'highlight regexpUnicode guifg=' . g:syntax_colors.constant
execute 'highlight regexpASCII guifg=' . g:syntax_colors.constant

" Modifiers and flags
execute 'highlight regexpModifier guifg=' . g:syntax_colors.modifier
execute 'highlight regexpFlag guifg=' . g:syntax_colors.modifier
execute 'highlight regexpIgnoreCase guifg=' . g:syntax_colors.modifier
execute 'highlight regexpMultiline guifg=' . g:syntax_colors.modifier
execute 'highlight regexpDotAll guifg=' . g:syntax_colors.modifier
execute 'highlight regexpExtended guifg=' . g:syntax_colors.modifier
execute 'highlight regexpGlobal guifg=' . g:syntax_colors.modifier
execute 'highlight regexpSticky guifg=' . g:syntax_colors.modifier
execute 'highlight regexpUnicodeProp guifg=' . g:syntax_colors.modifier

" POSIX classes
execute 'highlight regexpPOSIXClass guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXAlnum guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXAlpha guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXASCII guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXBlank guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXCntrl guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXDigit guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXGraph guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXLower guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXPrint guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXPunct guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXSpace guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXUpper guifg=' . g:syntax_colors.type
execute 'highlight regexpPOSIXXDigit guifg=' . g:syntax_colors.type

" Error highlighting
execute 'highlight regexpError guifg=' . g:colors.error
execute 'highlight regexpInvalidRange guifg=' . g:colors.error
execute 'highlight regexpInvalidGroup guifg=' . g:colors.error
execute 'highlight regexpInvalidQuantifier guifg=' . g:colors.error
execute 'highlight regexpInvalidEscape guifg=' . g:colors.error
execute 'highlight regexpDuplicateFlag guifg=' . g:colors.error
execute 'highlight regexpEmptyGroup guifg=' . g:colors.warning
execute 'highlight regexpEmptyClass guifg=' . g:colors.warning
execute 'highlight regexpRedundantEscape guifg=' . g:colors.warning
