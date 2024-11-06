<script lang="ts">
  import type { Snippet } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  let { children }: { children: Snippet } = $props();
</script>

<Header />
<main>{@render children()}</main>
