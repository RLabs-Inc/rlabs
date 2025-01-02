local M = {}

function M.get(c)
    local config = require('${themeNameKebab}.config').options

    return {
        -- Misc
        ['@comment'] = { fg = c.comment }, -- For comments
        ['@error'] = { fg = c.error },
        ['@none'] = { fg = c.fg0 },
        ['@preproc'] = { fg = c.accent1 }, -- Various preprocessor directives & shebangs
        ['@define'] = { fg = c.keyword }, -- Preprocessor definition directives
        ['@operator'] = { fg = c.operator }, -- For any operator: +, but also -> and * in C

        -- Punctuation
        ['@punctuation.delimiter'] = { fg = c.punctuation_comma }, -- For delimiters (e.g. `;` / `.` / `,`)
        ['@punctuation.bracket'] = { fg = c.punctuation_brace }, -- For brackets and parenthesis
        ['@punctuation.special'] = { fg = c.accent1 }, -- For special punctuation such as * in C
        ['@punctuation.special.markdown'] = { fg = c.accent1, bold = true },

        -- Literals
        ['@string'] = { fg = c.fg0 }, -- For string literals
        ['@string.regex'] = { fg = c.fg1 }, -- For regexes
        ['@string.escape'] = { fg = c.fg1 }, -- For escape characters within a string
        ['@string.special'] = { fg = c.datetime }, -- Other special strings (e.g. dates)

        ['@character'] = { fg = c.fg0 }, -- Character literals
        ['@character.special'] = { fg = c.accent1 }, -- Special characters (e.g. wildcards)

        ['@boolean'] = { fg = c.constant }, -- For booleans
        ['@number'] = { fg = c.constant }, -- For all numbers
        ['@float'] = { fg = c.constant }, -- For floats

        -- Functions
        ['@function'] = { fg = c.func }, -- For function (calls and definitions)
        ['@function.builtin'] = { fg = c.support_function }, -- For builtin functions: table.insert in Lua
        ['@function.call'] = { fg = c.func_call }, -- Function calls
        ['@function.macro'] = { fg = c.func }, -- For macro defined functions (calls and definitions): each macro_rules in Rust
        ['@method'] = { fg = c.method }, -- For method definitions
        ['@method.call'] = { fg = c.method_call }, -- For method calls

        ['@constructor'] = { fg = c.type }, -- For constructor calls and definitions: {} in Lua, and Java constructors
        ['@parameter'] = { fg = c.parameter }, -- For parameters of a function

        -- Keywords
        ['@keyword'] = { fg = c.keyword }, -- For keywords that don't fall in previous categories
        ['@keyword.function'] = { fg = c.func }, -- For keywords used to define a function
        ['@keyword.operator'] = { fg = c.operator }, -- For new keyword operator
        ['@keyword.return'] = { fg = c.control_flow },
        ['@conditional'] = { fg = c.control_flow }, -- For keywords related to conditionals
        ['@repeat'] = { fg = c.control_flow }, -- For keywords related to loops
        ['@debug'] = { fg = c.warning }, -- For debugging keywords
        ['@label'] = { fg = c.language }, -- For labels: label: in C and :label: in Lua
        ['@include'] = { fg = c.control_import }, -- For includes: #include in C, use or extern crate in Rust, or require in Lua
        ['@exception'] = { fg = c.error }, -- For exception related keywords

        -- Types
        ['@type'] = { fg = c.type }, -- For types
        ['@type.builtin'] = { fg = c.support }, -- For builtin types
        ['@type.definition'] = { fg = c.type }, -- Type definitions (e.g. `typedef` in C)
        ['@type.qualifier'] = { fg = c.storage }, -- Type qualifiers (e.g. `const`)

        ['@storageclass'] = { fg = c.modifier }, -- Visibility/life-time/etc. modifiers (e.g. `static`)
        ['@attribute'] = { fg = c.attribute }, -- Attribute annotations (e.g. Python decorators)
        ['@field'] = { fg = c.property }, -- For fields
        ['@property'] = { fg = c.property }, -- Same as @field

        -- Identifiers
        ['@variable'] = { fg = c.variable }, -- Any variable name that does not have another highlight
        ['@variable.builtin'] = { fg = c.support_variable }, -- Variable names that are defined by the languages, like this or self

        ['@constant'] = { fg = c.constant }, -- For constants
        ['@constant.builtin'] = { fg = c.language }, -- For constant that are built in the language: nil in Lua
        ['@constant.macro'] = { fg = c.language }, -- For constants that are defined by macros: NULL in C

        ['@namespace'] = { fg = c.class }, -- For identifiers referring to modules and namespaces
        ['@symbol'] = { fg = c.constant },

        -- Text
        ['@text'] = { fg = c.fg0 }, -- For strings considered text in a markup language
        ['@text.strong'] = { fg = c.fg0, bold = true }, -- Bold text
        ['@text.emphasis'] = { fg = c.fg0, italic = true }, -- Italic text
        ['@text.underline'] = { fg = c.fg0, underline = true }, -- Underlined text
        ['@text.strike'] = { fg = c.fg0, strikethrough = true }, -- Strikethrough text
        ['@text.title'] = { fg = c.accent0, bold = true }, -- Text that is part of a title
        ['@text.literal'] = { fg = c.fg1 }, -- Literal or verbatim text
        ['@text.uri'] = { fg = c.info, underline = true }, -- URIs (e.g. hyperlinks)
        ['@text.math'] = { fg = c.constant }, -- Math environments (e.g. `$ ... $` in LaTeX)
        ['@text.environment'] = { fg = c.fg1 }, -- Text environments of markup languages
        ['@text.environment.name'] = { fg = c.type }, -- Text/string indicating the type of text environment
        ['@text.reference'] = { fg = c.accent1 }, -- References

        ['@text.todo'] = { fg = c.info_fg, bg = c.info },
        ['@text.note'] = { fg = c.info_fg, bg = c.info },
        ['@text.warning'] = { fg = c.warning_fg, bg = c.warning },
        ['@text.danger'] = { fg = c.error_fg, bg = c.error },

        ['@text.diff.add'] = { fg = c.success }, -- Added text (for diff files)
        ['@text.diff.delete'] = { fg = c.error }, -- Deleted text (for diff files)

        -- Tags
        ['@tag'] = { fg = c.tag }, -- Tags like html tag names
        ['@tag.attribute'] = { fg = c.attribute }, -- HTML tag attributes
        ['@tag.delimiter'] = { fg = c.tag_punctuation }, -- Tag delimiters like < > /

        -- Markup
        ['@text.title.markdown'] = { fg = c.accent1, bold = true },
        ['@text.title.markdown.markdown_inline'] = { fg = c.accent1, bold = true },
        ['@text.reference.markdown'] = { fg = c.accent0 },
        ['@text.reference.markdown.markdown_inline'] = { fg = c.accent0 },
        ['@text.literal.markdown'] = { fg = c.fg1 },
        ['@text.literal.markdown_inline'] = { fg = c.fg1 },
        ['@text.emphasis.markdown'] = { fg = c.fg0, italic = true },
        ['@text.emphasis.markdown_inline'] = { fg = c.fg0, italic = true },
        ['@text.strike.markdown'] = { fg = c.fg0, strikethrough = true },
        ['@text.strike.markdown_inline'] = { fg = c.fg0, strikethrough = true },
        ['@text.underline.markdown'] = { fg = c.fg0, underline = true },
        ['@text.underline.markdown_inline'] = { fg = c.fg0, underline = true },

        ['@text.math.markdown'] = { fg = c.constant },
        ['@text.math.markdown_inline'] = { fg = c.constant },
        ['@text.environment.markdown'] = { fg = c.fg1 },
        ['@text.environment.markdown_inline'] = { fg = c.fg1 },
        ['@text.environment.name.markdown'] = { fg = c.type },
        ['@text.environment.name.markdown_inline'] = { fg = c.type },

        ['@text.note.markdown'] = { fg = c.info_fg, bg = c.info },
        ['@text.note.markdown_inline'] = { fg = c.info_fg, bg = c.info },
        ['@text.warning.markdown'] = { fg = c.warning_fg, bg = c.warning },
        ['@text.warning.markdown_inline'] = { fg = c.warning_fg, bg = c.warning },
        ['@text.danger.markdown'] = { fg = c.error_fg, bg = c.error },
        ['@text.danger.markdown_inline'] = { fg = c.error_fg, bg = c.error },

        ['@text.diff.add.markdown'] = { fg = c.success },
        ['@text.diff.add.markdown_inline'] = { fg = c.success },
        ['@text.diff.delete.markdown'] = { fg = c.error },
        ['@text.diff.delete.markdown_inline'] = { fg = c.error },

        -- Markdown
        ['@text.title.1.markdown'] = { fg = c.accent1, bold = true },
        ['@text.title.2.markdown'] = { fg = c.accent0, bold = true },
        ['@text.title.3.markdown'] = { fg = c.yellow, bold = true },
        ['@text.title.4.markdown'] = { fg = c.red, bold = true },
        ['@text.title.5.markdown'] = { fg = c.green, bold = true },
        ['@text.title.6.markdown'] = { fg = c.blue, bold = true },

        ['@text.literal.markdown'] = { fg = c.fg1 },
        ['@text.literal.block.markdown'] = { fg = c.fg1 },
        ['@text.reference.markdown'] = { fg = c.accent1 },
        ['@text.uri.markdown'] = { fg = c.info, underline = true },
        ['@text.math.markdown'] = { fg = c.constant },
        ['@text.environment.markdown'] = { fg = c.fg1 },
        ['@text.environment.name.markdown'] = { fg = c.type },

        ['@text.note.markdown'] = { fg = c.info_fg, bg = c.info },
        ['@text.warning.markdown'] = { fg = c.warning_fg, bg = c.warning },
        ['@text.danger.markdown'] = { fg = c.error_fg, bg = c.error },

        ['@text.diff.add.markdown'] = { fg = c.success },
        ['@text.diff.delete.markdown'] = { fg = c.error },

        ['@text.todo.markdown'] = { fg = c.info_fg, bg = c.info },
        ['@text.todo.markdown_inline'] = { fg = c.info_fg, bg = c.info },


        -- Language specific

        -- CSS
        ['@property.css'] = { fg = c.property },
        ['@property.id.css'] = { fg = c.variable_property },
        ['@property.class.css'] = { fg = c.class },
        ['@type.css'] = { fg = c.type },
        ['@type.tag.css'] = { fg = c.tag },
        ['@string.plain.css'] = { fg = c.fg0 },
        ['@number.css'] = { fg = c.constant },
        ['@attribute.css'] = { fg = c.attribute },
        ['@attribute.css.id'] = { fg = c.variable_property },
        ['@attribute.css.class'] = { fg = c.class },
        ['@attribute.css.pseudo_class'] = { fg = c.type },

        -- HTML
        ['@text.literal.markdown_inline'] = { fg = c.fg1 },
        ['@tag.html'] = { fg = c.tag },
        ['@tag.attribute.html'] = { fg = c.attribute },
        ['@tag.delimiter.html'] = { fg = c.tag_punctuation },
        ['@attribute.html'] = { fg = c.attribute },
        ['@attribute.html.css'] = { fg = c.attribute },
        ['@attribute.html.css.id'] = { fg = c.variable_property },
        ['@attribute.html.css.class'] = { fg = c.class },
        ['@attribute.html.css.pseudo_class'] = { fg = c.type },

        -- JavaScript/TypeScript
        ['@constructor.javascript'] = { fg = c.class }, -- Constructor calls and definitions
        ['@constructor.typescript'] = { fg = c.class }, -- Constructor calls and definitions
        ['@type.typescript'] = { fg = c.type },
        ['@variable.member.typescript'] = { fg = c.variable_property },
        ['@property.typescript'] = { fg = c.property },
        ['@property.id.typescript'] = { fg = c.variable_property },
        -- highlight arrow functions in js and ts
        ['@function.arrow.typescript'] = { fg = c.func },
        ['@function.arrow.javascript'] = { fg = c.func },
        -- highlight parameter properties in js and ts
        ['@parameter.typescript'] = { fg = c.parameter },
        ['@parameter.javascript'] = { fg = c.parameter },

        -- JSON
        ['@label.json'] = { fg = c.property }, -- JSON labels
        ['@property.json'] = { fg = c.property },
        ['@property.id.json'] = { fg = c.variable_property },

        -- YAML
        ['@property.yaml'] = { fg = c.property },
        ['@property.id.yaml'] = { fg = c.variable_property },

        -- TOML
        ['@property.toml'] = { fg = c.property },
        ['@property.id.toml'] = { fg = c.variable_property },

        -- XML
        ['@tag.xml'] = { fg = c.tag },
        ['@attribute.xml'] = { fg = c.attribute },
        ['@separator.xml'] = { fg = c.tag_punctuation },

        -- Python
        ['@variable.builtin.python'] = { fg = c.support_variable },

        -- Ruby
        ['@symbol.ruby'] = { fg = c.accent1 },

        -- Lua
        ['@constructor.lua'] = { fg = c.class }, -- Constructor calls and definitions

        -- Markdown
        ['@text.title.1.markdown'] = { fg = c.accent0, bold = true },
        ['@text.title.2.markdown'] = { fg = c.accent1, bold = true },
        ['@text.title.3.markdown'] = { fg = c.yellow, bold = true },
        ['@text.title.4.markdown'] = { fg = c.red, bold = true },
        ['@text.title.5.markdown'] = { fg = c.green, bold = true },
        ['@text.title.6.markdown'] = { fg = c.blue, bold = true },

        ['@text.title.1.marker.markdown'] = { fg = c.accent0, bold = true },
        ['@text.title.2.marker.markdown'] = { fg = c.accent1, bold = true },
        ['@text.title.3.marker.markdown'] = { fg = c.yellow, bold = true },
        ['@text.title.4.marker.markdown'] = { fg = c.red, bold = true },
        ['@text.title.5.marker.markdown'] = { fg = c.green, bold = true },
        ['@text.title.6.marker.markdown'] = { fg = c.blue, bold = true },
    }
end

return M
