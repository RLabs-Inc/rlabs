<script lang="ts">
  import { Download, LoaderPinwheel } from 'lucide-svelte';

  type Props = {
    count: number;
    downloadTheme: () => void;
    isDownloading: boolean;
    fg1: string;
    ac1: string;
  };

  const { count, downloadTheme, isDownloading, fg1, ac1 }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${fg1};
    --color-hover: ${ac1};
  `);
</script>

<div class="download-btn flex items-center gap-1 transition-colors" style={styleVars}>
  <button class="cursor-pointer" onclick={downloadTheme}>
    {#if isDownloading}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <Download class="h-4 w-4" />
    {/if}
  </button>
  <span class="text-sm">{count}</span>
</div>

<style>
  .download-btn {
    color: var(--color-foreground);
  }
  .download-btn:hover {
    color: var(--color-hover);
  }
</style>
