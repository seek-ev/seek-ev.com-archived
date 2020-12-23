import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Styles
import './navbar.sass'

// Components
import { TermsLogo } from './logo'
import { Button } from 'components/basic/button'

const TermsNavbar = () => {
    const auth = useSelector(state => state.auth)

    return (
        <div className="tos-navbar">
            <TermsLogo />

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

export { TermsNavbar }