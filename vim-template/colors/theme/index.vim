" Main theme entry point

" Ensure compatibility with Vim and Neovim
if exists('g:colors_name')
  highlight clear
endif

if exists('syntax_on')
  syntax reset
endif

let g:colors_name = 'rlabs'

" Set terminal colors if supported
if has('termguicolors')
  set termguicolors
endif

" Load theme utilities and helper functions
runtime! colors/theme/utils.vim

" Load color variables and styles
runtime! colors/theme/colors.vim
runtime! colors/theme/styles.vim

" Load base UI components
runtime! colors/theme/ui/index.vim

" Load syntax highlighting components
runtime! colors/theme/syntax/index.vim

" Load language-specific highlighting
runtime! colors/theme/languages/index.vim

" Apply any user-defined overrides
if exists('g:theme_overrides')
  for [group, settings] in items(g:theme_overrides)
    execute 'highlight' group settings
  endfor
endif

" Set up theme-specific auto-commands
augroup ThemeCustom
  autocmd!
  
  " Refresh highlighting when entering a buffer
  autocmd BufEnter * syntax sync fromstart
  
  " Handle transparency settings
  if exists('g:theme_transparent_background') && g:theme_transparent_background
    autocmd ColorScheme * highlight Normal guibg=NONE ctermbg=NONE
    autocmd ColorScheme * highlight SignColumn guibg=NONE ctermbg=NONE
    autocmd ColorScheme * highlight LineNr guibg=NONE ctermbg=NONE
    autocmd ColorScheme * highlight CursorLineNr guibg=NONE ctermbg=NONE
    autocmd ColorScheme * highlight VertSplit guibg=NONE ctermbg=NONE
  endif
  
  " Handle italic comments setting
  if exists('g:theme_italic_comments') && g:theme_italic_comments
    autocmd ColorScheme * highlight Comment gui=italic cterm=italic
  endif
  
  " Handle bold keywords setting
  if exists('g:theme_bold_keywords') && g:theme_bold_keywords
    autocmd ColorScheme * highlight Keyword gui=bold cterm=bold
  endif
augroup END

" Set up theme commands
command! -nargs=0 ThemeReload source $MYVIMRC | colorscheme rlabs
command! -nargs=0 ThemeToggleTransparency let g:theme_transparent_background = !get(g:, 'theme_transparent_background', 0) | colorscheme rlabs
command! -nargs=0 ThemeToggleItalicComments let g:theme_italic_comments = !get(g:, 'theme_italic_comments', 0) | colorscheme rlabs
command! -nargs=0 ThemeToggleBoldKeywords let g:theme_bold_keywords = !get(g:, 'theme_bold_keywords', 0) | colorscheme rlabs

" Theme configuration variables with defaults
let g:theme_transparent_background = get(g:, 'theme_transparent_background', 0)
let g:theme_italic_comments = get(g:, 'theme_italic_comments', 1)
let g:theme_bold_keywords = get(g:, 'theme_bold_keywords', 0)
let g:theme_underline_urls = get(g:, 'theme_underline_urls', 1)
let g:theme_diagnostic_text_highlight = get(g:, 'theme_diagnostic_text_highlight', 1)
let g:theme_diagnostic_line_highlight = get(g:, 'theme_diagnostic_line_highlight', 0)
let g:theme_diagnostic_virtual_text = get(g:, 'theme_diagnostic_virtual_text', 1)

" Apply theme settings
if g:theme_underline_urls
  highlight link URL Underlined
endif

if g:theme_diagnostic_text_highlight
  highlight link DiagnosticError Error
  highlight link DiagnosticWarn Warning
  highlight link DiagnosticInfo Info
  highlight link DiagnosticHint Hint
endif

if g:theme_diagnostic_line_highlight
  highlight link DiagnosticErrorLine ErrorLine
  highlight link DiagnosticWarnLine WarningLine
  highlight link DiagnosticInfoLine InfoLine
  highlight link DiagnosticHintLine HintLine
endif

" Expose theme API
function! ThemeGetColor(name)
  return get(g:colors, a:name, '')
endfunction

function! ThemeGetSyntaxColor(name)
  return get(g:syntaxColors, a:name, '')
endfunction

function! ThemeGetStyle(name)
  return get(g:styles, a:name, '')
endfunction

" Theme is now loaded
let g:theme_loaded = 1
