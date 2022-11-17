import styled from "styled-components";
import { FlavorTextEntry } from "../../../domain/pokemonSpecies";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
import { Title } from "../../uiComponents/Title";

const PokeEntry = styled.span`
  padding: 0 15px;
  text-align: center;
`;

const ContainerEntry = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 820px){
    max-width: 100%;
  }
`;

export function PokemonEntry() {
  const pokemonDetails = usePokemonDetails();
  const pokemonSpecies = pokemonDetails?.pokemonInfo.pokemonSpecies;
  const entry = pokemonSpecies.flavor_text_entries.find(
    (entries: FlavorTextEntry) => entries.language.name === "en"
  );

  return (
    <ContainerEntry>
      <Title>Pokedex Entry</Title>
      <PokeEntry>
        {entry.flavor_text.replace("\n", "").replace("\f", "")}
      </PokeEntry>
      {/** https://pokeapi.co/api/v2/pokemon-species/{id or name}/ */}
    </ContainerEntry>
  );
}