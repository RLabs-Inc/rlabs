" Variable syntax highlighting (matching VSCode's variable token colors)

" Basic variables
execute 'highlight Variable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight VariableDeclaration guifg=' . g:syntax_colors.variable_declaration . ' gui=' . g:theme_get_style('Variable')
execute 'highlight VariableReadonly guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight VariableProperty guifg=' . g:syntax_colors.variable_property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight Property guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight PropertyDeclaration guifg=' . g:syntax_colors.property_declaration . ' gui=' . g:theme_get_style('Variable')

" Language-specific variables
" C/C++
execute 'highlight cVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight cppVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight cMember guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight cppMember guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight cppMemberVariable guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight cppStaticMember guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')

" JavaScript/TypeScript
execute 'highlight jsVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight jsVariableDeclaration guifg=' . g:syntax_colors.variable_declaration . ' gui=' . g:theme_get_style('Variable')
execute 'highlight jsObjectProp guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight jsObjectKey guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight jsThis guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight jsSuper guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight jsClassProperty guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight jsDestructuringProperty guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight typescriptVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight typescriptVariableDeclaration guifg=' . g:syntax_colors.variable_declaration . ' gui=' . g:theme_get_style('Variable')
execute 'highlight typescriptMember guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight typescriptPropertySignature guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight typescriptReadonlyModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight typescriptAccessibilityModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')

" Python
execute 'highlight pythonVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight pythonClassVar guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight pythonInstanceVariable guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight pythonSelf guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight pythonCls guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')

" Ruby
execute 'highlight rubyInstanceVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rubyClassVariable guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rubyGlobalVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rubyPseudoVariable guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rubyConstant guifg=' . g:syntax_colors.constant . ' gui=' . g:theme_get_style('Variable')

" Java
execute 'highlight javaVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight javaField guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight javaConstant guifg=' . g:syntax_colors.constant . ' gui=' . g:theme_get_style('Variable')
execute 'highlight javaStaticField guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight javaFinalVariable guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')

" Go
execute 'highlight goConst guifg=' . g:syntax_colors.constant . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goVar guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goVarDefs guifg=' . g:syntax_colors.variable_declaration . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goField guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goStructField guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goInterfaceField guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goConstVar guifg=' . g:syntax_colors.constant . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goReceiver guifg=' . g:syntax_colors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goReceiverVar guifg=' . g:syntax_colors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight goReceiverType guifg=' . g:syntax_colors.type . ' gui=' . g:theme_get_style('Variable')

" Rust
execute 'highlight rustVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustConstant guifg=' . g:syntax_colors.constant . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustField guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustSelf guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustSigil guifg=' . g:syntax_colors.operator . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustLifetime guifg=' . g:syntax_colors.type_parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustMut guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustRef guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustStaticLifetime guifg=' . g:syntax_colors.type_parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight rustSuper guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')

" PHP
execute 'highlight phpVariable guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight phpVarSelector guifg=' . g:syntax_colors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight phpMemberSelector guifg=' . g:syntax_colors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight phpStaticVariable guifg=' . g:syntax_colors.variable_readonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight phpConstant guifg=' . g:syntax_colors.constant . ' gui=' . g:theme_get_style('Variable')

" Variable modifiers
execute 'highlight VariableModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight ReadonlyModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight StaticModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight AccessModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight ScopeModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
execute 'highlight MutabilityModifier guifg=' . g:syntax_colors.modifier . ' gui=' . g:theme_get_style('Variable')
