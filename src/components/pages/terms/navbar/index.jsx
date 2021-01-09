import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Styles
import { Navbar, TermsButton } from './style'

// Components
import { TermsLogo } from './logo'

const TermsNavbar = () => {
    const auth = useSelector(state => state.auth)

    return (
        <Navbar>
            <TermsLogo />
            {auth && auth.isLogged === true ? <Link to="/">
                <TermsButton text="Home" primary round raise />
            </Link>
                :
                <Link to="/login">
                    <TermsButton text="Login" primary round raise />
                </Link>}
        </Navbar>
    )
}

export { TermsNavbar }