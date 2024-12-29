" Theme color variables

" UI Colors
let g:colors = {
  \ 'bg1': '${BG1}',
  \ 'bg2': '${BG2}',
  \ 'bg3': '${BG3}',
  \ 'fg1': '${FG1}',
  \ 'fg2': '${FG2}',
  \ 'fg3': '${FG3}',
  \ 'ac1': '${AC1}',
  \ 'ac2': '${AC2}',
  \ 'border': '${BORDER}',
  \ 'info': '${INFO}',
  \ 'error': '${ERROR}',
  \ 'warning': '${WARNING}',
  \ 'success': '${SUCCESS}',
  \ 'line_highlight': '${LINE_HIGHLIGHT}',
  \ 'selection': '${SELECTION}',
  \ 'find_match': '${FIND_MATCH}'
  \ }

" Syntax Colors
let g:syntax_colors = {
  \ 'keyword': '${KEYWORD}',
  \ 'control': '${CONTROL}',
  \ 'control_flow': '${CONTROL_FLOW}',
  \ 'control_import': '${CONTROL_IMPORT}',
  \ 'modifier': '${MODIFIER}',
  \ 'comment': '${COMMENT}',
  \ 'function': '${FUNCTION}',
  \ 'function_call': '${FUNCTION_CALL}',
  \ 'method': '${METHOD}',
  \ 'method_call': '${METHOD_CALL}',
  \ 'variable': '${VARIABLE}',
  \ 'variable_readonly': '${VARIABLE_READONLY}',
  \ 'variable_declaration': '${VARIABLE_DECLARATION}',
  \ 'variable_property': '${VARIABLE_PROPERTY}',
  \ 'type': '${TYPE}',
  \ 'type_parameter': '${TYPE_PARAMETER}',
  \ 'constant': '${CONSTANT}',
  \ 'class': '${CLASS}',
  \ 'parameter': '${PARAMETER}',
  \ 'property': '${PROPERTY}',
  \ 'property_declaration': '${PROPERTY_DECLARATION}',
  \ 'operator': '${OPERATOR}',
  \ 'storage': '${STORAGE}',
  \ 'other': '${OTHER}',
  \ 'language': '${LANGUAGE}',
  \ 'support_variable': '${SUPPORT_VARIABLE}',
  \ 'support_function': '${SUPPORT_FUNCTION}',
  \ 'support_method': '${SUPPORT_METHOD}',
  \ 'support_property': '${SUPPORT_PROPERTY}',
  \ 'punctuation': '${PUNCTUATION}',
  \ 'punctuation_quote': '${PUNCTUATION_QUOTE}',
  \ 'string': '${STRING}',
  \ 'string_escape': '${STRING_ESCAPE}',
  \ 'number': '${NUMBER}',
  \ 'boolean': '${BOOLEAN}',
  \ 'null': '${NULL}',
  \ 'undefined': '${UNDEFINED}',
  \ 'regex': '${REGEX}',
  \ 'decorator': '${DECORATOR}',
  \ 'namespace': '${NAMESPACE}',
  \ 'module': '${MODULE}',
  \ 'interface': '${INTERFACE}',
  \ 'enum': '${ENUM}',
  \ 'enum_member': '${ENUM_MEMBER}',
  \ 'tag': '${TAG}',
  \ 'tag_attribute': '${TAG_ATTRIBUTE}',
  \ 'tag_value': '${TAG_VALUE}',
  \ 'markup_heading': '${MARKUP_HEADING}',
  \ 'markup_italic': '${MARKUP_ITALIC}',
  \ 'markup_bold': '${MARKUP_BOLD}',
  \ 'markup_underline': '${MARKUP_UNDERLINE}',
  \ 'markup_code': '${MARKUP_CODE}',
  \ 'markup_link': '${MARKUP_LINK}',
  \ 'markup_list': '${MARKUP_LIST}',
  \ 'markup_quote': '${MARKUP_QUOTE}',
  \ 'diff_plus': '${DIFF_PLUS}',
  \ 'diff_minus': '${DIFF_MINUS}',
  \ 'diff_delta': '${DIFF_DELTA}',
  \ 'diff_header': '${DIFF_HEADER}',
  \ 'error': '${ERROR}',
  \ 'warning': '${WARNING}',
  \ 'info': '${INFO}',
  \ 'hint': '${HINT}',
  \ 'debug': '${DEBUG}',
  \ 'log': '${LOG}'
  \ }

" ANSI Colors
let g:ansi_colors = {
  \ 'black': '${Black}',
  \ 'red': '${Red}',
  \ 'green': '${Green}',
  \ 'yellow': '${Yellow}',
  \ 'blue': '${Blue}',
  \ 'magenta': '${Magenta}',
  \ 'cyan': '${Cyan}',
  \ 'white': '${White}',
  \ 'bright_black': '${BrightBlack}',
  \ 'bright_red': '${BrightRed}',
  \ 'bright_green': '${BrightGreen}',
  \ 'bright_yellow': '${BrightYellow}',
  \ 'bright_blue': '${BrightBlue}',
  \ 'bright_magenta': '${BrightMagenta}',
  \ 'bright_cyan': '${BrightCyan}',
  \ 'bright_white': '${BrightWhite}'
  \ }

" Apply user-defined color overrides
if exists('g:theme_color_overrides')
  call extend(g:colors, g:theme_color_overrides)
endif

if exists('g:theme_syntax_color_overrides')
  call extend(g:syntax_colors, g:theme_syntax_color_overrides)
endif

if exists('g:theme_ansi_color_overrides')
  call extend(g:ansi_colors, g:theme_ansi_color_overrides)
endif

" Function to get color
function! s:get_color(name)
  return get(g:colors, a:name, '')
endfunction

" Function to get syntax color
function! s:get_syntax_color(name)
  return get(g:syntax_colors, a:name, '')
endfunction

" Function to get ANSI color
function! s:get_ansi_color(name)
  return get(g:ansi_colors, a:name, '')
endfunction

" Export functions to global namespace
let g:theme_color = {
  \ 'get': function('s:get_color'),
  \ 'get_syntax': function('s:get_syntax_color'),
  \ 'get_ansi': function('s:get_ansi_color')
  \ }

set background=${background}
