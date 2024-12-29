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


" Load theme options and utilities
runtime colors/theme/utils/color-utils.vim
runtime colors/theme/utils/options.vim

" Load base theme components
runtime colors/theme/base/ui.vim


" Core syntax elements
runtime colors/theme/syntax/comments.vim
runtime colors/theme/syntax/constants.vim
runtime colors/theme/syntax/entities.vim
runtime colors/theme/syntax/functions.vim
runtime colors/theme/syntax/keywords.vim
runtime colors/theme/syntax/strings.vim
runtime colors/theme/syntax/storage.vim
runtime colors/theme/syntax/support.vim
runtime colors/theme/syntax/types.vim
runtime colors/theme/syntax/variables.vim

" Load semantic highlighting
runtime colors/theme/semantic/*.vim

" Load language-specific highlighting
runtime colors/theme/languages/cpp.vim
runtime colors/theme/languages/csharp.vim
runtime colors/theme/languages/css.vim
runtime colors/theme/languages/data.vim
runtime colors/theme/languages/diff.vim
runtime colors/theme/languages/env.vim
runtime colors/theme/languages/go.vim
runtime colors/theme/languages/graphql.vim
runtime colors/theme/languages/html.vim
runtime colors/theme/languages/ini.vim
runtime colors/theme/languages/java.vim
runtime colors/theme/languages/javascript.vim
runtime colors/theme/languages/markdown.vim
runtime colors/theme/languages/nix.vim
runtime colors/theme/languages/php.vim
runtime colors/theme/languages/python.vim
runtime colors/theme/languages/regexp.vim
runtime colors/theme/languages/rust.vim
runtime colors/theme/languages/shell.vim
runtime colors/theme/languages/sql.vim
runtime colors/theme/languages/svelte.vim

" Load plugin support
" runtime colors/theme/plugins/tree.vim
runtime colors/theme/plugins/telescope.vim
runtime colors/theme/plugins/signs.vim
runtime colors/theme/plugins/treesitter.vim
runtime colors/theme/plugins/statusline.vim
" runtime colors/theme/plugins/coc.vim         " CoC (Conquer of Completion)

" Apply any user-defined overrides
if exists('g:theme_overrides')
  for [group, settings] in items(g:theme_overrides)
    execute 'highlight' group settings
  endfor
endif

" Handle transparency settings
if exists('g:theme_transparent_background') && g:theme_transparent_background
  highlight Normal guibg=NONE ctermbg=NONE
  highlight SignColumn guibg=NONE ctermbg=NONE
  highlight LineNr guibg=NONE ctermbg=NONE
  highlight CursorLineNr guibg=NONE ctermbg=NONE
  highlight EndOfBuffer guibg=NONE ctermbg=NONE
endif

" Set airline theme if airline is installed
if exists(':AirlineTheme')
  AirlineTheme ${themeNameKebab}
endif

" Set lightline theme if lightline is installed
if exists('g:loaded_lightline')
  let g:lightline.colorscheme = '${themeNameKebab}'
endif
