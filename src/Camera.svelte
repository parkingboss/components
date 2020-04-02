<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { makeCamera, detectFrameBarcode } from '@parkingboss/barcam';

  export let barcode = false;

  const dispatch = createEventDispatcher();

  function dispatchImage(photo) {
    dispatch('image', { photo });
  }

  function dispatchBarcode(result) {
    dispatch('barcode', result);
  }

  let busy = false;
  let videoEl = null;
  let camera = null;
  let flashlight = null;
  let stopWatching = null;

  $: loading = !camera;
  $: video = camera && camera.video;
  $: fallback = camera && !camera.video;

  $: if (video) toggleBarcode(barcode);

  function toggleBarcode(barcode) {
    if (stopWatching) stopWatching();
    if (barcode) stopWatching = camera.detectAllBarcodes(options, dispatchBarcode);
  }

  async function fileChanged(evt) {
    const frame = evt.target.files[0];

    if (!frame) return;

    if (barcode) {
      try {
        busy = true;
        const barcodeDetection = detectFrameBarcode(frame);
        const value = await barcodeDetection.value;
        if (value) {
          dispatchBarcode({ value, photo: barcodeDetection.photo });
        }
      } finally{
        busy = false;
      }
    } else {
      dispatchImage(frame);
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
        <ul>
          {#if camera.hasFlashlight()}
            <li>
              <button on:click={flashlightClicked} class='flashlight {flashlight ? 'on' : 'off'}'>
                Flashlight
              </button>
            </li>
          {/if}

          {#if !barcode}
            <li>
              <button on:click={captureClicked} class='capture'>Photo</button>
            </li>
          {/if}
        </ul>
      </nav>
    {/if}
</figure>
