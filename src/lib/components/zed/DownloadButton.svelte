<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Download } from 'lucide-svelte';
  import type { Theme } from '$lib/types/vscode/theme';
  import { Lit } from 'litlyx-js';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { generateSemanticThemeJSON } from '$lib/utils/vscode/export';
  import { generateZedThemeJSON } from '$lib/utils/zed/export';

  const { theme }: { theme: Theme } = $props();
  const themeState = getSelectedTheme();

  const handleDownload = () => {
    const link = document.createElement('a');
    themeState().set(theme);
    const themeString = generateZedThemeJSON(
      theme.name,
      theme.uiColors,
      theme.syntaxColors,
      theme.ansiColors,
      generateSemanticThemeJSON(theme.name, theme.uiColors, theme.syntaxColors, theme.ansiColors)
        .themeObject
    );
    link.href = `data:text/json;charset=utf-8,${encodeURIComponent(themeString)}`;
    link.download = `${theme.name}.json`;
    link.click();
    Lit.event('Download Theme');
  };
</script>

<Button data-umami-event="Download Theme" variant="ghost" size="icon" onclick={handleDownload}>
  <Download class="h-6 w-6" />
  <span class="sr-only">Download</span>
</Button>
