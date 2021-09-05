<script lang="ts">
  import Pokemon from './lib/components/Pokemon.svelte';
  import History from './lib/components/History.svelte';
  import { script } from './lib/scripts/script';
  import Fa from 'svelte-fa';
  import {
    faSpinner,
    faCalendar,
    faHistory,
    faBook,
    faHeart,
  } from '@fortawesome/free-solid-svg-icons';
  import { fly } from 'svelte/transition';
  const allData = script();
  let resultType: 'pokemon' | 'history' | 'pokedex' = 'pokemon';
</script>

<nav class="navbar">
  {#if resultType != 'pokemon'}
    <a href="#pokemon" on:click={() => (resultType = 'pokemon')}
      ><span><Fa icon={faCalendar} /><span>Pokémon</span></span></a
    >
  {/if}
  {#if resultType != 'history'}
    <a href="#history" on:click={() => (resultType = 'history')}
      ><span><Fa icon={faHistory} /><span>History</span></span></a
    >
  {/if}
  {#if resultType != 'pokedex'}
    <a href="#pokedex" on:click={() => (resultType = 'pokedex')}
      ><span><Fa icon={faBook} /><span>Pokédex</span></span></a
    >
  {/if}
</nav>

<main>
  <div class="dailyPokemon">
    {#await allData}
      <div
        class="loading"
        transition:fly={{
          y: -200,
          duration: sessionStorage.getItem('done') == '1' ? 0 : 2000,
        }}
      >
        <Fa icon={faSpinner} size="3x" spin />
        <h2>Loading...</h2>
      </div>
    {:then data}
      <div
        class="result"
        transition:fly={{
          y: 200,
          duration: sessionStorage.getItem('done') == '1' ? 0 : 2000,
        }}
      >
        {#if resultType == 'pokemon'}
          <Pokemon {data} />
        {:else if resultType == 'history'}
          <History {data} />
        {:else if resultType == 'pokedex'}
          <p>Pokedex</p>
        {/if}
      </div>
    {/await}
    <footer>
      <p>
        Made with <Fa icon={faHeart} /> by
        <a href="https://diamant.dev">diamant</a>.
      </p>
      <p>
        Pokedaily is not affiliated with Nintendo or Gamefreak Inc. - Pokémon
        and Pokémon character names are trademarks of Nintendo.
      </p>
    </footer>
  </div>
</main>

<style lang="scss">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(::selection) {
    background-color: rgb(24, 24, 24);
    color: white;
  }

  :global(body) {
    font-family: 'Open Sans', sans-serif;
  }

  .dailyPokemon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    overflow: hidden;
    .loading {
      text-align: center;
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    padding: 20px;
    font-size: 24px;
    a {
      transform: skewX(10deg);
      color: rgb(24, 24, 24);
      text-decoration: none;
      border: 0.1ch solid rgb(26, 26, 26);
      color: black;
      padding: 20px;
      transition: all 0.5s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 6px 0px;
      &:hover {
        background: rgb(26, 26, 26);
        box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 0px 0px;
        color: white;
        & > span span {
          opacity: 1;
          transform: translate(8px, 50px) skewX(10deg);
          color: black;
        }
      }
      span {
        text-align: center;
        transform: skewX(-10deg);
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 24px;
        span {
          transition: all 0.5s ease-in-out;
          font-size: 12px;
          transform: skewX(10deg);
          position: absolute;
          opacity: 0;
          color: white;
        }
      }
    }
  }

  footer {
    margin-top: 50px;
    text-align: center;
    opacity: 0.8;
    font-size: 12px;
    a {
      color: #b69bc9;
    }
  }
</style>
