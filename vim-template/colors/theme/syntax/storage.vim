" Storage syntax highlighting (matching VSCode's storage token colors)

" Basic storage
execute 'highlight StorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight StorageType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight StorageModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')

" Language-specific storage
" C/C++
execute 'highlight cStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppAccess guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight cppExceptions guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')

" JavaScript/TypeScript
execute 'highlight jsStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsStorageClassDecorator guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight jsModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight typescriptStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight typescriptModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight typescriptAccessibility guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight typescriptDecorator guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')

" Python
execute 'highlight pythonStorage guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonDecorator guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight pythonDecoratorName guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')

" Ruby
execute 'highlight rubyStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyAttribute guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rubyMacro guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')

" Java
execute 'highlight javaStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaAnnotation guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight javaExternal guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')

" Go
execute 'highlight goStorage guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goVar guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goConst guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight goType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')

" Rust
execute 'highlight rustStorage guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustAttribute guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustDerive guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight rustLifetime guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')

" PHP
execute 'highlight phpStorageClass guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight phpModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight phpType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight phpDocTags guifg=' . g:syntax_colors.attribute . ' gui=' . g:theme_get_style('Keyword')

" Storage modifiers
execute 'highlight AccessModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight MutabilityModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight ScopeModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight StaticModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight AbstractModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight FinalModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight VolatileModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight SynchronizedModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight TransientModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight NativeModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight StrictModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight ReadonlyModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight AsyncModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight AwaitModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight ConstModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Keyword')

" Storage types
execute 'highlight PrimitiveType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight ReferenceType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight ValueType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight PointerType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight ArrayType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight GenericType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight EnumType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight UnionType guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')

" Memory management
execute 'highlight MemoryKeyword guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight AllocationKeyword guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight DeallocationKeyword guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight GarbageCollectionKeyword guifg=' . g:syntax_colors.storage . ' gui=' . g:theme_get_style('Keyword')
