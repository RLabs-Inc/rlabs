import type { PageServerLoad } from './$types';
import { getUserThemes } from '$lib/server/vscode/themes';

export const load: PageServerLoad = async ({ locals, url }) => {
  const { userId } = locals.auth;
  if (!userId) {
    return { userId: null, themes: [] };
  }

  const themes = await getUserThemes(userId);
  const id = url.searchParams.get('id');
  return { userId, themes: themes, id };
};
