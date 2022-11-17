import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormCreate = styled.form`
  width: 70%;
  height: 90%;
  border-radius: 5px;
  background-color: #f9f9f9;
  padding: 1em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin-top: 0.4em;
  border-radius: 4px;
  background-color: #f9f9f9;
  border: 1px solid #c9c9c9;
  outline: none;

  transition: 0.2s;

  &:hover {
    border: 1px solid #707070;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  margin-top: 0.4em;
  resize: none;
  border-radius: 4px;
  background-color: #f9f9f9;
  border: 1px solid #c9c9c9;
  outline: none;
  height: 70%;

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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  outline: none;
  border: none;
  cursor: pointer;
`;
