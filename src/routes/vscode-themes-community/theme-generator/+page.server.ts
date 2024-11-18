import type { PageServerLoad, Actions } from './$types';
import { getUserThemes } from '$lib/server/vscode/themes';
import JSZip from 'jszip';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';

const vsixTemplateFiles = import.meta.glob('/vsix-template/**/*', {
  query: '?raw',
  import: 'default',
  eager: true
});

export const load: PageServerLoad = async ({ locals, url }) => {
  const { userId } = locals.auth;
  if (!userId) {
    return { userId: null, themes: [] };
  }

  const themes = await getUserThemes(userId);
  const id = url.searchParams.get('id');
  return { userId, themes: themes, id };
};

export const actions: Actions = {
  downloadTheme: async ({ request }) => {
    const formData = await request.formData();
    const isDark = formData.get('isDark');
    const uiColors = JSON.parse(formData.get('uiColors') as string);
    const syntaxColors = JSON.parse(formData.get('syntaxColors') as string);
    const ansiColors = JSON.parse(formData.get('ansiColors') as string);

    if (!isDark || !uiColors || !syntaxColors || !ansiColors) {
      return { success: false, error: 'No color sets provided' };
    }

    const zip = new JSZip();
    const extensionFolder = zip.folder('extension');
    if (!extensionFolder) {
      return { success: false, error: 'Failed to create extension folder' };
    }

    for (const [filePath, fileData] of Object.entries(vsixTemplateFiles)) {
      if (filePath === '/vsix-template/package.json') {
        let jsonData = fileData as string;
        jsonData = jsonData.replace(/\${themeName}/g, 'Generated Theme');
        jsonData = jsonData.replace(/\${themeNameKebab}/g, 'generated-theme');
        jsonData = jsonData.replace(/\${uiTheme}/g, isDark ? 'vs-dark' : 'vs');
        extensionFolder.file('package.json', jsonData);
      } else if (filePath === '/vsix-template/README.md') {
        let readme = fileData as string;
        readme = readme.replace(/\${themeName}/g, 'Generated Theme');
        extensionFolder.file('README.md', readme);
      } else if (filePath === '/vsix-template/images/RLabs-Lamp.png') {
        const imageData = fileData as string;
        extensionFolder.file('images/RLabs-Lamp.png', imageData);
      } else if (filePath === '/vsix-template/LICENSE') {
        let license = fileData as string;
        license = license.replace(/\${year}/g, new Date().getFullYear().toString());
        extensionFolder.file('LICENSE', license);
      }
    }

    const { themeObject } = generateSemanticThemeJSON(
      'Generated Theme',
      uiColors,
      syntaxColors,
      ansiColors
    );

    const themesFolder = extensionFolder.folder('themes');
    if (!themesFolder) {
      return { success: false, error: 'Failed to create themes folder' };
    }
    themesFolder.file('theme.json', JSON.stringify(themeObject, null, 2));
    const vsixBuffer = await zip.generateAsync({ type: 'nodebuffer' });

    return { vsixBuffer: vsixBuffer, success: true };
  }
};
