import { exampleFiles } from '$lib/constants/example-files';
// import { colorToLCH } from '$lib/utils/vscode/colors';

type SelectedColor = {
  name: string;
  color: string;
  type: 'ui' | 'syntax' | 'ansi';
};

let file = $state(exampleFiles[0]);
let selectedColor = $state<SelectedColor | null>(null);
let pickerLightness = $state([0]);
let pickerChroma = $state([0]);
let pickerHue = $state([0]);
let pickerAlpha = $state([100]);

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
    setPickerAlpha
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
