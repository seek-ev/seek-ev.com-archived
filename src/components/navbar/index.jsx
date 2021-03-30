import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Styles
import { Wrapper, NavLeft, NavMiddle, NavRight } from './styles'

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
        <Wrapper>
            <NavLeft>
                <Link to="/home">
                    <NavLogo />
                </Link>
            </NavLeft>

            <NavMiddle>
                <SearchBar />
            </NavMiddle>

            {auth && auth.isLogged === true ?
                <NavRight>
                    <NavProfile avatar={user ? user.avatar : null} username={user ? user.username : null} />
                    <NavMenu />
                </NavRight> :
                <NavRight>
                    <Link to="/register"><Button text="Register" clean /></Link>
                    <Link to="/login"><Button text="Login" primary /></Link>
                </NavRight>
            }
        </Wrapper>
    )
}

export { Navbar }