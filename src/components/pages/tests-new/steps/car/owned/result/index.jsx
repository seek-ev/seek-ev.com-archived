import React from 'react'

// Styles
import { Wrapper, Background, ResultTitle } from './styles'

const Result = ({ result }) => {
    return (
        <Wrapper>
            <Background src={result.version.timeline.car.pictures.length > 0 ? result.version.timeline.car.pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={result.id} />
            <ResultTitle>{result.version.timeline.car.model}</ResultTitle>
        </Wrapper>
    )
}

export { Result }