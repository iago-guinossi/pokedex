import styled from "styled-components";
import { useChosePokemon } from "../../Provider/ChosePokemonProvider";
import { usePokemonDetails } from "../../Provider/ChosePokemonProvider/PokemonDetails";
import { Title } from "../../uiComponents/Title";

const PokeEntry = styled.span`
padding: 0 15px;
text-align: center;`
  

  export function PokemonEntry() {
    const pokemonDetails = usePokemonDetails()
  const pokemonSpecies = pokemonDetails?.pokemonInfo.pokemonSpecies
  const entry = pokemonSpecies.flavor_text_entries.find((entries) => entries.language.name === 'en')

  return (
    <>
      <Title>Pokedex Entry</Title>
      <PokeEntry>
        {(entry.flavor_text).replace('\n', '').replace('\f', '')}
      </PokeEntry>
      {/** https://pokeapi.co/api/v2/pokemon-species/{id or name}/ */}
    </>
  );
}

// const id = 2

// const pokemon = await getPokemon(id)

// async function getPokemon(pokeNumber: number) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeNumber}/`)
//   const data = await response.json()
  
//   return data
// }
