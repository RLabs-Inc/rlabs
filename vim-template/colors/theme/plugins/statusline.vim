" Statusline colors for vim-airline and similar plugins

" Airline colors
let g:airline#themes#rlabs#palette = {}

" Normal mode
let s:N1 = [ g:theme_getAC2Foreground(), g:colors.AC2, 0, 0 ]  " Mode section
let s:N2 = [ g:colors.FG1, g:colors.BG2, 0, 0 ]               " Info section
let s:N3 = [ g:colors.FG2, g:colors.BG3, 0, 0 ]               " File section
let g:airline#themes#rlabs#palette.normal = airline#themes#generate_color_map(s:N1, s:N2, s:N3)

" Insert mode
let s:I1 = [ g:theme_getAC1Foreground(), g:colors.AC1, 0, 0 ]
let s:I2 = [ g:colors.FG1, g:colors.BG2, 0, 0 ]
let s:I3 = [ g:colors.FG2, g:colors.BG3, 0, 0 ]
let g:airline#themes#rlabs#palette.insert = airline#themes#generate_color_map(s:I1, s:I2, s:I3)

" Visual mode
let s:V1 = [ g:theme_getWARNINGForeground(), g:colors.WARNING, 0, 0 ]
let s:V2 = [ g:colors.FG1, g:colors.BG2, 0, 0 ]
let s:V3 = [ g:colors.FG2, g:colors.BG3, 0, 0 ]
let g:airline#themes#rlabs#palette.visual = airline#themes#generate_color_map(s:V1, s:V2, s:V3)

" Replace mode
let s:R1 = [ g:theme_getERRORForeground(), g:colors.ERROR, 0, 0 ]
let s:R2 = [ g:colors.FG1, g:colors.BG2, 0, 0 ]
let s:R3 = [ g:colors.FG2, g:colors.BG3, 0, 0 ]
let g:airline#themes#rlabs#palette.replace = airline#themes#generate_color_map(s:R1, s:R2, s:R3)

" Inactive mode
let s:IA1 = [ g:colors.comment, g:colors.BG2, 0, 0 ]
let s:IA2 = [ g:colors.comment, g:colors.BG2, 0, 0 ]
let s:IA3 = [ g:colors.comment, g:colors.BG2, 0, 0 ]
let g:airline#themes#rlabs#palette.inactive = airline#themes#generate_color_map(s:IA1, s:IA2, s:IA3)

" Terminal mode
let s:T1 = [ g:theme_getINFOForeground(), g:colors.INFO, 0, 0 ]
let s:T2 = [ g:colors.FG1, g:colors.BG2, 0, 0 ]
let s:T3 = [ g:colors.FG2, g:colors.BG3, 0, 0 ]
let g:airline#themes#rlabs#palette.terminal = airline#themes#generate_color_map(s:T1, s:T2, s:T3)

" Warnings and Errors
let g:airline#themes#rlabs#palette.normal.airline_warning = [ g:theme_getWARNINGForeground(), g:colors.WARNING, 0, 0 ]
let g:airline#themes#rlabs#palette.normal.airline_error = [ g:theme_getERRORForeground(), g:colors.ERROR, 0, 0 ]

" Tabline
let g:airline#themes#rlabs#palette.tabline = {
      \ 'airline_tab':     [ g:colors.comment, g:colors.BG3, 0, 0 ],
      \ 'airline_tabsel':  [ g:theme_getAC2Foreground(), g:colors.AC2, 0, 0 ],
      \ 'airline_tabtype': [ g:colors.FG1, g:colors.BG2, 0, 0 ],
      \ 'airline_tabfill': [ g:colors.BORDER, g:colors.BG1, 0, 0 ],
      \ 'airline_tabmod':  [ g:theme_getWARNINGForeground(), g:colors.WARNING, 0, 0 ]
      \ }

" Lightline colors
let g:lightline = {}
let g:lightline.colorscheme = 'rlabs'

let s:p = {'normal': {}, 'inactive': {}, 'insert': {}, 'replace': {}, 'visual': {}, 'tabline': {}}

" Normal mode
let s:p.normal.left = [ [ g:theme_getAC2Foreground(), g:colors.AC2 ], [ g:colors.FG1, g:colors.BG2 ] ]
let s:p.normal.middle = [ [ g:colors.FG2, g:colors.BG3 ] ]
let s:p.normal.right = [ [ g:theme_getAC2Foreground(), g:colors.AC2 ], [ g:colors.FG1, g:colors.BG2 ] ]

" Insert mode
let s:p.insert.left = [ [ g:theme_getAC1Foreground(), g:colors.AC1 ], [ g:colors.FG1, g:colors.BG2 ] ]
let s:p.insert.middle = [ [ g:colors.FG2, g:colors.BG3 ] ]
let s:p.insert.right = [ [ g:theme_getAC1Foreground(), g:colors.AC1 ], [ g:colors.FG1, g:colors.BG2 ] ]

" Visual mode
let s:p.visual.left = [ [ g:theme_getWARNINGForeground(), g:colors.WARNING ], [ g:colors.FG1, g:colors.BG2 ] ]
let s:p.visual.middle = [ [ g:colors.FG2, g:colors.BG3 ] ]
let s:p.visual.right = [ [ g:theme_getWARNINGForeground(), g:colors.WARNING ], [ g:colors.FG1, g:colors.BG2 ] ]

" Replace mode
let s:p.replace.left = [ [ g:theme_getERRORForeground(), g:colors.ERROR ], [ g:colors.FG1, g:colors.BG2 ] ]
let s:p.replace.middle = [ [ g:colors.FG2, g:colors.BG3 ] ]
let s:p.replace.right = [ [ g:theme_getERRORForeground(), g:colors.ERROR ], [ g:colors.FG1, g:colors.BG2 ] ]

" Inactive mode
let s:p.inactive.left = [ [ g:colors.comment, g:colors.BG2 ], [ g:colors.comment, g:colors.BG2 ] ]
let s:p.inactive.middle = [ [ g:colors.comment, g:colors.BG2 ] ]
let s:p.inactive.right = [ [ g:colors.comment, g:colors.BG2 ], [ g:colors.comment, g:colors.BG2 ] ]

" Tabline
let s:p.tabline.left = [ [ g:colors.comment, g:colors.BG3 ] ]
let s:p.tabline.middle = [ [ g:colors.BORDER, g:colors.BG1 ] ]
let s:p.tabline.right = [ [ g:colors.FG1, g:colors.BG2 ] ]
let s:p.tabline.tabsel = [ [ g:theme_getAC2Foreground(), g:colors.AC2 ] ]

" Error and Warning
let s:p.normal.error = [ [ g:theme_getERRORForeground(), g:colors.ERROR ] ]
let s:p.normal.warning = [ [ g:theme_getWARNINGForeground(), g:colors.WARNING ] ]

let g:lightline#colorscheme#rlabs#palette = lightline#colorscheme#flatten(s:p)

" Lualine colors (for Neovim)
if has('nvim')
  lua << EOF
  local colors = {
    bg1 = vim.g.colors.BG1,
    bg2 = vim.g.colors.BG2,
    bg3 = vim.g.colors.BG3,
    fg1 = vim.g.colors.FG1,
    fg2 = vim.g.colors.FG2,
    ac1 = vim.g.colors.AC1,
    ac2 = vim.g.colors.AC2,
    info = vim.g.colors.INFO,
    warn = vim.g.colors.WARNING,
    error = vim.g.colors.ERROR,
    comment = vim.g.syntaxColors.comment
  }

  require('lualine').setup {
    options = {
      theme = {
        normal = {
          a = { fg = vim.g.theme_getAC2Foreground(), bg = colors.ac2 },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        insert = {
          a = { fg = vim.g.theme_getAC1Foreground(), bg = colors.ac1 },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        visual = {
          a = { fg = vim.g.theme_getWARNINGForeground(), bg = colors.warn },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        replace = {
          a = { fg = vim.g.theme_getERRORForeground(), bg = colors.error },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        command = {
          a = { fg = vim.g.theme_getINFOForeground(), bg = colors.info },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        inactive = {
          a = { fg = colors.comment, bg = colors.bg2 },
          b = { fg = colors.comment, bg = colors.bg2 },
          c = { fg = colors.comment, bg = colors.bg2 }
        }
      }
    }
  }
EOF
endif
