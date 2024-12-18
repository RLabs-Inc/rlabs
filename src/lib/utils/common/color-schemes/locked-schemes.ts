import { toOKLCH } from '$lib/components/vscode/color-picker/color-utils.svelte';
import { generateSchemeHues } from './index.svelte';
import type { ColorSchemes } from '$lib/types/color';

interface SchemeHueOptions {
  baseHue: number;
  scheme: ColorSchemes;
  uiLockedColors?: Record<string, string>;
  syntaxLockedColors?: Record<string, string>;
}

export function generateSchemeHuesWithLocks({
  baseHue,
  scheme,
  uiLockedColors = {},
  syntaxLockedColors = {}
}: SchemeHueOptions): number[] {
  // Combine all locked colors
  const allLockedColors = { ...uiLockedColors, ...syntaxLockedColors };

  if (!Object.keys(allLockedColors).length) {
    return generateSchemeHues(baseHue, scheme);
  }

  // Extract hues from all locked colors
  const lockedHues = Object.values(allLockedColors)
    .map((color) => toOKLCH(color)?.h || 0)
    .filter((h) => h !== undefined);

  // Generate scheme hues for each locked color
  const schemesByLockedColor = lockedHues.map((hue) => generateSchemeHues(hue, scheme));

  const selectedHueSchemeHues = generateSchemeHues(baseHue, scheme);

  schemesByLockedColor.push(selectedHueSchemeHues);

  // Find hues that appear in multiple schemes
  const threshold = 15; // degrees
  const hueFrequency = new Map<number, number>();

  schemesByLockedColor.flat().forEach((hue) => {
    const existingHue = Array.from(hueFrequency.keys()).find(
      (existing) => Math.abs((existing - hue + 360) % 360) <= threshold
    );

    if (existingHue !== undefined) {
      hueFrequency.set(existingHue, (hueFrequency.get(existingHue) || 0) + 1);
    } else {
      hueFrequency.set(hue, 1);
    }
  });

  // Sort hues by frequency and distance to locked colors
  const sortedHues = Array.from(hueFrequency.entries()).sort((a, b) => {
    const freqDiff = b[1] - a[1];
    if (freqDiff !== 0) return freqDiff;

    const aMinDist = Math.min(...lockedHues.map((locked) => Math.abs((a[0] - locked + 360) % 360)));
    const bMinDist = Math.min(...lockedHues.map((locked) => Math.abs((b[0] - locked + 360) % 360)));
    return aMinDist - bMinDist;
  });

  // Take the top N hues where N is the original scheme size
  const originalSchemeSize = selectedHueSchemeHues.length;
  const selectedHues = sortedHues.slice(0, originalSchemeSize).map(([hue]) => hue);

  // Always include the locked hues in the final scheme
  // const finalScheme = [...new Set([...lockedHues, ...selectedHues])]
  //   .slice(0, originalSchemeSize);

  return selectedHues;
}
