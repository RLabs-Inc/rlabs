<script lang="ts">
  import { page } from '$app/stores';
  import { Menu } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
  import ModeToggle from '$lib/components/ModeToggle.svelte';
  let open = $state(false);
</script>

<nav class="flex items-center justify-between px-7">
  <div class="hidden w-full items-center justify-between gap-3 md:flex">
    <Button
      href="/"
      variant="link"
      size="icon"
      class="focus-visible:ring-0 focus-visible:ring-offset-0"
    >
      <img src="/images/RLabs-Lamp.png" alt="RLabs Inc." class="w-5" />
    </Button>

    <div class="flex items-center gap-2">
      <Button
        class={$page.url.pathname === '/vscode-themes-community' ? 'underline' : ''}
        href="/vscode-themes-community"
        variant="link">VSCode Themes Community</Button
      >
      <Button href="https://shadcn.rlabs.art/generate" variant="link"
        >Shadcn UI Theme Generator</Button
      >
      <!-- <Button href="/warp" variant="link">Warp Terminal Theme Generator</Button> -->
      <Button
        class={$page.url.pathname === '/about' ? 'underline' : ''}
        href="/about"
        variant="link">About</Button
      >
    </div>
  </div>
  <Sheet bind:open>
    <SheetTrigger>
      <Button
        variant="ghost"
        class="hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <Menu class="h-6 w-6" />
        <span class="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <Button
        href="/"
        variant="link"
        size="icon"
        class="focus-visible:ring-0 focus-visible:ring-offset-0"
        onclick={() => (open = false)}
      >
        <img src="/images/RLabs-Lamp.png" alt="RLabs Inc." class="w-5" />
      </Button>

      <div class="">
        <div class="mt-2 flex flex-col items-start justify-start gap-2">
          <Button
            class={$page.url.pathname === '/vscode-themes-community' ? 'underline' : ''}
            href="/vscode-themes-community"
            variant="link"
            onclick={() => (open = false)}>VSCode Themes Community</Button
          >
          <Button href="https://shadcn.rlabs.art/generate" variant="link"
            >Shadcn UI Theme Generator</Button
          >
          <!-- <Button href="/warp" variant="link">Warp Terminal Theme Generator</Button> -->
          <Button
            class={$page.url.pathname === '/about' ? 'underline' : ''}
            href="/about"
            variant="link"
            onclick={() => (open = false)}>About</Button
          >
        </div>
      </div>
    </SheetContent>
  </Sheet>
  <div class="ml-2">
    <ModeToggle />
  </div>
</nav>

<style scoped></style>
