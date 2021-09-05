<script lang="ts">
  import type { AppData } from '../scripts/script';
  import Infos from './Infos.svelte';
  export let data: AppData;
  const sortedData = data.history.sort((a, b) => b._date - a._date);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userLang: 'fr' | 'en' =
    (urlParams.get('lang') || navigator.language.slice(0, 2)) == 'fr'
      ? 'fr'
      : 'en';
</script>

<div class="history">
  {#each sortedData as pokemon}
    <div class="pokemon">
      <div class="left">
        <img
          src="./images/{pokemon.pokemon.id}{pokemon.pokemon.isShiny
            ? 'S'
            : ''}.png"
          alt={pokemon.pokemon.rename}
        />
      </div>
      <div class="right">
        <h2>
          {pokemon.pokemon.rename ||
            pokemon.pokemon.fetched.pokemon.species.names.find(
              (name) => name.language.name == userLang
            ).name}
        </h2>
        <div class="infos">
          <Infos
            type="leveling"
            text={new Date(pokemon._date).toLocaleDateString()}
          />
          <Infos
            type="nature"
            text={pokemon.pokemon.fetched.nature.names.find(
              (name) => name.language.name === userLang
            ).name}
          />
          <Infos type="nature" text="Level {pokemon.pokemon.level}" />
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .history {
    display: flex;
    flex-direction: column;
    min-width: 40vw;
    .pokemon {
      display: flex;
      padding: 20px;
      flex-direction: row-reverse;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .left {
        img {
          width: 200px;
        }
      }
      .right {
        .infos {
          display: flex;
          flex-direction: row;
          justify-content: left;
          flex-wrap: wrap;
        }
      }
    }
  }
</style>
