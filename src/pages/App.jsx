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
import { CarsPage } from 'pages/cars'
import { NewCarPage } from 'pages/cars/new'
import { UserCarPage } from 'pages/cars/_id'
import { RegisterPage } from 'pages/register'
import { SettingsPage } from 'pages/settings'
import { TermsPage } from 'pages/terms'
import { RequestsPage } from 'pages/requests'
import { ResetConfirmPage } from 'pages/reset-confirm'
import { ResetPasswordPage } from 'pages/reset-password'
import ResetSuccess from 'pages/reset-password/success'
import ResetConfirmSuccess from 'pages/reset-confirm/success'

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
          <PrivateRoute exact path="/cars" component={CarsPage} />
          <PrivateRoute exact path="/cars/new" component={NewCarPage} />
          <PrivateRoute exact path="/cars/:id" component={UserCarPage} />
          <PublicRoute exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/settings" component={SettingsPage} />
          <PrivateRoute exact path="/requests" component={RequestsPage} />
          <PublicRoute exact path="/reset-password" component={ResetPasswordPage} />
          <PublicRoute exact path="/reset-password/success" component={ResetSuccess} />
          <PublicRoute exact path="/reset/success" component={ResetConfirmSuccess} />
          <PublicRoute path="/reset" component={ResetConfirmPage} />
          <Route exact path="/:model" component={CarPage} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Snackbar />
      </Router>
    )
  }
}

export default App
