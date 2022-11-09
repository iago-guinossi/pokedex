import styled from "styled-components";

type NamePokemonProps = {
  size: "small" | "medium" | "large";
};

type SizeToNumberMapper = (size: "small" | "medium" | "large") => string;

const sizeToNumberMapper: SizeToNumberMapper = (size) =>
  ({
    small: '12px',
    medium: '18px',
    large: '24px',
  }[size]);

export const NamePokemon = styled.span<NamePokemonProps>`
  margin-bottom: 15px;
  font-size: ${({ size }) => sizeToNumberMapper(size)};
  font-weight: bold;
  font-family: "arial black";
  &::first-letter{
    text-transform: uppercase;
  }
`;
