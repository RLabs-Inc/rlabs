<script lang="ts">
  import SyntaxColorBox from './SyntaxColorBox.svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  const syntaxColorsState = getSyntaxColors();
  const uiColorsState = getUiColors();
</script>

<div
  class="grid w-full grid-cols-2 gap-2 md:grid-cols-4 lg:auto-cols-fr lg:grid-flow-col lg:grid-rows-10 xl:grid-rows-5 2xl:grid-rows-10"
>
  {#each Object.entries(syntaxColorsState().syntaxColors) as [name, color]}
    <SyntaxColorBox {color} {name} bg={uiColorsState().uiColors.BG1} />
  {/each}
</div>
