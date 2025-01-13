<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Download } from 'lucide-svelte';
  import { getThemeState } from '$lib/state/ghostty/colors.svelte';
  import { Lit } from 'litlyx-js';

  const themeState = getThemeState();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `data:text;charset=utf-8,${encodeURIComponent(themeState().themeString)}`;
    link.download = 'sacred geometry';
    link.click();
    Lit.event('Download Theme');
  };
</script>

<Button data-umami-event="Download Theme" variant="ghost" size="icon" onclick={handleDownload}>
  <Download class="h-6 w-6" />
  <span class="sr-only">Download</span>
</Button>
