" Treesitter syntax highlighting

" Identifiers
execute 'highlight @variable guifg=' . g:syntax_colors.variable
execute 'highlight @variable.builtin guifg=' . g:syntax_colors.support_variable
execute 'highlight @variable.parameter guifg=' . g:syntax_colors.parameter 
execute 'highlight @variable.member guifg=' . g:syntax_colors.property
execute 'highlight @constant guifg=' . g:syntax_colors.constant 
execute 'highlight @constant.builtin guifg=' . g:syntax_colors.language
execute 'highlight @constant.macro guifg=' . g:syntax_colors.constant

" Functions
execute 'highlight @function guifg=' . g:syntax_colors.function 
execute 'highlight @function.builtin guifg=' . g:syntax_colors.support_function
execute 'highlight @function.call guifg=' . g:syntax_colors.function_call 
execute 'highlight @function.macro guifg=' . g:syntax_colors.function
execute 'highlight @method guifg=' . g:syntax_colors.method 
execute 'highlight @method.call guifg=' . g:syntax_colors.method_call
execute 'highlight @constructor guifg=' . g:syntax_colors.class
execute 'highlight @parameter guifg=' . g:syntax_colors.parameter

" Keywords
execute 'highlight @keyword guifg=' . g:syntax_colors.keyword 
execute 'highlight @keyword.function guifg=' . g:syntax_colors.keyword
execute 'highlight @keyword.operator guifg=' . g:syntax_colors.operator
execute 'highlight @keyword.return guifg=' . g:syntax_colors.control_flow
execute 'highlight @keyword.conditional guifg=' . g:syntax_colors.control
execute 'highlight @keyword.repeat guifg=' . g:syntax_colors.control
execute 'highlight @keyword.import guifg=' . g:syntax_colors.control_import
execute 'highlight @keyword.exception guifg=' . g:syntax_colors.keyword
execute 'highlight @operator guifg=' . g:syntax_colors.operator

" Types
execute 'highlight @type guifg=' . g:syntax_colors.type
execute 'highlight @type.builtin guifg=' . g:syntax_colors.type
execute 'highlight @type.definition guifg=' . g:syntax_colors.type
execute 'highlight @type.qualifier guifg=' . g:syntax_colors.modifier
execute 'highlight @storageclass guifg=' . g:syntax_colors.storage
execute 'highlight @attribute guifg=' . g:syntax_colors.attribute
execute 'highlight @property guifg=' . g:syntax_colors.property
execute 'highlight @field guifg=' . g:syntax_colors.property

" Punctuation
execute 'highlight @punctuation.delimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight @punctuation.bracket guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight @punctuation.special guifg=' . g:syntax_colors.constant
execute 'highlight @punctuation.quote guifg=' . g:syntax_colors.punctuation_quote

" Literals
execute 'highlight @string guifg=' . g:colors.fg1 
execute 'highlight @string.regex guifg=' . g:colors.fg1
execute 'highlight @string.escape guifg=' . g:syntax_colors.constant
execute 'highlight @string.special guifg=' . g:syntax_colors.constant
execute 'highlight @character guifg=' . g:syntax_colors.constant 
execute 'highlight @number guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean guifg=' . g:syntax_colors.constant 
execute 'highlight @float guifg=' . g:syntax_colors.constant

" Comments
execute 'highlight @comment guifg=' . g:syntax_colors.comment
execute 'highlight @comment.documentation guifg=' . g:syntax_colors.comment 
execute 'highlight @comment.todo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Markup
execute 'highlight @text.literal guifg=' . g:colors.fg1
execute 'highlight @text.reference guifg=' . g:colors.info
execute 'highlight @text.title guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight @text.uri guifg=' . g:colors.info . ' gui=underline'
execute 'highlight @text.underline guifg=' . g:colors.fg1 . ' gui=underline'
execute 'highlight @text.todo guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.note guifg=' . g:colors.info . ' gui=bold'
execute 'highlight @text.warning guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.danger guifg=' . g:colors.error . ' gui=bold'
execute 'highlight @text.emphasis guifg=' . g:colors.fg1 . ' gui=italic'
execute 'highlight @text.strong guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight @text.strike guifg=' . g:colors.fg2 . ' gui=strikethrough'
execute 'highlight @text.header guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight @text.quote guifg=' . g:colors.fg2
execute 'highlight @text.math guifg=' . g:syntax_colors.constant
execute 'highlight @text.environment guifg=' . g:syntax_colors.keyword
execute 'highlight @text.environment.name guifg=' . g:syntax_colors.type

" Tags
execute 'highlight @tag guifg=' . g:syntax_colors.tag
execute 'highlight @tag.attribute guifg=' . g:syntax_colors.attribute
execute 'highlight @tag.delimiter guifg=' . g:syntax_colors.tag_punctuation 

" Language-specific
" JavaScript/TypeScript
execute 'highlight @constructor.javascript guifg=' . g:syntax_colors.class 
execute 'highlight @property.javascript guifg=' . g:syntax_colors.property 
execute 'highlight @variable.javascript guifg=' . g:syntax_colors.variable 
execute 'highlight @module.javascript guifg=' . g:syntax_colors.type 
execute 'highlight @namespace.javascript guifg=' . g:syntax_colors.type 
execute 'highlight @interface.javascript guifg=' . g:syntax_colors.type 
execute 'highlight @enum.javascript guifg=' . g:syntax_colors.type
execute 'highlight @enumMember.javascript guifg=' . g:syntax_colors.constant 
execute 'highlight @decorator.javascript guifg=' . g:syntax_colors.attribute 
execute 'highlight @this.javascript guifg=' . g:syntax_colors.variable_readonly

" TypeScript specific
execute 'highlight @type.typescript guifg=' . g:syntax_colors.type 
execute 'highlight @type.builtin.typescript guifg=' . g:syntax_colors.type 
execute 'highlight @type.qualifier.typescript guifg=' . g:syntax_colors.modifier 
execute 'highlight @decorator.typescript guifg=' . g:syntax_colors.attribute 
execute 'highlight @namespace.typescript guifg=' . g:syntax_colors.type 
execute 'highlight @interface.typescript guifg=' . g:syntax_colors.type 
execute 'highlight @abstract.typescript guifg=' . g:syntax_colors.modifier 
execute 'highlight @accessor.typescript guifg=' . g:syntax_colors.modifier 
execute 'highlight @type.parameters.typescript guifg=' . g:syntax_colors.type_parameter
execute 'highlight @utility.typescript guifg=' . g:syntax_colors.type 
execute 'highlight @meta.typescript guifg=' . g:syntax_colors.keyword 

" CSS/SCSS
execute 'highlight @property.css guifg=' . g:syntax_colors.property 
execute 'highlight @value.css guifg=' . g:syntax_colors.constant 
execute 'highlight @unit.css guifg=' . g:syntax_colors.unit 
execute 'highlight @function.css guifg=' . g:syntax_colors.function 
execute 'highlight @color.css guifg=' . g:syntax_colors.constant 
execute 'highlight @number.css guifg=' . g:syntax_colors.constant 
execute 'highlight @variable.scss guifg=' . g:syntax_colors.variable 
execute 'highlight @parameter.scss guifg=' . g:syntax_colors.parameter 
execute 'highlight @function.scss guifg=' . g:syntax_colors.function 
execute 'highlight @operator.scss guifg=' . g:syntax_colors.operator 
execute 'highlight @keyword.scss guifg=' . g:syntax_colors.keyword 

" HTML/XML
execute 'highlight @tag.html guifg=' . g:syntax_colors.tag 
execute 'highlight @tag.attribute.html guifg=' . g:syntax_colors.attribute
execute 'highlight @tag.delimiter.html guifg=' . g:syntax_colors.tag_punctuation 
execute 'highlight @string.html guifg=' . g:colors.fg1 
execute 'highlight @text.html guifg=' . g:colors.fg1
execute 'highlight @tag.xml guifg=' . g:syntax_colors.tag 
execute 'highlight @tag.attribute.xml guifg=' . g:syntax_colors.attribute 
execute 'highlight @tag.delimiter.xml guifg=' . g:syntax_colors.tag_punctuation 
execute 'highlight @string.xml guifg=' . g:colors.fg1 
execute 'highlight @text.xml guifg=' . g:colors.fg1
execute 'highlight @namespace.xml guifg=' . g:syntax_colors.type 
execute 'highlight @operator.xml guifg=' . g:syntax_colors.operator 

" Markdown
execute 'highlight @text.title.1.markdown guifg=' . g:colors.ac2 . ' gui=bold'
execute 'highlight @text.title.2.markdown guifg=' . g:colors.ac1 . ' gui=bold'
execute 'highlight @text.title.3.markdown guifg=' . g:colors.info . ' gui=bold'
execute 'highlight @text.title.4.markdown guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.title.5.markdown guifg=' . g:colors.error . ' gui=bold'
execute 'highlight @text.title.6.markdown guifg=' . g:colors.fg2 . ' gui=bold'
execute 'highlight @text.literal.markdown guifg=' . g:colors.fg1 
execute 'highlight @text.literal.block.markdown guifg=' . g:colors.fg1 
execute 'highlight @text.reference.markdown guifg=' . g:colors.info . ' gui=underline'
execute 'highlight @text.uri.markdown guifg=' . g:colors.info . ' gui=underline'
execute 'highlight @text.emphasis.markdown guifg=' . g:colors.fg1 . ' gui=italic'
execute 'highlight @text.strong.markdown guifg=' . g:colors.fg1 . ' gui=bold'
execute 'highlight @text.strike.markdown guifg=' . g:colors.fg2 . ' gui=strikethrough'
execute 'highlight @punctuation.delimiter.markdown guifg=' . g:syntax_colors.punctuation 
execute 'highlight @punctuation.special.markdown guifg=' . g:syntax_colors.punctuation 
execute 'highlight @text.quote.markdown guifg=' . g:colors.fg2 . ' gui=italic'
execute 'highlight @text.math.markdown guifg=' . g:syntax_colors.constant 
execute 'highlight @text.environment.markdown guifg=' . g:syntax_colors.keyword 
execute 'highlight @text.environment.name.markdown guifg=' . g:syntax_colors.type 
execute 'highlight @label.markdown guifg=' . g:syntax_colors.keyword 
execute 'highlight @text.todo.checked.markdown guifg=' . g:colors.success . ' gui=bold'
execute 'highlight @text.todo.unchecked.markdown guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.note.markdown guifg=' . g:colors.info . ' gui=bold'
execute 'highlight @text.warning.markdown guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.danger.markdown guifg=' . g:colors.error . ' gui=bold'

" JSON
execute 'highlight @label.json guifg=' . g:syntax_colors.property 
execute 'highlight @string.json guifg=' . g:colors.fg1 
execute 'highlight @number.json guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.json guifg=' . g:syntax_colors.constant 
execute 'highlight @null.json guifg=' . g:syntax_colors.constant 
execute 'highlight @punctuation.delimiter.json guifg=' . g:syntax_colors.punctuation 
execute 'highlight @punctuation.bracket.json guifg=' . g:syntax_colors.punctuation_brace 

" Python
execute 'highlight @function.python guifg=' . g:syntax_colors.function 
execute 'highlight @method.python guifg=' . g:syntax_colors.method 
execute 'highlight @variable.python guifg=' . g:syntax_colors.variable 
execute 'highlight @decorator.python guifg=' . g:syntax_colors.attribute 
execute 'highlight @self.python guifg=' . g:syntax_colors.variable_readonly 

" Rust
execute 'highlight @function.rust guifg=' . g:syntax_colors.function 
execute 'highlight @method.rust guifg=' . g:syntax_colors.method 
execute 'highlight @variable.rust guifg=' . g:syntax_colors.variable 
execute 'highlight @attribute.rust guifg=' . g:syntax_colors.attribute 
execute 'highlight @lifetime.rust guifg=' . g:syntax_colors.storage 

" Go
execute 'highlight @function.go guifg=' . g:syntax_colors.function 
execute 'highlight @method.go guifg=' . g:syntax_colors.method 
execute 'highlight @variable.go guifg=' . g:syntax_colors.variable 
execute 'highlight @field.go guifg=' . g:syntax_colors.property 
execute 'highlight @receiver.go guifg=' . g:syntax_colors.parameter 

" SQL
execute 'highlight @keyword.sql guifg=' . g:syntax_colors.keyword 
execute 'highlight @keyword.operator.sql guifg=' . g:syntax_colors.operator 
execute 'highlight @keyword.function.sql guifg=' . g:syntax_colors.keyword 
execute 'highlight @operator.sql guifg=' . g:syntax_colors.operator 
execute 'highlight @function.sql guifg=' . g:syntax_colors.function 
execute 'highlight @function.builtin.sql guifg=' . g:syntax_colors.support_function 
execute 'highlight @type.sql guifg=' . g:syntax_colors.type 
execute 'highlight @type.builtin.sql guifg=' . g:syntax_colors.type 
execute 'highlight @field.sql guifg=' . g:syntax_colors.property 
execute 'highlight @constant.sql guifg=' . g:syntax_colors.constant 
execute 'highlight @string.sql guifg=' . g:colors.fg1 
execute 'highlight @number.sql guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.sql guifg=' . g:syntax_colors.constant 
execute 'highlight @float.sql guifg=' . g:syntax_colors.constant 
execute 'highlight @comment.sql guifg=' . g:syntax_colors.comment 
execute 'highlight @punctuation.delimiter.sql guifg=' . g:syntax_colors.punctuation 
execute 'highlight @punctuation.bracket.sql guifg=' . g:syntax_colors.punctuation_brace 
execute 'highlight @punctuation.special.sql guifg=' . g:syntax_colors.constant 

" Svelte
execute 'highlight @tag.svelte guifg=' . g:syntax_colors.tag 
execute 'highlight @component.svelte guifg=' . g:syntax_colors.class 
execute 'highlight @directive.svelte guifg=' . g:syntax_colors.keyword 
execute 'highlight @event.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @binding.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @transition.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @animation.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @store.svelte guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @block.svelte guifg=' . g:syntax_colors.keyword 
execute 'highlight @expression.svelte guifg=' . g:colors.fg1 

" Svelte 5 specific
execute 'highlight @rune.svelte guifg=' . g:syntax_colors.keyword 
execute 'highlight @rune.state.svelte guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @rune.derived.svelte guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @rune.effect.svelte guifg=' . g:syntax_colors.keyword 
execute 'highlight @rune.context.svelte guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @rune.prop.svelte guifg=' . g:syntax_colors.property 
execute 'highlight @rune.class.svelte guifg=' . g:syntax_colors.class 
execute 'highlight @rune.event.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @rune.action.svelte guifg=' . g:syntax_colors.function 
execute 'highlight @rune.transition.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @rune.animation.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @snippet.svelte guifg=' . g:syntax_colors.function 
execute 'highlight @snippet.expression.svelte guifg=' . g:colors.fg1 
execute 'highlight @view.transition.svelte guifg=' . g:syntax_colors.attribute 
execute 'highlight @props.svelte guifg=' . g:syntax_colors.property 
execute 'highlight @event.handler.svelte guifg=' . g:syntax_colors.function 
execute 'highlight @event.modifier.svelte guifg=' . g:syntax_colors.modifier 
execute 'highlight @sveltekit.load.svelte guifg=' . g:syntax_colors.function 
execute 'highlight @sveltekit.page.svelte guifg=' . g:syntax_colors.variable 
execute 'highlight @sveltekit.data.svelte guifg=' . g:syntax_colors.property 
execute 'highlight @sveltekit.form.svelte guifg=' . g:syntax_colors.variable 
execute 'highlight @sveltekit.action.svelte guifg=' . g:syntax_colors.function 

" YAML
execute 'highlight @field.yaml guifg=' . g:syntax_colors.property 
execute 'highlight @string.yaml guifg=' . g:colors.fg1 
execute 'highlight @number.yaml guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.yaml guifg=' . g:syntax_colors.constant 
execute 'highlight @null.yaml guifg=' . g:syntax_colors.constant 
execute 'highlight @punctuation.delimiter.yaml guifg=' . g:syntax_colors.punctuation 
execute 'highlight @punctuation.special.yaml guifg=' . g:syntax_colors.punctuation 

" TOML
execute 'highlight @property.toml guifg=' . g:syntax_colors.property 
execute 'highlight @string.toml guifg=' . g:colors.fg1 
execute 'highlight @number.toml guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.toml guifg=' . g:syntax_colors.constant 
execute 'highlight @datetime.toml guifg=' . g:syntax_colors.datetime 
execute 'highlight @array.toml guifg=' . g:syntax_colors.punctuation_brace 
execute 'highlight @table.toml guifg=' . g:syntax_colors.type 

" GraphQL
execute 'highlight @type.graphql guifg=' . g:syntax_colors.type 
execute 'highlight @field.graphql guifg=' . g:syntax_colors.property 
execute 'highlight @variable.graphql guifg=' . g:syntax_colors.variable 
execute 'highlight @directive.graphql guifg=' . g:syntax_colors.attribute 
execute 'highlight @argument.graphql guifg=' . g:syntax_colors.parameter 
execute 'highlight @enum.graphql guifg=' . g:syntax_colors.type 
execute 'highlight @enumMember.graphql guifg=' . g:syntax_colors.constant 
execute 'highlight @interface.graphql guifg=' . g:syntax_colors.type 
execute 'highlight @union.graphql guifg=' . g:syntax_colors.type 
execute 'highlight @scalar.graphql guifg=' . g:syntax_colors.type 

" Shell Script
execute 'highlight @function.shell guifg=' . g:syntax_colors.function 
execute 'highlight @parameter.shell guifg=' . g:syntax_colors.parameter 
execute 'highlight @variable.shell guifg=' . g:syntax_colors.variable 
execute 'highlight @operator.shell guifg=' . g:syntax_colors.operator 
execute 'highlight @conditional.shell guifg=' . g:syntax_colors.control 
execute 'highlight @loop.shell guifg=' . g:syntax_colors.control 
execute 'highlight @expansion.shell guifg=' . g:syntax_colors.variable 
execute 'highlight @test.shell guifg=' . g:syntax_colors.keyword 
execute 'highlight @builtin.shell guifg=' . g:syntax_colors.support_function 
execute 'highlight @option.shell guifg=' . g:syntax_colors.parameter 

" Regular Expressions
execute 'highlight @character.special.regexp guifg=' . g:syntax_colors.constant 
execute 'highlight @punctuation.bracket.regexp guifg=' . g:syntax_colors.punctuation_brace 
execute 'highlight @operator.regexp guifg=' . g:syntax_colors.operator 
execute 'highlight @quantifier.regexp guifg=' . g:syntax_colors.operator 
execute 'highlight @escape.regexp guifg=' . g:syntax_colors.constant 
execute 'highlight @group.regexp guifg=' . g:syntax_colors.punctuation_brace 
execute 'highlight @assertion.regexp guifg=' . g:syntax_colors.keyword 
execute 'highlight @character.class.regexp guifg=' . g:syntax_colors.constant 

" SQL
execute 'highlight @keyword.sql guifg=' . g:syntax_colors.keyword 
execute 'highlight @type.sql guifg=' . g:syntax_colors.type 
execute 'highlight @function.sql guifg=' . g:syntax_colors.function 
execute 'highlight @operator.sql guifg=' . g:syntax_colors.operator 
execute 'highlight @constant.sql guifg=' . g:syntax_colors.constant 
execute 'highlight @string.sql guifg=' . g:colors.fg1 
execute 'highlight @number.sql guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.sql guifg=' . g:syntax_colors.constant 
execute 'highlight @table.sql guifg=' . g:syntax_colors.class 
execute 'highlight @column.sql guifg=' . g:syntax_colors.property 
execute 'highlight @parameter.sql guifg=' . g:syntax_colors.parameter 
execute 'highlight @procedure.sql guifg=' . g:syntax_colors.function 
execute 'highlight @trigger.sql guifg=' . g:syntax_colors.function 

" Ruby
execute 'highlight @function.ruby guifg=' . g:syntax_colors.function 
execute 'highlight @method.ruby guifg=' . g:syntax_colors.method 
execute 'highlight @variable.ruby guifg=' . g:syntax_colors.variable 
execute 'highlight @constant.ruby guifg=' . g:syntax_colors.constant 
execute 'highlight @symbol.ruby guifg=' . g:syntax_colors.property 
execute 'highlight @module.ruby guifg=' . g:syntax_colors.type 
execute 'highlight @class.ruby guifg=' . g:syntax_colors.class 
execute 'highlight @parameter.ruby guifg=' . g:syntax_colors.parameter 
execute 'highlight @instance.ruby guifg=' . g:syntax_colors.variableProperty 
execute 'highlight @block.ruby guifg=' . g:syntax_colors.function 

" Git
execute 'highlight @git.add guifg=' . g:colors.success 
execute 'highlight @git.change guifg=' . g:colors.info 
execute 'highlight @git.delete guifg=' . g:colors.error 
execute 'highlight @git.conflict guifg=' . g:colors.warning 
execute 'highlight @git.ignore guifg=' . g:syntax_colors.comment 
execute 'highlight @git.untracked guifg=' . g:syntax_colors.comment 
execute 'highlight @git.renamed guifg=' . g:colors.info 
execute 'highlight @git.staged guifg=' . g:colors.success 

" Diagnostics
execute 'highlight @diagnostic.error guifg=' . g:colors.error 
execute 'highlight @diagnostic.warning guifg=' . g:colors.warning 
execute 'highlight @diagnostic.info guifg=' . g:colors.info 
execute 'highlight @diagnostic.hint guifg=' . g:colors.success 
execute 'highlight @diagnostic.deprecated guifg=' . g:syntax_colors.comment . ' gui=strikethrough'
execute 'highlight @diagnostic.unnecessary guifg=' . g:syntax_colors.comment . ' gui=italic'

" INI/Config files
execute 'highlight @section.ini guifg=' . g:syntax_colors.class 
execute 'highlight @property.ini guifg=' . g:syntax_colors.property 
execute 'highlight @value.ini guifg=' . g:colors.fg1 
execute 'highlight @string.ini guifg=' . g:colors.fg1 
execute 'highlight @number.ini guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.ini guifg=' . g:syntax_colors.constant 
execute 'highlight @datetime.ini guifg=' . g:syntax_colors.datetime 
execute 'highlight @variable.ini guifg=' . g:syntax_colors.variable 
execute 'highlight @escape.ini guifg=' . g:syntax_colors.constant 
execute 'highlight @operator.ini guifg=' . g:syntax_colors.operator 
execute 'highlight @delimiter.ini guifg=' . g:syntax_colors.punctuation 
execute 'highlight @comment.ini guifg=' . g:syntax_colors.comment 
execute 'highlight @error.ini guifg=' . g:colors.error 
execute 'highlight @warning.ini guifg=' . g:colors.warning 

" Environment files
execute 'highlight @variable.env guifg=' . g:syntax_colors.variable 
execute 'highlight @key.env guifg=' . g:syntax_colors.property 
execute 'highlight @value.env guifg=' . g:colors.fg1 
execute 'highlight @string.env guifg=' . g:colors.fg1 
execute 'highlight @number.env guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.env guifg=' . g:syntax_colors.constant 
execute 'highlight @operator.env guifg=' . g:syntax_colors.operator 
execute 'highlight @delimiter.env guifg=' . g:syntax_colors.punctuation 
execute 'highlight @escape.env guifg=' . g:syntax_colors.constant 
execute 'highlight @path.env guifg=' . g:colors.info 

" Diff and Git
execute 'highlight @diff.plus guifg=' . g:colors.success 
execute 'highlight @diff.minus guifg=' . g:colors.error 
execute 'highlight @diff.delta guifg=' . g:colors.info 
execute 'highlight @diff.header guifg=' . g:syntax_colors.keyword . ' gui=bold'
execute 'highlight @diff.file guifg=' . g:syntax_colors.keyword . ' gui=bold'
execute 'highlight @diff.range guifg=' . g:syntax_colors.comment 

" Git commit
execute 'highlight @gitcommit.header guifg=' . g:syntax_colors.keyword . ' gui=bold'
execute 'highlight @gitcommit.summary guifg=' . g:colors.fg1 
execute 'highlight @gitcommit.added guifg=' . g:colors.success 
execute 'highlight @gitcommit.removed guifg=' . g:colors.error 
execute 'highlight @gitcommit.changed guifg=' . g:colors.info 
execute 'highlight @gitcommit.branch guifg=' . g:colors.info 
execute 'highlight @gitcommit.hash guifg=' . g:syntax_colors.constant 
execute 'highlight @gitcommit.untracked guifg=' . g:colors.warning 
execute 'highlight @gitcommit.conflict guifg=' . g:colors.error . ' gui=bold'

" Git rebase
execute 'highlight @gitrebase.command guifg=' . g:syntax_colors.keyword 
execute 'highlight @gitrebase.hash guifg=' . g:syntax_colors.constant 
execute 'highlight @gitrebase.comment guifg=' . g:syntax_colors.comment 
execute 'highlight @gitrebase.pick guifg=' . g:colors.success 
execute 'highlight @gitrebase.reword guifg=' . g:colors.info 
execute 'highlight @gitrebase.edit guifg=' . g:colors.info 
execute 'highlight @gitrebase.squash guifg=' . g:colors.warning 
execute 'highlight @gitrebase.fixup guifg=' . g:colors.warning 
execute 'highlight @gitrebase.drop guifg=' . g:colors.error 
execute 'highlight @gitrebase.exec guifg=' . g:syntax_colors.function 

" C/C++
execute 'highlight @function.cpp guifg=' . g:syntax_colors.function 
execute 'highlight @function.call.cpp guifg=' . g:syntax_colors.function_call 
execute 'highlight @function.macro.cpp guifg=' . g:syntax_colors.function 
execute 'highlight @method.cpp guifg=' . g:syntax_colors.method 
execute 'highlight @method.call.cpp guifg=' . g:syntax_colors.method_call 
execute 'highlight @variable.cpp guifg=' . g:syntax_colors.variable 
execute 'highlight @field.cpp guifg=' . g:syntax_colors.property 
execute 'highlight @parameter.cpp guifg=' . g:syntax_colors.parameter 
execute 'highlight @type.cpp guifg=' . g:syntax_colors.type 
execute 'highlight @type.builtin.cpp guifg=' . g:syntax_colors.type 
execute 'highlight @type.qualifier.cpp guifg=' . g:syntax_colors.modifier 
execute 'highlight @storageclass.cpp guifg=' . g:syntax_colors.storage 
execute 'highlight @namespace.cpp guifg=' . g:syntax_colors.type 
execute 'highlight @class.cpp guifg=' . g:syntax_colors.class 
execute 'highlight @struct.cpp guifg=' . g:syntax_colors.class 
execute 'highlight @enum.cpp guifg=' . g:syntax_colors.type 
execute 'highlight @enumMember.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @property.cpp guifg=' . g:syntax_colors.property 
execute 'highlight @constructor.cpp guifg=' . g:syntax_colors.class 
execute 'highlight @operator.cpp guifg=' . g:syntax_colors.operator 
execute 'highlight @keyword.cpp guifg=' . g:syntax_colors.keyword 
execute 'highlight @keyword.directive.cpp guifg=' . g:syntax_colors.keyword 
execute 'highlight @keyword.control.cpp guifg=' . g:syntax_colors.control 
execute 'highlight @keyword.return.cpp guifg=' . g:syntax_colors.control_flow 
execute 'highlight @include.cpp guifg=' . g:syntax_colors.control_import 
execute 'highlight @constant.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @constant.builtin.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @string.cpp guifg=' . g:colors.fg1 
execute 'highlight @character.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @number.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @float.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @comment.cpp guifg=' . g:syntax_colors.comment 
execute 'highlight @conditional.cpp guifg=' . g:syntax_colors.control 
execute 'highlight @repeat.cpp guifg=' . g:syntax_colors.control 
execute 'highlight @label.cpp guifg=' . g:syntax_colors.control 
execute 'highlight @operator.cpp guifg=' . g:syntax_colors.operator 
execute 'highlight @keyword.operator.cpp guifg=' . g:syntax_colors.operator 
execute 'highlight @exception.cpp guifg=' . g:syntax_colors.keyword 
execute 'highlight @type.definition.cpp guifg=' . g:syntax_colors.type 
execute 'highlight @type.parameter.cpp guifg=' . g:syntax_colors.type_parameter 
execute 'highlight @attribute.cpp guifg=' . g:syntax_colors.attribute 
execute 'highlight @variable.builtin.cpp guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @constant.macro.cpp guifg=' . g:syntax_colors.constant 
execute 'highlight @function.macro.cpp guifg=' . g:syntax_colors.function 
execute 'highlight @text.todo.cpp guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight @text.note.cpp guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight @text.warning.cpp guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.danger.cpp guifg=' . g:colors.error . ' gui=bold'

" C#
execute 'highlight @function.cs guifg=' . g:syntax_colors.function 
execute 'highlight @function.call.cs guifg=' . g:syntax_colors.function_call 
execute 'highlight @method.cs guifg=' . g:syntax_colors.method 
execute 'highlight @method.call.cs guifg=' . g:syntax_colors.method_call 
execute 'highlight @constructor.cs guifg=' . g:syntax_colors.function 
execute 'highlight @variable.cs guifg=' . g:syntax_colors.variable 
execute 'highlight @field.cs guifg=' . g:syntax_colors.property 
execute 'highlight @property.cs guifg=' . g:syntax_colors.property 
execute 'highlight @parameter.cs guifg=' . g:syntax_colors.parameter 
execute 'highlight @type.cs guifg=' . g:syntax_colors.type 
execute 'highlight @type.builtin.cs guifg=' . g:syntax_colors.type 
execute 'highlight @type.qualifier.cs guifg=' . g:syntax_colors.modifier 
execute 'highlight @namespace.cs guifg=' . g:syntax_colors.type 
execute 'highlight @class.cs guifg=' . g:syntax_colors.class 
execute 'highlight @struct.cs guifg=' . g:syntax_colors.type 
execute 'highlight @interface.cs guifg=' . g:syntax_colors.type 
execute 'highlight @enum.cs guifg=' . g:syntax_colors.type 
execute 'highlight @enumMember.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @event.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @delegate.cs guifg=' . g:syntax_colors.type 
execute 'highlight @attribute.cs guifg=' . g:syntax_colors.attribute 
execute 'highlight @operator.cs guifg=' . g:syntax_colors.operator 
execute 'highlight @keyword.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @keyword.control.cs guifg=' . g:syntax_colors.control 
execute 'highlight @keyword.return.cs guifg=' . g:syntax_colors.control_flow 
execute 'highlight @keyword.operator.cs guifg=' . g:syntax_colors.operator 
execute 'highlight @using.cs guifg=' . g:syntax_colors.control_import 
execute 'highlight @constant.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @string.cs guifg=' . g:colors.fg1 
execute 'highlight @string.escape.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @character.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @number.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @float.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @null.cs guifg=' . g:syntax_colors.constant 
execute 'highlight @comment.cs guifg=' . g:syntax_colors.comment 
execute 'highlight @conditional.cs guifg=' . g:syntax_colors.control 
execute 'highlight @repeat.cs guifg=' . g:syntax_colors.control 
execute 'highlight @label.cs guifg=' . g:syntax_colors.control 
execute 'highlight @exception.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @type.parameter.cs guifg=' . g:syntax_colors.type_parameter 
execute 'highlight @variable.builtin.cs guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @async.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @await.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @linq.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @record.cs guifg=' . g:syntax_colors.class 
execute 'highlight @init.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @required.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @pattern.cs guifg=' . g:syntax_colors.keyword 
execute 'highlight @switch.cs guifg=' . g:syntax_colors.control 
execute 'highlight @when.cs guifg=' . g:syntax_colors.control 
execute 'highlight @range.cs guifg=' . g:syntax_colors.operator 
execute 'highlight @nullable.cs guifg=' . g:syntax_colors.type 
execute 'highlight @tuple.cs guifg=' . g:syntax_colors.type 
execute 'highlight @interpolation.cs guifg=' . g:syntax_colors.variable 
execute 'highlight @text.todo.cs guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight @text.note.cs guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight @text.warning.cs guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.danger.cs guifg=' . g:colors.error . ' gui=bold'

" Java
execute 'highlight @function.java guifg=' . g:syntax_colors.function 
execute 'highlight @function.call.java guifg=' . g:syntax_colors.function_call 

" PHP
execute 'highlight @function.php guifg=' . g:syntax_colors.function 
execute 'highlight @function.call.php guifg=' . g:syntax_colors.function_call 
execute 'highlight @method.php guifg=' . g:syntax_colors.method 
execute 'highlight @method.call.php guifg=' . g:syntax_colors.method_call 
execute 'highlight @constructor.php guifg=' . g:syntax_colors.function 
execute 'highlight @variable.php guifg=' . g:syntax_colors.variable 
execute 'highlight @variable.builtin.php guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @field.php guifg=' . g:syntax_colors.property 
execute 'highlight @property.php guifg=' . g:syntax_colors.property 
execute 'highlight @parameter.php guifg=' . g:syntax_colors.parameter 
execute 'highlight @type.php guifg=' . g:syntax_colors.type 
execute 'highlight @type.builtin.php guifg=' . g:syntax_colors.type 
execute 'highlight @type.qualifier.php guifg=' . g:syntax_colors.modifier 
execute 'highlight @namespace.php guifg=' . g:syntax_colors.type 
execute 'highlight @class.php guifg=' . g:syntax_colors.class 
execute 'highlight @interface.php guifg=' . g:syntax_colors.type 
execute 'highlight @trait.php guifg=' . g:syntax_colors.type 
execute 'highlight @enum.php guifg=' . g:syntax_colors.type 
execute 'highlight @enumMember.php guifg=' . g:syntax_colors.constant 
execute 'highlight @attribute.php guifg=' . g:syntax_colors.attribute 
execute 'highlight @operator.php guifg=' . g:syntax_colors.operator 
execute 'highlight @keyword.php guifg=' . g:syntax_colors.keyword 
execute 'highlight @keyword.control.php guifg=' . g:syntax_colors.control 
execute 'highlight @keyword.return.php guifg=' . g:syntax_colors.control_flow 
execute 'highlight @keyword.operator.php guifg=' . g:syntax_colors.operator 
execute 'highlight @use.php guifg=' . g:syntax_colors.control_import 
execute 'highlight @constant.php guifg=' . g:syntax_colors.constant 
execute 'highlight @string.php guifg=' . g:colors.fg1 
execute 'highlight @string.escape.php guifg=' . g:syntax_colors.constant 
execute 'highlight @character.php guifg=' . g:syntax_colors.constant 
execute 'highlight @number.php guifg=' . g:syntax_colors.constant 
execute 'highlight @boolean.php guifg=' . g:syntax_colors.constant 
execute 'highlight @float.php guifg=' . g:syntax_colors.constant 
execute 'highlight @null.php guifg=' . g:syntax_colors.constant 
execute 'highlight @comment.php guifg=' . g:syntax_colors.comment 
execute 'highlight @conditional.php guifg=' . g:syntax_colors.control 
execute 'highlight @repeat.php guifg=' . g:syntax_colors.control 
execute 'highlight @label.php guifg=' . g:syntax_colors.control 
execute 'highlight @exception.php guifg=' . g:syntax_colors.keyword 
execute 'highlight @type.union.php guifg=' . g:syntax_colors.type 
execute 'highlight @type.intersection.php guifg=' . g:syntax_colors.type 
execute 'highlight @modifier.php guifg=' . g:syntax_colors.modifier 
execute 'highlight @visibility.php guifg=' . g:syntax_colors.modifier 
execute 'highlight @final.php guifg=' . g:syntax_colors.modifier 
execute 'highlight @abstract.php guifg=' . g:syntax_colors.modifier 
execute 'highlight @static.php guifg=' . g:syntax_colors.modifier 
execute 'highlight @this.php guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @magic.php guifg=' . g:syntax_colors.constant 
execute 'highlight @tag.php guifg=' . g:syntax_colors.tag_punctuation 
execute 'highlight @text.todo.php guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight @text.note.php guifg=' . g:syntax_colors.comment . ' gui=bold'
execute 'highlight @text.warning.php guifg=' . g:colors.warning . ' gui=bold'
execute 'highlight @text.danger.php guifg=' . g:colors.error . ' gui=bold'

" LSP semantic tokens
execute 'highlight @lsp.type.class guifg=' . g:syntax_colors.class 
execute 'highlight @lsp.type.decorator guifg=' . g:syntax_colors.attribute 
execute 'highlight @lsp.type.enum guifg=' . g:syntax_colors.type 
execute 'highlight @lsp.type.interface guifg=' . g:syntax_colors.type 
execute 'highlight @lsp.type.struct guifg=' . g:syntax_colors.class 
execute 'highlight @lsp.type.type guifg=' . g:syntax_colors.type 
execute 'highlight @lsp.type.type_parameter guifg=' . g:syntax_colors.type_parameter 
execute 'highlight @lsp.type.parameter guifg=' . g:syntax_colors.parameter 
execute 'highlight @lsp.type.variable guifg=' . g:syntax_colors.variable 
execute 'highlight @lsp.type.property guifg=' . g:syntax_colors.property 
execute 'highlight @lsp.type.enumMember guifg=' . g:syntax_colors.constant 
execute 'highlight @lsp.type.event guifg=' . g:syntax_colors.type 
execute 'highlight @lsp.type.function guifg=' . g:syntax_colors.function 
execute 'highlight @lsp.type.method guifg=' . g:syntax_colors.method 
execute 'highlight @lsp.type.macro guifg=' . g:syntax_colors.function 
execute 'highlight @lsp.type.keyword guifg=' . g:syntax_colors.keyword 
execute 'highlight @lsp.type.modifier guifg=' . g:syntax_colors.modifier 
execute 'highlight @lsp.type.comment guifg=' . g:syntax_colors.comment 
execute 'highlight @lsp.type.string guifg=' . g:colors.fg1 
execute 'highlight @lsp.type.number guifg=' . g:syntax_colors.constant 
execute 'highlight @lsp.type.regexp guifg=' . g:colors.fg1 
execute 'highlight @lsp.type.operator guifg=' . g:syntax_colors.operator 
execute 'highlight @lsp.type.namespace guifg=' . g:syntax_colors.type 
execute 'highlight @lsp.type.module guifg=' . g:syntax_colors.type 
execute 'highlight @lsp.type.lifetime guifg=' . g:syntax_colors.storage 
execute 'highlight @lsp.type.generic guifg=' . g:syntax_colors.type_parameter 
execute 'highlight @lsp.type.reference guifg=' . g:syntax_colors.variable 
execute 'highlight @lsp.type.definition guifg=' . g:syntax_colors.variable_declaration 
execute 'highlight @lsp.type.selfKeyword guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @lsp.type.unresolvedReference guifg=' . g:colors.error
execute 'highlight @lsp.type.builtinType guifg=' . g:syntax_colors.type 
execute 'highlight @lsp.type.readonly guifg=' . g:syntax_colors.variable_readonly 
execute 'highlight @lsp.type.mutable guifg=' . g:syntax_colors.variable 
execute 'highlight @lsp.type.deprecated guifg=' . g:syntax_colors.comment . ' gui=strikethrough'
execute 'highlight @lsp.type.modification guifg=' . g:syntax_colors.modifier 
execute 'highlight @lsp.type.async guifg=' . g:syntax_colors.keyword 
execute 'highlight @lsp.type.unsafe guifg=' . g:colors.warning 
execute 'highlight @lsp.type.attribute guifg=' . g:syntax_colors.attribute 
execute 'highlight @lsp.type.derive guifg=' . g:syntax_colors.attribute 
