import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box; 
    }

    html {
        font-size: 62.5%;
        font-family: "Kumbh Sans";
    }

    body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #fff;   
    }
`;

export default GlobalStyles;
