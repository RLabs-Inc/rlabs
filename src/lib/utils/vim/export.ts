import type { Theme } from '$lib/types/vscode/theme';

export function replaceColorPlaceholders(template: string, theme: Theme): string {
  let result = template;

  // Convert 8-digit hex to 6-digit hex by removing alpha channel
  const formatColor = (color: string) => {
    // Handle empty or invalid colors
    if (!color) return '#000000';
    // Ensure color has # prefix
    const withHash = color.startsWith('#') ? color : `#${color}`;
    // Remove alpha channel if present (last 2 digits)
    return withHash.length === 9 ? withHash.slice(0, 7) : withHash;
  };

  // Convert camelCase to UPPER_SNAKE_CASE
  const toUpperSnakeCase = (str: string) => str.replace(/([A-Z])/g, '_$1').toUpperCase();

  // Convert camelCase to snake_case
  const toSnakeCase = (str: string) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).toLowerCase();

  // Helper function to safely escape regex special characters
  const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Helper function to replace color in highlight commands
  const replaceInHighlight = (str: string, oldColor: string, newColor: string) => {
    const escapedOldColor = escapeRegExp(oldColor);
    // Match colors in gui(fg|bg)= attributes, handling both quoted and unquoted values
    return str.replace(
      new RegExp(
        `(gui(?:fg|bg)=)(?:'${escapedOldColor}'|"${escapedOldColor}"|${escapedOldColor})(?=\\s|$)`,
        'g'
      ),
      `$1${newColor}`
    );
  };

  // Helper function to replace all variants of a color variable
  const replaceColorVariable = (key: string, value: string, dict: string) => {
    const formattedColor = formatColor(value);
    const upperSnakeKey = toUpperSnakeCase(key);
    const snakeKey = toSnakeCase(key);

    // Replace ${KEY} format (both camelCase and UPPER_SNAKE_CASE)
    result = result.replace(new RegExp(`\\$\{${escapeRegExp(key)}}`, 'g'), formattedColor);
    result = result.replace(
      new RegExp(`\\$\{${escapeRegExp(upperSnakeKey)}}`, 'g'),
      formattedColor
    );

    // Replace g:dict.key format
    result = result.replace(
      new RegExp(`g:${dict}\\.${escapeRegExp(snakeKey)}`, 'g'),
      `'${formattedColor}'`
    );

    // Replace in highlight commands
    result = replaceInHighlight(result, value, formattedColor);
  };

  // Process UI colors
  Object.entries(theme.uiColors).forEach(([key, value]) => {
    replaceColorVariable(key, value, 'colors');
  });

  // Process syntax colors
  Object.entries(theme.syntaxColors).forEach(([key, value]) => {
    replaceColorVariable(key, value, 'syntax_colors');
  });

  // Process ANSI colors
  Object.entries(theme.ansiColors).forEach(([key, value]) => {
    replaceColorVariable(key, value, 'ansi_colors');

    // Special handling for terminal colors
    const formattedColor = formatColor(value);
    const index = [
      'Black',
      'Red',
      'Green',
      'Yellow',
      'Blue',
      'Magenta',
      'Cyan',
      'White',
      'BrightBlack',
      'BrightRed',
      'BrightGreen',
      'BrightYellow',
      'BrightBlue',
      'BrightMagenta',
      'BrightCyan',
      'BrightWhite'
    ].indexOf(key);

    if (index !== -1) {
      result = result.replace(
        new RegExp(`(g:terminal_color_${index}\\s*=\\s*)(?:'[^']+'|"[^"]+"|#[0-9a-fA-F]{6})`, 'g'),
        `$1'${formattedColor}'`
      );
    }
  });

  // Process theme metadata
  const themeNameKebab = theme.name.toLowerCase().replace(/\s+/g, '-');
  const themeNameSnake = theme.name.toLowerCase().replace(/[^a-z0-9]+/g, '_');

  // Replace theme metadata placeholders
  const metadataReplacements = {
    themeName: theme.name,
    themeNameKebab,
    themeNameSnake,
    author: theme.userName,
    background: theme.isDark ? 'dark' : 'light',
    year: new Date().getFullYear().toString()
  };

  Object.entries(metadataReplacements).forEach(([key, value]) => {
    result = result.replace(new RegExp(`\\$\{${escapeRegExp(key)}}`, 'g'), value);
  });

  return result;
}
