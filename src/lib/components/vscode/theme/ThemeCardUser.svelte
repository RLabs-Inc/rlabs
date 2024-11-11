<script lang="ts">
  import { invalidateAll, goto } from '$app/navigation';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getIsEditing } from '$lib/state/vscode/editor.svelte';
  import DownloadButton from '$lib/components/vscode/theme/DownloadButton.svelte';
  import DeleteButton from '$lib/components/vscode/theme/DeleteButton.svelte';
  import ShareButton from '$lib/components/vscode/theme/ShareButton.svelte';
  import EditButton from '$lib/components/vscode/theme/EditButton.svelte';

  import type { Theme } from '$lib/types/theme';
  import clsx from 'clsx';

  const { theme }: { theme: Theme } = $props();

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
  let isDeleting = $state(false);
  let isEditLoading = $state(false);
  async function downloadThemeVSIX() {
    isDownloading = true;
    const vsixBuffer = await fetch(`/api/vscode/download-theme?id=${theme.id}`);
    if (vsixBuffer) {
      const blob = new Blob([await vsixBuffer.blob()], {
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
    isDownloading = false;
  }

  async function editTheme() {
    isEditing().setIsEditing(true);
    isEditLoading = true;
    selectedTheme().set(theme);
    goto(`/vscode/theme-generator`);
    setTimeout(() => {
      isEditing().setIsEditing(false);
      isEditLoading = false;
    }, 3000);
  }

  async function shareTheme() {
    isSharing = true;
    setTimeout(() => {
      isSharing = false;
    }, 3000);
  }

  function handleClick() {
    selectedTheme().set(theme);
  }

  async function deleteTheme() {
    if (confirm('Are you sure you want to delete this theme?')) {
      isDeleting = true;
      await fetch(`/api/vscode/delete-theme?id=${theme.id}`, {
        method: 'DELETE'
      });
      invalidateAll();
      selectedTheme().reset();
      setTimeout(() => {
        isDeleting = false;
      }, 2000);
    }
  }
</script>

<div
  class={clsx(
    'theme-card flex w-full max-w-sm cursor-pointer flex-col gap-1 place-self-center overflow-hidden rounded-md focus:outline-none',
    selectedTheme().theme?.name === theme.name ? 'active' : 'hover:scale-105 focus:scale-105'
  )}
  style={styleVars}
  onclick={() => {
    handleClick();
  }}
  onkeydown={(event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }}
  aria-label={theme.name}
  aria-roledescription="Theme Card"
  aria-keyshortcuts="Enter"
  tabindex="0"
  role="button"
>
  <div class="flex h-2 w-full items-center">
    <div class="h-2 w-full" style="background-color: var(--color-accent)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-accent-2)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-storage)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-function)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-variable)"></div>
    <div class="h-2 w-full" style="background-color: var(--color-keyword)"></div>
  </div>
  <div class="flex w-full flex-wrap items-end justify-between p-4">
    <div class="flex flex-col">
      <span class="theme-name font-semibold">{theme.name}</span>
      <span class="theme-user text-xs">{theme.userName}</span>
    </div>
    <div class="flex w-full items-center justify-end gap-5">
      <div class="flex items-center gap-3">
        <ShareButton
          count={theme.shares ?? 0}
          {shareTheme}
          {isSharing}
          fg1={theme.uiColors.FG1}
          ac1={theme.uiColors.AC1}
        />
        <DownloadButton
          count={theme.downloads ?? 0}
          downloadTheme={downloadThemeVSIX}
          {isDownloading}
          fg1={theme.uiColors.FG1}
          ac1={theme.uiColors.AC1}
        />
      </div>
      <div class="flex items-center gap-3">
        <EditButton
          {editTheme}
          isEditing={isEditLoading}
          fg1={theme.uiColors.FG1}
          ac1={theme.uiColors.AC1}
        />
        <DeleteButton {deleteTheme} {isDeleting} isDark={theme.isDark} />
      </div>
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
