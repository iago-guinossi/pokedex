import styled from "styled-components";
import { TagRounded } from "../uiComponents/TagRounded";
import { PokemonStatsEnum } from "../../domain/stats";
import { Tag } from "../uiComponents/Tag";
import { Title } from "../uiComponents/Title";

type PokemonStatsProps = {
  stats: PokemonStatsEnum;
};

type TypeToColorMapper = (stats: PokemonStatsEnum) => string;

const typeToColorMapper: TypeToColorMapper = (stats) =>
  ({
    [PokemonStatsEnum.Hp]: "#ff0000",
    [PokemonStatsEnum.Atk]: "#f08030",
    [PokemonStatsEnum.Def]: "#f8d030",
    [PokemonStatsEnum.Spatk]: "#6890f0",
    [PokemonStatsEnum.Spdef]: "#78c850",
    [PokemonStatsEnum.Speed]: "#f85888",
    [PokemonStatsEnum.Total]: "#fae078",
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
  return (
    <StatsContainer>
      <Title>Stats</Title>
      <StatsBar>
        <Container color="lightgray">
          <TagRounded color={typeToColorMapper(PokemonStatsEnum.Hp)}>
            {PokemonStatsEnum.Hp}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={typeToColorMapper(PokemonStatsEnum.Atk)}>
            {PokemonStatsEnum.Atk}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={typeToColorMapper(PokemonStatsEnum.Def)}>
            {PokemonStatsEnum.Def}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={typeToColorMapper(PokemonStatsEnum.Spatk)}>
            {PokemonStatsEnum.Spatk}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={typeToColorMapper(PokemonStatsEnum.Spdef)}>
            {PokemonStatsEnum.Spdef}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightgray">
          <TagRounded color={typeToColorMapper(PokemonStatsEnum.Speed)}>
            {PokemonStatsEnum.Speed}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
        <Container color="lightblue">
          <TagRounded color={typeToColorMapper(PokemonStatsEnum.Total)}>
            {PokemonStatsEnum.Total}
          </TagRounded>
          <Stats color="transparent">120</Stats>
        </Container>
      </StatsBar>
    </StatsContainer>
  );
};
