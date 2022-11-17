import styled from "styled-components";

export const ButtonArea = styled.button`
  background-color: ${(props) => (props.risk ? "red" : "green")};
  border: none;
  color: white;
  padding: 0 0.5em;
  cursor: pointer;
`;
