<script lang="ts">
  import EditorTab from './EditorTab.svelte';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  const selectedFile = getSelectedFile();

  const tabs = [
    { name: 'Header.svelte', active: false },
    { name: 'Footer.svelte', active: false }
  ];
</script>

<div class="flex flex-col">
  <div
    class="flex"
    style="background-color: var(--bg1); transition-property: all; transition-duration: 100ms;"
  >
    <EditorTab name={selectedFile().file.name} active={true} />
    {#each tabs as tab}
      <EditorTab name={tab.name} active={tab.active} />
    {/each}
  </div>
  <div
    class="flex h-[1.25rem] w-full items-center"
    style="background-color: var(--bg2); transition-property: all; transition-duration: 100ms;"
  >
    <span class="w-full px-4 text-xs">
      <span class="breadcrumb"> src ></span>
      <span class="breadcrumb"> example-files ></span>
      <span class="breadcrumb"> {selectedFile().file.name}</span>
    </span>
  </div>
</div>

<style>
  .breadcrumb {
    color: var(--comment);
    cursor: pointer;
    transition-property: all;
    transition-duration: 100ms;
  }
  .breadcrumb:hover {
    color: var(--fg1);
    transition-property: all;
    transition-duration: 150ms;
  }
</style>
