import axios from "axios";
import { GetPokedex } from "./domain/pokedex";
import { GetPokemonResponse } from "./domain/pokemon";
import { GetPokemonEvolutionChain } from "./domain/pokemonEvo";
import { GetPokemonSpecies } from "./domain/pokemonSpecies";

export const pokemonApi = {
  async fetchPokemonByName(
    name: string
  ): Promise<{ pokemon: GetPokemonResponse }> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    return data;
  },

  async fetchPokemonByNumber(number: number): Promise<GetPokemonResponse> {
    const { data } = await axios.get<GetPokemonResponse>(
      `https://pokeapi.co/api/v2/pokemon/${number}/`
    );

    return data;
  },

  async fetchPokemonSpecies(
    pokemon: GetPokemonResponse
  ): Promise<{ pokemonSpecies: GetPokemonSpecies }> {
    const { data } = await axios.get(pokemon.species.url);
    return data;
  },

  async fetchPokedex(): Promise<{ pokedex: GetPokedex }> {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokedex/1/");
    return data;
  },

  async fetchEvolutionChain(
    pokemon: GetPokemonSpecies
  ): Promise<{ evoList: GetPokemonEvolutionChain }> {
    const { data } = await axios.get(pokemon.evolution_chain.url);
    return data;
  },
};
