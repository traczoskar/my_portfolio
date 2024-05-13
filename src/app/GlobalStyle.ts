import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        height: 100vh;
        margin: 0;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", sans-serif;
        height: 100vh;
        margin: 0;
        word-break: break-word;
        transition: background ease 1s ;
        transition: color ease 0.5s;
        font-size: 18px;
        background: ${({ theme }) => theme.colors.app.background};
        color: ${({ theme }) => theme.colors.textBasic};
        letter-spacing: 0.03em;
        line-height: 1.3;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`;
