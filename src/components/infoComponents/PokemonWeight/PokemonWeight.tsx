import styled from "styled-components";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
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
  const pokemonDetails = usePokemonDetails();
  const pokemon = pokemonDetails?.pokemonInfo.pokemon;
  return (
    <WeightContainer>
      <Title>Weight</Title>
      <Weight color="lightgray">
        {pokemon.weight / 10}Kg {/** 130 hectogramas */}
      </Weight>
      {/** https://pokeapi.co/api/v2/pokemon/2 */}
    </WeightContainer>
  );
}
