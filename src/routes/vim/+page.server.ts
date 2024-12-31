import type { PageServerLoad, Actions } from './$types';
import { zipSync } from 'fflate';

import { replaceColorPlaceholders } from '$lib/utils/vim/export-vim';
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
      const themeNameUnderline = themeData.name.toLowerCase().replace(/\s+/g, '_');
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
        } else if (filePath === '/vim-template/colors/theme/index.vim') {
          // Main theme file goes in colors directory
          const processedContent = content
            .replace(/\${themeName}/g, themeData.name)
            .replace(/\${themeNameKebab}/g, themeNameKebab)
            .replace(/\${themeNameUnderline}/g, themeNameUnderline)
            .replace(/\${author}/g, themeData.userName);
          targetPath = `${themeNameKebab}/colors/theme/index.vim`;
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath === '/vim-template/colors/theme.vim') {
          // Main theme file goes in colors directory
          const processedContent = replaceColorPlaceholders(content, themeData)
            .replace(/\${themeName}/g, themeData.name)
            .replace(/\${themeNameKebab}/g, themeNameKebab)
            .replace(/\${themeNameUnderline}/g, themeNameUnderline)
            .replace(/\${author}/g, themeData.userName);
          targetPath = `${themeNameKebab}/colors/${themeNameKebab}.vim`;
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath === '/vim-template/colors/theme/utils/options.vim') {
          // Main theme file goes in colors directory
          const processedContent = content
            .replace(/\${themeName}/g, themeData.name)
            .replace(/\${themeNameKebab}/g, themeNameKebab)
            .replace(/\${themeNameUnderline}/g, themeNameUnderline)
            .replace(/\${author}/g, themeData.userName);
          targetPath = `${themeNameKebab}/colors/theme/utils/options.vim`;
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath.includes('/vim-template/colors/theme/')) {
          // Theme components go in colors/theme directory
          const relativePath = filePath.replace('/vim-template/colors/theme/', '');
          targetPath = `${themeNameKebab}/colors/theme/${relativePath}`;
          const processedContent = content;
          processedContent.replace(/\${themeNameUnderline}/g, themeNameUnderline);
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath.includes('/vim-template/colors/theme/utils/')) {
          const relativePath = filePath.replace('/vim-template/colors/theme/utils/', '');
          targetPath = `${themeNameKebab}/colors/theme/utils/${relativePath}`;
          const processedContent = replaceColorPlaceholders(content, themeData);
          processedContent.replace(/\${themeNameUnderline}/g, themeNameUnderline);
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

if exists('g:loaded_${themeNameUnderline}')
  finish
endif
let g:loaded_${themeNameUnderline} = 1

" Set up any plugin-specific configuration here
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
