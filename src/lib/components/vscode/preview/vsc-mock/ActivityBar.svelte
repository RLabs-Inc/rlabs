<script lang="ts">
  import clsx from 'clsx';
  import { File, Search, GitBranch, Bug, Package, User, Settings } from 'lucide-svelte';

  const items = $state([
    { icon: File, active: true },
    { icon: Search, active: false },
    { icon: GitBranch, active: false }
    // { icon: Bug, active: false },
    // { icon: Package, active: false }
  ]);
</script>

<div class="acBar relative flex h-full w-12 shrink-0 flex-col items-center space-y-1 py-4">
  {#each items as item}
    <div class={clsx('acBtn w-full border-l-[2.5px] p-3 py-3', item.active && 'active')}>
      <item.icon class="h-5 w-5" />
    </div>
  {/each}
  <div class="absolute bottom-4 flex flex-col items-center space-y-4">
    <User class="acBtn h-7 w-7" />
    <Settings class="acBtn h-7 w-7" />
  </div>
  <style>
    .acBtn {
      color: var(--comment);
      border-color: transparent;
      transition-property: all;
      transition-duration: 100ms;
      cursor: pointer;
    }
    .acBtn:hover {
      color: var(--fg1);
    }
    .acBtn.active {
      color: var(--fg1);
      border-color: var(--ac1);
    }
  </style>
</div>

<style>
  .acBar {
    background-color: var(--bg2);
    transition-property: all;
    transition-duration: 100ms;
  }
</style>
