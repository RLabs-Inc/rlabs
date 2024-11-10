import { exampleFiles } from '$lib/constants/example-files';

type SelectedColor = {
  name: string;
  color: string;
  type: 'ui' | 'syntax' | 'ansi';
};

let file = $state(exampleFiles[0]);
let selectedColor = $state<SelectedColor | null>(null);
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

  return () => ({
    selectedColor,
    setSelectedColor
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
