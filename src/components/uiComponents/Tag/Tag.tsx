import styled from "styled-components";

type TagProps = {
  color: string;
};

export const Tag = styled.span<TagProps>`
  text-transform: uppercase;
  font-size: 12px;
  background-color: ${({ color }) => color};
  padding: 8px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-family: "arial black";
  border: none;
  border-radius: 8px;
  margin: 0 5px;
`;
