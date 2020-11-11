import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom"

// Pages
import Car from '../pages/Car'
import Home from '../pages/Home'
import User from '../pages/User'
import ToS from '../pages/ToS'
import Login from '../pages/Login'
import Brand from '../pages/Brand'
import NotFound from '../pages/404'
import Register from '../pages/Register'
import Settings from '../pages/Settings'
import ResetConfirm from '../pages/ResetConfirm'
import ResetPassword from '../pages/ResetPassword'
import ResetSuccess from '../pages/ResetPassword/Success'
import ResetConfirmSuccess from '../pages/ResetConfirm/Success'

// Components
import { Snackbar } from '../components/notifications/snackbar'
import { PublicRoute } from '../Routes/Public'
import { PrivateRoute } from '../Routes/Private'

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/terms" component={ToS} />
          <Route exact path="/b/:name" component={Brand} />
          <Route exact path="/u/:username" component={User} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <PublicRoute exact path="/reset-password" component={ResetPassword} />
          <PublicRoute exact path="/reset-password/success" component={ResetSuccess} />
          <PublicRoute exact path="/reset/success" component={ResetConfirmSuccess} />
          <PublicRoute path="/reset" component={ResetConfirm} />
          <Route exact path="/:model" component={Car} />

          <Route path='*' component={NotFound} />
        </Switch>
        <Snackbar />
      </main>
    )
  }
}

export default App
