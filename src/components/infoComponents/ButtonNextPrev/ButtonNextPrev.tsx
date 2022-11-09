import styled from "styled-components";
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
  return (
    <ButtonContainer color="lightgray">
        {id > 1 ?
      <PrevButton>
        <PokeImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id-1}.svg`} alt="Ivysaur" />
        <PokeName size='small'>Ivysaur</PokeName>
        <PokeNumber>N°002</PokeNumber>
      </PrevButton> : null}
      <Bar/>
      {id < 898 ?
      <NextButton>
        <PokeImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`} alt="Ivysaur" />
        <PokeName size='small'>Ivysaur</PokeName>
        <PokeNumber>N°002</PokeNumber>
      </NextButton> : null}
    </ButtonContainer>
  );
}

const id = 2

const pokemon = await getPokemon(id)

async function getPokemon(pokeNumber: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
  const data = await response.json()
  
  return data
}