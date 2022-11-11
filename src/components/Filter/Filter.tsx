import React from "react";
import styled from "styled-components";
import { PokemonTypeEnum } from "../../domain/types";
import { useChosePokemon } from "../Provider/ChosePokemonProvider";
import { PokemonType } from "../uiComponents/PokemonType";
import { useId } from "../Provider/ChosePokemonProvider";

const Container = styled.form`
  ${({ theme }) => `
    background-color: ${theme.color.background};
    `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  max-width: 1660px ;
  padding: 0 25px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 10px 10px 15px rgba(255, 255, 255, 0.4);
  margin: 20px;
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

export function Filter() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
  
      <Container onSubmit={handleSubmit}>
        <Text placeholder="Search your Pokemon!" />
        <Submit />
      </Container>
  );
}
