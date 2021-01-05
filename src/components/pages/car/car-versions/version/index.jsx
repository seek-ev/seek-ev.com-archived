import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Title, Description, Details } from './styles'

// Components
import { VersionSpec } from './spec'

const CarVersion = (props) => {
    const [version, setVersion] = useState({ spec: {} })

    useEffect(() => {
        if (props.version) setVersion(props.version)
    }, [props.version])

    return (
        <Wrapper>
            <Title>
                {version.name}
            </Title>
            <Description>{version.description}</Description>
            <Details>
                <VersionSpec spec={version.spec} />
            </Details>
        </Wrapper>
    )
}

export { CarVersion }   