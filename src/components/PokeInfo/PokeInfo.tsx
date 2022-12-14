import styled from "styled-components";
import { Type } from "../../domain/pokemon";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ButtonNextPrev } from "../infoComponents/ButtonNextPrev";
import { MiscInfo } from "../infoComponents/MiscInfo";
import { PokeAbility } from "../infoComponents/PokeAbility";
import { PokemonEntry } from "../infoComponents/PokemonEntry";
import { PokemonEvo } from "../infoComponents/PokemonEvo";
import { PokemonStats } from "../infoComponents/PokemonStats";
import { usePokemonDetails } from "../Provider/PokemonDetails/PokemonDetails";
import { useView } from "../Provider/ViewProvider";
import { CardInfo } from "../uiComponents/CardInfo";
import { NamePokemon } from "../uiComponents/NamePokemon";
import { NumberPokemon } from "../uiComponents/NumberPokemon";
import { PokemonType } from "../uiComponents/PokemonType";

const Container = styled.div`
  max-width: 440px;
  display: block;
  @media (max-width: 820px) {
    max-width: 100%;
  }
`;

const LoadContainer = styled.div`
  width: 480px;
  padding: 20px 0;
`;

const LoadCard = styled(CardInfo)`
  padding: 30px 0;
`;

const Card = styled(CardInfo)`
  width: 100%;
  background-color: white;
  border-radius: 25px;
  justify-content: flex-start;
  margin-top: 130px;
  padding-top: 130px;
`;

const ImgContainer = styled.div`
  margin-bottom: -230px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const PokeImg = styled.img`
  height: 230px;
  width: 230px;
`;

const PokeTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AbilMiscContainer = styled.div``;

const Close = styled.div`
  align-self: flex-end;
  margin-top: -100px;
  margin-right: 15px;
  position: absolute;
  cursor: pointer;
`;

export function PokeInfo() {
  const pokemonDetails = usePokemonDetails();
  const pokemon = pokemonDetails?.pokemonInfo?.pokemon;
  const pokemonSpecies = pokemonDetails?.pokemonInfo?.pokemonSpecies;
  const { view, setView } = useView();
  const size = useWindowSize();
  const handleClick = () => {
    pokemonDetails?.setPokemon(null);
    setView(true);
  };

  if (size.width < 821 && view) {
    return null;
  }

  if (pokemonDetails?.pokemonInfo === null) return null;

  if (pokemonDetails?.isLoading)
    return (
      <LoadContainer>
        {" "}
        <LoadCard>Loading Pokemon!</LoadCard>{" "}
      </LoadContainer>
    );

  return (
    <Container>
      <ImgContainer>
        <PokeImg
          src={
            pokemonSpecies.pokedex_numbers[0].entry_number > 649
              ? pokemon.sprites.front_default
              : pokemon.sprites.other.dream_world.front_default
          }
          alt={pokemon.species.name}
        />
      </ImgContainer>
      <Card>
        <Close onClick={() => handleClick()}>
          <NamePokemon size="large">X</NamePokemon>
        </Close>
        <NumberPokemon>
          N??{pokemonSpecies.pokedex_numbers[0].entry_number}
        </NumberPokemon>
        <NamePokemon size="large">{pokemon.species.name}</NamePokemon>
        <PokeTypeContainer>
          {pokemon.types.map((type: Type, i: number) => {
            return <PokemonType key={i} type={type.type.name} />;
          })}
        </PokeTypeContainer>
        <PokemonEntry />
        <AbilMiscContainer>
          <PokeAbility />
          <MiscInfo />
        </AbilMiscContainer>
        <PokemonStats />
        <PokemonEvo />
        <ButtonNextPrev />
      </Card>
    </Container>
  );
}
