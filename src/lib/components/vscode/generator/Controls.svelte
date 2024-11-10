<script lang="ts">
  import { ColorSchemes } from '$lib/types/color';
  import ColorPicker from './ColorPicker.svelte';
  import Label from '$lib/components/ui/label/label.svelte';
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup
  } from '$lib/components/ui/select';
  import { Switch } from '$lib/components/ui/switch';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
  } from '$lib/components/ui/accordion';
  import { Button } from '$lib/components/ui/button';
  import { Slider } from '$lib/components/ui/slider';

  import { getControls } from '$lib/state/vscode/controls.svelte';
  import LoadSaveTheme from './LoadSaveTheme.svelte';
  import type { Theme } from '$lib/types/theme';

  const { userId, themes }: { userId: string | null; themes: Theme[] } = $props();
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

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'R' || event.key === 'r') {
      controls().randomize();
    } else if (event.key === 'G' || event.key === 'g') {
      controls().generate();
    }
  }
</script>

<svelte:window onkeydown={handleKeyDown} />
<section class="flex w-full flex-col gap-5 md:flex-row md:items-center lg:w-[260px] lg:flex-col">
  <div class="flex w-full flex-col gap-5">
    <span class="text-center text-xs text-foreground"
      ><span class="font-bold">Be careful</span>, it is almost
      <span class="underline">impossible</span> to generate the same set of colors twice, if you
      liked it, <span class="font-bold">save it</span> before generating a new one.</span
    >
    <div class="flex items-center justify-between gap-5">
      <Label>Dark theme?</Label>
      <Switch checked={controls().isDark} onCheckedChange={controls().setIsDark} />
    </div>

    <div class="flex flex-col items-center gap-1">
      <div class="flex w-full items-center gap-4">
        <Button class="w-full text-wrap text-xs" size="sm" onclick={controls().randomize}
          >Randomize a new {controls().isDark ? 'dark' : 'light'} theme</Button
        >
        <div class="flex max-w-[50px] items-center justify-center gap-1">
          <Label class="text-wrap text-xs">Fewer colors?</Label>
          <Checkbox
            checked={controls().fewerRandomColors}
            onCheckedChange={(checked) => {
              controls().setFewerRandomColors(checked as boolean);
            }}
          />
        </div>
      </div>
      <span class="text-xs text-foreground">or</span>
      <span class="text-center text-xs text-foreground"
        >select a color scheme, set the base hue press the "Generate colors" button.</span
      >
    </div>
    <Select value={controls().scheme} onValueChange={controls().setScheme} type="single">
      <SelectTrigger>
        {controls().scheme || 'Select a scheme'}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {#each Object.values(ColorSchemes) as scheme}
            <SelectItem value={scheme as string}>{scheme}</SelectItem>
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
    <Accordion type="single">
      <AccordionItem value="ui">
        <AccordionTrigger class="text-xs"
          >Select the saturation for the next set of generated UI, Syntax and/or Ansi colors</AccordionTrigger
        >
        <AccordionContent>
          <div class="flex flex-col gap-2">
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
              <Label>Ansi saturation</Label>
              <Slider
                value={controls().ansiSaturation}
                onValueChange={controls().setAnsiSaturation}
                min={0}
                max={100}
                bgColor={saturationGradient}
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <div class="flex w-full items-center gap-4">
      <Button class="w-full text-wrap text-xs" size="sm" onclick={controls().generate}>
        Generate colors
      </Button>
      <div class="flex max-w-[50px] items-center justify-center gap-1">
        <Label class="text-wrap text-xs">Fewer colors?</Label>
        <Checkbox
          checked={controls().fewerGeneratedColors}
          onCheckedChange={(checked) => {
            controls().setFewerGeneratedColors(checked as boolean);
          }}
        />
      </div>
    </div>

    <LoadSaveTheme {userId} themes={themes || []} />

    <span class="text-xs text-foreground md:text-right">Select any color to change it.</span>
  </div>
  <div class="">
    <ColorPicker />
  </div>
</section>
