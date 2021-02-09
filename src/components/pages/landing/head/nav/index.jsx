import React from 'react'

// Styles
import { Wrapper, LandingButton } from './styles'

// Components
import { LandingLogo } from './logo'

const Nav = () => {
    return (
        <Wrapper>
            <LandingButton to="/register">Sign up</LandingButton>
            <LandingLogo />
            <LandingButton to="/login">Sign in</LandingButton>
        </Wrapper>
    )
}

export { Nav }