import { exampleFiles } from '$lib/constants/example-files';
// import { colorToLCH } from '$lib/utils/vscode/colors';

type SelectedColor = {
  name: string;
  color: string;
  type: 'ui' | 'syntax' | 'ansi';
};

let file = $state(exampleFiles[0]);
let selectedColor = $state<SelectedColor | null>(null);
let weight = $state('300');
let size = $state(13);

let pickerLightness = $state([0]);
let pickerChroma = $state([0]);
let pickerHue = $state([0]);
let pickerAlpha = $state([100]);
const currentColor = $derived({
  mode: 'oklch',
  l: pickerLightness[0] / 100,
  c: pickerChroma[0],
  h: pickerHue[0],
  alpha: pickerAlpha[0] / 100
});

let isEditing = $state(false);

export function getSelectedFile() {
  function set(name: string) {
    file =
      exampleFiles.find((exampleFile: (typeof exampleFiles)[0]) => exampleFile.name === name) ||
      exampleFiles[0];
  }

  return () => ({
    file,
    set
  });
}

export function getFont() {
  function setWeight(value: string) {
    weight = value;
  }
  function setSize(value: number) {
    size = value;
  }

  return () => ({
    size,
    weight,
    setSize,
    setWeight
  });
}

export function getSelectedColor() {
  function setSelectedColor(newSelectedColor: SelectedColor | null) {
    selectedColor = newSelectedColor;
  }

  function setPickerLightness(value: number[]) {
    pickerLightness = value;
  }
  function setPickerChroma(value: number[]) {
    pickerChroma = value;
  }
  function setPickerHue(value: number[]) {
    pickerHue = value;
  }
  function setPickerAlpha(value: number[]) {
    pickerAlpha = value;
  }

  return () => ({
    selectedColor,
    setSelectedColor,
    pickerLightness,
    setPickerLightness,
    pickerChroma,
    setPickerChroma,
    pickerHue,
    setPickerHue,
    pickerAlpha,
    setPickerAlpha,
    currentColor
  });
}

export function getIsEditing() {
  function setIsEditing(value: boolean) {
    isEditing = value;
  }

  return () => ({
    isEditing,
    setIsEditing
  });
}
