" Theme color variables
" This is the single source of truth for all color definitions

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
  \ 'line_highlight': '${lineHighlight}',
  \ 'selection': '${selection}',
  \ 'find_match': '${findMatch}'
  \ }

" Syntax Colors
let g:syntax_colors = {
  \ 'keyword': '${keyword}',
  \ 'comment': '${comment}',
  \ 'function': '${function}',
  \ 'function_call': '${functionCall}',
  \ 'method': '${method}',
  \ 'method_call': '${methodCall}',
  \ 'variable': '${variable}',
  \ 'variable_readonly': '${variableReadonly}',
  \ 'variable_declaration': '${variableDeclaration}',
  \ 'variable_property': '${variableProperty}',
  \ 'type': '${type}',
  \ 'type_parameter': '${typeParameter}',
  \ 'constant': '${constant}',
  \ 'class': '${class}',
  \ 'parameter': '${parameter}',
  \ 'property': '${property}',
  \ 'property_declaration': '${propertyDeclaration}',
  \ 'operator': '${operator}',
  \ 'storage': '${storage}',
  \ 'other': '${other}',
  \ 'language': '${language}',
  \ 'support_variable': '${supportVariable}',
  \ 'support_function': '${supportFunction}',
  \ 'support_method': '${supportMethod}',
  \ 'support_property': '${supportProperty}',
  \ 'punctuation': '${punctuation}',
  \ 'punctuation_quote': '${punctuationQuote}',
  \ 'punctuation_brace': '${punctuationBrace}',
  \ 'punctuation_comma': '${punctuationComma}',
  \ 'selector': '${selector}',
  \ 'support': '${support}',
  \ 'modifier': '${modifier}',
  \ 'control': '${control}',
  \ 'control_flow': '${controlFlow}',
  \ 'control_import': '${controlImport}',
  \ 'tag': '${tag}',
  \ 'tag_punctuation': '${tagPunctuation}',
  \ 'attribute': '${attribute}',
  \ 'unit': '${unit}',
  \ 'datetime': '${datetime}'
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

" Color utility functions
function! s:get_color(name)
  return get(g:colors, a:name, '')
endfunction

function! s:get_syntax_color(name)
  return get(g:syntax_colors, a:name, '')
endfunction

function! s:get_ansi_color(name)
  return get(g:ansi_colors, a:name, '')
endfunction

" Export functions to global namespace
let g:theme_color = {
  \ 'get': function('s:get_color'),
  \ 'get_syntax': function('s:get_syntax_color'),
  \ 'get_ansi': function('s:get_ansi_color')
  \ }

runtime /colors/theme/index.vim