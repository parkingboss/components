<script>
  export let address;
</script>

<address data-id={address && address.id} class:missing={!address}>
  {#if address}
    {#if address.street}<span class="street">{address.street}</span>{/if}
    {#if address.city}<span class="city">{address.city}</span>{/if}
    {#if address.state}<span class="state">{address.state}</span>{/if}
    {#if address.postal}<span class="postal">{address.postal}</span>{/if}
  {/if}
</address>
