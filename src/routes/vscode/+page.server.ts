// import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.auth.userId) {
    // redirect(307, '/sign-in');
  }

  return {};
};
