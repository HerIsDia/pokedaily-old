<script lang="ts">
    import type { Data } from "../scripts/script";
    export let data: Data;
    const id = data.pokemonOfTheDay.id;
    const stringID = `${id < 100 ? id < 10 ? `00${id}` : `0${id}` : `${id}`}${data.pokemonOfTheDay.isShiny ? "S" : ""}`;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userLang: 'fr' | 'en' =
  (urlParams.get('lang') || navigator.language.slice(0, 2)) == 'fr'
    ? 'fr'
    : 'en';
</script>

<img src="./images/{stringID}.png" alt="{data.pokemonOfTheDay.fetched.pokemon.pokemon.name}">