import styled from "styled-components";
import { NamePokemon } from "../../NamePokemon";

const PokeEntry = styled.span``;

export function PokemonEntry() {
  return (
    <>
      <NamePokemon>Pokedex Entry</NamePokemon>
      <PokeEntry>
        When the bulb on\nits back grows\nlarge, it appears\fto lose
        the\nability to stand\non its hind legs.
      </PokeEntry>
      {/** https://pokeapi.co/api/v2/pokemon-species/{id or name}/ */}
    </>
  );
}
