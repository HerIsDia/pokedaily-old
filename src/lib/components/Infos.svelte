<script lang="ts">
  export let text: string = 'Hello World';
  export let type: 'leveling' | 'nature' | 'type' | 'shiny';
  type PokemonType =
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | '';
  export let pokemonType: PokemonType | string = '';
</script>

<div class="{type} {pokemonType}"><p class="text">{text}</p></div>

<style lang="scss">
  div {
    transform: skewX(20deg);
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 0px 0px;
    width: auto;
    margin: 5px;
    .text {
      padding: 2px 10px;
      transform: skewX(-20deg);
    }
    &.shiny {
      background: gold;
      color: var(--secondary);
      border: 0.1ch solid var(--primary);
    }
    &.leveling {
      background: var(--primary);
      color: var(--secondary);
      ::selection {
        background: var(--secondary);
        color: var(--primary);
      }
    }
    &.nature {
      border: 0.1ch solid var(--primary);
      color: var(--primary);
    }
    &.type {
      &.normal {
        border: 0.1ch solid #a8a77a;
        color: #a8a77a;
      }
      &.fighting {
        border: 0.1ch solid #c22e28;
        color: #c22e28;
      }
      &.flying {
        border: 0.1ch solid #a98ff3;
        color: #a98ff3;
      }
      &.poison {
        border: 0.1ch solid #a33ea1;
        color: #a33ea1;
      }
      &.ground {
        border: 0.1ch solid #e2bf65;
        color: #e2bf65;
      }
      &.rock {
        border: 0.1ch solid #b6a136;
        color: #b6a136;
      }
      &.bug {
        border: 0.1ch solid #a6b91a;
        color: #a6b91a;
      }
      &.ghost {
        border: 0.1ch solid #7b62a3;
        color: #7b62a3;
      }
      &.steel {
        border: 0.1ch solid #b7b7ce;
        color: #b7b7ce;
      }
      &.fire {
        border: 0.1ch solid #ee8130;
        color: #ee8130;
      }
      &.water {
        border: 0.1ch solid #6390f0;
        color: #6390f0;
      }
      &.grass {
        border: 0.1ch solid #7ac74c;
        color: #7ac74c;
      }
      &.electric {
        border: 0.1ch solid #f7d02c;
        color: #f7d02c;
      }
      &.psychic {
        border: 0.1ch solid #f95587;
        color: #f95587;
      }
      &.ice {
        border: 0.1ch solid #96d9d6;
        color: #96d9d6;
      }
      &.dragon {
        border: 0.1ch solid #6f35fc;
        color: #6f35fc;
      }
      &.dark {
        border: 0.1ch solid #705746;
        color: #705746;
      }
      &.fairy {
        border: 0.1ch solid #d685ad;
        color: #d685ad;
      }
    }
  }
</style>
