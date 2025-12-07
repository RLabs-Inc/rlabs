<script lang="ts">
  import { getControlsState } from '$lib/state/ghostty/controls.svelte';
  import { SliderPicker } from '$lib/components/ui/slider-picker';
  import { Label } from '$lib/components/ui/label';
  import { Button } from '$lib/components/ui/button';
  import { ColorSchemes } from '$lib/types/sacred-geometry-schemes';
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup
  } from '$lib/components/ui/select';
  import { Switch } from '../ui/switch';
  import { Checkbox } from '../ui/checkbox';
  import DownloadButton from './DownloadButton.svelte';
  import { Lit } from 'litlyx-js';

  const controlsState = getControlsState();

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
        Lit.event('Ghostty Base hue slider changed');
      }}
      min={0}
      max={360}
      step={0.01}
      type="multiple"
      bgColor={baseHueGradient}
      data-umami-event="Ghostty Base hue slider changed"
    />
  </div>
  <div class="flex w-full flex-wrap items-center justify-center gap-5 lg:flex-nowrap">
    <div class="flex w-full flex-col gap-2">
      <Label>Color Scheme</Label>
      <Select
        value={controlsState().scheme}
        onValueChange={(value) => {
          controlsState().setScheme(value as ColorSchemes);
          controlsState().generate();
          Lit.event(`Ghostty Color scheme changed ${value}`);
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
                data-umami-event={`Ghostty Color scheme changed ${scheme}`}
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
          Lit.event('Ghostty Dark theme toggle');
        }}
        data-umami-event="Ghostty Dark theme toggle"
      />
    </div>

    <div class="flex w-full flex-col gap-2">
      <Label>Uniform lightness?</Label>
      <Checkbox
        checked={controlsState().uniform}
        onCheckedChange={(checked) => {
          controlsState().setUniform(checked);
          controlsState().generate();
          Lit.event('Ghostty Use uniform lightness toggle');
        }}
        data-umami-event="Ghostty Use uniform lightness toggle"
      />
    </div>
    <div class="flex w-full flex-nowrap items-center gap-2">
      <Button
        class="w-full"
        onclick={() => {
          controlsState().generate();
          Lit.event('Ghostty Generate button clicked');
        }}
        data-umami-event="Ghostty Generate button clicked">Generate</Button
      >
      <Button
        class="w-full"
        onclick={() => {
          controlsState().randomize();
          Lit.event('Ghostty Randomize button clicked');
        }}
        data-umami-event="Ghostty Randomize button clicked">Randomize</Button
      >
      <div class="border-foreground rounded-md border">
        <DownloadButton />
      </div>
    </div>
  </div>
</section>
