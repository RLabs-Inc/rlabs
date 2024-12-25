<script lang="ts">
  import { enhance, applyAction } from '$app/forms';
  import { LoaderPinwheel } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';

  import { getControls } from '$lib/state/vscode/controls.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';
  import { Lit } from 'litlyx-js';

  const controlsState = getControls();
  const uiColorsState = getUiColors();
  const syntaxColorsState = getSyntaxColors();
  const ansiColorsState = getAnsiColors();

  const isDark = $derived(controlsState().isDark);
  const uiColors = $derived(uiColorsState().uiColors);
  const syntaxColors = $derived(syntaxColorsState().syntaxColors);
  const ansiColors = $derived(ansiColorsState().ansiColors);

  let isDownloading = $state(false);
</script>

<form
  class="w-full"
  method="post"
  use:enhance={() => {
    isDownloading = true;
    return async ({ result }: { result: any }) => {
      const data = result.data;
      if (data?.success) {
        const blob = new Blob([data.vsixBuffer], {
          type: 'application/octet-stream'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Generated Theme.vsix`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      }
      applyAction(result);
      isDownloading = false;
    };
  }}
>
  <input type="text" hidden name="isDark" value={isDark} />
  <input type="text" hidden name="uiColors" value={JSON.stringify(uiColors)} />
  <input type="text" hidden name="syntaxColors" value={JSON.stringify(syntaxColors)} />
  <input type="text" hidden name="ansiColors" value={JSON.stringify(ansiColors)} />
  <Button
    class="w-full"
    data-umami-event="Export Button"
    type="submit"
    formaction="?/downloadTheme"
    onclick={() => Lit.event('Export Button clicked')}
  >
    {#if isDownloading}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <span>Export to VSIX</span>
    {/if}
  </Button>
</form>
