import styled from "styled-components";
import { NamePokemon } from "../../NamePokemon";
import { Tag } from "../../uiComponents/Tag";

const PokemonAbility = styled(Tag)`
border-radius: 30px;
`;

const PokeAbilityContainer = styled.div`
display: flex;
flex-direction: row;
`;

export function PokeAbility(){
    return(
        <>
        <NamePokemon>ABILITIES</NamePokemon>
        <PokeAbilityContainer>
          <PokemonAbility color="lightgray">Overgrow</PokemonAbility>
          {/** https://pokeapi.co/api/v2/pokemon/2 */}
          <PokemonAbility color="lightgray">chlorophyll</PokemonAbility>
          {/** https://pokeapi.co/api/v2/pokemon/2 */}
        </PokeAbilityContainer>
        </>
    )
}