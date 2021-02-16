import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { Test } from './test'

const TestsList = ({ tests }) => {
    return (
        <Wrapper>
            {tests.map((t) => { return <Test test={t} key={t.id} /> })}
        </Wrapper>
    )
}

export { TestsList }