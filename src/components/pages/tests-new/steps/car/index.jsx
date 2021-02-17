import React from 'react'

// Styles
import {
    Wrapper
} from './styles'

// Components
import { Results } from './results'
import { Owned } from './owned'

const CarStep = () => {
    return (
        <Wrapper>
            <Owned />
            <Results />
        </Wrapper>
    )
}

export { CarStep }