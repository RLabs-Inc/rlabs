/**
 * Props for the color picker component
 */
export interface ColorPickerProps {
  /** Callback function when color changes */
  onChange?: (color: string) => void;
}

/**
 * State management for color values
 */
export interface ColorState {
  /** Current lightness value [0-100] */
  pickerLightness: [number];
  /** Current chroma value [0-132] */
  pickerChroma: [number];
  /** Current hue value [0-360] */
  pickerHue: [number];
  /** Current alpha value [0-100] */
  pickerAlpha: [number];
  /** Currently selected color information */
  selectedColor?: {
    color: string;
  };
  /** Update functions for each component */
  setPickerLightness: (value: [number]) => void;
  setPickerChroma: (value: [number]) => void;
  setPickerHue: (value: [number]) => void;
  setPickerAlpha: (value: [number]) => void;
}

/**
 * Type alias for DOM pointer events
 */
export type DOMPointerEvent = PointerEvent;

/**
 * Dimensions for color map elements
 */
export interface MapDimensions {
  width: number;
  height: number;
  left: number;
  top: number;
}

/**
 * Available map types for 2D color selection
 */
export type MapType = 'LC' | 'LH' | 'CH';

/**
 * Options for color map generation
 */
export interface ColorMapOptions {
  /** Resolution of the color map in pixels */
  resolution: number;
  /** Whether the map is currently being dragged */
  isDragging: boolean;
  /** Whether to show the grid overlay */
  showGrid?: boolean;
  /** Whether to show gamut boundary indicators */
  showGamutBoundary?: boolean;
}

/**
 * Options for color updates
 */
export interface ColorUpdateOptions {
  /** Whether to update immediately or wait for debounce */
  immediate?: boolean;
  /** Whether to skip the cache when updating */
  skipCache?: boolean;
}

/**
 * Props for slider components
 */
export interface SliderProps {
  /** Current value of the slider */
  value: [number];
  /** Minimum value */
  min: number;
  /** Maximum value */
  max: number;
  /** Step size */
  step: number;
  /** Background gradient CSS */
  bgColor: string;
  /** Callback when value changes */
  onValueChange: (value: [number]) => void;
  /** Callback when value is committed */
  onValueCommit: () => void;
}

/**
 * Options for map click handlers
 */
export interface MapClickHandlerOptions {
  /** Type of map being clicked */
  type: MapType;
  /** DOM element reference */
  element: HTMLDivElement;
  /** Whether to update immediately */
  updateImmediately?: boolean;
}

/**
 * Color component values
 */
export interface ColorComponents {
  /** Lightness value [0-1] */
  l: number;
  /** Chroma value [0-1] */
  c: number;
  /** Hue value [0-360] */
  h: number;
  /** Alpha value [0-1] */
  alpha?: number;
}

/**
 * Cache entry for color maps
 */
export interface CacheEntry {
  /** Data URL of the cached map */
  dataUrl: string;
  /** Timestamp when the cache was created */
  timestamp: number;
}

/**
 * Event handlers for map interactions
 */
export interface EventHandlers {
  /** Handler for pointer down events */
  onPointerDown: (event: DOMPointerEvent) => void;
  /** Handler for pointer move events */
  onPointerMove: (event: DOMPointerEvent) => void;
  /** Handler for pointer up events */
  onPointerUp: (event: DOMPointerEvent) => void;
  /** Handler for pointer leave events */
  onPointerLeave: (event: DOMPointerEvent) => void;
}

/**
 * Options for gradient generation
 */
export interface GradientOptions {
  /** Number of color stops in the gradient */
  stops: number;
  /** Direction of the gradient */
  direction?: 'to right' | 'to bottom';
  /** Whether this is an alpha gradient */
  alpha?: boolean;
}
