import type { Actions, PageServerLoad } from './$types';
import { getUserThemes } from '$lib/server/vscode/themes';
import { zipSync } from 'fflate';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';

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

    const zipObj: Record<string, Uint8Array> = {};

    for (const [filePath, fileData] of Object.entries(vsixTemplateFiles)) {
      if (filePath === '/templates/vsix-template/package.json') {
        let jsonData = fileData as string;
        jsonData = jsonData.replace(/\${themeName}/g, 'Generated Theme');
        jsonData = jsonData.replace(/\${themeNameKebab}/g, 'generated-theme');
        jsonData = jsonData.replace(/\${uiTheme}/g, isDark ? 'vs-dark' : 'vs');
        zipObj['extension/package.json'] = Buffer.from(jsonData);
      } else if (filePath === '/templates/vsix-template/README.md') {
        let readme = fileData as string;
        readme = readme.replace(/\${themeName}/g, 'Generated Theme');
        zipObj['extension/README.md'] = Buffer.from(readme);
      } else if (filePath === '/templates/vsix-template/images/RLabs-Lamp.png') {
        const base64Data = Object.values(logo)[0].split(',')[1];
        zipObj['extension/images/RLabs-Lamp.png'] = Buffer.from(base64Data, 'base64');
      } else if (filePath === '/templates/vsix-template/LICENSE') {
        let license = fileData as string;
        license = license.replace(/\${year}/g, new Date().getFullYear().toString());
        zipObj['extension/LICENSE'] = Buffer.from(license);
      }
    }

    const { themeObject } = generateSemanticThemeJSON(
      'Generated Theme',
      uiColors,
      syntaxColors,
      ansiColors
    );

    zipObj['extension/themes/theme.json'] = Buffer.from(JSON.stringify(themeObject, null, 2));
    const vsixBuffer = Buffer.from(zipSync(zipObj));

    return { vsixBuffer: vsixBuffer, success: true };
  }
};
