import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme, GlobalStyle } from './services/theme'
import { AppContext } from './context'
import { Routes } from './routes'

function App() {
  return (
    <AppContext>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </AppContext>
  )
}

export default App
