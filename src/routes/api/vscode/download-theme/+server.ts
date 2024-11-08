import { getThemeById, downloadTheme, updateThemeDownloads } from '$lib/server/vscode/themes';

export async function GET({ url }) {
  console.log('download-theme');
  const id = url.searchParams.get('id');
  if (!id) {
    return new Response('No theme ID provided', { status: 400 });
  }
  console.log('got id');
  const theme = await getThemeById(parseInt(id));
  console.log('got theme');
  if (!theme) {
    return new Response('Theme not found', { status: 404 });
  }

  await updateThemeDownloads(theme);
  console.log('updated theme downloads');
  const vsixBuffer = await downloadTheme(theme);
  console.log('downloaded theme');
  if (!vsixBuffer) {
    return new Response('Failed to download theme', { status: 500 });
  }

  return new Response(vsixBuffer, {
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  });
}
