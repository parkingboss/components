<script>
  import { classes } from '@parkingboss/utils';

  export let contact;
</script>

{#if contact}

  <data value={contact.id} class={classes('user', contact.type, contact.format)}>
    <slot>{contact.display}</slot>
  </data>

{:else}

  <data class='user missing'>
    <slot name='no-user'></slot>
  </data>

{/if}