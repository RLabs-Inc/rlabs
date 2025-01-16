import type { Actions, PageServerLoad } from './$types';
import { zipSync } from 'fflate';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';
import { getThemeById, getUserThemes, updateThemeDownloads } from '$lib/server/vscode/themes';
import { replaceColorPlaceholders } from '$lib/utils/vim/export-lua';

// Import all template files
const luaTemplateFiles = import.meta.glob(
  [
    '/templates/lua-template/**/*.lua', // All Lua files
    '/templates/lua-template/**/*.md', // README and other markdown files
    '/templates/lua-template/LICENSE', // License file
    '/templates/lua-template/plugin/**/*' // Plugin files
  ],
  {
    query: '?raw',
    import: 'default',
    eager: true
  }
);
const vsixTemplateFiles = import.meta.glob('/templates/vsix-template/**/*', {
  query: '?raw',
  import: 'default',
  eager: true
});
const logo = import.meta.glob('/templates/vsix-template/images/RLabs-Lamp.png', {
  query: '?inline',
  import: 'default',
  eager: true
}) as Record<string, string>;

export const load: PageServerLoad = async ({ locals }) => {
  const { userId } = locals.auth;
  if (!userId) {
    return { userId: null, themes: [] };
  }

  const themes = await getUserThemes(userId);

  return { userId, themes: themes };
};

export const actions: Actions = {
  // Download VSCode theme
  downloadTheme: async ({ request }) => {
    const formData = await request.formData();
    const themeId = formData.get('themeId') as string;
    if (!themeId) {
      return { success: false, error: 'No theme ID provided' };
    }
    const theme = await getThemeById(parseInt(themeId));
    if (!theme) {
      return { success: false, error: 'Theme not found' };
    }

    const base64Data = Object.values(logo)[0].split(',')[1];

    const zipObj: Record<string, Uint8Array> = {};

    for (const [filePath, fileData] of Object.entries(vsixTemplateFiles)) {
      if (filePath === '/templates/vsix-template/package.json') {
        let jsonData = fileData as string;
        jsonData = jsonData.replace(/\${themeName}/g, theme.name);
        jsonData = jsonData.replace(
          /\${themeNameKebab}/g,
          theme.name.toLowerCase().replace(/\s+/g, '-')
        );
        jsonData = jsonData.replace(/\${uiTheme}/g, theme.isDark ? 'vs-dark' : 'vs');
        zipObj['extension/package.json'] = Buffer.from(jsonData);
      } else if (filePath === '/templates/vsix-template/README.md') {
        let readme = fileData as string;
        readme = readme.replace(/\${themeName}/g, theme.name);
        zipObj['extension/README.md'] = Buffer.from(readme);
      } else if (filePath === '/templates/vsix-template/images/RLabs-Lamp.png') {
        zipObj['extension/images/RLabs-Lamp.png'] = Buffer.from(base64Data, 'base64');
      } else if (filePath === '/templates/vsix-template/LICENSE') {
        let license = fileData as string;
        license = license.replace(/\${year}/g, new Date().getFullYear().toString());
        zipObj['extension/LICENSE'] = Buffer.from(license);
      }
    }

    const { themeObject } = generateSemanticThemeJSON(
      theme.name,
      theme.uiColors,
      theme.syntaxColors,
      theme.ansiColors
    );

    zipObj['extension/themes/theme.json'] = Buffer.from(JSON.stringify(themeObject, null, 2));
    const vsixBuffer = Buffer.from(zipSync(zipObj));
    await updateThemeDownloads(theme);

    return { vsixBuffer: vsixBuffer, success: true };
  },
  // Download Vim theme
  downloadVim: async ({ request }) => {
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
      const themeNameSnake = themeData.name.toLowerCase().replace(/\s+/g, '_');
      const base64Logo = Object.values(logo)[0].split(',')[1];
      const zipObj: Record<string, Uint8Array> = {};

      // Process template files
      for (const [filePath, fileData] of Object.entries(luaTemplateFiles)) {
        const content = fileData as string;
        let targetPath: string;

        if (
          filePath === '/templates/lua-template/README.md' ||
          filePath === '/templates/lua-template/QUICK_START.md'
        ) {
          // Place README and QUICK_START at root
          let processedContent = content;
          processedContent = processedContent.replace(/\${themeName}/g, themeData.name);
          processedContent = processedContent.replace(/\${themeNameKebab}/g, themeNameKebab);
          processedContent = processedContent.replace(/\${userName}/g, themeData.userName);
          processedContent = processedContent.replace(/\${isDark}/g, themeData.isDark.toString());
          targetPath = `${themeNameKebab}/${filePath.split('/').pop()}`;
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath === '/templates/lua-template/LICENSE') {
          // Place LICENSE at root
          let license = content;
          license = license.replace(/\${year}/g, new Date().getFullYear().toString());
          targetPath = `${themeNameKebab}/LICENSE`;
          zipObj[targetPath] = Buffer.from(license);
        } else if (filePath === '/templates/lua-template/plugin/theme.lua') {
          // Process plugin file
          targetPath = `${themeNameKebab}/plugin/${themeNameKebab}.lua`;
          const processedContent = content
            .replace(/\${themeName}/g, themeData.name)
            .replace(/\${themeNameKebab}/g, themeNameKebab)
            .replace(/\${themeNameSnake}/g, themeNameSnake)
            .replace(
              /\${themeNamePascal}/g,
              themeData.name
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('')
            )
            .replace(/\${author}/g, themeData.userName);
          zipObj[targetPath] = Buffer.from(processedContent);
        } else if (filePath.includes('/templates/lua-template/lua/theme-name/')) {
          // Process Lua theme files
          const relativePath = filePath.replace('/templates/lua-template/lua/theme-name/', '');
          targetPath = `${themeNameKebab}/lua/${themeNameKebab}/${relativePath}`;
          const processedContent = replaceColorPlaceholders(content, themeData)
            .replace(/\${themeName}/g, themeData.name)
            .replace(/\${themeNameKebab}/g, themeNameKebab)
            .replace(/\${themeNameSnake}/g, themeNameSnake)
            .replace(/\${author}/g, themeData.userName)
            .replace(/theme-name/g, themeNameKebab); // Replace Lua module name
          zipObj[targetPath] = Buffer.from(processedContent);
        }
      }

      zipObj[`${themeNameKebab}/colors/${themeNameKebab}.lua`] = Buffer.from(
        `return require('${themeNameKebab}').setup()`
      );

      // Add logo
      zipObj[`${themeNameKebab}/images/RLabs-Lamp.png`] = Buffer.from(base64Logo, 'base64');

      // Add package.json for package managers
      zipObj[`${themeNameKebab}/package.json`] = Buffer.from(
        JSON.stringify(
          {
            name: themeNameKebab,
            version: '1.0.0',
            description: `${themeData.name} - A beautiful ${themeData.isDark ? 'dark' : 'light'} theme for Neovim`,
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
              'neovim',
              'theme',
              'colorscheme',
              'lua',
              'treesitter',
              'lsp',
              themeData.isDark ? 'dark-theme' : 'light-theme'
            ],
            engines: {
              nvim: '>=0.5.0'
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
        fileName: `${themeNameKebab}-nvim-theme.zip`
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
