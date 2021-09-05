<script lang="ts">
  import type { AppData } from '../scripts/script';
  import { fade } from 'svelte/transition';
  export let data: AppData;
  const allPokemons = [
    data.pokemonOfTheDay.id,
    ...data.history.map((p) => p.pokemon.id),
  ];
  const allPokemonFounds = [...new Set(allPokemons)];
  let pokemons: number[] = [];
  for (let index = 0; index < 897; index++) {
    pokemons.push(index + 1);
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userLang: 'fr' | 'en' =
    (urlParams.get('lang') || navigator.language.slice(0, 2)) == 'fr'
      ? 'fr'
      : 'en';

  const text = {
    fr: `Vous avez été ${allPokemonFounds.length} Pokémon.`,
    en: `You've been ${allPokemonFounds.length} Pokémon.`,
  };
</script>

<h1>{text[userLang]}</h1>
<div class="pokemons">
  {#each pokemons as id}
    <img
      class={allPokemonFounds.includes(id) ? 'found' : ''}
      src="./images/{id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : `${id}`}.png"
      alt={id.toString()}
      id={id.toString()}
    />
  {/each}
</div>

<style lang="scss">
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  .pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 100px;
      &:not(.found) {
        filter: brightness(0);
      }
    }
  }
</style>
