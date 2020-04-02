<script>
  import Address from './Address.svelte';
  export let id;
  export let name;
  export let imageUrl = null;
  export let address = null;
</script>

<data value={id}>
  {#if imageUrl}
  <figure><img alt='Image of {name}' src={imageUrl}></figure>
  {/if}
  <h1>{name}</h1>
  {#if address}
  <Address {...address} />
  {/if}
</data>
