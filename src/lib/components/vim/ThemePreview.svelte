<script lang="ts">
  import { get } from 'svelte/store';
  import { theme } from '$lib/state/vim/theme';
  import CodePreview from './CodePreview.svelte';

  const previewCode = `
function fibonacci(n: number): number {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Alice',
  age: 30
};

console.log(fibonacci(10));
console.log(person);
  `;
</script>

<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
  <h3 class="mb-4 text-xl font-semibold">Theme Preview</h3>
  <div class="overflow-hidden rounded border">
    <CodePreview code={previewCode} theme={get(theme)} />
  </div>
</div>
