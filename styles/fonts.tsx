import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: poppins;
  src: url("/assets/fonts/Poppins-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: poppins;
  src: url("/assets/fonts/Poppins-Bold.ttf");
  font-style: bold;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: poppins;
  src: url("/assets/fonts/Poppins-ExtraBold.ttf");
  font-style: bolder;
  font-weight: 900;
  font-display: swap;
}

@font-face {
  font-family: poppins;
  src: url("/assets/fonts/Poppins-Italic.ttf");
  font-style: italic;
  font-weight: 940000;
  font-display: swap;
}`;
