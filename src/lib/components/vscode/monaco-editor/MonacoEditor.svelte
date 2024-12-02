<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { getMonacoEditor } from './monaco.svelte';
  const {
    theme,
    lang,
    snippet,
    fontSize,
    fontWeight
  }: { theme: string; lang: string; snippet: string; fontSize: number; fontWeight: string } =
    $props();

  const monacoEditor = getMonacoEditor();
  let editorContainer: HTMLDivElement;

  onMount(async () => {
    monacoEditor.initMonaco(theme, snippet, lang, fontSize, fontWeight, editorContainer);
  });

  onDestroy(() => {
    monacoEditor.dispose();
  });
</script>

<div bind:this={editorContainer} class="h-full w-full"></div>
