<script lang="ts">
  import LCHColorPicker from '$lib/components/ghostty/color-picker/LCHColorPicker.svelte';
  import { getThemeState } from '$lib/state/ghostty/colors.svelte';

  import type { SelectedColor, UiColors, PaletteColors } from '$lib/types/ghostty/colors';

  const themeState = getThemeState();

  const selectedColor = $derived({ ...themeState().selectedColor });

  function handleColorChange(newColor: SelectedColor) {
    themeState().setSelectedColor(newColor);
    switch (newColor.type) {
      case 'ui':
        themeState().setUiColor(newColor.name as keyof UiColors, newColor.color);
        break;
      case 'palette':
        themeState().setPaletteColor(newColor.name as keyof PaletteColors, newColor.color);
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
    <span class="text-sm font-black capitalize drop-shadow-xs"></span>

    <LCHColorPicker
      onChange={handleColorChange}
      color={selectedColor.color ? selectedColor.color : ''}
      type={selectedColor.type as 'ui' | 'palette'}
      name={selectedColor.name ? selectedColor.name : ''}
    />
  </div>
</section>
