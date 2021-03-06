import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .primary-color{
    color: ${({ theme }) => theme.colors.primary};
  }

`

export default GlobalStyle
