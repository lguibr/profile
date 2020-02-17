import React from 'react'
import * as ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import { ThemeProvider } from 'styled-components'

import AppRouter from 'app/pages/AppRouter'
import theme from 'app/helpers/theme'

const App = () => {
  // load fonts
  WebFont.load({
    google: {
      families: [
        'Roboto Mono:300,400,500',
        'Roboto:300,400,500',
        'Roboto:300,400,500',
        'Roboto Condensed:300,400,700',
        'Montserrat: 300,400,500',
      ],
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement)
} else {
  ReactDOM.render(<App />, rootElement)
}
