import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color:rgba(255,255,255,0);
    user-select: none;
    -webkit-touch-callout: none;
    font-family: SF-Pro,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  @font-face {
    font-family: SF-Pro;
    src: url('../public/fonts/SF-Pro-Display-Semibold.otf') format("truetype");
  }
`;
