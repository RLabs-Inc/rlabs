import { read } from '$app/server';
import type { Actions, PageServerLoad } from './$types';
import AdmZip from 'adm-zip';
import { getPublicThemes, getThemeById, updateThemeDownloads } from '$lib/server/vscode/themes';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';
import logoURL from '../../../vsix-template/images/RLabs-Lamp.png';

const logoData = read(logoURL);
const logo = await logoData.arrayBuffer();

const vsixTemplateFiles = import.meta.glob('/vsix-template/**/*', {
  query: '?raw',
  import: 'default',
  eager: true
});

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.auth.userId) {
    // redirect(307, '/sign-in');
  }

  const themes = await getPublicThemes();

  return { themes };
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

    const zip = new AdmZip();

    for (const [filePath, fileData] of Object.entries(vsixTemplateFiles)) {
      if (filePath === '/vsix-template/package.json') {
        let jsonData = fileData as string;
        jsonData = jsonData.replace(/\${themeName}/g, theme.name);
        jsonData = jsonData.replace(
          /\${themeNameKebab}/g,
          theme.name.toLowerCase().replace(/\s+/g, '-')
        );
        jsonData = jsonData.replace(/\${uiTheme}/g, theme.isDark ? 'vs-dark' : 'vs');
        zip.addFile('extension/package.json', Buffer.from(jsonData), 'utf-8');
      } else if (filePath === '/vsix-template/README.md') {
        let readme = fileData as string;
        readme = readme.replace(/\${themeName}/g, theme.name);
        zip.addFile('extension/README.md', Buffer.from(readme), 'utf-8');
      } else if (filePath === '/vsix-template/images/RLabs-Lamp.png') {
        zip.addFile('extension/images/RLabs-Lamp.png', Buffer.from(logo));
      } else if (filePath === '/vsix-template/LICENSE') {
        let license = fileData as string;
        license = license.replace(/\${year}/g, new Date().getFullYear().toString());
        zip.addFile('extension/LICENSE', Buffer.from(license), 'utf-8');
      }
    }

    const { themeObject } = generateSemanticThemeJSON(
      theme.name,
      theme.uiColors,
      theme.syntaxColors,
      theme.ansiColors
    );

    zip.addFile('extension/themes/theme.json', Buffer.from(JSON.stringify(themeObject, null, 2)));
    const vsixBuffer = await zip.toBufferPromise();
    await updateThemeDownloads(theme);

    return { vsixBuffer: vsixBuffer, success: true };
  }
};
