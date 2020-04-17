<script>
  export let address;
</script>

{#if address}

  <address data-id={address.id}>
    {#if address.street}<span class="street">{address.street}</span>{/if}
    {#if address.city}<span class="city">{address.city}</span>{/if}
    {#if address.state}<span class="state">{address.state}</span>{/if}
    {#if address.postal}<span class="postal">{address.postal}</span>{/if}
  </address>

{:else}

  <address class=missing>
    <slot name='no-address' />
  </address>

{/if}
