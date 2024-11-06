<script lang="ts">
  import EditorTab from './EditorTab.svelte';

  const tabs = [
    { name: 'main.svelte', active: true },
    { name: 'Header.svelte', active: false },
    { name: 'Footer.svelte', active: false }
  ];
</script>

<div class="flex flex-col overflow-auto">
  <div
    class="flex overflow-hidden truncate"
    style="background-color: var(--bg2); transition: all 200ms ease-in-out;"
  >
    {#each tabs as tab}
      <EditorTab name={tab.name} active={tab.active} />
    {/each}
  </div>
</div>
