<script lang="ts">
  import GhosttyMock from '$lib/components/ghostty/GhosttyMock.svelte';
  import Controls from '$lib/components/ghostty/Controls.svelte';
  import Colors from '$lib/components/ghostty/Colors.svelte';

  import { getThemeState } from '$lib/state/ghostty/colors.svelte';

  const themeState = getThemeState();

  const cssVariables = $derived(
    `--palette0: ${themeState().paletteColors.palette0};
  --palette1: ${themeState().paletteColors.palette1};
  --palette2: ${themeState().paletteColors.palette2};
  --palette3: ${themeState().paletteColors.palette3};
  --palette4: ${themeState().paletteColors.palette4};
  --palette5: ${themeState().paletteColors.palette5};
  --palette6: ${themeState().paletteColors.palette6};
  --palette7: ${themeState().paletteColors.palette7};
  --palette8: ${themeState().paletteColors.palette8};
  --palette9: ${themeState().paletteColors.palette9};
  --palette10: ${themeState().paletteColors.palette10};
  --palette11: ${themeState().paletteColors.palette11};
  --palette12: ${themeState().paletteColors.palette12};
  --palette13: ${themeState().paletteColors.palette13};
  --palette14: ${themeState().paletteColors.palette14};
  --palette15: ${themeState().paletteColors.palette15};
  --background: ${themeState().uiColors.background};
  --foreground: ${themeState().uiColors.foreground};
  --cursorColor: ${themeState().uiColors.cursorColor};
  --selectionBackground: ${themeState().uiColors.selectionBackground};
  --selectionForeground: ${themeState().uiColors.selectionForeground};`
  );
</script>

<section class="flex h-full min-h-[calc(100vh-2rem)] flex-col" style={cssVariables}>
  <div class="flex w-full flex-col items-center justify-center gap-5 py-20 pb-20">
    <div class="w-full px-5 lg:max-w-6xl">
      <Controls />
    </div>
    <div
      class="border-foreground grid grid-cols-1 gap-5 pt-10 lg:auto-cols-max lg:grid-flow-col lg:gap-8"
    >
      <div class="w-full px-1 lg:max-w-5xl">
        <GhosttyMock />
      </div>
      <div class="px-1">
        <Colors />
      </div>
    </div>
  </div>
</section>
