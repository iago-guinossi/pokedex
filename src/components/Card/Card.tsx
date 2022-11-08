import React from "react";
import styled from "styled-components";
import { PokemonTypeEnum } from "../../domain/types";
import { PokemonType } from "../PokemonType";
import {NumberPokemon} from '../NumberPokemon'
import { NamePokemon } from "../NamePokemon";
import { CardInfo } from "../CardInfo";
import { PokemonStats } from "../PokemonStats";

const CardExt = styled.div`
  background-color: black;
  height: 260px;
  width: 300px;
  margin-top: 20px;
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

export function Card() {
  return (
    <CardExt>
      <PokeImg src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
      <CardInfo>
        <NumberPokemon>N°002</NumberPokemon>
        <NamePokemon>Ivysaur</NamePokemon>
        <PokemonType type={PokemonTypeEnum.Grass} />
      </CardInfo>
    </CardExt>
  );
}
