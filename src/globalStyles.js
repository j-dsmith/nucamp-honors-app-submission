import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body > #root {
  height: 100vh;
  width: 100vw
}

.grid-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 10px
}

.column {
  background-color: rgba(0,0,0,0.2);
  grid-row-start: span 4;

}
`;

export default GlobalStyle;
