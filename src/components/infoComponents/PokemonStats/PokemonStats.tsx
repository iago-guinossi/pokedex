import styled from "styled-components";
import { Stat } from "../../../domain/pokemon";
import { PokemonStatsEnum } from "../../../domain/stats";
import { usePokemonDetails } from "../../Provider/PokemonDetails/PokemonDetails";
import { Tag } from "../../uiComponents/Tag";
import { TagRounded } from "../../uiComponents/TagRounded";
import { Title } from "../../uiComponents/Title";

type StatsToColorMapper = (stats: PokemonStatsEnum) => string;

const statsToColorMapper: StatsToColorMapper = (stats) =>
  ({
    [PokemonStatsEnum["hp"]]: "#ff0000",
    [PokemonStatsEnum["attack"]]: "#f08030",
    [PokemonStatsEnum["defense"]]: "#f8d030",
    [PokemonStatsEnum["special-attack"]]: "#6890f0",
    [PokemonStatsEnum["special-defense"]]: "#78c850",
    [PokemonStatsEnum["speed"]]: "#f85888",
    [PokemonStatsEnum["Total"]]: "#fae078",
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

export const PokemonStats = function () {
  const pokemonDetails = usePokemonDetails();
  const pokemon = pokemonDetails?.pokemonInfo.pokemon;
  let total = 0;
  pokemon.stats.forEach((stats: Stat) => (total += stats.base_stat));
  return (
    <StatsContainer>
      <Title>Stats</Title>
      <StatsBar>
        {pokemon.stats.map((stats: Stat, i: number) => {
          return (
            <Container key={i} color="lightgray">
              <TagRounded
                color={statsToColorMapper(PokemonStatsEnum[stats.stat.name])}
              >
                {PokemonStatsEnum[stats.stat.name]}
              </TagRounded>
              <Stats color="transparent">{stats.base_stat}</Stats>
            </Container>
          );
        })}

        <Container color="lightblue">
          <TagRounded color={statsToColorMapper(PokemonStatsEnum["Total"])}>
            {PokemonStatsEnum["Total"]}
          </TagRounded>
          <Stats color="transparent">{total}</Stats>
        </Container>
      </StatsBar>
    </StatsContainer>
  );
};
