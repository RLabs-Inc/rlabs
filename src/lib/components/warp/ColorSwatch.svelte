<script lang="ts">
  import { getThemeState } from '$lib/state/warp/colors.svelte';
  import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
  import ColorPickerPopover from './ColorPickerPopover.svelte';
  import { Button } from '../ui/button';

  const { color, name, type } = $props();

  const themeState = getThemeState();
  const cssVar = $derived.by(() => {
    switch (type) {
      case 'ui':
        return `--${name}`;
      case 'normal':
        return `--normal-${name}`;
      case 'bright':
        return `--bright-${name}`;
      default:
        return '';
    }
  });
</script>

<Popover>
  <PopoverTrigger class="w-auto">
    <Button
      variant="ghost"
      size="icon"
      class="border-border h-8 w-12 border transition-all  duration-100 hover:bg-transparent hover:text-inherit focus:bg-transparent"
      onclick={() => {
        themeState().setSelectedColor({ type, name, color });
      }}
    >
      <div
        class="h-8 w-12 rounded-md shadow-md drop-shadow-lg"
        style="background-color: var({cssVar});"
      ></div>
    </Button>
  </PopoverTrigger>
  <PopoverContent class="w-auto">
    <ColorPickerPopover {color} {name} {type} />
  </PopoverContent>
</Popover>
