import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${themes.colors.background};
    color: ${themes.colors.text};
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
