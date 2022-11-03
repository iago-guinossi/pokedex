import React, { AnchorHTMLAttributes } from "react";
import "./Filter.css";
import styled from "styled-components";

const Container = styled.form`
${({ theme }) => `
    background-color: ${theme.color.background};
    display: flex;
  `}
`;

const Container2 = styled(Container)``

const Text = styled.input`
  background-color: transparent;
  outline: none;
  border: none;

  &::placeholder {
    color: gray;
  }
`;

const Submit = styled.button`
  border-radius: 100%;
  height: 25px;
  width: 25px;
`;

export function Filter() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Text placeholder="Search your Pokemon" />
      <Submit />
    </Container>
  );
}
