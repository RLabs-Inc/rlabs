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
    class="cursor-pointer"
    disabled={isDownloading}
    formaction="?/downloadTheme"
    onclick={() => Lit.event('Download Theme' + themeId)}
  >
    {#if isDownloading}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <div class="h-4 w-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"
          ><path
            fill-rule="evenodd"
            d="M90.767 127.126a7.97 7.97 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.33 5.33 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64L1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.33 5.33 0 0 0 6.807.303l21.974-16.68l50.45 46.025a8 8 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
            clip-rule="evenodd"
          /></svg
        >
      </div>
    {/if}
  </button>
  <!-- <div class="flex items-center gap-1">
    <Download class="h-4 w-4" />
    <span class="text-sm">{count}</span>
  </div> -->
</div>

<style>
  svg {
    fill: var(--color-hover);
  }
  svg:hover {
    fill: var(--color-foreground);
  }
  .download-btn {
    color: var(--color-foreground);
  }
  .download-btn:hover {
    color: var(--color-hover);
  }
</style>
