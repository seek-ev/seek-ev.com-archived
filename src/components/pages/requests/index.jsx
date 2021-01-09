import React from 'react'

// Styles
import { Wrapper, Title } from './styles'

// Components
import { RequestsList } from './list'

const Requests = ({ requests }) => {
    return (
        <Wrapper>
            <Title>Your requests</Title>
            <RequestsList requests={requests} />
        </Wrapper>
    )
}

export { Requests }