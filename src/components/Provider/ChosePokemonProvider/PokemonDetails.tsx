import React, { createContext, useContext, useState } from "react";
import { pokemonApi } from "../../../Api";

// Provider

type PokemonDetail = {
  pokemonInfo: any | null;
  setPokemon: (pokemon: number | string) => Promise<void>;
  status: string;
};

const PokemonDetailContext = createContext<PokemonDetail | null>(null);

export function PokemonDetailsProvider({ children }: { children: React.ReactNode }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [status, setStatus] = useState('')

  const setPokemon: PokemonDetail["setPokemon"] = async (identifier) => {
    setStatus('loading')
    let pokemon: any; //fix any, map pokemon api types
    let pokemonSpecies: any
    let evolutionChain: any
    let pokedex: any
    if (typeof identifier === "number")
      pokemon = await pokemonApi.fetchPokemonByNumber(identifier);
    else pokemon = await pokemonApi.fetchPokemonByName(identifier);
  
    pokemonSpecies = await pokemonApi.fetchPokemonSpecies(pokemon)
    evolutionChain = await pokemonApi.fetchEvolutionChain(pokemonSpecies)
    pokedex = await pokemonApi.fetchPokedex()

    setPokemonInfo({
        pokemon: pokemon,
        pokemonSpecies: pokemonSpecies,
        evolutionChain: evolutionChain,
        pokedex: pokedex,
    })
    setStatus('')
  };

  return (
    <PokemonDetailContext.Provider value={{ setPokemon, pokemonInfo, status }}>
      {children}
    </PokemonDetailContext.Provider>
  );
}

export const usePokemonDetails = () => useContext(PokemonDetailContext);