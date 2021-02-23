import React from 'react'

// Styles
import { Wrapper, Background, ResultTitle } from './styles'

const Result = ({ result, next }) => {
    return (
        <Wrapper onClick={() => next(result)}>
            <Background src={result.pictures.length > 0 ? result.pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={result.id} />
            <ResultTitle>{result.model}</ResultTitle>
        </Wrapper>
    )
}

export { Result }