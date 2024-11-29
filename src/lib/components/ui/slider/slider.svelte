<script lang="ts">
  import { Slider as SliderPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    value = $bindable([0]),
    bgColor = $bindable('#000'),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<SliderPrimitive.RootProps & { bgColor?: string }> = $props();
</script>

<SliderPrimitive.Root
  bind:ref
  bind:value
  orientation="vertical"
  class={cn(
    'relative flex w-[1px] min-w-max max-w-[1px] touch-none select-none flex-col items-center',
    className
  )}
  {...restProps}
>
  {#snippet children({ thumbs })}
    <div
      class=" pattern-isometric absolute inset-0 overflow-hidden rounded
  pattern-bg-white pattern-gray-500 pattern-opacity-20 pattern-size-1"
    ></div>

    <span class="relative w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range class="absolute w-full bg-primary" />
    </span>
    {#each thumbs as thumb}
      <SliderPrimitive.Thumb
        index={thumb}
        class="block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      />
    {/each}
  {/snippet}
</SliderPrimitive.Root>
