import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { TestVersion } from './version'
import { TestContent } from './content'

const Test = ({ test }) => {
    return (
        <Wrapper>
            <TestVersion version={test.version} />
            <TestContent content={test.test} type={test.type} />
        </Wrapper>
    )
}

export { Test }