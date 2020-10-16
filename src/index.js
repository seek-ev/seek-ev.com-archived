import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

// Redux
import { Provider } from 'react-redux'
import store from "./store";

// Styles
import './index.sass'

// APP
import App from './pages/App'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/v1' : 'https://api.seek-ev.com/v1'

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
