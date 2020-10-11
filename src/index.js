import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'


// Styles
import './index.sass'

// APP
import App from './pages/App'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/v1' : 'https://api.seek-ev.com/'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
