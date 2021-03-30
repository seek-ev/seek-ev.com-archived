import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { Wrapper, Buttons, LandingButton } from './styles'

// Components
import { LandingLogo } from './logo'

const Nav = () => {
    return (
        <Wrapper>
            <Link to="/home">
                <LandingLogo />
            </Link>

            <Buttons>
                <LandingButton to="/register">Sign up</LandingButton>
                <LandingButton to="/login">Sign in</LandingButton>
            </Buttons>
        </Wrapper>
    )
}

export { Nav }