<script lang="ts">
  import { enhance, applyAction } from '$app/forms';
  import { goto, invalidateAll } from '$app/navigation';

  import type { Theme } from '$lib/types/vim/theme';

  const { data }: { data: { themes: Theme[] } } = $props();
  let isDownloading = $state(false);
</script>

<section class="flex h-full min-h-[calc(100vh-2rem)] flex-col">
  <!-- <form method="POST" use:enhance>
    
  </form> -->
  <div class="flex w-full flex-col items-center justify-center gap-5 py-20 pb-20">
    <ul>
      {#each data.themes as theme}
        <li>
          <form
            method="post"
            use:enhance={() => {
              isDownloading = true;
              return async ({ result }: { result: any }) => {
                const data = result.data;
                console.log(data);
                if (data?.success) {
                  const blob = new Blob([data.zipBuffer], {
                    type: 'application/octet-stream'
                  });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = data.fileName;
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
                  a.remove();
                }
                invalidateAll();
                applyAction(result);
                isDownloading = false;
              };
            }}
          >
            <input type="hidden" name="themeId" value={theme.id} />
            <button type="submit" formaction="?/download">
              {theme.name}
            </button>
          </form>
        </li>
      {/each}
    </ul>
  </div>
</section>
