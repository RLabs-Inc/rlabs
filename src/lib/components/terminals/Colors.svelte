<script lang="ts">
  import { getThemeState } from '$lib/state/terminals/colors.svelte';
  import { Button } from '../ui/button';
  import ColorPickerPopover from './ColorPickerPopover.svelte';
  import ColorSwatch from './ColorSwatch.svelte';
  const themeState = getThemeState();
  themeState().setSelectedColor(null);
  let isEditing = $state(false);
  const setIsEditing = (open: boolean) => {
    isEditing = open;
  };

  // Labels for terminal-specific extras
  const terminalExtrasLabels: Record<string, Record<string, string>> = {
    warp: {
      accent: 'Accent'
    },
    ghostty: {
      selectionBackground: 'Selection BG',
      selectionForeground: 'Selection FG'
    },
    wezterm: {
      cursor_fg: 'Cursor FG',
      cursor_border: 'Cursor Border',
      selection_bg: 'Selection BG',
      selection_fg: 'Selection FG'
    }
  };

  const currentExtras = $derived.by(() => {
    const target = themeState().terminalTarget;
    switch (target) {
      case 'warp':
        return themeState().warpExtras;
      case 'ghostty':
        return themeState().ghosttyExtras;
      case 'wezterm':
        return themeState().wezTermExtras;
      default:
        return {};
    }
  });

  const currentExtrasLabels = $derived(terminalExtrasLabels[themeState().terminalTarget] || {});
</script>

{#if !themeState().selectedColor}
  <section class="flex flex-col gap-2 md:flex-row md:items-start">
    <section class="grid grid-cols-2 gap-2">
      {#each Object.entries(themeState().uiColors) as [name, color]}
        <span>{name}</span>
        <ColorSwatch {color} {name} type="ui" />
      {/each}
    </section>

    <section class="grid grid-cols-2 gap-2">
      {#each Object.entries(themeState().normalColors) as [name, color], index}
        <span>Color {index + 1}</span>
        <ColorSwatch {color} {name} type="normal" />
      {/each}
    </section>

    <section class="grid grid-cols-2 gap-2">
      {#each Object.entries(themeState().brightColors) as [name, color], index}
        <span>Bright {index + 1}</span>
        <ColorSwatch {color} {name} type="bright" />
      {/each}
    </section>
  </section>

  <!-- Terminal-specific extras (read-only, auto-derived) -->
  {#if Object.keys(currentExtras).length > 0}
    <section class="mt-4">
      <h4 class="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
        {themeState().terminalTarget} extras (auto-derived)
      </h4>
      <div class="grid grid-cols-2 gap-2">
        {#each Object.entries(currentExtras) as [name, color]}
          <span class="text-muted-foreground text-sm">{currentExtrasLabels[name] || name}</span>
          <div
            class="h-8 w-12 rounded-md drop-shadow-md"
            style={`background-color: ${color};`}
          ></div>
        {/each}
      </div>
    </section>
  {/if}
{:else}
  <div class="border-border flex flex-col items-end justify-end rounded-md border p-2">
    <Button onclick={() => themeState().setSelectedColor(null)}>X</Button>
    <ColorPickerPopover />
  </div>
{/if}
