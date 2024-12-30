" Markdown specific highlighting

" Headers
execute 'highlight markdownH1 guifg=call(g:GetAC2Foreground) guibg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownH2 guifg=call(g:GetAC2Foreground) guibg=' . g:colors.ac1 . ' gui=bold'
execute 'highlight markdownH3 guifg=call(g:GetAC2Foreground) guibg=' . g:ansi_colors.yellow . ' gui=bold'
execute 'highlight markdownH4 guifg=call(g:GetAC2Foreground) guibg=' . g:ansi_colors.green . ' gui=bold'
execute 'highlight markdownH5 guifg=call(g:GetAC2Foreground) guibg=' . g:ansi_colors.blue . ' gui=bold'
execute 'highlight markdownH6 guifg=call(g:GetAC2Foreground) guibg=' . g:ansi_colors.red . ' gui=bold'
execute 'highlight markdownHeadingDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownHeadingRule guifg=' . g:syntax_colors.punctuation

" Emphasis
execute 'highlight markdownBold guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight markdownItalic guifg=' . g:colors.fg1 . ' gui=italic'
execute 'highlight markdownBoldItalic guifg=' . g:colors.fg1 . ' gui=bold,italic'
execute 'highlight markdownStrike guifg=' . g:colors.fg1 . ' gui=strikethrough'

" Lists
execute 'highlight markdownListMarker guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownOrderedListMarker guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownCheckboxList guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownCheckboxComplete guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success

" Links and References
execute 'highlight markdownLinkText guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight markdownUrl guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight markdownLinkDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownLinkTextDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownIdDeclaration guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight markdownId guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight markdownIdDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownFootnote guifg=call(g:GetINFOForeground) guibg=' . g:colors.info
execute 'highlight markdownFootnoteDefinition guifg=call(g:GetINFOForeground) guibg=' . g:colors.info

" Code
execute 'highlight markdownCode guifg=' . g:colors.fg2
execute 'highlight markdownCodeBlock guifg=' . g:colors.fg2
execute 'highlight markdownCodeDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownFencedCodeBlock guifg=' . g:colors.fg2
execute 'highlight markdownLanguage guifg=' . g:syntax_colors.type

" Quotes and Rules
execute 'highlight markdownBlockquote guifg=' . g:syntax_colors.comment
execute 'highlight markdownBlockquoteDelimiter guifg=' . g:syntax_colors.comment
execute 'highlight markdownRule guifg=' . g:syntax_colors.punctuation

" Tables
execute 'highlight markdownTable guifg=' . g:colors.fg1
execute 'highlight markdownTableDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownTableHeader guifg=' . g:colors.fg1 . ' gui=bold'

" Special text
execute 'highlight markdownEscape guifg=' . g:syntax_colors.constant
execute 'highlight markdownError guifg=call(g:GetERRORForeground) guibg=' . g:colors.error
execute 'highlight markdownEmoji guifg=' . g:colors.fg1
execute 'highlight markdownAutomaticLink guifg=call(g:GetINFOForeground) guibg=' . g:colors.info

" HTML in Markdown
execute 'highlight markdownHtml guifg=' . g:colors.fg1
execute 'highlight markdownHtmlTag guifg=' . g:syntax_colors.tag
execute 'highlight markdownHtmlTagName guifg=' . g:syntax_colors.tag
execute 'highlight markdownHtmlArg guifg=' . g:syntax_colors.attribute
execute 'highlight markdownHtmlComment guifg=' . g:syntax_colors.comment

" Task Lists
execute 'highlight markdownTaskList guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownTaskListDone guifg=call(g:GetSUCCESSForeground) guibg=' . g:colors.success
execute 'highlight markdownTaskListPending guifg=call(g:GetWARNINGForeground) guibg=' . g:colors.warning

" Math and Diagrams
execute 'highlight markdownMath guifg=' . g:syntax_colors.constant
execute 'highlight markdownDiagram guifg=' . g:syntax_colors.constant
execute 'highlight markdownMermaid guifg=' . g:syntax_colors.constant

" Metadata and Front Matter
execute 'highlight markdownYamlHead guifg=' . g:syntax_colors.keyword
execute 'highlight markdownYamlDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight markdownYamlKey guifg=' . g:syntax_colors.property
execute 'highlight markdownYamlValue guifg=' . g:colors.fg1

" Extensions
execute 'highlight markdownExtendedHeader guifg=call(g:GetAC2Foreground) guibg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight markdownExtendedTable guifg=' . g:colors.fg1
execute 'highlight markdownExtendedTableHeader guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight markdownDefinitionList guifg=' . g:colors.fg1
execute 'highlight markdownDefinitionTerm guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight markdownDefinitionDescription guifg=' . g:colors.fg1

" Definition list highlights
execute 'highlight markdownDefinitionList guifg=' . g:syntax_colors.variable
execute 'highlight markdownDefinitionTerm guifg=' . g:syntax_colors.variable . ' gui=bold'
execute 'highlight markdownDefinitionDescription guifg=' . g:colors.fg1

" Documentation sections
execute 'highlight markdownDocumentationSection guifg=' . g:syntax_colors.comment 
execute 'highlight markdownDocumentationParam guifg=' . g:syntax_colors.parameter
execute 'highlight markdownDocumentationReturn guifg=' . g:syntax_colors.control_flow
execute 'highlight markdownDocumentationExample guifg=' . g:colors.fg1
