<script lang="ts">
  import { onMount } from 'svelte';
  import { type Oklch } from 'culori';
  import {
    generateMapColors,
    getMapPosition,
    getColorFromPosition,
    type MapType
  } from './maps.svelte';
  import { LCH_to_sRGB_string } from './color-utils.svelte';

  const { type, color, onChange } = $props<{
    type: MapType;
    color: Oklch;
    onChange?: (color: Oklch) => void;
  }>();

  let container: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let width = 0;
  let height = 0;
  let isDragging = false;
  let resizeObserver: ResizeObserver;

  onMount(() => {
    // Initialize canvas context
    ctx = canvas.getContext('2d')!;

    // Setup resize observer
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = entry.contentRect.width;
        height = width / 2; // 2:1 aspect ratio
        canvas.width = width;
        canvas.height = height;
        requestAnimationFrame(drawMap);
      }
    });

    resizeObserver.observe(container);

    // Initial draw
    requestAnimationFrame(drawMap);

    return () => {
      resizeObserver.disconnect();
    };
  });

  function drawMap() {
    if (!ctx || width === 0 || height === 0) return;

    const colors = generateMapColors(type, color, width, height);
    const imageData = ctx.createImageData(width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const colorStr = colors[y][x];
        if (colorStr === 'transparent') continue;

        // Convert hex to RGB
        const r = parseInt(colorStr.slice(1, 3), 16);
        const g = parseInt(colorStr.slice(3, 5), 16);
        const b = parseInt(colorStr.slice(5, 7), 16);

        const index = (y * width + x) * 4;
        imageData.data[index] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    drawCursor();
  }

  function drawCursor() {
    if (!ctx) return;
    const pos = getMapPosition(type, color, width, height);

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 6, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw inner circle
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function handlePointerDown(event: PointerEvent) {
    isDragging = true;
    updateColor(event);
  }

  function handlePointerMove(event: PointerEvent) {
    if (!isDragging) return;
    updateColor(event);
  }

  function handlePointerUp() {
    isDragging = false;
  }

  function updateColor(event: PointerEvent) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(width, event.clientX - rect.left));
    const y = Math.max(0, Math.min(height, event.clientY - rect.top));

    const newColor = getColorFromPosition(type, x, y, width, height, color);
    onChange?.(newColor);
  }

  // Export update method for parent component
  export function update() {
    requestAnimationFrame(drawMap);
  }
</script>

<div class="aspect-[2/1] w-full" bind:this={container}>
  <canvas
    bind:this={canvas}
    class="h-full w-full cursor-crosshair rounded border border-input"
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
    onpointerleave={handlePointerUp}
  ></canvas>
</div>

<style>
  canvas {
    touch-action: none;
  }
</style>
