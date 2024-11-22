import { saveNewTheme, updateTheme } from '$lib/server/vscode/themes';
import type { Theme } from '$lib/types/theme.js';

export async function POST({ request }) {
  const theme: Theme = await request.json();
  if (!theme) {
    return new Response('No theme provided', { status: 400 });
  }
  if (theme.id === 0) {
    try {
      const newTheme = await saveNewTheme(theme);
      return new Response(JSON.stringify(newTheme), { status: 200 });
    } catch (saveError) {
      if (saveError instanceof Error) {
        if (saveError.message.includes('Theme with this name already exists')) {
          return new Response('Theme with this name already exists', { status: 409 });
        } else {
          return new Response(saveError.message, { status: 400 });
        }
      }
      return new Response('Unknown error', { status: 400 });
    }
  } else {
    try {
      const updatedTheme = await updateTheme(theme);
      return new Response(JSON.stringify(updatedTheme), { status: 200 });
    } catch (updateError) {
      console.log(updateError);
      if (updateError instanceof Error) {
        return new Response(updateError.message, { status: 400 });
      }
      return new Response('Unknown error', { status: 400 });
    }
  }
}
