<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { Oklch } from 'culori';
  import { SliderPicker } from '$lib/components/ui/slider-picker';
  import { Input } from '$lib/components/ui/input';
  import { formatDecimal } from '$lib/utils/vscode/math';
  import type { ColorState } from '../types';
  import { createAlphaGradient, createCheckerboardPattern } from '../gradient-utils';
  import { TRANSITION } from '../constants';

  const { colorState, updateColor } = $props<{
    colorState: ColorState;
    updateColor: (immediate?: boolean) => void;
  }>();

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

  // Create the gradient with the current color values
  const bgAlpha = $derived(createAlphaGradient(currentColor));

  const formattedValues = $derived({
    alpha: formatDecimal(colorState.pickerAlpha[0])
  });

  // Transition duration for smooth animations
  const transitionDuration = $derived(isTransitioning ? '0ms' : `${TRANSITION.NORMAL}ms`);

  // Debounced input handler with value clamping
  function handleInput(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    // Clamp value between 0 and 100
    const clampedValue = Math.max(0, Math.min(100, value));

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    isTransitioning = true;
    colorState.setPickerAlpha([clampedValue]);

    debounceTimeout = setTimeout(() => {
      updateColor();
      isTransitioning = false;
    }, 150) as unknown as number;
  }

  function handleSliderChange(value: number[]) {
    if (value.length > 0) {
      isTransitioning = true;
      // Clamp slider value
      const clampedValue = Math.max(0, Math.min(100, value[0]));
      colorState.setPickerAlpha([clampedValue]);
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

  // Get checkerboard pattern from utility
  const checkerboardBg = createCheckerboardPattern();
</script>

<div class="flex flex-col gap-1">
  <!-- Alpha Slider -->
  <div class="flex items-center justify-between">
    <label for="alpha-slider" class="text-xs">Alpha: {formattedValues.alpha}%</label>
    <Input
      class="w-20"
      type="number"
      min={0}
      max={100}
      step={0.1}
      value={colorState.pickerAlpha[0]}
      oninput={handleInput}
    />
  </div>
  <div class="relative">
    <div
      class="checkerboard absolute inset-0 rounded-full"
      style:background-image={checkerboardBg}
      style:background-size="10px 10px"
      style:background-position="0 0, 0 5px, 5px -5px, -5px 0"
    ></div>
    <div
      class="slider-wrapper"
      style:transition-duration={transitionDuration}
      style:transition-property="opacity"
    >
      <SliderPicker
        value={colorState.pickerAlpha}
        onValueChange={handleSliderChange}
        onValueCommit={handleSliderCommit}
        min={0}
        max={100}
        step={0.1}
        bgColor={bgAlpha}
        alpha
      />
    </div>
  </div>
</div>

<style>
  .checkerboard {
    border-radius: inherit;
  }

  .slider-wrapper {
    position: relative;
    z-index: 1;
  }
</style>
