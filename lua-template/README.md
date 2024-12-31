# ${themeName}

A beautiful ${isDark ? 'dark' : 'light'} theme for Neovim, designed with modern Lua and optimized for Treesitter, LSP, and popular plugins.

![Theme Preview](images/RLabs-Lamp.png)

## Features

- 🎨 Modern Lua implementation
- 🌳 First-class Treesitter support
- 🔍 Rich LSP semantic highlighting
- 🔌 Support for popular plugins
- 💻 True color support
- 🎯 Carefully crafted highlight groups

## Installation

### Using a Package Manager (recommended)

#### [lazy.nvim](https://github.com/folke/lazy.nvim)

```lua
{
  "${userName}/${themeNameKebab}",
  lazy = false,    -- make sure we load this during startup
  priority = 1000, -- load before other start plugins
  config = function()
    -- Set the colorscheme
    vim.cmd([[colorscheme ${themeNameKebab}]])
  end,
}
```

#### [packer.nvim](https://github.com/wbthomason/packer.nvim)

```lua
use {
  "${userName}/${themeNameKebab}",
  config = function()
    vim.cmd([[colorscheme ${themeNameKebab}]])
  end
}
```

### Manual Installation

1. Create the plugin directory if it doesn't exist:

```bash
mkdir -p ~/.local/share/nvim/site/pack/plugins/start/
```

2. Clone the repository:

```bash
git clone https://github.com/${userName}/${themeNameKebab}.git \
  ~/.local/share/nvim/site/pack/plugins/start/${themeNameKebab}
```

3. Add to your Neovim configuration (`~/.config/nvim/init.lua`):

```lua
-- Enable true colors
vim.opt.termguicolors = true

-- Set the colorscheme
vim.cmd([[colorscheme ${themeNameKebab}]])
```

## Configuration

The theme can be customized through a configuration table:

```lua
require("${themeNameKebab}").setup({
  -- Enable transparent background
  transparent = false,

  -- Enable italic comments
  italic_comments = true,

  -- Enable italic keywords
  italic_keywords = false,

  -- Enable bold functions
  bold_functions = true,

  -- Override specific highlight groups
  overrides = {
    -- Example: Make comments brighter
    Comment = { fg = "#888888" },
  },

  -- Integrate with other plugins
  integrations = {
    -- Enable telescope integration
    telescope = true,

    -- Enable nvim-tree integration
    nvim_tree = true,

    -- Enable gitsigns integration
    gitsigns = true,

    -- Enable which-key integration
    which_key = true,

    -- Enable indent-blankline integration
    indent_blankline = true,

    -- Enable native LSP integration
    native_lsp = {
      enabled = true,
      virtual_text = true,
      underlines = true,
      background = true,
    },

    -- Enable semantic tokens
    semantic_tokens = true,
  },
})
```

## Supported Plugins

This theme includes carefully crafted highlight groups for:

### Core Features

- ✅ [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
- ✅ Built-in LSP
- ✅ [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)
- ✅ [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)
- ✅ [nvim-tree.lua](https://github.com/kyazdani42/nvim-tree.lua)
- ✅ [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim)
- ✅ [which-key.nvim](https://github.com/folke/which-key.nvim)
- ✅ [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim)

### Additional Plugins

- ✅ [barbar.nvim](https://github.com/romgrk/barbar.nvim)
- ✅ [nvim-notify](https://github.com/rcarriga/nvim-notify)
- ✅ [nvim-navic](https://github.com/SmiteshP/nvim-navic)
- ✅ [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim)
- ✅ [nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui)
- ✅ [dashboard-nvim](https://github.com/glepnir/dashboard-nvim)
- ✅ [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)
- ✅ [bufferline.nvim](https://github.com/akinsho/bufferline.nvim)

## Recommended Plugins

For the best experience, we recommend using these plugins:

```lua
{
  -- Treesitter for better syntax highlighting
  {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function()
      require("nvim-treesitter.configs").setup({
        ensure_installed = {
          "lua",
          "vim",
          "vimdoc",
          -- Add more languages as needed
        },
        highlight = { enable = true },
      })
    end,
  },

  -- LSP for code intelligence
  {
    "neovim/nvim-lspconfig",
    config = function()
      -- Your LSP configuration here
    end,
  },

  -- Completion
  {
    "hrsh7th/nvim-cmp",
    dependencies = {
      "hrsh7th/cmp-nvim-lsp",
      "hrsh7th/cmp-buffer",
      "hrsh7th/cmp-path",
    },
    config = function()
      -- Your completion configuration here
    end,
  },

  -- File explorer
  {
    "nvim-tree/nvim-tree.lua",
    config = function()
      require("nvim-tree").setup()
    end,
  },

  -- Fuzzy finder
  {
    "nvim-telescope/telescope.nvim",
    dependencies = {
      "nvim-lua/plenary.nvim",
    },
    config = function()
      require("telescope").setup()
    end,
  },
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Acknowledgments

- Created with [RLabs Theme Generator](website-url)
- Inspired by modern Neovim ecosystem and optimal readability research

## License

MIT License - see [LICENSE](LICENSE) for details

---

💡 **Tip**: For the best experience, use a terminal that supports true colors (like iTerm2, Alacritty, or kitty) and a font with programming ligatures (like JetBrains Mono or Fira Code).

🐛 **Issues?** Report them on the [Issue Tracker](https://github.com/${userName}/${themeNameKebab}/issues)
