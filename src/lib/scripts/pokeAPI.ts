import { MainClient } from 'pokenode-ts';

const api = new MainClient();

export const getPokemonData = async (id: number) => {
  const pokemon = await api.pokemon.getPokemonById(id);
  const species = await api.pokemon.getPokemonSpeciesById(id);
  return { pokemon, species };
};

export const getPokemonList = async (limit: number) => {
  return await api.pokemon.listPokemons(0, limit);
};

export const getPokemonAbilities = async (id?: number) => {
  if (!id) {
    return await api.pokemon.listAbilities();
  }
  return api.pokemon.getAbilityById(id);
};

export const getPokemonTypes = async (id?: number) => {
  if (!id) {
    return await api.pokemon.listTypes();
  }
  return api.pokemon.getTypeById(id);
};
