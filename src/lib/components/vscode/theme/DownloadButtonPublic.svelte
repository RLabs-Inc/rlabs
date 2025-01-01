<script lang="ts">
  import { Download, LoaderPinwheel } from 'lucide-svelte';
  import { Lit } from 'litlyx-js';
  type Props = {
    // downloadTheme: () => Promise<void>;
    themeId: number;
    isDownloading: boolean;
    count: number;
    ac2: string;
    ac1: string;
  };

  const { themeId, isDownloading, count, ac2, ac1 }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${ac1};
    --color-hover: ${ac2};
  `);
</script>

<div class="download-btn flex items-center gap-2 transition-colors" style={styleVars}>
  <input type="hidden" name="themeId" value={themeId} />
  <button
    data-umami-event={`Download Button ${themeId}`}
    disabled={isDownloading}
    formaction="?/downloadTheme"
    class="download-btn cursor-pointer"
    onclick={() => Lit.event('Download Theme' + themeId)}
  >
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
