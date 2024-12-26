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
  let dpr: number = $state(1);
  let rect: DOMRect = $state({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
    right: 0,
    bottom: 0,
    toJSON: () => ''
  });
  let container: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let width = $state(0);
  let height = $state(0);

  let offsetWidth = $state(0);
  let offsetHeight = $state(0);

  let isDragging = false;
  let worker: Worker;
  let currentMessageId = 0;
  let isUpdateScheduled = false;
  let imageData: ImageData;

  const canvasWidth = $derived(Math.round(width * dpr));
  const canvasHeight = $derived(Math.round(height * dpr));

  onMount(() => {
    // Initialize Web Worker
    worker = new colorWorker();
    worker.onmessage = (e) => {
      if (e.data.type === 'colorsGenerated' && e.data.mapType === type) {
        // Only update if this is the response to our latest request
        if (e.data.messageId === currentMessageId) {
          imageData = new ImageData(
            new Uint8ClampedArray(e.data.imageData),
            canvasWidth,
            canvasHeight
          );
          // ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.putImageData(imageData, 0, 0);
          drawCursor();
        }
        isUpdateScheduled = false;
      }
    };
  });

  // const observer = new ResizeObserver(resizeTheCanvasToDisplaySize);
  // observer.observe(canvas);

  // function resizeTheCanvasToDisplaySize(entries) {
  //   cont entry = entries[0];
  //   let width;
  //   let height;
  //   if (entry.devicePixelContentBoxSize) {
  //     width = entry.devicePixelContentBoxSize[0].inlineSize;
  //     height = entry.devicePixelContentBoxSize[0].blockSize;
  //   } else if (entry.contentBoxSize) {
  //     // fallback for Safari that will not always be correct
  //     width = Math.round(entry.contentBoxSize[0].inlineSize * devicePixelRatio);
  //     height = Math.round(entry.contentBoxSize[0].blockSize * devicePixelRatio);
  //   }
  //   canvas.width = width;
  //   canvas.height = height;
  // }

  $effect(() => {
    ctx = canvas.getContext('2d', { alpha: false })!;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
  });

  onDestroy(() => {
    console.log('Destroying 2DMap');
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
      drawCursor();
      currentMessageId++;
      worker.postMessage({
        type: 'generateColors',
        color,
        mapType: type,
        width: canvasWidth,
        height: canvasHeight
      });
    });
  }

  function drawCursor() {
    if (!ctx) return;
    if (!imageData) return;

    const pos = getMapPosition(type, color, canvasWidth, canvasHeight);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.putImageData(imageData, 0, 0);

    // Draw x axis
    ctx.beginPath();
    ctx.moveTo(0, pos.y);
    ctx.lineTo(canvasWidth, pos.y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Draw y axis
    ctx.beginPath();
    ctx.moveTo(pos.x, 0);
    ctx.lineTo(pos.x, canvasHeight);
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
    if (!rect) return;
    // const x = Math.max(0, Math.min(width, event.clientX - rect.left));
    // const y = Math.max(0, Math.min(height, event.clientY - rect.top));
    const x = (event.offsetX * width) / offsetWidth;
    const y = (event.offsetY * height) / offsetHeight;

    setColorFromPosition(type, x, y, width, height);
    drawCursor();
  }

  // Export update method for parent component
  export function update(changedParam?: 'lightness' | 'chroma' | 'hue') {
    scheduleUpdate();
  }
</script>

<svelte:window bind:devicePixelRatio={dpr} on:resize={scheduleUpdate} />
<div
  class="border-border-st dark:border-primary-foreground-st bg-muted-st relative h-[140px] w-[280px] overflow-hidden rounded border"
  bind:this={container}
  bind:clientHeight={height}
  bind:clientWidth={width}
>
  <canvas
    width={canvasWidth}
    height={canvasHeight}
    bind:offsetHeight
    bind:offsetWidth
    bind:this={canvas}
    style={`width: ${width}px; height: ${height}px;`}
    class="cursor-pointer rounded"
    onmousedown={handleMouseDown}
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
  ></canvas>
</div>

<style>
  canvas {
    touch-action: none;
  }
</style>
