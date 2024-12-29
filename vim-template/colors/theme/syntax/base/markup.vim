" Markup syntax highlighting (matching VSCode's markup token colors)

" HTML-style tags
execute 'highlight htmlTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight htmlEndTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight htmlTagName guifg=' . g:syntaxColors.tag
execute 'highlight htmlTagN guifg=' . g:syntaxColors.tag
execute 'highlight htmlSpecialTagName guifg=' . g:syntaxColors.tag
execute 'highlight htmlArg guifg=' . g:syntaxColors.attribute
execute 'highlight htmlString guifg=' . g:colors.FG1
execute 'highlight htmlValue guifg=' . g:colors.FG1
execute 'highlight htmlTitle guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH1 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH2 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH3 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH4 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH5 guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight htmlH6 guifg=' . g:colors.FG1 . ' gui=bold'

" XML-style tags
execute 'highlight xmlTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight xmlEndTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight xmlTagName guifg=' . g:syntaxColors.tag
execute 'highlight xmlAttrib guifg=' . g:syntaxColors.attribute
execute 'highlight xmlString guifg=' . g:colors.FG1
execute 'highlight xmlEqual guifg=' . g:syntaxColors.operator

" Common markup elements
execute 'highlight markdownHeadingDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownH1 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH2 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH3 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH4 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH5 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH6 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownBold guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight markdownItalic guifg=' . g:colors.FG1 . ' gui=italic'
execute 'highlight markdownBoldItalic guifg=' . g:colors.FG1 . ' gui=bold,italic'
execute 'highlight markdownBlockquote guifg=' . g:syntaxColors.comment
execute 'highlight markdownCode guifg=' . g:syntaxColors.string
execute 'highlight markdownCodeBlock guifg=' . g:syntaxColors.string
execute 'highlight markdownLineBreak guifg=' . g:syntaxColors.comment
execute 'highlight markdownUrl guifg=' . g:colors.INFO
execute 'highlight markdownLinkText guifg=' . g:colors.INFO
execute 'highlight markdownListMarker guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownOrderedListMarker guifg=' . g:syntaxColors.punctuation

" Documentation comments
execute 'highlight docComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight docTags guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight docParam guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Comment')
execute 'highlight docType guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Comment')

" JSDoc/TSDoc specific
execute 'highlight jsDocTags guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight jsDocType guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Comment')
execute 'highlight jsDocTypeNoParam guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Comment')
execute 'highlight jsDocParam guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Comment')
execute 'highlight jsDocSeeTag guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Comment')

" Doxygen specific
execute 'highlight doxygenBrief guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight doxygenParam guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Comment')
execute 'highlight doxygenSpecial guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight doxygenBOther guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Comment')
execute 'highlight doxygenComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" RDoc specific
execute 'highlight rdocOption guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Comment')
execute 'highlight rdocType guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Comment')
execute 'highlight rdocParam guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Comment')

" Structured text elements
execute 'highlight StructuredTextDirective guifg=' . g:syntaxColors.keyword
execute 'highlight StructuredTextReference guifg=' . g:colors.INFO
execute 'highlight StructuredTextEmphasis gui=italic'
execute 'highlight StructuredTextStrongEmphasis gui=bold'
execute 'highlight StructuredTextLiteral guifg=' . g:syntaxColors.string

" AsciiDoc elements
execute 'highlight asciidocTitle guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight asciidocAnchor guifg=' . g:colors.INFO
execute 'highlight asciidocAdmonition guifg=' . g:syntaxColors.keyword
execute 'highlight asciidocAttributeRef guifg=' . g:syntaxColors.attribute
execute 'highlight asciidocBlockTitle guifg=' . g:colors.AC2

" reStructuredText elements
execute 'highlight rstSections guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight rstDirective guifg=' . g:syntaxColors.keyword
execute 'highlight rstRole guifg=' . g:syntaxColors.attribute
execute 'highlight rstInterpretedTextOrHyperlinkReference guifg=' . g:colors.INFO
execute 'highlight rstStrongEmphasis gui=bold'
execute 'highlight rstEmphasis gui=italic'
