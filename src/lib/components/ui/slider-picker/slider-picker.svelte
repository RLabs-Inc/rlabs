<script lang="ts">
  import { Slider as SliderPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    value = $bindable([0]),
    class: className,
    bgColor = $bindable('#000'),
    alpha = $bindable(false),
    bgThumb = $bindable('#000'),
    ...restProps
  }: WithoutChildrenOrChild<
    SliderPrimitive.RootProps & { bgColor?: string; alpha?: boolean; bgThumb?: string }
  > = $props();
</script>

<SliderPrimitive.Root
  bind:ref
  bind:value
  class={cn('relative flex w-full touch-none items-center select-none', className)}
  {...restProps}
>
  {#snippet children({ thumbs })}
    <!-- {#if alpha} -->
    <!-- <span class="checkerboard absolute inset-0 overflow-hidden rounded-full"></span> -->
    <div
      class="bg-muted absolute inset-0 overflow-hidden
  rounded"
    ></div>
    {#if alpha}
      <div
        class="pattern-isometric pattern-bg-white pattern-gray-500 pattern-opacity-20 pattern-size-1
  absolute inset-0 overflow-hidden rounded"
      ></div>
    {:else}{/if}

    <!-- {/if} -->
    <span
      class="border-border dark:border-primary-foreground relative h-5 w-full grow overflow-hidden rounded border"
      style:background={bgColor}
    >
      <SliderPrimitive.Range class="absolute h-full" />
    </span>

    {#each thumbs as thumb}
      <SliderPrimitive.Thumb
        index={thumb}
        class={cn(
          'before:border-primary-foreground focus-visible:before:border-primary-foreground before:absolute before:top-[0.125rem] before:-left-[0.525rem] before:h-0 before:w-0 before:rounded-md before:border-r-[0.55rem] before:border-b-[0.6rem] before:border-l-[0.55rem] before:border-r-transparent  before:border-l-transparent focus-visible:outline-hidden  focus-visible:before:border-r-transparent focus-visible:before:border-l-transparent focus-visible:before:outline-hidden disabled:before:pointer-events-none disabled:before:opacity-50',
          'test focus-visible:border-offset-2 focus-visible:border-offset-2 border-primary ring-offset-background top-[0.75rem] block h-0 w-0 rounded-lg border-r-[0.7rem] border-b-[0.8rem] border-l-[0.7rem] border-r-transparent border-l-transparent transition-colors focus-visible:border-b-[0.8rem] disabled:pointer-events-none disabled:opacity-50',
          'after:border-primary after:absolute after:top-[0.25rem] after:-left-[0.5rem] after:h-0 after:w-0 after:rounded-md after:border-r-[0.5rem] after:border-b-[0.5rem] after:border-l-[0.5rem] after:border-r-transparent after:border-l-transparent',
          'thumb'
        )}
      />
    {/each}
  {/snippet}
</SliderPrimitive.Root>

<style>
  /* .color-slider {
    border-bottom-color: --bgThumb;
  }
  .thumb {
    border-bottom-color: --bgThumb;
  } */
  /* .error::-webkit-slider-thumb {

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
