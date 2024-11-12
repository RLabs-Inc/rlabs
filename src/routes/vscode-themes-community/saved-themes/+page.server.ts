import type { Actions, PageServerLoad } from './$types';
import JSZip from 'jszip';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';
import { getThemeById, getUserThemes, updateThemeDownloads } from '$lib/server/vscode/themes';

const vsixTemplateFiles = import.meta.glob('/vsix-template/**/*', {
  query: '?raw',
  import: 'default',
  eager: true
});

export const load: PageServerLoad = async ({ locals }) => {
  const { userId } = locals.auth;
  if (!userId) {
    return { userId: null, themes: [] };
  }

  const themes = await getUserThemes(userId);

  return { userId, themes: themes };
};

export const actions: Actions = {
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

    const zip = new JSZip();
    const extensionFolder = zip.folder('extension');
    if (!extensionFolder) {
      return { success: false, error: 'Failed to create extension folder' };
    }

    for (const [filePath, fileData] of Object.entries(vsixTemplateFiles)) {
      if (filePath === '/vsix-template/package.json') {
        let jsonData = fileData;
        jsonData = jsonData.replace(/\${themeName}/g, theme.name);
        jsonData = jsonData.replace(
          /\${themeNameKebab}/g,
          theme.name.toLowerCase().replace(/\s+/g, '-')
        );
        jsonData = jsonData.replace(/\${uiTheme}/g, theme.isDark ? 'vs-dark' : 'vs');
        extensionFolder.file('package.json', jsonData);
      } else if (filePath === '/vsix-template/README.md') {
        let readme = fileData;
        readme = readme.replace(/\${themeName}/g, theme.name);
        extensionFolder.file('README.md', readme);
      } else if (filePath === '/vsix-template/images/RLabs-Lamp.png') {
        const imageData = fileData;
        extensionFolder.file('images/RLabs-Lamp.png', imageData);
      } else if (filePath === '/vsix-template/LICENSE') {
        let license = fileData;
        license = license.replace(/\${year}/g, new Date().getFullYear());
        extensionFolder.file('LICENSE', license);
      }
    }

    const { themeObject } = generateSemanticThemeJSON(
      theme.name,
      theme.uiColors,
      theme.syntaxColors,
      theme.ansiColors
    );

    const themesFolder = extensionFolder.folder('themes');
    if (!themesFolder) {
      return { success: false, error: 'Failed to create themes folder' };
    }
    themesFolder.file('theme.json', JSON.stringify(themeObject, null, 2));
    const vsixBuffer = await zip.generateAsync({ type: 'nodebuffer' });
    await updateThemeDownloads(theme);

    return { vsixBuffer: vsixBuffer, success: true };
  }
};
