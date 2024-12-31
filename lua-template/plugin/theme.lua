-- ${themeName} - Plugin configuration
-- Author: ${author}

if vim.g.loaded_${themeNameSnake} then
  return
end
vim.g.loaded_${themeNameSnake} = true

-- Add the theme's Lua module directory to the runtimepath
local function add_to_rtp()
  local rtp = vim.opt.runtimepath:get()
  local plugin_root = vim.fn.fnamemodify(vim.fn.resolve(vim.fn.expand('<sfile>:p')), ':h:h')
  local lua_dir = plugin_root .. '/lua'
  
  if not vim.tbl_contains(rtp, lua_dir) then
    vim.opt.runtimepath:append(lua_dir)
  end
end

-- Ensure the theme's Lua modules are available
add_to_rtp()

-- Create user command to reload the theme
vim.api.nvim_create_user_command('${themeNamePascal}Reload', function()
  -- Clear existing highlights
  if vim.g.colors_name then
    vim.cmd('hi clear')
  end
  
  -- Reload the theme module
  package.loaded['${themeNameKebab}'] = nil
  package.loaded['${themeNameKebab}.colors'] = nil
  package.loaded['${themeNameKebab}.config'] = nil
  package.loaded['${themeNameKebab}.groups'] = nil
  package.loaded['${themeNameKebab}.groups.plugins'] = nil
  
  -- Re-apply the theme
  vim.cmd([[colorscheme ${themeNameKebab}]])
end, {})

-- Create user command to toggle transparent background
vim.api.nvim_create_user_command('${themeNamePascal}ToggleTransparent', function()
  local theme = require('${themeNameKebab}')
  local config = require('${themeNameKebab}.config')
  
  -- Toggle transparency
  config.options.transparent = not config.options.transparent
  
  -- Reload the theme
  theme.setup(config.options)
end, {})
