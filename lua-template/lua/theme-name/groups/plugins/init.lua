local M = {}

function M.setup(c)
    -- Get style config
    local config = require('${themeNameKebab}.config').options
    local plugins = config.plugins

    -- Common highlight groups used across plugins
    local common = {
        bg = config.transparent and 'NONE' or c.bg0,
        bg_popup = c.bg3,
        bg_selected = c.accent0,
        bg_visual = c.selection,
        border = c.border,
        fg = c.fg0,
        fg_dim = c.comment,
    }

    -- Plugin-specific highlights
    local highlights = {}

    -- Telescope
    if plugins.telescope then
        highlights.telescope = {
            TelescopeBorder = { fg = common.border, bg = common.bg },
            TelescopeNormal = { fg = common.fg, bg = common.bg },
            TelescopePreviewBorder = { fg = common.border, bg = common.bg },
            TelescopePreviewNormal = { fg = common.fg, bg = common.bg },
            TelescopePreviewTitle = { fg = c.accent0_fg, bg = c.accent0 },
            TelescopePromptBorder = { fg = common.border, bg = common.bg_popup },
            TelescopePromptNormal = { fg = common.fg, bg = common.bg_popup },
            TelescopePromptPrefix = { fg = c.accent0, bg = common.bg_popup },
            TelescopePromptTitle = { fg = c.accent1_fg, bg = c.accent1 },
            TelescopeResultsBorder = { fg = common.border, bg = common.bg },
            TelescopeResultsNormal = { fg = common.fg, bg = common.bg },
            TelescopeResultsTitle = { fg = c.accent0_fg, bg = c.accent0 },
            TelescopeSelection = { bg = common.bg_selected, fg = c.accent0_fg },
            TelescopeSelectionCaret = { fg = c.accent0, bg = common.bg_selected },
        }
    end

    -- Treesitter
    if plugins.treesitter then
        highlights.treesitter = {
            TreesitterContext = { bg = c.bg2 },
            TreesitterContextLineNumber = { fg = c.fg2, bg = c.bg2 },
        }
    end

    -- LSP
    if plugins.lsp then
        highlights.lsp = {
            LspReferenceText = { bg = c.selection },
            LspReferenceRead = { bg = c.selection },
            LspReferenceWrite = { bg = c.selection },
            LspInlayHint = { fg = c.comment },
        }
    end

    -- Completion (nvim-cmp)
    if plugins.cmp then
        highlights.cmp = {
            CmpItemAbbr = { fg = common.fg },
            CmpItemAbbrDeprecated = { fg = common.fg_dim, strikethrough = true },
            CmpItemAbbrMatch = { fg = c.accent0, bold = true },
            CmpItemAbbrMatchFuzzy = { fg = c.accent0, bold = true },
            CmpItemKind = { fg = c.accent0 },
            CmpItemMenu = { fg = c.comment },
            CmpItemKindClass = { fg = c.type },
            CmpItemKindColor = { fg = c.constant },
            CmpItemKindConstant = { fg = c.constant },
            CmpItemKindConstructor = { fg = c.type },
            CmpItemKindEnum = { fg = c.type },
            CmpItemKindEnumMember = { fg = c.constant },
            CmpItemKindEvent = { fg = c.type },
            CmpItemKindField = { fg = c.property },
            CmpItemKindFile = { fg = c.fg1 },
            CmpItemKindFolder = { fg = c.fg1 },
            CmpItemKindFunction = { fg = c.func },
            CmpItemKindInterface = { fg = c.type },
            CmpItemKindKeyword = { fg = c.keyword },
            CmpItemKindMethod = { fg = c.method },
            CmpItemKindModule = { fg = c.keyword },
            CmpItemKindOperator = { fg = c.operator },
            CmpItemKindProperty = { fg = c.property },
            CmpItemKindReference = { fg = c.constant },
            CmpItemKindSnippet = { fg = c.constant },
            CmpItemKindStruct = { fg = c.type },
            CmpItemKindText = { fg = c.fg0 },
            CmpItemKindTypeParameter = { fg = c.parameter },
            CmpItemKindUnit = { fg = c.constant },
            CmpItemKindValue = { fg = c.constant },
            CmpItemKindVariable = { fg = c.variable },
        }
    end

    -- Mini
    if plugins.mini then
        highlights.mini = {
            MiniCompletionActiveParameter = { underline = true },
            MiniCursorword = { bg = c.selection, fg = c.selection_fg },
            MiniCursorwordCurrent = { bg = c.selection, fg = c.selection_fg },
            MiniIndentscopeSymbol = { fg = c.border },
            MiniIndentscopePrefix = { nocombine = true },
            MiniJump = { bg = c.accent0, fg = c.accent0_fg },
            MiniJump2dSpot = { fg = c.accent0, bold = true, nocombine = true },
            MiniStarterCurrent = { nocombine = true },
            MiniStarterFooter = { fg = c.accent0, italic = true },
            MiniStarterHeader = { fg = c.accent0 },
            MiniStarterInactive = { fg = c.comment, italic = true },
            MiniStarterItem = { fg = c.fg1 },
            MiniStarterItemBullet = { fg = c.border },
            MiniStarterItemPrefix = { fg = c.warning },
            MiniStarterSection = { fg = c.accent0 },
            MiniStarterQuery = { fg = c.info },
            MiniStatuslineDevinfo = { fg = c.fg2, bg = c.bg2 },
            MiniStatuslineFileinfo = { fg = c.fg2, bg = c.bg2 },
            MiniStatuslineFilename = { fg = c.fg2, bg = c.bg1 },
            MiniStatuslineInactive = { fg = c.fg2, bg = c.bg1 },
            MiniStatuslineModeCommand = { fg = c.warning_fg, bg = c.warning, bold = true },
            MiniStatuslineModeInsert = { fg = c.info_fg, bg = c.info, bold = true },
            MiniStatuslineModeNormal = { fg = c.accent0_fg, bg = c.accent0, bold = true },
            MiniStatuslineModeOther = { fg = c.accent1_fg, bg = c.accent1, bold = true },
            MiniStatuslineModeReplace = { fg = c.error_fg, bg = c.error, bold = true },
            MiniStatuslineModeVisual = { fg = c.warning_fg, bg = c.warning, bold = true },
            MiniSurround = { bg = c.accent0, fg = c.accent0_fg },
            MiniTablineCurrent = { fg = c.fg1, bg = c.bg3, bold = true },
            MiniTablineFill = { bg = c.bg1 },
            MiniTablineHidden = { fg = c.fg2, bg = c.bg1 },
            MiniTablineModifiedCurrent = { fg = c.warning, bg = c.bg3, bold = true },
            MiniTablineModifiedHidden = { fg = c.warning, bg = c.bg1 },
            MiniTablineModifiedVisible = { fg = c.warning, bg = c.bg2 },
            MiniTablineTabpagesection = { fg = c.fg1, bg = c.bg1 },
            MiniTablineVisible = { fg = c.fg1, bg = c.bg2 },
            MiniTestEmphasis = { bold = true },
            MiniTestFail = { fg = c.error, bold = true },
            MiniTestPass = { fg = c.success, bold = true },
            MiniTrailspace = { bg = c.error },
        }
    end

    -- Git Signs
    if plugins.gitsigns then
        highlights.gitsigns = {
            GitSignsAdd = { fg = c.success },
            GitSignsChange = { fg = c.info },
            GitSignsDelete = { fg = c.error },
            GitSignsChangedelete = { fg = c.warning },
            GitSignsUntracked = { fg = c.comment },
            GitSignsAddNr = { fg = c.success },
            GitSignsChangeNr = { fg = c.info },
            GitSignsDeleteNr = { fg = c.error },
            GitSignsChangedeleteNr = { fg = c.warning },
            GitSignsUntrackedNr = { fg = c.comment },
            GitSignsAddLn = { bg = c.bg2 },
            GitSignsChangeLn = { bg = c.bg2 },
            GitSignsDeleteLn = { bg = c.bg2 },
            GitSignsChangedeleteLn = { bg = c.bg2 },
            GitSignsUntrackedLn = { bg = c.bg2 },
        }
    end

    -- Indent Blankline
    if plugins.indent_blankline then
        highlights.indent_blankline = {
            IndentBlanklineChar = { fg = c.line_highlight },
            IndentBlanklineContextChar = { fg = c.accent1 },
            IndentBlanklineContextStart = { sp = c.accent1, underline = true },
            IndentBlanklineIndent1 = { fg = c.line_highlight },
            IndentBlanklineIndent2 = { fg = c.line_highlight },
            IndentBlanklineIndent3 = { fg = c.line_highlight },
            IndentBlanklineIndent4 = { fg = c.line_highlight },
            IndentBlanklineIndent5 = { fg = c.line_highlight },
            IndentBlanklineIndent6 = { fg = c.line_highlight },
        }
    end

    -- Apply highlights
    for _, group in pairs(highlights) do
        for name, opts in pairs(group) do
            vim.api.nvim_set_hl(0, name, opts)
        end
    end
end

return M
