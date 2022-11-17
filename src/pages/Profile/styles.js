import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 4em;
`;

export const HeaderProfile = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5em;
  color: black;
`;

export const QuestionsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 5px;
`;

export const HeaderQuestions = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 1.3em;
  margin: 1em 0;
`;
