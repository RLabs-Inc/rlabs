import type { ColorSchemes } from '../sacred-geometry-schemes';

export type TerminalTarget = 'warp' | 'ghostty' | 'wezterm';

export type ThemeInfo = {
	name: string;
	details: 'darker' | 'lighter';
};

export type UiColors = {
	background: string;
	foreground: string;
	cursor: string;
};

export type Colors = {
	black: string;
	blue: string;
	cyan: string;
	green: string;
	magenta: string;
	red: string;
	white: string;
	yellow: string;
};

export type TerminalColors = {
	bright: Colors;
	normal: Colors;
};

export type CssVariables = {
	uiColors: UiColors;
	brightColors: Colors;
	normalColors: Colors;
};

// Terminal-specific extra colors
export type WarpExtras = {
	accent: string;
};

export type GhosttyExtras = {
	selectionBackground: string;
	selectionForeground: string;
};

export type WezTermExtras = {
	cursor_fg: string;
	cursor_border: string;
	selection_bg: string;
	selection_fg: string;
};

export type ThemeGenerationOptions = {
	isDark: boolean;
	baseHue: number;
	scheme: ColorSchemes;
	lockedColors?: Record<string, string>;
};

export type ControlsStateType = {
	isDark: boolean;
	baseHue: number[];
	scheme: ColorSchemes;
	lockedColors: Record<string, string>;
};

export type LockedColors = {
	[key: string]: string;
};

export type SelectedColor = {
	type: 'ui' | 'normal' | 'bright';
	name: string;
	color: string;
};

export type Oklch = {
	l: number;
	c: number;
	h: number;
};
