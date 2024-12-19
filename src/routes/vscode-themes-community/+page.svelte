<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';
  import ThemeCard from '$lib/components/vscode/theme/ThemeCard.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getIsEditing, getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import type { Theme } from '$lib/types/theme';
  import { randomInteger } from '$lib/utils/common/math';
  import { getAlphaColor } from '$lib/utils/vscode/colorUtils.svelte';

  import clsx from 'clsx';

  const { data }: { data: { themes: Theme[] } } = $props();
  const selectedTheme = getSelectedTheme();
  const selectedFile = getSelectedFile();
  const isEditing = getIsEditing();

  let randomThemeInterval: NodeJS.Timeout;

  selectRandomTheme();

  function selectRandomTheme() {
    const themeNumber = randomInteger(0, data.themes.length - 1);
    selectedTheme().set(data.themes[themeNumber]);
  }

  selectRandomTheme();

  onMount(() => {
    randomizeSelectedTheme();
    selectRandomTheme();
  });

  onDestroy(() => {
    stopRandomizingSelectedTheme();
  });

  const randomizeSelectedTheme = () => {
    randomThemeInterval = setInterval(() => {
      selectRandomTheme();
    }, 2000);
  };

  const stopRandomizingSelectedTheme = () => {
    clearInterval(randomThemeInterval);
    selectedFile().set('typescript.js');
    if (!isEditing().isEditing) {
      selectedTheme().reset();
    }
  };
</script>

<svelte:head>
  <title>VSCode Themes Community</title>
  <meta
    name="description"
    content="Create, share and discover new VSCode themes using our visual studio code theme generator based on both color theory and sacred geometry patterns to create aesthesic color themes. Try out the new Shadcn UI theme generator that uses the same algorithm to create aesthesic color themes for your next Shadcn UI project."
  />
</svelte:head>

<section
  class={clsx('flex min-h-[calc(100vh-2rem)] w-full flex-col items-center')}
  style={`background: ${getAlphaColor(selectedTheme().theme?.uiColors.BG1, '60')}; transition-property: all; transition-duration: 350ms;`}
>
  <div class="px-4 pt-16 pb-2">
    <Alert class="border-foreground bg-transparent backdrop-blur-sm">
      <AlertTitle
        ><a href="https://shadcn.rlabs.art/generate" class="font-black underline"
          >Try the new Shadcn UI theme generator</a
        ></AlertTitle
      >
      <AlertDescription>
        It uses the same algorithm to create aesthesic color themes for your next Shadcn UI project. <a
          href="https://shadcn.rlabs.art/generate"
          class=" underline">Try now!</a
        >
      </AlertDescription>
    </Alert>
  </div>
  <section
    class="border-border sticky -top-[3rem] z-10 w-full border-b shadow-xs backdrop-blur-3xl"
    style={`background: ${getAlphaColor(selectedTheme().theme?.uiColors.BG1, '80')}; transition-property: all; transition-duration: 350ms;`}
  >
    <h1
      class="px-5 pt-[1rem] text-center font-black drop-shadow-md sm:text-lg md:pt-[1rem] md:text-xl lg:text-xl 2xl:text-2xl"
    >
      Welcome to VSCode Themes Community
    </h1>
    <div class="w-full px-4 pt-[0.5rem]">
      <h2
        class="text-center text-3xl font-black drop-shadow-md"
        style={`color: ${selectedTheme().theme?.uiColors.AC2}; transition-property: all; transition-duration: 500ms;`}
      >
        Discover new themes
      </h2>
    </div>
    <div class="flex w-full flex-col items-center justify-center gap-5 px-5 pt-5 pb-8">
      <div
        class="mt-1 h-[17rem] w-full drop-shadow-md md:h-[20rem] md:w-5/6 lg:h-[17rem] lg:w-2/3 xl:h-[20rem] xl:w-1/2 2xl:h-[23rem]"
      >
        <VSCEditor />
        <div class="flex flex-row items-baseline justify-end gap-1 px-0.5">
          <span
            class="text-base font-black drop-shadow-xs lg:text-lg"
            style={`color: ${selectedTheme().theme?.uiColors.AC1}; transition-property: all; transition-duration: 200ms;`}
            >{selectedTheme().theme?.name}</span
          >
          <span
            style={`color: ${selectedTheme().theme?.uiColors.FG1}; transition-property: all; transition-duration: 200ms;`}
          >
            <span class="text-xs font-normal drop-shadow-xs md:text-sm">by</span>
            <span class="text-xs font-semibold drop-shadow-xs md:text-sm">
              {selectedTheme().theme?.userName}
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>

  <div class="grid w-full grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each data.themes as theme, index (theme.id)}
      <ThemeCard {theme} stopRandomizing={stopRandomizingSelectedTheme} />
    {/each}
  </div>
</section>

<style>
</style>
