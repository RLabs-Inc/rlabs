<script lang="ts">
  import { Edit, LoaderPinwheel } from 'lucide-svelte';

  type Props = {
    editTheme: () => Promise<void>;
    isEditing: boolean;
    ac2: string;
    ac1: string;
  };

  const { editTheme, isEditing, ac2, ac1 }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${ac2};
    --color-hover: ${ac1};
  `);
</script>

<div class="edit-btn flex items-center gap-1 transition-colors" style={styleVars}>
  <button class="cursor-pointer" onclick={editTheme} disabled={isEditing}>
    {#if isEditing}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <Edit class="h-4 w-4" />
    {/if}
  </button>
</div>

<style>
  .edit-btn {
    color: var(--color-foreground);
  }
  .edit-btn:hover {
    color: var(--color-hover);
  }
</style>
