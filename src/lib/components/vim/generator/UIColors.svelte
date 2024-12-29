<script lang="ts">
  import UIColorBox from './UIColorBox.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  const selectedThemeState = getSelectedTheme();
  const uiColorsState = getUiColors();
</script>

<div class="grid auto-cols-fr grid-flow-col grid-rows-8 gap-2">
  {#each Object.entries(uiColorsState().uiColors) as [name, color]}
    <UIColorBox color={color as string} {name} />
  {/each}
</div>
