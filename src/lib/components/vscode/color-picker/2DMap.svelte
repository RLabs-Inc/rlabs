<script lang="ts">
  import { onMount } from 'svelte';
  import { type Oklch } from 'culori';
  import { getMapPosition, setColorFromPosition, type MapType } from './maps.svelte';

  const { type, color, onChange } = $props<{
    type: MapType;
    color: Oklch;
    onChange?: (mapsOnly?: boolean) => void;
  }>();

  let container: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let width = 0;
  let height = 0;
  let isDragging = false;
  let resizeObserver: ResizeObserver;
  let worker: Worker;

  onMount(() => {
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = width / 2; // 2:1 aspect ratio
    canvas.width = width;
    canvas.height = height;

    // Initialize canvas context
    ctx = canvas.getContext('2d')!;

    // Initialize Web Worker
    worker = new Worker(new URL('./colorWorker.ts', import.meta.url), { type: 'module' });

    worker.onmessage = (e) => {
      if (e.data.type === 'colorsGenerated') {
        const imageData = new ImageData(new Uint8ClampedArray(e.data.imageData), width, height);
        ctx.putImageData(imageData, 0, 0);
        drawCursor();
      }
    };

    // Setup resize observer
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = entry.contentRect.width;
        height = width / 2;
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
      worker.terminate();
    };
  });

  function drawMap() {
    if (!ctx || width === 0 || height === 0) return;

    worker.postMessage({
      type: 'generateColors',
      color,
      mapType: type,
      width,
      height
    });
  }

  function drawCursor() {
    if (!ctx) return;
    const pos = getMapPosition(type, color, width, height);

    // Draw x axis
    ctx.beginPath();
    ctx.moveTo(0, pos.y);
    ctx.lineTo(width, pos.y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Draw y axis
    ctx.beginPath();
    ctx.moveTo(pos.x, 0);
    ctx.lineTo(pos.x, height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
  }

  let timer: NodeJS.Timeout;
  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    updateColor(event);
  };

  function handleMouseUp(event: MouseEvent) {
    isDragging = false;
    updateColor(event);
    onChange?.(true, `POINTER UP ${type}`);
  }

  function updateColor(event: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(width, event.clientX - rect.left));
    const y = Math.max(0, Math.min(height, event.clientY - rect.top));
    setColorFromPosition(type, x, y, width, height);
  }

  // Export update method for parent component
  export function update() {
    requestAnimationFrame(drawMap);
  }
</script>

<div
  class="relative aspect-[2/1] w-full rounded border border-border dark:border-primary-foreground"
  bind:this={container}
>
  <canvas
    bind:this={canvas}
    class="h-full w-full cursor-crosshair rounded"
    onmousedown={handleMouseDown}
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
  >
  </canvas>
  <div class="absolute inset-0 -z-10 h-full overflow-hidden rounded bg-muted"></div>
</div>

<style>
  canvas {
    touch-action: none;
  }
</style>
