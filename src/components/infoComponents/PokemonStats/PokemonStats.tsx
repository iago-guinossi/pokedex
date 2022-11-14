import styled from "styled-components";
import { TagRounded } from "../../uiComponents/TagRounded";
import { PokemonStatsEnum } from "../../../domain/stats";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";
import { useChosePokemon } from "../../Provider/ListPokemonProvider";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";

type StatsToColorMapper = (stats: PokemonStatsEnum) => string;

const statsToColorMapper: StatsToColorMapper = (stats) =>
  ({
    [PokemonStatsEnum['hp']]: "#ff0000",
    [PokemonStatsEnum['attack']]: "#f08030",
    [PokemonStatsEnum['defense']]: "#f8d030",
    [PokemonStatsEnum['special-attack']]: "#6890f0",
    [PokemonStatsEnum['special-defense']]: "#78c850",
    [PokemonStatsEnum['speed']]: "#f85888",
    [PokemonStatsEnum['Total']]: "#fae078",
  }[stats]);

const Container = styled(Tag)`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  margin: 5px;
  box-sizing: border-box;
  padding: 5px 5px;
`;

const StatsBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Stats = styled(TagRounded)`
  color: black;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const id = 2

// const pokemon = await getPokemon(id)

// async function getPokemon(pokeNumber: number) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
//   const data = await response.json()
  
//   return data
// }

// console.log(pokemon.stats)

// const total = pokemon.stats.reduce((total, stat) => total + stat, 0)

export const PokemonStats = function () {
  const pokemonDetails = usePokemonDetails()
  const pokemon = pokemonDetails?.pokemonInfo.pokemon
  let total = 0
  pokemon.stats.forEach((stats: any) => total += stats.base_stat)
  return (
    <StatsContainer>
      <Title>Stats</Title>
      <StatsBar>
        {pokemon.stats.map((stats: any, i: number)=>{
          return(
            <Container key={i} color="lightgray">
              <TagRounded color={statsToColorMapper(PokemonStatsEnum[stats.stat.name])}>
                {PokemonStatsEnum[stats.stat.name]}
              </TagRounded>
              <Stats color="transparent">{stats.base_stat}</Stats>
            </Container>
          )
        })}

        <Container color="lightblue">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum['Total'])}>
            {PokemonStatsEnum['Total']}
          </TagRounded>
          <Stats color="transparent">{total}</Stats>
        </Container>
        {/* <Container color="lightgray">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum.Hp)}>
            {PokemonStatsEnum.Hp}
          </TagRounded>
          <Stats color="transparent">{pokemon.stats.map((stats, index)=>{
            stats.stat.name === 'hp' ? stats.base_stat : null
          })}</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum.Atk)}>
            {PokemonStatsEnum.Atk}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum.Def)}>
            {PokemonStatsEnum.Def}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum.Spatk)}>
            {PokemonStatsEnum.Spatk}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum.Spdef)}>
            {PokemonStatsEnum.Spdef}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum.Speed)}>
            {PokemonStatsEnum.Speed}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightblue">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum.Total)}>
            {PokemonStatsEnum.Total}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container> */}
      </StatsBar>
    </StatsContainer>
  );
};
