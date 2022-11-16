import React, { createContext, useContext, useState } from "react";
import { pokemonApi } from "../../../Api";
import { GetPokemonResponse } from "../../../domain/pokemon";
import { GetPokemonEvolutionChain } from "../../../domain/pokemonEvo";
import { GetPokemonSpecies } from "../../../domain/pokemonSpecies";

type PokemonDetail = {
  pokemonInfo: any | null;
  setPokemon: (pokemon: number | string | null) => Promise<void>;
  isLoading: boolean;
};

const PokemonDetailContext = createContext<PokemonDetail | null>(null);

export function PokemonDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pokemonInfo, setPokemonInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const setPokemon: PokemonDetail["setPokemon"] = async (identifier) => {
    if (identifier === null) return setPokemonInfo(null);
    setIsLoading(true);
    let pokemon: GetPokemonResponse | any; //fix any, map pokemon api types
    let pokemonSpecies: GetPokemonSpecies | any;
    let evolutionChain: GetPokemonEvolutionChain | any;
    let pokedex;
    if (typeof identifier === "number")
      pokemon = await pokemonApi.fetchPokemonByNumber(identifier);
    else pokemon = await pokemonApi.fetchPokemonByName(identifier);

    pokemonSpecies = await pokemonApi.fetchPokemonSpecies(pokemon);
    evolutionChain = await pokemonApi.fetchEvolutionChain(pokemonSpecies);
    pokedex = await pokemonApi.fetchPokedex();
    setPokemonInfo({
      pokemon,
      pokemonSpecies: pokemonSpecies,
      evolutionChain: evolutionChain,
      pokedex: pokedex,
    });

    setIsLoading(false);
  };

  return (
    <PokemonDetailContext.Provider value={{ setPokemon, pokemonInfo, isLoading }}>
      {children}
    </PokemonDetailContext.Provider>
  );
}

export const usePokemonDetails = () => useContext(PokemonDetailContext);
