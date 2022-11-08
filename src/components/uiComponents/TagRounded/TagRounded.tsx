import styled from "styled-components";

type TagProps = {
  color: string;
};

export const TagRounded = styled.span<TagProps>`
 display: flex;
 justify-content: center;
 align-items: center;
 text-transform: uppercase;
  font-size: 10px;
  background-color: ${({color}) => color};
  padding: 5px;
  color: white;
  font-weight: bold;
  font-family:'arial black';
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
`;