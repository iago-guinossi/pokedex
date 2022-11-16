import styled from "styled-components";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
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
  const pokemonDetails = usePokemonDetails();
  const pokemon = pokemonDetails?.pokemonInfo.pokemon;
  return (
    <HeightContainer>
      <Title>Height</Title>
      <Height color="lightgray">
        {pokemon.height / 10}m{/** 10 Decimetros */}
      </Height>
      {/** https://pokeapi.co/api/v2/pokemon/2 */}
    </HeightContainer>
  );
}