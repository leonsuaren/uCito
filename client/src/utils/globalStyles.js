import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  p, a, h1, h2, h3, h4, h5, h6, span {
    color: ${props => props.theme.primaryThemecolor};
    font-family: 'Alkatra', cursive;
  }
`;