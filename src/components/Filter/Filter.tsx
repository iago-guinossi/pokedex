import React from "react";
import "./Filter.css";
import styled from "styled-components";

const ContainerForm = styled.form`
  background-color: white;
  display: flex;
`;

const TextInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;

  &::placeholder {
    color: gray;
  }
`;

const SubmitButton = styled.button`
  border-radius: 100%;
  height: 25px;
  width: 25px;
`;

export function Filter() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <ContainerForm onSubmit={(e) => {}}>
      <TextInput placeholder="Search your Pokemon" />
      <SubmitButton />
    </ContainerForm>
  );
}
