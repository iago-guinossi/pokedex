import styled from "styled-components";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const PokemonAbility = styled(Tag)`
border-radius: 30px;
font-size: 16px;
text-align: center;
margin: 0;
`;

const PokeAbilityContainer = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
row-gap: 10px;
column-gap: 10px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export function PokeAbility(){
    return(
        <Container>
        <Title>Abilities</Title>
        <PokeAbilityContainer>
          <PokemonAbility color="lightgray">Overgrow</PokemonAbility>
          {/** https://pokeapi.co/api/v2/pokemon/2 */}
          <PokemonAbility color="lightgray">chlorophyll</PokemonAbility>
          {/** https://pokeapi.co/api/v2/pokemon/2 */}
        </PokeAbilityContainer>
        </Container>
    )
}