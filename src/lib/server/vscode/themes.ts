import { eq, desc } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { newThemes } from '$lib/server/db/schema';
import type { Theme } from '$lib/types/theme';
import { parseThemeFromDB } from '$lib/utils/vscode/theme';
import { generateVSIX } from '$lib/server/vscode/exportVSIX';

export async function getPublicThemes(): Promise<Theme[]> {
  const themes = await db
    .select()
    .from(newThemes)
    .where(eq(newThemes.isPublic, true))
    .orderBy(desc(newThemes.createdAt));
  const parsedThemes = themes.map(parseThemeFromDB);
  return parsedThemes;
}

export async function getThemeById(id: number): Promise<Theme | null> {
  const theme = await db.select().from(newThemes).where(eq(newThemes.id, id)).limit(1);
  return theme ? parseThemeFromDB(theme[0]) : null;
}

export async function updateThemeDownloads(theme: Theme): Promise<void> {
  await db
    .update(newThemes)
    .set({ downloads: theme.downloads + 1, updatedAt: theme.updatedAt })
    .where(eq(newThemes.id, theme.id));
}

export async function downloadTheme(theme: Theme): Promise<Buffer> {
  const vsixBuffer = await generateVSIX(theme);
  return vsixBuffer;
}
