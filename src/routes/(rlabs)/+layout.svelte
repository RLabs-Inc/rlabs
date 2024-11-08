<script lang="ts">
  import type { Snippet } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  let { children }: { children: Snippet } = $props();
</script>

<Header />
<main class="h-[calc(100vh-2rem)] pt-14">{@render children()}</main>
