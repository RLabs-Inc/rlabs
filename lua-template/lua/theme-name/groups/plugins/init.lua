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

    if plugins.nvim_tree then
        highlights.nvim_tree = {
            NvimTreeFolderIcon = { fg = c.fg1 },
            NvimTreeFolderName = { fg = c.fg1 },
            NvimTreeOpenedFolderName = { fg = c.accent1 },
            NvimTreeEmptyFolderName = { fg = c.comment },
            NvimTreeGitDirty = { fg = c.warning },
            NvimTreeGitNew = { fg = c.success },
            NvimTreeGitDeleted = { fg = c.error },
            NvimTreeGitIgnored = { fg = c.comment },
            NvimTreeIndentMarker = { fg = c.line_highlight },
            NvimTreeNormal = { fg = c.fg1 },
            NvimTreeNormalNC = { fg = c.fg1 },
            NvimTreeRootFolder = { fg = c.accent1 },
            NvimTreeSymlink = { fg = c.info },
            NvimTreeWinSeparator = { fg = c.border },
        }
    end

    -- if plugins.lualine then
    --     highlights.lualine = {
    --         normal = {
    --             a = { bg = c.accent1, fg = c.accent1_fg, gui='bold' },
    --             b = { bg = c.bg2, fg = c.fg0 },
    --             c = { bg = c.bg1, fg = c.fg1 },
    --         },
    --         insert = {
    --             a = { bg = c.accent0, fg = c.accent0_fg, gui='bold' },
    --             b = { bg = c.bg2, fg = c.fg0 },
    --             c = { bg = c.bg1, fg = c.fg1 },
    --         },
    --         visual = {
    --             a = { bg = c.info, fg = c.info_fg, gui='bold' },
    --             b = { bg = c.bg2, fg = c.fg0 },
    --             c = { bg = c.bg1, fg = c.fg1 },
    --         },
    --         replace = {
    --             a = { bg = c.warning, fg = c.warning_fg, gui='bold' },
    --             b = { bg = c.bg2, fg = c.fg0 },
    --             c = { bg = c.bg1, fg = c.fg1 },
    --         },
    --         command = {
    --             a = { bg = c.accent1, fg = c.accent1_fg, gui='bold' },
    --             b = { bg = c.bg2, fg = c.fg0 },
    --             c = { bg = c.bg1, fg = c.fg1 },
    --         },
    --         terminal = {
    --             a = { bg = c.success, fg = c.success_fg, gui='bold' },
    --             b = { bg = c.bg2, fg = c.fg0 },
    --             c = { bg = c.bg1, fg = c.fg1 },
    --         },
    --         inactive = {
    --             a = { bg = c.bg1, fg = c.comment, gui='bold' },
    --             b = { bg = c.bg2, fg = c.fg0 },
    --             c = { bg = c.bg1, fg = c.fg1 }, 
    --         },
    --     }
    -- end

    -- Coc
    -- hi! link CocErrorSign         DiagnosticError
    -- hi! link CocWarningSign       DiagnosticWarn
    -- hi! link CocInfoSign          DiagnosticInfo
    -- hi! link CocHintSign          DiagnosticHint

    -- hi! link CocErrorFloat        DiagnosticFloatingError
    -- hi! link CocWarningFloat      DiagnosticFloatingWarn
    -- hi! link CocInfoFloat         DiagnosticFloatingInfo
    -- hi! link CocHintFloat         DiagnosticFloatingHint

    -- hi! link CocErrorHighlight    DiagnosticError
    -- hi! link CocWarningHighlight  DiagnosticWarn
    -- hi! link CocInfoHighlight     DiagnosticInfo
    -- hi! link CocHintHighlight     DiagnosticHint

    -- hi! link CocSem_angle             Keyword
    -- hi! link CocSem_annotation        Keyword
    -- hi! link CocSem_attribute         Type
    -- hi! link CocSem_bitwise           Keyword
    -- hi! link CocSem_boolean           Boolean
    -- hi! link CocSem_brace             Normal
    -- hi! link CocSem_bracket           Normal
    -- hi! link CocSem_builtinAttribute  Type
    -- hi! link CocSem_builtinType       Type
    -- hi! link CocSem_character         String
    -- hi! link CocSem_class             Structure
    -- hi! link CocSem_colon             Normal
    -- hi! link CocSem_comma             Normal
    -- hi! link CocSem_comment           Comment
    -- hi! link CocSem_comparison        Keyword
    -- hi! link CocSem_concept           Keyword
    -- hi! link CocSem_constParameter    Identifier
    -- hi! link CocSem_dependent         Keyword
    -- hi! link CocSem_dot               Keyword
    -- hi! link CocSem_enum              Structure
    -- hi! link CocSem_enumMember        Constant
    -- hi! link CocSem_escapeSequence    Type
    -- hi! link CocSem_event             Identifier
    -- hi! link CocSem_formatSpecifier   Type
    -- hi! link CocSem_function          Function
    -- hi! link CocSem_interface         Type
    -- hi! link CocSem_keyword           Keyword
    -- hi! link CocSem_label             Keyword
    -- hi! link CocSem_logical           Keyword
    -- hi! link CocSem_macro             Macro
    -- hi! link CocSem_method            Function
    -- hi! link CocSem_modifier          Keyword
    -- hi! link CocSem_namespace         Identifier
    -- hi! link CocSem_number            Number
    -- hi! link CocSem_operator          Operator
    -- hi! link CocSem_parameter         Identifier
    -- hi! link CocSem_parenthesis       Normal
    -- hi! link CocSem_property          Identifier
    -- hi! link CocSem_punctuation       Keyword
    -- hi! link CocSem_regexp            Type
    -- hi! link CocSem_selfKeyword       Constant
    -- hi! link CocSem_semicolon         Normal
    -- hi! link CocSem_string            String
    -- hi! link CocSem_struct            Structure
    -- hi! link CocSem_type              Type
    -- hi! link CocSem_typeAlias         Type
    -- hi! link CocSem_typeParameter     Type
    -- hi! link CocSem_unknown           Normal
    -- hi! link CocSem_variable          Identifier

    -- call <sid>hi('CocHighlightRead',   s:gui0B, s:gui01,  s:cterm0B, s:cterm01, '', '')
    -- call <sid>hi('CocHighlightText',   s:gui0A, s:gui01,  s:cterm0A, s:cterm01, '', '')
    -- call <sid>hi('CocHighlightWrite',  s:gui08, s:gui01,  s:cterm08, s:cterm01, '', '')
    -- call <sid>hi('CocListMode',        s:gui01, s:gui0B,  s:cterm01, s:cterm0B, 'bold', '')
    -- call <sid>hi('CocListPath',        s:gui01, s:gui0B,  s:cterm01, s:cterm0B, '', '')
    -- call <sid>hi('CocSessionsName',    s:gui05, '', s:cterm05, '', '', '')

    -- Apply highlights
    for _, group in pairs(highlights) do
        for name, opts in pairs(group) do
            vim.api.nvim_set_hl(0, name, opts)
        end
    end
end

return M
