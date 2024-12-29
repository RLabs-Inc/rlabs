" Regular Expression specific highlighting

" Basic patterns
execute 'highlight regexpDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight regexpSpecial guifg=' . g:syntaxColors.constant
execute 'highlight regexpEscape guifg=' . g:syntaxColors.constant
execute 'highlight regexpAnchor guifg=' . g:syntaxColors.keyword
execute 'highlight regexpMeta guifg=' . g:syntaxColors.keyword
execute 'highlight regexpQuantifier guifg=' . g:syntaxColors.operator
execute 'highlight regexpOr guifg=' . g:syntaxColors.operator
execute 'highlight regexpBack guifg=' . g:syntaxColors.constant
execute 'highlight regexpBracket guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight regexpBrace guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight regexpParens guifg=' . g:syntaxColors.punctuationBrace

" Character classes
execute 'highlight regexpCharClass guifg=' . g:syntaxColors.type
execute 'highlight regexpDot guifg=' . g:syntaxColors.operator
execute 'highlight regexpRange guifg=' . g:syntaxColors.constant
execute 'highlight regexpSymbols guifg=' . g:syntaxColors.constant
execute 'highlight regexpBoundary guifg=' . g:syntaxColors.keyword
execute 'highlight regexpClassRange guifg=' . g:syntaxColors.constant
execute 'highlight regexpClassRangeEnd guifg=' . g:syntaxColors.constant
execute 'highlight regexpClassNegate guifg=' . g:syntaxColors.operator

" Groups and references
execute 'highlight regexpGroup guifg=' . g:colors.FG1
execute 'highlight regexpGroupName guifg=' . g:syntaxColors.variable
execute 'highlight regexpCapture guifg=' . g:syntaxColors.variable
execute 'highlight regexpBackRef guifg=' . g:syntaxColors.constant
execute 'highlight regexpNonCapture guifg=' . g:syntaxColors.comment
execute 'highlight regexpComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" Quantifiers
execute 'highlight regexpZeroOne guifg=' . g:syntaxColors.operator
execute 'highlight regexpZeroMore guifg=' . g:syntaxColors.operator
execute 'highlight regexpOneMore guifg=' . g:syntaxColors.operator
execute 'highlight regexpQuantifier guifg=' . g:syntaxColors.operator
execute 'highlight regexpQuantifierNum guifg=' . g:syntaxColors.constant
execute 'highlight regexpGreedy guifg=' . g:syntaxColors.operator
execute 'highlight regexpNonGreedy guifg=' . g:syntaxColors.operator
execute 'highlight regexpPossessive guifg=' . g:syntaxColors.operator

" Assertions
execute 'highlight regexpLookahead guifg=' . g:syntaxColors.keyword
execute 'highlight regexpNegLookahead guifg=' . g:syntaxColors.keyword
execute 'highlight regexpLookbehind guifg=' . g:syntaxColors.keyword
execute 'highlight regexpNegLookbehind guifg=' . g:syntaxColors.keyword
execute 'highlight regexpWordBoundary guifg=' . g:syntaxColors.keyword
execute 'highlight regexpNonWordBoundary guifg=' . g:syntaxColors.keyword
execute 'highlight regexpBeginLine guifg=' . g:syntaxColors.keyword
execute 'highlight regexpEndLine guifg=' . g:syntaxColors.keyword

" Special characters
execute 'highlight regexpWord guifg=' . g:syntaxColors.constant
execute 'highlight regexpDigit guifg=' . g:syntaxColors.constant
execute 'highlight regexpSpace guifg=' . g:syntaxColors.constant
execute 'highlight regexpNonWord guifg=' . g:syntaxColors.constant
execute 'highlight regexpNonDigit guifg=' . g:syntaxColors.constant
execute 'highlight regexpNonSpace guifg=' . g:syntaxColors.constant
execute 'highlight regexpHexCode guifg=' . g:syntaxColors.constant
execute 'highlight regexpOctCode guifg=' . g:syntaxColors.constant
execute 'highlight regexpUnicode guifg=' . g:syntaxColors.constant
execute 'highlight regexpASCII guifg=' . g:syntaxColors.constant

" Modifiers and flags
execute 'highlight regexpModifier guifg=' . g:syntaxColors.modifier
execute 'highlight regexpFlag guifg=' . g:syntaxColors.modifier
execute 'highlight regexpIgnoreCase guifg=' . g:syntaxColors.modifier
execute 'highlight regexpMultiline guifg=' . g:syntaxColors.modifier
execute 'highlight regexpDotAll guifg=' . g:syntaxColors.modifier
execute 'highlight regexpExtended guifg=' . g:syntaxColors.modifier
execute 'highlight regexpGlobal guifg=' . g:syntaxColors.modifier
execute 'highlight regexpSticky guifg=' . g:syntaxColors.modifier
execute 'highlight regexpUnicodeProp guifg=' . g:syntaxColors.modifier

" POSIX classes
execute 'highlight regexpPOSIXClass guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXAlnum guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXAlpha guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXASCII guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXBlank guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXCntrl guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXDigit guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXGraph guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXLower guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXPrint guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXPunct guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXSpace guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXUpper guifg=' . g:syntaxColors.type
execute 'highlight regexpPOSIXXDigit guifg=' . g:syntaxColors.type

" Error highlighting
execute 'highlight regexpError guifg=' . g:colors.ERROR
execute 'highlight regexpInvalidRange guifg=' . g:colors.ERROR
execute 'highlight regexpInvalidGroup guifg=' . g:colors.ERROR
execute 'highlight regexpInvalidQuantifier guifg=' . g:colors.ERROR
execute 'highlight regexpInvalidEscape guifg=' . g:colors.ERROR
execute 'highlight regexpDuplicateFlag guifg=' . g:colors.ERROR
execute 'highlight regexpEmptyGroup guifg=' . g:colors.WARNING
execute 'highlight regexpEmptyClass guifg=' . g:colors.WARNING
execute 'highlight regexpRedundantEscape guifg=' . g:colors.WARNING
