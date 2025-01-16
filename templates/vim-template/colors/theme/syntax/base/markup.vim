" Markup syntax highlighting (matching VSCode's markup token colors)

" HTML-style tags
execute 'highlight htmlTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight htmlEndTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight htmlTagName guifg=' . g:syntax_colors.tag
execute 'highlight htmlTagN guifg=' . g:syntax_colors.tag
execute 'highlight htmlSpecialTagName guifg=' . g:syntax_colors.tag
execute 'highlight htmlArg guifg=' . g:syntax_colors.attribute
execute 'highlight htmlString guifg=' . g:colors.fg1
execute 'highlight htmlValue guifg=' . g:colors.fg1
execute 'highlight htmlTitle guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH1 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH2 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH3 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH4 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH5 guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight htmlH6 guifg=' . g:colors.fg1 . ' gui=bold'

" XML-style tags
execute 'highlight xmlTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight xmlEndTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight xmlTagName guifg=' . g:syntax_colors.tag
execute 'highlight xmlAttrib guifg=' . g:syntax_colors.attribute
execute 'highlight xmlString guifg=' . g:colors.fg1
execute 'highlight xmlEqual guifg=' . g:syntax_colors.operator

" Common markup elements
execute 'highlight markdownHeadingDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownH1 guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownH2 guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownH3 guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownH4 guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownH5 guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownH6 guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownBold guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight markdownItalic guifg=' . g:colors.fg1 . ' gui=italic'
execute 'highlight markdownBoldItalic guifg=' . g:colors.fg1 . ' gui=bold,italic'
execute 'highlight markdownBlockquote guifg=' . g:syntax_colors.comment
execute 'highlight markdownCode guifg=' . g:colors.fg2
execute 'highlight markdownCodeBlock guifg=' . g:colors.fg2
execute 'highlight markdownLineBreak guifg=' . g:syntax_colors.comment
execute 'highlight markdownUrl guifg=' . g:colors.info
execute 'highlight markdownLinkText guifg=' . g:colors.info
execute 'highlight markdownListMarker guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownOrderedListMarker guifg=' . g:syntax_colors.punctuation

" Documentation comments
execute 'highlight docComment guifg=' . g:syntax_colors.comment 
execute 'highlight docTags guifg=' . g:syntax_colors.keyword 
execute 'highlight docParam guifg=' . g:syntax_colors.parameter 
execute 'highlight docType guifg=' . g:syntax_colors.type 

" JSDoc/TSDoc specific
execute 'highlight jsDocTags guifg=' . g:syntax_colors.keyword 
execute 'highlight jsDocType guifg=' . g:syntax_colors.type 
execute 'highlight jsDocTypeNoParam guifg=' . g:syntax_colors.type 
execute 'highlight jsDocParam guifg=' . g:syntax_colors.parameter 
execute 'highlight jsDocSeeTag guifg=' . g:colors.info 

" Doxygen specific
execute 'highlight doxygenBrief guifg=' . g:syntax_colors.comment 
execute 'highlight doxygenParam guifg=' . g:syntax_colors.parameter 
execute 'highlight doxygenSpecial guifg=' . g:syntax_colors.keyword 
execute 'highlight doxygenBOther guifg=' . g:syntax_colors.type 
execute 'highlight doxygenComment guifg=' . g:syntax_colors.comment 

" RDoc specific
execute 'highlight rdocOption guifg=' . g:syntax_colors.keyword 
execute 'highlight rdocType guifg=' . g:syntax_colors.type 
execute 'highlight rdocParam guifg=' . g:syntax_colors.parameter 

" Structured text elements
execute 'highlight StructuredTextDirective guifg=' . g:syntax_colors.keyword
execute 'highlight StructuredTextReference guifg=' . g:colors.info
execute 'highlight StructuredTextEmphasis gui=italic'
execute 'highlight StructuredTextStrongEmphasis gui=bold'
execute 'highlight StructuredTextLiteral guifg=' . g:colors.fg1

" AsciiDoc elements
execute 'highlight asciidocTitle guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight asciidocAnchor guifg=' . g:colors.info
execute 'highlight asciidocAdmonition guifg=' . g:syntax_colors.keyword
execute 'highlight asciidocAttributeRef guifg=' . g:syntax_colors.attribute
execute 'highlight asciidocBlockTitle guifg=' . g:colors.ac2

" reStructuredText elements
execute 'highlight rstSections guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight rstDirective guifg=' . g:syntax_colors.keyword
execute 'highlight rstRole guifg=' . g:syntax_colors.attribute
execute 'highlight rstInterpretedTextOrHyperlinkReference guifg=' . g:colors.info
execute 'highlight rstStrongEmphasis gui=bold'
execute 'highlight rstEmphasis gui=italic'
