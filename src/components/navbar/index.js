import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Styles
import './navbar.sass'

// Components
import Button from '../basic/button'
import { NavMenu } from './nav-menu'
import { NavLogo } from './nav-logo'
import { SearchBar } from './nav-search'
import { NavProfile } from './nav-profile'


const Navbar = (props) => {
    // This will be replaced by redux
    const [username, setUsername] = useState(null)

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('s_user'))

        if (storage) setUsername(storage.username)

        return
    }, [])


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

            <div className={username ? 'nav-right' : 'nav-hidden'}>
                <NavProfile username={username} />
                <NavMenu />
            </div>

            <div className={username ? 'nav-hidden' : 'nav-right'}>
                <Link to="/register">
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