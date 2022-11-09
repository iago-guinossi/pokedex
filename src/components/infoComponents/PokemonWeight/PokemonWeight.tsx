import styled from "styled-components";
import { NamePokemon } from "../../uiComponents/NamePokemon";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const WeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Weight = styled(Tag)`
  border-radius: 30px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  `;

export function PokemonWeight() {
  return (
    <WeightContainer>
      <Title>Width</Title>
      <Weight color="lightgray">1.3Kg {/** 130 hectogramas */}</Weight>
      {/** https://pokeapi.co/api/v2/pokemon/2 */}
    </WeightContainer>
  );
}
