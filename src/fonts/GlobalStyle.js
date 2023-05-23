import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'LINESeedKR-Rg';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
  font-style: normal;
}

  body {
    font-family: 'LINESeedKR-Rg', sans-serif;
  }
`;

export default GlobalStyle;
