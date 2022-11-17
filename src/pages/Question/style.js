import styled from "styled-components";

export const QuestionContainer = styled.div`
  padding: 2em;
  min-height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2em;
`;

export const QuestionHeader = styled.div`
  border-radius: 5px;
  width: 60%;
  border: 1px solid #c9c9c9;
  background-color: white;
`;

export const OwnerOptions = styled.div`
  color: white;
  padding: 1em;
  display: flex;
  font-size: 0.9em;
  color: #999999;
  border-top: 2px solid #c9c9c9;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  font-weight: bold;
  color: blue;
  min-height: 60px;
  font-size: 1.2em;
  border-bottom: 2px solid #c9c9c9;
  width: 100%;

  p {
    word-wrap: break-word;
  }
`;

export const QuestionDesc = styled.div`
  color: white;
  padding: 1em;
  font-size: 0.9em;
  color: #999999;
`;

export const Username = styled.div`
  color: white;
  padding: 1em;
  display: flex;
  justify-content: end;
  font-size: 0.9em;
  color: #999999;
  border-top: 2px solid #c9c9c9;
`;

export const AwnsersQuestion = styled.div`
  width: 60%;
  display: flex;
  gap: 1em;
  font-size: 0.9em;
  align-items: center;
  flex-direction: column;
`;

export const Awnser = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background-color: white;
`;

export const AwnserContent = styled.div`
  padding: 1em;
`;

export const SendAwnser = styled.form`
  width: 60%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin-top: 0.4em;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #c9c9c9;
  outline: none;

  transition: 0.2s;

  &:hover {
    border: 1px solid #707070;
  }
`;

export const CommentsAwnser = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const SendComment = styled.form``;
