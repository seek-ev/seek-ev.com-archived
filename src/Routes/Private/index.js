import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// Store
import store from '../../store'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.getState().auth.isLogged === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export { PrivateRoute }