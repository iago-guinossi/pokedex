import styled from "styled-components";
import { PokemonEntry } from "../../../domain/pokedex";
import { Chain } from "../../../domain/pokemonEvo";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
import { Title } from "../../uiComponents/Title";

const Img = styled.img`
  height: 70px;
  width: 70px;
  margin: 10px;
  cursor: pointer;
`;
const EvoContainer = styled.div`
  width: 100%;
`;

const Evolution = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function renderEvo(evoList: Chain) {
  const pokemonDetails = usePokemonDetails();
  const pokedex = pokemonDetails?.pokemonInfo.pokedex;
  const sprite = pokedex.pokemon_entries.find(
    (poke: PokemonEntry) => poke.pokemon_species.name === evoList.species.name
  );

  const handleClick = (id: string | number) => {
    pokemonDetails?.setPokemon(id);
  };

  return (
    <Evolution key={sprite.entry_number}>
      <Img
        onClick={() => handleClick(sprite.entry_number)}
        src={
          sprite.entry_number > 649
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprite.entry_number}.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${sprite.entry_number}.svg`
        }
        alt={sprite.pokemon_species.name}
      />
      {evoList.evolves_to.length > 0
        ? evoList.evolves_to.map((evo) => renderEvo(evo))
        : null}
    </Evolution>
  );
}

export function PokemonEvo() {
  const pokemonDetails = usePokemonDetails();
  const evolutionChain = pokemonDetails?.pokemonInfo.evolutionChain;
  return evolutionChain.chain.evolves_to.length > 0 ? (
    <>
      <Title>Evolution</Title>
      <EvoContainer>{renderEvo(evolutionChain.chain)}</EvoContainer>
    </>
  ) : (
    <></>
  );
}