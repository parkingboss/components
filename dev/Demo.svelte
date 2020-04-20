<script>
  import Example from './Example.svelte';
  import * as components from '../dist';

  const keys = Object.keys(components);
</script>

<h1>Components</h1>

{#each keys as name}
  <Example {name} />
{/each}