" Theme customization options

" Default values for theme options
let g:${themeNameUnderline}_transparent_background = get(g:, 'theme_transparent_background', 0)
let g:${themeNameUnderline}_italic_comments = get(g:, 'theme_italic_comments', 0)
let g:${themeNameUnderline}_italic_keywords = get(g:, 'theme_italic_keywords', 0)
let g:${themeNameUnderline}_italic_functions = get(g:, 'theme_italic_functions', 0)
let g:${themeNameUnderline}_italic_variables = get(g:, 'theme_italic_variables', 0)
let g:${themeNameUnderline}_bold_functions = get(g:, 'theme_bold_functions', 0)
let g:${themeNameUnderline}_borders = get(g:, 'theme_borders', 1)
let g:${themeNameUnderline}_contrast = get(g:, 'theme_contrast', 'medium')  " low, medium, high
let g:${themeNameUnderline}_uniform_status_lines = get(g:, 'theme_uniform_status_lines', 0)
let g:${themeNameUnderline}_cursor_line_number_background = get(g:, 'theme_cursor_line_number_background', 0)

" Initialize styles dictionary
let g:styles = {}

" Basic styles
let g:styles.None = 'NONE'
let g:styles.Bold = 'bold'
let g:styles.Italic = 'italic'
let g:styles.Underline = 'underline'
let g:styles.Undercurl = 'undercurl'
let g:styles.Strikethrough = 'strikethrough'
let g:styles.Reverse = 'reverse'
let g:styles.Inverse = 'inverse'
let g:styles.Standout = 'standout'

" Combined styles
let g:styles.BoldItalic = 'bold,italic'
let g:styles.BoldUnderline = 'bold,underline'
let g:styles.ItalicUnderline = 'italic,underline'
let g:styles.BoldItalicUnderline = 'bold,italic,underline'

" Semantic styles
let g:styles.Comment = g:styles.Italic
let g:styles.Todo = g:styles.Bold
let g:styles.Error = g:styles.Bold
let g:styles.Warning = g:styles.Bold
let g:styles.Info = g:styles.None
let g:styles.Hint = g:styles.Italic

" Code styles
let g:styles.Keyword = g:styles.None
let g:styles.Type = g:styles.None
let g:styles.Function = g:styles.None
let g:styles.Method = g:styles.None
let g:styles.Class = g:styles.None
let g:styles.Interface = g:styles.None
let g:styles.Enum = g:styles.None
let g:styles.Struct = g:styles.None
let g:styles.Constant = g:styles.None
let g:styles.Variable = g:styles.None
let g:styles.Parameter = g:styles.None
let g:styles.Property = g:styles.None
let g:styles.Label = g:styles.None
let g:styles.Operator = g:styles.None
let g:styles.Namespace = g:styles.None

" Documentation styles
let g:styles.DocComment = g:styles.Italic
let g:styles.DocTag = g:styles.Bold
let g:styles.DocParam = g:styles.Italic
let g:styles.DocExample = g:styles.None
let g:styles.DocWarning = g:styles.BoldItalic
let g:styles.DocError = g:styles.BoldItalic

" UI styles
let g:styles.Title = g:styles.Bold
let g:styles.Header = g:styles.Bold
let g:styles.Strong = g:styles.Bold
let g:styles.Emphasis = g:styles.Italic
let g:styles.Link = g:styles.Underline
let g:styles.URL = g:styles.Underline
let g:styles.Directory = g:styles.Bold

" Special styles
let g:styles.Deprecated = g:styles.Strikethrough
let g:styles.Modified = g:styles.Bold
let g:styles.Added = g:styles.Bold
let g:styles.Removed = g:styles.Bold
let g:styles.Special = g:styles.None
let g:styles.Important = g:styles.Bold

" Diagnostic styles
let g:styles.DiagnosticError = g:styles.None
let g:styles.DiagnosticWarn = g:styles.None
let g:styles.DiagnosticInfo = g:styles.None
let g:styles.DiagnosticHint = g:styles.None
let g:styles.DiagnosticUnderline = g:styles.Undercurl
let g:styles.DiagnosticVirtualText = g:styles.None

" Git styles
let g:styles.GitAdded = g:styles.None
let g:styles.GitModified = g:styles.None
let g:styles.GitDeleted = g:styles.None
let g:styles.GitRenamed = g:styles.None
let g:styles.GitUntracked = g:styles.None
let g:styles.GitIgnored = g:styles.None
let g:styles.GitStaged = g:styles.None
let g:styles.GitConflict = g:styles.Bold

" Search and selection styles
let g:styles.Search = g:styles.None
let g:styles.IncSearch = g:styles.Reverse
let g:styles.Selection = g:styles.None
let g:styles.Visual = g:styles.None
let g:styles.VisualNOS = g:styles.Underline
let g:styles.MatchParen = g:styles.Bold

" Status line styles
let g:styles.StatusLine = g:styles.None
let g:styles.StatusLineNC = g:styles.None

" Style handling functions
function! s:merge_styles(...)
  let l:result = ''
  for l:style in a:000
    if !empty(l:style)
      let l:result .= (empty(l:result) ? '' : ',') . l:style
    endif
  endfor
  return l:result
endfunction

function! s:has_style(styles, style)
  return stridx(a:styles, a:style) != -1
endfunction

" Highlight group manipulation
function! s:highlight_exists(group)
  return !empty(execute('highlight ' . a:group))
endfunction

function! s:get_highlight(group)
  let l:output = execute('highlight ' . a:group)
  if empty(l:output)
    return {}
  endif
  
  let l:dict = {}
  let l:match = matchlist(l:output, 'xxx\s\+\(.*\)')
  if empty(l:match)
    return {}
  endif
  
  let l:items = split(l:match[1])
  for l:item in l:items
    let [l:key, l:value] = split(l:item, '=')
    let l:dict[l:key] = l:value
  endfor
  
  return l:dict
endfunction

function! s:set_highlight(group, settings)
  let l:cmd = 'highlight ' . a:group
  for [l:key, l:value] in items(a:settings)
    let l:cmd .= ' ' . l:key . '=' . l:value
  endfor
  execute l:cmd
endfunction

" Theme style functions

" Get style based on theme options
function! g:theme_get_style(group)
    let l:style = ''
    
    " Add bold if enabled for the group
    if g:theme_bold_keywords && a:group =~? 'Keyword\|Statement\|Conditional\|Repeat\|Label\|Exception'
        let l:style .= 'bold,'
    endif
    
    if g:theme_bold_functions && a:group =~? 'Function\|Method\|Constructor'
        let l:style .= 'bold,'
    endif
    
    if g:theme_italic_comments && a:group =~? 'Comment\|Documentation'
        let l:style .= 'italic,'
    endif
    
    " Remove trailing comma
    if l:style != ''
        let l:style = l:style[:-2]
    endif
    
    return l:style
endfunction

" Function to get color with fallback
function! g:theme_get_color(name, fallback)
    return has_key(g:colors, a:name) ? g:colors[a:name] : a:fallback
endfunction

" Function to get syntax color with fallback
function! g:theme_get_syntax_color(name, fallback)
    return has_key(g:syntax_colors, a:name) ? g:syntax_colors[a:name] : a:fallback
endfunction

" Function to get syntax color with fallback
function! g:theme_get_ansi_color(name, fallback)
  return has_key(g:ansi_colors, a:name) ? g:ansi_colors[a:name] : a:fallback
endfunction

" Function to get style string based on options
function! g:theme_get_style(group)
  let l:style = ''
  
  if a:group == 'Comment' && g:theme_italic_comments
    let l:style .= 'italic'
  endif
  
  if a:group =~ 'Function' && g:theme_italic_functions
    let l:style .= len(l:style) ? ',italic' : 'italic'
  endif
  
  if a:group =~ 'Function' && g:theme_bold_functions
    let l:style .= len(l:style) ? ',bold' : 'bold'
  endif
  
  if a:group =~ 'Keyword' && g:theme_italic_keywords
    let l:style .= len(l:style) ? ',italic' : 'italic'
  endif
  
  if a:group =~ 'Variable' && g:theme_italic_variables
    let l:style .= len(l:style) ? ',italic' : 'italic'
  endif
  
  return l:style
endfunction

" Function to get background color based on contrast setting
function! g:theme_get_background()
  if g:theme_transparent_background
    return 'NONE'
  endif
  
  if g:theme_contrast == 'low'
    return g:colors.bg2
  elseif g:theme_contrast == 'high'
    return g:colors.bg1
  endif
  
  return g:colors.bg1  " medium contrast (default)
endfunction

" Function to get border color based on border setting
function! g:theme_get_border()
  return g:theme_borders ? g:colors.border : g:colors.bg1
endfunction

" Function to get status line colors based on uniform setting
function! g:theme_get_status_line_bg(mode)
  if g:theme_uniform_status_lines
    return g:colors.bg2
  endif
  
  if a:mode == 'normal'
    return g:colors.ac2
  elseif a:mode == 'insert'
    return g:colors.ac1
  elseif a:mode == 'visual'
    return g:colors.warning
  elseif a:mode == 'replace'
    return g:colors.error
  else
    return g:colors.bg2
  endif
endfunction

" Function to get line number background
function! g:theme_get_line_number_bg()
  return g:theme_cursor_line_number_background ? g:colors.bg2 : 'NONE'
endfunction

" Export functions to global namespace
let g:theme_options = {
  \ 'merge_styles': function('s:merge_styles'),
  \ 'has_style': function('s:has_style'),
  \ 'highlight_exists': function('s:highlight_exists'),
  \ 'get_highlight': function('s:get_highlight'),
  \ 'set_highlight': function('s:set_highlight'),
  \ 'get_style': function('g:theme_get_style'),
  \ 'get_background': function('g:theme_get_background'),
  \ 'get_border': function('g:theme_get_border'),
  \ 'get_status_line_bg': function('g:theme_get_status_line_bg'),
  \ 'get_line_number_bg': function('g:theme_get_line_number_bg')
  \ }
