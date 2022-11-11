import React from "react";
import styled from "styled-components";
import { CardInfo } from "../uiComponents/CardInfo";
import { NamePokemon } from "../uiComponents/NamePokemon";
import { NumberPokemon } from "../uiComponents/NumberPokemon";
import { PokemonStats } from "../infoComponents/PokemonStats";
import { PokemonType } from "../uiComponents/PokemonType";
import { PokeAbility } from "../infoComponents/PokeAbility";
import { PokemonEntry } from "../infoComponents/PokemonEntry";
import { MiscInfo } from "../infoComponents/MiscInfo";
import { PokemonEvo } from "../infoComponents/PokemonEvo";
import { ButtonNextPrev } from "../infoComponents/ButtonNextPrev";
import { useChosePokemon } from "../Provider/ChosePokemonProvider";
import { usePokemonDetails } from "../Provider/ChosePokemonProvider/PokemonDetails";

const Container = styled.div`
  background-color: black;
  width: 480px;
  /* height: 1030px; */
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const Card = styled(CardInfo)`
  width: 100%;
  /* height: 910px; */
  background-color: white;
  border-radius: 25px;
  justify-content: flex-start;
  margin-top: 130px;
  padding-top:  130px;
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

const AbilMiscContainer = styled.div``

export function PokeInfo() {
  const pokemonDetails = usePokemonDetails()
  if(pokemonDetails?.pokemonInfo === null)
  return null
  const pokemon = pokemonDetails?.pokemonInfo.pokemon
  const pokemonSpecies = pokemonDetails?.pokemonInfo.pokemonSpecies
  return (
    <Container>
      <PokeImg src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.species.name} />
      <Card>
        <NumberPokemon>N°{pokemonSpecies.pokedex_numbers[0].entry_number}</NumberPokemon>
        <NamePokemon size='large'>{pokemon.species.name}</NamePokemon>
        <PokeTypeContainer>
        {pokemon.types.map((type: any, i: number)=>{
          return <PokemonType key={i} type={type.type.name} />
        })}
        </PokeTypeContainer>
        <PokemonEntry/>
        <AbilMiscContainer>
        <PokeAbility/>
        <MiscInfo/>
        </AbilMiscContainer>
        <PokemonStats />
        <PokemonEvo/>
        <ButtonNextPrev/>
      </Card>
    </Container>
  );
}

// const id = 2

// const pokemon = await getPokemon(id)

// async function getPokemon(pokeNumber: number) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
//   const data = await response.json()
  
//   return data
// }