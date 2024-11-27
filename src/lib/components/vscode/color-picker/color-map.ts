import type { Oklch } from 'culori';
import { LCH_to_sRGB_string, isLCH_within_sRGB } from '$lib/utils/vscode/colors';
import type { MapType, ColorMapOptions } from './types';
import { MAP_RESOLUTION, DRAG_RESOLUTION, CACHE_DURATION } from './constants';

function createCanvas(resolution: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = resolution;
  canvas.height = resolution;
  return canvas;
}

function getColorForPosition(
  type: MapType,
  x: number,
  y: number,
  baseColor: Oklch,
  resolution: number
): Oklch {
  const newColor = { ...baseColor };

  switch (type) {
    case 'LC':
      newColor.l = (1 - y / resolution) * 100; // Scale to 0-100
      newColor.c = (x / resolution) * 132; // Scale to 0-132
      break;
    case 'LH':
      newColor.l = (1 - y / resolution) * 100; // Scale to 0-100
      newColor.h = (x / resolution) * 360; // Scale to 0-360
      break;
    case 'CH':
      newColor.c = (1 - y / resolution) * 132; // Scale to 0-132
      newColor.h = (x / resolution) * 360; // Scale to 0-360
      break;
  }

  return newColor;
}

function createCheckerboardPattern(ctx: CanvasRenderingContext2D, resolution: number) {
  const size = resolution / 12; // Adjusted for better visibility

  // Fill with darker base color
  ctx.fillStyle = '#2a2a2a';
  ctx.fillRect(0, 0, resolution, resolution);

  // Create lighter squares for contrast
  ctx.fillStyle = '#3a3a3a';
  for (let y = 0; y < resolution; y += size * 2) {
    for (let x = 0; x < resolution; x += size * 2) {
      ctx.fillRect(x, y, size, size);
      ctx.fillRect(x + size, y + size, size, size);
    }
  }

  // Add subtle grid overlay
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 1;

  for (let i = 0; i <= resolution; i += size) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, resolution);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(resolution, i);
    ctx.stroke();
  }
}

export function create2DMap(
  type: MapType,
  l: number,
  c: number,
  h: number,
  options: ColorMapOptions = { resolution: MAP_RESOLUTION, isDragging: false }
): string {
  const resolution = options.isDragging ? DRAG_RESOLUTION : options.resolution;
  const canvas = createCanvas(resolution);
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return '';

  // Create base color
  const baseColor: Oklch = {
    mode: 'oklch',
    l: l / 100, // Normalize to 0-1
    c: c / 132, // Normalize to 0-1
    h: h,
    alpha: 1
  };

  // Create checkerboard pattern for out-of-gamut areas
  createCheckerboardPattern(ctx, resolution);

  // Create image data with optimized buffer
  const imageData = ctx.createImageData(resolution, resolution);
  const data = imageData.data;
  const buffer = new Uint8Array(resolution * resolution * 4);

  // Fill image data with optimized loop
  for (let y = 0; y < resolution; y++) {
    const yOffset = y * resolution * 4;
    for (let x = 0; x < resolution; x++) {
      const i = yOffset + x * 4;
      const color = getColorForPosition(type, x, y, baseColor, resolution);

      // Check if color is in gamut
      const inGamut = isLCH_within_sRGB(color.l * 100, color.c * 132, color.h || 0);

      if (inGamut) {
        // For in-gamut colors, use the actual color
        const srgb = LCH_to_sRGB_string(color, false);
        const match = srgb.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (match) {
          buffer[i] = parseInt(match[1], 16); // R
          buffer[i + 1] = parseInt(match[2], 16); // G
          buffer[i + 2] = parseInt(match[3], 16); // B
          buffer[i + 3] = 255; // A
        }
      } else {
        // For out-of-gamut colors, use forced gamut version with reduced opacity
        const forcedColor = LCH_to_sRGB_string(color, true);
        const match = forcedColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (match) {
          buffer[i] = parseInt(match[1], 16); // R
          buffer[i + 1] = parseInt(match[2], 16); // G
          buffer[i + 2] = parseInt(match[3], 16); // B
          buffer[i + 3] = 200; // Slightly transparent for out-of-gamut indication
        }
      }
    }
  }

  // Copy buffer to imageData
  data.set(buffer);
  ctx.putImageData(imageData, 0, 0);

  // Add subtle border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, resolution, resolution);

  return canvas.toDataURL('image/webp', 0.92); // Use WebP for better compression
}

// Optimized cache with LRU (Least Recently Used) strategy
const mapCache = new Map<string, { dataUrl: string; timestamp: number }>();
const MAX_CACHE_SIZE = 50;

export function getCachedMap(
  type: MapType,
  l: number,
  c: number,
  h: number,
  options: ColorMapOptions = { resolution: MAP_RESOLUTION, isDragging: false }
): string {
  const key = `${type}-${l}-${c}-${h}-${options.resolution}-${options.isDragging}`;
  const cached = mapCache.get(key);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    // Update timestamp for LRU tracking
    cached.timestamp = Date.now();
    return cached.dataUrl;
  }

  const dataUrl = create2DMap(type, l, c, h, options);

  // Implement LRU cache eviction
  if (mapCache.size >= MAX_CACHE_SIZE) {
    let oldestKey = key;
    let oldestTime = Date.now();

    for (const [k, v] of mapCache.entries()) {
      if (v.timestamp < oldestTime) {
        oldestTime = v.timestamp;
        oldestKey = k;
      }
    }

    mapCache.delete(oldestKey);
  }

  mapCache.set(key, { dataUrl, timestamp: Date.now() });
  return dataUrl;
}
