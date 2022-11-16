import styled from "styled-components";
import { PokemonHeight } from "../PokemonHeight";
import { PokemonWeight } from "../PokemonWeight";
import { PokemonXp } from "../PokemonXp";
import { Weaknesses } from "../Weaknesses";

const MiscGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
`;

export function MiscInfo() {
  return (
    <MiscGrid>
      <PokemonHeight />
      <PokemonWeight />
      {/* <Weaknesses/> */}
      <PokemonXp />
    </MiscGrid>
  );
}