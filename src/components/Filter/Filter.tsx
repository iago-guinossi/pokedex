import React from "react";
import styled from "styled-components";
import { usePokemonDetails } from "../Provider/PokemonDetails";
import { useView } from "../Provider/ViewProvider";
import imgPokeball from '../../assets/pokeball-button.png'

const Container = styled.form`
  ${({ theme }) => `
    background-color: ${theme.color.background};
    `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  max-width: 1650px;
  padding: 0 25px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 10px 10px 15px rgba(255, 255, 255, 0.4);
  margin: 20px;
  @media (max-width: 820px) {
    width: 90%;
  }
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
  background-image: url(${imgPokeball});
  background-color: #ff5350;
  background-size: 20px;
  box-shadow: 15px 15px 20px rgba(255, 83, 80, 0.6);
  cursor: pointer;
`;

export function Filter() {
  const {setView} = useView()
  const pokeDetails = usePokemonDetails();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name) {
      return;
    }
    pokeDetails?.setPokemon(name);
    setView(false)
    setName("");
  }

  const [name, setName] = React.useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Text
        onChange={handleChange}
        value={name}
        placeholder="Search your Pokemon!"
      />
      <Submit />
    </Container>
  );
}