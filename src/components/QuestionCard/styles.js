import styled from "styled-components";

export const QuestionArea = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background-color: white;
`;

export const Title = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  font-size: 0.9em;
  width: 100%;
  border-bottom: 1px solid #c9c9c9;
`;

export const Description = styled.div`
  height: 70%;
  display: flex;
  font-size: 0.8em;
  color: #707070;
  padding: 1em;
  width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
