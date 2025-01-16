-- Load all highlight group definitions
local M = {}

-- Cache commonly used functions
local hi = vim.api.nvim_set_hl

function M.get_highlights(colors)
  local highlights = {}

  -- Load base highlight groups
  local base = require('${themeNameKebab}.groups.base').get(colors)
  for group, settings in pairs(base) do
    highlights[group] = settings
  end

  -- Load LSP highlight groups
  local lsp = require('${themeNameKebab}.groups.lsp').get(colors)
  for group, settings in pairs(lsp) do
    highlights[group] = settings
  end

  -- Load Treesitter highlight groups
  local treesitter = require('${themeNameKebab}.groups.treesitter').get(colors)
  for group, settings in pairs(treesitter) do
    highlights[group] = settings
  end

  return highlights
end

-- Setup function for plugin highlights
function M.setup_plugins(colors)
  -- Load plugin highlight groups
  local plugins = require('${themeNameKebab}.groups.plugins').get(colors)
  for group, settings in pairs(plugins) do
    hi(0, group, settings)
  end
end

return M
