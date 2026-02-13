<script lang="ts">
  import { getThemeState } from '$lib/state/terminals/colors.svelte';
  import WarpMock from '$lib/components/warp/WarpMock.svelte';

  const themeState = getThemeState();
</script>

<!-- 
	Phase 1: Reuses WarpMock for all terminals since it's a generic terminal preview.
	TODO: Add terminal-specific mocks (GhosttyMock, WezTermMock) in future phases.
-->
<div id="terminal-mock">
  <WarpMock />
</div>
