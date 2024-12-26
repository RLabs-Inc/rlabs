import { type Oklch, clampChroma, formatCss } from 'culori';
import { LIGHTNESS_STOPS, CHROMA_STOPS, HUE_STOPS, ALPHA_STOPS } from './constants';
import { isLCH_within_sRGB } from './gamut-utils.svelte';
import { is } from 'drizzle-orm';

export function slider_stops(
	range: number[],
	l: number,
	c: number,
	h: number,
	a: number,
	index: number
): string {
	// Create intermediate stops for smoother gradients
	const extendedRange = range.reduce((acc, val, i, arr) => {
		if (i === arr.length - 1) return [...acc, val];
		const next = arr[i + 1];
		const step = (next - val) / 4; // Add 3 intermediate points
		return [...acc, val, val + step, val + 2 * step, val + 3 * step];
	}, [] as number[]);

	return extendedRange
		.map((x) => {
			const values = [l, c, h, a];
			values[index] = x;
			// Force colors into gamut for accurate representation
			if (index === 3)
				return formatCss({
					mode: 'oklch',
					l: values[0],
					c: values[1],
					h: values[2],
					alpha: values[3]
				});

			if (
				isLCH_within_sRGB({
					mode: 'oklch',
					l: values[0],
					c: values[1],
					h: values[2],
					alpha: values[3]
				})
			) {
				return formatCss({
					mode: 'oklch',
					l: values[0],
					c: values[1],
					h: values[2],
					alpha: values[3]
				});
			} else {
				return 'transparent';
			}
		})
		.join(', ');
}

export const getBgLightness = (color: Oklch) => {
	return `linear-gradient(to right, ${slider_stops(
		Array.from({ length: LIGHTNESS_STOPS }, (_, i) => i / (LIGHTNESS_STOPS - 1)),
		color.l,
		color.c,
		color.h || 0,
		100,
		0
	)})`;
};

export const getBgChroma = (color: Oklch) => {
	return `linear-gradient(to right, ${slider_stops(
		Array.from({ length: CHROMA_STOPS }, (_, i) => (i * 0.4) / (CHROMA_STOPS - 1)),
		color.l,
		color.c,
		color.h || 0,
		100,
		1
	)})`;
};

export const getBgHue = (color: Oklch) => {
	return `linear-gradient(to right, ${slider_stops(
		Array.from({ length: HUE_STOPS }, (_, i) => (i * 360) / (HUE_STOPS - 1)),
		color.l,
		color.c,
		color.h || 0,
		100,
		2
	)})`;
};

export const getBgAlpha = (color: Oklch) => {
	return `linear-gradient(to right, ${slider_stops(
		Array.from({ length: ALPHA_STOPS }, (_, i) => i / (ALPHA_STOPS - 1)),
		color.l,
		color.c,
		color.h || 0,
		color.alpha || 100,
		3
	)})`;
};
