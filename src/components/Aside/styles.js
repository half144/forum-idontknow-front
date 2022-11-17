import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AsideArea = styled.aside`
  width: 20%;
  position: sticky;
  height: 500px;
  min-width: 170px;
  top: 20px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #c9c9c9;
`;
export const ListArea = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListItem = styled(NavLink)`
  width: 100%;
  color: blue;
  height: 60px;
  display: flex;
  font-size: 0.8em;
  padding-left: 2em;
  align-items: center;
  border-radius: 5px;
  p {
    padding-left: 0.8em;
    color: black;
  }
  &.active {
    background-color: blue;
    color: white;
    font-weight: bold;
    p {
      color: white;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;
