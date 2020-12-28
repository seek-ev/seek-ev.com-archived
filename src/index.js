import React from 'react'
import ReactDOM from 'react-dom'

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
import { authUser } from './actions/auth'
import { readUser } from './actions/user'

// Helmet for meta tags
import { Helmet } from 'react-helmet'


// Dispatch actions to read user and check if user is logged
store.dispatch(authUser())
store.dispatch(readUser())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Helmet>
        <title>Seek EV</title>
        <meta name="description" content="Seek EV is a place where you can find everything about every existing electric vehicle" />
      </Helmet>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
