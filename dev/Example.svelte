<script>
  import * as components from '../dist';
  import * as defaultProps from './defaultProps';

  export let name;

  function wrapped(fn) {
    try {
      return [true, fn()];
    } catch (err) {
      return [false, err];
    }
  }

  $: component = components[name];
  $: json = defaultProps[name];
  let props = null, success = false;
  $: [success, props] = wrapped(() => JSON.parse(json));
</script>

<style>
  article {
    border-bottom: 1px solid var(--gray-6);
  }

  section {
    display: flex;
  }
  label {
    width: 50%;
  }
  textarea {
    min-height: 10em;
    display: block;
    width: 100%;
  }
  data {
    display: block;
    margin: .5em;
  }
</style>

<article>
  <h2>{name}</h2>

  <section>
    <label>
      Props JSON
      <textarea bind:value={json} />
    </label>

    <label>
      {success ? 'Result' : 'Parse Error'}
      {#if success}
        <data>
          <svelte:component this={component} {...props} />
        </data>
      {:else}
        <pre>{JSON.stringify({ ...props }, null, 2)}</pre>
      {/if}
    </label>

  </section>
</article>