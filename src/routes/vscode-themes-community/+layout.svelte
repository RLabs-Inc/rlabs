<script lang="ts">
  import type { Snippet } from 'svelte';
  import Header from '$lib/components/vscode/Header.svelte';
  let { children }: { children: Snippet } = $props();
</script>

<Header />
<main class="">{@render children()}</main>
