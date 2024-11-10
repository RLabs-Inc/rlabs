import type { PageServerLoad } from './$types';
import { getUserThemes } from '$lib/server/vscode/themes';

export const load: PageServerLoad = async ({ locals }) => {
  const { userId } = locals.auth;
  if (!userId) {
    return { userId: null, themes: [] };
  }

  const themes = await getUserThemes(userId);

  return { userId, themes: themes };
};
