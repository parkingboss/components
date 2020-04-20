<script>
  import { classes, dateformat, tryDate, DAYS } from '@parkingboss/utils';

  console.log("___DATEFORMAT___", dateformat);
  const sixDays = 6 * DAYS;
  const threeSixtyDays = 360 * DAYS;

  let klass = [];
  export { klass as class };
  export let utc;
  export let local = null;


  function format(date) {
    var now = new Date();

    const withinAWeek = (now - sixDays) < date || date < (now + sixDays);
    const withinAYear = (now - threeSixtyDays) < date || date < (now + threeSixtyDays);

    return now.toLocaleString("en-US", {
      year: !withinAYear ? "numeric" : undefined,
      month: !withinAWeek ? "short" : undefined,
      weekday: withinAWeek ? "short" : undefined,
      day: !withinAWeek ? "numeric" : undefined,
      hour: "numeric",
      minute: "numeric",
    }).replace(/,/g, "");
  }

  $: local = local || utc;
  $: date = tryDate(local);
  $: utcFormatted = utc instanceof Date && !isNaN(utc) ? utc.toISOString() : utc;
  $: localLongFormat = dateformat.long.format(date);
  $: formatted = format(date);
</script>

{#if utc}

<time class={classes(klass)} {utcFormatted}>
  <slot {localLongFormat} {formatted}>
    {#if date}
      <abbr title="{localLongFormat}">{formatted}</abbr>
    {:else}
      {utc}
    {/if}
  </slot>
</time>

{:else}

  <time class={classes('missing', klass)} utc='never'>
    <slot name='no-utc' />
  </time>

{/if}