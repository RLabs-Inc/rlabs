import { type Oklch } from 'culori';
import type { MapType } from './maps.svelte';
import { get_sRGB_string_for_gradient } from './color-utils.svelte';

function generateMapColors(
  type: MapType,
  currentColor: Oklch,
  width: number,
  height: number
): string[][] {
  const colors: string[][] = [];

  for (let y = 0; y < height; y++) {
    const row: string[] = [];
    for (let x = 0; x < width; x++) {
      const color = { ...currentColor };

      switch (type) {
        case 'lightness-chroma':
          color.l = (x / (width - 1)) * 100;
          color.c = (1 - y / (height - 1)) * 0.4;
          break;
        case 'hue-chroma':
          color.h = (x / (width - 1)) * 360;
          color.c = (1 - y / (height - 1)) * 0.4;
          break;
        case 'hue-lightness':
          color.h = (x / (width - 1)) * 360;
          color.l = (1 - y / (height - 1)) * 100;
          break;
      }

      row.push(get_sRGB_string_for_gradient(color));
    }
    colors.push(row);
  }

  return colors;
}

self.onmessage = (e) => {
  if (e.data.type === 'generateColors') {
    const { color, mapType, width, height } = e.data;
    const colors = generateMapColors(mapType, color, width, height);
    const imageData = new Uint8ClampedArray(width * height * 4);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const colorStr = colors[y][x];
        if (colorStr === 'transparent') continue;

        // Convert hex to RGB
        const r = parseInt(colorStr.slice(1, 3), 16);
        const g = parseInt(colorStr.slice(3, 5), 16);
        const b = parseInt(colorStr.slice(5, 7), 16);

        const index = (y * width + x) * 4;
        imageData[index] = r;
        imageData[index + 1] = g;
        imageData[index + 2] = b;
        imageData[index + 3] = 255;
      }
    }

    self.postMessage({ type: 'colorsGenerated', imageData }, { transfer: [imageData.buffer] });
  }
};
