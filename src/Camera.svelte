<script context=module>
  import { writable } from 'svelte/store';

  const stopGumOnNavigate = window.navigator.standalone;

  export const navigating = writable(false);
  export function setupPageNavigating(page) {
    page(() => navigating.set(true));
    page.exit(() => navigating.set(false));
  }
</script>

<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { makeCamera, detectFrameBarcode } from '@parkingboss/barcam';

  export let barcodes = false;
  export let flashlight = true;
  export let capture = true;
  export let freeze = 1; // Seconds

  const dispatch = createEventDispatcher();

  let loading = true;
  let videoEl = null;
  let camera = null;
  let captured = null;
  let flashlightStatus = false;
  let stopWatching = null;

  $: updateFlashlight(camera, flashlight);
  $: toggleBarcodeMode(camera, barcodes);

  $: video = camera && camera.video;
  $: input = camera && !camera.video;

  function setCaptured(photo) {
    captured = photo;
    new Promise(r => setTimeout(r, freeze * 1000))
      .then(() => {
        if (captured === photo) captured = null;
      });
  }

  function updateFlashlight(camera, f) {
    if (camera && camera.video) {
      camera.hasFlashlight().then(has => {
        flashlight = f && has;
      });
      camera.getFlashlight().then(isOn => {
        flashlightStatus = isOn;
      });
    } else {
      flashlight = f;
    }
  }

  function toggleBarcodeMode(camera, findBarcodes) {
    if (camera && camera.video && findBarcodes && !stopWatching) {

      stopWatching = camera.detectAllBarcodes(onBarcode).cancel;

    } else if (stopWatching) {

      stopWatching();
      stopWatching = null;

    }
  }

  function onBarcode(barcode) {
    setCaptured(barcode.photo);
    dispatch('barcode', barcode);
  }

  function onCapture(photo) {
    setCaptured(photo);
    dispatch('capture', { photo });
  }

  async function fileChanged(evt) {
    const frame = evt.target.files[0];

    if (!barcodes) {
      onCapture(frame);
    } else {
      captured = frame;
      const barcodeResult = detectFrameBarcode(frame);
      const result = await barcode.value;
      const photo = await barcode.photo;
      onBarcode(barcodeResult);
    }
  }

  async function captureClicked(evt) {
    onCapture(await camera.capture());
  }

  async function toggleFlashlight(evt) {
    flashlightStatus = await camera.toggleFlashlight();
  }

  onMount(() => {
    let cancelled = false;
    debugger;
    makeCamera(videoEl)
      .then(cam => {
        if (cancelled) {
          cam.remove();
          alert('oh noes it was canceled')
        } else {
          alert('got camera!' + camera.video ? ' and video!!' : 'and no video');

          camera = cam;
          loading = false;
        }
      });

    return () => {
      cancelled = true;
      if (stopWatching) stopWatching();
      if (camera) camera.remove();
    };
  });
</script>

<figure class="camera"
    class:busy={captured}
    class:loading
    class:video
    class:input>

  {#if loading || video}
    <video bind:this={videoEl} autoplay muted playsinline />
  {/if}

  {#if captured}
    <img alt='captured image' src={URL.createObjectURL(captured)} />
  {/if}

  {#if input}
    <label>
      <input type='file' disabled={captured} accept='image/*' capture='environment' on:input={fileChanged} />
    </label>
  {/if}

  {#if !loading}
    <label>
      <input type='file' disabled={captured} accept='image/*' on:input={fileChanged} />
    </label>
  {/if}

  {#if camera && camera.video}
    {#if capture}
      <button
        class='capture'
        disabled={captured || capture == 'disabled'}
        on:click={captureClicked}
      />
    {/if}

    {#if flashlight}
      <button
        class='flashlight {flashlightStatus ? "on" : "off"}'
        disabled={flashlight == 'disabled'}
        on:click={toggleFlashlight}
      />
    {/if}
  {/if}

</figure>
