" HTML/XML specific highlighting

" Tags
execute 'highlight htmlTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight htmlEndTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight htmlTagName guifg=' . g:syntaxColors.tag
execute 'highlight htmlSpecialTagName guifg=' . g:syntaxColors.tag
execute 'highlight htmlArg guifg=' . g:syntaxColors.attribute
execute 'highlight htmlString guifg=' . g:colors.FG1
execute 'highlight htmlValue guifg=' . g:colors.FG1
execute 'highlight htmlTitle guifg=' . g:colors.FG1 . ' gui=bold'

" Special elements
execute 'highlight htmlH1 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH2 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH3 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH4 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH5 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH6 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlLink guifg=' . g:colors.INFO . ' gui=underline'
execute 'highlight htmlBold gui=bold'
execute 'highlight htmlItalic gui=italic'
execute 'highlight htmlUnderline gui=underline'

" XML
execute 'highlight xmlTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight xmlEndTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight xmlTagName guifg=' . g:syntaxColors.tag
execute 'highlight xmlAttrib guifg=' . g:syntaxColors.attribute
execute 'highlight xmlString guifg=' . g:colors.FG1
execute 'highlight xmlEqual guifg=' . g:syntaxColors.operator
execute 'highlight xmlEntity guifg=' . g:syntaxColors.constant
execute 'highlight xmlEntityPunct guifg=' . g:syntaxColors.punctuation
execute 'highlight xmlDocType guifg=' . g:syntaxColors.keyword
execute 'highlight xmlDocTypeKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight xmlCdata guifg=' . g:colors.FG1

" DTD
execute 'highlight dtdFunction guifg=' . g:syntaxColors.keyword
execute 'highlight dtdTag guifg=' . g:syntaxColors.tag
execute 'highlight dtdParamEntityPunct guifg=' . g:syntaxColors.punctuation
execute 'highlight dtdParamEntityDPunct guifg=' . g:syntaxColors.punctuation
execute 'highlight dtdTagName guifg=' . g:syntaxColors.tag
execute 'highlight dtdKeyword guifg=' . g:syntaxColors.keyword

" Special regions
execute 'highlight htmlScriptTag guifg=' . g:syntaxColors.tag
execute 'highlight htmlStyleTag guifg=' . g:syntaxColors.tag
execute 'highlight htmlPreTag guifg=' . g:syntaxColors.tag
execute 'highlight htmlSpecial guifg=' . g:syntaxColors.constant
execute 'highlight htmlSpecialChar guifg=' . g:syntaxColors.constant
execute 'highlight htmlCssDefinition guifg=' . g:syntaxColors.attribute
execute 'highlight htmlEvent guifg=' . g:syntaxColors.attribute
execute 'highlight htmlCommentPart guifg=' . g:syntaxColors.comment

" Embedded JavaScript
execute 'highlight javaScript guifg=' . g:colors.FG1
execute 'highlight javaScriptExpression guifg=' . g:colors.FG1
execute 'highlight htmlJavaScript guifg=' . g:colors.FG1
execute 'highlight htmlJavaScriptTag guifg=' . g:syntaxColors.tag
execute 'highlight htmlJavaScriptAttribute guifg=' . g:syntaxColors.attribute

" Embedded CSS
execute 'highlight htmlCssStyleComment guifg=' . g:syntaxColors.comment
execute 'highlight htmlCssDefinition guifg=' . g:syntaxColors.attribute
execute 'highlight cssStyle guifg=' . g:colors.FG1
execute 'highlight cssClassName guifg=' . g:syntaxColors.class
execute 'highlight cssIdentifier guifg=' . g:syntaxColors.class
execute 'highlight cssTagName guifg=' . g:syntaxColors.tag

" Error highlighting
execute 'highlight htmlError guifg=' . g:colors.ERROR
execute 'highlight htmlBadArg guifg=' . g:colors.ERROR
execute 'highlight htmlPreError guifg=' . g:colors.ERROR
execute 'highlight htmlCommentError guifg=' . g:colors.ERROR
execute 'highlight htmlSpecialTagError guifg=' . g:colors.ERROR
