import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"


// Pages
import Car from '../pages/Car'
import ToS from '../pages/ToS'
import Home from '../pages/Home'
import User from '../pages/User'
import Login from '../pages/Login'
import Brand from '../pages/Brand'
import NotFound from '../pages/404'
import UserCars from '../pages/Cars'
import NewCar from '../pages/Cars/New'
import UserCar from '../pages/Cars/_id'
import Register from '../pages/Register'
import Settings from '../pages/Settings'
import UserRequests from '../pages/Requests'
import ResetConfirm from '../pages/ResetConfirm'
import ResetPassword from '../pages/ResetPassword'
import ResetSuccess from '../pages/ResetPassword/Success'
import ResetConfirmSuccess from '../pages/ResetConfirm/Success'

// Import store
import store from '../store'

// Components
import { Snackbar } from '../components/notifications/snackbar'
import { PublicRoute } from '../Routes/Public'
import { PrivateRoute } from '../Routes/Private'

const auth = store.getState().auth

class App extends React.Component {
  render() {
    if (auth.logout) {
      return <Redirect to='/login' />
    }
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/terms" component={ToS} />
          <Route exact path="/b/:name" component={Brand} />
          <Route exact path="/u/:username" component={User} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/cars" component={UserCars} />
          <PrivateRoute exact path="/cars/new" component={NewCar} />
          <PrivateRoute exact path="/cars/:id" component={UserCar} />
          <PublicRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <PrivateRoute exact path="/requests" component={UserRequests} />
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
