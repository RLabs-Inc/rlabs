import { exampleFiles } from '$lib/constants/example-files';

let file = $state(exampleFiles[0]);

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
