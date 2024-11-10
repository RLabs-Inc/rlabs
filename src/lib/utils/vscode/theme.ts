/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColorSchemes } from '$lib/types/color';
import { type Theme, ThemeSchema } from '$lib/types/theme';

export function parseThemeFromDB(rawTheme: any): Theme {
  const parsedTheme = {
    ...rawTheme,
    uiColors: safeJsonParse(rawTheme.uiColors),
    syntaxColors: safeJsonParse(rawTheme.syntaxColors),
    ansiColors: safeJsonParse(rawTheme.ansiColors),
    scheme: isNaN(parseInt(rawTheme.scheme))
      ? rawTheme.scheme
      : ColorSchemes[rawTheme.scheme as keyof typeof ColorSchemes],
    createdAt: new Date(rawTheme.createdAt),
    updatedAt: new Date(rawTheme.updatedAt)
  };

  try {
    return ThemeSchema.parse(parsedTheme);
  } catch (error) {
    console.error('Error parsing theme:', error);
    console.log('Raw theme data:', rawTheme);
    console.log('Parsed theme data:', parsedTheme);
    throw error;
  }
}

function safeJsonParse(value: any) {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return value;
    }
  }
  return value;
}
