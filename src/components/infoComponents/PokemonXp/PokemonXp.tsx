import styled from "styled-components";
import { NamePokemon } from "../../NamePokemon";
import { Tag } from "../../uiComponents/Tag";

const XpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const XpTag = styled(Tag)`
  border-radius: 30px;
  display: flex;
  flex-direction: row;
`;

export function PokemonXp() {
  return (
    <XpContainer>
      <NamePokemon>BASE XP</NamePokemon>
      <XpTag color="lightgray">142 {/** https://pokeapi.co/api/v2/pokemon/2 */}
      </XpTag>
    </XpContainer>
  );
}