import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    background: ${props => props.theme.colors.background};
  }
  *, button, input{
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    color: ${props => props.theme.colors.text};
  }
  ul{
    list-style: none;
  }
`;
