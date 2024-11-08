<script lang="ts">
  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';
  import Controls from '$lib/components/vscode/generator/Controls.svelte';
  import UIColors from '$lib/components/vscode/generator/UIColors.svelte';
  import AnsiColors from '$lib/components/vscode/generator/AnsiColors.svelte';
  import SyntaxColors from '$lib/components/vscode/generator/SyntaxColors.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';

  import { initialAnsiColors, initialSyntaxColors, initialUIColors } from '$lib/constants/colors';
  import type { Theme } from '$lib/types/theme';

  const initialTheme: Theme = {
    id: 0,
    name: '',
    userId: '',
    userName: '',
    isDark: false,
    scheme: 'dark',
    baseHue: 220,
    uiSaturation: 100,
    syntaxSaturation: 100,
    ansiSaturation: 100,
    isPublic: false,
    uiColors: initialUIColors,
    syntaxColors: initialSyntaxColors,
    ansiColors: initialAnsiColors,
    shares: 0,
    downloads: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  const selectedTheme = getSelectedTheme();

  const currentTheme = $derived(selectedTheme().theme || initialTheme);
</script>

<section class="">
  <div class="flex flex-col items-center justify-center px-5 py-20">
    <div class="flex w-full gap-5">
      <Controls />
      <div class="max-h-[50rem] w-full flex-1">
        <VSCEditor theme={currentTheme} />
      </div>
      <div class="flex flex-col gap-5">
        <UIColors />
        <AnsiColors />
      </div>
    </div>
    <SyntaxColors />
  </div>
</section>
