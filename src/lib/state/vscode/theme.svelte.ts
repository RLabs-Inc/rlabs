import type { Theme } from '$lib/types/theme';

let theme = $state<Theme | null>(null);

export function getSelectedTheme() {
  function set(value: Theme) {
    theme = value;
  }

  return {
    get theme() {
      return theme;
    },
    set
  };
}
