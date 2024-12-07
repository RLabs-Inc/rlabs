<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { type Oklch } from 'culori';
  import { getMapPosition, setColorFromPosition, type MapType } from './maps.svelte';
  import colorWorker from './colorWorker.ts?worker';

  const { type, color, onChange } = $props<{
    type: MapType;
    color: Oklch;
    onChange?: (mapsOnly?: boolean, from?: string) => void;
  }>();

  let container: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let width = $state(0);
  let height = $state(0);
  let isDragging = false;
  let worker: Worker;
  let currentMessageId = 0;
  let isUpdateScheduled = false;

  onMount(() => {
    const dpr = window.devicePixelRatio;
    const rect = container.getBoundingClientRect();
    width = rect.width * dpr;
    height = rect.height * dpr;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d', { alpha: false })!;
    // ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    scheduleUpdate();

    // Initialize Web Worker
    worker = new colorWorker();
    worker.onmessage = (e) => {
      if (e.data.type === 'colorsGenerated' && e.data.mapType === type) {
        // Only update if this is the response to our latest request
        if (e.data.messageId === currentMessageId) {
          const imageData = new ImageData(new Uint8ClampedArray(e.data.imageData), width, height);
          ctx.putImageData(imageData, 0, 0);
          drawCursor();
        }
        isUpdateScheduled = false;
      }
    };
  });

  $effect(() => {
    const dpr = window.devicePixelRatio;
    const rect = container.getBoundingClientRect();
    width = rect.width * dpr;
    height = rect.height * dpr;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d', { alpha: false })!;
    // ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  });

  onDestroy(() => {
    worker.terminate();
  });

  function scheduleUpdate() {
    if (isUpdateScheduled) return;
    isUpdateScheduled = true;

    requestAnimationFrame(() => {
      if (!ctx || width === 0 || height === 0) {
        isUpdateScheduled = false;
        return;
      }

      currentMessageId++;
      worker.postMessage({
        type: 'generateColors',
        color,
        mapType: type,
        width,
        height
      });
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
    updateColor(event);
  }

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
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(width, event.clientX - rect.left)) * dpr;
    const y = Math.max(0, Math.min(height, event.clientY - rect.top)) * dpr;

    setColorFromPosition(type, x, y, width, height);
    scheduleUpdate();
  }

  // Export update method for parent component
  export function update(changedParam?: 'lightness' | 'chroma' | 'hue') {
    scheduleUpdate();
  }
</script>

<div
  class="border-border dark:border-primary-foreground relative aspect-2/1 h-[140px] w-[280px] overflow-hidden rounded border"
  bind:this={container}
>
  <canvas
    width="280"
    height="140"
    bind:this={canvas}
    class="cursor-pointer rounded"
    onmousedown={handleMouseDown}
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
  >
  </canvas>
  <div class="bg-muted absolute inset-0 -z-10 h-full overflow-hidden rounded"></div>
</div>

<style>
  canvas {
    touch-action: none;
  }
</style>
