import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ChosunGu';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'ChosunGu', sans-serif;
  }
`;

export default GlobalStyle;
