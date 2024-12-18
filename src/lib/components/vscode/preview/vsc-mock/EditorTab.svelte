<script lang="ts">
  import clsx from 'clsx';

  const { name, active }: { name: string; active: boolean } = $props();
</script>

<div
  class={clsx(
    'tab cursor-pointer items-center px-2 py-[0.37rem] text-sm md:px-4',
    active ? 'active flex border-t' : 'hidden border-r md:flex'
  )}
>
  {name}
  <span class={clsx('x ml-2 text-xs', active && 'active')}>x</span>

  <style>
    .x {
      visibility: hidden;
      transition-property: all;
      transition-duration: 50ms;
    }
    .x.active {
      visibility: visible;
      transition-property: all;
      transition-duration: 50ms;
    }
    .tab:hover .x {
      visibility: visible;
      transition-property: all;
      transition-duration: 50ms;
    }
  </style>
</div>

<style>
  .tab.active {
    background: var(--bg2);
    color: var(--fg1);
    border-color: var(--ac1);
    transition-property: all;
    transition-duration: 100ms;
  }
  .tab.active:hover {
    background: var(--bg2);
    color: var(--fg1);
    border-color: var(--ac1);
    transition-property: all;
    transition-duration: 100ms;
  }
  .tab {
    background: var(--bg3);
    color: var(--comment);
    border-color: var(--border);
    transition-property: all;
    transition-duration: 100ms;
  }
  .tab:hover {
    background: var(--tabHover);
    color: var(--fg1);
    transition-property: all;
    transition-duration: 150ms;
  }
</style>
