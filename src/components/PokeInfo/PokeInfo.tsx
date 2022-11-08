import React from "react";
import styled from "styled-components";
import { PokemonTypeEnum } from "../../domain/types";
import { CardInfo } from "../CardInfo";
import { NamePokemon } from "../NamePokemon";
import { NumberPokemon } from "../NumberPokemon";
import { PokemonStats } from "../PokemonStats";
import { PokemonType } from "../PokemonType";

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
`

const PokeEntry = styled.span`
`

export function PokeInfo() {
  return (
    <Container>
        <PokeImg src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
      <Card>
        <NumberPokemon>N°002</NumberPokemon>
        <NamePokemon>Ivysaur</NamePokemon>
        <PokeTypeContainer>
        <PokemonType type={PokemonTypeEnum.Grass} />
        <PokemonType type={PokemonTypeEnum.Grass} />
        </PokeTypeContainer>
        <PokeEntry>Pokedex Entry</PokeEntry>
        <PokeEntry>When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.</PokeEntry>
        <PokemonStats/>
      </Card>
    </Container>
  );
}
