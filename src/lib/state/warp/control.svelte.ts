import { ThemeState } from '$lib/state/warp/theme.svelte';
import { randomNumber, randomEnum } from '$lib/utils/common/math';
import type { ControlsStateType, LockedColors } from '$lib/types/warp/colors';
import { ColorSchemes } from '$lib/types/sacred-geometry-schemes';

export class ControlsState {
  controls: ControlsStateType = $state({
    isDark: true,
    baseHue: [randomNumber(0, 360)],
    scheme: randomEnum(Object(ColorSchemes)) as ColorSchemes,
    lockedColors: {} as LockedColors
  });

  constructor() {}

  randomize() {
    this.controls.baseHue = [randomNumber(0, 360)];
    this.controls.scheme = randomEnum(Object(ColorSchemes)) as ColorSchemes;
    this.generate();
  }

  generate() {
    const themeState = new ThemeState();
    themeState.generate(
      this.controls.isDark,
      this.controls.baseHue[0],
      this.controls.scheme as ColorSchemes,
      this.controls.lockedColors
    );
  }

  toggleLockedColor(key: string, color: string) {
    if (this.controls.lockedColors[key]) {
      delete this.controls.lockedColors[key];
    } else {
      this.controls.lockedColors[key] = color;
    }
  }
}
