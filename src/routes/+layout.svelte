<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import { ClerkProvider } from 'svelte-clerk';
  import Footer from '$lib/components/Footer.svelte';
  import {
    PUBLIC_CLERK_PUBLISHABLE_KEY,
    PUBLIC_CLERK_SIGN_IN_URL,
    PUBLIC_CLERK_SIGN_UP_URL
  } from '$env/static/public';

  let { children }: { children: Snippet } = $props();
</script>

<ClerkProvider
  signInUrl={PUBLIC_CLERK_SIGN_IN_URL}
  signUpUrl={PUBLIC_CLERK_SIGN_UP_URL}
  publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    {@render children()}
    <Footer />
  </div>
</ClerkProvider>
