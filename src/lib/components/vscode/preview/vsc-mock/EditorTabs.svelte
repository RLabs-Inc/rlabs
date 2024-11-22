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
    style="background-color: var(--bg1); transition-property: all; transition-duration: 350ms;"
  >
    <EditorTab name={selectedFile().file.name} active={true} />
    {#each tabs as tab}
      <EditorTab name={tab.name} active={tab.active} />
    {/each}
  </div>
  <div
    class="h-[1.45rem] w-full"
    style="background-color: var(--bg2); transition-property: all; transition-duration: 350ms;"
  ></div>
</div>
