<script>
    const formatter = new Intl.DateTimeFormat("en-US", {
        year:undefined,
        month:"short",
        weekday:"short",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        timeZoneName:"short",
    });
    export let time;
</script>

<time class="updated" datetime="{time.toISOString()}">{formatter.format(time)}</time>