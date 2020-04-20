<script>
  import Time from './Time.svelte';
  import Timestamp from './Timestamp.svelte';

  import { onDestroy } from 'svelte';
  import { format, isBefore } from 'date-fns';
  import { validToInterval, intervalIsValid } from '@parkingboss/api';
  import { MINUTE } from '@parkingboss/utils';


  const FMT = 'PP p';

  export let valid;
  export let now = null;

  $: interval = validToInterval(valid);
  $: graceInterval = valid && validToInterval(valid.grace);
  $: current = intervalIsValid(interval, now);
  $: minPast = isBefore(interval.start, now);
  $: maxPast = isBefore(interval.end, now);
  $: grace = !current && intervalIsValid(graceInterval, now);
  $: minFormatted = format(new Date(valid.min.local), FMT);
  $: maxFormatted = valid.max && valid.max.local && format(new Date(valid.max.local), FMT);
  $: minBy = valid.min.by || { display: 'Parking Attendant' };
  $: maxBy = valid.max && valid.max.by || { display: 'Parking Attendant' };
</script>

{#if valid}
  <Time class={['valid', 'interval', current && 'current']} utc={valid.interval}>
    <Timestamp class='valid min {minPast ? 'past' : 'future'}' timestamp={valid.min} />

    {#if valid.max}
      <Timestamp class='valid max {maxPast ? 'past' : 'future'}' timestamp={valid.max} />
    {:else}
      <Time class='valid max future' utc=''>Until Revoked</Time>
    {/if}

    <Time class={[ 'grace', grace && 'current' ]} utc={valid.grace.interval}>
      {#if grace}Grace Period{/if}
    </Time>
  </Time>
{/if}