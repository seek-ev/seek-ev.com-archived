import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Import axios
import './plugins/axios'

// Redux
import { Provider } from 'react-redux'
import store from "./store"

// Styles
import './index.sass'

// APP
import App from './pages/App'

// Actions
import { readUser } from './actions/user'
import { readAuth } from './actions/auth'


// Dispatch actions to read user and check if user is logged

store.dispatch(readAuth())
store.dispatch(readUser())

window.addEventListener('beforeunload', function (e) {
  const state = store.getState().auth
  window.localStorage.setItem('a_token', JSON.stringify(state.token))
  window.localStorage.setItem('r_token', JSON.stringify(state.r_token))
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
