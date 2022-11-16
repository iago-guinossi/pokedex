import styled from "styled-components";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
import { NamePokemon } from "../../uiComponents/NamePokemon";
import { NumberPokemon } from "../../uiComponents/NumberPokemon";
import { Tag } from "../../uiComponents/Tag";

const ButtonContainer = styled(Tag)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const NextButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  border: none;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;

const PrevButton = styled(NextButton)`
`;

const PokeImg = styled.img`
  height: 50px;
  width: 50px;
`;

const PokeName = styled(NamePokemon)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  margin: 0;
`

const PokeNumber = styled(NumberPokemon)`
   height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  margin: 0;
  color: black;
`

const Bar = styled.div`
width:2px;
height: 30px;
background-color: black;
`

export function ButtonNextPrev() {
  const handleClick = (id: string | number) => {
    pokemonDetails?.setPokemon(id);
  };
  const pokemonDetails = usePokemonDetails()
  const pokedex = pokemonDetails?.pokemonInfo.pokedex
  const pokemonSpecies = pokemonDetails?.pokemonInfo.pokemonSpecies
  const prev = pokedex.pokemon_entries.find((pokemon) => pokemon.entry_number === pokemonSpecies.pokedex_numbers[0].entry_number-1)
  const next = pokedex.pokemon_entries.find((pokemon) => pokemon.entry_number === pokemonSpecies.pokedex_numbers[0].entry_number+1)
  return (
    <ButtonContainer color="lightgray">
        {pokemonSpecies.pokedex_numbers[0].entry_number > 1 ?
      <PrevButton onClick={() => handleClick(prev.entry_number)}>
        <PokeImg src={prev.entry_number > 649 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${prev.entry_number}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${prev.entry_number}.svg`} alt={prev.pokemon_species.name} />
        <PokeName size='small'>{prev.pokemon_species.name}</PokeName>
        <PokeNumber>N°{prev.entry_number}</PokeNumber>
      </PrevButton> : null}
      <Bar/>
      {pokemonSpecies.pokedex_numbers[0].entry_number < 898 ?
      <NextButton onClick={() => handleClick(next.entry_number)}>
        <PokeImg src={next.entry_number > 649 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${next.entry_number}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${next.entry_number}.svg`} alt={next.pokemon_species.name} />
        <PokeName size='small'>{next.pokemon_species.name}</PokeName>
        <PokeNumber>N°{next.entry_number}</PokeNumber>
      </NextButton> : null}
    </ButtonContainer>
  );
}

// const id = 2

// const pokemon = await getPokemon(id)

// async function getPokemon(pokeNumber: number) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
//   const data = await response.json()
  
//   return data
// }