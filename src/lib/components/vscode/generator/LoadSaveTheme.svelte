<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import { useClerkContext } from 'svelte-clerk';

  import { LoaderPinwheel } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';

  import { getSelectedTheme } from '$lib/state/vscode/theme.svelte';
  import { getControls } from '$lib/state/vscode/controls.svelte';
  import { Lit } from 'litlyx-js';

  import type { Theme } from '$lib/types/vscode/theme';
  const { userId, themes }: { userId: string | null; themes: Theme[] } = $props();
  const selectedThemeState = getSelectedTheme();
  const controlsState = getControls();
  const ctx = useClerkContext();
  const user = $derived(ctx.user);
  let isPending = $state(false);
  let nameError = $state('');
  let selectThemeValue = $derived.by(() =>
    selectedThemeState().theme?.id === 0 ? '' : selectedThemeState().theme?.id?.toString()
  );
  let themeName = $derived(controlsState().themeName);
  function getThemeById(id: number): Theme | undefined {
    return themes?.find((theme) => theme.id === id);
  }

  function handleThemeSelect(value: string) {
    const id = parseInt(value);
    const theme = getThemeById(id);
    if (theme) {
      selectedThemeState().set(theme);
    }
  }

  function getSelectedThemeName() {
    if (selectedThemeState().theme?.id !== 0) {
      return selectedThemeState().theme?.name;
    }
    return 'Select a theme';
  }

  function handleThemeNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    controlsState().setThemeName(target.value);
    if (controlsState().themeName.length > 0 && nameError) {
      nameError = '';
    }
    selectedThemeState().update();
  }

  function getUserName() {
    if (user) {
      if (user.firstName && user.lastName) {
        return user.firstName + ' ' + user.lastName;
      } else if (user.username) {
        return user.username;
      } else if (user.emailAddresses[0]) {
        return user.emailAddresses[0].emailAddress;
      } else {
        return 'Anonymous';
      }
    }
  }

  async function handleThemeIsPublicChange(value: boolean | 'indeterminate') {
    controlsState().setThemeIsPublic(value as boolean);
    if (selectedThemeState().theme?.id !== 0) {
      isPending = true;
      selectedThemeState().update();
      const response: Response = await fetch('/api/vscode/public-theme', {
        method: 'POST',
        body: JSON.stringify(selectedThemeState().theme)
      });
      if (response.ok) {
        invalidateAll();
      } else {
        alert('Failed to update theme public status');
      }
      isPending = false;
    }
  }

  async function handleSaveTheme() {
    isPending = true;
    selectedThemeState().update({
      userId: user?.id,
      userName: getUserName()
    });
    if (controlsState().themeName.length === 0) {
      nameError = 'Theme name is required';
      isPending = false;
      return;
    }
    Lit.event('Saved Theme');
    const response: Response = await fetch('/api/vscode/save-theme', {
      method: 'POST',
      body: JSON.stringify(selectedThemeState().theme)
    });
    if (response.ok) {
      const savedTheme = await response.json();
      invalidateAll();
      selectedThemeState().set(savedTheme);
      isPending = false;
    } else {
      if (response.status === 409) {
        nameError = 'Theme name already exists';
      } else {
        nameError = response.statusText;
      }
      isPending = false;
    }
  }
</script>

<section class="flex flex-col gap-2">
  {#if user}
    {#if themes.length > 0}
      <div class="flex items-center justify-between">
        <Label class="text-sm font-black drop-shadow-xs">Load / Save theme</Label>

        <Button
          disabled={selectedThemeState().theme?.id === 0}
          variant="outline"
          onclick={() => selectedThemeState().newTheme()}
          data-umami-event="New theme">New theme</Button
        >\
      </div>
      <Select
        value={selectThemeValue}
        onValueChange={handleThemeSelect}
        type="single"
        disabled={isPending}
        allowDeselect={false}
      >
        <SelectTrigger>
          {getSelectedThemeName()}
        </SelectTrigger>
        <SelectContent>
          {#each themes as theme}
            <SelectItem data-umami-event="Load theme" value={theme.id?.toString() || ''}
              >{theme.name}</SelectItem
            >
          {/each}
        </SelectContent>
      </Select>
    {/if}
    <div class="flex gap-2">
      <Input
        value={themeName}
        oninput={handleThemeNameChange}
        placeholder="Theme name"
        disabled={isPending}
      />
      <Button
        variant="outline"
        data-umami-event="Saved theme"
        onclick={handleSaveTheme}
        disabled={isPending}
      >
        {#if isPending}
          <LoaderPinwheel class="animate-spin" />
        {:else}
          {selectedThemeState().theme?.id === 0 ? 'Save' : 'Update'}
        {/if}
      </Button>
    </div>
    {#if nameError}
      <p class="text-destructive text-xs">{nameError}</p>
    {/if}

    <div class="flex items-center gap-2">
      <Checkbox
        disabled={isPending}
        checked={controlsState().themeIsPublic}
        onCheckedChange={handleThemeIsPublicChange}
        data-umami-event="Public theme"
      />
      <Label>Public theme</Label>
    </div>
  {:else}
    <div class="flex items-center justify-center">
      <Label>Sign in to save and load themes</Label>
    </div>
  {/if}
</section>
