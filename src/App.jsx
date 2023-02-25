import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { defaultTheme } from './styles/theme/default'
import { ThemeProvider } from 'styled-components'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
