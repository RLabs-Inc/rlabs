<script lang="ts">
  import { ScrollArea } from '$lib/components/ui/scroll-area';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  import { evaluateColorReference } from '$lib/utils/vscode/theme-parser';

  const uiColorsState = getUiColors();
  const syntaxColorsState = getSyntaxColors();
  const ansiColorsState = getAnsiColors();

  const colors = $derived(uiColorsState().uiColors);
  const syntaxColors = $derived(syntaxColorsState().syntaxColors);
  const ansiColors = $derived(ansiColorsState().ansiColors);

  const { tokens, type, title } = $props();
</script>

<section class="flex flex-col gap-2">
  <h2 class="px-1 font-bold">{title}</h2>
  <ScrollArea class="bg-background/40 shadow-inset-sm h-96 w-full max-w-200 rounded-md p-4">
    {#each tokens as token}
      {#if type === 'tokenColors'}
        <div class="flex items-center justify-between">
          <div class="flex w-1/2 flex-col gap-1 truncate py-1">
            <span class="text-foreground text-sm">{token.name || 'Untitled'}</span>
            <span class="text-muted-foreground text-xs text-wrap">{token.scope}</span>
          </div>
          <div
            class="w-50 shrink-0 rounded-md p-2 py-2 text-center align-middle"
            style="background-color: {colors.BG1};
              color:{evaluateColorReference(
              token.settings.foreground,
              colors,
              syntaxColors,
              ansiColors
            )}; 
              border: 1px solid {evaluateColorReference(
              token.settings.foreground,
              colors,
              syntaxColors,
              ansiColors
            )};"
          >
            {#if token.settings.foreground}
              <div class="flex flex-col gap-0.5 text-xs">
                <span class="">{token.settings.foreground.split('.')[0]}</span>
                <span class="text-wrap uppercase">{token.settings.foreground.split('.')[1]}</span>
              </div>
            {/if}
          </div>
        </div>
      {:else if type === 'colors'}
        <div class="flex justify-between text-foreground text-sm">{token.map(([key, value]) => {
          const color = evaluateColorReference(value, colors, syntaxColors, ansiColors);
          return `<span class="text-xs">${key}</span> <span class="text-muted-foreground text-xs">${color}</span>`
        }
          
          
            
          
        ))}</div>
      {:else}
        <h1 class="text-foreground text-sm">{token.name}</h1>
      {/if}
    {/each}
  </ScrollArea>
</section>
