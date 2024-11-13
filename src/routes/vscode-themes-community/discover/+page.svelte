<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';
  import ThemeCard from '$lib/components/vscode/theme/ThemeCard.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import { getAlphaColor } from '$lib/utils/vscode/colorUtils.svelte';
  import type { Theme } from '$lib/types/theme';
  import { randomInteger } from '$lib/utils/vscode/math';

  const { data }: { data: { themes: Theme[] } } = $props();
  const selectedTheme = getSelectedTheme();
  const selectedFile = getSelectedFile();
  if (data.themes.length > 0) {
    selectedTheme().set(data.themes[0]);
  }

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
  <title>Discover new VSCode themes</title>
  <meta
    name="description"
    content="Discover new VSCode themes, download themes in VSIX format ready to install in vscode or even publish to the marketplace."
  />
</svelte:head>

<section
  class="flex min-h-[calc(100vh-2rem)] w-full flex-col items-center"
  style={`background: ${getAlphaColor(selectedTheme().theme?.uiColors.BG1, 'aa')}; transition-property: all; transition-duration: 200ms;`}
>
  <h1
    class="lg:pt:48 px-5 pt-20 text-center text-3xl font-black drop-shadow-md md:pt-40 md:text-6xl xl:pt-52"
    style={`color: ${selectedTheme().theme?.uiColors.FG1}`}
  >
    Welcome to VSCode Themes Community
  </h1>
  <div
    class="w-full px-4 py-1 md:pt-20 lg:pt-24"
    style={`color: ${selectedTheme().theme?.uiColors.AC2}; transition-property: all; transition-duration: 200ms;`}
  >
    <h2 class="text-center text-2xl font-black drop-shadow-md sm:text-5xl">Discover new themes</h2>
  </div>
  <div
    class="sticky top-14 z-10 flex w-full flex-col items-center justify-center gap-5 p-5 pb-24 shadow-sm backdrop-blur-xl"
  >
    <div class="h-[20rem] w-full drop-shadow-md sm:h-[30rem] lg:w-2/3 xl:w-1/2">
      <VSCEditor />
      <div
        class="mt-2 flex flex-col items-center justify-start gap-0 pb-4 md:flex-row md:items-baseline md:justify-end md:gap-2"
        style={`color: ${selectedTheme().theme?.uiColors.AC1}`}
      >
        <h3 class="text-xl font-black drop-shadow-sm lg:text-2xl">{selectedTheme().theme?.name}</h3>
        <p
          class="text-xs font-bold drop-shadow-sm"
          style={`color: ${selectedTheme().theme?.uiColors.FG1}`}
        >
          <span class="text-xs font-normal drop-shadow-sm">by</span>
          {selectedTheme().theme?.userName}
        </p>
      </div>
    </div>
  </div>

  <div
    class="hidden w-full grid-cols-1 gap-10 p-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    {#each data.themes as theme, index (theme.id)}
      <ThemeCard {theme} stopRandomizing={stopRandomizingSelectedTheme} />
    {/each}
  </div>
</section>

<style>
</style>
