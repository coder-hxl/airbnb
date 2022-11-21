import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'

import App from './App'
import store from './store'
import theme from './assets/theme'

import 'normalize.css'
import 'antd/dist/antd.less'
import '@/assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={createTheme()}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
)
