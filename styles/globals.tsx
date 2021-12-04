import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --light-blue: #c8faff;
  --blue: #1ba7c0;
  --dark-blue: #137b86;
  --brown: #c0601b;
  --dark-brown: #864313;
  --light: #f6fdfe;
  --dark: #0d0d0d;
  --tiny-space: 0.15rem;
  --small-space: 0.25rem;
  --med-space: 0.5rem;
  --large-space: 1rem;
  --full-width-space: 100%;
  --meta-font: 0.8rem;
  --reg-font: 1rem;
  --head-font: 1.4rem;
  --shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  --radius-small: 0.3rem;
  --radius-med: 0.6rem;
  --radius-large: 1rem;
  --vh: 1vh;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: poppins, sans-serif;
  overflow-x: hidden;
  background: linear-gradient(45deg, var(--light), var(--light-blue));
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  appearance: none;
  background: none;
  border: none;
}

* {
  box-sizing: inherit;
}

section {
  margin: var(--large-space) 0;
}
`;
