import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


    body {
        background: ${(props) => props.theme['backgroundColor']};
        color: ${(props) => props.theme.textColor};
    }

    body, input textarea, button {
        margin: 0px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

     lightTheme {
        backgroundColor: '#ffffff',
        textColor: '#333333',
      }
      
       darkTheme {
        backgroundColor: '#333333',
        textColor: '#ffffff',
    }
`
