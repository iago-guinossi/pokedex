import axios from "axios";
import React from "react";
import { usePokemonDetails } from "./PokemonDetails";

const ChosePokemonContext = React.createContext();

export function useChosePokemon() {
    const context = React.useContext(ChosePokemonContext);
    if (context === undefined) {
        throw new Error(
            `useChosePokemon must be used within a ChosePokemonProvider`
            );
  }
  return context;
}

export  function ChosePokemonProvider({ children }) {
    const pokemonDetails = usePokemonDetails()
    const pokemon = pokemonDetails?.pokemonInfo
    // console.log(pokemon)
    const [state, setState] = React.useState({
        pokedex: pokedex,
        pokemonSpecies: null,
        evolutionChain: null,
        pokemon: null,
    });
    const value = [state, setState];
    return (
        <ChosePokemonContext.Provider value={value}>
        {children}
      </ChosePokemonContext.Provider>
  );
}
const pokedex = getPokedex()
async function getPokedex() {
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
  const data = await response.json();

  return data;
}



async function getEvolutionChain(pokemonSpecies) {
  const { data } = await axios.get(pokemonSpecies.evolution_chain.url);
  return data;
}


// const getPokemon = async () => {
//   const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
//   return data;
// };

// const pokemon = await getPokemon();
