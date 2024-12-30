" Storage syntax highlighting (matching VSCode's storage token colors)

" Basic storage
execute 'highlight StorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight StorageType guifg=' . g:syntax_colors.storage 
execute 'highlight StorageModifier guifg=' . g:syntax_colors.modifier 

" Language-specific storage
" C/C++
execute 'highlight cStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight cppStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight cType guifg=' . g:syntax_colors.storage 
execute 'highlight cppType guifg=' . g:syntax_colors.storage 
execute 'highlight cppModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight cppAccess guifg=' . g:syntax_colors.modifier 
execute 'highlight cppExceptions guifg=' . g:syntax_colors.storage 

" JavaScript/TypeScript
execute 'highlight jsStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight jsStorageClassDecorator guifg=' . g:syntax_colors.attribute 
execute 'highlight jsModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight typescriptStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight typescriptModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight typescriptAccessibility guifg=' . g:syntax_colors.modifier 
execute 'highlight typescriptDecorator guifg=' . g:syntax_colors.attribute 

" Python
execute 'highlight pythonStorage guifg=' . g:syntax_colors.storage 
execute 'highlight pythonStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight pythonDecorator guifg=' . g:syntax_colors.attribute 
execute 'highlight pythonDecoratorName guifg=' . g:syntax_colors.attribute 

" Ruby
execute 'highlight rubyStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight rubyModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight rubyAttribute guifg=' . g:syntax_colors.attribute 
execute 'highlight rubyMacro guifg=' . g:syntax_colors.storage 

" Java
execute 'highlight javaStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight javaModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight javaAnnotation guifg=' . g:syntax_colors.attribute 
execute 'highlight javaExternal guifg=' . g:syntax_colors.storage 

" Go
execute 'highlight goStorage guifg=' . g:syntax_colors.storage 
execute 'highlight goVar guifg=' . g:syntax_colors.storage 
execute 'highlight goConst guifg=' . g:syntax_colors.storage 
execute 'highlight goType guifg=' . g:syntax_colors.storage 

" Rust
execute 'highlight rustStorage guifg=' . g:syntax_colors.storage 
execute 'highlight rustModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight rustAttribute guifg=' . g:syntax_colors.attribute 
execute 'highlight rustDerive guifg=' . g:syntax_colors.attribute 
execute 'highlight rustLifetime guifg=' . g:syntax_colors.storage 

" PHP
execute 'highlight phpStorageClass guifg=' . g:syntax_colors.storage 
execute 'highlight phpModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight phpType guifg=' . g:syntax_colors.storage 
execute 'highlight phpDocTags guifg=' . g:syntax_colors.attribute 

" Storage modifiers
execute 'highlight AccessModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight MutabilityModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight ScopeModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight StaticModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight AbstractModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight FinalModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight VolatileModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight SynchronizedModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight TransientModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight NativeModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight StrictModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight ReadonlyModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight AsyncModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight AwaitModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight ConstModifier guifg=' . g:syntax_colors.modifier 

" Storage types
execute 'highlight PrimitiveType guifg=' . g:syntax_colors.storage 
execute 'highlight ReferenceType guifg=' . g:syntax_colors.storage 
execute 'highlight ValueType guifg=' . g:syntax_colors.storage 
execute 'highlight PointerType guifg=' . g:syntax_colors.storage 
execute 'highlight ArrayType guifg=' . g:syntax_colors.storage 
execute 'highlight GenericType guifg=' . g:syntax_colors.storage 
execute 'highlight EnumType guifg=' . g:syntax_colors.storage 
execute 'highlight UnionType guifg=' . g:syntax_colors.storage 

" Memory management
execute 'highlight MemoryKeyword guifg=' . g:syntax_colors.storage 
execute 'highlight AllocationKeyword guifg=' . g:syntax_colors.storage 
execute 'highlight DeallocationKeyword guifg=' . g:syntax_colors.storage 
execute 'highlight GarbageCollectionKeyword guifg=' . g:syntax_colors.storage 
