<script lang="ts">
  import Sun from 'lucide-svelte/icons/sun';
  import Moon from 'lucide-svelte/icons/moon';

  import { toggleMode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button';
  // import { resetMode, setMode } from 'mode-watcher';
  // import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  // import { buttonVariants } from '$lib/components/ui/button/index.js';
</script>

<!-- 
<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={'border-transparent bg-transparent hover:bg-transparent' +
      buttonVariants({ variant: 'outline', size: 'icon' })}
  >
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root> -->

<Button
  onclick={toggleMode}
  variant="outline"
  size="icon"
  class="border-transparent bg-transparent transition-all duration-200 hover:bg-transparent"
>
  <Sun
    class="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
