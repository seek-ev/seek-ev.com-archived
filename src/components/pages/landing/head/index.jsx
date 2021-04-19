import React from 'react'

// Styles
import { Wrapper, Row, Bottom, Text, SlideIcon } from './styles'

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

            <Bottom>
                <Text>Scroll down</Text>
                <SlideIcon />
            </Bottom>
        </Wrapper>
    )
}

export { Head }