" Keyword syntax highlighting (matching VSCode's keyword token colors)

" Basic keywords
execute 'highlight Keyword guifg=' . g:syntax_colors.keyword 
execute 'highlight Statement guifg=' . g:syntax_colors.keyword 
execute 'highlight Conditional guifg=' . g:syntax_colors.control 
execute 'highlight Repeat guifg=' . g:syntax_colors.control 
execute 'highlight Label guifg=' . g:syntax_colors.control 
execute 'highlight Exception guifg=' . g:syntax_colors.control_flow 

" Control flow keywords
execute 'highlight ControlFlow guifg=' . g:syntax_colors.control_flow 
execute 'highlight FlowKeyword guifg=' . g:syntax_colors.control_flow 
execute 'highlight FlowReturn guifg=' . g:syntax_colors.control_flow 
execute 'highlight FlowBreak guifg=' . g:syntax_colors.control_flow 
execute 'highlight FlowContinue guifg=' . g:syntax_colors.control_flow 

" Import/Export keywords
execute 'highlight Include guifg=' . g:syntax_colors.control_import 
execute 'highlight Define guifg=' . g:syntax_colors.control_import 
execute 'highlight Macro guifg=' . g:syntax_colors.control_import 
execute 'highlight PreCondit guifg=' . g:syntax_colors.control_import 

" Language-specific keywords
" C/C++
execute 'highlight cStatement guifg=' . g:syntax_colors.keyword 
execute 'highlight cConditional guifg=' . g:syntax_colors.control 
execute 'highlight cRepeat guifg=' . g:syntax_colors.control 
execute 'highlight cppStatement guifg=' . g:syntax_colors.keyword 
execute 'highlight cppModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight cppAccess guifg=' . g:syntax_colors.modifier 
execute 'highlight cppOperator guifg=' . g:syntax_colors.operator 

" JavaScript/TypeScript
execute 'highlight jsStatement guifg=' . g:syntax_colors.keyword 
execute 'highlight jsConditional guifg=' . g:syntax_colors.control 
execute 'highlight jsRepeat guifg=' . g:syntax_colors.control 
execute 'highlight jsReturn guifg=' . g:syntax_colors.control_flow 
execute 'highlight jsImport guifg=' . g:syntax_colors.control_import 
execute 'highlight jsExport guifg=' . g:syntax_colors.control_import 
execute 'highlight jsFrom guifg=' . g:syntax_colors.control_import 
execute 'highlight jsModuleAs guifg=' . g:syntax_colors.control_import 
execute 'highlight jsModuleKeyword guifg=' . g:syntax_colors.control_import 
execute 'highlight jsModuleAsterisk guifg=' . g:syntax_colors.control_import 
execute 'highlight jsAsyncKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight jsForAwait guifg=' . g:syntax_colors.keyword 
execute 'highlight jsYield guifg=' . g:syntax_colors.control_flow 

" Python
execute 'highlight pythonStatement guifg=' . g:syntax_colors.keyword 
execute 'highlight pythonConditional guifg=' . g:syntax_colors.control 
execute 'highlight pythonRepeat guifg=' . g:syntax_colors.control 
execute 'highlight pythonOperator guifg=' . g:syntax_colors.operator 
execute 'highlight pythonException guifg=' . g:syntax_colors.control_flow 
execute 'highlight pythonInclude guifg=' . g:syntax_colors.control_import 
execute 'highlight pythonAsync guifg=' . g:syntax_colors.keyword 
execute 'highlight pythonDecorator guifg=' . g:syntax_colors.attribute 

" Ruby
execute 'highlight rubyControl guifg=' . g:syntax_colors.control 
execute 'highlight rubyConditional guifg=' . g:syntax_colors.control 
execute 'highlight rubyRepeat guifg=' . g:syntax_colors.control 
execute 'highlight rubyException guifg=' . g:syntax_colors.control_flow 
execute 'highlight rubyInclude guifg=' . g:syntax_colors.control_import 
execute 'highlight rubyAttribute guifg=' . g:syntax_colors.attribute 

" Java
execute 'highlight javaStatement guifg=' . g:syntax_colors.keyword 
execute 'highlight javaConditional guifg=' . g:syntax_colors.control 
execute 'highlight javaRepeat guifg=' . g:syntax_colors.control 
execute 'highlight javaException guifg=' . g:syntax_colors.control_flow 
execute 'highlight javaModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight javaAnnotation guifg=' . g:syntax_colors.attribute 

" Go
execute 'highlight goStatement guifg=' . g:syntax_colors.keyword 
execute 'highlight goConditional guifg=' . g:syntax_colors.control 
execute 'highlight goRepeat guifg=' . g:syntax_colors.control 
execute 'highlight goException guifg=' . g:syntax_colors.control_flow 
execute 'highlight goPackage guifg=' . g:syntax_colors.control_import 
execute 'highlight goImport guifg=' . g:syntax_colors.control_import 

" Rust
execute 'highlight rustKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight rustConditional guifg=' . g:syntax_colors.control 
execute 'highlight rustRepeat guifg=' . g:syntax_colors.control 
execute 'highlight rustAsync guifg=' . g:syntax_colors.keyword 
execute 'highlight rustModPath guifg=' . g:syntax_colors.control_import 
execute 'highlight rustAttribute guifg=' . g:syntax_colors.attribute 

" PHP
execute 'highlight phpStatement guifg=' . g:syntax_colors.keyword 
execute 'highlight phpConditional guifg=' . g:syntax_colors.control 
execute 'highlight phpRepeat guifg=' . g:syntax_colors.control 
execute 'highlight phpException guifg=' . g:syntax_colors.control_flow 
execute 'highlight phpMemberSelector guifg=' . g:syntax_colors.operator 

" Special keywords
execute 'highlight StorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight Structure guifg=' . g:syntax_colors.storage 
execute 'highlight Typedef guifg=' . g:syntax_colors.storage 
execute 'highlight Debug guifg=' . g:syntax_colors.keyword 
execute 'highlight SpecialChar guifg=' . g:syntax_colors.keyword 
execute 'highlight SpecialComment guifg=' . g:syntax_colors.keyword 
execute 'highlight Noise guifg=' . g:syntax_colors.punctuation 
