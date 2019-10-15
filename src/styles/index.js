import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: border-box;
  }

  img {
    display: block;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  #root {
    min-height: 100vh;
  }
`

export const ContentPage = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const theme = {
  colors: {
    red: '#FF0000',
    white: '#FFFFFF',
    gray: ['#444444', '#888888', '#ababab', '#d9d9d9', '#cecece', '#fafafa'],
  }
}