import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { Nav } from './nav'
import { Illu } from './illu'
import { Welcome } from './welcome'

const Head = () => {
    return (
        <Wrapper>
            <Nav />
            <Welcome />
            <Illu />
        </Wrapper>
    )
}

export { Head }