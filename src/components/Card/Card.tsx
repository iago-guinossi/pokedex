import { useEffect } from "react";
import styled from "styled-components";
import { GetPokemonResponse } from "../../domain/pokemon";
import { useWindowSize } from "../../hooks/useWindowSize";
import { usePokemonList } from "../Provider/ListPokemonProvider";
import { usePokemonDetails } from "../Provider/PokemonDetails/PokemonDetails";
import { useView } from "../Provider/ViewProvider";
import { CardInfo } from "../uiComponents/CardInfo";
import { NamePokemon } from "../uiComponents/NamePokemon";
import { NumberPokemon } from "../uiComponents/NumberPokemon";
import { PokemonType } from "../uiComponents/PokemonType";

const CardExt = styled.div`
  height: 260px;
  width: 300px;
  margin: 15px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const AllCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1650px;
  justify-content: space-around;
`;

const CardInt = styled(CardInfo)`
  padding: 70px 0 30px 0;
`;

const Button = styled(CardInfo)`
  padding: 30px 0;
  margin: 15px 0;
  cursor: pointer;
`;
const LoadContainer = styled.div`
  width: 480px;
  padding: 20px 0;
`;

const LoadCard = styled(CardInfo)`
  padding: 30px 0;
`;

type PokemonCardProps = {
  pokemon: GetPokemonResponse;
  id: number;
};

function PokemonCard({ pokemon, id }: PokemonCardProps) {
  const pokeDetails = usePokemonDetails();
  const { setView } = useView();

  const handleClick = (id: string | number) => {
    pokeDetails?.setPokemon(id);
    setView(false);
  };

  return (
    <CardExt key={id} onClick={() => handleClick(id)}>
      <PokeImg
        src={
          id > 649
            ? pokemon.sprites.front_default
            : pokemon.sprites.other.dream_world.front_default
        }
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

export function List() {
  const { nextPage, isLoading, pokeList, prevPage, page } = usePokemonList();
  const { view } = useView();
  useEffect(() => {
    nextPage();
  }, []);

  const size = useWindowSize();

  if (size.width < 821 && !view) {
    return null;
  }

  if (isLoading)
    return (
      <LoadContainer>
        {" "}
        <LoadCard>Loading Pokemon!</LoadCard>{" "}
      </LoadContainer>
    );

  return (
    <CardContainer>
      <AllCards>
        {pokeList?.map((poke) =>
          poke === null ? null : (
            <PokemonCard pokemon={poke} key={poke.name} id={poke.id} />
          )
        )}
      </AllCards>
      {page.offset > 898 ? null : (
        <Button onClick={nextPage}>Next Page!</Button>
      )}

      {page.offset === 20 ? null : (
        <Button onClick={prevPage}>Previous Page!</Button>
      )}
    </CardContainer>
  );
}
