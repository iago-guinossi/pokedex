import styled from "styled-components";
import { NamePokemon } from "../../NamePokemon";
import { Tag } from "../../uiComponents/Tag";

const WeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Weight = styled(Tag)`
  border-radius: 30px;
`;

export function PokemonWeight() {
  return (
    <WeightContainer>
      <NamePokemon>WIDTH</NamePokemon>
      <Weight color="lightgray">130 hectogramas</Weight>
      {/** https://pokeapi.co/api/v2/pokemon/2 */}
    </WeightContainer>
  );
}
