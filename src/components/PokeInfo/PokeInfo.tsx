import React from "react";
import styled from "styled-components";
import { PokemonTypeEnum } from "../../domain/types";
import { CardInfo } from "../uiComponents/CardInfo";
import { NamePokemon } from "../NamePokemon";
import { NumberPokemon } from "../NumberPokemon";
import { PokemonStats } from "../PokemonStats";
import { PokemonType } from "../PokemonType";
import { Tag } from "../uiComponents/Tag";

const Container = styled.div`
  background-color: black;
  width: 480px;
  height: 1030px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const Card = styled(CardInfo)`
  width: 100%;
  height: 910px;
  background-color: white;
  border-radius: 25px;
  justify-content: flex-start;
  padding-top: 150px;
`;

const PokeImg = styled.img`
  position: absolute;
  height: 230px;
  width: 230px;
  top: 0;
  left: 125px;
`;

const PokeTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PokeEntry = styled.span``;

const PokeAbility = styled(Tag)`
  border-radius: 30px;
`;

const PokeAbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Height = styled(Tag)`
border-radius: 30px;
`

const WeightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Weight = styled(Tag)`
border-radius: 30px;
`

export function PokeInfo() {
  return (
    <Container>
      <PokeImg src="/src/assets/ivysaur.svg" alt="Ivysaur" />
      <Card>
        <NumberPokemon>N°002</NumberPokemon>
        <NamePokemon>Ivysaur</NamePokemon>
        <PokeTypeContainer>
          <PokemonType type={PokemonTypeEnum.Grass} />
          <PokemonType type={PokemonTypeEnum.Grass} />
        </PokeTypeContainer>
        <NamePokemon>Pokedex Entry</NamePokemon>
        <PokeEntry>
          When the bulb on\nits back grows\nlarge, it appears\fto lose
          the\nability to stand\non its hind legs.
        </PokeEntry>{" "}
        {/** https://pokeapi.co/api/v2/pokemon-species/{id or name}/ */}
        <PokeAbilityContainer>
          <PokeAbility color="lightgray">Overgrow</PokeAbility>{" "}
          {/** https://pokeapi.co/api/v2/pokemon/2 */}
          <PokeAbility color="lightgray">chlorophyll</PokeAbility>{" "}
          {/** https://pokeapi.co/api/v2/pokemon/2 */}
        </PokeAbilityContainer>
        <SizeContainer>
          <HeightContainer>
            <NamePokemon>Height</NamePokemon>
            <Height color='lightgray'>10 Decimetros</Height>
             {/** https://pokeapi.co/api/v2/pokemon/2 */}
          </HeightContainer>
          <WeightContainer>
            <NamePokemon>Width</NamePokemon>
            <Weight color='lightgray'>130 hectogramas</Weight>
             {/** https://pokeapi.co/api/v2/pokemon/2 */}
          </WeightContainer>
        </SizeContainer>
        <PokemonStats />
      </Card>
    </Container>
  );
}
