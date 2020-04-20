<script>
  import Timestamp from './Timestamp.svelte';

  export let note;
</script>

{#if note}

  <blockquote>
    {#each (note.lines || []) as line}
      <p>{line}</p>
    {/each}

    <footer>
      <Timestamp class='issued' timestamp={note.issued} />
    </footer>
  </blockquote>

{:else}

  <blockquote class='missing'><slot name='no-note' /></blockquote>

{/if}
