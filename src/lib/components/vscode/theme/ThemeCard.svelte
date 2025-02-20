<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';
  import { enhance, applyAction } from '$app/forms';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import DownloadButton from '$lib/components/vscode/theme/DownloadButton.svelte';
  import ShareButton from '$lib/components/vscode/theme/ShareButton.svelte';
  import EditButtonPublic from './EditButtonPublic.svelte';
  import type { Theme } from '$lib/types/vscode/theme';
  import clsx from 'clsx';
  import { getIsEditing } from '$lib/state/vscode/editor.svelte';
  import DownloadButtonPublic from './DownloadButtonPublic.svelte';

  const { theme, stopRandomizing }: { theme: Theme; stopRandomizing: () => void } = $props();

  const selectedTheme = getSelectedTheme();
  const isEditing = getIsEditing();

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
  let isSharing = $state(false);
  let isEditLoading = $state(false);

  async function shareTheme() {
    try {
      isSharing = true;
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('theme', theme.id.toString());
      const shareUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
      const shareData = {
        title: `${theme.name} - VSCode Theme`,
        text: `Check out this awesome VSCode theme: ${theme.name}`,
        url: shareUrl
      };

      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        // You might want to show a toast notification here that the URL was copied
      }
    } catch (error) {
      console.error('Error sharing theme:', error);
    } finally {
      isSharing = false;
    }
  }

  async function editTheme() {
    stopRandomizing();
    isEditing().setIsEditing(true);
    isEditLoading = true;
    selectedTheme().setPublic(theme);
    goto(`/vscode-themes-community/theme-generator`);
    setTimeout(() => {
      isEditLoading = false;
      isEditing().setIsEditing(false);
    }, 3000);
  }

  function handleClick() {
    stopRandomizing();
    selectedTheme().set(theme);
  }
</script>

<div
  class={clsx(
    'theme-card flex w-full max-w-xs cursor-pointer flex-col gap-1 place-self-center overflow-hidden rounded-md outline-hidden focus:outline-hidden',
    selectedTheme().theme?.name === theme.name
      ? 'active shadow-lg'
      : 'hover:scale-105 hover:shadow-md focus:scale-105'
  )}
  style={styleVars}
  onclick={() => {
    if (isEditLoading) return;
    handleClick();
  }}
  onkeydown={(event) => {
    if (event.key === 'Enter') {
      if (isEditLoading) return;
      handleClick();
    }
  }}
  aria-label={theme.name}
  aria-roledescription="Theme Card"
  aria-keyshortcuts="Enter"
  tabindex="0"
  role="button"
  aria-pressed={selectedTheme().theme?.name === theme.name}
>
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

    <div class="flex items-center gap-2">
      <EditButtonPublic
        {editTheme}
        isEditing={isEditLoading}
        ac1={theme.uiColors.AC1}
        ac2={theme.uiColors.AC2}
      />
      <!-- <ShareButton
        {theme}
        count={theme.shares || 0}
        {shareTheme}
        {isSharing}
        fg1={theme.uiColors.FG1}
        ac1={theme.uiColors.AC1}
      /> -->
      <form
        method="post"
        use:enhance={() => {
          isDownloading = true;
          return async ({ result }: { result: any }) => {
            const data = result.data;
            if (data?.success) {
              const blob = new Blob([data.vsixBuffer], {
                type: 'application/octet-stream'
              });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${theme.name}.vsix`;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
              a.remove();
            }
            invalidateAll();
            applyAction(result);
            isDownloading = false;
          };
        }}
      >
        <DownloadButtonPublic
          count={theme.downloads || 0}
          themeId={theme.id}
          {isDownloading}
          ac2={theme.uiColors.AC2}
          ac1={theme.uiColors.AC1}
        />
      </form>
    </div>
  </div>
</div>

<style>
  .theme-card {
    background-color: var(--color-background);
    color: var(--color-foreground);
    transition-property: all;
    transition-duration: 200ms;
  }
  .theme-card.active {
    scale: 1.1;
  }
  .theme-name {
    color: var(--color-accent);
  }
  .theme-user {
    color: var(--color-foreground);
  }
</style>
