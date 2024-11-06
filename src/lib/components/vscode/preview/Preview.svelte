<script lang="ts">
  import type { Theme } from '$lib/types/theme';

  import VSCEditor from '$lib/components/vscode/preview/vsc-mock/VSCEditor.svelte';

  const { theme }: { theme: Theme } = $props();
</script>

<VSCEditor {theme} />
