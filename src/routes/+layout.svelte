<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import { ClerkProvider } from 'svelte-clerk';
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
  {@render children()}
</ClerkProvider>
