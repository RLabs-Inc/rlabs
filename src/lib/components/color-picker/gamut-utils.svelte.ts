import type { Oklch } from 'culori';
import { toRGB, LCH_to_P3, LCH_to_r2020 } from './color-utils.svelte';

export function isLCH_within_sRGB(color: Oklch): boolean {
	const rgb = toRGB(color);
	if (!rgb) return false;

	const ε = 0.000005;
	return ['r', 'g', 'b'].every((channel) => {
		const value = rgb[channel as 'r' | 'g' | 'b'];
		return typeof value === 'number' && value >= 0 - ε && value <= 1 + ε;
	});
}

export function isLCH_within_P3(l: number, c: number, h: number) {
	const rgb = LCH_to_P3([+l, +c, +h]);
	const ε = 0.000005;
	return rgb.reduce((a, b) => a && b >= 0 - ε && b <= 1 + ε, true);
}

export function isLCH_within_r2020(l: number, c: number, h: number) {
	const rgb = LCH_to_r2020([+l, +c, +h]);
	const ε = 0.000005;
	return rgb.reduce((a, b) => a && b >= 0 - ε && b <= 1 + ε, true);
}

export function forceIntoGamut(
	l: number,
	c: number,
	h: number,
	isWithinGamut: (l: number, c: number, h: number) => boolean
): [number, number, number] {
	if (isWithinGamut(l, c, h)) {
		return [l, c, h];
	}

	const originalColor = {
		mode: 'oklch' as const,
		l: l / 100,
		c: c,
		h: h
	};

	// Initial binary search for chroma
	let hiC = c;
	let loC = 0;
	const ε = 0.0001;
	let newC = c / 2;
	let attempts = 0;
	const maxAttempts = 50;

	while (hiC - loC > ε && attempts < maxAttempts) {
		if (isWithinGamut(l, newC, h)) {
			loC = newC;
		} else {
			hiC = newC;
		}
		newC = (hiC + loC) / 2;
		attempts++;
	}

	// If we found a solution with just chroma adjustment, check if lightness adjustment might give better results
	const chromaOnlyColor = {
		mode: 'oklch' as const,
		l: l / 100,
		c: newC,
		h: h
	};

	// Try adjusting lightness in both directions
	const lightnessSteps = 5;
	const lightnessRange = 10; // ±10%
	let bestColor = chromaOnlyColor;
	let bestDistance = getColorDistance(originalColor, chromaOnlyColor);

	for (let i = 1; i <= lightnessSteps; i++) {
		const lightnessChange = (lightnessRange * i) / lightnessSteps;

		// Try increasing lightness
		if (l + lightnessChange <= 100) {
			const higherL = l + lightnessChange;
			[, newC] = force_into_gamut(higherL, c, h, isWithinGamut);
			const lighterColor = {
				mode: 'oklch' as const,
				l: higherL / 100,
				c: newC,
				h: h
			};
			const lighterDistance = getColorDistance(originalColor, lighterColor);
			if (lighterDistance < bestDistance) {
				bestDistance = lighterDistance;
				bestColor = lighterColor;
			}
		}

		// Try decreasing lightness
		if (l - lightnessChange >= 0) {
			const lowerL = l - lightnessChange;
			[, newC] = force_into_gamut(lowerL, c, h, isWithinGamut);
			const darkerColor = {
				mode: 'oklch' as const,
				l: lowerL / 100,
				c: newC,
				h: h
			};
			const darkerDistance = getColorDistance(originalColor, darkerColor);
			if (darkerDistance < bestDistance) {
				bestDistance = darkerDistance;
				bestColor = darkerColor;
			}
		}
	}

	return [Math.round(bestColor.l * 100), Math.round(bestColor.c), bestColor.h];
}

export function force_into_gamut(
	l: number,
	c: number,
	h: number,
	isLCH_within: (l: number, c: number, h: number) => boolean
) {
	if (isLCH_within(l, c, h)) {
		return [l, c, h];
	}

	let hiC = c;
	let loC = 0;
	const ε = 0.0001;
	let adjustedC = c / 2;

	while (hiC - loC > ε) {
		if (isLCH_within(l, adjustedC, h)) {
			loC = adjustedC;
		} else {
			hiC = adjustedC;
		}
		adjustedC = (hiC + loC) / 2;
	}

	return [l, adjustedC, h];
}

function getColorDistance(
	color1: { l: number; c: number; h?: number },
	color2: { l: number; c: number; h?: number }
): number {
	const dL = color1.l - color2.l;
	const dC = color1.c - color2.c;
	const dH = (color1.h ?? 0) - (color2.h ?? 0);

	// Weight factors (can be adjusted)
	const kL = 1.0;
	const kC = 1.0;
	const kH = 1.0;

	return Math.sqrt(dL * dL * kL + dC * dC * kC + dH * dH * kH);
}
