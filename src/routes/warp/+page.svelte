<script lang="ts">
  import WarpMock from '$lib/components/warp/WarpMock.svelte';
  import Controls from '$lib/components/warp/Controls.svelte';
</script>

<section class="flex h-full min-h-[calc(100vh-2rem)] flex-col">
  <div class="flex w-full flex-col items-center justify-center gap-5 py-20 pb-20">
    <div class="w-full px-5 lg:max-w-6xl">
      <Controls />
    </div>
    <div class="w-full px-1 lg:max-w-5xl">
      <WarpMock />
    </div>
  </div>
</section>
