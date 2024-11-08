<script lang="ts">
  import { ColorSchemes } from '$lib/types/color';
  import Label from '$lib/components/ui/label/label.svelte';
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup
  } from '$lib/components/ui/select';
  import { Switch } from '$lib/components/ui/switch';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Slider } from '$lib/components/ui/slider';

  import { getControls } from '$lib/state/vscode/controls.svelte';

  const controls = getControls();

  const getSaturationGradient = (hue: number) => `
  linear-gradient(to right,
    hsl(${hue}, 0%, 50%),
    hsl(${hue}, 100%, 50%)
  )
`;

  const saturationGradient = $derived(getSaturationGradient(controls().baseHue[0] || 0));

  const baseHueGradient = `linear-gradient(to right,
      hsl(0, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(240, 100%, 50%),
      hsl(300, 100%, 50%),
      hsl(360, 100%, 50%)
    )`;
</script>

<section class="flex w-full min-w-[200px] flex-col gap-5">
  <div class="flex items-center gap-5">
    <Label>Dark theme?</Label>
    <Switch checked={controls().isDark} onCheckedChange={controls().setIsDark} />
  </div>
  <Select value={controls().scheme} onValueChange={controls().setScheme} type="single">
    <SelectTrigger>
      {controls().scheme || 'Select a scheme'}
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {#each Object.values(ColorSchemes) as scheme}
          {#if isNaN(Number(scheme))}
            <SelectItem value={scheme as string}>{scheme}</SelectItem>
          {/if}
        {/each}
      </SelectGroup>
    </SelectContent>
  </Select>
  <div class="flex flex-col gap-1">
    <Label>Base hue</Label>
    <Slider
      value={controls().baseHue}
      onValueChange={controls().setBaseHue}
      min={0}
      max={360}
      bgColor={baseHueGradient}
    />
  </div>
  <div class="flex flex-col gap-1">
    <Label>UI saturation</Label>
    <Slider
      value={controls().uiSaturation}
      onValueChange={controls().setUiSaturation}
      min={0}
      max={100}
      bgColor={saturationGradient}
    />
  </div>
  <div class="flex flex-col gap-1">
    <Label>Syntax saturation</Label>
    <Slider
      value={controls().syntaxSaturation}
      onValueChange={controls().setSyntaxSaturation}
      min={0}
      max={100}
      bgColor={saturationGradient}
    />
  </div>
  <div class="flex flex-col gap-1">
    <Label>ANSI saturation</Label>
    <Slider
      value={controls().ansiSaturation}
      onValueChange={controls().setAnsiSaturation}
      min={0}
      max={100}
      bgColor={saturationGradient}
    />
  </div>
  <Button onclick={controls().generate}>Generate Colors</Button>
  <Button onclick={controls().randomize}>Randomize All</Button>
</section>
