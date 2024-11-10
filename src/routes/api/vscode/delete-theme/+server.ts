import { deleteTheme } from '$lib/server/vscode/themes';

export async function DELETE({ url, locals }) {
  const themeId = url.searchParams.get('id');
  if (!themeId) {
    return new Response('No theme provided', { status: 400 });
  }
  const userId = locals.auth.userId;
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    await deleteTheme(parseInt(themeId), userId);
    return new Response(null, { status: 200 });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 400 });
    }
    return new Response('Unknown error', { status: 400 });
  }
}
