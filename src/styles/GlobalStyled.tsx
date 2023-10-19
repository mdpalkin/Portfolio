import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

 a {
   text-decoration: none;
 }
 
 ul {
   list-style: none;
 }
 
 button {
   border: none;
   background-color: unset;
 }
 
`;