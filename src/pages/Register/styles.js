import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const FormLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  background-color: #f9f9f9;
  gap: 10px;
  min-width: 30%;
  border-radius: 8px;

  a {
    color: blue;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin-top: 0.4em;
  border-radius: 4px;
  background-color: #f9f9f9;
  border: 1px solid #404040;
  transition: 0.2s;

  &:hover {
    border: 1px solid #707070;
  }
`;

export const Submit = styled.input`
  width: 100%;
  padding: 1em;
  color: white;
  border-radius: 4px;
  background-color: blue;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 0.9em;
`;
