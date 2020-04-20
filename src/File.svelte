<script>
  import Image from './Image.svelte';

  import { imgx, file as fil } from '@parkingboss/utils';

  export let file;

  $: image = fil.isImage(file);
  $: href = file && (image ? imgx.compressed(file.url) : file.url);
</script>

{#if file}

  <a {href} download={file.filename}>
    {#if image}

    <Image {file} />

    {:else}

    <slot>{file.filename}</slot>

    {/if}
  </a>

{:else}

  <data class='file missing'>
    <slot='no-file' />
  </data>

{/if}
