" Entity syntax highlighting (matching VSCode's entity token colors)

" Basic entities
execute 'highlight Structure guifg=' . g:syntax_colors.class
execute 'highlight StorageClass guifg=' . g:syntax_colors.storage
execute 'highlight Typedef guifg=' . g:syntax_colors.type
execute 'highlight Interface guifg=' . g:syntax_colors.type
execute 'highlight Enum guifg=' . g:syntax_colors.type

" Language-specific entities
" C/C++
execute 'highlight cStructure guifg=' . g:syntax_colors.class
execute 'highlight cppStructure guifg=' . g:syntax_colors.class
execute 'highlight cClass guifg=' . g:syntax_colors.class
execute 'highlight cppClass guifg=' . g:syntax_colors.class
execute 'highlight cEnum guifg=' . g:syntax_colors.type
execute 'highlight cppEnum guifg=' . g:syntax_colors.type
execute 'highlight cTypedef guifg=' . g:syntax_colors.type
execute 'highlight cppTypedef guifg=' . g:syntax_colors.type
execute 'highlight cNamespace guifg=' . g:syntax_colors.type
execute 'highlight cppNamespace guifg=' . g:syntax_colors.type

" JavaScript/TypeScript
execute 'highlight jsClass guifg=' . g:syntax_colors.class
execute 'highlight jsClassDefinition guifg=' . g:syntax_colors.class
execute 'highlight jsClassKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight jsExtendsKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight jsClassMethodType guifg=' . g:syntax_colors.keyword
execute 'highlight typescriptClassKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight typescriptClassName guifg=' . g:syntax_colors.class
execute 'highlight typescriptInterfaceKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight typescriptInterfaceName guifg=' . g:syntax_colors.type
execute 'highlight typescriptEnumKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight typescriptEnumMember guifg=' . g:syntax_colors.constant

" Python
execute 'highlight pythonClass guifg=' . g:syntax_colors.class
execute 'highlight pythonClassVar guifg=' . g:syntax_colors.variable
execute 'highlight pythonDecorator guifg=' . g:syntax_colors.attribute
execute 'highlight pythonDottedName guifg=' . g:syntax_colors.attribute

" Ruby
execute 'highlight rubyClass guifg=' . g:syntax_colors.class
execute 'highlight rubyModule guifg=' . g:syntax_colors.type
execute 'highlight rubyConstant guifg=' . g:syntax_colors.constant
execute 'highlight rubyClassVariable guifg=' . g:syntax_colors.variable
execute 'highlight rubyInstanceVariable guifg=' . g:syntax_colors.variable

" Java
execute 'highlight javaClass guifg=' . g:syntax_colors.class
execute 'highlight javaInterface guifg=' . g:syntax_colors.type
execute 'highlight javaEnum guifg=' . g:syntax_colors.type
execute 'highlight javaAnnotation guifg=' . g:syntax_colors.attribute
execute 'highlight javaTypedef guifg=' . g:syntax_colors.type

" Go
execute 'highlight goStruct guifg=' . g:syntax_colors.class
execute 'highlight goInterface guifg=' . g:syntax_colors.type
execute 'highlight goTypeName guifg=' . g:syntax_colors.type
execute 'highlight goTypeConstructor guifg=' . g:syntax_colors.class

" Rust
execute 'highlight rustStructure guifg=' . g:syntax_colors.class
execute 'highlight rustTrait guifg=' . g:syntax_colors.type
execute 'highlight rustEnum guifg=' . g:syntax_colors.type
execute 'highlight rustModPath guifg=' . g:syntax_colors.type
execute 'highlight rustAttribute guifg=' . g:syntax_colors.attribute

" PHP
execute 'highlight phpClass guifg=' . g:syntax_colors.class
execute 'highlight phpInterface guifg=' . g:syntax_colors.type
execute 'highlight phpTrait guifg=' . g:syntax_colors.type
execute 'highlight phpDocTags guifg=' . g:syntax_colors.keyword

" CSS/SCSS
execute 'highlight cssClassName guifg=' . g:syntax_colors.class
execute 'highlight cssIdentifier guifg=' . g:syntax_colors.class
execute 'highlight cssTagName guifg=' . g:syntax_colors.tag
execute 'highlight cssColor guifg=' . g:syntax_colors.constant
execute 'highlight cssValueLength guifg=' . g:syntax_colors.constant
execute 'highlight cssValueNumber guifg=' . g:syntax_colors.constant
execute 'highlight cssValueAngle guifg=' . g:syntax_colors.constant
execute 'highlight cssValueTime guifg=' . g:syntax_colors.datetime
execute 'highlight cssValueFrequency guifg=' . g:syntax_colors.constant
execute 'highlight cssUnitDecorators guifg=' . g:syntax_colors.unit
execute 'highlight sassClass guifg=' . g:syntax_colors.class
execute 'highlight sassId guifg=' . g:syntax_colors.class
execute 'highlight cssUnits guifg=' . g:syntax_colors.constant
execute 'highlight cssLength guifg=' . g:syntax_colors.constant
execute 'highlight cssPercentage guifg=' . g:syntax_colors.constant
execute 'highlight cssAngle guifg=' . g:syntax_colors.constant
execute 'highlight cssTime guifg=' . g:syntax_colors.constant
execute 'highlight cssFrequency guifg=' . g:syntax_colors.constant
execute 'highlight cssResolution guifg=' . g:syntax_colors.constant
execute 'highlight cssFlexible guifg=' . g:syntax_colors.constant
execute 'highlight cssGrid guifg=' . g:syntax_colors.constant
execute 'highlight cssTransform guifg=' . g:syntax_colors.constant

" HTML/XML
execute 'highlight htmlTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight htmlEndTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight htmlTagName guifg=' . g:syntax_colors.tag
execute 'highlight htmlArg guifg=' . g:syntax_colors.attribute
execute 'highlight htmlTitle guifg=' . g:syntax_colors.tag
execute 'highlight xmlTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight xmlEndTag guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight xmlTagName guifg=' . g:syntax_colors.tag
execute 'highlight xmlAttrib guifg=' . g:syntax_colors.attribute

" Special entities
execute 'highlight EntityNamespace guifg=' . g:syntax_colors.type
execute 'highlight EntityClass guifg=' . g:syntax_colors.class
execute 'highlight EntityInterface guifg=' . g:syntax_colors.type
execute 'highlight EntityEnum guifg=' . g:syntax_colors.type
execute 'highlight EntityStruct guifg=' . g:syntax_colors.class
execute 'highlight EntityUnion guifg=' . g:syntax_colors.class
execute 'highlight EntityTrait guifg=' . g:syntax_colors.type
execute 'highlight EntityDecorator guifg=' . g:syntax_colors.attribute
execute 'highlight EntityAnnotation guifg=' . g:syntax_colors.attribute
execute 'highlight EntityMixin guifg=' . g:syntax_colors.type
execute 'highlight EntityModifier guifg=' . g:syntax_colors.modifier
