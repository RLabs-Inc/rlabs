import type { Actions, PageServerLoad } from './$types';
import {
  getThemeById,
  getUserThemes,
  downloadTheme,
  updateThemeDownloads
} from '$lib/server/vscode/themes';

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

    const vsixBuffer = await downloadTheme(theme);
    await updateThemeDownloads(theme);

    return { vsixBuffer: vsixBuffer, success: true };
  }
};
