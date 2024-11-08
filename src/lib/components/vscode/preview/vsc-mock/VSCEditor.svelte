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

<section class="flex h-full flex-col">
  <div class="flex h-full flex-col overflow-hidden rounded-xl" style={colors}>
    <div
      class="flex h-10 w-full items-center justify-center"
      style={`background: var(--bg2); transition-property: all; transition-duration: 200ms;`}
    >
      <input
        type="text"
        class="h-5 w-72 rounded-md border p-1 text-xs"
        style={`background: var(--bg1); color: var(--fg1); border-color: var(--comment); transition-property: all; transition-duration: 200ms;`}
      />
    </div>

    <div
      class="no-scrollbar flex flex-1 overflow-y-hidden overflow-x-scroll text-sm"
      style={`background: var(--bg1); color: var(--fg1); transition-property: all; transition-duration: 200ms;`}
    >
      <ActivityBar />
      <SideBar />
      <EditorGroup />
    </div>
    <div class="flex-shrink-0">
      <StatusBar />
    </div>
  </div>
</section>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
