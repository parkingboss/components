<script>
  export let street;
  export let city;
  export let state;
  export let postal;
</script>

<address>
  {#if street}<span class="street">{street}</span>{/if}
  {#if city}<span class="city">{city}</span>{/if}
  {#if state}<span class="state">{state}</span>{/if}
  {#if postal}<span class="postal">{postal}</span>{/if}
</address>
