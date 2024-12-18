<script lang="ts">
  import clsx from 'clsx';
  import { ChevronDown, ChevronRight, Folder } from 'lucide-svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';

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
    children?: () => any;
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
    'item flex h-[1.3rem] w-full cursor-pointer items-center truncate px-2',
    isOpen && !isMain && 'sticky top-5',
    isActive && 'active',
    isMain && 'main font-bold',
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
  <span class="truncate text-xs">{name}</span>
</button>
{#if isFolder && isOpen}
  <div class="pl-1">
    {@render children()}
  </div>
{/if}

<style>
  .item:hover {
    background-color: var(--listHover);
    color: var(--fg1);
    transition-property: all;
    transition-duration: 100ms;
  }
  .item.active {
    background-color: var(--listActive);
    color: var(--fg1);
    transition-property: all;
    transition-duration: 100ms;
  }
  .item {
    background-color: var(--bg3);
    color: var(--fg2);
    transition-property: all;
    transition-duration: 100ms;
  }
  .item.main {
    background-color: var(--bg2);
    color: var(--fg2);
    transition-property: all;
    transition-duration: 100ms;
  }
</style>
