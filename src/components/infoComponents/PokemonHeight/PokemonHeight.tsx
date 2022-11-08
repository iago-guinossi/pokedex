import styled from "styled-components";
import { NamePokemon } from "../../NamePokemon";
import { Tag } from "../../uiComponents/Tag";

const HeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Height = styled(Tag)`
  border-radius: 30px;
`;

export function PokemonHeight() {
  return (
    <HeightContainer>
      <NamePokemon>HEIGHT</NamePokemon>
      <Height color="lightgray">10 Decimetros</Height>
      {/** https://pokeapi.co/api/v2/pokemon/2 */}
    </HeightContainer>
  );
}
