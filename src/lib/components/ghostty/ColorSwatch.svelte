<script lang="ts">
  import { getThemeState } from '$lib/state/warp/colors.svelte';
  import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
  import ColorPickerPopover from './ColorPickerPopover.svelte';
  import { Button } from '../ui/button';
  import { theme } from 'mode-watcher';

  const { color, name, type } = $props();

  const themeState = getThemeState();
  const cssVar = $derived.by(() => {
    return `--${name}`;
  });
</script>

<Button
  variant="ghost"
  class="h-8 w-12 rounded-md drop-shadow-md"
  onclick={() => {
    themeState().setSelectedColor({ name, color, type });
  }}
  style={`background-color: var(${cssVar});`}
/>
