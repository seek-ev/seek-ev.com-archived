import React from 'react'

// Styles
import { Wrapper, Loading } from './styles'

// Components
import { Noise } from './types/noise'
import { Range } from './types/range'
import { Weight } from './types/weight'
import { Banana } from './types/banana'
import { Acceleration } from './types/acceleration'

const VersionTable = ({ tests, type, loading }) => {
    const TYPES = {
        noise: <Noise tests={tests} />,
        range: <Range tests={tests} />,
        weight: <Weight tests={tests} />,
        bananaBox: <Banana tests={tests} />,
        acceleration: <Acceleration tests={tests} />
    }
    return (
        <Wrapper>
            {loading ?
                <Loading>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loading>
                : TYPES[type]}
        </Wrapper>
    )
}

export { VersionTable }
