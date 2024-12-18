<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Lock, Unlock } from 'lucide-svelte';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';
  const { color, name, bg }: { color: string; name: string; bg: string } = $props();
  const ansiColorsState = getAnsiColors();
  const selectedColorState = getSelectedColor();

  const isLocked = $derived.by(() => {
    return Object.keys(ansiColorsState().lockedAnsiColors).includes(name);
  });
</script>

<div
  class="rounded-md px-2 py-1 shadow-md"
  style={`background-color: ${bg}; transition-property: all; transition-duration: 100ms;`}
>
  <div
    class="flex w-full cursor-pointer items-center justify-between border-l px-2 py-1 text-xs capitalize"
    style={`color: ${color}; border-color: ${color}; transition-property: all; transition-duration: 100ms;`}
    onclick={() => {
      selectedColorState().setSelectedColor({ name, color, type: 'ansi' });
    }}
    role="button"
    tabindex="0"
    onkeydown={(event) => {
      if (event.key === 'Enter') {
        selectedColorState().setSelectedColor({ name, color, type: 'ansi' });
      }
    }}
  >
    <span class="truncate text-xs">{name}</span>
    <Button
      variant="ghost"
      size="icon"
      class="h-4 w-4 hover:bg-transparent hover:text-inherit focus:bg-transparent"
      onclick={() => {
        ansiColorsState().toggleLockedAnsiColor(name, color);
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
