<script lang="ts">
  import { Trash2, LoaderPinwheel } from 'lucide-svelte';

  type Props = {
    deleteTheme: () => Promise<void>;
    isDeleting: boolean;
    isDark: boolean;
  };

  const { deleteTheme, isDeleting, isDark }: Props = $props();

  let styleVars = $derived.by(() => {
    const foreground = isDark ? '#ffff' : '#000000';
    const foregroundHover = isDark ? '#f87171' : '#b91c1c';
    return `
    --color-foreground: ${foreground};
    --color-hover: ${foregroundHover};
    `;
  });
</script>

<div class="delete-btn flex items-center gap-1 p-1 transition-colors" style={styleVars}>
  <button class="cursor-pointer" onclick={deleteTheme} disabled={isDeleting}>
    {#if isDeleting}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <Trash2 class="h-4 w-4" />
    {/if}
  </button>
</div>

<style>
  .delete-btn {
    color: var(--color-foreground);
    transition-property: all;
    transition-duration: 200ms;
  }
  .delete-btn:hover {
    color: var(--color-hover);
  }
</style>
