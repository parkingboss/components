<script>
  import Image from './Image.svelte';
  import Address from './Address.svelte';

  export let property;
  export let address = null;
  export let showImage = false;
  export let showLogo = false;

  $: id = property && property.id;
  $: name = property && property.name;
  $: image = showImage && property && property.photo;
  $: logo = showLogo && property && property.logo;
</script>

<data value={id}>
  <h1>{name}</h1>

  {#if image}
    <Image file={image} alt='Image of {name}' />
  {/if}

  {#if logo}
    <Image file={logo} alt='{name} Logo' />
  {/if}

  {#if address}
    <Address {address} />
  {/if}
</data>
