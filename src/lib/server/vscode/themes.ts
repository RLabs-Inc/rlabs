/* eslint-disable @typescript-eslint/no-unused-vars */
import { eq, desc, and } from 'drizzle-orm';
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

export async function getUserThemes(userId: string): Promise<Theme[] | null> {
  const themes = await db
    .select()
    .from(newThemes)
    .where(eq(newThemes.userId, userId))
    .orderBy(desc(newThemes.createdAt));
  return themes ? themes.map(parseThemeFromDB) : null;
}

export async function updateThemeDownloads(theme: Theme): Promise<void> {
  if (!theme.id) {
    return;
  }
  await db
    .update(newThemes)
    .set({ downloads: theme.downloads ? theme.downloads + 1 : 1, updatedAt: theme.updatedAt })
    .where(eq(newThemes.id, theme.id));
}
export async function updateThemeShares(theme: Theme): Promise<void> {
  if (!theme.id) {
    return;
  }
  await db
    .update(newThemes)
    .set({ shares: theme.shares ? theme.shares + 1 : 1, updatedAt: theme.updatedAt })
    .where(eq(newThemes.id, theme.id));
}

export async function updateThemePublic(theme: Theme): Promise<void> {
  const { id } = theme;
  await db
    .update(newThemes)
    .set({ isPublic: theme.isPublic })
    .where(eq(newThemes.id, id))
    .returning();
}

export async function saveNewTheme(theme: Theme): Promise<Theme> {
  const { id, createdAt, updatedAt, ...themeWithoutId } = theme;
  try {
    const result = await db.insert(newThemes).values(themeWithoutId).returning();
    return parseThemeFromDB(result[0]);
  } catch (error) {
    if (error instanceof Error && error.message.includes('name_user_id_index')) {
      throw new Error('Theme with this name already exists');
    }
    throw error;
  }
}
export async function updateTheme(theme: Theme): Promise<Theme> {
  const { id, createdAt, updatedAt, ...themeWithoutId } = theme;
  try {
    const result = await db
      .update(newThemes)
      .set(themeWithoutId)
      .where(eq(newThemes.id, id))
      .returning();
    return parseThemeFromDB(result[0]);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
}

export async function downloadTheme(theme: Theme): Promise<Buffer> {
  const vsixBuffer = await generateVSIX(theme);
  return vsixBuffer;
}

export async function deleteTheme(themeId: number, userId: string): Promise<void> {
  await db.delete(newThemes).where(and(eq(newThemes.id, themeId), eq(newThemes.userId, userId)));
}
