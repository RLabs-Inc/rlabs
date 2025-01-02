<script lang="ts">
  import { wcagLuminance } from 'culori';
  import { Lock, Unlock } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';

  const uiColorsState = getUiColors();
  const selectedColorState = getSelectedColor();

  const { color, name }: { color: string; name: string } = $props();
  const hasAlpha = color.length > 7 && color.toUpperCase().slice(-2) !== 'FF';

  const isLocked = $derived.by(() => {
    return Object.keys(uiColorsState().lockedUIColors).includes(name);
  });

  const textColor = $derived.by(() => {
    if (hasAlpha) return '--text-foreground';
    if (wcagLuminance(color) < 0.3) return 'white';
    return 'black';
  });
</script>

<div
  class="flex w-full cursor-pointer items-center justify-between rounded-md p-2 text-xs capitalize shadow-md"
  style={`background-color: ${color}; color: ${textColor}; transition-property: all; transition-duration: 100ms;`}
  onclick={() => {
    selectedColorState().setSelectedColor({ name, color, type: 'ui' });
  }}
  role="button"
  tabindex="0"
  onkeydown={(event) => {
    if (event.key === 'Enter') {
      selectedColorState().setSelectedColor({ name, color, type: 'ui' });
    }
  }}
>
  <span class="truncate text-xs">{name}</span>
  <Button
    variant="ghost"
    size="icon"
    class="h-4 w-4 transition-all duration-100 hover:bg-transparent hover:text-inherit focus:bg-transparent"
    onclick={() => {
      uiColorsState().toggleLockedUIColor(name, color);
    }}
  >
    {#if isLocked}
      <Lock
        class="size-4"
        style={`fill: ${textColor}; transition-property: all; transition-duration: 100ms;`}
      />
    {/if}
    {#if !isLocked}
      <Unlock class="size-4" style={`transition-property: all; transition-duration: 100ms;`} />
    {/if}
  </Button>
</div>
