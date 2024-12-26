<script lang="ts">
  import LCHColorPicker from '$lib/components/color-picker/LCHColorPicker.svelte';
  import { getThemeState } from '$lib/state/warp/colors.svelte';

  import type { SelectedColor, UiColors, Colors } from '$lib/types/warp/colors';

  const themeState = getThemeState();

  //   const selectedColor = $derived(themeState().selectedColor);

  const { color, name, type } = $props<{ color: string; name: string; type: string }>();

  function handleColorChange(newColor: SelectedColor) {
    themeState().setSelectedColor(newColor);
    switch (newColor.type) {
      case 'ui':
        themeState().setUiColor(newColor.name as keyof UiColors, newColor.color);
        break;
      case 'normal':
        themeState().setNormalColor(newColor.name as keyof Colors, newColor.color);
        break;
      case 'bright':
        themeState().setBrightColor(newColor.name as keyof Colors, newColor.color);
        break;
      default:
        break;
    }
    console.log(newColor);
  }
</script>

<section
  class="border-border-st bg-background-st dark:border-primary-foreground-st dark:bg-background-st/40 rounded-md border shadow-xs"
>
  <div class="flex w-full flex-col items-center justify-center gap-2 p-2 text-xs">
    <span class="text-sm font-black capitalize drop-shadow-xs">{name}</span>
    {#key name}
      <LCHColorPicker onChange={handleColorChange} {color} {name} {type} />
    {/key}
  </div>
</section>
