<script lang="ts">
  import { ControlsState } from '$lib/state/warp/control.svelte';
  import { ThemeState } from '$lib/state/warp/theme.svelte';
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
  import DownloadButton from './DownloadButton.svelte';

  const controlsState = new ControlsState();
  const { controls } = controlsState;
  const themeState = new ThemeState();

  const baseHueGradient = `linear-gradient(
    to right in oklch longer hue,
    oklch(70% .3 0) 100% 0%
  )`;
</script>

<section class="flex w-full flex-col gap-5">
  <div class="flex w-full flex-col gap-2">
    <Label>Base hue</Label>
    <SliderPicker
      bind:value={controls.baseHue}
      onValueCommit={() => controlsState.generate()}
      min={0}
      max={360}
      bgColor={baseHueGradient}
      data-umami-event="Base hue slider changed"
    />
  </div>
  <div class="flex w-full flex-wrap items-center justify-center gap-5 lg:flex-nowrap">
    <div class="flex w-full flex-col gap-2">
      <Label>Color Scheme</Label>
      <Select bind:value={controls.scheme} type="single">
        <SelectTrigger class="max-w-lg">
          {controls.scheme || 'Select a scheme'}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {#each Object.values(ColorSchemes) as scheme}
              <SelectItem value={scheme as string}>{scheme}</SelectItem>
            {/each}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="flex w-full flex-col gap-2">
      <Label>Dark theme?</Label>
      <Switch bind:checked={controls.isDark} onCheckedChange={() => controlsState.generate()} />
    </div>
    <div class="flex w-full flex-nowrap items-center gap-2">
      <Button class="w-full" onclick={() => controlsState.generate()}>Generate</Button>
      <Button class="w-full" onclick={() => controlsState.randomize()}>Randomize</Button>
      <div class="border-foreground rounded-md border">
        <DownloadButton />
      </div>
    </div>
  </div>
</section>
