<script lang="ts">
  import { onDestroy } from 'svelte';
  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';
  import ThemeCardUser from '$lib/components/vscode/theme/ThemeCardUser.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import { getIsEditing } from '$lib/state/vscode/editor.svelte';
  import { getAlphaColor } from '$lib/utils/vscode/colorUtils.svelte';
  import type { Theme } from '$lib/types/theme';

  const { data }: { data: { themes: Theme[] } } = $props();
  const selectedTheme = getSelectedTheme();
  const selectedFile = getSelectedFile();
  const isEditing = getIsEditing();
  if (data.themes.length > 0) {
    selectedTheme().set(data.themes[0]);
  }

  onDestroy(() => {
    selectedFile().set('typescript.js');
    if (!isEditing().isEditing) {
      selectedTheme().reset();
    }
  });
</script>

<svelte:head>
  <title>Saved Themes</title>
  <meta name="description" content="Save your favorite VSCode themes." />
</svelte:head>

{#if data.themes.length === 0}
  <div class="flex min-h-[calc(100vh-2rem)] items-center justify-center">
    <h1 class="text-3xl font-black drop-shadow-md md:text-6xl">No themes saved</h1>
  </div>
{:else}
  <section
    class="min-h-[calc(100vh-2rem)]"
    style={`background: ${getAlphaColor(selectedTheme().theme?.uiColors.BG1, 'aa')}; transition-property: all; transition-duration: 200ms;`}
  >
    <h1
      class="px-5 pt-20 text-center text-3xl font-black drop-shadow-md md:text-6xl"
      style={`color: ${selectedTheme().theme?.uiColors.FG1}`}
    >
      Your saved themes
    </h1>
    <div
      class="sticky top-14 z-10 flex w-full flex-col items-center justify-center gap-5 p-5 pb-24 shadow-sm backdrop-blur-xl sm:pb-12"
    >
      <div class="h-[20rem] w-full drop-shadow-md sm:h-[30rem] lg:w-2/3 xl:w-1/2">
        <VSCEditor />
        <div
          class="mt-2 flex flex-col items-center justify-start gap-0 pb-4 md:flex-row md:items-baseline md:justify-end md:gap-2"
          style={`color: ${selectedTheme().theme?.uiColors.AC1}`}
        >
          <h3 class="text-xl font-black drop-shadow-sm lg:text-2xl">
            {selectedTheme().theme?.name}
          </h3>
          <p
            class="text-xs font-bold drop-shadow-sm"
            style={`color: ${selectedTheme().theme?.uiColors.FG1}`}
          >
            <!-- <span class="text-xs font-normal drop-shadow-sm">by</span>
          {selectedTheme().theme?.userName} -->
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {#each data.themes as theme, index (theme.id)}
        <ThemeCardUser {theme} />
      {/each}
    </div>
  </section>
{/if}

<style>
</style>
