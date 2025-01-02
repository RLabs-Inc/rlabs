local M = {}

function M.get(c)
    local config = require('${themeNameKebab}.config').options
    local colors = require('${themeNameKebab}.colors')

    -- Helper function to merge highlight attributes
    local function h(group)
        if type(group.style) == 'string' and group.style ~= 'NONE' then
            local style_tbl = {}
            for s in group.style:gmatch('%w+') do
                style_tbl[s] = true
            end
            group.style = nil
            return vim.tbl_deep_extend('force', group, style_tbl)
        end
        return group
    end

    return {
        -- LSP Semantic Token Groups
        ['@lsp.type.class'] = { fg = c.class },
        ['@lsp.type.decorator'] = { fg = c.func },
        ['@lsp.type.enum'] = { fg = c.type },
        ['@lsp.type.enumMember'] = { fg = c.constant },
        ['@lsp.type.function'] = { fg = c.func },
        ['@lsp.type.interface'] = { fg = c.type },
        ['@lsp.type.macro'] = { fg = c.keyword },
        ['@lsp.type.method'] = { fg = c.method },
        ['@lsp.type.namespace'] = { fg = c.class },
        ['@lsp.type.parameter'] = { fg = c.parameter },
        ['@lsp.type.property'] = { fg = c.property },
        ['@lsp.type.struct'] = { fg = c.type },
        ['@lsp.type.type'] = { fg = c.type },
        ['@lsp.type.typeParameter'] = { fg = c.type_parameter },
        ['@lsp.type.variable'] = { fg = c.variable },
        ['@lsp.type.comment'] = { fg = c.comment },
        ['@lsp.type.event'] = { fg = c.type },
        ['@lsp.type.modifier'] = { fg = c.modifier },
        ['@lsp.type.regexp'] = { fg = c.fg1 },
        ['@lsp.type.string'] = { fg = c.fg0 },
        ['@lsp.type.number'] = { fg = c.constant },
        ['@lsp.type.operator'] = { fg = c.operator },
        ['@lsp.type.keyword'] = { fg = c.keyword },
        ['@lsp.type.lifetime'] = { fg = c.keyword },

        -- LSP Semantic Modifiers
        ['@lsp.mod.declaration'] = { fg = c.variable_declaration },
        ['@lsp.mod.definition'] = { fg = c.variable_declaration },
        ['@lsp.mod.readonly'] = { fg = c.variable_readonly },
        ['@lsp.mod.static'] = { fg = c.storage },
        ['@lsp.mod.deprecated'] = { strikethrough = true },
        ['@lsp.mod.abstract'] = { fg = c.attribute },
        ['@lsp.mod.async'] = { fg = c.support_function },
        ['@lsp.mod.modification'] = { fg = c.variable },
        ['@lsp.mod.documentation'] = { fg = c.comment },
        ['@lsp.mod.defaultLibrary'] = { fg = c.support },

        -- LSP Injected Groups
        ['@lsp.typemod.class.declaration'] = { fg = c.class },
        ['@lsp.typemod.class.definition'] = { fg = c.class },
        ['@lsp.typemod.struct.declaration'] = { fg = c.type },
        ['@lsp.typemod.struct.definition'] = { fg = c.type },
        ['@lsp.typemod.enum.declaration'] = { fg = c.type },
        ['@lsp.typemod.enum.definition'] = { fg = c.type },
        ['@lsp.typemod.interface.declaration'] = { fg = c.type },
        ['@lsp.typemod.interface.definition'] = { fg = c.type },
        ['@lsp.typemod.function.declaration'] = { fg = c.func },
        ['@lsp.typemod.function.definition'] = { fg = c.func },
        ['@lsp.typemod.method.declaration'] = { fg = c.method },
        ['@lsp.typemod.method.definition'] = { fg = c.method },
        ['@lsp.typemod.property.declaration'] = { fg = c.property_declaration },
        ['@lsp.typemod.property.definition'] = { fg = c.property_declaration },
        ['@lsp.typemod.variable.declaration'] = { fg = c.variable_declaration },
        ['@lsp.typemod.variable.definition'] = { fg = c.variable_declaration },
        ['@lsp.typemod.parameter.declaration'] = { fg = c.parameter },
        ['@lsp.typemod.parameter.definition'] = { fg = c.parameter },
        ['@lsp.typemod.namespace.declaration'] = { fg = c.class },
        ['@lsp.typemod.namespace.definition'] = { fg = c.class },

        -- Language specific LSP semantic tokens

        -- Rust
        ['@lsp.typemod.variable.defaultLibrary.rust'] = { fg = c.support_variable },
        ['@lsp.typemod.function.defaultLibrary.rust'] = { fg = c.support_function },
        ['@lsp.typemod.method.defaultLibrary.rust'] = { fg = c.support_method },
        ['@lsp.typemod.property.defaultLibrary.rust'] = { fg = c.support_property },

        -- Python
        ['@lsp.typemod.variable.defaultLibrary.python'] = { fg = c.support_variable },
        ['@lsp.typemod.function.defaultLibrary.python'] = { fg = c.support_function },
        ['@lsp.typemod.method.defaultLibrary.python'] = { fg = c.support_method },
        ['@lsp.typemod.property.defaultLibrary.python'] = { fg = c.support_property },

        -- Java
        ['@lsp.typemod.variable.defaultLibrary.java'] = { fg = c.support_variable },
        ['@lsp.typemod.function.defaultLibrary.java'] = { fg = c.support_function },
        ['@lsp.typemod.method.defaultLibrary.java'] = { fg = c.support_method },
        ['@lsp.typemod.property.defaultLibrary.java'] = { fg = c.support_property },

        -- Ruby
        ['@lsp.typemod.variable.defaultLibrary.ruby'] = { fg = c.support_variable },
        ['@lsp.typemod.function.defaultLibrary.ruby'] = { fg = c.support_function },
        ['@lsp.typemod.method.defaultLibrary.ruby'] = { fg = c.support_method },
        ['@lsp.typemod.property.defaultLibrary.ruby'] = { fg = c.support_property },

        -- Lua
        ['@lsp.typemod.variable.defaultLibrary.lua'] = { fg = c.support_variable },
        ['@lsp.typemod.function.defaultLibrary.lua'] = { fg = c.support_function },
        ['@lsp.typemod.method.defaultLibrary.lua'] = { fg = c.support_method },
        ['@lsp.typemod.property.defaultLibrary.lua'] = { fg = c.support_property },


        -- TypeScript/JavaScript
        ['@lsp.typemod.variable.defaultLibrary.typescript'] = { fg = c.support_variable },
        ['@lsp.typemod.variable.defaultLibrary.javascript'] = { fg = c.support_variable },
        ['@lsp.typemod.function.defaultLibrary.typescript'] = { fg = c.support_function },
        ['@lsp.typemod.function.defaultLibrary.javascript'] = { fg = c.support_function },
        ['@lsp.typemod.method.defaultLibrary.typescript'] = { fg = c.support_method },
        ['@lsp.typemod.method.defaultLibrary.javascript'] = { fg = c.support_method },
        ['@lsp.typemod.property.defaultLibrary.typescript'] = { fg = c.support_property },
        ['@lsp.typemod.property.defaultLibrary.javascript'] = { fg = c.support_property },

        -- Diagnostics
        DiagnosticError = { fg = c.error },
        DiagnosticWarn = { fg = c.warning },
        DiagnosticInfo = { fg = c.info },
        DiagnosticHint = { fg = c.success },
        DiagnosticOk = { fg = c.success },

        DiagnosticSignError = { fg = c.error },
        DiagnosticSignWarn = { fg = c.warning },
        DiagnosticSignInfo = { fg = c.info },
        DiagnosticSignHint = { fg = c.success },
        DiagnosticSignOk = { fg = c.success },

        DiagnosticVirtualTextError = { fg = c.error_fg, bg = c.error },
        DiagnosticVirtualTextWarn = { fg = c.warning_fg, bg = c.warning },
        DiagnosticVirtualTextInfo = { fg = c.info_fg, bg = c.info },
        DiagnosticVirtualTextHint = { fg = c.success_fg, bg = c.success },
        DiagnosticVirtualTextOk = { fg = c.success_fg, bg = c.success },

        DiagnosticUnderlineError = { sp = c.error, undercurl = true },
        DiagnosticUnderlineWarn = { sp = c.warning, undercurl = true },
        DiagnosticUnderlineInfo = { sp = c.info, undercurl = true },
        DiagnosticUnderlineHint = { sp = c.success, undercurl = true },
        DiagnosticUnderlineOk = { sp = c.success, undercurl = true },

        DiagnosticFloatingError = { fg = c.error },
        DiagnosticFloatingWarn = { fg = c.warning },
        DiagnosticFloatingInfo = { fg = c.info },
        DiagnosticFloatingHint = { fg = c.success },
        DiagnosticFloatingOk = { fg = c.success },

        -- LSP References/Context
        LspReferenceText = { bg = c.selection, fg = c.selection_fg },
        LspReferenceRead = { bg = c.selection, fg = c.selection_fg },
        LspReferenceWrite = { bg = c.selection, fg = c.selection_fg },

        -- Code Lens
        LspCodeLens = { fg = c.comment },
        LspCodeLensSeparator = { fg = c.border },

        -- Codelens
        ['@lsp.type.comment.rust'] = { fg = c.comment },
        ['@lsp.type.decorator.rust'] = { fg = c.attribute },
        ['@lsp.type.deriveHelper.rust'] = { fg = c.attribute },
        ['@lsp.type.generic.rust'] = { fg = c.type_parameter },
        ['@lsp.type.lifetime.rust'] = { fg = c.keyword },
        ['@lsp.type.macro.rust'] = { fg = c.func },
        ['@lsp.type.magicFunction.rust'] = { fg = c.support_function },
        ['@lsp.type.namespace.rust'] = { fg = c.class },
        ['@lsp.type.operator.rust'] = { fg = c.operator },
        ['@lsp.type.parameter.rust'] = { fg = c.parameter },
        ['@lsp.type.property.rust'] = { fg = c.property },
        ['@lsp.type.selfKeyword.rust'] = { fg = c.language },
        ['@lsp.type.selfTypeKeyword.rust'] = { fg = c.language },
        ['@lsp.type.string.rust'] = { fg = c.fg0 },
        ['@lsp.type.typeAlias.rust'] = { fg = c.type_parameter },
        ['@lsp.type.unresolvedReference.rust'] = { fg = c.error },
        ['@lsp.typemod.deriveHelper.attribute.rust'] = { fg = c.attribute },
        ['@lsp.typemod.generic.attribute.rust'] = { fg = c.attribute },
        ['@lsp.typemod.operator.injected.rust'] = { fg = c.operator },
        ['@lsp.typemod.string.injected.rust'] = { fg = c.fg1 },
    }
end

return M
