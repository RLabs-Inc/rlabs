<script lang="ts">
  import { initialAnsiColors, initialSyntaxColors, initialUIColors } from '$lib/constants/colors';
  import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';
  import MonacoEditor from '../../monaco-editor/MonacoEditor.svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getFont } from '$lib/state/vscode/editor.svelte';

  const selectedTheme = getSelectedTheme();
  const fontState = getFont();

  const fontWeight = $derived(fontState().weight);
  const fontSize = $derived(fontState().size);

  const themeJSON = $derived(
    generateSemanticThemeJSON(
      'theme',
      selectedTheme().theme?.uiColors || initialUIColors,
      selectedTheme().theme?.syntaxColors || initialSyntaxColors,
      selectedTheme().theme?.ansiColors || initialAnsiColors
    ).themeJSON
  );

  const selectedFile = getSelectedFile();
</script>

<div class="h-full w-full">
  <MonacoEditor
    theme={themeJSON}
    lang={selectedFile().file.language || 'typescript'}
    snippet={selectedFile().file.snippet || 'console.log("Hello, world!");'}
    {fontWeight}
    {fontSize}
  />
</div>
