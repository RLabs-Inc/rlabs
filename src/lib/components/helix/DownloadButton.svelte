<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Download } from 'lucide-svelte';
  import { getHelixThemeState } from '$lib/state/helix/theme.svelte';
  import type { Theme } from '$lib/types/vscode/theme';
  import { Lit } from 'litlyx-js';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  const { theme }: { theme: Theme } = $props();
  const helixThemeState = getHelixThemeState();
  const themeState = getSelectedTheme();

  const handleDownload = () => {
    const link = document.createElement('a');
    themeState().set(theme);
    const themeString = helixThemeState().getThemeString();
    link.href = `data:text/toml;charset=utf-8,${encodeURIComponent(themeString)}`;
    link.download = `${theme.name}.toml`;
    link.click();
    Lit.event('Download Theme');
  };
</script>

<Button data-umami-event="Download Theme" variant="ghost" size="icon" onclick={handleDownload}>
  <Download class="h-6 w-6" />
  <span class="sr-only">Download</span>
</Button>
