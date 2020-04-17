<script>
  import { imgx, file as fil } from '@parkingboss/utils';

  export let file;
  export let imgProps = {};
  export let alt = null;
  export let caption = null;

  $: alt = alt || caption || (file && file.filename) || 'An Image';
</script>

{#if file && fil.isImage(file)}

  <figure>
    <img alt={alt} src={imgx.compressed(file.url)} {...imgProps} />
    {#if caption}
    <figcaption>{caption}</figcaption>
    {/if}
  </figure>

{:else if file}

  <figure class='invalid-type'>
    <slot name='not-a-file'>Invalid Image File</slot>
  </figure>

{:else}

  <figure class='missing'><slot name='no-file' /></figure>

{/if}
