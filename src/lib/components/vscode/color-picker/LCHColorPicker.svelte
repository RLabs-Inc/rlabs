<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { oklch, converter, type Oklch } from 'culori';
  import clsx from 'clsx';

  import { formatDecimal } from '$lib/utils/common/math';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';
  import { Input } from '$lib/components/ui/input';
  import { SliderPicker } from '$lib/components/ui/slider-picker';

  import { isLCH_within_sRGB } from './gamut-utils.svelte';
  import { LCH_to_sRGB_string } from './color-utils.svelte';
  import { getBgLightness, getBgChroma, getBgHue, getBgAlpha } from './gradients.svelte';
  import TwoDMap from './2DMap.svelte';

  const pickerColorState = getSelectedColor();

  const { onChange } = $props<{
    onChange?: (color: string) => void;
  }>();

  let showMaps = $state(false);

  let lcMap: TwoDMap;
  let hcMap: TwoDMap;
  let hlMap: TwoDMap;

  function updateMaps(changedParam?: 'lightness' | 'chroma' | 'hue') {
    lcMap?.update();
    hcMap?.update();
    hlMap?.update();
  }
  // Update color when any value changes
  function updateColor() {
    onChange?.(LCH_to_sRGB_string(colorState));
  }

  let colorState = $derived.by(() => {
    return oklch({
      mode: 'oklch',
      l: pickerColorState().pickerLightness[0],
      c: pickerColorState().pickerChroma[0],
      h: pickerColorState().pickerHue[0],
      alpha: pickerColorState().pickerAlpha[0]
    });
  });
  const toOKLCH = converter('oklch');

  const getBGThumb = (color: Oklch) => {
    return LCH_to_sRGB_string(color, true);
  };

  const bgLightness = $derived(getBgLightness(colorState));
  const bgChroma = $derived(getBgChroma(colorState));
  const bgHue = $derived(getBgHue(colorState));
  const bgAlpha = $derived(getBgAlpha(colorState));
  const bgThumb = $derived(getBGThumb(colorState));

  onMount(() => {
    pickerColorState().setPickerLightness([
      toOKLCH(pickerColorState().selectedColor!.color)!.l * 100
    ]);
    pickerColorState().setPickerChroma([toOKLCH(pickerColorState().selectedColor!.color)!.c]);
    pickerColorState().setPickerHue([toOKLCH(pickerColorState().selectedColor!.color)!.h || 0]);
    pickerColorState().setPickerAlpha([
      toOKLCH(pickerColorState().selectedColor!.color)!.alpha! * 100 || 100
    ]);
    updateMaps(); // Initial map update
  });
</script>

<div
  class="lg:gap=4 grid grid-cols-1 place-items-center items-center gap-4 md:w-full md:grid-cols-2 md:gap-10 lg:grid-cols-1"
>
  <!-- Color Preview -->
  <div
    class="order-1 flex h-full w-[280px] flex-col justify-between gap-2 place-self-center md:order-3 lg:order-1"
  >
    <div class="flex flex-wrap gap-4">
      <div class="relative h-12 w-full">
        <div
          class="pattern-isometric pattern-bg-white pattern-gray-500 pattern-opacity-20 pattern-size-2 absolute inset-0 overflow-hidden rounded"
        ></div>
        <div
          class={clsx(
            'border-primary-foreground absolute inset-0 w-full rounded border transition-colors duration-100',
            !isLCH_within_sRGB(
              pickerColorState().pickerLightness[0],
              pickerColorState().pickerChroma[0],
              pickerColorState().pickerHue[0]
            ) && 'border-destructive border-2'
          )}
          style={`background: ${LCH_to_sRGB_string(colorState)}`}
        >
          {#if !isLCH_within_sRGB(pickerColorState().pickerLightness[0], pickerColorState().pickerChroma[0], pickerColorState().pickerHue[0])}
            <div
              transition:fade={{ duration: 100 }}
              class="pattern-diagonal-lines pattern-bg-white pattern-gray-500 pattern-opacity-20 pattern-size-2 absolute inset-0 rounded"
            ></div>
          {/if}
        </div>
      </div>
      <div class="flex w-full flex-col justify-center gap-1 text-sm">
        <div class="flex items-center justify-between">
          <div class="font-mono uppercase">
            {LCH_to_sRGB_string(colorState)}
          </div>
          {#if !isLCH_within_sRGB(pickerColorState().pickerLightness[0], pickerColorState().pickerChroma[0], pickerColorState().pickerHue[0])}
            <span
              transition:fade={{ duration: 100 }}
              class="bg-destructive text-destructive-foreground rounded px-1 text-xs"
              >Color is out of gamut</span
            >
          {/if}
        </div>
        <div class="flex items-center gap-2">
          <span class="text-muted-foreground text-xs">LCH:</span>
          <span class="font-mono">
            {formatDecimal(pickerColorState().pickerLightness[0], 2)}%,
            {formatDecimal(pickerColorState().pickerChroma[0], 3)},
            {formatDecimal(pickerColorState().pickerHue[0], 2)}°
            {#if pickerColorState().pickerAlpha[0] !== 100}
              - {formatDecimal(pickerColorState().pickerAlpha[0])}%
            {/if}
          </span>
        </div>
      </div>
    </div>
    <!-- Alpha Slider -->
    <div class="flex w-[280px] flex-col gap-2">
      <div class="flex items-center justify-between">
        <label for="alpha-slider" class="text-xs"
          >Alpha: {formatDecimal(pickerColorState().pickerAlpha[0])}%</label
        >
        <Input
          class="w-23"
          type="number"
          min={0}
          max={100}
          step={0.1}
          value={pickerColorState().pickerAlpha[0]}
          oninput={(e) => {
            pickerColorState().setPickerAlpha([Number((e.target as HTMLInputElement).value)]);
            updateColor();
          }}
        />
      </div>

      <SliderPicker
        type="multiple"
        value={pickerColorState().pickerAlpha}
        onValueChange={(value) => {
          pickerColorState().setPickerAlpha(value);
        }}
        onValueCommit={(value) => {
          pickerColorState().setPickerAlpha(value);
          updateColor();
        }}
        min={0}
        max={100}
        step={0.1}
        bgColor={bgAlpha}
        controlledValue={true}
        alpha={true}
        class="w-[280px]"
        {bgThumb}
      />
    </div>
  </div>

  <!-- Lightness Slider -->
  <div class="order-2 flex w-[280px] flex-col gap-2 md:order-1 lg:order-2">
    <div class="flex items-center justify-between">
      <label for="lightness-slider" class="text-xs"
        >Lightness: {formatDecimal(pickerColorState().pickerLightness[0], 2)}%</label
      >
      <Input
        class="w-23"
        type="number"
        min={0}
        max={100}
        step={0.01}
        value={pickerColorState().pickerLightness[0]}
        oninput={(e) => {
          pickerColorState().setPickerLightness([Number((e.target as HTMLInputElement).value)]);
          updateMaps('lightness');
          updateColor();
        }}
      />
    </div>

    <TwoDMap bind:this={lcMap} type="lightness-chroma" color={colorState} onChange={updateColor} />

    <SliderPicker
      type="multiple"
      value={pickerColorState().pickerLightness}
      onValueChange={(value) => {
        pickerColorState().setPickerLightness(value);
        updateMaps('lightness');
      }}
      onValueCommit={(value) => {
        pickerColorState().setPickerLightness(value);
        updateColor();
      }}
      min={0}
      max={100}
      step={0.01}
      bgColor={bgLightness}
      controlledValue={true}
      alpha={false}
      class="w-[280px]"
      {bgThumb}
    />
  </div>

  <!-- Chroma Slider -->
  <div class="order-3 flex w-[280px] flex-col gap-2 md:order-2 lg:order-3">
    <div class="flex items-center justify-between">
      <label for="chroma-slider" class="text-xs"
        >Chroma: {formatDecimal(pickerColorState().pickerChroma[0], 4)}</label
      >
      <Input
        class="w-23"
        type="number"
        min={0}
        max={0.4}
        step={0.0001}
        value={pickerColorState().pickerChroma[0]}
        oninput={(e) => {
          pickerColorState().setPickerChroma([Number((e.target as HTMLInputElement).value)]);
          updateMaps('chroma');
          updateColor();
        }}
      />
    </div>

    <div class="">
      <TwoDMap bind:this={hcMap} type="hue-chroma" color={colorState} onChange={updateColor} />
    </div>

    <SliderPicker
      type="multiple"
      value={pickerColorState().pickerChroma}
      onValueChange={(value) => {
        pickerColorState().setPickerChroma(value);
        updateMaps('chroma');
      }}
      onValueCommit={(value) => {
        pickerColorState().setPickerChroma(value);
        updateColor();
      }}
      min={0}
      max={0.4}
      step={0.0001}
      bgColor={bgChroma}
      controlledValue={true}
      alpha={false}
      class="w-[280px]"
      {bgThumb}
    />
  </div>

  <!-- Hue Slider -->
  <div class="order-4 flex w-[280px] flex-col gap-2">
    <div class="flex items-center justify-between">
      <label for="hue-slider" class="text-xs"
        >Hue: {formatDecimal(pickerColorState().pickerHue[0], 2)}°</label
      >
      <Input
        class="w-23"
        type="number"
        min={0}
        max={360}
        step={0.01}
        value={pickerColorState().pickerHue[0]}
        oninput={(e) => {
          pickerColorState().setPickerHue([Number((e.target as HTMLInputElement).value)]);
          updateMaps('hue');
          updateColor();
        }}
      />
    </div>

    <TwoDMap bind:this={hlMap} type="hue-lightness" color={colorState} onChange={updateColor} />

    <SliderPicker
      type="multiple"
      value={pickerColorState().pickerHue}
      onValueChange={(value) => {
        pickerColorState().setPickerHue(value);
        updateMaps('hue');
      }}
      onValueCommit={(value) => {
        pickerColorState().setPickerHue(value);
        updateColor();
      }}
      min={0}
      max={360}
      step={0.01}
      bgColor={bgHue}
      controlledValue={true}
      alpha={false}
      class="w-[280px]"
      {bgThumb}
    />
  </div>
</div>

<style>
  .out-of-gamut {
    outline: 2px solid var(--error, #d65a5a);
  }

  .out-of-gamut::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgba(241, 161, 13, 0.1) 5px,
      rgba(241, 161, 13, 0.1) 10px
    );
    border-radius: inherit;
  }
</style>
