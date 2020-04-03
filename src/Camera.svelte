<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { makeCamera, detectFrameBarcode } from '@parkingboss/barcam';

  const dispatch = createEventDispatcher();

  export let barcode = false;

  export let noFlashlight = false;
  export let disableFlashlight = false;
  export let flashlightText = 'Flashlight';

  export let noCapture = false;
  export let disableCapture = false;
  export let captureText = 'Capture';

  function dispatchImage(photo) {
    dispatch('image', { photo });
  }

  function dispatchBarcode(result) {
    dispatch('barcode', result);
  }

  let videoEl = null;
  let camera = null;

  let busy = false;
  let flashlight = null;

  $: loading = !camera;
  $: video = camera && camera.video;
  $: fallback = camera && !camera.video;

  // This is done as a function to prevent changes to stopWatching from
  // re-triggering the toggleBarcode.
  $: if (video) toggleBarcode(barcode);

  let stopWatching = null;
  function toggleBarcode(barcode) {
    if (stopWatching) stopWatching();
    if (barcode) stopWatching = camera.detectAllBarcodes(options, dispatchBarcode);
  }

  async function fileChanged(evt) {
    const frame = evt.target.files[0];

    if (!frame) return;


    try {
      if (barcode) {

      } else {
        dispatchImage(frame);
      }
    } finally{
      busy = false;
    }
  }

  async function checkFrameForBarcode(frame) {
    try {
      busy = true;
      const barcodeDetection = detectFrameBarcode(frame);
      const value = await barcodeDetection.value;
      if (value) {
        dispatchBarcode({ value, photo: barcodeDetection.photo });
      }
    } finally {
      busy = false;
    }
  }

  async function captureClicked() {
    dispatchImage(await camera.capture())
  }

  async function flashlightClicked() {
    flashlight = await camera.flashlight(!flashlight);
  }

  onMount(() => {
    let cancelled = false;

    makeCamera(videoEl)
      .then(cam => {
        if (!cancelled) {
          camera = cam;
          if (camera.hasFlashlight()) {
            flashlight = camera.getFlashlight();
          }
        }
      })
      .catch(() => {
        // This is just an abundance of caution. This function should never fail
        camera = { video: false, remove() {} };
      });

    return () => {
      cancelled = true;
      if (stopWatching) stopWatching();
      if (camera) camera.remove();
    };
  });
</script>

<figure class="camera" class:busy class:barcode class:loading class:video>
  <video autoplay=true muted=true playsinline bind:this={videoEl} />
  <input type='file' accept='image/*' capture='environment' disabled={busy} on:input={fileChanged} />
  {#if video}

    <nav>
      {#if !noFlashlight && camera.hasFlashlight()}

        <button on:click={flashlightClicked}
                class='flashlight {flashlight ? 'on' : 'off'}'
                disabled={disableFlashlight}>{flashlightText}</button>

      {/if}
      {#if !noCapture && !barcode}

        <button on:click={captureClicked}
                class='capture'
                disabled={disableCapture || busy}>{captureText}</button>

      {/if}
    </nav>

    {/if}
</figure>
