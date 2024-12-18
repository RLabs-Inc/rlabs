<script lang="ts">
  import { Folder, MoreHorizontal } from 'lucide-svelte';
  import { exampleFiles } from '$lib/constants/example-files';
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import SideBarItem from './SideBarItem.svelte';

  import { getMonacoEditor } from '$lib/components/vscode/monaco-editor/monaco.svelte';
  const monacoEditor = getMonacoEditor();

  type FolderStates = {
    'vscode-theme-generator': boolean;
    src: boolean;
    'example-files': boolean;
  };
  const selectedFile = getSelectedFile();

  const folderStates = $state({
    'vscode-theme-generator': true,
    src: true,
    'example-files': true
  });

  const handleFileSelect = (name: string) => {
    selectedFile().set(name);
    monacoEditor.changeModel(selectedFile().file.snippet, selectedFile().file.language);
  };

  const handleFolderToggle = (name: keyof FolderStates) => {
    folderStates[name] = !folderStates[name];
  };
</script>

<div
  class="sideBar flex w-12 flex-col sm:w-36 2xl:w-40"
  style="background-color: var(--bg3); border-right: 1px solid var(--border); color: var(--fg2); transition-property: all; transition-duration: 100ms;"
>
  <div class="flex items-center justify-between p-2">
    <span
      class=" text-xs"
      style="color: var(--fg1); transition-property: all; transition-duration: 100ms;"
      >EXPLORER</span
    >
    <MoreHorizontal
      class="h-4 w-4"
      style="color: var(--fg1); transition-property: all; transition-duration: 100ms;"
    />
  </div>
  <div class="custom-scrollbar overflow-y-auto text-xs">
    <SideBarItem
      name="vscode-theme-generator"
      icon={Folder}
      isOpen={folderStates['vscode-theme-generator']}
      folderToggle={handleFolderToggle}
      fileSelect={handleFileSelect}
      isFolder
      isMain
    >
      <SideBarItem
        name="src"
        icon={Folder}
        isOpen={folderStates.src}
        folderToggle={handleFolderToggle}
        fileSelect={handleFileSelect}
        isFolder
        isMain={false}
      >
        <SideBarItem
          name="example-files"
          icon={Folder}
          isOpen={folderStates['example-files']}
          folderToggle={handleFolderToggle}
          fileSelect={handleFileSelect}
          isFolder
          isMain={false}
        >
          <div class="">
            {#each exampleFiles as file}
              <SideBarItem
                name={file.name}
                icon={file.icon}
                isFolder={false}
                isOpen={false}
                folderToggle={handleFolderToggle}
                fileSelect={handleFileSelect}
                isMain={false}
              />
            {/each}
          </div>
        </SideBarItem>
      </SideBarItem>
    </SideBarItem>
  </div>
</div>

<style>
  .custom-scrollbar {
    scrollbar-width: 1px;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: 1px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    border: 2px solid transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
