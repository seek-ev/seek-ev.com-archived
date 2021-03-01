import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { VersionPicture } from './picture'
import { VersionDetails } from './details'

const TestVersion = ({ version }) => {
    return (
        <Wrapper>
            <VersionPicture pictures={version.timeline.car.pictures} />
            <VersionDetails details={version} />
        </Wrapper>
    )
}

export { TestVersion }