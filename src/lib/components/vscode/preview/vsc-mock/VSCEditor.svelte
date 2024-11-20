<script lang="ts">
  import Color from 'color';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

  import ActivityBar from './ActivityBar.svelte';
  import EditorGroup from './EditorGroup.svelte';
  import SideBar from './SideBar.svelte';
  import StatusBar from './StatusBar.svelte';
  const selectedThemeState = getSelectedTheme();

  const fgAc1 = $derived.by(() => {
    if (selectedThemeState().theme?.isDark) {
      return Color(selectedThemeState().theme?.uiColors.AC1).isDark()
        ? selectedThemeState().theme?.uiColors.FG1
        : selectedThemeState().theme?.uiColors.FG3;
    } else {
      return Color(selectedThemeState().theme?.uiColors.AC1).isDark()
        ? selectedThemeState().theme?.uiColors.FG3
        : selectedThemeState().theme?.uiColors.FG1;
    }
  });
  const fgAc2 = $derived.by(() => {
    if (selectedThemeState().theme?.isDark) {
      return Color(selectedThemeState().theme?.uiColors.AC2).isDark()
        ? selectedThemeState().theme?.uiColors.FG1
        : selectedThemeState().theme?.uiColors.FG3;
    } else {
      return Color(selectedThemeState().theme?.uiColors.AC2).isDark()
        ? selectedThemeState().theme?.uiColors.FG3
        : selectedThemeState().theme?.uiColors.FG1;
    }
  });

  function getColorWithOpacity(color: string | undefined, opacity: number) {
    if (color && color.length > 7) {
      return color.slice(0, -2) + opacity.toString();
    }
    return color + opacity.toString();
  }

  const colors = $derived(
    ` 
      --bg1: ${selectedThemeState().theme?.uiColors.BG1};
      --bg2: ${selectedThemeState().theme?.uiColors.BG2};
      --fg1: ${selectedThemeState().theme?.uiColors.FG1};
      --fg2: ${selectedThemeState().theme?.uiColors.FG2};
      --fg3: ${selectedThemeState().theme?.uiColors.FG3};
      --ac1: ${selectedThemeState().theme?.uiColors.AC1};
      --ac2: ${selectedThemeState().theme?.uiColors.AC2};
      --listActive: ${getColorWithOpacity(selectedThemeState().theme?.uiColors.AC2, 80)};
      --listHover: ${getColorWithOpacity(selectedThemeState().theme?.uiColors.AC2, 40)};
      --tabHover: ${getColorWithOpacity(selectedThemeState().theme?.uiColors.BG2, 80)};
      --border: ${selectedThemeState().theme?.uiColors.BORDER};
      --comment: ${selectedThemeState().theme?.syntaxColors.comment};
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
        class="h-5 w-72 rounded-md border p-1 text-xs focus:outline-none"
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
