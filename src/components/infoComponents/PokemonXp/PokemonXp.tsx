import styled from "styled-components";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const XpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const XpTag = styled(Tag)`
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content:center;
  box-sizing: border-box;
  font-size: 16px;
  padding: 10px;
`;

export function PokemonXp() {
  return (
    <XpContainer>
      <Title>BASE XP</Title>
      <XpTag color="lightgray">142 {/** https://pokeapi.co/api/v2/pokemon/2 */}
      </XpTag>
    </XpContainer>
  );
}