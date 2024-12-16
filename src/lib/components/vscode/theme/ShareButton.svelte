<script lang="ts">
  import { Share, LoaderPinwheel } from 'lucide-svelte';

  type Props = {
    shareTheme: () => Promise<void>;
    isSharing: boolean;
    count: number;
    fg1: string;
    ac1: string;
  };

  const { shareTheme, isSharing, count, fg1, ac1 }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${fg1};
    --color-hover: ${ac1};
  `);
</script>

<div class="share-btn flex items-center gap-1 transition-colors" style={styleVars}>
  <button
    data-umami-event="Share Button"
    class="cursor-pointer"
    onclick={shareTheme}
    disabled={isSharing}
  >
    {#if isSharing}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <Share class="h-4 w-4" />
    {/if}
  </button>
  <span class="text-sm">{count}</span>
</div>

<style>
  .share-btn {
    color: var(--color-foreground);
  }
  .share-btn:hover {
    color: var(--color-hover);
  }
</style>
