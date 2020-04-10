<script>
  import Image from './Image.svelte';
  import { qs, urls } from '@parkingboss/utils';

  const parkingBossUploadRex = /upload\.parkingboss\.com(\/files)?/i;
  const imgxRoot = 'parking-uploads.imgix.net';
  const hrefSearch = { auto: "compress,enhance" };
  const srcSearch = Object.assign({}, hrefSearch, { w: 60, h: 60, fit: 'crop', crop: 'entropy' })
  const imageTypes = new Set([ 'video', 'image' ]);

  export let url;
  export let filename;
  export let format = null;

  function srcAndHref(url, isImage) {
    if (!isImage) return [url, null];

    const imgxUrl = url.replace(parkingBossUploadRex, imgxRoot);
    return {
      src: urls.build(imgxUrl, { query: srcSearch }),
      src: urls.build(imgxUrl, { query: hrefSearch }),
    };
  }

  $: type = format && format.split("/")[0].toLowerCase();
  $: isImage = imageTypes.has(type);
  $: fileUrls = srcAndHref(url, isImage);
</script>

<a href={fileUrls.href} download={filename}>
    {#if isImage}

    <Image src={fileUrls.src} caption={filename} />

    {:else}

    {filename}

    {/if}
</a>
