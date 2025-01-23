<script lang="ts">
  import DownloadButton from '$lib/components/zed/DownloadButton.svelte';

  import type { Theme } from '$lib/types/vscode/theme';

  const { data }: { data: { themes: Theme[] } } = $props();
  let isDownloading = $state(false);
</script>

<section class="flex h-full min-h-[calc(100vh-2rem)] flex-col">
  <div class="flex w-full flex-col items-center justify-center gap-5 py-20 pb-20">
    <ul>
      {#each data.themes as theme}
        <li>
          <DownloadButton {theme} />
          <p>{theme.name}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>
