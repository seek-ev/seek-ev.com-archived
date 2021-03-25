import React from 'react'

// Styles
import { Wrapper, Row } from './styles'

// Components
import { Nav } from './nav'
import { Illu } from './illu'
import { Welcome } from './welcome'

const Head = () => {
    return (
        <Wrapper>
            <Nav />
            <Row>
                <Illu />
                <Welcome />
            </Row>
        </Wrapper>
    )
}

export { Head }