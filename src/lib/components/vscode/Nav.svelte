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
      <div class="flex items-center gap-2">
        <Button
          href="/"
          variant="link"
          size="icon"
          class="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <img src="/images/RLabs-Lamp.png" alt="RLabs Inc." class="w-5" />
        </Button>
        <Button
          class={$page.url.pathname === '/vscode-themes-community' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode-themes-community'}
          href="/vscode-themes-community"
          variant="link">VSCode Themes Community</Button
        >
      </div>

      <div class="flex items-center gap-2">
        <Button
          class={$page.url.pathname === '/vscode-themes-community/discover' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode-themes-community/discover'}
          href="/vscode-themes-community/discover"
          variant="link">Discover</Button
        >
        <Button
          class={$page.url.pathname === '/vscode-themes-community/how-to' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode-themes-community/how-to'}
          href="/vscode-themes-community/how-to"
          variant="link">How to</Button
        >
        <Button
          class={$page.url.pathname === '/vscode-themes-community/theme-generator'
            ? 'underline'
            : ''}
          aria-current={$page.url.pathname === '/vscode-themes-community/theme-generator'}
          href="/vscode-themes-community/theme-generator"
          variant="link">Create a theme</Button
        >
        <SignedIn>
          <Button
            class={$page.url.pathname === '/vscode-themes-community/saved-themes'
              ? 'underline'
              : ''}
            aria-current={$page.url.pathname === '/vscode-themes-community/saved-themes'}
            href="/vscode-themes-community/saved-themes"
            variant="link">Saved themes</Button
          >
        </SignedIn>
        <!-- <Button
          class={$page.url.pathname === '/vscode-themes-community/about' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode-themes-community/about'}
          href="/vscode-themes-community/about"
          variant="link">About</Button
        > -->
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

        <Button
          class={$page.url.pathname === '/vscode' ? 'underline' : ''}
          aria-current={$page.url.pathname === '/vscode-themes-community'}
          href="/vscode-themes-community"
          variant="link"
          onclick={() => (open = false)}>VSCode Themes Community</Button
        >

        <div class="">
          <div class="mt-2 flex flex-col items-start justify-start gap-2">
            <Button
              class={$page.url.pathname === '/vscode-themes-community/discover' ? 'underline' : ''}
              aria-current={$page.url.pathname === '/vscode-themes-community/discover'}
              href="/vscode-themes-community/discover"
              variant="link"
              onclick={() => (open = false)}>Discover</Button
            >
            <Button
              class={$page.url.pathname === '/vscode-themes-community/how-to' ? 'underline' : ''}
              aria-current={$page.url.pathname === '/vscode-themes-community/how-to'}
              href="/vscode-themes-community/how-to"
              variant="link">How to</Button
            >
            <Button
              class={$page.url.pathname === '/vscode-themes-community/theme-generator'
                ? 'underline'
                : ''}
              aria-current={$page.url.pathname === '/vscode-themes-community/theme-generator'}
              href="/vscode-themes-community/theme-generator"
              variant="link"
              onclick={() => (open = false)}>Create a theme</Button
            >
            <SignedIn>
              <Button
                class={$page.url.pathname === '/vscode-themes-community/saved-themes'
                  ? 'underline'
                  : ''}
                aria-current={$page.url.pathname === '/vscode-themes-community/saved-themes'}
                href="/vscode-themes-community/saved-themes"
                variant="link"
                onclick={() => (open = false)}>Saved themes</Button
              >
            </SignedIn>
            <!-- <Button
              class={$page.url.pathname === '/vscode-themes-community/about' ? 'underline' : ''}
              aria-current={$page.url.pathname === '/vscode-themes-community/about'}
              href="/vscode-themes-community/about"
              variant="link"
              onclick={() => (open = false)}>About</Button
            > -->
            <SignedOut>
              <Button href="/auth/sign-in" variant="link" onclick={() => (open = false)}
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
