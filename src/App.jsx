import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/global'
import { Router } from './components/Router'
import { defaultTheme } from './components/styles/themes/default'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme} >
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
