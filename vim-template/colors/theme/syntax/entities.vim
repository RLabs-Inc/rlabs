" Entity syntax highlighting (matching VSCode's entity token colors)

" Basic entities
execute 'highlight Structure guifg=' . g:syntaxColors.class
execute 'highlight StorageClass guifg=' . g:syntaxColors.storage
execute 'highlight Typedef guifg=' . g:syntaxColors.type
execute 'highlight Interface guifg=' . g:syntaxColors.type
execute 'highlight Enum guifg=' . g:syntaxColors.type

" Language-specific entities
" C/C++
execute 'highlight cStructure guifg=' . g:syntaxColors.class
execute 'highlight cppStructure guifg=' . g:syntaxColors.class
execute 'highlight cClass guifg=' . g:syntaxColors.class
execute 'highlight cppClass guifg=' . g:syntaxColors.class
execute 'highlight cEnum guifg=' . g:syntaxColors.type
execute 'highlight cppEnum guifg=' . g:syntaxColors.type
execute 'highlight cTypedef guifg=' . g:syntaxColors.type
execute 'highlight cppTypedef guifg=' . g:syntaxColors.type
execute 'highlight cNamespace guifg=' . g:syntaxColors.type
execute 'highlight cppNamespace guifg=' . g:syntaxColors.type

" JavaScript/TypeScript
execute 'highlight jsClass guifg=' . g:syntaxColors.class
execute 'highlight jsClassDefinition guifg=' . g:syntaxColors.class
execute 'highlight jsClassKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight jsExtendsKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight jsClassMethodType guifg=' . g:syntaxColors.keyword
execute 'highlight typescriptClassKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight typescriptClassName guifg=' . g:syntaxColors.class
execute 'highlight typescriptInterfaceKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight typescriptInterfaceName guifg=' . g:syntaxColors.type
execute 'highlight typescriptEnumKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight typescriptEnumMember guifg=' . g:syntaxColors.constant

" Python
execute 'highlight pythonClass guifg=' . g:syntaxColors.class
execute 'highlight pythonClassVar guifg=' . g:syntaxColors.variable
execute 'highlight pythonDecorator guifg=' . g:syntaxColors.attribute
execute 'highlight pythonDottedName guifg=' . g:syntaxColors.attribute

" Ruby
execute 'highlight rubyClass guifg=' . g:syntaxColors.class
execute 'highlight rubyModule guifg=' . g:syntaxColors.type
execute 'highlight rubyConstant guifg=' . g:syntaxColors.constant
execute 'highlight rubyClassVariable guifg=' . g:syntaxColors.variable
execute 'highlight rubyInstanceVariable guifg=' . g:syntaxColors.variable

" Java
execute 'highlight javaClass guifg=' . g:syntaxColors.class
execute 'highlight javaInterface guifg=' . g:syntaxColors.type
execute 'highlight javaEnum guifg=' . g:syntaxColors.type
execute 'highlight javaAnnotation guifg=' . g:syntaxColors.attribute
execute 'highlight javaTypedef guifg=' . g:syntaxColors.type

" Go
execute 'highlight goStruct guifg=' . g:syntaxColors.class
execute 'highlight goInterface guifg=' . g:syntaxColors.type
execute 'highlight goTypeName guifg=' . g:syntaxColors.type
execute 'highlight goTypeConstructor guifg=' . g:syntaxColors.class

" Rust
execute 'highlight rustStructure guifg=' . g:syntaxColors.class
execute 'highlight rustTrait guifg=' . g:syntaxColors.type
execute 'highlight rustEnum guifg=' . g:syntaxColors.type
execute 'highlight rustModPath guifg=' . g:syntaxColors.type
execute 'highlight rustAttribute guifg=' . g:syntaxColors.attribute

" PHP
execute 'highlight phpClass guifg=' . g:syntaxColors.class
execute 'highlight phpInterface guifg=' . g:syntaxColors.type
execute 'highlight phpTrait guifg=' . g:syntaxColors.type
execute 'highlight phpDocTags guifg=' . g:syntaxColors.keyword

" CSS/SCSS
execute 'highlight cssClassName guifg=' . g:syntaxColors.class
execute 'highlight cssIdentifier guifg=' . g:syntaxColors.class
execute 'highlight cssTagName guifg=' . g:syntaxColors.tag
execute 'highlight cssColor guifg=' . g:syntaxColors.constant
execute 'highlight cssValueLength guifg=' . g:syntaxColors.constant
execute 'highlight cssValueNumber guifg=' . g:syntaxColors.constant
execute 'highlight cssValueAngle guifg=' . g:syntaxColors.constant
execute 'highlight cssValueTime guifg=' . g:syntaxColors.datetime
execute 'highlight cssValueFrequency guifg=' . g:syntaxColors.constant
execute 'highlight cssUnitDecorators guifg=' . g:syntaxColors.unit
execute 'highlight sassClass guifg=' . g:syntaxColors.class
execute 'highlight sassId guifg=' . g:syntaxColors.class
execute 'highlight cssUnits guifg=' . g:syntaxColors.constant
execute 'highlight cssLength guifg=' . g:syntaxColors.constant
execute 'highlight cssPercentage guifg=' . g:syntaxColors.constant
execute 'highlight cssAngle guifg=' . g:syntaxColors.constant
execute 'highlight cssTime guifg=' . g:syntaxColors.constant
execute 'highlight cssFrequency guifg=' . g:syntaxColors.constant
execute 'highlight cssResolution guifg=' . g:syntaxColors.constant
execute 'highlight cssFlexible guifg=' . g:syntaxColors.constant
execute 'highlight cssGrid guifg=' . g:syntaxColors.constant
execute 'highlight cssTransform guifg=' . g:syntaxColors.constant

" HTML/XML
execute 'highlight htmlTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight htmlEndTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight htmlTagName guifg=' . g:syntaxColors.tag
execute 'highlight htmlArg guifg=' . g:syntaxColors.attribute
execute 'highlight htmlTitle guifg=' . g:syntaxColors.tag
execute 'highlight xmlTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight xmlEndTag guifg=' . g:syntaxColors.tagPunctuation
execute 'highlight xmlTagName guifg=' . g:syntaxColors.tag
execute 'highlight xmlAttrib guifg=' . g:syntaxColors.attribute

" Special entities
execute 'highlight EntityNamespace guifg=' . g:syntaxColors.type
execute 'highlight EntityClass guifg=' . g:syntaxColors.class
execute 'highlight EntityInterface guifg=' . g:syntaxColors.type
execute 'highlight EntityEnum guifg=' . g:syntaxColors.type
execute 'highlight EntityStruct guifg=' . g:syntaxColors.class
execute 'highlight EntityUnion guifg=' . g:syntaxColors.class
execute 'highlight EntityTrait guifg=' . g:syntaxColors.type
execute 'highlight EntityDecorator guifg=' . g:syntaxColors.attribute
execute 'highlight EntityAnnotation guifg=' . g:syntaxColors.attribute
execute 'highlight EntityMixin guifg=' . g:syntaxColors.type
execute 'highlight EntityModifier guifg=' . g:syntaxColors.modifier
