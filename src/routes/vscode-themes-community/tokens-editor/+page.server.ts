import type { PageServerLoad } from './$types';
import { parseLocalTheme } from '$lib/utils/vscode/theme-parser';
import { getPublicThemes } from '$lib/server/vscode/themes';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';

export const load: PageServerLoad = async () => {
  const themes = await getPublicThemes();
  const { themeJSON } = generateSemanticThemeJSON(
    themes[0].name,
    themes[0].uiColors,
    themes[0].syntaxColors,
    themes[0].ansiColors
  );

  const parsedTheme = parseLocalTheme(
    JSON.parse(themeJSON),
    themes[0].uiColors,
    themes[0].syntaxColors,
    themes[0].ansiColors
  );

  return {
    parsedTheme
  };
};
