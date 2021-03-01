import React from 'react'

// Styles
import { Wrapper, Background, ResultTitle } from './styles'

const Result = ({ result, nextStep }) => {
    return (
        <Wrapper onClick={() => nextStep(result)}>
            <Background src={result.version.timeline.car.pictures.length > 0 ? result.version.timeline.car.pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={result.id} />
            <ResultTitle>{result.version.timeline.car.brand.shortName} {result.version.timeline.car.model} - {result.version.timeline.year} {result.version.name}</ResultTitle>
        </Wrapper>
    )
}

export { Result }