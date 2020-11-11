import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Styles
import './navbar.sass'

// Components
import { TOSLogo } from './logo'
import { Button } from '../../basic/button'

const TOSNavbar = (props) => {
    const auth = useSelector(state => state.auth)

    return (
        <div className="tos-navbar">
            <TOSLogo />

            <div className={auth && auth.isLogged === true ? 'tos-button' : 'hide-logout'}>
                <Link to="/">
                    <Button text="Home" primary round raise />
                </Link>
            </div>

            <div className={auth && auth.isLogged === true ? 'hide-logout' : 'tos-button'}>
                <Link to="/login">
                    <Button text="Login" primary round raise />
                </Link>
            </div>
        </div>
    )
}

export { TOSNavbar }