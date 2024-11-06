<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { getMonacoEditor } from './monaco.svelte';
  const { theme, lang, snippet }: { theme: string; lang: string; snippet: string } = $props();

  const monacoEditor = getMonacoEditor();
  let editorContainer: HTMLDivElement;

  onMount(async () => {
    monacoEditor.initMonaco(theme, snippet, lang, editorContainer);
  });

  onDestroy(() => {
    monacoEditor.dispose();
  });
</script>

<div bind:this={editorContainer} class="h-full w-full"></div>
