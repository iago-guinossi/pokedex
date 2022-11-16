import styled from "styled-components";
import { useChosePokemon } from "../../Provider/ListPokemonProvider";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
import { Title } from "../../uiComponents/Title";

const PokeEntry = styled.span`
padding: 0 15px;
text-align: center;`

const ContainerEntry = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
  

  export function PokemonEntry() {
    const pokemonDetails = usePokemonDetails()
  const pokemonSpecies = pokemonDetails?.pokemonInfo.pokemonSpecies
  const entry = pokemonSpecies.flavor_text_entries.find((entries) => entries.language.name === 'en')

  return (
    <ContainerEntry>
      <Title>Pokedex Entry</Title>
      <PokeEntry>
        {(entry.flavor_text).replace('\n', '').replace('\f', '')}
      </PokeEntry>
      {/** https://pokeapi.co/api/v2/pokemon-species/{id or name}/ */}
    </ContainerEntry>
  );
}

// const id = 2

// const pokemon = await getPokemon(id)

// async function getPokemon(pokeNumber: number) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeNumber}/`)
//   const data = await response.json()
  
//   return data
// }
