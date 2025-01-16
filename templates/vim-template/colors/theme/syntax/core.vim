" Core syntax highlighting
" This file contains all basic syntax highlighting rules

" Load color variables if not already loaded
if !exists('g:colors')
  runtime colors/theme/variables.vim
endif

" Comments
highlight Comment guifg=g:syntax_colors.comment
highlight SpecialComment guifg=g:syntax_colors.comment
execute 'highlight Todo guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning gui=bold'
highlight @comment guifg=g:syntax_colors.comment
highlight @comment.documentation guifg=g:syntax_colors.comment
execute 'highlight @comment.todo guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning gui=bold'
execute 'highlight @comment.note guifg=call(g:GetINFOForeground) guibg=g:colors.info gui=bold'
execute 'highlight @comment.warning guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning gui=bold'
execute 'highlight @comment.error guifg=call(g:GetERRORForeground) guibg=g:colors.error gui=bold'
execute 'highlight @comment.fixme guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning gui=bold'
execute 'highlight @comment.hack guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning gui=bold'

" Basic syntax
highlight String guifg=g:colors.fg1
highlight Character guifg=g:colors.fg1
highlight Number guifg=g:syntax_colors.constant
highlight Boolean guifg=g:syntax_colors.constant
highlight Float guifg=g:syntax_colors.constant
highlight Identifier guifg=g:syntax_colors.variable
highlight Function guifg=g:syntax_colors.function

" Keywords and control flow
highlight Statement guifg=g:syntax_colors.keyword
highlight Conditional guifg=g:syntax_colors.control_flow
highlight Repeat guifg=g:syntax_colors.control_flow
highlight Label guifg=g:syntax_colors.keyword
highlight Operator guifg=g:syntax_colors.operator
highlight Keyword guifg=g:syntax_colors.keyword
execute 'highlight Exception guifg=call(g:GetERRORForeground) guibg=g:colors.error'

" Types and storage
highlight Type guifg=g:syntax_colors.type
highlight StorageClass guifg=g:syntax_colors.storage
highlight Structure guifg=g:syntax_colors.type
highlight Typedef guifg=g:syntax_colors.type
highlight @type guifg=g:syntax_colors.type
highlight @type.builtin guifg=g:syntax_colors.type
highlight @type.definition guifg=g:syntax_colors.type_parameter
highlight @type.qualifier guifg=g:syntax_colors.modifier

" Functions and methods
highlight @function guifg=g:syntax_colors.function
highlight @function.call guifg=g:syntax_colors.function_call
highlight @function.builtin guifg=g:syntax_colors.support_function
highlight @method guifg=g:syntax_colors.method
highlight @method.call guifg=g:syntax_colors.method_call
highlight @constructor guifg=g:syntax_colors.class
highlight @decorator guifg=g:syntax_colors.function_call
highlight @annotation guifg=g:syntax_colors.function_call

" Variables and properties
highlight @variable guifg=g:syntax_colors.variable
highlight @variable.builtin guifg=g:syntax_colors.language
highlight @variable.parameter guifg=g:syntax_colors.parameter
highlight @variable.member guifg=g:syntax_colors.variable_property
highlight @property guifg=g:syntax_colors.property
highlight @field guifg=g:syntax_colors.variable_property
highlight @parameter guifg=g:syntax_colors.parameter
highlight @label guifg=g:syntax_colors.variable

" Constants and attributes
highlight Constant guifg=g:syntax_colors.variable_readonly
highlight @constant guifg=g:syntax_colors.variable_readonly
highlight @constant.builtin guifg=g:syntax_colors.language
highlight @attribute guifg=g:syntax_colors.attribute
highlight @namespace guifg=g:syntax_colors.variable

" Punctuation and delimiters
highlight Special guifg=g:syntax_colors.keyword
highlight SpecialChar guifg=g:syntax_colors.keyword
highlight Tag guifg=g:syntax_colors.tag
highlight Delimiter guifg=g:syntax_colors.punctuation
highlight @punctuation.bracket guifg=g:syntax_colors.punctuation_brace
highlight @punctuation.delimiter guifg=g:syntax_colors.punctuation
highlight @punctuation.special guifg=g:syntax_colors.punctuation

" Tags and markup
highlight @tag guifg=g:syntax_colors.tag
highlight @tag.delimiter guifg=g:syntax_colors.tag_punctuation
highlight @tag.attribute guifg=g:syntax_colors.attribute

" Text formatting
highlight Underlined guifg=g:colors.ac1 gui=underline
highlight Ignore guifg=g:syntax_colors.comment
execute 'highlight Error guifg=call(g:GetERRORForeground) guibg=g:colors.error'
execute 'highlight Todo guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning gui=bold'
highlight @text guifg=g:colors.fg1
highlight @text.strong guifg=g:colors.fg1 gui=bold
highlight @text.emphasis guifg=g:colors.fg1 gui=italic
highlight @text.underline guifg=g:colors.fg1 gui=underline
highlight @text.strike guifg=g:colors.fg1 gui=strikethrough
execute 'highlight @text.note guifg=call(g:GetINFOForeground) guibg=g:colors.info'
execute 'highlight @text.warning guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning'
execute 'highlight @text.danger guifg=call(g:GetERRORForeground) guibg=g:colors.error'

" TreeSitter specific
highlight @include guifg=g:syntax_colors.control_import
highlight @conditional guifg=g:syntax_colors.control_flow
highlight @repeat guifg=g:syntax_colors.control_flow
highlight @exception guifg=g:syntax_colors.control_flow
highlight @storage guifg=g:syntax_colors.storage
highlight @structure guifg=g:syntax_colors.type
highlight @keyword guifg=g:syntax_colors.keyword
highlight @keyword.function guifg=g:syntax_colors.keyword
highlight @keyword.operator guifg=g:syntax_colors.operator
highlight @keyword.return guifg=g:syntax_colors.keyword
highlight @operator guifg=g:syntax_colors.operator

" Plugin support
execute 'highlight CocErrorSign guifg=call(g:GetERRORForeground) guibg=g:colors.error'
execute 'highlight CocWarningSign guifg=call(g:GetWARNINGForeground) guibg=g:colors.warning'
execute 'highlight CocInfoSign guifg=call(g:GetINFOForeground) guibg=g:colors.info'
execute 'highlight CocHintSign guifg=call(g:GetSUCCESSForeground) guibg=g:colors.success'
highlight CocHighlightText guibg=g:colors.selection
highlight CocFloating guibg=g:colors.bg2
