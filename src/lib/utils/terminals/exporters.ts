import type {
    ThemeInfo,
    UiColors,
    Colors,
    TerminalColors,
    WarpExtras,
    GhosttyExtras,
    WezTermExtras
} from '$lib/types/terminals/colors';

/**
 * Export theme in Warp YAML format.
 */
export function exportWarpYaml(
    themeInfo: ThemeInfo,
    uiColors: UiColors,
    warpExtras: WarpExtras,
    terminalColors: TerminalColors
): string {
    return `name: '${themeInfo.name}'
accent: '${warpExtras.accent}'
cursor: '${uiColors.cursor}'
background: '${uiColors.background}'
foreground: '${uiColors.foreground}'
details: '${themeInfo.details}'
terminal_colors: 
    bright:
        black: '${terminalColors.bright.black}'
        blue: '${terminalColors.bright.blue}'
        cyan: '${terminalColors.bright.cyan}'
        green: '${terminalColors.bright.green}'
        magenta: '${terminalColors.bright.magenta}'
        red: '${terminalColors.bright.red}'
        white: '${terminalColors.bright.white}'
        yellow: '${terminalColors.bright.yellow}'
    normal:
        black: '${terminalColors.normal.black}'
        blue: '${terminalColors.normal.blue}'
        cyan: '${terminalColors.normal.cyan}'
        green: '${terminalColors.normal.green}'
        magenta: '${terminalColors.normal.magenta}'
        red: '${terminalColors.normal.red}'
        white: '${terminalColors.normal.white}'
        yellow: '${terminalColors.normal.yellow}'
`;
}

/**
 * Export theme in Ghostty key=value config format.
 */
export function exportGhosttyConfig(
    uiColors: UiColors,
    ghosttyExtras: GhosttyExtras,
    terminalColors: TerminalColors
): string {
    return `palette = 0=${terminalColors.normal.black}
palette = 1=${terminalColors.normal.red}
palette = 2=${terminalColors.normal.green}
palette = 3=${terminalColors.normal.yellow}
palette = 4=${terminalColors.normal.blue}
palette = 5=${terminalColors.normal.magenta}
palette = 6=${terminalColors.normal.cyan}
palette = 7=${terminalColors.normal.white}
palette = 8=${terminalColors.bright.black}
palette = 9=${terminalColors.bright.red}
palette = 10=${terminalColors.bright.green}
palette = 11=${terminalColors.bright.yellow}
palette = 12=${terminalColors.bright.blue}
palette = 13=${terminalColors.bright.magenta}
palette = 14=${terminalColors.bright.cyan}
palette = 15=${terminalColors.bright.white}
background = ${uiColors.background}
foreground = ${uiColors.foreground}
cursor-color = ${uiColors.cursor}
selection-background = ${ghosttyExtras.selectionBackground}
selection-foreground = ${ghosttyExtras.selectionForeground}
`;
}

/**
 * Export theme in WezTerm TOML format.
 */
export function exportWezTermToml(
    themeInfo: ThemeInfo,
    uiColors: UiColors,
    wezTermExtras: WezTermExtras,
    terminalColors: TerminalColors
): string {
    return `[colors]
ansi = [
    "${terminalColors.normal.black}",
    "${terminalColors.normal.red}",
    "${terminalColors.normal.green}",
    "${terminalColors.normal.yellow}",
    "${terminalColors.normal.blue}",
    "${terminalColors.normal.magenta}",
    "${terminalColors.normal.cyan}",
    "${terminalColors.normal.white}",
]
background = "${uiColors.background}"
brights = [
    "${terminalColors.bright.black}",
    "${terminalColors.bright.red}",
    "${terminalColors.bright.green}",
    "${terminalColors.bright.yellow}",
    "${terminalColors.bright.blue}",
    "${terminalColors.bright.magenta}",
    "${terminalColors.bright.cyan}",
    "${terminalColors.bright.white}",
]
cursor_bg = "${uiColors.cursor}"
cursor_border = "${wezTermExtras.cursor_border}"
cursor_fg = "${wezTermExtras.cursor_fg}"
foreground = "${uiColors.foreground}"
selection_bg = "${wezTermExtras.selection_bg}"
selection_fg = "${wezTermExtras.selection_fg}"

[metadata]
name = "${themeInfo.name}"
`;
}
