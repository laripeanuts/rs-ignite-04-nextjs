import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    vertical-align:baseline;
    list-style:none;
  }

  html, body #__next {
    min-height: 100vh;
    width: 100%;
  }

  body {
    font-size: 16px;
    font-size: 100%;
    list-style-type: none;
    font-family: "Roboto", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
