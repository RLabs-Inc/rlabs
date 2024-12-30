" Statusline colors for vim-airline and similar plugins

" Airline colors
let g:airline#themes#rlabs#palette = {}

" Normal mode
let s:N1 = [ g:GetAC2Foreground(), g:colors.ac2, 0, 0 ]  " Mode section
let s:N2 = [ g:colors.fg1, g:colors.bg2, 0, 0 ]               " Info section
let s:N3 = [ g:colors.fg2, g:colors.bg3, 0, 0 ]               " File section
let g:airline#themes#rlabs#palette.normal = airline#themes#generate_color_map(s:N1, s:N2, s:N3)

" Insert mode
let s:I1 = [ g:GetAC1Foreground(), g:colors.ac1, 0, 0 ]
let s:I2 = [ g:colors.fg1, g:colors.bg2, 0, 0 ]
let s:I3 = [ g:colors.fg2, g:colors.bg3, 0, 0 ]
let g:airline#themes#rlabs#palette.insert = airline#themes#generate_color_map(s:I1, s:I2, s:I3)

" Visual mode
let s:V1 = [ g:GetWARNINGForeground(), g:colors.warning, 0, 0 ]
let s:V2 = [ g:colors.fg1, g:colors.bg2, 0, 0 ]
let s:V3 = [ g:colors.fg2, g:colors.bg3, 0, 0 ]
let g:airline#themes#rlabs#palette.visual = airline#themes#generate_color_map(s:V1, s:V2, s:V3)

" Replace mode
let s:R1 = [ g:GetERRORForeground(), g:colors.error, 0, 0 ]
let s:R2 = [ g:colors.fg1, g:colors.bg2, 0, 0 ]
let s:R3 = [ g:colors.fg2, g:colors.bg3, 0, 0 ]
let g:airline#themes#rlabs#palette.replace = airline#themes#generate_color_map(s:R1, s:R2, s:R3)

" Inactive mode
let s:IA1 = [ g:syntax_colors.comment, g:colors.bg2, 0, 0 ]
let s:IA2 = [ g:syntax_colors.comment, g:colors.bg2, 0, 0 ]
let s:IA3 = [ g:syntax_colors.comment, g:colors.bg2, 0, 0 ]
let g:airline#themes#rlabs#palette.inactive = airline#themes#generate_color_map(s:IA1, s:IA2, s:IA3)

" Terminal mode
let s:T1 = [ g:GetINFOForeground(), g:colors.info, 0, 0 ]
let s:T2 = [ g:colors.fg1, g:colors.bg2, 0, 0 ]
let s:T3 = [ g:colors.fg2, g:colors.bg3, 0, 0 ]
let g:airline#themes#rlabs#palette.terminal = airline#themes#generate_color_map(s:T1, s:T2, s:T3)

" Warnings and Errors
let g:airline#themes#rlabs#palette.normal.airline_warning = [ g:GetWARNINGForeground(), g:colors.warning, 0, 0 ]
let g:airline#themes#rlabs#palette.normal.airline_error = [ g:GetERRORForeground(), g:colors.error, 0, 0 ]

" Tabline
let g:airline#themes#rlabs#palette.tabline = {
      \ 'airline_tab':     [ g:syntax_colors.comment, g:colors.bg3, 0, 0 ],
      \ 'airline_tabsel':  [ g:GetAC2Foreground(), g:colors.ac2, 0, 0 ],
      \ 'airline_tabtype': [ g:colors.fg1, g:colors.bg2, 0, 0 ],
      \ 'airline_tabfill': [ g:colors.border, g:colors.bg1, 0, 0 ],
      \ 'airline_tabmod':  [ g:GetWARNINGForeground(), g:colors.warning, 0, 0 ]
      \ }

" Lightline colors
let g:lightline = {}
let g:lightline.colorscheme = 'rlabs'

let s:p = {'normal': {}, 'inactive': {}, 'insert': {}, 'replace': {}, 'visual': {}, 'tabline': {}}

" Normal mode
let s:p.normal.left = [ [ g:GetAC2Foreground(), g:colors.ac2 ], [ g:colors.fg1, g:colors.bg2 ] ]
let s:p.normal.middle = [ [ g:colors.fg2, g:colors.bg3 ] ]
let s:p.normal.right = [ [ g:GetAC2Foreground(), g:colors.ac2 ], [ g:colors.fg1, g:colors.bg2 ] ]

" Insert mode
let s:p.insert.left = [ [ g:GetAC1Foreground(), g:colors.ac1 ], [ g:colors.fg1, g:colors.bg2 ] ]
let s:p.insert.middle = [ [ g:colors.fg2, g:colors.bg3 ] ]
let s:p.insert.right = [ [ g:GetAC1Foreground(), g:colors.ac1 ], [ g:colors.fg1, g:colors.bg2 ] ]

" Visual mode
let s:p.visual.left = [ [ g:GetWARNINGForeground(), g:colors.warning ], [ g:colors.fg1, g:colors.bg2 ] ]
let s:p.visual.middle = [ [ g:colors.fg2, g:colors.bg3 ] ]
let s:p.visual.right = [ [ g:GetWARNINGForeground(), g:colors.warning ], [ g:colors.fg1, g:colors.bg2 ] ]

" Replace mode
let s:p.replace.left = [ [ g:GetERRORForeground(), g:colors.error ], [ g:colors.fg1, g:colors.bg2 ] ]
let s:p.replace.middle = [ [ g:colors.fg2, g:colors.bg3 ] ]
let s:p.replace.right = [ [ g:GetERRORForeground(), g:colors.error ], [ g:colors.fg1, g:colors.bg2 ] ]

" Inactive mode
let s:p.inactive.left = [ [ g:syntax_colors.comment, g:colors.bg2 ], [ g:syntax_colors.comment, g:colors.bg2 ] ]
let s:p.inactive.middle = [ [ g:syntax_colors.comment, g:colors.bg2 ] ]
let s:p.inactive.right = [ [ g:syntax_colors.comment, g:colors.bg2 ], [ g:syntax_colors.comment, g:colors.bg2 ] ]

" Tabline
let s:p.tabline.left = [ [ g:syntax_colors.comment, g:colors.bg3 ] ]
let s:p.tabline.middle = [ [ g:colors.border, g:colors.bg1 ] ]
let s:p.tabline.right = [ [ g:colors.fg1, g:colors.bg2 ] ]
let s:p.tabline.tabsel = [ [ g:GetAC2Foreground(), g:colors.ac2 ] ]

" Error and Warning
let s:p.normal.error = [ [ g:GetERRORForeground(), g:colors.error ] ]
let s:p.normal.warning = [ [ g:GetWARNINGForeground(), g:colors.warning ] ]

let g:lightline#colorscheme#rlabs#palette = lightline#colorscheme#flatten(s:p)

" Lualine colors (for Neovim)
if has('nvim')
  lua << EOF
  local colors = {
    bg1 = vim.g.colors.bg1,
    bg2 = vim.g.colors.bg2,
    bg3 = vim.g.colors.bg3,
    fg1 = vim.g.colors.fg1,
    fg2 = vim.g.colors.fg2,
    ac1 = vim.g.colors.ac1,
    ac2 = vim.g.colors.ac2,
    info = vim.g.colors.info,
    warn = vim.g.colors.warning,
    error = vim.g.colors.error,
    comment = vim.g.syntaxColors.comment
  }

  require('lualine').setup {
    options = {
      theme = {
        normal = {
          a = { fg = vim.g.GetAC2Foreground(), bg = colors.ac2 },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        insert = {
          a = { fg = vim.g.GetAC1Foreground(), bg = colors.ac1 },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        visual = {
          a = { fg = vim.g.GetWARNINGForeground(), bg = colors.warn },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        replace = {
          a = { fg = vim.g.GetERRORForeground(), bg = colors.error },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        command = {
          a = { fg = vim.g.GetINFOForeground(), bg = colors.info },
          b = { fg = colors.fg1, bg = colors.bg2 },
          c = { fg = colors.fg2, bg = colors.bg3 }
        },
        inactive = {
          a = { fg = syntax_colors.comment, bg = colors.bg2 },
          b = { fg = syntax_colors.comment, bg = colors.bg2 },
          c = { fg = syntax_colors.comment, bg = colors.bg2 }
        }
      }
    }
  }
EOF
endif
