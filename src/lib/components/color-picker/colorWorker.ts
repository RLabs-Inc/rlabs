import { type Oklch } from 'culori';
import type { MapType } from './maps.svelte';
import { get_sRGB_string_for_gradient } from './color-utils.svelte';

interface ColorWorkerMessage {
	type: 'generateColors';
	color: Oklch;
	mapType: MapType;
	width: number;
	height: number;
	changedParam?: 'lightness' | 'chroma' | 'hue';
}

interface ColorWorkerResponse {
	type: 'colorsGenerated';
	imageData: Uint8ClampedArray;
	messageId: number;
	mapType: MapType;
}

let currentMessageId = 0;
let isProcessing = false;
const messageQueue = new Map<MapType, { id: number; data: ColorWorkerMessage }>();

function shouldUpdateMap(mapType: MapType, changedParam?: 'lightness' | 'chroma' | 'hue'): boolean {
	if (!changedParam) return true;

	switch (mapType) {
		case 'lightness-chroma':
			return changedParam === 'hue';
		case 'hue-chroma':
			return changedParam === 'lightness';
		case 'hue-lightness':
			return changedParam === 'chroma';
		default:
			return true;
	}
}

async function generateMapColors(
	type: MapType,
	currentColor: Oklch,
	width: number,
	height: number
): Promise<Uint8ClampedArray> {
	const imageData = new Uint8ClampedArray(width * height * 4);

	// Process rows in smaller chunks to avoid blocking
	const CHUNK_SIZE = 32;
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const color = { ...currentColor };

			switch (type) {
				case 'lightness-chroma':
					color.l = x / (width - 1);
					color.c = (1 - y / (height - 1)) * 0.4;
					break;
				case 'hue-chroma':
					color.h = (x / (width - 1)) * 360;
					color.c = (1 - y / (height - 1)) * 0.4;
					break;
				case 'hue-lightness':
					color.h = (x / (width - 1)) * 360;
					color.l = 1 - y / (height - 1);
					break;
			}

			const colorStr = get_sRGB_string_for_gradient(color);
			if (colorStr !== 'transparent') {
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

		// Yield to main thread every CHUNK_SIZE rows
		if (y % CHUNK_SIZE === 0) {
			await new Promise((resolve) => setTimeout(resolve, 0));
		}
	}

	return imageData;
}

async function processMessage(message: { id: number; data: ColorWorkerMessage }) {
	const { id, data } = message;
	const { color, mapType, width, height } = data;

	// if (!shouldUpdateMap(mapType)) {
	//   return;
	// }

	const imageData = await generateMapColors(mapType, color, width, height);

	const response: ColorWorkerResponse = {
		type: 'colorsGenerated',
		imageData,
		messageId: id,
		mapType
	};

	self.postMessage(response, { transfer: [imageData.buffer] });
}

async function processNextMessage() {
	if (isProcessing || messageQueue.size === 0) return;
	isProcessing = true;

	try {
		// Process all queued messages in parallel
		const messages = Array.from(messageQueue.values());
		messageQueue.clear();

		await Promise.all(messages.map(processMessage));
	} finally {
		isProcessing = false;
		// Check if new messages arrived while processing
		processNextMessage();
	}
}

self.onmessage = (e: MessageEvent<ColorWorkerMessage>) => {
	if (e.data.type === 'generateColors') {
		currentMessageId++;
		// Replace any existing message for this map type
		messageQueue.set(e.data.mapType, {
			id: currentMessageId,
			data: e.data
		});
		processNextMessage();
	}
};
