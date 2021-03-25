import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { Head } from './head'
import { Animation } from './animation'

const Landing = () => {
    return (
        <Wrapper>
            <Animation />
            <Head />
        </Wrapper>
    )
}

export { Landing }