import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { newThemes } from '$lib/server/db/schema';
import type { Theme } from '$lib/types/theme';
import { parseThemeFromDB } from '$lib/utils/vscode/theme';

export async function getPublicThemes(): Promise<Theme[]> {
  const themes = await db.select().from(newThemes).where(eq(newThemes.isPublic, true));
  const parsedThemes = themes.map(parseThemeFromDB);
  return parsedThemes;
}
