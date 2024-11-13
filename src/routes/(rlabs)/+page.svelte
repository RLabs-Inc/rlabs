<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    goto('/vscode-themes-community');
  });
</script>

<div class="flex h-full flex-col items-center justify-center">
  <h1 class="text-4xl font-bold">Welcome to RLabs Inc.</h1>
</div>
