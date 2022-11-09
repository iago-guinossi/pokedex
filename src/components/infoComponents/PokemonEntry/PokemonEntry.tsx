import styled from "styled-components";
import { Title } from "../../uiComponents/Title";

const PokeEntry = styled.span`
padding: 0 15px;
text-align: center;`
  

export function PokemonEntry() {
  return (
    <>
      <Title>Pokedex Entry</Title>
      <PokeEntry>
        {(pokemon.flavor_text_entries[0].flavor_text).replace('\n', '').replace('\f', '')}
      </PokeEntry>
      {/** https://pokeapi.co/api/v2/pokemon-species/{id or name}/ */}
    </>
  );
}

const id = 2

const pokemon = await getPokemon(id)

async function getPokemon(pokeNumber: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeNumber}/`)
  const data = await response.json()
  
  return data
}