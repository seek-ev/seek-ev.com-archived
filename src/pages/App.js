import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

// Pages
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/404'
import ResetPassword from '../pages/ResetPassword'
import ResetSuccess from '../pages/ResetPassword/Success'

// Components
import Snackbar from '../components/notifications/snackbar'

class App extends React.Component {
  render() {
    return (
      <main>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/reset-password/success"  component={ResetSuccess} />
          <Route path='*' component={NotFound} />
        </Switch>
        
        <Snackbar />
      </main>
    )
  }
}

export default App
