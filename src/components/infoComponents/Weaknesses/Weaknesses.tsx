import styled from "styled-components";
import { PokemonTypeEnum } from "../../../domain/types";
import { NamePokemon } from "../../NamePokemon";
import { PokemonTypeRounded } from "../../PokemonTypeRounded";
import { Tag } from "../../uiComponents/Tag";

const WeaknessesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeaknessesType = styled(Tag)`
  border-radius: 30px;
  display: flex;
  flex-direction: row;
`;

export function Weaknesses() {
  return (
    <WeaknessesContainer>
      <NamePokemon>WEAKNESSES</NamePokemon>
      <WeaknessesType color="lightgray">
        <PokemonTypeRounded type={PokemonTypeEnum.Flying} />
        <PokemonTypeRounded type={PokemonTypeEnum.Fire} />
        <PokemonTypeRounded type={PokemonTypeEnum.Psychic} />
        <PokemonTypeRounded type={PokemonTypeEnum.Ice} />
      </WeaknessesType>
    </WeaknessesContainer>
  );
}
