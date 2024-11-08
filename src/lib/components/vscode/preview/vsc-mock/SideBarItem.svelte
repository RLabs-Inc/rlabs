<script lang="ts">
  import clsx from 'clsx';
  import { ChevronDown, ChevronRight, Folder, File } from 'lucide-svelte';
  import { getSelectedFile } from '$lib/state/vscode/preview.svelte';

  type FolderStates = {
    'vscode-theme-generator': boolean;
    src: boolean;
    'example-files': boolean;
  };

  const selectedFile = getSelectedFile();

  const { folderToggle, fileSelect, name, icon, isMain, isFolder, isOpen, children } = $props<{
    folderToggle: (name: keyof FolderStates) => void;
    fileSelect: (name: string) => void;
    name: string;
    icon: typeof Folder | string;
    isFolder: boolean;
    isOpen: boolean;
    isMain: boolean;
  }>();

  const isActive = $derived(selectedFile().file.name === name);

  const handleClick = () => {
    if (isFolder) {
      folderToggle(name);
    } else {
      fileSelect(name);
    }
  };
</script>

<button
  class={clsx(
    'item flex w-full cursor-pointer items-center truncate px-2 py-1',
    isOpen && !isMain && 'sticky top-7',
    isActive && 'active',
    isMain && 'main',
    isOpen && isMain && 'sticky top-0'
  )}
  onclick={handleClick}
>
  {#if isFolder}
    {#if isOpen}
      <ChevronDown class="h-4 w-4" />
    {:else}
      <ChevronRight class="h-4 w-4" />
    {/if}
  {:else}
    <span class="mr-1 h-4 w-4"></span>
  {/if}
  {#if isFolder}
    <Folder class="mr-1 h-4 w-4 text-yellow-400" />
  {:else}
    <img src={icon} class="mr-1 h-4 w-4" alt={name} />
  {/if}
  <span class="truncate">{name}</span>
</button>
{#if isFolder && isOpen}
  <div class="pl-1">
    {@render children()}
  </div>
{/if}

<style>
  .item:hover {
    background-color: var(--listHover);
  }
  .item.active {
    background-color: var(--listActive);
  }
  .item {
    color: var(--fg1);
    background-color: var(--bg1);
  }
  .item.main {
    background-color: var(--bg2);
  }
</style>
