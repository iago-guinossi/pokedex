import React from "react";
import styled from "styled-components";
import { PokemonTypeEnum } from "../../domain/types";
import { PokemonType } from "../uiComponents/PokemonType";
import {NumberPokemon} from '../uiComponents/NumberPokemon'
import { NamePokemon } from "../uiComponents/NamePokemon";
import { CardInfo } from "../uiComponents/CardInfo";

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

const PokeTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


export function Card() {
  return (
    <CardExt>
      <PokeImg src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.species.name}/>
      <CardInfo>
        <NumberPokemon>N°{id}</NumberPokemon>
        <NamePokemon size='medium'>{pokemon.species.name}</NamePokemon>
        <PokeTypeContainer>
        {pokemon.types.map((type: any, i: number)=>{
          return <PokemonType key={i} type={type.type.name} />
        })}
        </PokeTypeContainer>
      </CardInfo>
    </CardExt>
  );
}

const id = 2

const pokemon = await getPokemon(id)

async function getPokemon(pokeNumber: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
  const data = await response.json()
  
  return data
}