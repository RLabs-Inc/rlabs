<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Download } from 'lucide-svelte';
  import { getThemeState } from '$lib/state/warp/colors.svelte';

  const themeState = getThemeState();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `data:text/yaml;charset=utf-8,${encodeURIComponent(themeState().ymlString)}`;
    link.download = 'sacred-geometry.yml';
    link.click();
  };
</script>

<Button variant="ghost" size="icon" onclick={handleDownload}>
  <Download class="h-6 w-6" />
  <span class="sr-only">Download</span>
</Button>
