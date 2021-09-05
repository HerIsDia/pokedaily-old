<script lang="ts">
    import Pokemon from "./lib/components/Pokemon.svelte";
    import { script } from "./lib/scripts/script";
    import Fa from 'svelte-fa';
    import { faSpinner } from "@fortawesome/free-solid-svg-icons";
    import { fly } from 'svelte/transition';
    const allData = script();
</script>

<nav class="navbar">

</nav>

<main>
  <div class="dailyPokemon">
      {#await allData}
      <div class=loading transition:fly="{{ y: -200, duration: sessionStorage.getItem('done') == "1" ? 0 : 2000 }}">
        <Fa icon={faSpinner} size="3x" spin />
        <h2>Loading...</h2>
      </div>
      {:then data}
      <div class="pokemon" transition:fly="{{ y: 200, duration: sessionStorage.getItem('done') == "1" ? 0 : 2000 }}">
        <Pokemon data={data} />
      </div> 
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

    .dailyPokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        .loading {
            text-align: center;
        }
    }

    

</style>
