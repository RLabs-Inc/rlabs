<script lang="ts">
  import { parseAnyTheme } from '$lib/utils/vscode/theme-parser';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  const { data } = $props();
  console.log('data', data);

  const uiColorsState = getUiColors();
  const syntaxColorsState = getSyntaxColors();
  const ansiColorsState = getAnsiColors();
  const colors = $derived(uiColorsState().uiColors);
  const syntaxColors = $derived(syntaxColorsState().syntaxColors);
  const ansiColors = $derived(ansiColorsState().ansiColors);

  let parsedTheme = $state(data.parsedTheme);
  let importedTheme = $state('');

  const resolvedTokens = $derived(
    parsedTheme.tokenColors.map((token) => {
      return {
        name: token.name,
        scope: token.scope,
        settings: {
          foreground: token.settings.foreground,
          background: token.settings.background,
          fontStyle: token.settings.fontStyle
        }
      };
    })
  );
</script>

<section class="min-h-[calc(100vh-2rem)]">
  <div class="flex flex-col items-center justify-center px-5 pt-20">
    <h1 class="text-2xl font-bold">Tokens Editor</h1>
    <div class="flex gap-5">
      <div class="">
        <pre class="text-xs text-wrap">{JSON.stringify(data.parsedTheme, null, 2)}</pre>
      </div>
      <div>
        <Input
          value={importedTheme}
          oninput={(event) => {
            importedTheme = event.currentTarget.value;
          }}
        />
        <Button
          onclick={() => {
            parsedTheme = parseAnyTheme(JSON.parse(importedTheme));
          }}>Import</Button
        >
      </div>
    </div>
  </div>
</section>
