import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { LandingLogo } from './logo'
import { Welcoming } from './welcoming'

const Left = () => {
    return (
        <Wrapper>
            <LandingLogo />
            <Welcoming />
        </Wrapper>
    )
}

export { Left }