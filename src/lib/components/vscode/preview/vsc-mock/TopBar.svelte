<script lang="ts">
</script>

<div class="top-bar flex h-5 w-full items-center justify-center">
  <input
    type="text"
    class="input h-3 w-40 rounded-md border p-1 text-xs focus:outline-none md:w-72"
  />
</div>

<style>
  .top-bar .input {
    background-color: var(--bg1);
    color: var(--fg1);
    border-color: var(--comment);
    transition-property: all;
    transition-duration: 350ms;
  }
  .top-bar {
    background-color: var(--bg2);
    transition-property: all;
    transition-duration: 350ms;
  }
</style>
