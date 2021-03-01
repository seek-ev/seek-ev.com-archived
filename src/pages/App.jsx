import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Pages
import { Home } from 'pages/home'
import { CarPage } from 'pages/car'
import { NotFound } from 'pages/404'
import { CarsPage } from 'pages/cars'
import { UserPage } from 'pages/user'
import { TestsPage } from 'pages/tests'
import { TermsPage } from 'pages/terms'
import { LoginPage } from 'pages/login'
import { BrandPage } from 'pages/brand'
import { TestPage } from 'pages/tests/_id'
import { LandingPage } from 'pages/landing'
import { RegisterPage } from 'pages/register'
import { SettingsPage } from 'pages/settings'
import { NewTestPage } from 'pages/tests/new'
import { ResetConfirmPage } from 'pages/reset-confirm'
import { ResetPasswordPage } from 'pages/reset-password'
import { ResetSuccess } from 'pages/reset-password/success'
import { ResetConfirmSuccess } from 'pages/reset-confirm/success'

// Components
import { Snackbar } from 'components/notifications/snackbar'
import { PrivateRoute } from 'routes/private'
import { PublicRoute } from 'routes/public'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/b/:name" component={BrandPage} />
          <Route exact path="/u/:username" component={UserPage} />
          <PrivateRoute exact path="/cars" component={CarsPage} />
          <PublicRoute exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/tests" component={TestsPage} />
          <PrivateRoute exact path="/tests/:id" component={TestPage} />
          <PublicRoute exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/settings" component={SettingsPage} />
          <PrivateRoute exact path="/tests/new" component={NewTestPage} />
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
