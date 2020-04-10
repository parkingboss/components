<script>
  import { classes } from '@parkingboss/utils';

  export let id;
  export let type = null;
  export let format = null;
  export let display = null;
</script>

<data class={classes('user', type, format)} value={id}>
  <slot>{display || ''}</slot>
</data>
