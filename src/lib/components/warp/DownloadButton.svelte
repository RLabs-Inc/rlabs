<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Download } from 'lucide-svelte';
  import { ThemeState } from '$lib/state/warp/theme.svelte';

  const themeState = new ThemeState();

  const handleDownload = () => {
    console.log(themeState.download());
    const link = document.createElement('a');
    link.href = `data:text/yaml;charset=utf-8,${encodeURIComponent(JSON.stringify(themeState.download()))}`;
    link.download = 'sacred-geometry.yml';
    link.click();
  };
</script>

<Button variant="ghost" size="icon" onclick={handleDownload}>
  <Download class="h-6 w-6" />
  <span class="sr-only">Download</span>
</Button>
