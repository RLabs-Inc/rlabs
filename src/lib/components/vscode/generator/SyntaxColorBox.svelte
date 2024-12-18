<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Lock, Unlock } from 'lucide-svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';
  const { color, name, bg }: { color: string; name: string; bg: string } = $props();
  const syntaxColorsState = getSyntaxColors();
  const selectedColorState = getSelectedColor();

  const isLocked = $derived.by(() => {
    return Object.keys(syntaxColorsState().lockedSyntaxColors).includes(name);
  });
</script>

<div
  class="rounded-md px-2 py-1 shadow-md"
  style={`background-color: ${bg}; transition-property: all; transition-duration: 100ms;`}
>
  <div
    class="flex w-full cursor-pointer items-center justify-between truncate border-l px-2 py-1 text-xs text-clip capitalize"
    style={`color: ${color}; border-color: ${color}; transition-property: all; transition-duration: 100ms;`}
    onclick={() => {
      selectedColorState().setSelectedColor({ name, color, type: 'syntax' });
    }}
    role="button"
    tabindex="0"
    onkeydown={(event) => {
      if (event.key === 'Enter') {
        selectedColorState().setSelectedColor({ name, color, type: 'syntax' });
      }
    }}
  >
    {#if name === 'punctuationComma'}
      <span class="truncate text-xs">PunctuationSeparator</span>
    {:else}
      <span class="truncate text-xs">{name}</span>
    {/if}
    <Button
      variant="ghost"
      size="icon"
      class="h-4 w-4 transition-all duration-100 hover:bg-transparent hover:text-inherit focus:bg-transparent"
      onclick={() => {
        syntaxColorsState().toggleLockedSyntaxColor(name, color);
      }}
    >
      {#if isLocked}
        <Lock
          class="size-4"
          style={`fill: ${color}; transition-property: all; transition-duration: 100ms;`}
        />
      {/if}
      {#if !isLocked}
        <Unlock class="size-4" style={`transition-property: all; transition-duration: 100ms;`} />
      {/if}
    </Button>
  </div>
</div>
