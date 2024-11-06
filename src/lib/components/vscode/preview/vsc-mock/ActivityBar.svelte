<script lang="ts">
  import clsx from 'clsx';
  import { File, Search, GitBranch, Bug, Package, User, Settings } from 'lucide-svelte';

  const items = $state([
    { icon: File, active: true },
    { icon: Search, active: false },
    { icon: GitBranch, active: false },
    { icon: Bug, active: false },
    { icon: Package, active: false }
  ]);
</script>

<div class="acBar relative flex w-10 flex-shrink-0 flex-col items-center space-y-4 py-4">
  {#each items as item}
    <div
      class={clsx(
        'acBtn flex w-full cursor-pointer flex-col items-center border-l-2 py-2',
        item.active && 'active'
      )}
    >
      <item.icon class="h-5 w-5" />
    </div>
  {/each}
  <div class="absolute bottom-4 flex flex-col items-center space-y-4">
    <User class="acBtn h-5 w-5" />
    <Settings class="acBtn h-5 w-5" />
  </div>
  <style>
    .acBtn {
      color: var(--comment);
      border-color: transparent;
      transition: all 0.2s ease-in-out;
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
    transition: all 0.2s ease-in-out;
  }
</style>
