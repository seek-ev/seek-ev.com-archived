import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// Store
import store from '../../store'

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.getState().auth.isLogged === false
            ? <Component {...props} />
            : <Redirect to='/home' />
    )} />
)

export { PublicRoute }