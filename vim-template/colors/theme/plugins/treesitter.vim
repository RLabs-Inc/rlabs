" Treesitter syntax highlighting

" Identifiers
execute 'highlight @variable guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @variable.builtin guifg=' . g:syntaxColors.supportVariable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @variable.parameter guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @variable.member guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @constant guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @constant.builtin guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @constant.macro guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')

" Functions
execute 'highlight @function guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.builtin guifg=' . g:syntaxColors.supportFunction . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.call guifg=' . g:syntaxColors.functionCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.macro guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.call guifg=' . g:syntaxColors.methodCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @constructor guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @parameter guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')

" Keywords
execute 'highlight @keyword guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.function guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.operator guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @keyword.return guifg=' . g:syntaxColors.controlFlow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.conditional guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.repeat guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.import guifg=' . g:syntaxColors.controlImport . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.exception guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @operator guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')

" Types
execute 'highlight @type guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.builtin guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.definition guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.qualifier guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @storageclass guifg=' . g:syntaxColors.storage . ' gui=' . g:theme_get_style('Storage')
execute 'highlight @attribute guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @property guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @field guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')

" Punctuation
execute 'highlight @punctuation.delimiter guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @punctuation.bracket guifg=' . g:syntaxColors.punctuationBrace . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @punctuation.special guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @punctuation.quote guifg=' . g:syntaxColors.punctuationQuote . ' gui=' . g:theme_get_style('Delimiter')

" Literals
execute 'highlight @string guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @string.regex guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @string.escape guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @string.special guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @character guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @number guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @float guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')

" Comments
execute 'highlight @comment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @comment.documentation guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @comment.todo guifg=' . g:syntaxColors.comment . ' gui=bold'

" Markup
execute 'highlight @text.literal guifg=' . g:colors.FG1
execute 'highlight @text.reference guifg=' . g:colors.INFO
execute 'highlight @text.title guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight @text.uri guifg=' . g:colors.INFO . ' gui=underline'
execute 'highlight @text.underline guifg=' . g:colors.FG1 . ' gui=underline'
execute 'highlight @text.todo guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.note guifg=' . g:colors.INFO . ' gui=bold'
execute 'highlight @text.warning guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.danger guifg=' . g:colors.ERROR . ' gui=bold'
execute 'highlight @text.emphasis guifg=' . g:colors.FG1 . ' gui=italic'
execute 'highlight @text.strong guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight @text.strike guifg=' . g:colors.FG2 . ' gui=strikethrough'
execute 'highlight @text.header guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight @text.quote guifg=' . g:colors.FG2 . ' gui=italic'
execute 'highlight @text.math guifg=' . g:syntaxColors.constant
execute 'highlight @text.environment guifg=' . g:syntaxColors.keyword
execute 'highlight @text.environment.name guifg=' . g:syntaxColors.type

" Tags
execute 'highlight @tag guifg=' . g:syntaxColors.tag . ' gui=' . g:theme_get_style('Tag')
execute 'highlight @tag.attribute guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @tag.delimiter guifg=' . g:syntaxColors.tagPunctuation . ' gui=' . g:theme_get_style('Delimiter')

" Language-specific
" JavaScript/TypeScript
execute 'highlight @constructor.javascript guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @property.javascript guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @variable.javascript guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @module.javascript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @namespace.javascript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @interface.javascript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enum.javascript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enumMember.javascript guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @decorator.javascript guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @this.javascript guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')

" TypeScript specific
execute 'highlight @type.typescript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.builtin.typescript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.qualifier.typescript guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @decorator.typescript guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @namespace.typescript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @interface.typescript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @abstract.typescript guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @accessor.typescript guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @type.parameters.typescript guifg=' . g:syntaxColors.typeParameter . ' gui=' . g:theme_get_style('Type')
execute 'highlight @utility.typescript guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @meta.typescript guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')

" CSS/SCSS
execute 'highlight @property.css guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @value.css guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @unit.css guifg=' . g:syntaxColors.unit . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @function.css guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @color.css guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @number.css guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @variable.scss guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @parameter.scss guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @function.scss guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @operator.scss guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @keyword.scss guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')

" HTML/XML
execute 'highlight @tag.html guifg=' . g:syntaxColors.tag . ' gui=' . g:theme_get_style('Tag')
execute 'highlight @tag.attribute.html guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @tag.delimiter.html guifg=' . g:syntaxColors.tagPunctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @string.html guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @text.html guifg=' . g:colors.FG1
execute 'highlight @tag.xml guifg=' . g:syntaxColors.tag . ' gui=' . g:theme_get_style('Tag')
execute 'highlight @tag.attribute.xml guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @tag.delimiter.xml guifg=' . g:syntaxColors.tagPunctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @string.xml guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @text.xml guifg=' . g:colors.FG1
execute 'highlight @namespace.xml guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @operator.xml guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')

" Markdown
execute 'highlight @text.title.1.markdown guifg=' . g:colors.AC2 . ' gui=bold'
execute 'highlight @text.title.2.markdown guifg=' . g:colors.AC1 . ' gui=bold'
execute 'highlight @text.title.3.markdown guifg=' . g:colors.INFO . ' gui=bold'
execute 'highlight @text.title.4.markdown guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.title.5.markdown guifg=' . g:colors.ERROR . ' gui=bold'
execute 'highlight @text.title.6.markdown guifg=' . g:colors.FG2 . ' gui=bold'
execute 'highlight @text.literal.markdown guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @text.literal.block.markdown guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @text.reference.markdown guifg=' . g:colors.INFO . ' gui=underline'
execute 'highlight @text.uri.markdown guifg=' . g:colors.INFO . ' gui=underline'
execute 'highlight @text.emphasis.markdown guifg=' . g:colors.FG1 . ' gui=italic'
execute 'highlight @text.strong.markdown guifg=' . g:colors.FG1 . ' gui=bold'
execute 'highlight @text.strike.markdown guifg=' . g:colors.FG2 . ' gui=strikethrough'
execute 'highlight @punctuation.delimiter.markdown guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @punctuation.special.markdown guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Special')
execute 'highlight @text.quote.markdown guifg=' . g:colors.FG2 . ' gui=italic'
execute 'highlight @text.math.markdown guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @text.environment.markdown guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @text.environment.name.markdown guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @label.markdown guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @text.todo.checked.markdown guifg=' . g:colors.SUCCESS . ' gui=bold'
execute 'highlight @text.todo.unchecked.markdown guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.note.markdown guifg=' . g:colors.INFO . ' gui=bold'
execute 'highlight @text.warning.markdown guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.danger.markdown guifg=' . g:colors.ERROR . ' gui=bold'

" JSON
execute 'highlight @label.json guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @string.json guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @number.json guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.json guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @null.json guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @punctuation.delimiter.json guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @punctuation.bracket.json guifg=' . g:syntaxColors.punctuationBrace . ' gui=' . g:theme_get_style('Delimiter')

" Python
execute 'highlight @function.python guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.python guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @variable.python guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @decorator.python guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @self.python guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')

" Rust
execute 'highlight @function.rust guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.rust guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @variable.rust guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @attribute.rust guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @lifetime.rust guifg=' . g:syntaxColors.storage . ' gui=' . g:theme_get_style('Storage')

" Go
execute 'highlight @function.go guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.go guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @variable.go guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @field.go guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @receiver.go guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')

" SQL
execute 'highlight @keyword.sql guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.operator.sql guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @keyword.function.sql guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @operator.sql guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @function.sql guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.builtin.sql guifg=' . g:syntaxColors.supportFunction . ' gui=' . g:theme_get_style('Function')
execute 'highlight @type.sql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.builtin.sql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @field.sql guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @constant.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @string.sql guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @number.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @float.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @comment.sql guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @punctuation.delimiter.sql guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @punctuation.bracket.sql guifg=' . g:syntaxColors.punctuationBrace . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @punctuation.special.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')

" Svelte
execute 'highlight @tag.svelte guifg=' . g:syntaxColors.tag . ' gui=' . g:theme_get_style('Tag')
execute 'highlight @component.svelte guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Tag')
execute 'highlight @directive.svelte guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @event.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @binding.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @transition.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @animation.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @store.svelte guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @block.svelte guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @expression.svelte guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('Variable')

" Svelte 5 specific
execute 'highlight @rune.svelte guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @rune.state.svelte guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @rune.derived.svelte guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @rune.effect.svelte guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @rune.context.svelte guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @rune.prop.svelte guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @rune.class.svelte guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @rune.event.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @rune.action.svelte guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @rune.transition.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @rune.animation.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @snippet.svelte guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @snippet.expression.svelte guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @view.transition.svelte guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @props.svelte guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @event.handler.svelte guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @event.modifier.svelte guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @sveltekit.load.svelte guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @sveltekit.page.svelte guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @sveltekit.data.svelte guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @sveltekit.form.svelte guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @sveltekit.action.svelte guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')

" YAML
execute 'highlight @field.yaml guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @string.yaml guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @number.yaml guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.yaml guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @null.yaml guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @punctuation.delimiter.yaml guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @punctuation.special.yaml guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Special')

" TOML
execute 'highlight @property.toml guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @string.toml guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @number.toml guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.toml guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @datetime.toml guifg=' . g:syntaxColors.datetime . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @array.toml guifg=' . g:syntaxColors.punctuationBrace . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @table.toml guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')

" GraphQL
execute 'highlight @type.graphql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @field.graphql guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @variable.graphql guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @directive.graphql guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @argument.graphql guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @enum.graphql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enumMember.graphql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @interface.graphql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @union.graphql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @scalar.graphql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')

" Shell Script
execute 'highlight @function.shell guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @parameter.shell guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @variable.shell guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @operator.shell guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @conditional.shell guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @loop.shell guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @expansion.shell guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Special')
execute 'highlight @test.shell guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @builtin.shell guifg=' . g:syntaxColors.supportFunction . ' gui=' . g:theme_get_style('Function')
execute 'highlight @option.shell guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')

" Regular Expressions
execute 'highlight @character.special.regexp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @punctuation.bracket.regexp guifg=' . g:syntaxColors.punctuationBrace . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @operator.regexp guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @quantifier.regexp guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @escape.regexp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @group.regexp guifg=' . g:syntaxColors.punctuationBrace . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @assertion.regexp guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @character.class.regexp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')

" SQL
execute 'highlight @keyword.sql guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @type.sql guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @function.sql guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @operator.sql guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @constant.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @string.sql guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @number.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.sql guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @table.sql guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @column.sql guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @parameter.sql guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @procedure.sql guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @trigger.sql guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')

" Ruby
execute 'highlight @function.ruby guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.ruby guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @variable.ruby guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @constant.ruby guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @symbol.ruby guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @module.ruby guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @class.ruby guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @parameter.ruby guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @instance.ruby guifg=' . g:syntaxColors.variableProperty . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @block.ruby guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')

" Git
execute 'highlight @git.add guifg=' . g:colors.SUCCESS . ' gui=' . g:theme_get_style('Special')
execute 'highlight @git.change guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @git.delete guifg=' . g:colors.ERROR . ' gui=' . g:theme_get_style('Special')
execute 'highlight @git.conflict guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Special')
execute 'highlight @git.ignore guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @git.untracked guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @git.renamed guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @git.staged guifg=' . g:colors.SUCCESS . ' gui=' . g:theme_get_style('Special')

" Diagnostics
execute 'highlight @diagnostic.error guifg=' . g:colors.ERROR . ' gui=' . g:theme_get_style('Special')
execute 'highlight @diagnostic.warning guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Special')
execute 'highlight @diagnostic.info guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @diagnostic.hint guifg=' . g:colors.SUCCESS . ' gui=' . g:theme_get_style('Special')
execute 'highlight @diagnostic.deprecated guifg=' . g:syntaxColors.comment . ' gui=strikethrough'
execute 'highlight @diagnostic.unnecessary guifg=' . g:syntaxColors.comment . ' gui=italic'

" INI/Config files
execute 'highlight @section.ini guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @property.ini guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @value.ini guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @string.ini guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @number.ini guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.ini guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @datetime.ini guifg=' . g:syntaxColors.datetime . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @variable.ini guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @escape.ini guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @operator.ini guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @delimiter.ini guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @comment.ini guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @error.ini guifg=' . g:colors.ERROR . ' gui=' . g:theme_get_style('Error')
execute 'highlight @warning.ini guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Special')

" Environment files
execute 'highlight @variable.env guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @key.env guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @value.env guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @string.env guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @number.env guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.env guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @operator.env guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @delimiter.env guifg=' . g:syntaxColors.punctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @escape.env guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @path.env guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('String')

" Diff and Git
execute 'highlight @diff.plus guifg=' . g:colors.SUCCESS . ' gui=' . g:theme_get_style('Special')
execute 'highlight @diff.minus guifg=' . g:colors.ERROR . ' gui=' . g:theme_get_style('Special')
execute 'highlight @diff.delta guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @diff.header guifg=' . g:syntaxColors.keyword . ' gui=bold'
execute 'highlight @diff.file guifg=' . g:syntaxColors.keyword . ' gui=bold'
execute 'highlight @diff.range guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')

" Git commit
execute 'highlight @gitcommit.header guifg=' . g:syntaxColors.keyword . ' gui=bold'
execute 'highlight @gitcommit.summary guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitcommit.added guifg=' . g:colors.SUCCESS . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitcommit.removed guifg=' . g:colors.ERROR . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitcommit.changed guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitcommit.branch guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitcommit.hash guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @gitcommit.untracked guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitcommit.conflict guifg=' . g:colors.ERROR . ' gui=bold'

" Git rebase
execute 'highlight @gitrebase.command guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @gitrebase.hash guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @gitrebase.comment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @gitrebase.pick guifg=' . g:colors.SUCCESS . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitrebase.reword guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitrebase.edit guifg=' . g:colors.INFO . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitrebase.squash guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitrebase.fixup guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitrebase.drop guifg=' . g:colors.ERROR . ' gui=' . g:theme_get_style('Special')
execute 'highlight @gitrebase.exec guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')

" C/C++
execute 'highlight @function.cpp guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.call.cpp guifg=' . g:syntaxColors.functionCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.macro.cpp guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.cpp guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.call.cpp guifg=' . g:syntaxColors.methodCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @variable.cpp guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @field.cpp guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @parameter.cpp guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @type.cpp guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.builtin.cpp guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.qualifier.cpp guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @storageclass.cpp guifg=' . g:syntaxColors.storage . ' gui=' . g:theme_get_style('Storage')
execute 'highlight @namespace.cpp guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @class.cpp guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @struct.cpp guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enum.cpp guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enumMember.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @property.cpp guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @constructor.cpp guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @operator.cpp guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @keyword.cpp guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.directive.cpp guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.control.cpp guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.return.cpp guifg=' . g:syntaxColors.controlFlow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @include.cpp guifg=' . g:syntaxColors.controlImport . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @constant.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @constant.builtin.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @string.cpp guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @character.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @number.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @float.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @comment.cpp guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @conditional.cpp guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @repeat.cpp guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @label.cpp guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @operator.cpp guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @keyword.operator.cpp guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @exception.cpp guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @type.definition.cpp guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.parameter.cpp guifg=' . g:syntaxColors.typeParameter . ' gui=' . g:theme_get_style('Type')
execute 'highlight @attribute.cpp guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @variable.builtin.cpp guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @constant.macro.cpp guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @function.macro.cpp guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @text.todo.cpp guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight @text.note.cpp guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight @text.warning.cpp guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.danger.cpp guifg=' . g:colors.ERROR . ' gui=bold'

" C#
execute 'highlight @function.cs guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.call.cs guifg=' . g:syntaxColors.functionCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.cs guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.call.cs guifg=' . g:syntaxColors.methodCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @constructor.cs guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @variable.cs guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @field.cs guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @property.cs guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @parameter.cs guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @type.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.builtin.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.qualifier.cs guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @namespace.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @class.cs guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @struct.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @interface.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enum.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enumMember.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @event.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @delegate.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @attribute.cs guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @operator.cs guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @keyword.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.control.cs guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.return.cs guifg=' . g:syntaxColors.controlFlow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.operator.cs guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @using.cs guifg=' . g:syntaxColors.controlImport . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @constant.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @string.cs guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @string.escape.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @character.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @number.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @float.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @null.cs guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @comment.cs guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @conditional.cs guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @repeat.cs guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @label.cs guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @exception.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @type.parameter.cs guifg=' . g:syntaxColors.typeParameter . ' gui=' . g:theme_get_style('Type')
execute 'highlight @variable.builtin.cs guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @async.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @await.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @linq.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @record.cs guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @init.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @required.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @pattern.cs guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @switch.cs guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @when.cs guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @range.cs guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @nullable.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @tuple.cs guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @interpolation.cs guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @text.todo.cs guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight @text.note.cs guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight @text.warning.cs guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.danger.cs guifg=' . g:colors.ERROR . ' gui=bold'

" Java
execute 'highlight @function.java guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.call.java guifg=' . g:syntaxColors.functionCall . ' gui=' . g:theme_get_style('Function')

" PHP
execute 'highlight @function.php guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @function.call.php guifg=' . g:syntaxColors.functionCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.php guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @method.call.php guifg=' . g:syntaxColors.methodCall . ' gui=' . g:theme_get_style('Function')
execute 'highlight @constructor.php guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @variable.php guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @variable.builtin.php guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @field.php guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @property.php guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @parameter.php guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @type.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.builtin.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.qualifier.php guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @namespace.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @class.php guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @interface.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @trait.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enum.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @enumMember.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @attribute.php guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @operator.php guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @keyword.php guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.control.php guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.return.php guifg=' . g:syntaxColors.controlFlow . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @keyword.operator.php guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @use.php guifg=' . g:syntaxColors.controlImport . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @constant.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @string.php guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @string.escape.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Special')
execute 'highlight @character.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @number.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @boolean.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @float.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @null.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @comment.php guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @conditional.php guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @repeat.php guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @label.php guifg=' . g:syntaxColors.control . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @exception.php guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @type.union.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @type.intersection.php guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @modifier.php guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @visibility.php guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @final.php guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @abstract.php guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @static.php guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @this.php guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @magic.php guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @tag.php guifg=' . g:syntaxColors.tagPunctuation . ' gui=' . g:theme_get_style('Delimiter')
execute 'highlight @text.todo.php guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight @text.note.php guifg=' . g:syntaxColors.comment . ' gui=bold'
execute 'highlight @text.warning.php guifg=' . g:colors.WARNING . ' gui=bold'
execute 'highlight @text.danger.php guifg=' . g:colors.ERROR . ' gui=bold'

" LSP semantic tokens
execute 'highlight @lsp.type.class guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.decorator guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @lsp.type.enum guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.interface guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.struct guifg=' . g:syntaxColors.class . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.type guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.typeParameter guifg=' . g:syntaxColors.typeParameter . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.parameter guifg=' . g:syntaxColors.parameter . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.variable guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.property guifg=' . g:syntaxColors.property . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.enumMember guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @lsp.type.event guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.function guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @lsp.type.method guifg=' . g:syntaxColors.method . ' gui=' . g:theme_get_style('Function')
execute 'highlight @lsp.type.macro guifg=' . g:syntaxColors.function . ' gui=' . g:theme_get_style('Function')
execute 'highlight @lsp.type.keyword guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @lsp.type.modifier guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @lsp.type.comment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight @lsp.type.string guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @lsp.type.number guifg=' . g:syntaxColors.constant . ' gui=' . g:theme_get_style('Constant')
execute 'highlight @lsp.type.regexp guifg=' . g:colors.FG1 . ' gui=' . g:theme_get_style('String')
execute 'highlight @lsp.type.operator guifg=' . g:syntaxColors.operator . ' gui=' . g:theme_get_style('Operator')
execute 'highlight @lsp.type.namespace guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.module guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.lifetime guifg=' . g:syntaxColors.storage . ' gui=' . g:theme_get_style('Storage')
execute 'highlight @lsp.type.generic guifg=' . g:syntaxColors.typeParameter . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.reference guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.definition guifg=' . g:syntaxColors.variableDeclaration . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.selfKeyword guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.unresolvedReference guifg=' . g:colors.ERROR
execute 'highlight @lsp.type.builtinType guifg=' . g:syntaxColors.type . ' gui=' . g:theme_get_style('Type')
execute 'highlight @lsp.type.readonly guifg=' . g:syntaxColors.variableReadonly . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.mutable guifg=' . g:syntaxColors.variable . ' gui=' . g:theme_get_style('Variable')
execute 'highlight @lsp.type.deprecated guifg=' . g:syntaxColors.comment . ' gui=strikethrough'
execute 'highlight @lsp.type.modification guifg=' . g:syntaxColors.modifier . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @lsp.type.async guifg=' . g:syntaxColors.keyword . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @lsp.type.unsafe guifg=' . g:colors.WARNING . ' gui=' . g:theme_get_style('Keyword')
execute 'highlight @lsp.type.attribute guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
execute 'highlight @lsp.type.derive guifg=' . g:syntaxColors.attribute . ' gui=' . g:theme_get_style('Attribute')
