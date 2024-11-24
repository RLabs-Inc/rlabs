<script lang="ts">
  import { onMount } from 'svelte';
  import { converter, formatHex8, type Oklch } from 'culori';
  import {
    LCH_to_sRGB_string,
    isLCH_within_sRGB,
    colorToLCH,
    slider_stops
  } from '$lib/utils/vscode/colors';

  const { color, onInput, onChange } = $props<{
    color: string;
    onInput?: (color: string) => void;
    onChange?: (color: string) => void;
  }>();

  // State
  let lightness = $state(0);
  let chroma = $state(0);
  let hue = $state(0);
  let alpha = $state(100);

  // Initialize color values
  function initializeColor(newColor: string) {
    const lchColor = colorToLCH(newColor);
    if (lchColor) {
      lightness = lchColor.lightness;
      chroma = lchColor.chroma;
      hue = lchColor.hue;
      alpha = lchColor.alpha;
    }
  }

  // Update color when any value changes
  function updateColor() {
    const newColor = LCH_to_sRGB_string(lightness, chroma, hue, alpha);
    onInput?.(newColor);
    onChange?.(newColor);
  }

  onMount(() => {
    initializeColor(color);
  });

  // Constants for optimal color sampling
  const LIGHTNESS_STOPS = 11; // Will become 41 stops with interpolation
  const CHROMA_STOPS = 12; // Will become 45 stops with interpolation
  const HUE_STOPS = 13; // Will become 49 stops with interpolation

  // Format number to 1 decimal place
  const formatDecimal = (num: number) => Number(num.toFixed(1));
</script>

<div class="flex w-full flex-col gap-4 rounded-lg border border-border p-4">
  <!-- Color Preview -->
  <div class="flex flex-col gap-2">
    <div class="flex h-16 gap-4">
      <div class="relative flex-1">
        <div class="checkerboard absolute inset-0 rounded-l"></div>
        <div
          class="absolute inset-0 rounded-l transition-colors"
          class:out-of-gamut={!isLCH_within_sRGB(lightness, chroma, hue)}
          style={`background: ${LCH_to_sRGB_string(lightness, chroma, hue, alpha)}`}
        ></div>
      </div>
      <div class="flex flex-col justify-center gap-1 text-sm">
        <div class="font-mono uppercase">
          {LCH_to_sRGB_string(lightness, chroma, hue, alpha)}
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-muted-foreground">LCH:</span>
          <span class="font-mono">
            {formatDecimal(lightness)}%, {formatDecimal(chroma)}, {formatDecimal(hue)}°
            {#if alpha !== 100}
              , {formatDecimal(alpha)}%
            {/if}
          </span>
        </div>
        {#if !isLCH_within_sRGB(lightness, chroma, hue)}
          <span class="text-warning text-xs">Color is out of gamut</span>
        {/if}
      </div>
    </div>
  </div>

  <!-- Sliders -->
  <div class="flex flex-col gap-4">
    <!-- Lightness Slider -->
    <div class="flex flex-col gap-2">
      <label for="lightness-slider" class="text-xs">Lightness: {formatDecimal(lightness)}%</label>
      <div class="relative h-5">
        <div
          class="slider-bg absolute inset-0 rounded"
          style={`background: linear-gradient(to right, ${slider_stops(
            Array.from({ length: LIGHTNESS_STOPS }, (_, i) => (i * 100) / (LIGHTNESS_STOPS - 1)),
            lightness,
            chroma,
            hue,
            alpha,
            0
          )})`}
        ></div>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          bind:value={lightness}
          oninput={updateColor}
          class="color-slider"
        />
      </div>
    </div>

    <!-- Chroma Slider -->
    <div class="flex flex-col gap-2">
      <label for="chroma-slider" class="text-xs">Chroma: {formatDecimal(chroma)}</label>
      <div class="relative h-5">
        <div
          class="slider-bg absolute inset-0 rounded"
          style={`background: linear-gradient(to right, ${slider_stops(
            Array.from({ length: CHROMA_STOPS }, (_, i) => (i * 132) / (CHROMA_STOPS - 1)),
            lightness,
            chroma,
            hue,
            alpha,
            1
          )})`}
        ></div>
        <input
          type="range"
          min="0"
          max="132"
          step="0.1"
          bind:value={chroma}
          oninput={updateColor}
          class="color-slider"
        />
      </div>
    </div>

    <!-- Hue Slider -->
    <div class="flex flex-col gap-2">
      <label for="hue-slider" class="text-xs">Hue: {formatDecimal(hue)}°</label>
      <div class="relative h-5">
        <div
          class="slider-bg absolute inset-0 rounded"
          style={`background: linear-gradient(to right, ${slider_stops(
            Array.from({ length: HUE_STOPS }, (_, i) => (i * 360) / (HUE_STOPS - 1)),
            lightness,
            chroma,
            hue,
            alpha,
            2
          )})`}
        ></div>
        <input
          type="range"
          min="0"
          max="360"
          step="0.1"
          bind:value={hue}
          oninput={updateColor}
          class="color-slider"
        />
      </div>
    </div>

    <!-- Alpha Slider -->
    <div class="flex flex-col gap-2">
      <label for="alpha-slider" class="text-xs">Alpha: {formatDecimal(alpha)}%</label>
      <div class="relative h-5">
        <div class="checkerboard absolute inset-0 rounded"></div>
        <div
          class="slider-bg absolute inset-0 rounded"
          style={`background: linear-gradient(to right, ${slider_stops(
            Array.from({ length: 6 }, (_, i) => i * 20),
            lightness,
            chroma,
            hue,
            alpha,
            3
          )})`}
        ></div>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          bind:value={alpha}
          oninput={updateColor}
          class="color-slider"
        />
      </div>
    </div>
  </div>
</div>

<style>
  /* Base slider styles */
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

  .color-slider::-webkit-slider-thumb {
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

  .color-slider::-moz-range-thumb {
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
  }

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

  .out-of-gamut {
    outline: 2px solid var(--warning, #f1a10d);
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
