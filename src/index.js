import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components/macro'

// Styles
import { GlobalStyles } from 'assets/global'
import { lightTheme } from 'assets/themes'

// Import axios
import './plugins/axios'

// Redux
import { Provider } from 'react-redux'
import store from "./store"

// APP
import App from './pages/App'

// Actions
import { authUser } from './actions/auth'
import { readUser } from './actions/user'

// Dispatch actions to read user and check if user is logged
store.dispatch(authUser())
store.dispatch(readUser())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
