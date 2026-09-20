import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.neutral200};
        background-color: ${theme.colors.primary100};
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
        background-color: unset;
        border: none;
    }
    section {
        background: ${theme.colors.primary100};
    }
`