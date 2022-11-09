import styled from "styled-components";

type NamePokemonProps = {
    size: string;
  };

export const NamePokemon = styled.span<NamePokemonProps>`
    margin-bottom: 15px;
    font-size: ${({size}) => size};
    font-weight: bold;
    font-family: 'arial black';
`