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
      <Title>Base xp</Title>
      <XpTag color="lightgray">{pokemon.base_experience} {/** https://pokeapi.co/api/v2/pokemon/2 */}
      </XpTag>
    </XpContainer>
  );
}

const id = 2

const pokemon = await getPokemon(id)

async function getPokemon(pokeNumber: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
  const data = await response.json()
  
  return data
}