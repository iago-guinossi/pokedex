import styled from "styled-components";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const HeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Height = styled(Tag)`
  border-radius: 30px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

export function PokemonHeight() {
  return (
    <HeightContainer>
      <Title>Height</Title>
      <Height color="lightgray">0.10m{/** 10 Decimetros */}</Height>
      {/** https://pokeapi.co/api/v2/pokemon/2 */}
    </HeightContainer>
  );
}
