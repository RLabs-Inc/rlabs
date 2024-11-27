import type { ColorState, MapType } from './types';
import { createMapEventHandlers, attachMapEventListeners } from './event-handlers';

export interface MapActionParams {
  type: MapType;
  colorState: ColorState;
  updateColor: (immediate?: boolean) => void;
  setIsDragging: (value: boolean) => void;
}

export function createMapAction(node: HTMLDivElement, params: MapActionParams) {
  const handlers = createMapEventHandlers(
    params.colorState,
    params.updateColor,
    params.setIsDragging
  )({
    type: params.type,
    element: node,
    updateImmediately: false
  });

  const cleanup = attachMapEventListeners(node, handlers);

  return {
    destroy() {
      cleanup();
    },
    update(newParams: MapActionParams) {
      params = newParams;
    }
  };
}

export default {
  createMapAction
};
