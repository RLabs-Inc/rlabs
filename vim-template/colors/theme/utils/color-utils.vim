" Color utility functions for theme

" Convert hex color to RGB components
function! s:hex2rgb(hex)
  let l:hex = substitute(a:hex, '^#', '', '')
  let l:r = str2nr(strpart(l:hex, 0, 2), 16)
  let l:g = str2nr(strpart(l:hex, 2, 2), 16)
  let l:b = str2nr(strpart(l:hex, 4, 2), 16)
  return [l:r, l:g, l:b]
endfunction

" Convert RGB to hex color
function! s:rgb2hex(r, g, b)
  return printf('#%02x%02x%02x', a:r, a:g, a:b)
endfunction

" Darken a hex color by a percentage
function! s:darken(hex, amount)
  let [r, g, b] = s:hex2rgb(a:hex)
  let l:amount = str2float(a:amount)
  let l:r = float2nr(r * (1 - l:amount))
  let l:g = float2nr(g * (1 - l:amount))
  let l:b = float2nr(b * (1 - l:amount))
  return s:rgb2hex(l:r, l:g, l:b)
endfunction

" Lighten a hex color by a percentage
function! s:lighten(hex, amount)
  let [r, g, b] = s:hex2rgb(a:hex)
  let l:amount = str2float(a:amount)
  let l:r = float2nr(r + (255 - r) * l:amount)
  let l:g = float2nr(g + (255 - g) * l:amount)
  let l:b = float2nr(b + (255 - b) * l:amount)
  return s:rgb2hex(l:r, l:g, l:b)
endfunction

" Calculate relative luminance using WCAG formula
function! s:wcagLuminance(hex)
  let [r, g, b] = s:hex2rgb(a:hex)
  let l:r = r <= 10 ? r/3294.0 : (r/269.0 + 0.0513)**2.4
  let l:g = g <= 10 ? g/3294.0 : (g/269.0 + 0.0513)**2.4
  let l:b = b <= 10 ? b/3294.0 : (b/269.0 + 0.0513)**2.4
  return 0.2126 * l:r + 0.7152 * l:g + 0.0722 * l:b
endfunction

" Add opacity to a hex color
function! s:getColorWithOpacity(color, opacity)
  if strlen(a:color) > 7
    return strpart(a:color, 0, strlen(a:color)-2) . a:opacity
  else
    return a:color . a:opacity
  endif
endfunction

" Get appropriate foreground color based on background luminance
function! s:getContrastForeground(bg, color)
  let l:bgLum = s:wcagLuminance(g:colors.BG1)
  let l:colorLum = s:wcagLuminance(a:color)
  
  if l:bgLum < 0.5
    return l:colorLum < 0.5 ? g:colors.FG1 : g:colors.FG3
  else
    return l:colorLum < 0.5 ? g:colors.FG3 : g:colors.FG1
  endif
endfunction

" Get foreground color for AC1 background
function! s:getAC1Foreground()
  return s:getContrastForeground(g:colors.BG1, g:colors.AC1)
endfunction

" Get foreground color for AC2 background
function! s:getAC2Foreground()
  return s:getContrastForeground(g:colors.BG1, g:colors.AC2)
endfunction

" Get foreground color for INFO background
function! s:getINFOForeground()
  return s:getContrastForeground(g:colors.BG1, g:colors.INFO)
endfunction

" Get foreground color for WARNING background
function! s:getWARNINGForeground()
  return s:getContrastForeground(g:colors.BG1, g:colors.WARNING)
endfunction

" Get foreground color for ERROR background
function! s:getERRORForeground()
  return s:getContrastForeground(g:colors.BG1, g:colors.ERROR)
endfunction

" Terminal color support detection
function! s:has_true_color()
  return has('termguicolors') && &termguicolors
endfunction

function! s:get_term_color_support()
  if s:has_true_color()
    return 'gui'
  endif
  return &t_Co >= 256 ? '256' : '16'
endfunction

" Export functions to global namespace with theme prefix
let g:theme_utils = {
  \ 'rgb2hex': function('s:rgb2hex'),
  \ 'hex2rgb': function('s:hex2rgb'),
  \ 'darken': function('s:darken'),
  \ 'lighten': function('s:lighten'),
  \ 'wcagLuminance': function('s:wcagLuminance'),
  \ 'getColorWithOpacity': function('s:getColorWithOpacity'),
  \ 'getContrastForeground': function('s:getContrastForeground'),
  \ 'has_true_color': function('s:has_true_color'),
  \ 'get_term_color_support': function('s:get_term_color_support')
  \ }

let g:theme_getColorWithOpacity = function('s:getColorWithOpacity')
let g:theme_getAC1Foreground = function('s:getAC1Foreground')
let g:theme_getAC2Foreground = function('s:getAC2Foreground')
let g:theme_getINFOForeground = function('s:getINFOForeground')
let g:theme_getWARNINGForeground = function('s:getWARNINGForeground')
let g:theme_getERRORForeground = function('s:getERRORForeground')
