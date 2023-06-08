<script>
  // Import any necessary modules or components
  import { onMount } from 'svelte';

  // Define any data or logic specific to the "My Work" page
  let works = [];

</script>

<main>
  <h1>My Work</h1>
  {#if works.length > 0}
    <ul>
      {#each works as work}
        <li>{work.title}</li>
      {/each}
    </ul>
  {:else}
    <p>No works available.</p>
  {/if}
</main>

<style>
  /* Add any specific styles for the "My Work" page */
  main {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
  }
</style>
