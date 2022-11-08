import React from "react";
import styled from "styled-components";
import { PokemonTypeEnum } from "../../domain/types";
import { PokemonType } from "../PokemonType";

const Container = styled.form`
  ${({ theme }) => `
    background-color: ${theme.color.background};
    `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 950px;
  padding: 0 25px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 10px 10px 15px rgba(255, 255, 255, 0.4);
`;

const Text = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: 90%;
  &::placeholder {
    color: #a199999c;
  }
`;

const Submit = styled.button`
  border-radius: 15px;
  height: 45px;
  width: 45px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/src/assets/pokeball-button.png);
  background-color: #ff5350;
  background-size: 20px;
  box-shadow: 15px 15px 20px rgba(255, 83, 80, 0.6);
`;

const Container2 = styled.div``;

export function Filter() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container2>
      <Container onSubmit={handleSubmit}>
        <Text placeholder="Search your Pokemon!" />
        <Submit />
      </Container>
      <PokemonType type={PokemonTypeEnum.Normal} />
      <PokemonType type={PokemonTypeEnum.Bug} />
      <PokemonType type={PokemonTypeEnum.Water} />
      <PokemonType type={PokemonTypeEnum.Grass} />
      <PokemonType type={PokemonTypeEnum.Electric} />
      <PokemonType type={PokemonTypeEnum.Ice} />
      <PokemonType type={PokemonTypeEnum.Fighting} />
      <PokemonType type={PokemonTypeEnum.Poison} />
      <PokemonType type={PokemonTypeEnum.Ground} />
      <PokemonType type={PokemonTypeEnum.Flying} />
      <PokemonType type={PokemonTypeEnum.Psychic} />
      <PokemonType type={PokemonTypeEnum.Fire} />
      <PokemonType type={PokemonTypeEnum.Rock} />
      <PokemonType type={PokemonTypeEnum.Ghost} />
      <PokemonType type={PokemonTypeEnum.Dark} />
      <PokemonType type={PokemonTypeEnum.Dragon} />
      <PokemonType type={PokemonTypeEnum.Steel} />
      <PokemonType type={PokemonTypeEnum.Fairy} />
    </Container2>
  );
}
