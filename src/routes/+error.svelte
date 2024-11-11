<script lang="ts">
  import { page } from '$app/stores';
</script>

<section class="flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center gap-2">
  <h1>{$page.status}: {$page.error?.message}</h1>
</section>
