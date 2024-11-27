// Main component
export { default as LCHColorPicker } from './LCHColorPicker.svelte';

// Section components
export { default as ColorPreview } from './sections/ColorPreview.svelte';
export { default as LightnessSection } from './sections/LightnessSection.svelte';
export { default as ChromaSection } from './sections/ChromaSection.svelte';
export { default as HueSection } from './sections/HueSection.svelte';
export { default as AlphaSection } from './sections/AlphaSection.svelte';

// Types
export type {
  ColorPickerProps,
  ColorState,
  ColorComponents,
  ColorMapOptions,
  MapType,
  SliderProps,
  GradientOptions
} from './types';

// Constants
export {
  MAP_RESOLUTION,
  DRAG_RESOLUTION,
  LIGHTNESS_RANGE,
  CHROMA_RANGE,
  HUE_RANGE,
  ALPHA_RANGE,
  GRADIENT_STOPS,
  OUT_OF_GAMUT
} from './constants';

// Utilities
export {
  clamp,
  roundTo,
  formatColorValue,
  normalizeColorComponents,
  areColorComponentsEqual,
  interpolateColorComponents
} from './utils';

// Color map utilities
export { create2DMap, getCachedMap } from './color-map';

// Gradient utilities
export {
  createLightnessGradient,
  createChromaGradient,
  createHueGradient,
  createAlphaGradient,
  createCheckerboardPattern
} from './gradient-utils';

// Event handling utilities
export { createMapEventHandlers, attachMapEventListeners } from './event-handlers';

// Action
export { createMapAction } from './actions';
