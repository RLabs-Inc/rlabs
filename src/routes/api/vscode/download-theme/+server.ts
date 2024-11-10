import { getThemeById, downloadTheme, updateThemeDownloads } from '$lib/server/vscode/themes';

export async function GET({ url }) {
  const id = url.searchParams.get('id');
  if (!id) {
    return new Response('No theme ID provided', { status: 400 });
  }
  const theme = await getThemeById(parseInt(id));
  if (!theme) {
    return new Response('Theme not found', { status: 404 });
  }

  await updateThemeDownloads(theme);
  const vsixBuffer = await downloadTheme(theme);
  if (!vsixBuffer) {
    return new Response('Failed to download theme', { status: 500 });
  }

  return new Response(vsixBuffer, {
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  });
}
