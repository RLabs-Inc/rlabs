<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cn } from '$lib/utils';

  export let value: string;
  export let class_name = '';

  const dispatch = createEventDispatcher<{
    select: string;
  }>();

  function handleChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    dispatch('select', select.value);
  }
</script>

<select
  {value}
  on:change={handleChange}
  class={cn(
    'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    class_name
  )}
>
  <slot />
</select>
