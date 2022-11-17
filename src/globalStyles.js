import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: #f9f9f9;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export default GlobalStyle;
