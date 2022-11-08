import styled from "styled-components";
import { NamePokemon } from "../../NamePokemon";
import { NumberPokemon } from "../../NumberPokemon";
import { Tag } from "../../uiComponents/Tag";

const ButtonContainer = styled(Tag)`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const NextButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PrevButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content:center;
`;

const PokeImg = styled.img`
  height: 50px;
  width: 50px;
`;
export function ButtonNextPrev() {
  return (
    <ButtonContainer color="lightgray">
      <PrevButton>
        <PokeImg src="/src/assets/ivysaur.svg" alt="Ivysaur" />
        <NamePokemon>Ivysaur</NamePokemon>
        <NumberPokemon>N°002</NumberPokemon>
      </PrevButton>
      <NextButton>
        <PokeImg src="/src/assets/ivysaur.svg" alt="Ivysaur" />
        <NamePokemon>Ivysaur</NamePokemon>
        <NumberPokemon>N°002</NumberPokemon>
      </NextButton>
    </ButtonContainer>
  );
}
