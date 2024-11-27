<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { Oklch } from 'culori';
  import { SliderPicker } from '$lib/components/ui/slider-picker';
  import { Input } from '$lib/components/ui/input';
  import { formatDecimal } from '$lib/utils/vscode/math';
  import { createMapAction } from '../actions';
  import type { ColorState } from '../types';
  import { create2DMap, getCachedMap } from '../color-map';
  import { createHueGradient } from '../gradient-utils';
  import { TRANSITION } from '../constants';

  const { colorState, mapOptions, updateColor, setIsDragging } = $props<{
    colorState: ColorState;
    mapOptions: { resolution: number; isDragging: boolean };
    updateColor: (immediate?: boolean) => void;
    setIsDragging: (value: boolean) => void;
  }>();

  let element = $state<HTMLDivElement>();
  let debounceTimeout: number;
  let isTransitioning = $state(false);

  // Memoized color object for gradient generation
  const currentColor = $derived({
    mode: 'oklch',
    l: colorState.pickerLightness[0],
    c: colorState.pickerChroma[0],
    h: colorState.pickerHue[0],
    alpha: colorState.pickerAlpha[0] / 100
  } as Oklch);

  // Use cached map for better performance
  const lhMap = $derived(
    getCachedMap(
      'LH',
      colorState.pickerLightness[0],
      colorState.pickerChroma[0],
      colorState.pickerHue[0],
      mapOptions
    )
  );

  // Create the gradient with the current color values
  const bgHue = $derived(createHueGradient(currentColor));

  const mapBackground = $derived(`url(${lhMap})`);

  // Smooth transitions for crosshair lines
  const transitionDuration = $derived(
    isTransitioning || mapOptions.isDragging ? '0ms' : `${TRANSITION.NORMAL}ms`
  );

  const verticalLineTransform = $derived(`translateX(${(colorState.pickerHue[0] / 360) * 100}%)`);
  const horizontalLineTransform = $derived(
    `translateY(${(1 - colorState.pickerLightness[0] / 100) * 100}%)`
  );

  const formattedValues = $derived({
    hue: formatDecimal(colorState.pickerHue[0])
  });

  // Debounced input handler
  function handleInput(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    // Clamp value between 0 and 360
    const clampedValue = Math.max(0, Math.min(360, value));

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    isTransitioning = true;
    colorState.setPickerHue([clampedValue]);

    debounceTimeout = setTimeout(() => {
      updateColor();
      isTransitioning = false;
    }, 150) as unknown as number;
  }

  function handleSliderChange(value: number[]) {
    if (value.length > 0) {
      isTransitioning = true;
      colorState.setPickerHue([value[0]]);
    }
  }

  function handleSliderCommit() {
    updateColor();
    setTimeout(() => {
      isTransitioning = false;
    }, 50);
  }

  onDestroy(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
  });
</script>

<div class="flex flex-col gap-1">
  <!-- LH Map -->
  <div class="relative mb-4">
    <div
      bind:this={element}
      class="group relative aspect-[3/1] w-full cursor-crosshair overflow-hidden rounded-lg bg-[#1c1c1c]"
      style:background-image={mapBackground}
      style:background-size="100% 100%"
      use:createMapAction={{
        type: 'LH',
        colorState: colorState,
        updateColor,
        setIsDragging
      }}
    >
      <!-- Vertical crosshair line -->
      <div
        class="pointer-events-none absolute h-full w-[1px] bg-white/50"
        style:transform={verticalLineTransform}
        style:transition-duration={transitionDuration}
        style:transition-property="transform"
        style:transition-timing-function="ease-out"
      ></div>
      <!-- Horizontal crosshair line -->
      <div
        class="pointer-events-none absolute h-[1px] w-full bg-white/50"
        style:transform={horizontalLineTransform}
        style:transition-duration={transitionDuration}
        style:transition-property="transform"
        style:transition-timing-function="ease-out"
      ></div>
      <div
        class="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <span
          class="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-medium text-white/90 shadow-sm"
          >L</span
        >
        <span
          class="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-medium text-white/90 shadow-sm"
          >H</span
        >
      </div>
    </div>
  </div>

  <!-- Hue Slider -->
  <div class="flex items-center justify-between">
    <label for="hue-slider" class="text-xs">Hue: {formattedValues.hue}°</label>
    <Input
      class="w-20"
      type="number"
      min={0}
      max={360}
      step={0.1}
      value={colorState.pickerHue[0]}
      oninput={handleInput}
    />
  </div>
  <div class="relative">
    <SliderPicker
      value={colorState.pickerHue}
      onValueChange={handleSliderChange}
      onValueCommit={handleSliderCommit}
      min={0}
      max={360}
      step={0.1}
      bgColor={bgHue}
    />
  </div>
</div>
