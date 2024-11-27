<script lang="ts">
  import { Slider as SliderPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    value = $bindable([0]),
    class: className,
    bgColor = $bindable('#000'),
    alpha = $bindable(false),
    ...restProps
  }: WithoutChildrenOrChild<
    SliderPrimitive.RootProps & { bgColor?: string; alpha?: boolean }
  > = $props();
</script>

<SliderPrimitive.Root
  bind:ref
  bind:value
  class={cn('relative flex w-full touch-none select-none items-center', className)}
  {...restProps}
>
  {#snippet children({ thumbs })}
    <!-- {#if alpha} -->
    <!-- <span class="checkerboard absolute inset-0 overflow-hidden rounded-full"></span> -->

    <div
      class=" pattern-isometric pattern-gray-500 pattern-bg-white pattern-size-1 pattern-opacity-20
  absolute inset-0 overflow-hidden rounded-full"
    ></div>

    <!-- {/if} -->
    <span
      class="relative h-5 w-full grow overflow-hidden rounded-full border border-dotted border-muted-foreground"
      style:background={bgColor}
    >
      <SliderPrimitive.Range class="absolute h-full bg-transparent" />
    </span>

    {#each thumbs as thumb}
      <SliderPrimitive.Thumb
        index={thumb}
        class={cn(
          'block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        )}
      />
    {/each}
  {/snippet}
</SliderPrimitive.Root>

<style>
  /* Base slider styles
  .color-slider {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 20px;
    position: relative;
    z-index: 2;
    margin: 0;
  }

  .color-slider.thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 20px;
    border-radius: 3px;
    background: white;
    border: 1px solid black;
    box-shadow: 0 0 0 1px white;
    cursor: pointer;
    margin-top: -8px;
  }

  .color-slider.thumb::-moz-range-thumb {
    width: 16px;
    height: 20px;
    border-radius: 3px;
    background: white;
    border: 1px solid black;
    box-shadow: 0 0 0 1px white;
    cursor: pointer;
  }

  .slider-bg {
    position: absolute;
    inset: 0;
    border-radius: 2px;
    height: 4px;
    margin: auto 0;
  } */

  /* Checkerboard pattern for alpha */
  .checkerboard {
    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 20px 20px;
    background-position:
      0 0,
      0 10px,
      10px -10px,
      -10px 0px;
  }
</style>
