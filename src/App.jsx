import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { defaultTheme } from './styles/theme/default'
import { AppStyleContainer } from './styles/appStyle'
import { ThemeProvider } from 'styled-components'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppStyleContainer>
          <Router />
        </AppStyleContainer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
