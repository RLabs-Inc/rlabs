<script lang="ts">
  import { getControls } from '$lib/state/vscode/controls.svelte';
  import { getSelectedColor } from '$lib/state/vscode/editor.svelte';
  import { getFont } from '$lib/state/vscode/editor.svelte';
  import { getMonacoEditor } from '$lib/components/vscode/monaco-editor/monaco.svelte';

  import { Label } from '$lib/components/ui/label';
  import { Button } from '$lib/components/ui/button';
  import { Switch } from '$lib/components/ui/switch';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup
  } from '$lib/components/ui/select';

  import ColorPicker from '$lib/components/vscode/generator/ColorPicker.svelte';
  import LoadSaveTheme from './LoadSaveTheme.svelte';

  import { ColorSchemes } from '$lib/types/color';
  import type { Theme } from '$lib/types/theme';
  import Export from './Export.svelte';
  import { SliderPicker } from '$lib/components/ui/slider-picker';
  import { Input } from '$lib/components/ui/input';

  const { userId, themes }: { userId: string | null; themes: Theme[] } = $props();
  const controls = getControls();
  const selectedColorState = getSelectedColor();
  const fontState = getFont();
  const monacoEditor = getMonacoEditor();
  const getSaturationGradient = (hue: number) => `
  linear-gradient(to right,
    okhsl(70% 0 ${hue}),
    okhsl(70% 100 ${hue})
  )
`;

  const saturationGradient = $derived(getSaturationGradient(controls().baseHue[0] || 0));

  const baseHueGradient = `linear-gradient(
    to right in oklch longer hue,
    oklch(70% .3 0) 100% 0%
  )`;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'r') {
      controls().randomize();
    } else if (event.ctrlKey && event.key === 'g') {
      controls().generate();
    }
  }
</script>

<svelte:window onkeydown={handleKeyDown} />
<section class="flex w-full flex-col gap-5 md:flex-row md:items-center lg:w-[300px] lg:flex-col">
  <div class="flex w-full flex-col gap-5">
    {#if selectedColorState().selectedColor}
      <div class="w-full">
        <ColorPicker />
      </div>
    {:else}
      <div
        class="border-border bg-background dark:border-primary-foreground dark:bg-background/40 flex items-center justify-between rounded-md border p-2 shadow-xs"
      >
        <Label>Editor font:</Label>
        <div class="flex items-center gap-2">
          <div class="w-24">
            <Select
              value={fontState().weight}
              onValueChange={(value) => {
                fontState().setWeight(value);
                monacoEditor?.changeFont(fontState().size, value);
              }}
              type="single"
            >
              <SelectTrigger>
                {fontState().weight === '300' ? 'Thin' : 'Normal'}
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem data-umami-event="FONTS THIN" value="300">Thin</SelectItem>
                  <SelectItem data-umami-event="FONTS NORMAL" value="400">Normal</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div class="w-16">
            <Input
              type="number"
              value={fontState().size}
              oninput={(e) => {
                fontState().setSize(Number((e.target as HTMLInputElement).value));
                monacoEditor?.changeFont(
                  Number((e.target as HTMLInputElement).value),
                  fontState().weight
                );
              }}
              data-umami-event="Font size"
            />
          </div>
        </div>
      </div>
      <div
        class="border-border bg-background dark:border-primary-foreground dark:bg-background/40 flex items-center justify-between rounded-md border p-2 shadow-xs"
      >
        <Label>Dark theme?</Label>
        <Switch
          checked={controls().isDark}
          data-umami-event="Dark theme?"
          onCheckedChange={controls().setIsDark}
        />
      </div>
      <span class="text-foreground text-center text-xs"
        ><span class="font-bold">Be careful</span>, it is almost
        <span class="underline">impossible</span> to generate the same set of colors twice, if you
        liked it, <span class="font-bold">save it</span> before generating a new one.</span
      >

      <div class="flex flex-col items-center gap-1">
        <div
          class="border-border bg-background dark:border-primary-foreground dark:bg-background/40 w-full rounded-md border px-2 py-1 shadow-xs"
        >
          <span class="text-sm font-black drop-shadow-xs"
            >Randomize a new {controls().isDark ? 'dark' : 'light'} theme</span
          >
          <div class="flex flex-col gap-2 py-2">
            <div class="flex w-full items-center gap-2">
              <Button
                class="w-full text-sm"
                size="sm"
                data-umami-event="Randomize Button Clicked"
                onclick={controls().randomize}
                >Randomize
              </Button>

              <span class="text-xs">or</span>
              <kbd
                class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
                >^</kbd
              >
              +
              <kbd
                class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
                >r</kbd
              >

              <!-- Each time the colors are generated, a certain number of base hues are generated according to the choosen color scheme. 
          This option allows to generate only one set of scheme hues using the selected base hue and scheme that is used as base to generate
          for all colors for the theme. Without this option, a set of scheme hues is generated from the base color, then after the UI colors 
          are generated two new sets of scheme hues are generated from both AC1 and AC2 colors and added to the initial scheme hues set. 
          This larger set of scheme hues is then used to generate the syntax colors. 
          -->
            </div>
            <div class="flex items-center gap-1 self-start">
              <Checkbox
                checked={controls().fewerRandomColors}
                onCheckedChange={(checked) => {
                  controls().setFewerRandomColors(checked as boolean);
                }}
                data-umami-event="Use fewer color variation Randomize"
              />
              <Label class="text-xs">Use fewer color variation?</Label>
            </div>
          </div>
        </div>
        <span class="text-muted-foreground text-xs">or</span>
        <div
          class="border-border bg-background dark:border-primary-foreground dark:bg-background/40 flex w-full flex-col gap-1 rounded-md border px-2 py-2 shadow-xs"
        >
          <p class="leading-none">
            <span class="text-sm font-black drop-shadow-xs"
              >Generate {controls().isDark ? 'dark' : 'light'} theme</span
            >
            <span class="text-muted-foreground text-xs"
              >by choosing a color scheme and selecting the base hue.</span
            >
          </p>
          <div class="flex flex-col gap-3 pt-2 pb-1">
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
              <div class="flex flex-col gap-2">
                <Label>Base hue</Label>
                <SliderPicker
                  value={controls().baseHue}
                  onValueChange={controls().setBaseHue}
                  onValueCommit={(value) => controls().generate()}
                  min={0}
                  max={360}
                  bgColor={baseHueGradient}
                  controlledValue={true}
                  data-umami-event="Base hue slider changed"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex w-full items-center gap-2">
                <Button
                  class="w-full text-sm text-wrap"
                  size="sm"
                  data-umami-event="Generate Button"
                  onclick={controls().generate}
                >
                  Re-generate colors
                </Button>
                <span class="text-xs">or</span>
                <kbd
                  class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
                  >^</kbd
                >
                +
                <kbd
                  class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
                  >g</kbd
                >
                <!-- Each time the colors are generated, a certain number of base hues are generated according to the choosen color scheme. 
                This option allows to generate only one set of scheme hues using the selected base hue and scheme that is used as base to generate
                for all colors for the theme. Without this option, a set of scheme hues is generated from the base color, then after the UI colors 
                are generated two new sets of scheme hues are generated from both AC1 and AC2 colors and added to the initial scheme hues set. 
                This larger set of scheme hues is then used to generate the syntax colors. 
              -->
              </div>
              <div class="flex items-center gap-1">
                <Checkbox
                  checked={controls().fewerGeneratedColors}
                  onCheckedChange={(checked) => {
                    controls().setFewerGeneratedColors(checked as boolean);
                  }}
                  data-umami-event="Use fewer color variation Generate"
                />
                <Label class="text-xs">Use fewer color variation?</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
    <div class="w-full p-2 shadow-xs">
      <Export />
    </div>
    <div
      class="border-border bg-background dark:border-primary-foreground dark:bg-background/40 w-full rounded-md border p-2 shadow-xs"
    >
      <LoadSaveTheme {userId} themes={themes || []} />
    </div>
  </div>
</section>
