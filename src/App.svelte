<script lang="ts">
    import Pokemon from "./lib/components/Pokemon.svelte";
    import { script } from "./lib/scripts/script";
    const allData = script();
</script>

<main>
  <div class="dailyPokemon">
      {#await allData}
          <h2>Loading...</h2>
      {:then data} 
          <Pokemon data={data} />
      {/await}
  </div>
</main> 

<style lang="scss">
    :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :global(body) {
        font-family: 'Open Sans', sans-serif;
    }
</style>
