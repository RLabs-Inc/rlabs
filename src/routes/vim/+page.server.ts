import type { PageServerLoad, Actions } from './$types';
import { zipSync } from 'fflate';

import { replaceColorPlaceholders } from '$lib/utils/vim/export';
import { getPublicThemes, getThemeById } from '$lib/server/vscode/themes';

// Import all template files
const vimTemplateFiles = import.meta.glob(
  [
    '/vim-template/**/*.vim', // All Vim files
    '/vim-template/**/*.md', // README and other markdown files
    '/vim-template/LICENSE' // License file
  ],
  {
    query: '?raw',
    import: 'default',
    eager: true
  }
);

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.auth.userId) {
    // redirect(307, '/sign-in');
  }

  const themes = await getPublicThemes();

  return { themes };
};

// Import logo separately
const logo = import.meta.glob('/vim-template/images/RLabs-Lamp.png', {
  query: '?inline',
  import: 'default',
  eager: true
}) as Record<string, string>;

export const actions: Actions = {
  download: async ({ request }) => {
    const formData = await request.formData();
    const themeId = formData.get('themeId') as string;
    if (!themeId) {
      return { success: false, error: 'No theme ID provided' };
    }
    const themeData = await getThemeById(parseInt(themeId));
    if (!themeData) {
      return { success: false, error: 'Theme not found' };
    }

    try {
      if (!themeData || !themeData.name) {
        return { success: false, error: 'Missing theme data' };
      }

      const themeNameKebab = themeData.name.toLowerCase().replace(/\s+/g, '-');
      const base64Logo = Object.values(logo)[0].split(',')[1];
      const zipObj: Record<string, Uint8Array> = {};

      // Process template files
      for (const [filePath, fileData] of Object.entries(vimTemplateFiles)) {
        const content = fileData as string;
        let targetPath: string;

        if (filePath === '/vim-template/README.md') {
          // Place README at root
          let readme = content;
          readme = readme.replace(/\${themeName}/g, themeData.name);
          readme = readme.replace(/\${themeNameKebab}/g, themeNameKebab);
          targetPath = `${themeNameKebab}/README.md`;
          zipObj[targetPath] = Buffer.from(readme);
        } else if (filePath === '/vim-template/LICENSE') {
          // Place LICENSE at root
          let license = content;
          license = license.replace(/\${year}/g, new Date().getFullYear().toString());
          targetPath = `${themeNameKebab}/LICENSE`;
          zipObj[targetPath] = Buffer.from(license);
        } else if (filePath === '/vim-template/theme.vim') {
          // Main theme file goes in colors directory
          const processedContent = replaceColorPlaceholders(content, themeData)
            .replace(/\${themeName}/g, themeData.name)
            .replace(/\${themeNameKebab}/g, themeNameKebab)
            .replace(/\${author}/g, themeData.userName);
          targetPath = `${themeNameKebab}/colors/${themeNameKebab}.vim`;
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath.includes('/vim-template/colors/theme/')) {
          // Theme components go in colors/theme directory
          const relativePath = filePath.replace('/vim-template/colors/theme/', '');
          targetPath = `${themeNameKebab}/colors/theme/${relativePath}`;
          const processedContent = replaceColorPlaceholders(content, themeData);
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath === '/vim-template/images/RLabs-Lamp.png') {
          // Place logo in images directory
          targetPath = `${themeNameKebab}/images/RLabs-Lamp.png`;
          zipObj[targetPath] = Buffer.from(base64Logo, 'base64');
        }
      }

      // Add plugin directory
      zipObj[`${themeNameKebab}/plugin/${themeNameKebab}.vim`] = Buffer.from(
        `" ${themeData.name} - Plugin configuration
" Author: ${themeData.userName}

if exists('g:loaded_${themeNameKebab}')
  finish
endif
let g:loaded_${themeNameKebab} = 1

" Set up any plugin-specific configuration here
`
      );

      // Add GitHub workflow for CI/CD
      zipObj[`${themeNameKebab}/.github/workflows/ci.yml`] = Buffer.from(
        `name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        vim-version: ['v8.2.2434', 'v9.0.0000']
        neovim-version: ['v0.5.0', 'stable', 'nightly']

    steps:
      - uses: actions/checkout@v3

      - name: Install Vim
        uses: rhysd/action-setup-vim@v1
        with:
          version: \${{ matrix.vim-version }}

      - name: Install Neovim
        uses: rhysd/action-setup-vim@v1
        with:
          neovim: true
          version: \${{ matrix.neovim-version }}

      - name: Run theme tests
        run: |
          mkdir -p ~/.vim/colors ~/.vim/plugin
          cp -r colors/* ~/.vim/colors/
          cp -r plugin/* ~/.vim/plugin/
          
          # Test in Vim
          vim -Es -u test/test.vim -c 'quit'
          
          # Test in Neovim
          nvim --headless -u test/test.vim -c 'quit'
          
          # Additional language tests
          for test_file in test/languages/*.{js,py,rs,go}; do
            if [ -f "$test_file" ]; then
              vim -Es -u NONE -c "colorscheme ${themeNameKebab}" -c "syntax on" -c "source $test_file" -c 'quit'
              nvim --headless -u NONE -c "colorscheme ${themeNameKebab}" -c "syntax on" -c "source $test_file" -c 'quit'
            fi
          done

  release:
    needs: test
    runs-on: ubuntu-latest
    if: startsWith(github.ref, 'refs/tags/')

    steps:
      - uses: actions/checkout@v3

      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: |
            LICENSE
            README.md
            colors/*.vim
            plugin/*.vim
          body_path: CHANGELOG.md
          draft: false
          prerelease: false
`
      );

      // Add test directory with sample files
      zipObj[`${themeNameKebab}/test/languages/sample.js`] = Buffer.from(
        `// JavaScript sample
import { useState, useEffect } from 'react';

const CONSTANT = 'unchanging';
let variable = 'changeable';

/**
 * A sample React component
 * @param {Object} props Component properties
 */
function SampleComponent({ title }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Cleanup');
  }, []);

  return count < 10 ? count : 'Too high';
}

export default SampleComponent;
`
      );

      zipObj[`${themeNameKebab}/test/languages/sample.py`] = Buffer.from(
        `# Python sample
from typing import List, Optional
import asyncio

class Sample:
    """A sample Python class."""
    
    def __init__(self, name: str):
        self.name = name
        self._private = 42
    
    async def process(self, items: List[str]) -> Optional[dict]:
        try:
            result = {'status': 'success', 'items': len(items)}
            await asyncio.sleep(1)
            return result
        except Exception as e:
            print(f"Error: {e}")
            return None

if __name__ == '__main__':
    sample = Sample("test")
    asyncio.run(sample.process(['a', 'b', 'c']))
`
      );

      zipObj[`${themeNameKebab}/test/languages/sample.rs`] = Buffer.from(
        `// Rust sample
use std::collections::HashMap;

#[derive(Debug)]
struct Sample<T> {
    data: T,
    meta: HashMap<String, String>,
}

impl<T> Sample<T> {
    pub fn new(data: T) -> Self {
        Self {
            data,
            meta: HashMap::new(),
        }
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let sample = Sample::new(42);
    println!("Sample: {:?}", sample);
    Ok(())
}
`
      );

      zipObj[`${themeNameKebab}/test/languages/sample.go`] = Buffer.from(
        `// Go sample
package main

import (
    "fmt"
    "sync"
)

type Sample struct {
    data string
    mu   sync.Mutex
}

func (s *Sample) Process() error {
    s.mu.Lock()
    defer s.mu.Unlock()
    
    if s.data == "" {
        return fmt.Errorf("empty data")
    }
    
    return nil
}

func main() {
    sample := &Sample{data: "test"}
    if err := sample.Process(); err != nil {
        panic(err)
    }
}
`
      );

      // Add main test file
      zipObj[`${themeNameKebab}/test/test.vim`] = Buffer.from(
        `" Test file for ${themeData.name} theme
" This file contains sample code snippets to verify theme colors

" Load the theme
colorscheme ${themeNameKebab}

" Function definition
function! TestFunction(param1, param2)
  let variable = "string value"
  let number = 42
  let boolean = v:true
  
  if number > 0
    echo "Positive number"
  endif
  
  return variable
endfunction

" Class-like structure
let s:MyClass = {}

function! s:MyClass.new()
  let instance = copy(self)
  return instance
endfunction

function! s:MyClass.method()
  throw "Not implemented"
endfunction

" Comments
" Single line comment
"" Double comment
""" Triple comment
" TODO: Todo comment
" FIXME: Fix comment
" NOTE: Note comment

" Language constructs
try
  throw "Error"
catch
  echo "Caught error"
finally
  echo "Cleanup"
endtry

" Special syntax
let regex = /^test.*$/
let array = ['one', 'two', 'three']
let dict = {'key': 'value', 'number': 42}

" Run some tests
call TestFunction("param1", "param2")
let instance = s:MyClass.new()
call instance.method()
`
      );

      // Add CHANGELOG.md
      zipObj[`${themeNameKebab}/CHANGELOG.md`] = Buffer.from(
        `# Changelog

## [1.0.0] - ${new Date().toISOString().split('T')[0]}

### Added
- Initial release
- Basic theme structure and colors
- Support for various programming languages
- Terminal colors
- Plugin integration
`
      );

      // Add .gitignore
      zipObj[`${themeNameKebab}/.gitignore`] = Buffer.from(
        `# Vim/Neovim
*.swp
*.swo
*~
.netrwhist

# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# macOS
.DS_Store
.AppleDouble
.LSOverride

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Linux
.directory
.Trash-*

# IDE/Editor specific
.idea/
.vscode/
*.sublime-workspace
*.sublime-project
`
      );

      // Add package.json for package managers
      zipObj[`${themeNameKebab}/package.json`] = Buffer.from(
        JSON.stringify(
          {
            name: themeNameKebab,
            version: '1.0.0',
            description: `${themeData.name} - A beautiful ${themeData.isDark ? 'dark' : 'light'} theme for Vim/Neovim`,
            author: themeData.userName,
            license: 'MIT',
            repository: {
              type: 'git',
              url: `https://github.com/${themeData.userName}/${themeNameKebab}`
            },
            bugs: {
              url: `https://github.com/${themeData.userName}/${themeNameKebab}/issues`
            },
            keywords: [
              'vim',
              'neovim',
              'theme',
              'colorscheme',
              themeData.isDark ? 'dark-theme' : 'light-theme'
            ],
            engines: {
              vim: '^8.0.0',
              nvim: '>=0.5.0'
            },
            scripts: {
              test: 'bash scripts/test.sh',
              'test:vim': 'bash scripts/test.sh vim',
              'test:nvim': 'bash scripts/test.sh nvim'
            }
          },
          null,
          2
        )
      );

      // Generate theme zip
      const zipBuffer = Buffer.from(zipSync(zipObj));

      return {
        success: true,
        zipBuffer,
        fileName: `${themeNameKebab}-vim-theme.zip`
      };
    } catch (err) {
      console.error('Error generating theme:', err);
      return {
        success: false,
        error: 'Failed to generate theme'
      };
    }
  }
};
