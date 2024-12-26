<script lang="ts">
  import { getThemeState } from '$lib/state/warp/colors.svelte';
  import ColorSwatch from './ColorSwatch.svelte';
  const themeState = getThemeState();
</script>

<section class="flex flex-col gap-2 md:flex-row md:items-start">
  <section class="grid grid-cols-2 gap-2">
    {#each Object.entries(themeState().uiColors) as [name, color]}
      <span>{name}</span>
      <ColorSwatch {color} {name} type="ui" />
    {/each}
  </section>

  <section class="grid grid-cols-2 gap-2">
    {#each Object.entries(themeState().normalColors) as [name, color], index}
      <span>Color {index + 1}</span>
      <ColorSwatch {color} {name} type="normal" />
    {/each}
  </section>

  <section class="grid grid-cols-2 gap-2">
    {#each Object.entries(themeState().brightColors) as [name, color], index}
      <span>Bright {index + 1}</span>
      <ColorSwatch {color} {name} type="bright" />
    {/each}
  </section>
</section>
