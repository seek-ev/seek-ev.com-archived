import React from 'react'

// Styles
import { Wrapper } from './styles'

const TestsList = ({ tests }) => {
    return (
        <Wrapper>
            {tests.map((t) => { return <div>{JSON.stringify(t)}</div> })}
        </Wrapper>
    )
}

export { TestsList }