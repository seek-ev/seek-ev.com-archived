import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Pages
import { CarPage } from 'pages/car'
import { Home } from 'pages/home'
import { UserPage } from 'pages/user'
import { LoginPage } from 'pages/login'
import { BrandPage } from 'pages/brand'
import NotFound from 'pages/404'
import UserCars from 'pages/cars'
import NewCar from 'pages/cars/new'
import UserCar from 'pages/cars/_id'
import Register from 'pages/register'
import { SettingsPage } from 'pages/settings'
import { TermsPage } from 'pages/terms'
import UserRequests from 'pages/requests'
import ResetConfirm from 'pages/resetconfirm'
import ResetPassword from 'pages/resetpassword'
import ResetSuccess from 'pages/resetpassword/success'
import ResetConfirmSuccess from 'pages/resetconfirm/success'

// Components
import { Snackbar } from 'components/notifications/snackbar'
import { PublicRoute } from 'routes/public'
import { PrivateRoute } from 'routes/private'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/b/:name" component={BrandPage} />
          <Route exact path="/u/:username" component={UserPage} />
          <PublicRoute exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/cars" component={UserCars} />
          <PrivateRoute exact path="/cars/new" component={NewCar} />
          <PrivateRoute exact path="/cars/:id" component={UserCar} />
          <PublicRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/settings" component={SettingsPage} />
          <PrivateRoute exact path="/requests" component={UserRequests} />
          <PublicRoute exact path="/reset-password" component={ResetPassword} />
          <PublicRoute exact path="/reset-password/success" component={ResetSuccess} />
          <PublicRoute exact path="/reset/success" component={ResetConfirmSuccess} />
          <PublicRoute path="/reset" component={ResetConfirm} />
          <Route exact path="/:model" component={CarPage} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Snackbar />
      </Router>
    )
  }
}

export default App
