<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import { ClerkProvider } from 'svelte-clerk';
  import { ModeWatcher } from 'mode-watcher';
  import Footer from '$lib/components/Footer.svelte';
  import {
    PUBLIC_CLERK_PUBLISHABLE_KEY,
    PUBLIC_CLERK_SIGN_IN_URL,
    PUBLIC_CLERK_SIGN_UP_URL
  } from '$env/static/public';

  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { dev } from '$app/environment';

  import { Toaster } from '$lib/components/ui/sonner';

  injectAnalytics({ mode: dev ? 'development' : 'production' });
  injectSpeedInsights();

  let { children }: { children: Snippet } = $props();
</script>

<ClerkProvider
  signInUrl={PUBLIC_CLERK_SIGN_IN_URL}
  signUpUrl={PUBLIC_CLERK_SIGN_UP_URL}
  publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <Toaster />
    <ModeWatcher />
    {@render children()}
    <Footer />
  </div>
</ClerkProvider>
