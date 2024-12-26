<script lang="ts">
  import WarpMock from '$lib/components/warp/WarpMock.svelte';
  import Controls from '$lib/components/warp/Controls.svelte';
  import Colors from '$lib/components/warp/Colors.svelte';

  import { getThemeState } from '$lib/state/warp/colors.svelte';

  const themeState = getThemeState();

  const cssVariables = $derived(
    `--background: ${themeState().uiColors.background};
    --foreground: ${themeState().uiColors.foreground};
    --accent: ${themeState().uiColors.accent};
    --cursor: ${themeState().uiColors.cursor};
    --bright-black: ${themeState().brightColors.black};
    --bright-red: ${themeState().brightColors.red};
    --bright-green: ${themeState().brightColors.green};
    --bright-yellow: ${themeState().brightColors.yellow};
    --bright-blue: ${themeState().brightColors.blue};
    --bright-magenta: ${themeState().brightColors.magenta};
    --bright-cyan: ${themeState().brightColors.cyan};
    --bright-white: ${themeState().brightColors.white};
    --normal-black: ${themeState().normalColors.black};
    --normal-red: ${themeState().normalColors.red};
    --normal-green: ${themeState().normalColors.green};
    --normal-yellow: ${themeState().normalColors.yellow};
    --normal-blue: ${themeState().normalColors.blue};
    --normal-magenta: ${themeState().normalColors.magenta};
    --normal-cyan: ${themeState().normalColors.cyan};
    --normal-white: ${themeState().normalColors.white};`
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
        <WarpMock />
      </div>
      <div class="px-1">
        <Colors />
      </div>
    </div>
  </div>
</section>
