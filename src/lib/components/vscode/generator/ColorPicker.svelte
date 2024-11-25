<script lang="ts">
  import LCHColorPicker from '$lib/components/vscode/color-picker/LCHColorPicker.svelte';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';

  import type { UIColors, SyntaxColors, AnsiColors } from '$lib/types/color';

  const selectedColorState = getSelectedColor();
  const uiColorsState = getUiColors();
  const syntaxColorsState = getSyntaxColors();
  const ansiColorsState = getAnsiColors();

  const selectedColor = $derived(selectedColorState().selectedColor);

  function handleColorChange(newColor: string) {
    if (!selectedColor) return;
    selectedColorState().setSelectedColor({ ...selectedColor, color: newColor });
    switch (selectedColor.type) {
      case 'ui':
        if (!uiColorsState().lockedUIColors[selectedColor.name as keyof UIColors]) {
          uiColorsState().setUiColor(selectedColor.name as keyof UIColors, newColor);
        }
        break;
      case 'syntax':
        if (!syntaxColorsState().lockedSyntaxColors[selectedColor.name as keyof SyntaxColors]) {
          syntaxColorsState().setSyntaxColor(selectedColor.name as keyof SyntaxColors, newColor);
        }
        break;
      case 'ansi':
        if (!ansiColorsState().lockedAnsiColors[selectedColor.name as keyof AnsiColors]) {
          ansiColorsState().setAnsiColor(selectedColor.name as keyof AnsiColors, newColor);
        }
        break;
    }
  }
</script>

{#if selectedColor}
  <div
    class="flex w-full flex-col items-center justify-center gap-2 rounded-md border border-border p-2 text-xs shadow-sm"
  >
    <span class="text-sm font-black capitalize drop-shadow-sm">{selectedColor.name}</span>
    {#key selectedColor.name}
      <!-- <LCHColorPicker onChange={handleColorChange} /> -->
    {/key}
  </div>
{/if}
