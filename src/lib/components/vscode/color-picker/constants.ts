// Map resolutions
export const MAP_RESOLUTION = 150; // Reduced from 200 for better performance while maintaining quality
export const DRAG_RESOLUTION = 75; // Reduced from 100 for smoother dragging

// Color value ranges
export const LIGHTNESS_RANGE = {
  MIN: 0,
  MAX: 100,
  STEP: 0.1
} as const;

export const CHROMA_RANGE = {
  MIN: 0,
  MAX: 132,
  STEP: 0.1
} as const;

export const HUE_RANGE = {
  MIN: 0,
  MAX: 360,
  STEP: 0.1
} as const;

export const ALPHA_RANGE = {
  MIN: 0,
  MAX: 100,
  STEP: 0.1
} as const;

// Gradient options
export const GRADIENT_STOPS = {
  LIGHTNESS: 31, // Reduced from 41 while maintaining smoothness
  CHROMA: 35, // Reduced from 45
  HUE: 36, // Reduced from 49
  ALPHA: 20
} as const;

// Cache settings
export const CACHE_DURATION = 10000; // Increased to 10 seconds for better caching
export const MAX_CACHE_SIZE = 50; // Reduced from 100 to prevent memory bloat

// Update debouncing
export const UPDATE_DEBOUNCE_MS = 32; // Reduced update frequency to ~30fps for better performance
export const COMMIT_DEBOUNCE_MS = 300;

// Map dimensions
export const MAP_ASPECT_RATIO = 3;
export const MAP_MARGIN = 4;

// UI elements
export const CROSSHAIR_SIZE = 2;
export const CROSSHAIR_COLOR = 'rgba(255, 255, 255, 0.5)';

// Checkerboard pattern
export const CHECKERBOARD = {
  LIGHT: '#cccccc',
  DARK: '#ffffff',
  SIZE: 10
} as const;

// Out of gamut indicators
export const OUT_OF_GAMUT = {
  INDICATOR_COLOR: 'rgba(255, 0, 0, 0.2)',
  STRIPE_SIZE: 5,
  STRIPE_ANGLE: 45,
  BORDER_COLOR: 'var(--error, #d65a5a)',
  BORDER_WIDTH: 2
} as const;

// Animation durations
export const TRANSITION = {
  FAST: 150,
  NORMAL: 250,
  SLOW: 350
} as const;
