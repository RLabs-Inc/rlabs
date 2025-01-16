# ${themeName}

A beautiful ${isDark ? 'dark' : 'light'} theme for Vim and Neovim, designed for optimal readability and a pleasant coding experience.

![Theme Preview](images/RLabs-Lamp.png)

## Features

- 🎨 Carefully selected colors for optimal readability
- 🔍 Consistent syntax highlighting across languages
- 🔌 Support for popular plugins
- 🖥️ Terminal colors included
- 💻 Both GUI and terminal support
- 🎯 Semantic highlighting support

## Quick Start

### Using Plugin Manager (recommended)

#### vim-plug

```vim
Plug '${userName}/${themeNameKebab}'
```

#### packer.nvim

```lua
use '${userName}/${themeNameKebab}'
```

#### lazy.nvim

```lua
{
  '${userName}/${themeNameKebab}',
  lazy = false,
  priority = 1000
}
```

### Manual Installation

1. Download this repository
2. Copy the files to your Vim/Neovim configuration directory:
   - Vim: `~/.vim/`
   - Neovim: `~/.config/nvim/`

## Usage

Add to your configuration file:

### Vim (`~/.vimrc`)

```vim
" Enable true colors (recommended)
if has('termguicolors')
  set termguicolors
endif

" Set the color scheme
colorscheme ${themeNameKebab}
```

### Neovim (`~/.config/nvim/init.lua`)

```lua
-- Enable true colors
vim.opt.termguicolors = true

-- Set the color scheme
vim.cmd('colorscheme ${themeNameKebab}')
```

## Customization

The theme supports various options that can be set before loading the colorscheme:

```vim
" Set before loading the theme
let g:${themeNameKebab}_options = {
  \ 'transparent': v:false,      " Enable transparent background
  \ 'italic_comments': v:true,   " Use italics for comments
  \ 'italic_keywords': v:false,  " Use italics for keywords
  \ 'bold_functions': v:true,    " Use bold for functions
  \ }
```

Or in Lua:

```lua
vim.g.${themeNameKebab}_options = {
  transparent = false,     -- Enable transparent background
  italic_comments = true,  -- Use italics for comments
  italic_keywords = false, -- Use italics for keywords
  bold_functions = true,  -- Use bold for functions
}
```

## Plugin Support

### Core Features

- ✅ TreeSitter - Enhanced syntax highlighting
- ✅ LSP - Language Server Protocol support
- ✅ Telescope - Fuzzy finder
- ✅ NERDTree/nvim-tree - File explorer
- ✅ Airline/Lightline - Status line
- ✅ Git signs/Git gutter - Git integration

### Recommended Syntax Plugins

This theme is optimized to work with these popular syntax plugins:

#### Web Development

- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) - Recommended for all languages
- [vim-svelte](https://github.com/evanleck/vim-svelte) - Svelte 5 support
- [vim-jsx-pretty](https://github.com/MaxMEllon/vim-jsx-pretty) - React/JSX
- [vim-vue](https://github.com/posva/vim-vue) - Vue
- [astro-vim](https://github.com/wuelnerdotexe/vim-astro) - Astro
- [vim-solidity](https://github.com/tomlion/vim-solidity) - Solid

#### Framework-specific

- [vim-nextjs](https://github.com/shuding/vim-nextjs) - Next.js
- [vim-remix](https://github.com/remix-run/vim-remix) - Remix
- [vim-nuxt](https://github.com/posva/vim-nuxt) - Nuxt.js

And many more! The theme provides consistent colors across all supported syntaxes.

## Requirements

- Vim >= 8.0 or Neovim >= 0.5.0
- True color terminal support (recommended)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## Acknowledgments

- Created with [RLabs Theme Generator](website-url)
- Inspired by modern design principles and optimal readability research

## License

MIT License - see [LICENSE](LICENSE) for details

---

💡 **Tip**: For the best experience, use a terminal that supports true colors and a font with programming ligatures.

🐛 **Issues?** Report them on the [Issue Tracker](https://github.com/${userName}/${themeNameKebab}/issues)
