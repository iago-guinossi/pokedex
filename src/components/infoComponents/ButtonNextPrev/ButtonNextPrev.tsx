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
      <PrevButton>
        <PokeImg src="/src/assets/ivysaur.svg" alt="Ivysaur" />
        <PokeName size='small'>Ivysaur</PokeName>
        <PokeNumber>N°002</PokeNumber>
      </PrevButton>
      <Bar/>
      <NextButton>
        <PokeImg src="/src/assets/ivysaur.svg" alt="Ivysaur" />
        <PokeName size='small'>Ivysaur</PokeName>
        <PokeNumber>N°002</PokeNumber>
      </NextButton>
    </ButtonContainer>
  );
}
