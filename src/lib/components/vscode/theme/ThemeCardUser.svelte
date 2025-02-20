<script lang="ts">
  import { invalidateAll, goto } from '$app/navigation';
  import { enhance, applyAction } from '$app/forms';
  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getIsEditing } from '$lib/state/vscode/editor.svelte';
  import DownloadButton from '$lib/components/vscode/theme/DownloadButton.svelte';
  import DeleteButton from '$lib/components/vscode/theme/DeleteButton.svelte';
  import ShareButton from '$lib/components/vscode/theme/ShareButton.svelte';
  import EditButton from '$lib/components/vscode/theme/EditButton.svelte';

  import type { Theme } from '$lib/types/vscode/theme';
  import clsx from 'clsx';
  import { Download } from 'lucide-svelte';
  import DownloadVimButton from './DownloadVimButton.svelte';

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
  let isDownloadingVim = $state(false);
  let isSharing = $state(false);
  let isDeleting = $state(false);
  let isEditLoading = $state(false);

  async function editTheme() {
    isEditing().setIsEditing(true);
    isEditLoading = true;
    selectedTheme().set(theme);
    goto(`/vscode-themes-community/theme-generator`);
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
    'theme-card flex w-full max-w-sm cursor-pointer flex-col gap-1 place-self-center overflow-hidden rounded-md outline-hidden focus:outline-hidden',
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
    <div class="flex w-full items-end justify-between">
      <div class="flex flex-col">
        <span class="theme-name font-semibold">{theme.name}</span>
        <span class="theme-user text-xs">{theme.userName}</span>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex items-end justify-end gap-3">
          <EditButton
            {editTheme}
            isEditing={isEditLoading}
            ac2={theme.uiColors.AC2}
            ac1={theme.uiColors.AC1}
          />
          <DeleteButton {deleteTheme} {isDeleting} isDark={theme.isDark} ac1={theme.uiColors.AC2} />
        </div>

        <div class="flex w-full items-end justify-end gap-3">
          <span class="text-xs" style={`color: ${theme.uiColors.AC2}`}> Download </span>

          <div class="">
            <form
              method="post"
              use:enhance={() => {
                isDownloadingVim = true;
                return async ({ result }: { result: any }) => {
                  const data = result.data;
                  console.log(data);
                  if (data?.success) {
                    const blob = new Blob([data.zipBuffer], {
                      type: 'application/octet-stream'
                    });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = data.fileName;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                  }
                  invalidateAll();
                  applyAction(result);
                  isDownloadingVim = false;
                };
              }}
            >
              <input type="hidden" name="themeId" value={theme.id} />
              <DownloadVimButton
                themeId={theme.id}
                isDownloading={isDownloadingVim}
                ac2={theme.uiColors.AC2}
                ac1={theme.uiColors.AC1}
              />
            </form>
          </div>
          <div class="flex items-center gap-3">
            <!-- <ShareButton
              count={theme.shares ?? 0}
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
              <DownloadButton
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
