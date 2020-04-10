<script>
  export let src;
  export let caption = null;
  export let alt = null;
</script>

<figure>
  <img alt={alt || caption} {src} />
  {#if caption}
  <figcaption>{caption}</figcaption>
  {/if}
</figure>
