<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';
  import ThemeCard from '$lib/components/vscode/theme/ThemeCard.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import type { Theme } from '$lib/types/theme';
  import { randomInteger } from '$lib/utils/vscode/math';
  import { getAlphaColor } from '$lib/utils/vscode/colorUtils.svelte';

  const { data }: { data: { themes: Theme[] } } = $props();
  const selectedTheme = getSelectedTheme();
  const selectedFile = getSelectedFile();
  selectedTheme().set(data.themes[0]);

  let randomThemeInterval: NodeJS.Timeout;

  onMount(() => {
    randomizeSelectedTheme();
  });

  onDestroy(() => {
    stopRandomizingSelectedTheme();
  });

  const randomizeSelectedTheme = () => {
    randomThemeInterval = setInterval(() => {
      const themeNumber = randomInteger(0, data.themes.length - 1);
      selectedTheme().set(data.themes[themeNumber]);
    }, 1000);
  };

  const stopRandomizingSelectedTheme = () => {
    clearInterval(randomThemeInterval);
    selectedTheme().reset();
    selectedFile().set('typescript.js');
  };
</script>

<svelte:head>
  <title>VSCode Themes Community</title>
  <meta
    name="description"
    content="Create, share and discover new VSCode themes using our visual studio code theme generator based on both color theory and sacred geometry patterns to create aesthesic color themes."
  />
</svelte:head>

<section
  class="flex min-h-[calc(100vh-2rem)] w-full flex-col items-center"
  style={`background: ${getAlphaColor(selectedTheme().theme?.uiColors.BG1, 'dd')}; transition-property: all; transition-duration: 200ms;`}
>
  <h1
    class="text-bass px-5 pt-[4rem] text-center font-black drop-shadow-md sm:text-lg md:pt-[5rem] md:text-xl lg:text-xl 2xl:text-2xl"
    style={`color: ${selectedTheme().theme?.uiColors.FG1}`}
  >
    Welcome to VSCode Themes Community
  </h1>
  <div
    class="w-full px-4 py-1 pt-[0.5rem]"
    style={`color: ${selectedTheme().theme?.uiColors.AC2}; transition-property: all; transition-duration: 200ms;`}
  >
    <h2 class="text-center text-3xl font-black drop-shadow-md">Discover new themes</h2>
  </div>
  <div
    class="sticky top-14 z-10 flex w-full flex-col items-center justify-center gap-5 p-5 pb-12 shadow-sm backdrop-blur-3xl"
  >
    <div
      class="h-[17rem] w-full drop-shadow-md md:h-[20rem] md:w-5/6 lg:h-[17rem] lg:w-2/3 xl:h-[20rem] xl:w-1/2 2xl:h-[23rem]"
    >
      <VSCEditor />
      <div
        class="mt-1 flex flex-row items-baseline justify-end gap-1 px-0.5"
        style={`color: ${selectedTheme().theme?.uiColors.AC1}`}
      >
        <span
          class="text-base font-black drop-shadow-sm lg:text-lg"
          style={`color: ${selectedTheme().theme?.uiColors.AC1}`}
          >{selectedTheme().theme?.name}</span
        >
        <span style={`color: ${selectedTheme().theme?.uiColors.FG1}`}>
          <span class="text-xs font-normal drop-shadow-sm md:text-sm">by</span>
          <span class="text-xs font-semibold drop-shadow-sm md:text-sm">
            {selectedTheme().theme?.userName}
          </span>
        </span>
      </div>
    </div>
  </div>

  <div class="grid w-full grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each data.themes as theme, index (theme.id)}
      <ThemeCard {theme} stopRandomizing={stopRandomizingSelectedTheme} />
    {/each}
  </div>
</section>

<style>
</style>
