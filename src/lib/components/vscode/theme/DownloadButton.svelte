<script lang="ts">
  import { Download, LoaderPinwheel } from 'lucide-svelte';
  import { Lit } from 'litlyx-js';
  type Props = {
    // downloadTheme: () => Promise<void>;
    themeId: number;
    isDownloading: boolean;
    count: number;
    fg1: string;
    ac1: string;
  };

  const { themeId, isDownloading, count, fg1, ac1 }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${fg1};
    --color-hover: ${ac1};
  `);
</script>

<div class="download-btn flex items-center gap-1 transition-colors" style={styleVars}>
  <input type="hidden" name="themeId" value={themeId} />
  <button
    data-umami-event={`Download Button ${themeId}`}
    class="cursor-pointer"
    disabled={isDownloading}
    formaction="?/downloadTheme"
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
