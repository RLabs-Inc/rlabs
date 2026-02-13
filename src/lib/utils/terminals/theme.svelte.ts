import { randomInteger } from '$lib/utils/common/math';
import { ensureReadability } from '$lib/utils/terminals/colorUtils.svelte';

import type {
    CssVariables,
    ThemeGenerationOptions,
    UiColors,
    Colors,
    WarpExtras,
    GhosttyExtras,
    WezTermExtras
} from '$lib/types/terminals/colors';
import { generateSchemeHues } from '../common/color-schemes/patterns';
import { clampChroma, formatHex, random } from 'culori';
import { toOKLCH } from '$lib/components/vscode/color-picker/color-utils.svelte';
import { blendWithAlpha } from '$lib/utils/terminals/colorUtils.svelte';

export const randomizeColor = (hue: number[], lightness: number[], chroma: number[]) => {
    const newColor = random('oklch', {
        l: lightness.length > 1 ? [lightness[0] / 100, lightness[1] / 100] : lightness[0] / 100,
        c: chroma.length > 1 ? [chroma[0] / 100, chroma[1] / 100] : chroma[0] / 100,
        h: hue.length > 1 ? [hue[0], hue[1]] : hue[0]
    });
    return formatHex(clampChroma(newColor, 'oklch'));
};

export function generateTheme(options: ThemeGenerationOptions): CssVariables {
    const { isDark, baseHue, scheme } = options;

    const schemeHues = generateSchemeHues(baseHue, scheme);

    const lockedColors = options.lockedColors || {};

    const usedHues = new Set<number>();

    const getUniqueRandomHue = () => {
        // If all hues have been used, reset the set
        if (usedHues.size >= schemeHues.length) {
            usedHues.clear();
        }

        // Get available hues (ones that haven't been used)
        const availableHues = schemeHues.filter((hue) => !usedHues.has(hue));

        // Get a random hue from the available ones
        const randomIndex = randomInteger(0, availableHues.length - 1);
        const selectedHue = availableHues[randomIndex];

        // Mark this hue as used
        usedHues.add(selectedHue);

        return selectedHue;
    };

    const colorHues = {
        black: [getUniqueRandomHue()],
        red: [getUniqueRandomHue()],
        green: [getUniqueRandomHue()],
        yellow: [getUniqueRandomHue()],
        blue: [getUniqueRandomHue()],
        magenta: [getUniqueRandomHue()],
        cyan: [getUniqueRandomHue()],
        white: [getUniqueRandomHue()]
    };

    const uiColorHues = {
        background: [getUniqueRandomHue()],
        foreground: [getUniqueRandomHue()],
        cursor: [schemeHues[0]]
    };

    const uiColors: UiColors = {
        background:
            lockedColors?.background ||
            randomizeColor(uiColorHues.background, isDark ? [0, 35] : [89, 100], [0, 40]),
        foreground:
            lockedColors?.foreground ||
            randomizeColor(uiColorHues.foreground, isDark ? [90, 100] : [0, 25], [0, 40]),
        cursor: lockedColors?.cursor || randomizeColor(uiColorHues.cursor, [0, 100], [0, 40])
    };

    uiColors.cursor = ensureReadability(uiColors.cursor, uiColors.background, 5.5);

    uiColors.foreground = ensureReadability(uiColors.foreground, uiColors.background, 7.5);

    const normalLightness = [0, 90];
    const normalChroma = [0, 40];

    function brightenColor(color: string): string {
        return formatHex(
            clampChroma(
                {
                    mode: 'oklch',
                    l: Math.min(1, toOKLCH(color)!.l + 0.1),
                    c: toOKLCH(color)!.c,
                    h: toOKLCH(color)!.h
                },
                'oklch'
            )
        );
    }

    const normal: Colors = {
        black: lockedColors?.black || randomizeColor(colorHues.black, normalLightness, normalChroma),
        red: lockedColors?.red || randomizeColor(colorHues.red, normalLightness, normalChroma),
        green: lockedColors?.green || randomizeColor(colorHues.green, normalLightness, normalChroma),
        yellow: lockedColors?.yellow || randomizeColor(colorHues.yellow, normalLightness, normalChroma),
        blue: lockedColors?.blue || randomizeColor(colorHues.blue, normalLightness, normalChroma),
        magenta:
            lockedColors?.magenta || randomizeColor(colorHues.magenta, normalLightness, normalChroma),
        cyan: lockedColors?.cyan || randomizeColor(colorHues.cyan, normalLightness, normalChroma),
        white: lockedColors?.white || randomizeColor(colorHues.white, normalLightness, normalChroma)
    };

    Object.keys(normal).forEach((key) => {
        if (!Object.keys(lockedColors).includes(key) && key !== 'background') {
            normal[key as keyof Colors] = ensureReadability(
                normal[key as keyof Colors],
                uiColors.background,
                4.5
            );
        }
    });

    // Generate bright colors
    const bright: Colors = {
        black: lockedColors?.black || brightenColor(normal.black),
        red: lockedColors?.red || brightenColor(normal.red),
        green: lockedColors?.green || brightenColor(normal.green),
        yellow: lockedColors?.yellow || brightenColor(normal.yellow),
        blue: lockedColors?.blue || brightenColor(normal.blue),
        magenta: lockedColors?.magenta || brightenColor(normal.magenta),
        cyan: lockedColors?.cyan || brightenColor(normal.cyan),
        white: lockedColors?.white || brightenColor(normal.white)
    };

    const cssVariables: CssVariables = {
        uiColors,
        brightColors: bright,
        normalColors: normal
    };

    return cssVariables;
}

/**
 * Derive Warp-specific extra colors from the shared UI colors.
 */
export function deriveWarpExtras(uiColors: UiColors, isDark: boolean): WarpExtras {
    const accent = ensureReadability(uiColors.cursor, uiColors.background, 2.5);
    return { accent };
}

/**
 * Derive Ghostty-specific extra colors from the shared UI colors.
 */
export function deriveGhosttyExtras(uiColors: UiColors): GhosttyExtras {
    const selectionBackground = blendWithAlpha(uiColors.foreground, uiColors.background, 0.4);
    const selectionForeground = ensureReadability(uiColors.foreground, selectionBackground, 5.5);
    return { selectionBackground, selectionForeground };
}

/**
 * Derive WezTerm-specific extra colors from the shared UI colors.
 * selection_bg uses transparency blending for readability.
 */
export function deriveWezTermExtras(uiColors: UiColors): WezTermExtras {
    const cursor_fg = uiColors.background;
    const cursor_border = uiColors.cursor;
    const selection_bg = blendWithAlpha(uiColors.foreground, uiColors.background, 0.4);
    const selection_fg = ensureReadability(uiColors.background, selection_bg, 5.5);
    return { cursor_fg, cursor_border, selection_bg, selection_fg };
}
