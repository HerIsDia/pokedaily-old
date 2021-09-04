import { MainClient } from 'pokenode-ts';

const api = new MainClient();

export const getPokemonData = async (id: number) => {
  const pokemon = await api.pokemon.getPokemonById(id);
  const species = await api.pokemon.getPokemonSpeciesById(id);
  return { pokemon, species };
};

export const getPokemonNature = async (id?: number) => {
  if (!id) {
    return await api.pokemon.listNatures();
  }
  return api.pokemon.getNatureById(id);
};

export const getPokemonTypes = async (name?: string) => {
  if (!name) {
    return await api.pokemon.listTypes();
  }
  return api.pokemon.getTypeByName(name);
};
