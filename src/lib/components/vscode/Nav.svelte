<script lang="ts">
  import { page } from '$app/stores';
  import { Menu } from 'lucide-svelte';
  import { SignedIn, SignedOut, UserButton } from 'svelte-clerk';
  import { Button } from '$lib/components/ui/button';
  import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
  import ModeToggle from '$lib/components/ModeToggle.svelte';

  let open = $state(false);
</script>

<nav class="flex items-center justify-between px-7">
  <div class="flex w-full items-center justify-between gap-3">
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
          class={$page.url.pathname === '/vscode' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode'}
          href="/vscode"
          variant="link">Discover</Button
        >
        <Button
          class={$page.url.pathname === '/vscode/theme-generator' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode/theme-generator'}
          href="/vscode/theme-generator"
          variant="link">Create a theme</Button
        >
        <SignedIn>
          <Button
            class={$page.url.pathname === '/vscode/saved-themes' ? 'underline' : ''}
            aria-current={$page.url.pathname === '/vscode/saved-themes'}
            href="/vscode/saved-themes"
            variant="link">Saved themes</Button
          >
        </SignedIn>
        <Button
          class={$page.url.pathname === '/vscode/about' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode/about'}
          href="/vscode/about"
          variant="link">About</Button
        >
        <SignedOut>
          <Button href="/auth/sign-in" variant="link">Login</Button>
        </SignedOut>
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
              class={$page.url.pathname === '/vscode' ? 'underline' : ''}
              aria-current={$page.url.pathname === '/vscode'}
              href="/vscode"
              variant="link"
              onclick={() => (open = false)}>Discover</Button
            >
            <Button
              class={$page.url.pathname === '/vscode/theme-generator' ? 'underline' : ''}
              aria-current={$page.url.pathname === '/vscode/theme-generator'}
              href="/vscode/theme-generator"
              variant="link"
              onclick={() => (open = false)}>Create a theme</Button
            >
            <SignedIn>
              <Button
                class={$page.url.pathname === '/vscode/saved-themes' ? 'underline' : ''}
                aria-current={$page.url.pathname === '/vscode/saved-themes'}
                href="/vscode/saved-themes"
                variant="link"
                onclick={() => (open = false)}>Saved themes</Button
              >
            </SignedIn>
            <Button
              class={$page.url.pathname === '/vscode/about' ? 'underline' : ''}
              aria-current={$page.url.pathname === '/vscode/about'}
              href="/vscode/about"
              variant="link"
              onclick={() => (open = false)}>About</Button
            >
            <SignedOut>
              <Button href="/vscode/login" variant="link" onclick={() => (open = false)}
                >Login</Button
              >
            </SignedOut>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
  <div class="flex items-center gap-5">
    <ModeToggle />
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
</nav>

<style scoped></style>
