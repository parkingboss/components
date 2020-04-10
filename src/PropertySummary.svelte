<script>
  import Image from './Image.svelte';
  import Address from './Address.svelte';

  export let id;
  export let name;
  export let image = null;
  export let address = null;
</script>

<data value={id}>
  <h1>{name}</h1>

  {#if image}
    <Image src={image} alt='Image of {name}' />
  {/if}

  {#if address}
    <Address {...address} />
  {/if}

  <slot />
</data>
