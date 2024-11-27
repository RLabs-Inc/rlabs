<script lang="ts">
  import { formatDecimal } from '$lib/utils/vscode/math';
  import { LCH_to_sRGB_string } from '$lib/utils/vscode/colors';
  import type { ColorState } from '../types';
  import type { Oklch } from 'culori';
  import { createCheckerboardPattern } from '../gradient-utils';
  import { OUT_OF_GAMUT, TRANSITION } from '../constants';

  const { colorState, isOutOfGamut, forcedInGamutColor } = $props<{
    colorState: ColorState;
    isOutOfGamut: boolean;
    forcedInGamutColor: [number, number, number];
  }>();

  // Memoized color objects
  const currentColorObj = $derived({
    mode: 'oklch',
    l: colorState.pickerLightness[0],
    c: colorState.pickerChroma[0],
    h: colorState.pickerHue[0],
    alpha: colorState.pickerAlpha[0]
  } as Oklch);

  const gamutColorObj = $derived({
    mode: 'oklch',
    l: forcedInGamutColor[0],
    c: forcedInGamutColor[1],
    h: forcedInGamutColor[2],
    alpha: colorState.pickerAlpha[0]
  } as Oklch);

  // Memoized color strings
  const currentColor = $derived(LCH_to_sRGB_string(currentColorObj, false));
  const gamutColor = $derived(LCH_to_sRGB_string(gamutColorObj, true));
  const displayColor = $derived(LCH_to_sRGB_string(currentColorObj, true));

  // Formatted values for display
  const formattedValues = $derived({
    lightness: formatDecimal(colorState.pickerLightness[0]),
    chroma: formatDecimal(colorState.pickerChroma[0]),
    hue: formatDecimal(colorState.pickerHue[0]),
    alpha: formatDecimal(colorState.pickerAlpha[0]),
    gamutL: formatDecimal(forcedInGamutColor[0]),
    gamutC: formatDecimal(forcedInGamutColor[1]),
    gamutH: formatDecimal(forcedInGamutColor[2])
  });

  // Get checkerboard pattern from utility
  const checkerboardBg = createCheckerboardPattern();

  // Styles for out of gamut indicator
  const outOfGamutStyles = $derived({
    outlineColor: OUT_OF_GAMUT.BORDER_COLOR,
    outlineWidth: `${OUT_OF_GAMUT.BORDER_WIDTH}px`,
    outlineStyle: 'solid'
  });

  // Warning stripe styles
  const warningStripeStyles = $derived({
    backgroundImage: `repeating-linear-gradient(
      ${OUT_OF_GAMUT.STRIPE_ANGLE}deg,
      transparent,
      transparent ${OUT_OF_GAMUT.STRIPE_SIZE}px,
      ${OUT_OF_GAMUT.INDICATOR_COLOR} ${OUT_OF_GAMUT.STRIPE_SIZE}px,
      ${OUT_OF_GAMUT.INDICATOR_COLOR} ${OUT_OF_GAMUT.STRIPE_SIZE * 2}px
    )`
  });
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-wrap gap-4">
    <div class="relative h-12 w-full">
      <!-- Checkerboard background -->
      <div
        class="absolute inset-0 rounded-lg"
        style:background-image={checkerboardBg}
        style:background-size="20px 20px"
        style:background-position="0 0, 0 10px, 10px -10px, -10px 0"
      ></div>

      <!-- Current color -->
      <div
        class="absolute inset-0 rounded-lg transition-all"
        style:background={currentColor}
        style:transition-duration="{TRANSITION.NORMAL}ms"
        style:outline={isOutOfGamut ? 'auto' : 'none'}
        style:outline-color={outOfGamutStyles.outlineColor}
        style:outline-width={outOfGamutStyles.outlineWidth}
        style:outline-style={outOfGamutStyles.outlineStyle}
      >
        {#if isOutOfGamut}
          <!-- Warning stripes -->
          <div
            class="absolute inset-0 rounded-lg"
            style:background-image={warningStripeStyles.backgroundImage}
          ></div>
        {/if}
      </div>

      <!-- Gamut-mapped color overlay -->
      {#if isOutOfGamut}
        <div
          class="absolute inset-0 rounded-lg opacity-50 transition-all"
          style:background={gamutColor}
          style:transition-duration="{TRANSITION.NORMAL}ms"
        ></div>
      {/if}
    </div>

    <div class="flex w-full flex-col justify-center gap-1 text-sm">
      <!-- Color values -->
      <div class="flex items-center justify-between">
        <div class="font-mono uppercase">
          {displayColor}
        </div>
        {#if isOutOfGamut}
          <span class="rounded bg-destructive px-2 py-0.5 text-xs text-destructive-foreground">
            Out of gamut - Closest available:
            <span class="font-mono">
              {formattedValues.gamutL}%,
              {formattedValues.gamutC},
              {formattedValues.gamutH}°
            </span>
          </span>
        {/if}
      </div>

      <!-- LCH values -->
      <div class="flex items-center gap-2">
        <span class="text-xs text-muted-foreground">LCH:</span>
        <span class="font-mono">
          {formattedValues.lightness}%,
          {formattedValues.chroma},
          {formattedValues.hue}°
          {#if colorState.pickerAlpha[0] !== 100}
            - {formattedValues.alpha}%
          {/if}
        </span>
      </div>
    </div>
  </div>
</div>
