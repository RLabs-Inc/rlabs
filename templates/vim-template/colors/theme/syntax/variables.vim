" Variable syntax highlighting (matching VSCode's variable token colors)

" Basic variables
execute 'highlight Variable guifg=' . g:syntax_colors.variable 
execute 'highlight VariableDeclaration guifg=' . g:syntax_colors.variable_declaration 
execute 'highlight VariableReadonly guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight VariableProperty guifg=' . g:syntax_colors.variable_property 
execute 'highlight Property guifg=' . g:syntax_colors.property 
execute 'highlight PropertyDeclaration guifg=' . g:syntax_colors.property_declaration 

" Language-specific variables
" C/C++
execute 'highlight cVariable guifg=' . g:syntax_colors.variable 
execute 'highlight cppVariable guifg=' . g:syntax_colors.variable 
execute 'highlight cMember guifg=' . g:syntax_colors.property 
execute 'highlight cppMember guifg=' . g:syntax_colors.property 
execute 'highlight cppMemberVariable guifg=' . g:syntax_colors.property 
execute 'highlight cppStaticMember guifg=' . g:syntax_colors.variable_readonly 

" JavaScript/TypeScript
execute 'highlight jsVariable guifg=' . g:syntax_colors.variable 
execute 'highlight jsVariableDeclaration guifg=' . g:syntax_colors.variable_declaration 
execute 'highlight jsObjectProp guifg=' . g:syntax_colors.property 
execute 'highlight jsObjectKey guifg=' . g:syntax_colors.property 
execute 'highlight jsThis guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight jsSuper guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight jsClassProperty guifg=' . g:syntax_colors.property 
execute 'highlight jsDestructuringProperty guifg=' . g:syntax_colors.property 
execute 'highlight typescriptVariable guifg=' . g:syntax_colors.variable 
execute 'highlight typescriptVariableDeclaration guifg=' . g:syntax_colors.variable_declaration 
execute 'highlight typescriptMember guifg=' . g:syntax_colors.property 
execute 'highlight typescriptPropertySignature guifg=' . g:syntax_colors.property 
execute 'highlight typescriptReadonlyModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight typescriptAccessibilityModifier guifg=' . g:syntax_colors.modifier 

" Python
execute 'highlight pythonVariable guifg=' . g:syntax_colors.variable 
execute 'highlight pythonClassVar guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight pythonInstanceVariable guifg=' . g:syntax_colors.property 
execute 'highlight pythonSelf guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight pythonCls guifg=' . g:syntax_colors.variable_readonly 

" Ruby
execute 'highlight rubyInstanceVariable guifg=' . g:syntax_colors.variable 
execute 'highlight rubyClassVariable guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight rubyGlobalVariable guifg=' . g:syntax_colors.variable 
execute 'highlight rubyPseudoVariable guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight rubyConstant guifg=' . g:syntax_colors.constant 

" Java
execute 'highlight javaVariable guifg=' . g:syntax_colors.variable 
execute 'highlight javaField guifg=' . g:syntax_colors.property 
execute 'highlight javaConstant guifg=' . g:syntax_colors.constant 
execute 'highlight javaStaticField guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight javaFinalVariable guifg=' . g:syntax_colors.variable_readonly 

" Go
execute 'highlight goConst guifg=' . g:syntax_colors.constant 
execute 'highlight goVar guifg=' . g:syntax_colors.variable 
execute 'highlight goVarDefs guifg=' . g:syntax_colors.variable_declaration 
execute 'highlight goField guifg=' . g:syntax_colors.property 
execute 'highlight goStructField guifg=' . g:syntax_colors.property 
execute 'highlight goInterfaceField guifg=' . g:syntax_colors.property 
execute 'highlight goConstVar guifg=' . g:syntax_colors.constant 
execute 'highlight goReceiver guifg=' . g:syntax_colors.parameter 
execute 'highlight goReceiverVar guifg=' . g:syntax_colors.parameter 
execute 'highlight goReceiverType guifg=' . g:syntax_colors.type 

" Rust
execute 'highlight rustVariable guifg=' . g:syntax_colors.variable 
execute 'highlight rustConstant guifg=' . g:syntax_colors.constant 
execute 'highlight rustField guifg=' . g:syntax_colors.property 
execute 'highlight rustSelf guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight rustSigil guifg=' . g:syntax_colors.operator 
execute 'highlight rustLifetime guifg=' . g:syntax_colors.type_parameter 
execute 'highlight rustMut guifg=' . g:syntax_colors.modifier 
execute 'highlight rustRef guifg=' . g:syntax_colors.modifier 
execute 'highlight rustStaticLifetime guifg=' . g:syntax_colors.type_parameter 
execute 'highlight rustSuper guifg=' . g:syntax_colors.variable_readonly 

" PHP
execute 'highlight phpVariable guifg=' . g:syntax_colors.variable 
execute 'highlight phpVarSelector guifg=' . g:syntax_colors.variable 
execute 'highlight phpMemberSelector guifg=' . g:syntax_colors.property 
execute 'highlight phpStaticVariable guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight phpConstant guifg=' . g:syntax_colors.constant 

" Variable modifiers
execute 'highlight VariableModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight ReadonlyModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight StaticModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight AccessModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight ScopeModifier guifg=' . g:syntax_colors.modifier 
execute 'highlight MutabilityModifier guifg=' . g:syntax_colors.modifier 
