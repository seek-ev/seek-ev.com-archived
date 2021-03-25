import React from 'react'

// Styles
import { Wrapper, Buttons, LandingButton } from './styles'

// Components
import { LandingLogo } from './logo'

const Nav = () => {
    return (
        <Wrapper>
            <LandingLogo />

            <Buttons>
                <LandingButton to="/register">Sign up</LandingButton>
                <LandingButton to="/login">Sign in</LandingButton>
            </Buttons>
        </Wrapper>
    )
}

export { Nav }