<script lang="ts">
  import { getControls } from '$lib/state/vscode/controls.svelte';
  import { getUiColors } from '$lib/state/vscode/ui-colors.svelte';
  import { getSyntaxColors } from '$lib/state/vscode/syntax-colors.svelte';
  import { getAnsiColors } from '$lib/state/vscode/ansi-colors.svelte';

  import { Label } from '$lib/components/ui/label';
  import { Button } from '$lib/components/ui/button';
  import { Slider } from '$lib/components/ui/slider';
  import { Switch } from '$lib/components/ui/switch';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup
  } from '$lib/components/ui/select';
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
  } from '$lib/components/ui/accordion';

  import ColorPicker from './ColorPicker.svelte';
  import LoadSaveTheme from './LoadSaveTheme.svelte';

  import { ColorSchemes } from '$lib/types/color';
  import type { Theme } from '$lib/types/theme';

  const { userId, themes }: { userId: string | null; themes: Theme[] } = $props();
  const controls = getControls();
  const uiColorsState = getUiColors();
  const syntaxColorsState = getSyntaxColors();
  const ansiColorsState = getAnsiColors();

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
    <div class="flex items-center justify-between rounded-md border border-border p-2 shadow-sm">
      <Label>Dark theme?</Label>
      <Switch checked={controls().isDark} onCheckedChange={controls().setIsDark} />
    </div>
    <span class="text-center text-xs text-foreground"
      ><span class="font-bold">Be careful</span>, it is almost
      <span class="underline">impossible</span> to generate the same set of colors twice, if you
      liked it, <span class="font-bold">save it</span> before generating a new one.</span
    >

    <div class="flex flex-col items-center gap-1">
      <div class="w-full rounded-md border border-border px-2 py-1 shadow-sm">
        <span class="text-sm font-black drop-shadow-sm"
          >Randomize a new {controls().isDark ? 'dark' : 'light'} theme</span
        >
        <div class="flex flex-col gap-2 py-2">
          <div class="flex w-full items-center gap-2">
            <Button class="w-full text-sm" size="sm" onclick={controls().randomize}
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
            />
            <Label class="text-xs">Use fewer color variation?</Label>
          </div>
        </div>
      </div>
      <span class="text-xs text-muted-foreground">or</span>
      <div class="flex w-full flex-col gap-1 rounded-md border border-border px-2 py-2 shadow-sm">
        <p class="leading-none">
          <span class="text-sm font-black drop-shadow-sm"
            >Generate {controls().isDark ? 'dark' : 'light'} theme</span
          >
          <span class="text-xs text-muted-foreground"
            >by choosing a color scheme and selecting the base hue.</span
          >
        </p>
        <div class="flex flex-col gap-3 pb-1 pt-2">
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
              <Slider
                value={controls().baseHue}
                onValueChange={controls().setBaseHue}
                onValueCommit={(value) => controls().generate()}
                min={0}
                max={360}
                bgColor={baseHueGradient}
              />
            </div>
            <Accordion type="single">
              <AccordionItem value="ui">
                <AccordionTrigger class="text-xs"
                  >Adjust UI, Syntax and Ansi saturation.</AccordionTrigger
                >
                <AccordionContent>
                  <div class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2">
                      <Label>UI saturation</Label>
                      <Slider
                        value={controls().uiSaturation}
                        onValueChange={controls().setUiSaturation}
                        onValueCommit={(value) => uiColorsState().setUiSaturation(value[0])}
                        min={0}
                        max={100}
                        bgColor={saturationGradient}
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <Label>Syntax saturation</Label>
                      <Slider
                        value={controls().syntaxSaturation}
                        onValueChange={controls().setSyntaxSaturation}
                        onValueCommit={(value) => syntaxColorsState().setSyntaxSaturation(value[0])}
                        min={0}
                        max={100}
                        bgColor={saturationGradient}
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <Label>Ansi saturation</Label>
                      <Slider
                        value={controls().ansiSaturation}
                        onValueChange={controls().setAnsiSaturation}
                        onValueCommit={(value) => ansiColorsState().setAnsiSaturation(value[0])}
                        min={0}
                        max={100}
                        bgColor={saturationGradient}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex w-full items-center gap-2">
              <Button class="w-full text-wrap text-sm" size="sm" onclick={controls().generate}>
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
              />
              <Label class="text-xs">Use fewer color variation?</Label>
            </div>
          </div>
        </div>
      </div>
      <div class="py-3">
        <ColorPicker />
      </div>
      <div class="w-full rounded-md border border-border p-2 shadow-sm">
        <LoadSaveTheme {userId} themes={themes || []} />
      </div>
    </div>
  </div>
</section>
