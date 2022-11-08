import React from "react";
import styled from "styled-components";
import { PokemonTypeEnum } from "../../domain/types";
import { CardInfo } from "../uiComponents/CardInfo";
import { NamePokemon } from "../NamePokemon";
import { NumberPokemon } from "../NumberPokemon";
import { PokemonStats } from "../PokemonStats";
import { PokemonType } from "../PokemonType";
import { Tag } from "../uiComponents/Tag";
import { PokemonTypeRounded } from "../PokemonTypeRounded";
import { TagRounded } from "../uiComponents/TagRounded";
import { Weaknesses } from "../infoComponents/Weaknesses";
import { PokeAbility } from "../infoComponents/PokeAbility";
import { PokemonEntry } from "../infoComponents/PokemonEntry";
import { MiscInfo } from "../infoComponents/MiscInfo";
import { PokemonEvo } from "../infoComponents/PokemonEvo";
import { ButtonNextPrev } from "../infoComponents/ButtonNextPrev";

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
        <PokemonEntry/>
        <PokeAbility/>
        <MiscInfo/>
        <PokemonStats />
        <PokemonEvo/>
        <ButtonNextPrev/>
      </Card>
    </Container>
  );
}