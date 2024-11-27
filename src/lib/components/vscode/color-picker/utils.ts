import type { ColorComponents } from './types';
import { UPDATE_DEBOUNCE_MS } from './constants';

// Define a more specific type for the debounce function
type DebouncedFunction<Args extends unknown[]> = (...args: Args) => void;

export function debounce<Args extends unknown[]>(
  fn: DebouncedFunction<Args>,
  ms: number = UPDATE_DEBOUNCE_MS
): DebouncedFunction<Args> {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

export function formatColorValue(
  value: number,
  type: 'lightness' | 'chroma' | 'hue' | 'alpha'
): string {
  const rounded = roundTo(value, 1);
  switch (type) {
    case 'lightness':
    case 'alpha':
      return `${rounded}%`;
    case 'hue':
      return `${rounded}°`;
    default:
      return rounded.toString();
  }
}

export function getPointerPosition(
  event: PointerEvent,
  element: HTMLElement
): { x: number; y: number } {
  const rect = element.getBoundingClientRect();
  return {
    x: clamp((event.clientX - rect.left) / rect.width, 0, 1),
    y: clamp((event.clientY - rect.top) / rect.height, 0, 1)
  };
}

export function normalizeColorComponents(components: ColorComponents): ColorComponents {
  return {
    l: clamp(components.l, 0, 1),
    c: clamp(components.c, 0, 1),
    h: ((components.h % 360) + 360) % 360,
    alpha: components.alpha !== undefined ? clamp(components.alpha, 0, 1) : 1
  };
}

export function areColorComponentsEqual(
  a: ColorComponents,
  b: ColorComponents,
  tolerance: number = 0.001
): boolean {
  return (
    Math.abs(a.l - b.l) < tolerance &&
    Math.abs(a.c - b.c) < tolerance &&
    (Math.abs(a.h - b.h) < tolerance || Math.abs(a.h - b.h) > 360 - tolerance) &&
    Math.abs((a.alpha ?? 1) - (b.alpha ?? 1)) < tolerance
  );
}

export function interpolateColorComponents(
  start: ColorComponents,
  end: ColorComponents,
  t: number
): ColorComponents {
  // Normalize t to [0, 1]
  t = clamp(t, 0, 1);

  // Special handling for hue interpolation across the 360° boundary
  let h1 = start.h;
  let h2 = end.h;
  const diff = h2 - h1;

  if (diff > 180) h1 += 360;
  else if (diff < -180) h2 += 360;

  return {
    l: start.l + (end.l - start.l) * t,
    c: start.c + (end.c - start.c) * t,
    h: (h1 + (h2 - h1) * t) % 360,
    alpha: (start.alpha ?? 1) + ((end.alpha ?? 1) - (start.alpha ?? 1)) * t
  };
}

export function preventDefault(event: Event): void {
  event.preventDefault();
  event.stopPropagation();
}
