" Markdown specific highlighting

" Headers
execute 'highlight markdownH1 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH2 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH3 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH4 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH5 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownH6 guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownHeadingDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownHeadingRule guifg=' . g:syntaxColors.punctuation

" Emphasis
execute 'highlight markdownBold guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight markdownItalic guifg=' . g:colors.FG1 . ' gui=italic'
execute 'highlight markdownBoldItalic guifg=' . g:colors.FG1 . ' gui=bold,italic'
execute 'highlight markdownStrike guifg=' . g:colors.FG1 . ' gui=strikethrough'

" Lists
execute 'highlight markdownListMarker guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownOrderedListMarker guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownCheckboxList guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownCheckboxComplete guifg=' . g:colors.SUCCESS

" Links and References
execute 'highlight markdownLinkText guifg=' . g:colors.INFO
execute 'highlight markdownUrl guifg=' . g:colors.INFO
execute 'highlight markdownLinkDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownLinkTextDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownIdDeclaration guifg=' . g:colors.INFO
execute 'highlight markdownId guifg=' . g:colors.INFO
execute 'highlight markdownIdDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownFootnote guifg=' . g:colors.INFO
execute 'highlight markdownFootnoteDefinition guifg=' . g:colors.INFO

" Code
execute 'highlight markdownCode guifg=' . g:syntaxColors.string
execute 'highlight markdownCodeBlock guifg=' . g:syntaxColors.string
execute 'highlight markdownCodeDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownFencedCodeBlock guifg=' . g:syntaxColors.string
execute 'highlight markdownLanguage guifg=' . g:syntaxColors.type

" Quotes and Rules
execute 'highlight markdownBlockquote guifg=' . g:syntaxColors.comment
execute 'highlight markdownBlockquoteDelimiter guifg=' . g:syntaxColors.comment
execute 'highlight markdownRule guifg=' . g:syntaxColors.punctuation

" Tables
execute 'highlight markdownTable guifg=' . g:colors.FG1
execute 'highlight markdownTableDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownTableHeader guifg=' . g:colors.FG1 . ' gui=bold'

" Special text
execute 'highlight markdownEscape guifg=' . g:syntaxColors.constant
execute 'highlight markdownError guifg=' . g:colors.ERROR
execute 'highlight markdownEmoji guifg=' . g:colors.FG1
execute 'highlight markdownAutomaticLink guifg=' . g:colors.INFO

" HTML in Markdown
execute 'highlight markdownHtml guifg=' . g:colors.FG1
execute 'highlight markdownHtmlTag guifg=' . g:syntaxColors.tag
execute 'highlight markdownHtmlTagName guifg=' . g:syntaxColors.tag
execute 'highlight markdownHtmlArg guifg=' . g:syntaxColors.attribute
execute 'highlight markdownHtmlComment guifg=' . g:syntaxColors.comment

" Task Lists
execute 'highlight markdownTaskList guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownTaskListDone guifg=' . g:colors.SUCCESS
execute 'highlight markdownTaskListPending guifg=' . g:colors.WARNING

" Math and Diagrams
execute 'highlight markdownMath guifg=' . g:syntaxColors.constant
execute 'highlight markdownDiagram guifg=' . g:syntaxColors.constant
execute 'highlight markdownMermaid guifg=' . g:syntaxColors.constant

" Metadata and Front Matter
execute 'highlight markdownYamlHead guifg=' . g:syntaxColors.keyword
execute 'highlight markdownYamlDelimiter guifg=' . g:syntaxColors.punctuation
execute 'highlight markdownYamlKey guifg=' . g:syntaxColors.property
execute 'highlight markdownYamlValue guifg=' . g:colors.FG1

" Extensions
execute 'highlight markdownExtendedHeader guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight markdownExtendedTable guifg=' . g:colors.FG1
execute 'highlight markdownExtendedTableHeader guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight markdownDefinitionList guifg=' . g:colors.FG1
execute 'highlight markdownDefinitionTerm guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight markdownDefinitionDescription guifg=' . g:colors.FG1

" Definition list highlights
execute 'highlight markdownDefinitionList guifg=' . g:syntaxColors.variable
execute 'highlight markdownDefinitionTerm guifg=' . g:syntaxColors.variable . ' gui=bold'
execute 'highlight markdownDefinitionDescription guifg=' . g:colors.FG1

" Documentation sections
execute 'highlight markdownDocumentationSection guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight markdownDocumentationParam guifg=' . g:syntaxColors.parameter
execute 'highlight markdownDocumentationReturn guifg=' . g:syntaxColors.controlFlow
execute 'highlight markdownDocumentationExample guifg=' . g:colors.FG1