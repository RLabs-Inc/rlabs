" Svelte specific highlighting

" Component tags
execute 'highlight svelteComponent guifg=' . g:syntax_colors.class
execute 'highlight svelteComponentName guifg=' . g:syntax_colors.class
execute 'highlight svelteTag guifg=' . g:syntax_colors.tag
execute 'highlight svelteTagName guifg=' . g:syntax_colors.tag
execute 'highlight svelteTagDelimiter guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight svelteAttribute guifg=' . g:syntax_colors.attribute
execute 'highlight svelteAttributeShorthand guifg=' . g:syntax_colors.attribute
execute 'highlight svelteAttributeValue guifg=' . g:syntax_colors.string

" Script and style blocks
execute 'highlight svelteScriptTag guifg=' . g:syntax_colors.tag
execute 'highlight svelteStyleTag guifg=' . g:syntax_colors.tag
execute 'highlight svelteScriptTagName guifg=' . g:syntax_colors.tag
execute 'highlight svelteStyleTagName guifg=' . g:syntax_colors.tag
execute 'highlight svelteScriptTagDelimiter guifg=' . g:syntax_colors.tag_punctuation
execute 'highlight svelteStyleTagDelimiter guifg=' . g:syntax_colors.tag_punctuation

" Svelte directives
execute 'highlight svelteDirective guifg=' . g:syntax_colors.keyword
execute 'highlight svelteKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight svelteConditional guifg=' . g:syntax_colors.control
execute 'highlight svelteRepeat guifg=' . g:syntax_colors.control
execute 'highlight svelteOperator guifg=' . g:syntax_colors.operator
execute 'highlight svelteSpecialDirective guifg=' . g:syntax_colors.keyword

" Svelte blocks
execute 'highlight svelteBlock guifg=' . g:syntax_colors.keyword
execute 'highlight svelteBlockKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight svelteBlockName guifg=' . g:syntax_colors.variable
execute 'highlight svelteBlockDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteBlockExpression guifg=' . g:syntax_colors.variable

" Reactive statements
execute 'highlight svelteReactiveStatement guifg=' . g:syntax_colors.keyword
execute 'highlight svelteReactiveKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight svelteReactiveDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteReactiveExpression guifg=' . g:syntax_colors.variable
execute 'highlight svelteReactiveOperator guifg=' . g:syntax_colors.operator

" Event handling
execute 'highlight svelteEvent guifg=' . g:syntax_colors.attribute
execute 'highlight svelteEventModifier guifg=' . g:syntax_colors.modifier
execute 'highlight svelteEventHandler guifg=' . g:syntax_colors.function
execute 'highlight svelteEventDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteEventExpression guifg=' . g:syntax_colors.variable

" Bindings and transitions
execute 'highlight svelteBinding guifg=' . g:syntax_colors.attribute
execute 'highlight svelteBindingKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight svelteBindingDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteBindingExpression guifg=' . g:syntax_colors.variable
execute 'highlight svelteTransition guifg=' . g:syntax_colors.attribute
execute 'highlight svelteTransitionKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight svelteTransitionDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteTransitionExpression guifg=' . g:syntax_colors.variable

" Slots and context
execute 'highlight svelteSlot guifg=' . g:syntax_colors.keyword
execute 'highlight svelteSlotName guifg=' . g:syntax_colors.variable
execute 'highlight svelteSlotDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteSlotExpression guifg=' . g:syntax_colors.variable
execute 'highlight svelteContext guifg=' . g:syntax_colors.keyword
execute 'highlight svelteContextKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight svelteContextDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteContextExpression guifg=' . g:syntax_colors.variable

" Template expressions
execute 'highlight svelteInterpolation guifg=' . g:syntax_colors.variable
execute 'highlight svelteInterpolationDelimiter guifg=' . g:syntax_colors.punctuation
execute 'highlight svelteExpression guifg=' . g:syntax_colors.variable
execute 'highlight svelteExpressionDelimiter guifg=' . g:syntax_colors.punctuation

" Comments and documentation
execute 'highlight svelteComment guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight svelteCommentBlock guifg=' . g:syntax_colors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight svelteCommentTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Special syntax
execute 'highlight svelteProp guifg=' . g:syntax_colors.property
execute 'highlight svelteStore guifg=' . g:syntax_colors.variable
execute 'highlight svelteAwait guifg=' . g:syntax_colors.control
execute 'highlight svelteThen guifg=' . g:syntax_colors.control
execute 'highlight svelteCatch guifg=' . g:syntax_colors.control
execute 'highlight svelteKey guifg=' . g:syntax_colors.attribute
execute 'highlight svelteEach guifg=' . g:syntax_colors.control
