<script lang="ts">
  import DownloadButton from '$lib/components/vscode/theme/DownloadButton.svelte';
  import type { Theme } from '$lib/types/theme';

  const { theme }: { theme: Theme } = $props();

  let styleVars = $derived(` 
    --color-background: ${theme.uiColors.BG1}; 
    --color-foreground: ${theme.uiColors.FG1};
    --color-accent: ${theme.uiColors.AC1};
    --color-accent-2: ${theme.uiColors.AC2};
    --color-storage: ${theme.syntaxColors.storage};
    --color-function: ${theme.syntaxColors.function};
    --color-variable: ${theme.syntaxColors.variable};
    --color-keyword: ${theme.syntaxColors.keyword};
  `);
  let isDownloading = $state(false);

  function downloadTheme() {
    isDownloading = true;
    setTimeout(() => {
      isDownloading = false;
    }, 2000);
  }
</script>

<div class="theme-card flex flex-col gap-1 overflow-hidden rounded-md" style={styleVars}>
  <div class="flex h-2 w-full items-center">
    <div class="h-2 w-full" style="background-color: var(--color-accent)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-accent-2)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-storage)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-function)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-variable)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-keyword)"></div>
  </div>
  <div class="flex w-full items-end justify-between p-4">
    <div class="flex flex-col">
      <span class="theme-name font-semibold">{theme.name}</span>
      <span class="theme-user text-xs">{theme.userName}</span>
    </div>

    <DownloadButton
      count={theme.downloads}
      {downloadTheme}
      {isDownloading}
      fg1={theme.uiColors.FG1}
      ac1={theme.uiColors.AC1}
    />
  </div>
</div>

<style>
  .theme-card {
    background-color: var(--color-background);
    color: var(--color-foreground);
  }
  .theme-name {
    color: var(--color-accent);
  }
  .theme-user {
    color: var(--color-foreground);
  }
</style>
