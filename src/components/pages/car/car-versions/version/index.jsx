import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Title, Description } from './styles'

const CarVersion = (props) => {
    const [version, setVersion] = useState({})

    useEffect(() => {
        if (props.version) setVersion(props.version)
    }, [props.version])

    return (
        <Wrapper>
            <Title>
                {version.name}
            </Title>
            {version.description ? <Description>{version.description}</Description> : ''}
        </Wrapper>
    )
}

export { CarVersion }