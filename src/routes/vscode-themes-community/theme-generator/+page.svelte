<script lang="ts">
  import type { PageData } from './$types';
  import { onDestroy, onMount } from 'svelte';
  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';
  import Controls from '$lib/components/vscode/generator/Controls.svelte';
  import UIColors from '$lib/components/vscode/generator/UIColors.svelte';
  import AnsiColors from '$lib/components/vscode/generator/AnsiColors.svelte';
  import SyntaxColors from '$lib/components/vscode/generator/SyntaxColors.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';
  import type { Theme } from '$lib/types/theme';

  import ColorPicker from '$lib/components/vscode/generator/ColorPicker.svelte';

  const selectedTheme = getSelectedTheme();
  const selectedFile = getSelectedFile();
  const selectedColor = getSelectedColor();
  const { data }: { data: PageData } = $props();

  let theme = $state<Theme | undefined>(undefined);

  onMount(() => {
    if (data.id) {
      theme = data.themes?.find((theme) => theme.id === Number(data.id));
    }
  });

  if (!selectedTheme().theme) {
    selectedTheme().reset();
  }

  onDestroy(() => {
    selectedTheme().reset();
    selectedFile().set('typescript.js');
  });
</script>

<svelte:head>
  <title>VSCode Theme Generator</title>
  <meta
    name="description"
    content="Create, share and discover new VSCode themes using our visual studio code theme generator based on both color theory and sacred geometry patterns to create aesthesic color themes."
  />
</svelte:head>

<section class="min-h-[calc(100vh-2rem)]">
  <div class="flex flex-col items-center justify-center px-5 pt-20">
    <div class="flex w-full flex-wrap gap-5 lg:flex-nowrap">
      <div class="flex w-full flex-col gap-5 lg:w-auto">
        <Controls userId={data.userId} themes={data.themes || []} />
      </div>
      <div class="flex w-full flex-col gap-5">
        <div class="flex flex-wrap gap-5 xl:flex-nowrap">
          <div class="max-h-[40.4rem] flex-1">
            <VSCEditor />
          </div>
          <div class="flex w-full flex-col gap-5 md:flex-row xl:w-auto xl:flex-col">
            <div class="flex-1">
              <UIColors />
            </div>
            <div class="flex-1">
              <AnsiColors />
            </div>
          </div>
        </div>
        <SyntaxColors />
      </div>
    </div>
  </div>
</section>
