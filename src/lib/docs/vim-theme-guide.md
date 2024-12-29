# Vim/Neovim Theme Installation and Usage Guide

## Table of Contents

- [Vim/Neovim Theme Installation and Usage Guide](#vimneovim-theme-installation-and-usage-guide)
  - [Table of Contents](#table-of-contents)
  - [Theme Generator Website](#theme-generator-website)
  - [Installation Methods](#installation-methods)
    - [Using a Plugin Manager (Recommended)](#using-a-plugin-manager-recommended)
      - [vim-plug](#vim-plug)
      - [packer.nvim](#packernvim)
      - [lazy.nvim](#lazynvim)
    - [Manual Installation](#manual-installation)
  - [Configuration](#configuration)
    - [Basic Setup](#basic-setup)
    - [Advanced Configuration](#advanced-configuration)
  - [Features](#features)
  - [Troubleshooting](#troubleshooting)
    - [Common Issues](#common-issues)
    - [Terminal Setup](#terminal-setup)
  - [Development](#development)
    - [Local Testing](#local-testing)
    - [Contributing](#contributing)
    - [Creating Issues](#creating-issues)

## Theme Generator Website

The RLabs Theme Generator allows you to create custom themes for Vim and Neovim with a user-friendly interface:

1. Visit the theme generator at [website-url]
2. Choose your color scheme using the color picker or generate one automatically
3. Customize individual syntax highlighting colors
4. Preview your theme in real-time
5. Download the theme package when satisfied

## Installation Methods

### Using a Plugin Manager (Recommended)

#### vim-plug

Add to your `~/.vimrc` or `~/.config/nvim/init.vim`:

```vim
Plug 'username/theme-name'
```

Then run:

```vim
:PlugInstall
```

#### packer.nvim

Add to your `~/.config/nvim/lua/plugins.lua`:

```lua
use 'username/theme-name'
```

Then run:

```lua
:PackerSync
```

#### lazy.nvim

Add to your plugins configuration:

```lua
{
  'username/theme-name',
  lazy = false,
  priority = 1000
}
```

### Manual Installation

1. Download the theme package from the generator
2. Extract the contents
3. Copy files to your Vim/Neovim configuration directory:
   - Vim: `~/.vim/`
   - Neovim: `~/.config/nvim/`

## Configuration

### Basic Setup

1. Add to your configuration file (`~/.vimrc` or `~/.config/nvim/init.vim`):

```vim
" Enable true color support (recommended)
if has('termguicolors')
  set termguicolors
endif

" Set the color scheme
colorscheme theme-name
```

2. For Neovim Lua configuration (`~/.config/nvim/init.lua`):

```lua
-- Enable true color support
vim.opt.termguicolors = true

-- Set the color scheme
vim.cmd('colorscheme theme-name')
```

### Advanced Configuration

The theme supports various customization options:

```vim
" Set before loading the theme
let g:theme_name_options = {
  \ 'transparent': v:false,      " Enable transparent background
  \ 'italic_comments': v:true,   " Use italics for comments
  \ 'italic_keywords': v:false,  " Use italics for keywords
  \ 'bold_functions': v:true,    " Use bold for functions
  \ }

" Load the theme
colorscheme theme-name
```

Neovim Lua equivalent:

```lua
vim.g.theme_name_options = {
  transparent = false,     -- Enable transparent background
  italic_comments = true,  -- Use italics for comments
  italic_keywords = false, -- Use italics for keywords
  bold_functions = true,  -- Use bold for functions
}

vim.cmd('colorscheme theme-name')
```

## Features

- True color support
- Carefully selected colors for optimal readability
- Consistent syntax highlighting across languages
- Support for popular plugins:
  - TreeSitter
  - LSP
  - Telescope
  - NERDTree/nvim-tree
  - Airline/Lightline
  - Git signs/Git gutter
  - And more...
- Terminal colors included
- Both GUI and terminal support
- Semantic highlighting support
- Light and dark variants

## Troubleshooting

### Common Issues

1. **Colors don't look right**

   - Ensure `termguicolors` is enabled
   - Check if your terminal supports true color
   - Verify `$TERM` is set correctly (e.g., `xterm-256color`)

2. **Italics not working**

   - Ensure your terminal supports italics
   - Add to your configuration:
     ```vim
     let &t_ZH="\e[3m"
     let &t_ZR="\e[23m"
     ```

3. **Theme not found**
   - Verify installation path
   - Check plugin manager installation
   - Ensure theme name matches exactly

### Terminal Setup

For optimal display, ensure your terminal emulator:

- Supports true color (24-bit color)
- Has proper font configuration
- Uses a compatible terminal theme

## Development

### Local Testing

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test        # Test both Vim and Neovim
   npm test:vim    # Test Vim only
   npm test:nvim   # Test Neovim only
   ```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

### Creating Issues

When reporting issues, please include:

- Vim/Neovim version
- Terminal emulator and version
- Operating system
- Configuration file
- Screenshots if applicable

---

For more information and updates, visit:

- [GitHub Repository](https://github.com/username/theme-name)
- [Issue Tracker](https://github.com/username/theme-name/issues)
- [RLabs Theme Generator](website-url)
