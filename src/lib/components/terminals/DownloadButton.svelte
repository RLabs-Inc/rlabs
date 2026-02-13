<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Download } from 'lucide-svelte';
  import { getThemeState } from '$lib/state/terminals/colors.svelte';
  import { Lit } from 'litlyx-js';

  const themeState = getThemeState();

  const fileExtensions: Record<string, { ext: string; mime: string }> = {
    warp: { ext: '.yaml', mime: 'text/yaml' },
    ghostty: { ext: '', mime: 'text/plain' },
    wezterm: { ext: '.toml', mime: 'text/plain' }
  };

  const handleDownload = () => {
    const target = themeState().terminalTarget;
    const { ext, mime } = fileExtensions[target] || fileExtensions.warp;
    const link = document.createElement('a');
    link.href = `data:${mime};charset=utf-8,${encodeURIComponent(themeState().themeString)}`;
    link.download = `sacred-geometry${ext}`;
    link.click();
    Lit.event(`Download Theme ${target}`);
  };
</script>

<Button data-umami-event="Download Theme" variant="ghost" size="icon" onclick={handleDownload}>
  <Download class="h-6 w-6" />
  <span class="sr-only">Download</span>
</Button>
