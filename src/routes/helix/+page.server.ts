import type { PageServerLoad } from './$types';
import { getPublicThemes } from '$lib/server/vscode/themes';

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.auth.userId) {
    // redirect(307, '/sign-in');
  }

  const themes = await getPublicThemes();

  return { themes };
};
