# Quick Start Guide

This guide will help you test the theme after downloading.

## Testing with Manual Installation

1. Extract the downloaded zip file:

```bash
unzip ${themeNameKebab}-nvim-theme.zip
```

2. Create a test directory in your Neovim packages:

```bash
mkdir -p ~/.local/share/nvim/site/pack/test/start/
```

3. Copy the theme files:

```bash
cp -r ${themeNameKebab}/* ~/.local/share/nvim/site/pack/test/start/${themeNameKebab}/
```

4. Create a minimal Neovim config for testing:

```bash
mkdir -p /tmp/nvim-test
cat > /tmp/nvim-test/init.lua << EOL
-- Enable true colors
vim.opt.termguicolors = true

-- Load the theme module
local ok, theme = pcall(require, '${themeNameKebab}')
if not ok then
  error('Could not load ${themeNameKebab} theme: ' .. theme)
end

-- Setup the theme with default options
theme.setup()

-- Set the colorscheme
vim.cmd([[colorscheme ${themeNameKebab}]])
EOL
```

5. Test the theme with the minimal config:

```bash
NVIM_APPNAME=test-theme nvim -u /tmp/nvim-test/init.lua
```

This will launch Neovim with only the theme loaded, allowing you to verify the basic colors and highlighting.

## Testing with Your Full Configuration

1. Back up your current theme (if any):

```bash
# If you have a themes directory
mv ~/.config/nvim/pack/themes/start/current-theme ~/.config/nvim/pack/themes/start/current-theme.bak
```

2. Install the theme:

```bash
# Create themes directory if it doesn't exist
mkdir -p ~/.config/nvim/pack/themes/start/

# Copy the theme files
cp -r ${themeNameKebab}/* ~/.config/nvim/pack/themes/start/${themeNameKebab}/
```

3. Update your Neovim config (`~/.config/nvim/init.lua`):

```lua
-- Enable true colors
vim.opt.termguicolors = true

-- Load and configure the theme
require('${themeNameKebab}').setup({
  -- Optional configuration
  transparent = false,
  italic_comments = true,
  italic_keywords = false,
  bold_functions = true,
})

-- Set the colorscheme
vim.cmd([[colorscheme ${themeNameKebab}]])
```

4. Launch Neovim normally:

```bash
nvim
```

## Verifying Theme Features

1. Basic Syntax Highlighting:

   - Open a Lua file to check basic syntax highlighting
   - Verify different syntax elements have distinct colors

2. Treesitter Support:

   - Install Treesitter parser: `:TSInstall lua`
   - Open a Lua file to verify enhanced highlighting

3. LSP Integration:

   - Install lua-language-server
   - Open a Lua file and check hover highlights
   - Verify diagnostic highlights

4. Plugin Integration:
   - Test with telescope.nvim: `:Telescope find_files`
   - Test with nvim-tree: `:NvimTreeToggle`
   - Check git decorations if using gitsigns.nvim

## Troubleshooting

1. Colors don't look right?

   - Check terminal true color support: `:checkhealth`
   - Verify `$TERM` is set correctly (e.g., `xterm-256color`)

2. Theme not loading?

   - Check if the module can be loaded: `:lua print(require('${themeNameKebab}'))`
   - Verify the theme is in your runtimepath: `:lua print(vim.inspect(vim.api.nvim_list_runtime_paths()))`
   - Check for errors: `:messages`

3. Missing highlights?
   - Update Treesitter: `:TSUpdate`
   - Check plugin versions are compatible
   - Verify highlight groups: `:highlight`

## Available Commands

The theme provides several commands for managing its appearance:

1. `:${themeNamePascal}Reload` - Reload the theme (useful during development)
2. `:${themeNamePascal}ToggleTransparent` - Toggle background transparency

## Need Help?

- Report issues: [GitHub Issues](https://github.com/${userName}/${themeNameKebab}/issues)
- Check terminal compatibility: [Terminal Support](https://gist.github.com/XVilka/8346728)
