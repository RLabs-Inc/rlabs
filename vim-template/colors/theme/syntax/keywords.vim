" Keyword syntax highlighting (matching VSCode's keyword token colors)

" Basic keywords
execute 'highlight Keyword guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Statement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Conditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Repeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Label guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Exception guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')

" Control flow keywords
execute 'highlight ControlFlow guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight FlowKeyword guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight FlowReturn guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight FlowBreak guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight FlowContinue guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')

" Import/Export keywords
execute 'highlight Include guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Define guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Macro guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight PreCondit guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')

" Language-specific keywords
" C/C++
execute 'highlight cStatement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppStatement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppAccess guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Keyword')

" JavaScript/TypeScript
execute 'highlight jsStatement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsReturn guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsImport guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsExport guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsFrom guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsModuleAs guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsModuleKeyword guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsModuleAsterisk guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsAsyncKeyword guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsForAwait guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsYield guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')

" Python
execute 'highlight pythonStatement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonOperator guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonException guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonInclude guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonAsync guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonDecorator guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')

" Ruby
execute 'highlight rubyControl guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyException guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyInclude guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyAttribute guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')

" Java
execute 'highlight javaStatement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaException guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaAnnotation guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')

" Go
execute 'highlight goStatement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goException guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goPackage guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goImport guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')

" Rust
execute 'highlight rustKeyword guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustAsync guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustModPath guifg=' . g:syntax_colors.control_import . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustAttribute guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')

" PHP
execute 'highlight phpStatement guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight phpConditional guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight phpRepeat guifg=' . g:syntax_colors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight phpException guifg=' . g:syntax_colors.control_flow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight phpMemberSelector guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Keyword')

" Special keywords
execute 'highlight StorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Structure guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Typedef guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Debug guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight SpecialChar guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight SpecialComment guifg=' . g:syntax_colors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight Noise guifg=' . g:syntax_colors.punctuation . ' gui=' . g:theme_get_style('Keyword')
