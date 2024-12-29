import type { Theme } from '$lib/types/vscode/theme';

export function replaceColorPlaceholders(template: string, theme: Theme): string {
  let result = template;

  // Convert 8-digit hex to 6-digit hex by removing alpha channel
  const formatColor = (color: string) => {
    // Ensure color has # prefix
    const withHash = color.startsWith('#') ? color : `#${color}`;
    // Remove alpha channel if present (last 2 digits)
    return withHash.length === 9 ? withHash.slice(0, 7) : withHash;
  };

  // Convert camelCase to snake_case
  const toSnakeCase = (str: string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

  // Replace UI color placeholders
  Object.entries(theme.uiColors).forEach(([key, value]) => {
    const formattedColor = formatColor(value);
    const snakeKey = toSnakeCase(key).toLowerCase();
    // Handle ${KEY} format
    result = result.replace(new RegExp(`\\$\{${key}}`, 'g'), formattedColor);
    // Handle g:colors.KEY format
    result = result.replace(new RegExp(`g:colors\\.${snakeKey}`, 'g'), `'${formattedColor}'`);
    // Handle highlight commands
    result = result.replace(new RegExp(`(gui(?:fg|bg)=)${value}(?=\\s|$)`, 'g'), `$1${formattedColor}`);
  });

  // Replace syntax color placeholders
  Object.entries(theme.syntaxColors).forEach(([key, value]) => {
    const formattedColor = formatColor(value);
    const snakeKey = toSnakeCase(key);
    // Handle ${KEY} format
    result = result.replace(new RegExp(`\\$\{${key}}`, 'g'), formattedColor);
    // Handle both g:syntaxColors and g:syntax_colors format
    result = result.replace(new RegExp(`g:syntax_colors\\.${snakeKey}`, 'g'), `'${formattedColor}'`);
    // Handle highlight commands
    result = result.replace(new RegExp(`(gui(?:fg|bg)=)${value}(?=\\s|$)`, 'g'), `$1${formattedColor}`);
  });

  // Replace ANSI color placeholders
  Object.entries(theme.ansiColors).forEach(([key, value]) => {
    const formattedColor = formatColor(value);
    const snakeKey = key.toLowerCase().replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    // Handle ${KEY} format
    result = result.replace(new RegExp(`\\$\{${key}}`, 'g'), formattedColor);
    // Handle g:ansiColors format
    result = result.replace(new RegExp(`g:ansi_colors\\.${snakeKey}`, 'g'), `'${formattedColor}'`);
    // Handle terminal colors
    result = result.replace(new RegExp(`g:terminal_color_\\d+ = ['"]${value}['"]`, 'g'), `g:terminal_color_$1 = '${formattedColor}'`);
    // Handle highlight commands
    result = result.replace(new RegExp(`(gui(?:fg|bg)=)${value}(?=\\s|$)`, 'g'), `$1${formattedColor}`);
  });

  // Replace theme metadata
  result = result.replace(/\$\{themeName\}/g, theme.name);
  result = result.replace(/\$\{themeNameKebab\}/g, theme.name.toLowerCase().replace(/\s+/g, '-'));
  result = result.replace(/\$\{themeNameSnake\}/g, theme.name.toLowerCase().replace(/[^a-z0-9]+/g, '_'));
  result = result.replace(/\$\{author\}/g, theme.userName);
  result = result.replace(/\$\{background\}/g, theme.isDark ? 'dark' : 'light');

  return result;
}
