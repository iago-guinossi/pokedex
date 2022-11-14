import { useEffect } from "react";
import styled from "styled-components";
import { GetPokemonResponse } from "../../domain/pokemon";
import { usePokemonList } from "../Provider/ListPokemonProvider";
import { usePokemonDetails } from "../Provider/PokemonDetails/PokemonDetails";
import { CardInfo } from "../uiComponents/CardInfo";
import { NamePokemon } from "../uiComponents/NamePokemon";
import { NumberPokemon } from "../uiComponents/NumberPokemon";
import { PokemonType } from "../uiComponents/PokemonType";

const CardExt = styled.div`
  height: 260px;
  width: 300px;
  margin: 20px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
`;

const PokeImg = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 0;
  left: 100px;
`;

const PokeTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1700px;
`;

const CardInt = styled(CardInfo)`
  padding: 70px 0 30px 0;
`;

type PokemonCardProps = {
  pokemon: GetPokemonResponse;
  id: number;
};

function PokemonCard({ pokemon, id }: PokemonCardProps) {
  const pokeDetails = usePokemonDetails();

  const handleClick = (id: string | number) => {
    pokeDetails?.setPokemon(id);
  };

  return (
    <CardExt key={id} onClick={() => handleClick(id + 1)}>
      <PokeImg
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.species.name}
      />
      <CardInt>
        <NumberPokemon>N°{id}</NumberPokemon>
        <NamePokemon size="medium">{pokemon.species.name}</NamePokemon>
        <PokeTypeContainer>
          {pokemon.types.map((type: any, i: number) => {
            return <PokemonType key={i} type={type.type.name} />;
          })}
        </PokeTypeContainer>
      </CardInt>
    </CardExt>
  );
}

// TODO: Refactor to List()
export function List() {
  const { nextPage, isLoading, pokeList } = usePokemonList();

  if (isLoading || (pokeList || []).length < 1)
    return (
      <>
        <Container>carrregfamdop</Container>
        <button onClick={nextPage}>proxima pagina</button>
      </>
    );

  return (
    <Container>
      {pokeList?.map((poke) => (
        <PokemonCard pokemon={poke} key={poke.name} id={poke.id} />
      ))}
      <button onClick={nextPage}>proxima pagina</button>
    </Container>
  );
}
