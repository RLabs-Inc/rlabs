" Function syntax highlighting (matching VSCode's function token colors)

" Basic function elements
execute 'highlight Function guifg=' . g:syntax_colors.function 
execute 'highlight FunctionCall guifg=' . g:syntax_colors.function_call
execute 'highlight Method guifg=' . g:syntax_colors.method 
execute 'highlight MethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight Parameter guifg=' . g:syntax_colors.parameter

" Language-specific functions
" C/C++
execute 'highlight cFunction guifg=' . g:syntax_colors.function 
execute 'highlight cFunctionCall guifg=' . g:syntax_colors.function_call
execute 'highlight cppFunction guifg=' . g:syntax_colors.function 
execute 'highlight cppFunctionCall guifg=' . g:syntax_colors.function_call
execute 'highlight cppMethod guifg=' . g:syntax_colors.method 
execute 'highlight cppMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight cParameter guifg=' . g:syntax_colors.parameter
execute 'highlight cppParameter guifg=' . g:syntax_colors.parameter

" JavaScript/TypeScript
execute 'highlight jsFunction guifg=' . g:syntax_colors.function 
execute 'highlight jsFunctionCall guifg=' . g:syntax_colors.function_call
execute 'highlight jsMethod guifg=' . g:syntax_colors.method 
execute 'highlight jsMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight jsArrowFunction guifg=' . g:syntax_colors.function 
execute 'highlight jsClassMethod guifg=' . g:syntax_colors.method 
execute 'highlight jsAsyncKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight jsAwaitKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight jsObjectFunctionMethod guifg=' . g:syntax_colors.method 
execute 'highlight jsObjectMethodType guifg=' . g:syntax_colors.method 
execute 'highlight typescriptFunctionMethod guifg=' . g:syntax_colors.method 
execute 'highlight typescriptMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight typescriptArrowFunc guifg=' . g:syntax_colors.function 
execute 'highlight typescriptCallSignature guifg=' . g:syntax_colors.function 

" Python
execute 'highlight pythonFunction guifg=' . g:syntax_colors.function 
execute 'highlight pythonFunctionCall guifg=' . g:syntax_colors.function_call
execute 'highlight pythonMethod guifg=' . g:syntax_colors.method 
execute 'highlight pythonMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight pythonDecorator guifg=' . g:syntax_colors.function 
execute 'highlight pythonDecoratorName guifg=' . g:syntax_colors.function 
execute 'highlight pythonParam guifg=' . g:syntax_colors.parameter

" Ruby
execute 'highlight rubyFunction guifg=' . g:syntax_colors.function 
execute 'highlight rubyMethodName guifg=' . g:syntax_colors.method 
execute 'highlight rubyMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight rubyBlockParameter guifg=' . g:syntax_colors.parameter

" Java
execute 'highlight javaFunction guifg=' . g:syntax_colors.function 
execute 'highlight javaFuncDef guifg=' . g:syntax_colors.function 
execute 'highlight javaMethodDecl guifg=' . g:syntax_colors.method 
execute 'highlight javaMethodCall guifg=' . g:syntax_colors.method_call

" Go
execute 'highlight goFunction guifg=' . g:syntax_colors.function 
execute 'highlight goFunctionCall guifg=' . g:syntax_colors.function_call
execute 'highlight goMethod guifg=' . g:syntax_colors.method 
execute 'highlight goMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight goReceiver guifg=' . g:syntax_colors.parameter

" Rust
execute 'highlight rustFunction guifg=' . g:syntax_colors.function 
execute 'highlight rustFuncCall guifg=' . g:syntax_colors.function_call
execute 'highlight rustMethod guifg=' . g:syntax_colors.method 
execute 'highlight rustMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight rustDerive guifg=' . g:syntax_colors.function 
execute 'highlight rustAttribute guifg=' . g:syntax_colors.function 
execute 'highlight rustParameter guifg=' . g:syntax_colors.parameter

" PHP
execute 'highlight phpFunction guifg=' . g:syntax_colors.function 
execute 'highlight phpFunctionCall guifg=' . g:syntax_colors.function_call
execute 'highlight phpMethod guifg=' . g:syntax_colors.method 
execute 'highlight phpMethodCall guifg=' . g:syntax_colors.method_call
execute 'highlight phpParam guifg=' . g:syntax_colors.parameter
