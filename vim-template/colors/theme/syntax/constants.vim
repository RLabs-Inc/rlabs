" Constants syntax highlighting (matching VSCode's constant token colors)

" Basic constants
execute 'highlight Constant guifg=' . g:syntax_colors.constant
execute 'highlight Number guifg=' . g:syntax_colors.constant
execute 'highlight Boolean guifg=' . g:syntax_colors.constant
execute 'highlight Float guifg=' . g:syntax_colors.constant
execute 'highlight Character guifg=' . g:syntax_colors.constant

" Language-specific constants
" C/C++
execute 'highlight cConstant guifg=' . g:syntax_colors.constant
execute 'highlight cNumber guifg=' . g:syntax_colors.constant
execute 'highlight cFloat guifg=' . g:syntax_colors.constant
execute 'highlight cppNumber guifg=' . g:syntax_colors.constant
execute 'highlight cppBoolean guifg=' . g:syntax_colors.constant
execute 'highlight cppConstant guifg=' . g:syntax_colors.constant

" JavaScript/TypeScript
execute 'highlight jsNumber guifg=' . g:syntax_colors.constant
execute 'highlight jsBoolean guifg=' . g:syntax_colors.constant
execute 'highlight jsNull guifg=' . g:syntax_colors.constant
execute 'highlight jsUndefined guifg=' . g:syntax_colors.constant
execute 'highlight jsBooleanTrue guifg=' . g:syntax_colors.constant
execute 'highlight jsBooleanFalse guifg=' . g:syntax_colors.constant
execute 'highlight jsGlobalObjects guifg=' . g:syntax_colors.constant
execute 'highlight typescriptNumber guifg=' . g:syntax_colors.constant
execute 'highlight typescriptBoolean guifg=' . g:syntax_colors.constant
execute 'highlight typescriptNull guifg=' . g:syntax_colors.constant
execute 'highlight typescriptUndefined guifg=' . g:syntax_colors.constant

" Python
execute 'highlight pythonNumber guifg=' . g:syntax_colors.constant
execute 'highlight pythonBoolean guifg=' . g:syntax_colors.constant
execute 'highlight pythonNone guifg=' . g:syntax_colors.constant
execute 'highlight pythonBuiltin guifg=' . g:syntax_colors.support_function
execute 'highlight pythonFloat guifg=' . g:syntax_colors.constant
execute 'highlight pythonConstant guifg=' . g:syntax_colors.constant

" Ruby
execute 'highlight rubyNumber guifg=' . g:syntax_colors.constant
execute 'highlight rubyBoolean guifg=' . g:syntax_colors.constant
execute 'highlight rubyConstant guifg=' . g:syntax_colors.constant
execute 'highlight rubyFloat guifg=' . g:syntax_colors.constant
execute 'highlight rubySymbol guifg=' . g:syntax_colors.constant
execute 'highlight rubyPseudoVariable guifg=' . g:syntax_colors.variable_readonly

" Java
execute 'highlight javaConstant guifg=' . g:syntax_colors.constant
execute 'highlight javaNumber guifg=' . g:syntax_colors.constant
execute 'highlight javaBoolean guifg=' . g:syntax_colors.constant
execute 'highlight javaFloat guifg=' . g:syntax_colors.constant
execute 'highlight javaNull guifg=' . g:syntax_colors.constant

" Go
execute 'highlight goConstants guifg=' . g:syntax_colors.constant
execute 'highlight goNumber guifg=' . g:syntax_colors.constant
execute 'highlight goBoolean guifg=' . g:syntax_colors.constant
execute 'highlight goFloat guifg=' . g:syntax_colors.constant
execute 'highlight goNil guifg=' . g:syntax_colors.constant

" Rust
execute 'highlight rustNumber guifg=' . g:syntax_colors.constant
execute 'highlight rustBoolean guifg=' . g:syntax_colors.constant
execute 'highlight rustFloat guifg=' . g:syntax_colors.constant
execute 'highlight rustConstant guifg=' . g:syntax_colors.constant
execute 'highlight rustEnum guifg=' . g:syntax_colors.type
execute 'highlight rustEnumVariant guifg=' . g:syntax_colors.type

" PHP
execute 'highlight phpConstant guifg=' . g:syntax_colors.constant
execute 'highlight phpNumber guifg=' . g:syntax_colors.constant
execute 'highlight phpBoolean guifg=' . g:syntax_colors.constant
execute 'highlight phpFloat guifg=' . g:syntax_colors.constant
execute 'highlight phpNull guifg=' . g:syntax_colors.constant

" CSS/SCSS
execute 'highlight cssColor guifg=' . g:syntax_colors.constant
execute 'highlight cssValueNumber guifg=' . g:syntax_colors.constant
execute 'highlight cssValueLength guifg=' . g:syntax_colors.constant
execute 'highlight cssValueAngle guifg=' . g:syntax_colors.constant
execute 'highlight cssValueTime guifg=' . g:syntax_colors.constant
execute 'highlight cssValueFrequency guifg=' . g:syntax_colors.constant
execute 'highlight cssConstant guifg=' . g:syntax_colors.constant
execute 'highlight scssVariable guifg=' . g:syntax_colors.constant

" Shell
execute 'highlight shNumber guifg=' . g:syntax_colors.constant
execute 'highlight shQuote guifg=' . g:syntax_colors.constant
execute 'highlight shConstant guifg=' . g:syntax_colors.constant

" SQL
execute 'highlight sqlNumber guifg=' . g:syntax_colors.constant
execute 'highlight sqlBoolean guifg=' . g:syntax_colors.constant
execute 'highlight sqlConstant guifg=' . g:syntax_colors.constant
execute 'highlight sqlFloat guifg=' . g:syntax_colors.constant

" Vim script
execute 'highlight vimNumber guifg=' . g:syntax_colors.constant
execute 'highlight vimConstant guifg=' . g:syntax_colors.constant
execute 'highlight vimOption guifg=' . g:syntax_colors.constant

" Lua
execute 'highlight luaNumber guifg=' . g:syntax_colors.constant
execute 'highlight luaConstant guifg=' . g:syntax_colors.constant
execute 'highlight luaBoolean guifg=' . g:syntax_colors.constant
execute 'highlight luaNil guifg=' . g:syntax_colors.constant

" Special constants
execute 'highlight SpecialChar guifg=' . g:syntax_colors.constant
execute 'highlight SpecialKey guifg=' . g:syntax_colors.constant
execute 'highlight Tag guifg=' . g:syntax_colors.tag
execute 'highlight Delimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight SpecialComment guifg=' . g:syntax_colors.comment
execute 'highlight Debug guifg=' . g:syntax_colors.constant
execute 'highlight Underlined gui=underline'
execute 'highlight Ignore guifg=' . g:syntax_colors.comment
execute 'highlight Error guifg=' . g:colors.error
execute 'highlight Todo guifg=' . g:colors.warning

" Numeric literals with units
execute 'highlight NumberWithUnit guifg=' . g:syntax_colors.constant
execute 'highlight Hex guifg=' . g:syntax_colors.constant
execute 'highlight Binary guifg=' . g:syntax_colors.constant
execute 'highlight Octal guifg=' . g:syntax_colors.constant
execute 'highlight Float guifg=' . g:syntax_colors.constant
execute 'highlight Decimal guifg=' . g:syntax_colors.constant

" Special number formats
execute 'highlight NumberPrefix guifg=' . g:syntax_colors.constant
execute 'highlight NumberSuffix guifg=' . g:syntax_colors.constant
execute 'highlight HexPrefix guifg=' . g:syntax_colors.constant
execute 'highlight BinaryPrefix guifg=' . g:syntax_colors.constant
execute 'highlight OctalPrefix guifg=' . g:syntax_colors.constant
