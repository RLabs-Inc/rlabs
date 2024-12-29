<script lang="ts">
  import AnsiColorBox from './AnsiColorBox.svelte';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  const ansiColorsState = getAnsiColors();
  const uiColorsState = getUiColors();
</script>

<div class="grid w-full auto-cols-fr grid-flow-col grid-rows-8 gap-2">
  {#each Object.entries(ansiColorsState().ansiColors) as [name, color]}
    <AnsiColorBox {color} {name} bg={uiColorsState().uiColors.BG1} />
  {/each}
</div>
