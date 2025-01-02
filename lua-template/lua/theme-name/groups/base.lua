local M = {}

function M.get(c)
    -- Get style config
    local config = require('${themeNameKebab}.config').options
    local styles = config.styles
    local colors = require('${themeNameKebab}.colors')

    return {
        -- Editor
        Normal = { fg = c.fg0, bg = config.transparent and 'NONE' or c.bg0 },
        NormalFloat = { fg = c.fg0, bg = c.bg1 },
        NormalNC = { fg = c.fg1, bg = config.transparent and 'NONE' or c.bg0 },
        Cursor = { fg = c.accent0_fg, bg = c.accent0 },
        lCursor = { fg = c.accent0_fg, bg = c.accent0 },
        iCursor = { fg = c.accent1_fg, bg = c.accent1 },
        vCursor = { fg = c.accent0_fg, bg = c.accent0 },
        CursorLine = { fg = c.line_highlight_fg, bg = c.line_highlight },
        CursorColumn = { fg = c.line_highlight_fg, bg = c.line_highlight },
        ColorColumn = { fg = c.line_highlight_fg, bg = c.line_highlight },
        LineNr = { fg = c.comment },
        CursorLineNr = { fg = c.accent0 },
        SignColumn = { bg = config.transparent and 'NONE' or c.bg0 },
        VertSplit = { fg = c.border, bg = config.transparent and 'NONE' or c.bg0 },
        EndOfBuffer = { fg = config.transparent and 'NONE' or c.bg0 },
        StatusLine = { fg = c.accent1_fg, bg = c.accent1 },
        StatusLineNC = { fg = c.accent0_fg, bg = c.accent0 },
        StatusLineTerm = { fg = c.accent1_fg, bg = c.accent1 },
        StatusLineTermNC = { fg = c.accent0_fg, bg = c.accent0 },
        QuickFixLine = { fg = c.accent0, bg = c.bg1 },
        Pmenu = { fg = c.fg1, bg = c.bg2 },
        PmenuSel = { fg = c.accent1_fg, bg = c.accent1 },
        PmenuSbar = { bg = c.bg1 },
        PmenuThumb = { bg = c.fg0 },
        TabLine = { fg = c.fg1, bg = c.bg2 },
        TabLineFill = { bg = c.bg2 },
        TabLineSel = { fg = c.fg0, bg = c.bg0 },
        
        -- Gutter
        Folded = { fg = c.comment, bg = c.line_highlight },
        FoldColumn = { fg = c.fg1, bg = config.transparent and 'NONE' or c.bg0 },
        
        -- Diffs
        DiffAdd = { bg = c.success, fg = c.success_fg },
        DiffChange = { bg = c.info, fg = c.info_fg },
        DiffDelete = { bg = c.error, fg = c.error_fg },
        DiffText = { bg = c.info, fg = c.info_fg },
        
        -- Search/Replace
        Search = { bg = c.find_match, fg = c.find_match_fg },
        IncSearch = { bg = c.accent0, fg = c.accent0_fg },
        CurSearch = { bg = c.accent1, fg = c.accent1_fg },
        Substitute = { bg = c.accent1, fg = c.accent1_fg },
        
        -- Visual
        Visual = { bg = c.selection, fg = c.selection_fg },
        VisualNOS = { bg = c.selection, fg = c.selection_fg },
        
        -- Popup menus
        Pmenu = { fg = c.fg1, bg = c.bg2 },
        PmenuSel = { fg = c.accent1_fg, bg = c.accent1 },
        PmenuSbar = { bg = c.bg2 },
        PmenuThumb = { bg = c.fg2 },
        
        -- Messages
        MsgArea = { fg = c.fg1, bg = c.bg2 },
        MsgSeparator = { fg = c.border },
        MoreMsg = { fg = c.info },
        WarningMsg = { fg = c.warning },
        ErrorMsg = { fg = c.error },
        Question = { fg = c.info },
        
        -- Syntax
        Comment = { fg = c.comment },
        Constant = { fg = c.constant },
        String = { fg = c.fg0 },
        Character = { fg = c.fg0 },
        Number = { fg = c.constant },
        Boolean = { fg = c.constant },
        Float = { fg = c.constant },
        
        Identifier = { fg = c.variable },
        Function = { fg = c.func },
        Method = { fg = c.method },
        Property = { fg = c.property },
        
        Statement = { fg = c.keyword },
        Conditional = { fg = c.control_flow },
        Repeat = { fg = c.control_flow },
        Label = { fg = c.keyword },
        Operator = { fg = c.operator },
        Keyword = { fg = c.keyword },
        Exception = { fg = c.error },
        
        PreProc = { fg = c.keyword },
        Include = { fg = c.control_import },
        Define = { fg = c.storage },
        Macro = { fg = c.keyword },
        PreCondit = { fg = c.keyword },
        
        Type = { fg = c.type },
        StorageClass = { fg = c.storage },
        Structure = { fg = c.type },
        Typedef = { fg = c.type },
        
        Special = { fg = c.accent1 },
        SpecialChar = { fg = c.accent1 },
        Tag = { fg = c.tag },
        Delimiter = { fg = c.punctuation_comma },
        SpecialComment = { fg = c.comment },
        Debug = { fg = c.warning },
        
        -- Whitespace
        Whitespace = { fg = c.comment },
        NonText = { fg = c.comment },
        SpecialKey = { fg = c.comment },
        
        -- Spelling
        SpellBad = { sp = c.error, undercurl = true },
        SpellCap = { sp = c.warning, undercurl = true },
        SpellLocal = { sp = c.info, undercurl = true },
        SpellRare = { sp = c.info, undercurl = true },
        
        -- Misc
        MatchParen = { bg = c.selection, fg = c.selection_fg },
        Directory = { fg = c.fg1 },
        Conceal = { fg = c.comment },
        Title = { fg = c.accent1, bold = true },
        
        -- Window/Tab/Status
        VertSplit = { fg = c.border },
        HoriSplit = { fg = c.border },
        WinSeparator = { fg = c.border },
        TabLine = { fg = c.fg1, bg = c.bg2 },
        TabLineSel = { fg = c.fg0, bg = c.bg0 },
        TabLineFill = { bg = c.bg2 },
        StatusLine = { fg = c.accent1_fg, bg = c.accent1 },
        StatusLineNC = { fg = c.accent0_fg, bg = c.accent0 },
        WildMenu = { fg = c.accent1_fg, bg = c.accent1 },
        
        -- Git
        diffAdded = { fg = c.success },
        diffRemoved = { fg = c.error },
        diffChanged = { fg = c.info },
        diffOldFile = { fg = c.warning },
        diffNewFile = { fg = c.info },
        diffFile = { fg = c.accent1 },
        diffLine = { fg = c.fg2 },
        diffIndexLine = { fg = c.fg2 },
        
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
    }
end

return M
