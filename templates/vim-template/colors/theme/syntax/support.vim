" Support syntax highlighting (matching VSCode's support token colors)

" Basic support elements
execute 'highlight Support guifg=' . g:syntax_colors.support
execute 'highlight SupportFunction guifg=' . g:syntax_colors.support_function
execute 'highlight SupportMethod guifg=' . g:syntax_colors.support_method
execute 'highlight SupportClass guifg=' . g:syntax_colors.class
execute 'highlight SupportType guifg=' . g:syntax_colors.type
execute 'highlight SupportVariable guifg=' . g:syntax_colors.support_variable
execute 'highlight SupportProperty guifg=' . g:syntax_colors.support_property

" Language-specific support
" C/C++
execute 'highlight cLibrary guifg=' . g:syntax_colors.support_function
execute 'highlight cLibFunction guifg=' . g:syntax_colors.support_function
execute 'highlight cLibType guifg=' . g:syntax_colors.type
execute 'highlight cppSTL guifg=' . g:syntax_colors.support
execute 'highlight cppSTLfunction guifg=' . g:syntax_colors.support_function
execute 'highlight cppSTLtype guifg=' . g:syntax_colors.type
execute 'highlight cppSTLexception guifg=' . g:syntax_colors.type
execute 'highlight cppSTLclass guifg=' . g:syntax_colors.class

" JavaScript/TypeScript
execute 'highlight jsGlobalObjects guifg=' . g:syntax_colors.support
execute 'highlight jsBuiltins guifg=' . g:syntax_colors.support_function
execute 'highlight jsDOMObjects guifg=' . g:syntax_colors.support
execute 'highlight jsDOMMethods guifg=' . g:syntax_colors.support_method
execute 'highlight jsDOMProperties guifg=' . g:syntax_colors.support_property
execute 'highlight jsWindowObjects guifg=' . g:syntax_colors.support
execute 'highlight jsWindowMethods guifg=' . g:syntax_colors.support_method
execute 'highlight jsWindowProperties guifg=' . g:syntax_colors.support_property
execute 'highlight jsConsole guifg=' . g:syntax_colors.support
execute 'highlight jsConsoleMethods guifg=' . g:syntax_colors.support_method
execute 'highlight jsPromise guifg=' . g:syntax_colors.support
execute 'highlight jsPromiseMethods guifg=' . g:syntax_colors.support_method
execute 'highlight typescriptGlobal guifg=' . g:syntax_colors.support
execute 'highlight typescriptBOMWindowProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptDOMStorageProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptFileReaderProp guifg=' . g:syntax_colors.support_property
execute 'highlight typescriptGlobalMethod guifg=' . g:syntax_colors.support_method

" Python
execute 'highlight pythonBuiltin guifg=' . g:syntax_colors.support_function
execute 'highlight pythonBuiltinObj guifg=' . g:syntax_colors.support
execute 'highlight pythonBuiltinFunc guifg=' . g:syntax_colors.support_function
execute 'highlight pythonBuiltinType guifg=' . g:syntax_colors.type
execute 'highlight pythonExceptions guifg=' . g:syntax_colors.type
execute 'highlight pythonException guifg=' . g:syntax_colors.type

" Ruby
execute 'highlight rubyClass guifg=' . g:syntax_colors.class
execute 'highlight rubyModule guifg=' . g:syntax_colors.class
execute 'highlight rubyPseudoVariable guifg=' . g:syntax_colors.variable_readonly
execute 'highlight rubyConstant guifg=' . g:syntax_colors.constant

" Java
execute 'highlight javaLangObject guifg=' . g:syntax_colors.support
execute 'highlight javaLangClass guifg=' . g:syntax_colors.class
execute 'highlight javaLangMethod guifg=' . g:syntax_colors.support_method
execute 'highlight javaLangThrowable guifg=' . g:syntax_colors.type
execute 'highlight javaLangException guifg=' . g:syntax_colors.type
execute 'highlight javaLangError guifg=' . g:syntax_colors.type

" Go
execute 'highlight goBuiltins guifg=' . g:syntax_colors.support_function
execute 'highlight goConstants guifg=' . g:syntax_colors.constant
execute 'highlight goDeclaration guifg=' . g:syntax_colors.storage
execute 'highlight goDeclType guifg=' . g:syntax_colors.type

" Rust
execute 'highlight rustLibrary guifg=' . g:syntax_colors.support
execute 'highlight rustTrait guifg=' . g:syntax_colors.type
execute 'highlight rustEnum guifg=' . g:syntax_colors.type
execute 'highlight rustEnumVariant guifg=' . g:syntax_colors.type
execute 'highlight rustModPath guifg=' . g:syntax_colors.class
execute 'highlight rustSelf guifg=' . g:syntax_colors.variable_readonly

" PHP
execute 'highlight phpSuperglobals guifg=' . g:syntax_colors.support_variable
execute 'highlight phpMagicConstants guifg=' . g:syntax_colors.constant
execute 'highlight phpServerVars guifg=' . g:syntax_colors.support_variable
execute 'highlight phpMethods guifg=' . g:syntax_colors.support_method

" Built-in support
execute 'highlight BuiltinFunction guifg=' . g:syntax_colors.support_function
execute 'highlight BuiltinMethod guifg=' . g:syntax_colors.support_method
execute 'highlight BuiltinClass guifg=' . g:syntax_colors.class
execute 'highlight BuiltinType guifg=' . g:syntax_colors.type
execute 'highlight BuiltinVariable guifg=' . g:syntax_colors.support_variable
execute 'highlight BuiltinProperty guifg=' . g:syntax_colors.support_property
execute 'highlight BuiltinConstant guifg=' . g:syntax_colors.constant
execute 'highlight BuiltinException guifg=' . g:syntax_colors.type

" Library support
execute 'highlight LibraryFunction guifg=' . g:syntax_colors.support_function
execute 'highlight LibraryMethod guifg=' . g:syntax_colors.support_method
execute 'highlight LibraryClass guifg=' . g:syntax_colors.class
execute 'highlight LibraryType guifg=' . g:syntax_colors.type
execute 'highlight LibraryVariable guifg=' . g:syntax_colors.support_variable
execute 'highlight LibraryProperty guifg=' . g:syntax_colors.support_property
execute 'highlight LibraryConstant guifg=' . g:syntax_colors.constant

" Framework support
execute 'highlight FrameworkFunction guifg=' . g:syntax_colors.support_function
execute 'highlight FrameworkMethod guifg=' . g:syntax_colors.support_method
execute 'highlight FrameworkClass guifg=' . g:syntax_colors.class
execute 'highlight FrameworkType guifg=' . g:syntax_colors.type
execute 'highlight FrameworkVariable guifg=' . g:syntax_colors.support_variable
execute 'highlight FrameworkProperty guifg=' . g:syntax_colors.support_property
execute 'highlight FrameworkConstant guifg=' . g:syntax_colors.constant

" Support modifiers
execute 'highlight SupportModifier guifg=' . g:syntax_colors.modifier
execute 'highlight SupportAccess guifg=' . g:syntax_colors.modifier
execute 'highlight SupportScope guifg=' . g:syntax_colors.modifier
execute 'highlight SupportStatic guifg=' . g:syntax_colors.modifier
execute 'highlight SupportAbstract guifg=' . g:syntax_colors.modifier
execute 'highlight SupportFinal guifg=' . g:syntax_colors.modifier
execute 'highlight SupportAsync guifg=' . g:syntax_colors.modifier

" DOM/Browser support
execute 'highlight DOMClass guifg=' . g:syntax_colors.class
execute 'highlight DOMFunction guifg=' . g:syntax_colors.support_function
execute 'highlight DOMMethod guifg=' . g:syntax_colors.support_method
execute 'highlight DOMProperty guifg=' . g:syntax_colors.support_property
execute 'highlight DOMEvent guifg=' . g:syntax_colors.type
execute 'highlight DOMException guifg=' . g:syntax_colors.type
