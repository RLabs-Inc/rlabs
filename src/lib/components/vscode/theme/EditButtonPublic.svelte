<script lang="ts">
  import { Edit, LoaderPinwheel } from 'lucide-svelte';

  type Props = {
    editTheme: () => Promise<void>;
    isEditing: boolean;
    ac1: string;
    ac2: string;
  };

  const { editTheme, isEditing, ac1, ac2 }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${ac1};
    --color-hover: ${ac2};
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
