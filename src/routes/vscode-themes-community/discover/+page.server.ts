import type { Actions, PageServerLoad } from './$types';
import { zipSync } from 'fflate';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';
import { getPublicThemes, getThemeById, updateThemeDownloads } from '$lib/server/vscode/themes';

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
  if (!locals.auth.userId) {
    // redirect(307, '/sign-in');
  }

  const themes = await getPublicThemes();

  return { themes };
};

// export const config: Config = {
//   runtime: 'nodejs20.x'
// };

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
  }
};
