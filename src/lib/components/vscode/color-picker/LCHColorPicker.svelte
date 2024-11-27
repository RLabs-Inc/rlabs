<script lang="ts">
  import { onMount } from 'svelte';
  import { oklch, type Oklch } from 'culori';

  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';

  import { formatDecimal } from '$lib/utils/vscode/math';
  import { isLCH_within_sRGB } from './gamut-utils.svelte';
  import { LCH_to_sRGB_string, colorToLCH } from './color-utils.svelte';
  import { getBgLightness, getBgChroma, getBgHue, getBgAlpha } from './gradients.svelte';

  import { SliderPicker } from '$lib/components/ui/slider-picker';

  import { Input } from '$lib/components/ui/input';

  const pickerColorState = getSelectedColor();

  const { onChange } = $props<{
    onChange?: (color: string) => void;
  }>();

  // Update color when any value changes
  function updateColor(color: Oklch) {
    onChange?.(LCH_to_sRGB_string(color, true));
  }

  let colorState = $derived(
    oklch({
      mode: 'oklch',
      l: pickerColorState().pickerLightness[0],
      c: pickerColorState().pickerChroma[0],
      h: pickerColorState().pickerHue[0],
      alpha: pickerColorState().pickerAlpha[0]
    })
  );

  const bgLightness = $derived(getBgLightness(colorState));
  const bgChroma = $derived(getBgChroma(colorState));
  const bgHue = $derived(getBgHue(colorState));
  const bgAlpha = $derived(getBgAlpha(colorState));

  onMount(() => {
    pickerColorState().setPickerLightness([
      colorToLCH(pickerColorState().selectedColor!.color)!.lightness
    ]);
    pickerColorState().setPickerChroma([
      colorToLCH(pickerColorState().selectedColor!.color)!.chroma
    ]);
    pickerColorState().setPickerHue([colorToLCH(pickerColorState().selectedColor!.color)!.hue]);
    pickerColorState().setPickerAlpha([
      colorToLCH(pickerColorState().selectedColor!.color)!.alpha || 100
    ]);
  });
</script>

<div class="flex w-full flex-col gap-4">
  <!-- Color Preview -->
  <div class="flex flex-col gap-2">
    <div class="flex flex-wrap gap-4">
      <div class="relative h-12 w-full">
        <div
          class=" pattern-isometric pattern-gray-500 pattern-bg-white pattern-size-2 pattern-opacity-20 absolute inset-0 overflow-hidden
  rounded"
        ></div>
        <!-- <div class="checkerboard absolute inset-0 rounded"></div> -->
        <div
          class="absolute inset-0 rounded border border-dotted border-muted-foreground transition-colors"
          class:out-of-gamut={!isLCH_within_sRGB(
            pickerColorState().pickerLightness[0],
            pickerColorState().pickerChroma[0],
            pickerColorState().pickerHue[0]
          )}
          style={`background: ${LCH_to_sRGB_string(colorState)}`}
        ></div>
      </div>
      <div class="flex w-full flex-col justify-center gap-1 text-sm">
        <div class="flex items-center justify-between">
          <div class="font-mono uppercase">
            {LCH_to_sRGB_string(colorState)}
          </div>
          {#if !isLCH_within_sRGB(pickerColorState().pickerLightness[0], pickerColorState().pickerChroma[0], pickerColorState().pickerHue[0])}
            <span class="rounded bg-destructive px-1 text-xs text-destructive-foreground"
              >Color is out of gamut</span
            >
          {/if}
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-muted-foreground">LCH:</span>
          <span class="font-mono">
            {formatDecimal(pickerColorState().pickerLightness[0])}%,
            {formatDecimal(pickerColorState().pickerChroma[0])},
            {formatDecimal(pickerColorState().pickerHue[0])}°
            {#if pickerColorState().pickerAlpha[0] !== 100}
              - {formatDecimal(pickerColorState().pickerAlpha[0])}%
            {/if}
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Sliders -->
  <div class="flex flex-col gap-4">
    <!-- Lightness Slider -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <label for="lightness-slider" class="text-xs"
          >Lightness: {formatDecimal(pickerColorState().pickerLightness[0])}%</label
        >
        <Input
          class="w-20"
          type="number"
          min={0}
          max={100}
          step={0.1}
          value={pickerColorState().pickerLightness[0]}
          oninput={(e) => {
            pickerColorState().setPickerLightness([Number((e.target as HTMLInputElement).value)]);
            updateColor(colorState);
          }}
        />
      </div>

      <SliderPicker
        value={pickerColorState().pickerLightness}
        onValueChange={(value) => {
          pickerColorState().setPickerLightness(value);
        }}
        onValueCommit={(value) => {
          updateColor(colorState);
        }}
        min={0}
        max={100}
        step={0.1}
        bgColor={bgLightness}
      />
    </div>

    <!-- Chroma Slider -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <label for="chroma-slider" class="text-xs"
          >Chroma: {formatDecimal(pickerColorState().pickerChroma[0])}</label
        >
        <Input
          class="w-20"
          type="number"
          min={0}
          max={100}
          step={0.1}
          value={pickerColorState().pickerChroma[0]}
          oninput={(e) => {
            pickerColorState().setPickerChroma([Number((e.target as HTMLInputElement).value)]);
            updateColor(colorState);
          }}
        />
      </div>
      <SliderPicker
        value={pickerColorState().pickerChroma}
        onValueChange={(value) => {
          pickerColorState().setPickerChroma(value);
        }}
        onValueCommit={(value) => {
          updateColor(colorState);
        }}
        min={0}
        max={132}
        step={0.1}
        bgColor={bgChroma}
      />
    </div>

    <!-- Hue Slider -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <label for="hue-slider" class="text-xs"
          >Hue: {formatDecimal(pickerColorState().pickerHue[0])}°</label
        >
        <Input
          class="w-20"
          type="number"
          min={0}
          max={360}
          step={0.1}
          value={pickerColorState().pickerHue[0]}
          oninput={(e) => {
            pickerColorState().setPickerHue([Number((e.target as HTMLInputElement).value)]);
            updateColor(colorState);
          }}
        />
      </div>
      <SliderPicker
        value={pickerColorState().pickerHue}
        onValueChange={(value) => {
          pickerColorState().setPickerHue(value);
        }}
        onValueCommit={(value) => {
          updateColor(colorState);
        }}
        min={0}
        max={360}
        step={0.1}
        bgColor={bgHue}
      />
    </div>

    <!-- Alpha Slider -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <label for="alpha-slider" class="text-xs"
          >Alpha: {formatDecimal(pickerColorState().pickerAlpha[0])}%</label
        >
        <Input
          class="w-20"
          type="number"
          min={0}
          max={100}
          step={0.1}
          value={pickerColorState().pickerAlpha[0]}
          oninput={(e) => {
            pickerColorState().setPickerAlpha([Number((e.target as HTMLInputElement).value)]);
            updateColor(colorState);
          }}
        />
      </div>

      <SliderPicker
        value={pickerColorState().pickerAlpha}
        onValueChange={(value) => {
          pickerColorState().setPickerAlpha(value);
        }}
        onValueCommit={(value) => {
          updateColor(colorState);
        }}
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
