<script lang="ts">
  import Preview from '$lib/components/vscode/preview/Preview.svelte';
  import ThemeCard from '$lib/components/vscode/theme/ThemeCard.svelte';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import type { Theme } from '$lib/types/theme';

  const { data }: { data: { themes: Theme[] } } = $props();
  const selectedTheme = getSelectedTheme();

  selectedTheme.set(data.themes[0]);
</script>

<section class="flex h-full flex-col gap-4 px-4 py-4 lg:px-8">
  <div class="flex h-[75vh] flex-col items-center justify-center gap-2">
    <h1 class="text-5xl font-black">Welcome to VSCode Themes Community</h1>
    <h2 class="text-2xl font-bold text-muted-foreground">
      Discover and share new themes for VSCode.
    </h2>
    <Preview theme={selectedTheme.theme || data.themes[0]} />
  </div>
  <div class="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {#each data.themes as theme, index (theme.id)}
      <ThemeCard {theme} />
    {/each}
  </div>
</section>
