<script lang="ts">
  import { Slider as SliderPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    value = $bindable([0]),
    class: className,
    bgColor = $bindable('#000'),
    alpha = $bindable(false),
    error = $bindable(false),
    ...restProps
  }: WithoutChildrenOrChild<
    SliderPrimitive.RootProps & { bgColor?: string; alpha?: boolean; error?: boolean }
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
  absolute inset-0 overflow-hidden rounded"
    ></div>

    <!-- {/if} -->
    <span
      class="relative h-5 w-full grow overflow-hidden rounded border border-primary"
      style:background={bgColor}
    >
      <SliderPrimitive.Range class="absolute h-full bg-transparent" />
    </span>

    {#each thumbs as thumb}
      <SliderPrimitive.Thumb
        index={thumb}
        class={cn(
          'before:absolute before:-left-[0.525rem] before:top-[0.125rem] before:h-0 before:w-0 before:rounded-md before:border-b-[0.6rem] before:border-l-[0.55rem] before:border-r-[0.55rem] before:border-primary-foreground before:border-l-transparent before:border-r-transparent  focus-visible:outline-none before:focus-visible:border-primary-foreground  before:focus-visible:border-l-transparent before:focus-visible:border-r-transparent before:focus-visible:outline-none before:disabled:pointer-events-none before:disabled:opacity-50',
          'thumb focus-visible:border-offset-2 focus-visible:border-offset-2 top-[0.75rem] block h-0 w-0 rounded-lg border-b-[0.8rem] border-l-[0.7rem] border-r-[0.7rem] border-primary border-l-transparent border-r-transparent ring-offset-background transition-colors focus-visible:border-b-[0.8rem] disabled:pointer-events-none disabled:opacity-50',
          'after:absolute after:-left-[0.5rem] after:top-[0.25rem] after:h-0 after:w-0 after:rounded-md after:border-b-[0.5rem] after:border-l-[0.5rem] after:border-r-[0.5rem] after:border-primary after:border-l-transparent after:border-r-transparent',
          error && 'error'
        )}
      />
    {/each}
  {/snippet}
</SliderPrimitive.Root>

<style>
  /* .thumb::-webkit-slider-thumb {
    
  }
  .thumb::-moz-range-thumb {
    
  }
  .error::-webkit-slider-thumb {

  }
  .error::-moz-range-thumb {
    
  } */

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
  /* .checkerboard {
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
  } */
</style>
