import React from 'react'

// Styles
import { Wrapper, Title, Year, Concept } from './styles'

const VersionDetails = ({ details }) => {
    return (
        <Wrapper>
            <Title>{details.timeline.car.brand.shortName} {details.timeline.car.model} - {details.name}</Title>
            <Year >{details.timeline.year}</Year>
            <Concept display={details.timeline.car.concept.toString()}>Concept car</Concept>
        </Wrapper>
    )
}

export { VersionDetails }