import { formatHex8, converter, clampChroma, type Oklch } from 'culori';
import { forceIntoGamut, isLCH_within_sRGB } from './gamut-utils.svelte';

export const toRGB = converter('rgb');
export const toOKLCH = converter('oklch');
export const toOKHSL = converter('okhsl');
export const toP3 = converter('p3');
export const toRec2020 = converter('rec2020');

/**
 * Converts a CSS color string to LCH values
 */
// export function colorToLCH(color: string) {
// 	const parsed = toOKLCH(color);
// 	if (!parsed) return null;

// 	return {
// 		lightness: Math.round(parsed.l * 100), // 0-100
// 		chroma: Math.round(parsed.c), // 0-0.4
// 		hue: Math.round(parsed.h || 0), // 0-360
// 		alpha: Math.round((parsed.alpha || 1) * 100) // 0-100
// 	};
// }

export const supportsP3 =
	typeof window !== 'undefined' && window.CSS && CSS.supports('color', 'color(display-p3 0 1 0)');

export function alpha_to_string(a = 100) {
	return a < 100 ? ` / ${a}%` : '';
}

// export function LCH_to_sRGB_string(color: Oklch, forceInGamut = false): string {
// 	const l = color.l;
// 	const c = color.c;
// 	const h = color.h || 0;
// 	const alpha = color.alpha;

// 	let adjustedL = l;
// 	let adjustedC = c;
// 	let adjustedH = h;

// 	if (forceInGamut) {
// 		[adjustedL, adjustedC, adjustedH] = forceIntoGamut(l, c, h, isLCH_within_sRGB);
// 	}

// 	const rgb = toRGB({
// 		mode: 'oklch',
// 		l: adjustedL,
// 		c: adjustedC,
// 		h: adjustedH,
// 		alpha: alpha ? alpha : 0
// 	});

// 	return formatHex8(rgb);
// }

export function get_sRGB_string_for_gradient(color: Oklch): string {
	if (!isLCH_within_sRGB(color)) {
		return 'transparent';
	} else {
		return formatHex8(color);
	}
}

export function LCH_to_r2020_string(l: number, c: number, h: number, a = 100) {
	return (
		'color(rec2020 ' +
		LCH_to_r2020([+l, +c, +h])
			.map((x) => {
				x = Math.round(x * 10000) / 10000;
				return x;
			})
			.join(' ') +
		alpha_to_string(a) +
		')'
	);
}

export function LCH_to_P3_string(l: number, c: number, h: number, a = 100, forceInGamut = false) {
	let newColor: Oklch = { mode: 'oklch', l, c, h, alpha: a };

	if (forceInGamut) {
		newColor = clampChroma(newColor, 'oklch');
	}

	const { l: newL, c: newC, h: newH } = newColor;

	return (
		'color(display-p3 ' +
		LCH_to_P3([+newL, +newC, +newH!])
			.map((x) => {
				x = Math.round(x * 10000) / 10000;
				return x;
			})
			.join(' ') +
		alpha_to_string(a) +
		')'
	);
}

export function LCH_to_sRGB(lch: [number, number, number]) {
	const rgb = toRGB({
		mode: 'oklch',
		l: lch[0],
		c: lch[1],
		h: lch[2]
	});
	return [rgb.r, rgb.g, rgb.b];
}

export function LCH_to_P3(lch: [number, number, number]) {
	const p3 = toP3({
		mode: 'oklch',
		l: lch[0],
		c: lch[1],
		h: lch[2]
	});
	return [p3.r, p3.g, p3.b];
}

export function LCH_to_r2020(lch: [number, number, number]) {
	const rec2020 = toRec2020({
		mode: 'oklch',
		l: lch[0],
		c: lch[1],
		h: lch[2]
	});
	return [rec2020.r, rec2020.g, rec2020.b];
}
