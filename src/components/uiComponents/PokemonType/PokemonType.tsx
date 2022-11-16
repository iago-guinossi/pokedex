import { Tag } from "../Tag";
import { PokemonTypeEnum } from "../../../domain/types";

type PokemonTypeProps = {
  type: PokemonTypeEnum | string;
};

type TypeToColorMapper = (type: PokemonTypeEnum) => string;

const typeToColorMapper: TypeToColorMapper = (type) =>
  ({
    [PokemonTypeEnum.Normal]: "#A8A878",
    [PokemonTypeEnum.Bug]: "#A8B820",
    [PokemonTypeEnum.Water]: "#6890F0",
    [PokemonTypeEnum.Grass]: "#78C850",
    [PokemonTypeEnum.Electric]: "#F8D030",
    [PokemonTypeEnum.Ice]: "#98D8D8",
    [PokemonTypeEnum.Fighting]: "#C03028",
    [PokemonTypeEnum.Poison]: "#A040A0",
    [PokemonTypeEnum.Ground]: "#E0C068",
    [PokemonTypeEnum.Flying]: "#A890F0",
    [PokemonTypeEnum.Psychic]: "#F85888",
    [PokemonTypeEnum.Fire]: "#F08030",
    [PokemonTypeEnum.Rock]: "#B8A038",
    [PokemonTypeEnum.Ghost]: "#705898",
    [PokemonTypeEnum.Dark]: "#705848",
    [PokemonTypeEnum.Dragon]: "#7038F8",
    [PokemonTypeEnum.Steel]: "#B8B8D0",
    [PokemonTypeEnum.Fairy]: "#EE99AC",
  }[type]);

export const PokemonType = function ({ type }: PokemonTypeProps) {
  return <Tag color={typeToColorMapper(type as keyof TypeToColorMapper)}>{type}</Tag>;
};
