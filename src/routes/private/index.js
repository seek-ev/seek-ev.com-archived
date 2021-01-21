import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector(state => state.auth.isLogged)
    return (
        <Route {...rest} render={(props) => (
            isLogged === true
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export { PrivateRoute }