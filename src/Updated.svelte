<script>
    import Time from './Time.svelte';

    import { dateformat, tryDate } from '@parkingboss/utils';

    export let updated;

    $: updatedDate = tryDate(updated);
</script>

{#if updated}
  <Time class="updated" utc="{updated}">
    {#if updatedDate}
    {dateformat.medTz.format(updated)}
    {:else}
    <slot name='not-a-date'>{updated}</slot>
    {/if}
  </Time>
{:else}
  <slot name='not-updated'>{updated | 'Never'}</slot>
{/if}
