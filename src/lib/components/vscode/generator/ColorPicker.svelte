<script lang="ts">
  import LCHColorPicker from '$lib/components/vscode/color-picker/LCHColorPicker.svelte';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';

  import type { UIColors, SyntaxColors, AnsiColors } from '$lib/types/color';
  import { Button } from '$lib/components/ui/button';

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
  <section
    class="border-border bg-background dark:border-primary-foreground dark:bg-background/40 rounded-md border shadow-xs lg:max-w-[300px]"
  >
    <div class="flex max-h-4 w-full items-start justify-end">
      <Button
        variant="ghost"
        size="icon"
        onclick={() => selectedColorState().setSelectedColor(null)}
      >
        <span class="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
    </div>
    <div class="flex w-full flex-col items-center justify-center gap-2 p-2 text-xs">
      <span class="text-sm font-black capitalize drop-shadow-xs">{selectedColor.name}</span>
      {#key selectedColor.name}
        <LCHColorPicker onChange={handleColorChange} />
      {/key}
    </div>
  </section>
{/if}
