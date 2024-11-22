<script lang="ts">
  import EditorTabs from './EditorTabs.svelte';
  import EditorContent from './EditorContent.svelte';
</script>

<div
  class="flex h-full flex-1 flex-col"
  style="background-color: var(--bg1); transition-property: all; transition-duration: 200ms;"
>
  <EditorTabs />
  <EditorContent />
</div>
