<script lang="ts">
  import { enhance, applyAction } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

  import type { Theme } from '$lib/types/vim/theme';

  const { data }: { data: { themes: Theme[] } } = $props();
  let isDownloading = $state(false);
</script>

<section class="flex h-full min-h-[calc(100vh-2rem)] flex-col">
  <div class="flex w-full flex-col items-center justify-center gap-5 py-20 pb-20">
    {#if data.themes?.length}
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each data.themes as theme}
          <Card>
            <CardHeader>
              <CardTitle>{theme.name}</CardTitle>
              <p class="text-muted-foreground text-sm">by {theme.userName}</p>
            </CardHeader>
            <CardContent>
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
                <Button
                  type="submit"
                  formaction="?/download"
                  disabled={isDownloading}
                  class="w-full"
                >
                  {isDownloading ? 'Downloading...' : 'Download Neovim Theme'}
                </Button>
              </form>
            </CardContent>
          </Card>
        {/each}
      </div>
    {:else}
      <div class="py-12 text-center">
        <p class="text-muted-foreground text-lg">No themes available</p>
      </div>
    {/if}
  </div>
</section>
