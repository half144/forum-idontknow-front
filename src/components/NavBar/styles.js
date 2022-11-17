import styled from "styled-components";

export const Header = styled.header`
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 2em;
`;

export const Logo = styled.div`
  height: 60px;
  width: 10%;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Search = styled.div`
  width: 40%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7em 1em;
  margin-top: 0.4em;
  border-radius: 4px;
  border: 2px solid #c9c9c9;
  outline: none;
  transition: 0.2s;
  &:hover {
    border: 2px solid #707070;
  }
`;

export const AuthArea = styled.div`
  height: 60px;
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    cursor: pointer;
  }
`;

export const CreateQuestion = styled.div`
  height: 50px;
  padding: 0 1em;
  display: flex;
  border-radius: 30px;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid blue;
  color: blue;
  transition: 0.2s;

  &:hover {
    color: white;
    background-color: blue;
  }
`;
