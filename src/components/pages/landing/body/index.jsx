import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { FindSection } from './sections/find'
import { DataSection } from './sections/data'
import { CompareSection } from './sections/compare'

const LandingBody = () => {
    return (
        <Wrapper>
            <FindSection />
            <DataSection />
            <CompareSection />
        </Wrapper>
    )
}

export { LandingBody }