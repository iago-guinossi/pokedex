import styled from "styled-components";
import { PokemonTypeEnum } from "../../../domain/types";
import { PokemonTypeRounded } from "../PokemonTypeRounded";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const WeaknessesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeaknessesType = styled(Tag)`
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40px;
  box-sizing: border-box;
  width: 100%;
`;

export function Weaknesses() {
  return (
    <WeaknessesContainer>
      <Title>WEAKNESSES</Title>
      <WeaknessesType color="lightgray">
        <PokemonTypeRounded type={PokemonTypeEnum.Flying} />
        <PokemonTypeRounded type={PokemonTypeEnum.Fire} />
        <PokemonTypeRounded type={PokemonTypeEnum.Psychic} />
        <PokemonTypeRounded type={PokemonTypeEnum.Ice} />
      </WeaknessesType>
    </WeaknessesContainer>
  );
}
