import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { Noise } from './noise'
import { Range } from './range'
import { Weight } from './weight'
import { Banana } from './banana'
import { Acceleration } from './acceleration'

const Table = ({ tests, type }) => {
    const TYPES = {
        noise: <Noise tests={tests} />,
        range: <Range tests={tests} />,
        weight: <Weight tests={tests} />,
        bananaBox: <Banana tests={tests} />,
        acceleration: <Acceleration tests={tests} />
    }

    return (
        <Wrapper>
            {TYPES[type]}
        </Wrapper>
    )
}

export { Table }