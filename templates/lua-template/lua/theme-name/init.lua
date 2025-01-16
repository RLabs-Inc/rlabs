local M = {}

-- Load modules
local colors = require('theme-name.colors')
local config = require('theme-name.config')
local groups = require('theme-name.groups')

-- Cache commonly used functions
local hi = vim.api.nvim_set_hl
local clear = vim.api.nvim_buf_clear_namespace

-- Setup function
function M.setup(opts)
    -- Merge user config with defaults
    config.setup(opts)

    -- Clear existing highlights
    if vim.g.colors_name then
        clear(0, -1, 0, -1)
    end
    vim.g.colors_name = 'theme-name'

    -- Set terminal colors
    if config.options.terminal_colors then
        colors.setup_terminal()
    end

    -- Get color palette
    local palette = colors.get_colors()

    -- Set highlight groups
    local highlights = groups.get_highlights(palette)
    for group, settings in pairs(highlights) do
        hi(0, group, settings)
    end

    -- Load plugin highlights if enabled
    if config.options.enable_plugins then
        require('theme-name.groups.plugins').setup(palette)
    end
end

-- Export colors for external use
M.colors = colors.get_colors()

return M
