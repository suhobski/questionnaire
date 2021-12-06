import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html {
    height: 100%;
  }

  #root {
    height: 100%;
  }
  body {
    height: 100%;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: sans-serif;
    font-size: 20px;
    color: #5a5a65;
  }
  
  ul[class],
  ol[class] {
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
`;
