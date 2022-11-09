import styled from "styled-components";
import { Title } from "../../uiComponents/Title";

const PokeEntry = styled.span`
padding: 0 15px;
text-align: center;`
  

export function PokemonEntry() {
  return (
    <>
      <Title>Pokedex Entry</Title>
      <PokeEntry>
        {('When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.').replace('\n', '').replace('\f', '')}
      </PokeEntry>
      {/** https://pokeapi.co/api/v2/pokemon-species/{id or name}/ */}
    </>
  );
}
