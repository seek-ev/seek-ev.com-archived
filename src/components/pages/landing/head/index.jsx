import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { LandingLogo } from './logo'
import { Welcoming } from './welcoming'

const Head = () => {
    return (
        <Wrapper>
            <LandingLogo />
            <Welcoming />
        </Wrapper>
    )
}

export { Head }