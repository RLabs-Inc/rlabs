<script lang="ts">
  import { getThemeState } from '$lib/state/ghostty/colors.svelte';
  import { Button } from '../ui/button';
  import ColorPickerPopover from './ColorPickerPopover.svelte';
  import ColorSwatch from './ColorSwatch.svelte';
  const themeState = getThemeState();
  themeState().setSelectedColor(null);
  let isEditing = $state(false);
  const setIsEditing = (open: boolean) => {
    isEditing = open;
  };
</script>

{#if !themeState().selectedColor}
  <section class="flex flex-col gap-2 md:flex-row md:items-start">
    <section class="grid grid-cols-2 gap-2">
      {#each Object.entries(themeState().uiColors) as [name, color]}
        <span>{name}</span>
        <ColorSwatch {color} {name} type="ui" />
      {/each}
    </section>

    <section class="grid grid-cols-2 gap-2">
      {#each Object.entries(themeState().paletteColors) as [name, color], index}
        {#if index < 8}
          <span>Color {index}</span>
          <ColorSwatch {color} {name} type="palette" />
        {/if}
      {/each}
    </section>
    <section class="grid grid-cols-2 gap-2">
      {#each Object.entries(themeState().paletteColors) as [name, color], index}
        {#if index > 7}
          <span>Color {index}</span>
          <ColorSwatch {color} {name} type="palette" />
        {/if}
      {/each}
    </section>
  </section>
{:else}
  <div class="border-border flex flex-col items-end justify-end rounded-md border p-2">
    <Button onclick={() => themeState().setSelectedColor(null)}>X</Button>
    <ColorPickerPopover />
  </div>
{/if}
