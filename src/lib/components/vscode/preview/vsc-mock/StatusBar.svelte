<script lang="ts">
  import { getSelectedFile } from '$lib/state/vscode/editor.svelte';
  import { Bell, GitBranch, Check, UploadCloud, CircleX, TriangleAlert } from 'lucide-svelte';

  const selectedFile = getSelectedFile();

  const leftItems = [
    { text: 'main*', icon: GitBranch },
    { icon: UploadCloud },
    { text: '0', icon: CircleX },
    { text: '0', icon: TriangleAlert }
  ];

  const language = $derived(selectedFile().file.displayName);

  const getRightItems = () => [
    { text: 'Ln 1, Col 1' },
    { text: 'Spaces: 2' },
    { text: 'UTF-8' },
    { text: 'LF' },
    { text: language },
    { text: 'Prettier', icon: Check },
    { icon: Bell }
  ];
</script>

<div
  class="flex h-6 w-full items-center overflow-hidden truncate text-xs"
  style="color: var(--fg3); transition-property: all; transition-duration: 350ms;"
>
  <div
    class="flex h-7 w-9 flex-shrink-0 items-center justify-center"
    style="color: var(--fgAc1); background-color: var(--ac1); transition-property: all; transition-duration: 350ms;"
  >
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9041 9.57067L8.9281 5.59463L12.9041 1.6186L12.2854 0.999878L8.00002 5.28527V5.90399L12.2854 10.1894L12.9041 9.57067ZM3 5.61874L7.07191 9.69064L3 13.7626L3.61872 14.3813L7.99999 10V9.38128L3.61872 5.00002L3 5.61874Z"
        fill="var(--fgAc1)"
      />
    </svg>
  </div>
  <div
    class="flex h-7 flex-1 items-center justify-between overflow-hidden truncate px-2 text-xs"
    style="color: var(--fgAc2); background-color: var(--ac2); transition-property: all; transition-duration: 350ms;"
  >
    <div class="flex items-center space-x-2 overflow-hidden truncate">
      {#each leftItems as item}
        <div
          class="flex cursor-pointer items-center overflow-hidden truncate p-1 transition-colors duration-200 hover:brightness-125"
          style="color: var(--fgAc2); transition-property: all; transition-duration: 350ms;"
        >
          {#if item.icon}
            <item.icon class="mr-1 h-3 w-3" />
          {/if}
          <span>{item.text}</span>
        </div>
      {/each}
    </div>
    <div class="hidden items-center space-x-2 md:flex">
      {#each getRightItems() as item}
        <div
          class="flex cursor-pointer items-center truncate p-1 capitalize transition-colors duration-200 hover:brightness-125"
          style="color: var(--fgAc2); transition-property: all; transition-duration: 350ms;"
        >
          {#if item.icon}
            <item.icon class="mr-1 h-3 w-3" />
          {/if}
          <span>{item.text}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
