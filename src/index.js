import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Import axios
import './plugins/axios'

// Redux
import { Provider } from 'react-redux'
import store from "./store";

// Styles
import './index.sass'

// APP
import App from './pages/App'

// Actions
import { readAuth } from './actions/auth'

store.dispatch(readAuth())

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
