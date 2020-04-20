<script>
  import Time from './Time.svelte';
  import Contact from './Contact.svelte';

  export let timestamp;
  let klass = [];
  export { klass as class };
</script>

{#if timestamp}

  <Time class={klass} utc={timestamp.utc} local={timestamp.local} let:localLongFormat let:formatted>
    {#if timestamp.title}
      <dfn>{timestamp.title}</dfn>
    {/if}

    <abbr title="{localLongFormat}">{formatted}</abbr>

    {#if timestamp.user || timestamp.by}
      <Contact contact={timestamp.user || timestamp.by} />
    {/if}
  </Time>

{:else}

  <slot name='no-timestamp' />

{/if}
