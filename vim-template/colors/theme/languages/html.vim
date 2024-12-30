" HTML/XML specific highlighting

" Tags
execute 'highlight htmlTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight htmlEndTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight htmlTagName guifg=' . g:syntax_colors.tag
execute 'highlight htmlSpecialTagName guifg=' . g:syntax_colors.tag
execute 'highlight htmlArg guifg=' . g:syntax_colors.attribute
execute 'highlight htmlString guifg=' . g:colors.fg1
execute 'highlight htmlValue guifg=' . g:colors.fg1
execute 'highlight htmlTitle guifg=' . g:colors.fg1 . ' gui=bold'

" Special elements
execute 'highlight htmlH1 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH2 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH3 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH4 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH5 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH6 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlLink guifg=' . g:colors.info . ' gui=underline'
execute 'highlight htmlBold gui=bold'
execute 'highlight htmlItalic gui=italic'
execute 'highlight htmlUnderline gui=underline'

" XML
execute 'highlight xmlTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight xmlEndTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight xmlTagName guifg=' . g:syntax_colors.tag
execute 'highlight xmlAttrib guifg=' . g:syntax_colors.attribute
execute 'highlight xmlString guifg=' . g:colors.fg1
execute 'highlight xmlEqual guifg=' . g:syntax_colors.operator
execute 'highlight xmlEntity guifg=' . g:syntax_colors.constant
execute 'highlight xmlEntityPunct guifg=' . g:syntax_colors.punctuation
execute 'highlight xmlDocType guifg=' . g:syntax_colors.keyword
execute 'highlight xmlDocTypeKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight xmlCdata guifg=' . g:colors.fg1

" DTD
execute 'highlight dtdFunction guifg=' . g:syntax_colors.keyword
execute 'highlight dtdTag guifg=' . g:syntax_colors.tag
execute 'highlight dtdParamEntityPunct guifg=' . g:syntax_colors.punctuation
execute 'highlight dtdParamEntityDPunct guifg=' . g:syntax_colors.punctuation
execute 'highlight dtdTagName guifg=' . g:syntax_colors.tag
execute 'highlight dtdKeyword guifg=' . g:syntax_colors.keyword

" Special regions
execute 'highlight htmlScriptTag guifg=' . g:syntax_colors.tag
execute 'highlight htmlStyleTag guifg=' . g:syntax_colors.tag
execute 'highlight htmlPreTag guifg=' . g:syntax_colors.tag
execute 'highlight htmlSpecial guifg=' . g:syntax_colors.constant
execute 'highlight htmlSpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight htmlCssDefinition guifg=' . g:syntax_colors.attribute
execute 'highlight htmlEvent guifg=' . g:syntax_colors.attribute
execute 'highlight htmlCommentPart guifg=' . g:syntax_colors.comment

" Embedded JavaScript
execute 'highlight javaScript guifg=' . g:colors.fg1
execute 'highlight javaScriptExpression guifg=' . g:colors.fg1
execute 'highlight htmlJavaScript guifg=' . g:colors.fg1
execute 'highlight htmlJavaScriptTag guifg=' . g:syntax_colors.tag
execute 'highlight htmlJavaScriptAttribute guifg=' . g:syntax_colors.attribute

" Embedded CSS
execute 'highlight htmlCssStyleComment guifg=' . g:syntax_colors.comment
execute 'highlight htmlCssDefinition guifg=' . g:syntax_colors.attribute
execute 'highlight cssStyle guifg=' . g:colors.fg1
execute 'highlight cssClassName guifg=' . g:syntax_colors.class
execute 'highlight cssIdentifier guifg=' . g:syntax_colors.class
execute 'highlight cssTagName guifg=' . g:syntax_colors.tag

" Error highlighting
execute 'highlight htmlError guifg=' . g:colors.error
execute 'highlight htmlBadArg guifg=' . g:colors.error
execute 'highlight htmlPreError guifg=' . g:colors.error
execute 'highlight htmlCommentError guifg=' . g:colors.error
execute 'highlight htmlSpecialTagError guifg=' . g:colors.error
