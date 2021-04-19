import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { Head } from './head'
import { Animation } from './animation'
import { LandingBody } from './body'

const Landing = () => {
    return (
        <Wrapper>
            <Animation />
            <Head />
            <LandingBody />
        </Wrapper>
    )
}

export { Landing }