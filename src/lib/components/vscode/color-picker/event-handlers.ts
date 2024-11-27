import type {
  ColorState,
  MapType,
  DOMPointerEvent,
  MapClickHandlerOptions,
  EventHandlers
} from './types';

function getMapDimensions(element: HTMLDivElement) {
  const rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    left: rect.left,
    top: rect.top
  };
}

function getColorValuesFromPosition(
  event: DOMPointerEvent,
  element: HTMLDivElement,
  type: MapType
): [number, number] {
  const rect = getMapDimensions(element);
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

  switch (type) {
    case 'LC':
      return [
        (1 - y) * 100, // Lightness (0-100)
        x * 132 // Chroma (0-132)
      ];
    case 'LH':
      return [
        (1 - y) * 100, // Lightness (0-100)
        x * 360 // Hue (0-360)
      ];
    case 'CH':
      return [
        (1 - y) * 132, // Chroma (0-132)
        x * 360 // Hue (0-360)
      ];
  }
}

function updateColorFromPosition(
  event: DOMPointerEvent,
  options: MapClickHandlerOptions,
  colorState: ColorState,
  updateColor: (immediate?: boolean) => void
) {
  const [value1, value2] = getColorValuesFromPosition(event, options.element, options.type);

  switch (options.type) {
    case 'LC':
      colorState.setPickerLightness([value1]);
      colorState.setPickerChroma([value2]);
      break;
    case 'LH':
      colorState.setPickerLightness([value1]);
      colorState.setPickerHue([value2]);
      break;
    case 'CH':
      colorState.setPickerChroma([value1]);
      colorState.setPickerHue([value2]);
      break;
  }

  updateColor(options.updateImmediately);
}

export function createMapEventHandlers(
  colorState: ColorState,
  updateColor: (immediate?: boolean) => void,
  setIsDragging: (value: boolean) => void
) {
  return function (options: MapClickHandlerOptions): EventHandlers {
    let isPointerDown = false;

    function onPointerDown(event: DOMPointerEvent) {
      isPointerDown = true;
      setIsDragging(true);
      options.element.setPointerCapture(event.pointerId);
      updateColorFromPosition(event, options, colorState, updateColor);
    }

    function onPointerMove(event: DOMPointerEvent) {
      if (!isPointerDown) return;
      updateColorFromPosition(
        event,
        { ...options, updateImmediately: false },
        colorState,
        updateColor
      );
    }

    function onPointerUp(event: DOMPointerEvent) {
      if (!isPointerDown) return;
      isPointerDown = false;
      setIsDragging(false);
      options.element.releasePointerCapture(event.pointerId);
      updateColorFromPosition(
        event,
        { ...options, updateImmediately: true },
        colorState,
        updateColor
      );
    }

    function onPointerLeave(event: DOMPointerEvent) {
      if (!isPointerDown) return;
      isPointerDown = false;
      setIsDragging(false);
      options.element.releasePointerCapture(event.pointerId);
      updateColorFromPosition(
        event,
        { ...options, updateImmediately: true },
        colorState,
        updateColor
      );
    }

    return {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerLeave
    };
  };
}

export function attachMapEventListeners(
  element: HTMLDivElement,
  handlers: EventHandlers
): () => void {
  element.addEventListener('pointerdown', handlers.onPointerDown);
  element.addEventListener('pointermove', handlers.onPointerMove);
  element.addEventListener('pointerup', handlers.onPointerUp);
  element.addEventListener('pointerleave', handlers.onPointerLeave);

  return () => {
    element.removeEventListener('pointerdown', handlers.onPointerDown);
    element.removeEventListener('pointermove', handlers.onPointerMove);
    element.removeEventListener('pointerup', handlers.onPointerUp);
    element.removeEventListener('pointerleave', handlers.onPointerLeave);
  };
}
