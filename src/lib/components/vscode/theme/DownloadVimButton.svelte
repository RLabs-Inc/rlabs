<script lang="ts">
  import { Download, LoaderPinwheel } from 'lucide-svelte';
  import { Lit } from 'litlyx-js';
  type Props = {
    // downloadTheme: () => Promise<void>;
    themeId: number;
    isDownloading: boolean;
    // count: number;
    ac2: string;
    ac1: string;
  };

  const { themeId, isDownloading, ac2, ac1 }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${ac1};
    --color-hover: ${ac2};
  `);
</script>

<div class="download-btn flex items-center gap-1 transition-colors" style={styleVars}>
  <input type="hidden" name="themeId" value={themeId} />
  <button
    data-umami-event={`Download Button ${themeId}`}
    class="cursor-pointer"
    disabled={isDownloading}
    formaction="?/downloadVim"
    onclick={() => Lit.event('Download Theme' + themeId)}
  >
    {#if isDownloading}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"
        ><path
          d="M88.963 0v70.438l22.906 34.445l4.658-5.059l-.185-72.312zM38.97.008L19.283 19.895l70.26 106.918l19.65-19.65ZM16.615 21.855l-5.142 5.192v72.988L39.496 128V55.93Zm-.152 1.592l22.02 32.791v69.32L12.487 99.616V27.463Z"
        /></svg
      >
    {/if}
  </button>
  <!-- <span class="text-sm">{count}</span> -->
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
