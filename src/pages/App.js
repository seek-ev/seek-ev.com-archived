import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

// Pages
import NotFound from '../pages/404'
import Home from '../pages/Home'
import Login from '../pages/Login'

// Components
import Snackbar from '../components/notifications/snackbar'

class App extends React.Component {
  render() {
    return (
      <main>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path='*' component={NotFound} />
        </Switch>
        
        <Snackbar />
      </main>
    )
  }
}

export default App
