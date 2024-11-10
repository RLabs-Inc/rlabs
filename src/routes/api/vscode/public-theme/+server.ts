import { updateThemePublic } from '$lib/server/vscode/themes';
import type { Theme } from '$lib/types/theme.js';

export async function POST({ request }) {
  const theme: Theme = await request.json();
  if (!theme) {
    return new Response('No theme provided', { status: 400 });
  }
  try {
    await updateThemePublic(theme);
    return new Response(JSON.stringify(theme), { status: 200 });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 400 });
    }
    return new Response('Unknown error', { status: 400 });
  }
}
