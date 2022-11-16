import styled from "styled-components";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const PokemonAbility = styled(Tag)`
  border-radius: 30px;
  font-size: 16px;
  text-align: center;
  margin: 0;
`;

const PokeAbilityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function PokeAbility() {
  const pokemonDetails = usePokemonDetails();
  const pokemon = pokemonDetails?.pokemonInfo.pokemon;
  return (
    <Container>
      <Title>Abilities</Title>
      <PokeAbilityContainer>
        {pokemon.abilities.map((abilit: any, i: number) => {
          return (
            <PokemonAbility key={i} color="lightgray">
              {abilit.ability.name}
            </PokemonAbility>
          );
        })}
        {/** https://pokeapi.co/api/v2/pokemon/2 */}
      </PokeAbilityContainer>
    </Container>
  );
}