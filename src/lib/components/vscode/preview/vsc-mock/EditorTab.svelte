<script lang="ts">
  import clsx from 'clsx';

  const { name, active }: { name: string; active: boolean } = $props();
</script>

<div
  class={clsx(
    'tab cursor-pointer items-center truncate px-2 py-2 text-sm transition-colors duration-200 md:px-4',
    active ? 'active flex border-t-2' : 'hidden border-r md:flex'
  )}
>
  {name}
  <span class="ml-2">x</span>
</div>

<style>
  .tab.active {
    background: var(--bg1);
    color: var(--fg1);
    border-color: var(--ac1);
  }
  .tab {
    background: var(--bg2);
    color: var(--comment);
    border-color: var(--border);
  }
  .tab:hover {
    background: var(--bg1);
    color: var(--fg1);
  }
</style>
