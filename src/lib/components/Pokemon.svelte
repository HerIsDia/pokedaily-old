<script lang="ts">
  import { setRename } from '../scripts/script';
  import type { AppData } from '../scripts/script';
  import Infos from './Infos.svelte';
  export let data: AppData;
  const id = data.pokemonOfTheDay.id;
  const stringID = `${id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : `${id}`}${
    data.pokemonOfTheDay.isShiny ? 'S' : ''
  }`;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userLang: 'fr' | 'en' =
    (urlParams.get('lang') || navigator.language.slice(0, 2)) == 'fr'
      ? 'fr'
      : 'en';

  const PokemonName = data.pokemonOfTheDay.fetched.pokemon.species.names.find(
    (name) => name.language.name === userLang
  ).name;

  let rename: string =
    data.pokemonOfTheDay.rename == ''
      ? PokemonName
      : data.pokemonOfTheDay.rename;

  const types = data.pokemonOfTheDay.fetched.types.filter(
    (type) => type != null
  );

  const sr = () => {
    if (rename.length > 16) {
      rename = rename.slice(0, 16);
    }
    setRename(rename);
  };

  const dt = new Date();
</script>

<svelte:head>
  <title>{dt.toLocaleDateString()} - {PokemonName}</title>
  <link rel="icon" href="./images/{stringID}.png" type="image/png" />
</svelte:head>

<div class="poke">
  <img
    src="./images/{stringID}.png"
    alt={data.pokemonOfTheDay.fetched.pokemon.pokemon.name}
  />
  <h2 contenteditable="true" bind:innerHTML={rename} on:keyup={sr}>
    {data.pokemonOfTheDay.rename}
  </h2>
  <h4>{PokemonName}</h4>
  <div class="infos">
    <Infos type="leveling" text="Level {data.pokemonOfTheDay.level}" />
    <Infos
      type="nature"
      text={data.pokemonOfTheDay.fetched.nature.names.find(
        (name) => name.language.name === userLang
      ).name}
    />
  </div>
  <div class="types">
    {#each types as type}
      <Infos
        type="type"
        text={type.names.find((name) => name.language.name === userLang).name}
        pokemonType={type.name.toLowerCase()}
      />
    {/each}

    {#if data.pokemonOfTheDay.isShiny}
      <Infos type="shiny" text="✨" />
    {/if}
  </div>
</div>

<style lang="scss">
  .poke {
    img {
      max-width: 50%;
      margin-bottom: 25px;
    }
    h2 {
      font-size: 48px;
    }
    h4 {
      font-size: 24px;
      font-weight: 200;
      margin-bottom: 25px;
    }
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .infos,
    .types {
      display: flex;
      flex-direction: row;
    }
    .types {
      font-size: 12px;
      opacity: 0.8;
    }
  }
</style>
