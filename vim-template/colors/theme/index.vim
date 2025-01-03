" Main theme entry point
" ${themeName} Vim/Neovim Theme
" Author: ${author}
" License: MIT
" Generated by RLabs Theme Generator
" Using sacred geometry principles

" Ensure compatibility with Vim and Neovim
if exists('g:colors_name')
  highlight clear
endif

if exists('syntax_on')
  syntax reset
endif

let g:colors_name = '${themeNameKebab}'

" Set terminal colors if supported
if has('termguicolors')
  set termguicolors
endif



" Load color variables and utilities
runtime colors/theme/utils/color.vim
" runtime colors/theme/utils/options.vim
" Load color variables and styles
" runtime colors/theme/colors.vim
" runtime colors/theme/styles.vim

" Load base UI components
runtime colors/theme/base/ui.vim

" Load syntax highlighting components
runtime colors/theme/syntax/index.vim

" Load language-specific highlighting
runtime colors/theme/languages/index.vim

" Load plugin-specific highlighting
runtime colors/theme/plugins/index.vim

" Apply any user-defined overrides
if exists('g:theme_overrides')
  for [group, settings] in items(g:theme_overrides)
    execute 'highlight' group settings
  endfor
endif

" " Expose theme API
" function! ThemeGetColor(name)
"   return get(g:colors, a:name, '')
" endfunction

" function! ThemeGetSyntaxColor(name)
"   return get(g:syntax_colors, a:name, '')
" endfunction

" function! ThemeGetAnsiColor(name)
"   return get(g:ansi_colors, a:name, '')
" endfunction

" function! ThemeGetStyle(name)
"   return get(g:styles, a:name, '')
" endfunction

" Theme is now loaded
let g:theme_loaded = 1
