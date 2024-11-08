<script lang="ts">
  import EditorTabs from './EditorTabs.svelte';
  import EditorContent from './EditorContent.svelte';
</script>

<div
  class="flex h-full flex-1 flex-col"
  style="background-color: var(--bg1); transition: all 200ms ease-in-out;"
>
  <EditorTabs />
  <EditorContent />
</div>
