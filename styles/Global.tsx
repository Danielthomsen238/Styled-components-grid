import { createGlobalStyle } from "styled-components";
import { Global } from "../types/interfaces/StylesInterface";

export const GlobalStyles = createGlobalStyle<Global>`
* {
    list-style: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html, body {
    width: 100%;
    height: 100%;
}

#__next {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${(props) => props.theme.colors.background}
}
`;
