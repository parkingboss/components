import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Camera from '../src/Camera.svelte';

export default {
  title: 'Camera',
  parameters: {
    barcodes: false,
    flashlight: true,
    capture: true,
    freeze: 3,
  }
};

export const defaultCamera = () => ({
  Component: Camera,
  props: {},
  on: {
    capture(e) {
      console.log('capture', e);
    },
    barcode(e) {
      console.log('barcode', e);
    },
  },
});