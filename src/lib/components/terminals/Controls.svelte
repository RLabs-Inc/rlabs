<script lang="ts">
  import { getControlsState } from '$lib/state/terminals/controls.svelte';
  import { getThemeState } from '$lib/state/terminals/colors.svelte';
  import { SliderPicker } from '$lib/components/ui/slider-picker';
  import { Label } from '$lib/components/ui/label';
  import { Button } from '$lib/components/ui/button';
  import { ColorSchemes } from '$lib/types/sacred-geometry-schemes';
  import type { TerminalTarget } from '$lib/types/terminals/colors';
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup
  } from '$lib/components/ui/select';
  import { Switch } from '../ui/switch';
  import DownloadButton from './DownloadButton.svelte';
  import { Lit } from 'litlyx-js';

  const controlsState = getControlsState();
  const themeState = getThemeState();

  const terminalOptions: { value: TerminalTarget; label: string }[] = [
    { value: 'warp', label: 'Warp' },
    { value: 'ghostty', label: 'Ghostty' },
    { value: 'wezterm', label: 'WezTerm' }
  ];

  const baseHueGradient = `linear-gradient(
                            to right in oklch longer hue,
                            oklch(70% .3 0) 0%,
                            oklch(70% .3 360) 100%
                          )`;
</script>

<section class="flex w-full flex-col gap-5">
  <div class="flex w-full flex-col gap-2">
    <Label>Base hue</Label>
    <SliderPicker
      value={controlsState().baseHue}
      onValueChange={controlsState().setBaseHue}
      onValueCommit={() => {
        controlsState().generate();
        Lit.event('Terminals Base hue slider changed');
      }}
      min={0}
      max={360}
      step={0.01}
      type="multiple"
      bgColor={baseHueGradient}
      data-umami-event="Terminals Base hue slider changed"
    />
  </div>
  <div class="flex w-full flex-wrap items-center justify-center gap-5 lg:flex-nowrap">
    <div class="flex w-full flex-col gap-2">
      <Label>Terminal</Label>
      <Select
        value={themeState().terminalTarget}
        onValueChange={(value) => {
          themeState().setTerminalTarget(value as TerminalTarget);
          Lit.event(`Terminal target changed ${value}`);
        }}
        type="single"
      >
        <SelectTrigger class="max-w-lg">
          {terminalOptions.find((t) => t.value === themeState().terminalTarget)?.label ||
            'Select terminal'}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {#each terminalOptions as option}
              <SelectItem
                data-umami-event={`Terminal target changed ${option.value}`}
                value={option.value}>{option.label}</SelectItem
              >
            {/each}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="flex w-full flex-col gap-2">
      <Label>Color Scheme</Label>
      <Select
        value={controlsState().scheme}
        onValueChange={(value) => {
          controlsState().setScheme(value as ColorSchemes);
          controlsState().generate();
          Lit.event(`Terminals Color scheme changed ${value}`);
        }}
        type="single"
      >
        <SelectTrigger class="max-w-lg">
          {controlsState().scheme || 'Select a scheme'}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {#each Object.values(ColorSchemes) as scheme}
              <SelectItem
                data-umami-event={`Terminals Color scheme changed ${scheme}`}
                value={scheme as string}>{scheme}</SelectItem
              >
            {/each}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="flex w-full flex-col gap-2">
      <Label>Dark theme?</Label>
      <Switch
        checked={controlsState().isDark}
        onCheckedChange={(checked) => {
          controlsState().setIsDark(checked);
          controlsState().generate();
          Lit.event('Terminals Dark theme toggle');
        }}
        data-umami-event="Terminals Dark theme toggle"
      />
    </div>
    <div class="flex w-full flex-nowrap items-center gap-2">
      <Button
        class="w-full"
        onclick={() => {
          controlsState().generate();
          Lit.event('Terminals Generate button clicked');
        }}
        data-umami-event="Terminals Generate button clicked">Generate</Button
      >
      <Button
        class="w-full"
        onclick={() => {
          controlsState().randomize();
          Lit.event('Terminals Randomize button clicked');
        }}
        data-umami-event="Terminals Randomize button clicked">Randomize</Button
      >
      <div class="border-foreground rounded-md border">
        <DownloadButton />
      </div>
    </div>
  </div>
</section>
