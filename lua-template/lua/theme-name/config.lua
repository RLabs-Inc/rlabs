local M = {}

-- Default configuration
M.options = {
    -- Theme variant
    transparent = false,        -- Enable transparent background
    terminal_colors = true,     -- Set terminal colors
    dim_inactive = false,       -- Dim inactive windows/buffers
    
    -- Style configurations
    styles = {
        comments = 'italic',    -- Style for comments
        keywords = 'NONE',      -- Style for keywords
        functions = 'bold',     -- Style for functions
        variables = 'NONE',     -- Style for variables
        strings = 'NONE',       -- Style for strings
        types = 'NONE',         -- Style for types
        operators = 'NONE',     -- Style for operators
    },
    
    -- Plugin integrations (set to false to disable)
    plugins = {
        -- Syntax
        treesitter = true,          -- Tree-sitter syntax highlighting
        treesitter_context = true,  -- Tree-sitter context
        semantic_tokens = true,     -- LSP semantic tokens
        
        -- UI Elements
        telescope = true,           -- Telescope
        nvim_tree = true,          -- Nvim-tree
        neo_tree = true,           -- Neo-tree
        which_key = true,          -- Which-key
        indent_blankline = true,   -- Indent-blankline
        dashboard = true,          -- Dashboard
        nvim_navic = true,         -- Nvim-navic (winbar)
        aerial = true,             -- Aerial (symbols tree)
        
        -- Git
        gitsigns = true,           -- Gitsigns
        git_conflict = true,       -- Git-conflict
        
        -- Completion & Diagnostics
        cmp = true,                -- Nvim-cmp
        illuminate = true,         -- Vim-illuminate
        notify = true,             -- Nvim-notify
        trouble = true,            -- Trouble.nvim
        
        -- Editing Support
        mini = true,               -- Mini.nvim suite
        leap = true,               -- Leap
        hop = true,                -- Hop
        navic = true,              -- Navic
        rainbow_delimiters = true, -- Rainbow delimiters
        
        -- Status Line
        lualine = true,           -- Lualine
        bufferline = true,        -- Bufferline
    },
    
    -- Plugin specific options
    plugin_options = {
        -- Indent-blankline options
        indent_blankline = {
            context_highlight = 'ContextHighlight', -- Highlight group for context
            indent_highlight = 'IndentHighlight',   -- Highlight group for indentation
        },
        
        -- Telescope options
        telescope = {
            style = 'bordered',    -- Style: 'bordered' or 'minimal'
        },
        
        -- Bufferline options
        bufferline = {
            bold_tabs = false,     -- Use bold text for tabs
            separator_style = 'thin', -- 'thin', 'thick', 'slant' or 'padded_slant'
        },
        
        -- Diagnostic options
        diagnostics = {
            bold = true,           -- Use bold text for diagnostics
            italic = true,         -- Use italic text for diagnostics
            undercurl = true,      -- Use undercurl for diagnostics
        },
    },
    
    -- Override specific highlight groups
    highlight_overrides = {
        -- Example override:
        -- Normal = { fg = '${FG1}', bg = '${BG1}' }
    },
    
    -- Override specific plugin highlight groups
    plugin_highlight_overrides = {
        -- Example override for a plugin:
        -- TelescopeNormal = { fg = '${FG1}', bg = '${BG1}' }
    }
}

-- Setup function to merge user config
function M.setup(opts)
    if opts then
        -- Deep merge user options with defaults
        M.options = vim.tbl_deep_extend('force', M.options, opts)
    end
    
    -- Validate options
    M.validate_options()
end

-- Validate configuration options
function M.validate_options()
    local options = M.options
    
    -- Validate style values
    local valid_styles = { 'NONE', 'bold', 'italic', 'underline', 'undercurl', 'strikethrough' }
    for style_name, style_value in pairs(options.styles) do
        if not vim.tbl_contains(valid_styles, style_value) then
            vim.notify(
                string.format(
                    "Invalid style value '%s' for '%s'. Using 'NONE' instead.",
                    style_value,
                    style_name
                ),
                vim.log.levels.WARN
            )
            options.styles[style_name] = 'NONE'
        end
    end
    
    -- Validate plugin_options
    if options.plugin_options.bufferline then
        local valid_separator_styles = { 'thin', 'thick', 'slant', 'padded_slant' }
        if not vim.tbl_contains(valid_separator_styles, options.plugin_options.bufferline.separator_style) then
            options.plugin_options.bufferline.separator_style = 'thin'
        end
    end
    
    -- Validate telescope style
    if options.plugin_options.telescope then
        local valid_telescope_styles = { 'bordered', 'minimal' }
        if not vim.tbl_contains(valid_telescope_styles, options.plugin_options.telescope.style) then
            options.plugin_options.telescope.style = 'bordered'
        end
    end
end

return M
