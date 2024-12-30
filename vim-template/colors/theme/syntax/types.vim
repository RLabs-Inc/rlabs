" Type syntax highlighting (matching VSCode's type token colors)

" Basic types
execute 'highlight Type guifg=' . g:syntax_colors.type 
execute 'highlight TypeDef guifg=' . g:syntax_colors.type 
execute 'highlight TypeParameter guifg=' . g:syntax_colors.type_parameter 
execute 'highlight Class guifg=' . g:syntax_colors.class 
execute 'highlight Interface guifg=' . g:syntax_colors.type 
execute 'highlight Enum guifg=' . g:syntax_colors.type 
execute 'highlight Union guifg=' . g:syntax_colors.type 
execute 'highlight Struct guifg=' . g:syntax_colors.class 

" Language-specific types
" C/C++
execute 'highlight cType guifg=' . g:syntax_colors.type 
execute 'highlight cppType guifg=' . g:syntax_colors.type 
execute 'highlight cStructure guifg=' . g:syntax_colors.class 
execute 'highlight cppStructure guifg=' . g:syntax_colors.class 
execute 'highlight cEnum guifg=' . g:syntax_colors.type 
execute 'highlight cppEnum guifg=' . g:syntax_colors.type 
execute 'highlight cTypedef guifg=' . g:syntax_colors.type 
execute 'highlight cppTypedef guifg=' . g:syntax_colors.type 
execute 'highlight cppClass guifg=' . g:syntax_colors.class 
execute 'highlight cppClassDecl guifg=' . g:syntax_colors.class 
execute 'highlight cppTemplate guifg=' . g:syntax_colors.type_parameter 

" JavaScript/TypeScript
execute 'highlight jsClass guifg=' . g:syntax_colors.class 
execute 'highlight jsClassDefinition guifg=' . g:syntax_colors.class 
execute 'highlight jsClassKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight jsExtendsKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight typescriptClass guifg=' . g:syntax_colors.class 
execute 'highlight typescriptClassName guifg=' . g:syntax_colors.class 
execute 'highlight typescriptClassStatic guifg=' . g:syntax_colors.class 
execute 'highlight typescriptInterface guifg=' . g:syntax_colors.type 
execute 'highlight typescriptInterfaceName guifg=' . g:syntax_colors.type 
execute 'highlight typescriptEnum guifg=' . g:syntax_colors.type 
execute 'highlight typescriptEnumKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight typescriptTypeParameter guifg=' . g:syntax_colors.type_parameter 
execute 'highlight typescriptTypeReference guifg=' . g:syntax_colors.type 
execute 'highlight typescriptAliasKeyword guifg=' . g:syntax_colors.keyword 
execute 'highlight typescriptAliasDeclaration guifg=' . g:syntax_colors.type 

" Python
execute 'highlight pythonClass guifg=' . g:syntax_colors.class 
execute 'highlight pythonClassVar guifg=' . g:syntax_colors.variable 
execute 'highlight pythonClassDef guifg=' . g:syntax_colors.class 
execute 'highlight pythonClassName guifg=' . g:syntax_colors.class 
execute 'highlight pythonSuperclass guifg=' . g:syntax_colors.class 
execute 'highlight pythonTypeHint guifg=' . g:syntax_colors.type 
execute 'highlight pythonTypeVar guifg=' . g:syntax_colors.type_parameter 

" Ruby
execute 'highlight rubyClass guifg=' . g:syntax_colors.class 
execute 'highlight rubyModule guifg=' . g:syntax_colors.type 
execute 'highlight rubyClassName guifg=' . g:syntax_colors.class 
execute 'highlight rubyModuleName guifg=' . g:syntax_colors.type 
execute 'highlight rubyConstant guifg=' . g:syntax_colors.constant 
execute 'highlight rubyInstanceVariable guifg=' . g:syntax_colors.variable 
execute 'highlight rubyClassVariable guifg=' . g:syntax_colors.variable 
execute 'highlight rubyGlobalVariable guifg=' . g:syntax_colors.variable 
execute 'highlight rubySymbol guifg=' . g:syntax_colors.constant 
execute 'highlight rubyBlockParameter guifg=' . g:syntax_colors.parameter 
execute 'highlight rubyPseudoVariable guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight rubyPredefinedConstant guifg=' . g:syntax_colors.constant 
execute 'highlight rubyPredefinedVariable guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight rubyBoolean guifg=' . g:syntax_colors.constant 
execute 'highlight rubyException guifg=' . g:syntax_colors.type 
execute 'highlight rubyExceptionHandler guifg=' . g:syntax_colors.keyword 

" Java
execute 'highlight javaType guifg=' . g:syntax_colors.type 
execute 'highlight javaClass guifg=' . g:syntax_colors.class 
execute 'highlight javaInterface guifg=' . g:syntax_colors.type 
execute 'highlight javaEnum guifg=' . g:syntax_colors.type 
execute 'highlight javaAnnotation guifg=' . g:syntax_colors.attribute 
execute 'highlight javaTypedef guifg=' . g:syntax_colors.type 
execute 'highlight javaClassDecl guifg=' . g:syntax_colors.class 
execute 'highlight javaTypeDef guifg=' . g:syntax_colors.type 
execute 'highlight javaParamDef guifg=' . g:syntax_colors.parameter 
execute 'highlight javaVarArg guifg=' . g:syntax_colors.parameter 
execute 'highlight javaGeneric guifg=' . g:syntax_colors.type_parameter 
execute 'highlight javaTypeParameter guifg=' . g:syntax_colors.type_parameter 
execute 'highlight javaConstant guifg=' . g:syntax_colors.constant 
execute 'highlight javaException guifg=' . g:syntax_colors.type 
execute 'highlight javaExceptionDef guifg=' . g:syntax_colors.type 
execute 'highlight javaThrows guifg=' . g:syntax_colors.keyword 
execute 'highlight javaScopeDecl guifg=' . g:syntax_colors.modifier 
execute 'highlight javaClassScope guifg=' . g:syntax_colors.modifier 

" Go
execute 'highlight goType guifg=' . g:syntax_colors.type 
execute 'highlight goStruct guifg=' . g:syntax_colors.class 
execute 'highlight goInterface guifg=' . g:syntax_colors.type 
execute 'highlight goTypeName guifg=' . g:syntax_colors.type 
execute 'highlight goTypeConstructor guifg=' . g:syntax_colors.class 
execute 'highlight goTypeDef guifg=' . g:syntax_colors.type 
execute 'highlight goTypeDecl guifg=' . g:syntax_colors.type 
execute 'highlight goVarArgs guifg=' . g:syntax_colors.parameter 
execute 'highlight goReceiver guifg=' . g:syntax_colors.parameter 
execute 'highlight goDeclaration guifg=' . g:syntax_colors.storage 
execute 'highlight goVar guifg=' . g:syntax_colors.storage 
execute 'highlight goConst guifg=' . g:syntax_colors.storage 
execute 'highlight goPackage guifg=' . g:syntax_colors.class 
execute 'highlight goImport guifg=' . g:syntax_colors.control_import 
execute 'highlight goBuiltins guifg=' . g:syntax_colors.support_function 

" Rust
execute 'highlight rustType guifg=' . g:syntax_colors.type 
execute 'highlight rustEnum guifg=' . g:syntax_colors.type 
execute 'highlight rustStructure guifg=' . g:syntax_colors.class 
execute 'highlight rustTrait guifg=' . g:syntax_colors.type 
execute 'highlight rustGenericType guifg=' . g:syntax_colors.type_parameter 

" PHP
execute 'highlight phpClass guifg=' . g:syntax_colors.class 
execute 'highlight phpClassName guifg=' . g:syntax_colors.class 
execute 'highlight phpInterface guifg=' . g:syntax_colors.type 
execute 'highlight phpInterfaceName guifg=' . g:syntax_colors.type 
execute 'highlight phpTrait guifg=' . g:syntax_colors.type 
execute 'highlight phpTraitName guifg=' . g:syntax_colors.type 

" Type modifiers and annotations
execute 'highlight TypeModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight TypeAnnotation guifg=' . g:syntax_colors.type_parameter 
execute 'highlight TypeDecorator guifg=' . g:syntax_colors.type 
execute 'highlight TypeConstraint guifg=' . g:syntax_colors.type 
execute 'highlight TypeBound guifg=' . g:syntax_colors.type 
execute 'highlight TypeWildcard guifg=' . g:syntax_colors.type 

" Generic types
execute 'highlight GenericType guifg=' . g:syntax_colors.type
execute 'highlight GenericTypeParameter guifg=' . g:syntax_colors.type_parameter 
execute 'highlight GenericTypeArgument guifg=' . g:syntax_colors.type_parameter 
execute 'highlight GenericTypeConstraint guifg=' . g:syntax_colors.type 
execute 'highlight GenericTypeBound guifg=' . g:syntax_colors.type 
