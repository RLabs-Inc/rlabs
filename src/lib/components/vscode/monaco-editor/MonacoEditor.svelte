<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { getMonacoEditor } from './monaco.svelte';

  const {
    theme,
    lang,
    snippet,
    fontSize,
    fontWeight
  }: { theme: string; lang: string; snippet: string; fontSize: number; fontWeight: string } =
    $props();

  let editorContainer: HTMLDivElement | null = $state(null);
  let monacoEditor: any;

  onMount(async () => {
    if (browser) {
      monacoEditor = getMonacoEditor();
      await monacoEditor.initMonaco(theme, snippet, lang, fontSize, fontWeight, editorContainer);
    }
  });

  onDestroy(() => {
    if (browser && monacoEditor) {
      monacoEditor.dispose();
    }
  });
</script>

{#if browser}
  <div bind:this={editorContainer} class="h-full w-full"></div>
{/if}
