<script lang="ts">
  import type { Theme } from '$lib/types/theme';
  import Color from 'color';

  import ActivityBar from './ActivityBar.svelte';
  import EditorGroup from './EditorGroup.svelte';
  import SideBar from './SideBar.svelte';
  import StatusBar from './StatusBar.svelte';
  import TopBar from './TopBar.svelte';

  const { theme }: { theme: Theme } = $props();

  const fgAc1 = $derived.by(() => {
    if (theme.isDark) {
      return Color(theme.uiColors.AC1).isDark() ? theme.uiColors.FG1 : theme.uiColors.FG3;
    } else {
      return Color(theme.uiColors.AC1).isDark() ? theme.uiColors.FG3 : theme.uiColors.FG1;
    }
  });
  const fgAc2 = $derived.by(() => {
    if (theme.isDark) {
      return Color(theme.uiColors.AC2).isDark() ? theme.uiColors.FG1 : theme.uiColors.FG3;
    } else {
      return Color(theme.uiColors.AC2).isDark() ? theme.uiColors.FG3 : theme.uiColors.FG1;
    }
  });

  const colors = $derived(
    ` 
      --bg1: ${theme.uiColors.BG1};
      --bg2: ${theme.uiColors.BG2};
      --fg1: ${theme.uiColors.FG1};
      --fg2: ${theme.uiColors.FG2};
      --fg3: ${theme.uiColors.FG3};
      --ac1: ${theme.uiColors.AC1};
      --ac2: ${theme.uiColors.AC2};
      --listActive: ${theme.uiColors.AC1.slice(0, -2) + '80'};
      --listHover: ${theme.uiColors.AC1.slice(0, -2) + '40'};
      --tabHover: ${theme.uiColors.BG2.slice(0, -2) + '80'};
      --border: ${theme.uiColors.BORDER};
      --comment: ${theme.syntaxColors.comment};
      --fgAc1: ${fgAc1};
      --fgAc2: ${fgAc2};
    `
  );
</script>

<section class="flex h-full w-full flex-col overflow-hidden rounded-md" style={colors}>
  <TopBar />
  <div class="no-scrollbar flex h-full w-full overflow-x-scroll">
    <ActivityBar />
    <SideBar />
    <EditorGroup />
  </div>
  <StatusBar />
</section>

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
