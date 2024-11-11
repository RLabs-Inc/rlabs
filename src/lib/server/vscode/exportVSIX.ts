import type { Theme } from '../../types/theme';
import fs from 'node:fs/promises';
import path from 'node:path';
import JSZip from 'jszip';
import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';

const TEMPLATE_DIR = path.join(process.cwd(), 'vsix-template');

export async function generateVSIX(theme: Theme): Promise<Buffer> {
  const zip = new JSZip();

  // Create the extension folder
  const extensionFolder = zip.folder('extension');

  if (!extensionFolder) {
    throw new Error('Failed to create extension folder');
  }

  // Copy template files
  const templateFiles = await fs.readdir(TEMPLATE_DIR);
  for (const file of templateFiles) {
    const filePath = path.join(TEMPLATE_DIR, file);
    const stats = await fs.stat(filePath);

    if (stats.isFile()) {
      let content = await fs.readFile(filePath, 'utf-8');

      // Replace variables in package.json and README.md
      if (file === 'package.json' || file === 'README.md') {
        content = content.replace(/\${themeName}/g, theme.name);
        content = content.replace(
          /\${themeNameKebab}/g,
          theme.name.toLowerCase().replace(/\s+/g, '-')
        );
        content = content.replace(/\${uiTheme}/g, theme.isDark ? 'vs-dark' : 'vs');
      }

      // Add files to the extension folder
      extensionFolder.file(file, content);
    } else if (stats.isDirectory()) {
      // Handle directories (like 'images')
      const dirFiles = await fs.readdir(filePath);
      for (const dirFile of dirFiles) {
        const dirFilePath = path.join(filePath, dirFile);
        const dirFileContent = await fs.readFile(dirFilePath);
        extensionFolder.file(path.join(file, dirFile), dirFileContent);
      }
    }
  }

  // Generate theme JSON
  const { themeObject } = generateSemanticThemeJSON(
    theme.name,
    theme.uiColors,
    theme.syntaxColors,
    theme.ansiColors
  );

  // Create themes folder inside the extension folder
  const themesFolder = extensionFolder.folder('themes');
  if (!themesFolder) {
    throw new Error('Failed to create themes folder');
  }
  themesFolder.file('theme.json', JSON.stringify(themeObject, null, 2));

  // Generate VSIX
  const vsixBuffer = await zip.generateAsync({ type: 'nodebuffer' });
  return vsixBuffer;
}
