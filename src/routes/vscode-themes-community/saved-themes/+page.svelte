<script lang="ts">
  import { onDestroy } from 'svelte';
  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';
  import ThemeCardUser from '$lib/components/vscode/theme/ThemeCardUser.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import { getIsEditing } from '$lib/state/vscode/editor.svelte';
  import { getAlphaColor } from '$lib/utils/vscode/colorUtils.svelte';
  import type { Theme } from '$lib/types/vscode/theme';

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
    class="min-h-[calc(100vh-2rem)] w-full flex-col items-center"
    style={`background: ${getAlphaColor(selectedTheme().theme?.uiColors.BG1, '60')}; transition-property: all; transition-duration: 200ms;`}
  >
    <section
      class="border-border sticky top-10 z-10 w-full border-b shadow-xs backdrop-blur-3xl md:top-[3rem]"
      style={`background: ${getAlphaColor(selectedTheme().theme?.uiColors.BG1, '80')}; transition-property: all; transition-duration: 350ms;`}
    >
      <div class="flex w-full flex-row items-center justify-center gap-5 px-5 pt-10 pb-8">
        <div
          class="mt-1 h-[17rem] w-full drop-shadow-md md:h-[20rem] md:w-5/6 lg:h-[17rem] lg:w-4/7 xl:h-[20rem] 2xl:h-[23rem] 2xl:w-3/7"
        >
          <VSCEditor />
        </div>
        <div
          class="flex h-[17rem] flex-col justify-end gap-1 md:h-[20rem] lg:h-[17rem] xl:h-[20rem] 2xl:h-[23rem]"
        >
          <span
            class="text-lg font-black drop-shadow-md md:text-xl"
            style={`color: ${selectedTheme().theme?.uiColors.AC1}; transition-property: all; transition-duration: 200ms;`}
            >{selectedTheme().theme?.name}</span
          >
          <span
            class="text-xs drop-shadow-md md:text-sm"
            style={`color: ${selectedTheme().theme?.uiColors.FG1}; transition-property: all; transition-duration: 200ms;`}
          >
            Updated {selectedTheme().theme?.updatedAt.toLocaleString()}
          </span>
          <span
            class="text-xs drop-shadow-md md:text-sm"
            style={`color: ${selectedTheme().theme?.uiColors.FG1}; transition-property: all; transition-duration: 200ms;`}
          >
            {selectedTheme().theme?.downloads !== undefined &&
            selectedTheme().theme?.downloads === 1
              ? `${selectedTheme().theme?.downloads} download`
              : `${selectedTheme().theme?.downloads} downloads`}
          </span>
          <span
            class="text-xs drop-shadow-md md:text-sm"
            style={`color: ${selectedTheme().theme?.uiColors.FG1}; transition-property: all; transition-duration: 200ms;`}
          >
            {selectedTheme().theme?.shares !== undefined && selectedTheme().theme?.shares === 1
              ? `${selectedTheme().theme?.shares} share`
              : `${selectedTheme().theme?.shares} shares`}
          </span>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 gap-10 p-15 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {#each data.themes as theme, index (theme.id)}
        <ThemeCardUser {theme} />
      {/each}
    </div>
  </section>
{/if}

<style>
</style>
