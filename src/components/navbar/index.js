import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Styles
import './navbar.sass'

// Components
import { Button } from 'components/basic/button'
import { NavMenu } from './nav-menu'
import { NavLogo } from './nav-logo'
import { SearchBar } from './nav-search'
import { NavProfile } from './nav-profile'


const Navbar = () => {
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    return (
        <div className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <NavLogo />
                </Link>
            </div>

            <div className="nav-middle">
                <SearchBar />
            </div>

            <div className={auth && auth.isLogged === true ? 'nav-right' : 'nav-hidden'}>
                <NavProfile avatar={user ? user.avatar : null} username={user ? user.username : null} />
                <NavMenu />
            </div>

            <div className={auth && auth.isLogged === true ? 'nav-hidden' : 'nav-right'}>
                <Link to="/register" className="nav-hidden-medium">
                    <Button text="Register" clean />
                </Link>

                <Link to="/login">
                    <Button text="Login" primary />
                </Link>

            </div>
        </div>
    )
}

export { Navbar }